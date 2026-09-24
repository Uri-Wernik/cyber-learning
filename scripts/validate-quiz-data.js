const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const repositoryRoot = path.resolve(__dirname, "..");
const docsRoot = path.join(repositoryRoot, "Cloud-Based Hacking");
const dataFiles = [
  path.join(docsRoot, "javascripts", "quiz-fixation-data.js"),
  path.join(docsRoot, "javascripts", "quiz-exam-data.js"),
];
const allowedDifficulties = new Set(["easy", "medium", "hard"]);
const allowedScopes = new Set(["lesson-fixation", "exam"]);
const errors = [];
const context = { window: {} };

vm.createContext(context);

for (const file of dataFiles) {
  if (!fs.existsSync(file)) {
    errors.push(`Arquivo ausente: ${path.relative(repositoryRoot, file)}`);
    continue;
  }

  try {
    vm.runInContext(fs.readFileSync(file, "utf8"), context, {
      filename: file,
    });
  } catch (error) {
    errors.push(`${path.relative(repositoryRoot, file)}: ${error.message}`);
  }
}

const questions = context.window.CYBER_QUIZ_QUESTIONS;

if (!Array.isArray(questions)) {
  errors.push("O banco não criou window.CYBER_QUIZ_QUESTIONS.");
} else {
  const seenIds = new Set();
  const mkdocsConfig = fs.readFileSync(
    path.join(repositoryRoot, "mkdocs.yml"),
    "utf8"
  );

  for (const question of questions) {
    const label = question?.id || "<sem id>";
    const requiredStrings = [
      "id",
      "difficulty",
      "topic",
      "lesson",
      "source",
      "question",
      "explanation",
      "scope",
    ];

    for (const field of requiredStrings) {
      if (typeof question?.[field] !== "string" || !question[field].trim()) {
        errors.push(`${label}: campo ${field} ausente ou vazio.`);
      }
    }

    if (seenIds.has(question.id)) {
      errors.push(`${label}: id duplicado.`);
    }
    seenIds.add(question.id);

    if (!allowedDifficulties.has(question.difficulty)) {
      errors.push(`${label}: dificuldade inválida (${question.difficulty}).`);
    }

    if (!allowedScopes.has(question.scope)) {
      errors.push(`${label}: escopo inválido (${question.scope}).`);
    }

    if (
      !Array.isArray(question.choices) ||
      question.choices.length !== 4 ||
      question.choices.some(
        (choice) => typeof choice !== "string" || !choice.trim()
      )
    ) {
      errors.push(`${label}: deve haver exatamente quatro alternativas.`);
    } else if (new Set(question.choices).size !== question.choices.length) {
      errors.push(`${label}: há alternativas duplicadas.`);
    }

    if (
      !Number.isInteger(question.correct) ||
      question.correct < 0 ||
      question.correct > 3
    ) {
      errors.push(`${label}: índice de resposta correta inválido.`);
    }

    if (typeof question.source === "string") {
      const sourcePath = question.source.split(/[?#]/, 1)[0];
      const markdownPath = `${sourcePath.replace(/\/$/, "")}.md`;
      const absoluteMarkdownPath = path.join(docsRoot, ...markdownPath.split("/"));

      if (!fs.existsSync(absoluteMarkdownPath)) {
        errors.push(`${label}: aula de origem não existe (${markdownPath}).`);
      } else if (!mkdocsConfig.includes(markdownPath)) {
        errors.push(`${label}: aula de origem não está publicada (${markdownPath}).`);
      }
    }
  }

  const lessonQuestions = questions.filter(
    (question) => question.scope === "lesson-fixation"
  );
  const examQuestions = questions.filter((question) => question.scope === "exam");
  const lessonSources = new Set(lessonQuestions.map((question) => question.source));
  const examSources = new Set(examQuestions.map((question) => question.source));

  for (const source of lessonSources) {
    const count = lessonQuestions.filter(
      (question) => question.source === source
    ).length;
    if (count < 6 || count > 12) {
      errors.push(
        `${source}: quiz da aula deve ter entre 6 e 12 questões; encontrado ${count}.`
      );
    }
    if (!examSources.has(source)) {
      errors.push(`${source}: não está representada no simulado geral.`);
    }
  }

  for (const difficulty of allowedDifficulties) {
    const count = examQuestions.filter(
      (question) => question.difficulty === difficulty
    ).length;
    if (count < 22) {
      errors.push(
        `Simulado ${difficulty}: mínimo de 22 questões; encontrado ${count}.`
      );
    }
  }

  for (let lessonNumber = 1; lessonNumber <= 22; lessonNumber += 1) {
    const lessonQuestionsByNumber = examQuestions.filter((question) =>
      typeof question.lesson === "string" &&
      question.lesson.startsWith(`Aula ${lessonNumber}:`)
    );

    for (const difficulty of allowedDifficulties) {
      const count = lessonQuestionsByNumber.filter(
        (question) => question.difficulty === difficulty
      ).length;
      if (count !== 1) {
        errors.push(
          `Aula ${lessonNumber}: esperado 1 item ${difficulty} no simulado; encontrado ${count}.`
        );
      }
    }
  }

  const correctLengthRanks = { shortest: 0, middle: 0, longest: 0 };
  const ranksByDifficulty = Object.fromEntries(
    [...allowedDifficulties].map((difficulty) => [
      difficulty,
      { shortest: 0, middle: 0, longest: 0 },
    ])
  );

  for (const question of examQuestions) {
    if (!Array.isArray(question.choices) || question.choices.length !== 4) {
      continue;
    }

    const lengths = question.choices.map((choice) => choice.length);
    const correctLength = lengths[question.correct];
    const distractorLengths = lengths.filter(
      (_, index) => index !== question.correct
    );
    const longestDistractor = Math.max(...distractorLengths);
    const shortestDistractor = Math.min(...distractorLengths);

    if (correctLength > longestDistractor * 1.4) {
      errors.push(
        `${question.id}: a resposta correta é mais de 40% maior que todos os distratores.`
      );
    }
    if (correctLength < shortestDistractor * 0.6) {
      errors.push(
        `${question.id}: a resposta correta é mais de 40% menor que todos os distratores.`
      );
    }

    const sorted = [...lengths].sort((left, right) => left - right);
    let rank;
    if (correctLength === sorted[0]) {
      rank = "shortest";
    } else if (correctLength === sorted[sorted.length - 1]) {
      rank = "longest";
    } else {
      rank = "middle";
    }
    correctLengthRanks[rank] += 1;
    ranksByDifficulty[question.difficulty][rank] += 1;
  }

  const dominantRank = Math.max(...Object.values(correctLengthRanks));
  if (examQuestions.length > 0 && dominantRank / examQuestions.length > 0.55) {
    errors.push(
      `As respostas corretas têm padrão de extensão previsível: ${JSON.stringify(
        correctLengthRanks
      )}.`
    );
  }

  for (const [difficulty, ranks] of Object.entries(ranksByDifficulty)) {
    const questionCount = Object.values(ranks).reduce(
      (total, count) => total + count,
      0
    );
    const dominantDifficultyRank = Math.max(...Object.values(ranks));
    if (questionCount > 0 && dominantDifficultyRank / questionCount > 0.6) {
      errors.push(
        `Simulado ${difficulty}: padrão de extensão previsível (${JSON.stringify(
          ranks
        )}).`
      );
    }
  }

  if (errors.length === 0) {
    const counts = Object.fromEntries(
      [...allowedDifficulties].map((difficulty) => [
        difficulty,
        examQuestions.filter(
          (question) => question.difficulty === difficulty
        ).length,
      ])
    );
    console.log(
      `Quiz válido: ${questions.length} questões (${lessonQuestions.length} por aula, ${examQuestions.length} no simulado).`
    );
    console.log(`Simulado por dificuldade: ${JSON.stringify(counts)}.`);
    console.log(
      `Posição relativa da resposta correta: ${JSON.stringify(
        correctLengthRanks
      )}.`
    );
    console.log(
      `Posição por dificuldade: ${JSON.stringify(ranksByDifficulty)}.`
    );
  }
}

if (errors.length > 0) {
  console.error(`Falha na validação do quiz (${errors.length} problema(s)):\n`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
}
