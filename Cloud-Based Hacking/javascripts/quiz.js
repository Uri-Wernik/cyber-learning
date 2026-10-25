(() => {
  const QUIZ_SELECTOR = "[data-quiz-app], [data-lesson-quiz]";
  const STORAGE_KEY = "cyber-learning-quiz-v1";
  const DEFAULT_EXAM_LENGTH = 10;
  const LESSON_PATHS = [
    "01-introduction-to-cloud-computing-for-hackers/01-teaser/",
    "01-introduction-to-cloud-computing-for-hackers/02-introduction-to-hacking-using-the-cloud/",
    "01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud/",
    "01-introduction-to-cloud-computing-for-hackers/04-why-learn-cloud-computing-as-a-hacker/",
    "02-cloud-basics/05-introduction-to-cloud-basics/",
    "02-cloud-basics/06-signing-up-with-aws/",
    "02-cloud-basics/07-installing-kali-linux-on-the-cloud/",
    "02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh/",
    "02-cloud-basics/09-linux-terminal-basics/",
    "03-phishing/10-introduction-to-phishing/",
    "03-phishing/11-file-hosting-and-firewall-settings/",
    "03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud/",
    "03-phishing/13-creating-a-fake-login-page-on-the-cloud/",
    "03-phishing/14-modifying-the-page-to-steal-login-information/",
    "03-phishing/15-stealing-facebook-login-using-an-identical-fake-login-page/",
    "03-phishing/16-domain-name-and-dns-basics/",
    "03-phishing/17-linking-domain-names-to-phishing-pages/",
    "03-phishing/18-introduction-to-https/",
    "03-phishing/19-enabling-https-on-phishing-pages/",
    "blue-team/01-da-exposicao-a-investigacao/",
    "04-phishing-bypassing-2fa-mfa/20-introduction-to-evilginx/",
    "04-phishing-bypassing-2fa-mfa/21-installing-evilginx-on-the-cloud/",
    "04-phishing-bypassing-2fa-mfa/22-bypassing-2fa-mfa/",
  ];
  const EXAM_DIFFICULTY = "easy";
  const EXAM_DESCRIPTION =
    "Conceitos, siglas e funções essenciais das 22 aulas.";
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

  const getAppRoot = () => {
    const manifest = document.querySelector('link[rel="manifest"]');
    return manifest
      ? new URL("./", manifest.href)
      : new URL("/cyber-learning/", window.location.origin);
  };

  const getLessonUrl = (source) => new URL(source, getAppRoot()).href;

  const getLessonQuizUrl = (source) => {
    const url = new URL("quiz/", getAppRoot());
    url.searchParams.set("lesson", source);
    return url.href;
  };

  const getNextLessonPath = (source) => {
    const currentIndex = LESSON_PATHS.indexOf(source);
    return currentIndex >= 0 ? LESSON_PATHS[currentIndex + 1] || null : null;
  };

  const getExamBestKey = (level, count) => `${level}:${count}`;
  const formatQuestionCount = (count) =>
    `${count} ${count === 1 ? "questão" : "questões"}`;

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
      const requestedLessonPath = new URLSearchParams(window.location.search).get(
        "lesson"
      );
      const isQuizPage = root.hasAttribute("data-quiz-app");
      this.isStandaloneLessonQuiz =
        isQuizPage &&
        Boolean(requestedLessonPath) &&
        questions.some(
          (question) =>
            question.scope === "lesson-fixation" &&
            question.source === requestedLessonPath
        );
      this.hasInvalidLessonRequest =
        isQuizPage &&
        Boolean(requestedLessonPath) &&
        !this.isStandaloneLessonQuiz;
      this.isLessonQuiz =
        root.hasAttribute("data-lesson-quiz") || this.isStandaloneLessonQuiz;
      this.lessonPath = root.dataset.lessonPath || requestedLessonPath || "";
      this.lessonQuestions = questions.filter(
        (question) =>
          question.source === this.lessonPath &&
          question.scope === "lesson-fixation"
      );
      this.examQuestions = questions.filter(
        (question) => question.scope === "exam"
      );
      this.progress = readProgress();
      this.selectedLevel = EXAM_DIFFICULTY;
      this.selectedCount = Number.isInteger(this.progress.lastCount)
        ? this.progress.lastCount
        : DEFAULT_EXAM_LENGTH;
      this.sessionQuestions = [];
      this.answers = [];
      this.currentIndex = 0;
      this.score = 0;
      this.hasAnswered = false;
      this.normalizeSelectedCount();

      this.root.dataset.quizReady = "true";
      this.root.removeAttribute("aria-labelledby");
      this.root.setAttribute(
        "aria-label",
        this.isLessonQuiz ? "Quiz desta aula" : "Quiz de cibersegurança"
      );
      this.root.addEventListener("click", (event) => this.handleClick(event));
      this.root.addEventListener("change", (event) => this.handleChange(event));
      this.root.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && this.root.classList.contains("is-session-open")) {
          this.closeSession();
        } else if (
          event.key === "Tab" &&
          this.root.classList.contains("is-session-open")
        ) {
          this.trapFocus(event);
        }
      });
      if (this.hasInvalidLessonRequest) {
        this.renderInvalidLesson();
      } else if (this.isStandaloneLessonQuiz) {
        this.startGame();
      } else if (this.isLessonQuiz) {
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
        case "close":
          this.closeSession();
          break;
        case "open-lesson-quiz":
          event.preventDefault();
          window.location.assign(action.href);
          break;
      }
    }

    handleChange(event) {
      if (event.target.name !== "quiz-count") return;

      this.selectedCount = Number.parseInt(event.target.value, 10);
      this.normalizeSelectedCount();

      this.progress.lastLevel = EXAM_DIFFICULTY;
      this.progress.lastCount = this.selectedCount;
      saveProgress(this.progress);
      this.updateStartSummary();
    }

    getExamQuestionPool() {
      return this.examQuestions.filter(
        (question) => question.difficulty === EXAM_DIFFICULTY
      );
    }

    getMaxQuestionCount() {
      return this.getExamQuestionPool().length;
    }

    normalizeSelectedCount() {
      const max = this.getMaxQuestionCount();
      const parsed = Number.parseInt(this.selectedCount, 10);
      const validCount = Number.isFinite(parsed) ? parsed : DEFAULT_EXAM_LENGTH;
      this.selectedCount = Math.min(Math.max(validCount, 1), Math.max(max, 1));
    }

    getExamBest(level, count) {
      return this.progress.examBest?.[getExamBestKey(level, count)];
    }

    getExamBestLabel(level, count) {
      const best = this.getExamBest(level, count);
      return Number.isInteger(best)
        ? `Melhor resultado: ${best}/${count}`
        : `Sem tentativa com ${formatQuestionCount(count)}`;
    }

    buildExamSession(questionPool, count) {
      return shuffle(questionPool).slice(0, count);
    }

    renderInvalidLesson() {
      const examUrl = new URL("quiz/", getAppRoot()).href;
      this.root.innerHTML = `
        <div class="quiz-error" role="alert">
          <strong>Não encontramos o quiz solicitado.</strong>
          <span>O endereço da aula não corresponde a um capítulo publicado.</span>
          <a class="quiz-button quiz-button--primary" href="${escapeHtml(examUrl)}">
            Abrir quiz <span aria-hidden="true">→</span>
          </a>
        </div>`;
    }

    setSessionOpen(isOpen) {
      this.root.classList.toggle("is-session-open", isOpen);
      document.documentElement.classList.toggle("quiz-session-open", isOpen);

      if (isOpen) {
        this.root.setAttribute("role", "dialog");
        this.root.setAttribute("aria-modal", "true");
      } else {
        this.root.removeAttribute("role");
        this.root.removeAttribute("aria-modal");
      }
    }

    trapFocus(event) {
      const focusable = Array.from(
        this.root.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => element.getClientRects().length > 0);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    closeSession() {
      if (this.isStandaloneLessonQuiz) {
        this.setSessionOpen(false);
        window.location.assign(getLessonUrl(this.lessonPath));
        return;
      }

      if (this.isLessonQuiz) {
        this.renderLessonStart();
      } else {
        this.renderStart();
      }

      this.root
        .querySelector('[data-quiz-action="start"]')
        ?.focus({ preventScroll: true });
    }

    renderCloseButton() {
      return `
        <button class="quiz-close" type="button" data-quiz-action="close" aria-label="Fechar quiz" title="Fechar quiz">
          <span aria-hidden="true">×</span>
        </button>`;
    }

    renderLessonStart() {
      this.setSessionOpen(false);
      const lesson = this.lessonQuestions[0]?.lesson || "Esta aula";
      const questionCount = this.lessonQuestions.length;
      const best = this.progress.fixationBest?.[this.lessonPath];
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
            <a class="quiz-button quiz-button--primary" href="${escapeHtml(
              getLessonQuizUrl(this.lessonPath)
            )}" data-quiz-action="open-lesson-quiz">
              Começar <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>`;
    }

    renderStart() {
      this.setSessionOpen(false);
      const availableCount = this.getMaxQuestionCount();

      this.root.innerHTML = `
        <div class="quiz-intro quiz-view">
          <header class="quiz-intro__header">
            <span class="quiz-kicker">Preparação para prova</span>
            <h2 tabindex="-1">Quiz das 22 aulas</h2>
            <p>Escolha a quantidade de perguntas. Cada resposta recebe correção e uma explicação curta.</p>
          </header>

          <div class="quiz-count">
            <label for="quiz-count">
              <strong>Quantidade de questões</strong>
              <span data-quiz-count-help>${availableCount} disponíveis.</span>
            </label>
            <div class="quiz-count__control">
              <input id="quiz-count" name="quiz-count" type="number" min="1" max="${availableCount}" step="1" value="${this.selectedCount}" inputmode="numeric">
              <span data-quiz-count-unit>${this.selectedCount === 1 ? "questão" : "questões"}</span>
            </div>
          </div>

          <div class="quiz-startbar">
            <div class="quiz-startbar__summary" aria-live="polite">
              <strong data-quiz-start-level>${formatQuestionCount(this.selectedCount)}</strong>
              <span data-quiz-start-description>${EXAM_DESCRIPTION}</span>
            </div>
            <button class="quiz-button quiz-button--primary" type="button" data-quiz-action="start">
              Começar quiz <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>`;

      this.root.querySelector(".quiz-intro h2")?.focus({ preventScroll: true });
    }

    updateStartSummary() {
      const countInput = this.root.querySelector('[name="quiz-count"]');
      const availableCount = this.getMaxQuestionCount();
      countInput.max = availableCount;
      countInput.value = this.selectedCount;
      this.root.querySelector("[data-quiz-count-unit]").textContent =
        this.selectedCount === 1 ? "questão" : "questões";
      this.root.querySelector("[data-quiz-count-help]").textContent =
        `${availableCount} disponíveis.`;
      this.root.querySelector("[data-quiz-start-level]").textContent =
        formatQuestionCount(this.selectedCount);
      this.root.querySelector("[data-quiz-start-description]").textContent =
        EXAM_DESCRIPTION;
    }

    startGame() {
      const questionPool = this.isLessonQuiz
        ? this.lessonQuestions
        : this.getExamQuestionPool();
      const sessionLength = this.isLessonQuiz
        ? questionPool.length
        : Math.min(this.selectedCount, questionPool.length);
      const selectedQuestions = this.isLessonQuiz
        ? shuffle(questionPool)
        : this.buildExamSession(questionPool, sessionLength);

      if (selectedQuestions.length === 0) {
        this.root.innerHTML = `
          <div class="quiz-error" role="alert">
            <strong>Não há perguntas disponíveis para esta configuração.</strong>
            <span>Volte à preparação e escolha outra quantidade.</span>
            <button class="quiz-button quiz-button--secondary" type="button" data-quiz-action="levels">
              Voltar à configuração
            </button>
          </div>`;
        return;
      }

      this.sessionQuestions = selectedQuestions.map(prepareQuestion);
      this.answers = [];
      this.currentIndex = 0;
      this.score = 0;
      this.hasAnswered = false;
      if (!this.isLessonQuiz) {
        this.progress.lastLevel = this.selectedLevel;
        this.progress.lastCount = sessionLength;
      }
      saveProgress(this.progress);
      this.setSessionOpen(true);
      this.renderQuestion();
    }

    renderQuestion() {
      const question = this.sessionQuestions[this.currentIndex];
      const currentNumber = this.currentIndex + 1;
      const total = this.sessionQuestions.length;
      const progress = Math.round((this.currentIndex / total) * 100);
      const quizLabel = this.isLessonQuiz
        ? "Quiz da aula"
        : "Quiz final";
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
          ${this.renderCloseButton()}
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
            <p class="quiz-question__hint">Selecione uma alternativa para liberar a explicação.</p>
          </section>

          <aside class="quiz-answer-dock" data-quiz-answer-dock hidden>
            <div class="quiz-feedback" data-quiz-feedback role="status" aria-live="polite"></div>
            <div class="quiz-answer-dock__action">
              <span data-quiz-answer-hint></span>
              <button class="quiz-button quiz-button--primary" type="button" data-quiz-action="next" hidden>
                ${currentNumber === total ? "Ver resultado" : "Continuar"}
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </aside>
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
      const answerDock = this.root.querySelector("[data-quiz-answer-dock]");
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
      answerDock.hidden = false;

      const answerHint = this.root.querySelector("[data-quiz-answer-hint]");
      answerHint.textContent = isCorrect
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
        ? this.progress.fixationBest?.[this.lessonPath] || 0
        : this.getExamBest(this.selectedLevel, total) || 0;
      const best = Math.max(previousBest, this.score);
      if (this.isLessonQuiz) {
        this.progress.fixationBest = {
          ...this.progress.fixationBest,
          [this.lessonPath]: best,
        };
      } else {
        this.progress.examBest = {
          ...this.progress.examBest,
          [getExamBestKey(this.selectedLevel, total)]: best,
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
        : `Quiz com ${formatQuestionCount(total)}. Sua melhor marca nesta configuração é ${best}/${total}.`;
      const nextLessonPath = this.isLessonQuiz
        ? getNextLessonPath(this.lessonPath)
        : null;
      const progressionAction = this.isLessonQuiz
        ? `<a class="quiz-button quiz-button--primary" href="${escapeHtml(
            getLessonUrl(nextLessonPath || "")
          )}">
            ${nextLessonPath ? "Próxima aula" : "Voltar ao início"}
            <span aria-hidden="true">→</span>
          </a>`
        : `<button class="quiz-button quiz-button--primary" type="button" data-quiz-action="restart">
            Jogar novamente <span aria-hidden="true">→</span>
          </button>`;
      const secondaryAction = this.isLessonQuiz
        ? `<button class="quiz-button quiz-button--secondary" type="button" data-quiz-action="restart">
            Refazer quiz
          </button>`
        : `<button class="quiz-button quiz-button--secondary" type="button" data-quiz-action="levels">
            Escolher quantidade
          </button>`;

      this.root.innerHTML = `
        <div class="quiz-result quiz-view">
          ${this.renderCloseButton()}
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
              ${progressionAction}
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