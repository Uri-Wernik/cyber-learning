# Cyber Learning

Livro aberto em português sobre fundamentos de cibersegurança, infraestrutura em nuvem e laboratórios autorizados.

## Livro on-line

A publicação será disponibilizada em:

<https://uri-wernik.github.io/cyber-learning/>

A primeira edição reúne as aulas 1 a 12. Os capítulos seguintes permanecem como rascunhos até passarem por revisão técnica, ética e editorial.

## Executando localmente

Requer Python 3.8 ou superior.

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install --requirement requirements.txt
.\.venv\Scripts\python.exe -m mkdocs serve
```

O preview local ficará disponível em `http://127.0.0.1:8000/`.

## Publicação

Cada atualização enviada à branch `main` executa uma validação estrita e publica o resultado no GitHub Pages por meio do GitHub Actions.