(() => {
  const QUIZ_SELECTOR = "[data-quiz-app], [data-lesson-quiz]";
  const STORAGE_KEY = "cyber-learning-quiz-v1";
  const GENERAL_SESSION_LENGTH = 10;
  const LESSON_SESSION_LENGTH = 5;
  const LEVELS = {
    easy: {
      label: "Fácil",
      description: "Conceitos, siglas e funções essenciais.",
      marker: "01",
    },
    medium: {
      label: "Médio",
      description: "Relações entre componentes e processos.",
      marker: "02",
    },
    hard: {
      label: "Difícil",
      description: "Cenários, limites e raciocínio técnico.",
      marker: "03",
    },
  };
  const OPTION_LABELS = ["A", "B", "C", "D"];

  const escapeHtml = (value) =>
    String(value).replace(
      /[&<>'"]/g,
      (character) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        })[character]
    );

  const shuffle = (items) => {
    const shuffled = [...items];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[index],
      ];
    }

    return shuffled;
  };

  const readProgress = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  };

  const saveProgress = (progress) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // The quiz remains fully usable when storage is unavailable.
    }
  };

  const getLessonUrl = (source) => {
    const manifest = document.querySelector('link[rel="manifest"]');
    const appRoot = manifest
      ? new URL("./", manifest.href)
      : new URL("/cyber-learning/", window.location.origin);

    return new URL(source, appRoot).href;
  };

  const prepareQuestion = (question) => {
    const choices = shuffle(
      question.choices.map((text, index) => ({
        text,
        isCorrect: index === question.correct,
      }))
    );

    return {
      ...question,
      choices: choices.map((choice) => choice.text),
      correct: choices.findIndex((choice) => choice.isCorrect),
    };
  };

  class QuizGame {
    constructor(root, questions) {
      this.root = root;
      this.questions = questions;
      this.isLessonQuiz = root.hasAttribute("data-lesson-quiz");
      this.lessonPath = root.dataset.lessonPath || "";
      this.lessonQuestions = questions.filter(
        (question) => question.source === this.lessonPath
      );
      this.progress = readProgress();
      this.selectedLevel = this.progress.lastLevel || "easy";
      this.sessionQuestions = [];
      this.answers = [];
      this.currentIndex = 0;
      this.score = 0;
      this.hasAnswered = false;

      this.root.dataset.quizReady = "true";
      this.root.removeAttribute("aria-labelledby");
      this.root.setAttribute(
        "aria-label",
        this.isLessonQuiz ? "Quiz desta aula" : "Quiz de cibersegurança"
      );
      this.root.addEventListener("click", (event) => this.handleClick(event));
      this.root.addEventListener("change", (event) => this.handleChange(event));
      if (this.isLessonQuiz) {
        this.renderLessonStart();
      } else {
        this.renderStart();
      }
    }

    handleClick(event) {
      const option = event.target.closest("[data-quiz-option]");
      if (option) {
        this.answerQuestion(Number(option.dataset.quizOption));
        return;
      }

      const action = event.target.closest("[data-quiz-action]");
      if (!action) return;

      switch (action.dataset.quizAction) {
        case "start":
          this.startGame();
          break;
        case "next":
          this.nextQuestion();
          break;
        case "restart":
          this.startGame();
          break;
        case "levels":
          this.renderStart();
          break;
      }
    }

    handleChange(event) {
      if (event.target.name !== "quiz-level") return;

      this.selectedLevel = event.target.value;
      this.progress.lastLevel = this.selectedLevel;
      saveProgress(this.progress);
      this.updateStartSummary();
    }

    renderLessonStart() {
      const lesson = this.lessonQuestions[0]?.lesson || "Esta aula";
      const questionCount = this.lessonQuestions.length;
      const best = this.progress.lessonBest?.[this.lessonPath];
      const bestLabel = Number.isInteger(best)
        ? `Melhor resultado: ${best}/${questionCount}`
        : "Primeira tentativa";

      this.root.innerHTML = `
        <div class="lesson-quiz-intro quiz-view">
          <div class="lesson-quiz-intro__copy">
            <span class="quiz-kicker">Quiz da aula</span>
            <h2 tabindex="-1">Fixe o conteúdo antes de avançar</h2>
            <p>${escapeHtml(lesson)} · ${questionCount} perguntas com correção explicada.</p>
          </div>
          <div class="lesson-quiz-intro__action">
            <span>${bestLabel}</span>
            <button class="quiz-button quiz-button--primary" type="button" data-quiz-action="start">
              Começar <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>`;
    }

    renderStart() {
      const levelOptions = Object.entries(LEVELS)
        .map(([value, level]) => {
          const isChecked = value === this.selectedLevel;
          const best = this.progress.best?.[value];
          const bestLabel = Number.isInteger(best)
            ? `Melhor resultado: ${best}/${GENERAL_SESSION_LENGTH}`
            : "Ainda não jogado";

          return `
            <label class="quiz-level${isChecked ? " is-selected" : ""}">
              <input type="radio" name="quiz-level" value="${value}"${
                isChecked ? " checked" : ""
              }>
              <span class="quiz-level__marker" aria-hidden="true">${level.marker}</span>
              <span class="quiz-level__copy">
                <strong>${level.label}</strong>
                <span>${level.description}</span>
                <small>${bestLabel}</small>
              </span>
            </label>`;
        })
        .join("");

      this.root.innerHTML = `
        <div class="quiz-intro quiz-view">
          <header class="quiz-intro__header">
            <span class="quiz-kicker">Modo de estudo</span>
            <h2 tabindex="-1">Escolha seu desafio</h2>
            <p>São 10 perguntas por rodada. Após cada resposta, você recebe a correção e uma explicação baseada nas aulas.</p>
          </header>

          <fieldset class="quiz-levels">
            <legend>Nível da rodada</legend>
            ${levelOptions}
          </fieldset>

          <div class="quiz-startbar">
            <div class="quiz-startbar__summary" aria-live="polite">
              <strong data-quiz-start-level>${LEVELS[this.selectedLevel].label}</strong>
              <span data-quiz-start-description>${LEVELS[this.selectedLevel].description}</span>
            </div>
            <button class="quiz-button quiz-button--primary" type="button" data-quiz-action="start">
              Começar quiz <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>`;

      this.root.querySelector(".quiz-intro h2")?.focus({ preventScroll: true });
    }

    updateStartSummary() {
      this.root.querySelectorAll(".quiz-level").forEach((level) => {
        const input = level.querySelector("input");
        level.classList.toggle("is-selected", input.checked);
      });

      const selected = LEVELS[this.selectedLevel];
      this.root.querySelector("[data-quiz-start-level]").textContent = selected.label;
      this.root.querySelector("[data-quiz-start-description]").textContent =
        selected.description;
    }

    startGame() {
      const questionPool = this.isLessonQuiz
        ? this.lessonQuestions
        : this.questions.filter(
            (question) => question.difficulty === this.selectedLevel
          );
      const sessionLength = this.isLessonQuiz
        ? LESSON_SESSION_LENGTH
        : GENERAL_SESSION_LENGTH;
      this.sessionQuestions = shuffle(questionPool)
        .slice(0, sessionLength)
        .map(prepareQuestion);
      this.answers = [];
      this.currentIndex = 0;
      this.score = 0;
      this.hasAnswered = false;
      if (!this.isLessonQuiz) this.progress.lastLevel = this.selectedLevel;
      saveProgress(this.progress);
      this.renderQuestion();
    }

    renderQuestion() {
      const question = this.sessionQuestions[this.currentIndex];
      const currentNumber = this.currentIndex + 1;
      const total = this.sessionQuestions.length;
      const progress = Math.round((this.currentIndex / total) * 100);
      const quizLabel = this.isLessonQuiz
        ? "Quiz da aula"
        : LEVELS[this.selectedLevel].label;
      const choices = question.choices
        .map(
          (choice, index) => `
            <button class="quiz-option" type="button" data-quiz-option="${index}">
              <span class="quiz-option__letter" aria-hidden="true">${OPTION_LABELS[index]}</span>
              <span class="quiz-option__text">${escapeHtml(choice)}</span>
              <span class="quiz-option__state" aria-hidden="true"></span>
            </button>`
        )
        .join("");

      this.root.innerHTML = `
        <div class="quiz-play quiz-view">
          <header class="quiz-progress">
            <div class="quiz-progress__meta">
              <span class="quiz-badge">${quizLabel}</span>
              <span>Questão <strong>${currentNumber}</strong> de ${total}</span>
              <span><strong data-quiz-score>${this.score}</strong> acertos</span>
            </div>
            <div class="quiz-progress__track" role="progressbar" aria-label="Progresso do quiz" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${this.currentIndex}">
              <span style="width: ${progress}%"></span>
            </div>
          </header>

          <section class="quiz-question" aria-labelledby="quiz-question-title">
            <span class="quiz-question__topic">${escapeHtml(question.topic)}</span>
            <h2 id="quiz-question-title" tabindex="-1">${escapeHtml(
              question.question
            )}</h2>
            <div class="quiz-options" role="group" aria-labelledby="quiz-question-title">
              ${choices}
            </div>

            <div class="quiz-feedback" data-quiz-feedback role="status" aria-live="polite" hidden></div>

            <footer class="quiz-question__footer">
              <span>Selecione uma resposta para continuar.</span>
              <button class="quiz-button quiz-button--primary" type="button" data-quiz-action="next" hidden>
                ${currentNumber === total ? "Ver resultado" : "Próxima pergunta"}
                <span aria-hidden="true">→</span>
              </button>
            </footer>
          </section>
        </div>`;

      this.root
        .querySelector("#quiz-question-title")
        ?.focus({ preventScroll: true });
    }

    answerQuestion(selectedIndex) {
      if (this.hasAnswered) return;

      const question = this.sessionQuestions[this.currentIndex];
      const isCorrect = selectedIndex === question.correct;
      this.hasAnswered = true;

      if (isCorrect) this.score += 1;

      this.answers.push({
        question,
        selectedIndex,
        isCorrect,
      });

      const optionButtons = this.root.querySelectorAll("[data-quiz-option]");
      optionButtons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.correct) {
          button.classList.add("is-correct");
          button.querySelector(".quiz-option__state").textContent = "Correta";
        } else if (index === selectedIndex) {
          button.classList.add("is-incorrect");
          button.querySelector(".quiz-option__state").textContent = "Sua escolha";
        }
      });

      this.root.querySelector("[data-quiz-score]").textContent = this.score;

      const progressTrack = this.root.querySelector(".quiz-progress__track");
      const completed = this.currentIndex + 1;
      progressTrack.setAttribute("aria-valuenow", completed);
      progressTrack.querySelector("span").style.width = `${Math.round(
        (completed / this.sessionQuestions.length) * 100
      )}%`;

      const feedback = this.root.querySelector("[data-quiz-feedback]");
      const correctChoice = question.choices[question.correct];
      const feedbackTitle = isCorrect
        ? "Resposta correta"
        : `A resposta correta é ${correctChoice}`;
      feedback.classList.add(isCorrect ? "is-correct" : "is-incorrect");
      feedback.innerHTML = `
        <div class="quiz-feedback__mark" aria-hidden="true">${
          isCorrect ? "✓" : "×"
        }</div>
        <div class="quiz-feedback__body">
          <strong>${escapeHtml(feedbackTitle)}</strong>
          <p>${escapeHtml(question.explanation)}</p>
          <a href="${escapeHtml(getLessonUrl(question.source))}">
            ${
              this.isLessonQuiz
                ? "Rever o conteúdo desta aula"
                : `Revisar: ${escapeHtml(question.lesson)}`
            } <span aria-hidden="true">→</span>
          </a>
        </div>`;
      feedback.hidden = false;

      const footerHint = this.root.querySelector(".quiz-question__footer > span");
      footerHint.textContent = isCorrect
        ? "Explicação liberada."
        : "Revise a explicação antes de avançar.";

      const nextButton = this.root.querySelector('[data-quiz-action="next"]');
      nextButton.hidden = false;
      nextButton.focus({ preventScroll: true });
    }

    nextQuestion() {
      if (!this.hasAnswered) return;

      if (this.currentIndex >= this.sessionQuestions.length - 1) {
        this.renderResults();
        return;
      }

      this.currentIndex += 1;
      this.hasAnswered = false;
      this.renderQuestion();
    }

    renderResults() {
      const total = this.sessionQuestions.length;
      const percentage = Math.round((this.score / total) * 100);
      const previousBest = this.isLessonQuiz
        ? this.progress.lessonBest?.[this.lessonPath] || 0
        : this.progress.best?.[this.selectedLevel] || 0;
      const best = Math.max(previousBest, this.score);
      if (this.isLessonQuiz) {
        this.progress.lessonBest = {
          ...this.progress.lessonBest,
          [this.lessonPath]: best,
        };
      } else {
        this.progress.best = {
          ...this.progress.best,
          [this.selectedLevel]: best,
        };
      }
      saveProgress(this.progress);

      const resultMessage =
        percentage >= 90
          ? "Excelente domínio do conteúdo."
          : percentage >= 70
            ? "Boa base. Revise os pontos que faltaram."
            : percentage >= 50
              ? "Você está avançando. Uma revisão vai consolidar a base."
              : this.isLessonQuiz
                ? "Revise esta aula e tente novamente."
                : "Revise as aulas indicadas e tente novamente.";
      const mistakes = this.answers.filter((answer) => !answer.isCorrect);
      const review = mistakes.length
        ? `<div class="quiz-review">
            <h3>Revisão recomendada</h3>
            <div class="quiz-review__list">
              ${mistakes
                .map(
                  ({ question }) => `
                    <a href="${escapeHtml(getLessonUrl(question.source))}">
                      <span>${escapeHtml(question.topic)}</span>
                      <strong>${escapeHtml(
                        this.isLessonQuiz ? question.question : question.lesson
                      )}</strong>
                      <span aria-hidden="true">→</span>
                    </a>`
                )
                .join("")}
            </div>
          </div>`
        : `<p class="quiz-result__perfect">Você acertou todas as perguntas desta rodada.</p>`;
      const context = this.isLessonQuiz
        ? `Quiz desta aula. Sua melhor marca é ${best}/${total}.`
        : `Nível ${LEVELS[this.selectedLevel].label}. Seu melhor resultado neste nível é ${best}/${total}.`;
      const secondaryAction = this.isLessonQuiz
        ? `<a class="quiz-button quiz-button--secondary" href="${escapeHtml(
            getLessonUrl("quiz/")
          )}">Abrir quiz geral</a>`
        : `<button class="quiz-button quiz-button--secondary" type="button" data-quiz-action="levels">
            Trocar nível
          </button>`;

      this.root.innerHTML = `
        <div class="quiz-result quiz-view">
          <div class="quiz-result__main">
            <span class="quiz-kicker">Rodada concluída</span>
            <div class="quiz-result__score" aria-label="${this.score} acertos em ${total} perguntas">
              <strong>${this.score}</strong><span>/${total}</span>
            </div>
            <h2 tabindex="-1">${resultMessage}</h2>
            <p>${context}</p>

            <dl class="quiz-result__stats">
              <div><dt>Acertos</dt><dd>${this.score}</dd></div>
              <div><dt>Aproveitamento</dt><dd>${percentage}%</dd></div>
              <div><dt>Melhor marca</dt><dd>${best}/${total}</dd></div>
            </dl>

            <div class="quiz-result__actions">
              <button class="quiz-button quiz-button--primary" type="button" data-quiz-action="restart">
                ${this.isLessonQuiz ? "Refazer quiz" : "Jogar novamente"} <span aria-hidden="true">→</span>
              </button>
              ${secondaryAction}
            </div>
          </div>
          ${review}
        </div>`;

      this.root.querySelector(".quiz-result h2")?.focus({ preventScroll: true });
    }
  }

  const initQuiz = () => {
    const root = document.querySelector(QUIZ_SELECTOR);
    if (!root || root.dataset.quizReady === "true") return;

    const questions = window.CYBER_QUIZ_QUESTIONS;
    if (!Array.isArray(questions) || questions.length === 0) {
      root.innerHTML = `
        <div class="quiz-error" role="alert">
          <strong>Não foi possível carregar as perguntas.</strong>
          <span>Atualize a página para tentar novamente.</span>
        </div>`;
      return;
    }

    new QuizGame(root, questions);
  };

  if (typeof document$ !== "undefined") {
    initQuiz();
    document$.subscribe(initQuiz);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initQuiz, { once: true });
  } else {
    initQuiz();
  }
})();