# Cyber Learning

Livro aberto em português sobre fundamentos de cibersegurança, infraestrutura em nuvem e laboratórios autorizados.

## Livro on-line

A publicação será disponibilizada em:

<https://uri-wernik.github.io/cyber-learning/>

A primeira edição reúne as aulas 1 a 22 e uma seção de preparação para a prova. Os capítulos seguintes permanecem como rascunhos até passarem por revisão técnica, ética e editorial.

## Executando localmente

Requer Python 3.8 ou superior.

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install --requirement requirements.txt
.\.venv\Scripts\python.exe -m mkdocs serve
```

O preview local ficará disponível em `http://127.0.0.1:8000/`.

## Leitor de livro

Ao clicar na capa, escolha uma seção e uma aula no seletor. É possível filtrar
por nome ou número; a ação de continuar a leitura permanece separada.
A capa e a marca usam um símbolo vetorial original e minimalista: um livro
aberto com um caminho central. A identidade mantém o verde do projeto,
sem fotografia de banco de imagens nem recorte de uma aula.

No computador, as folhas têm uma composição fixa de 794 × 1123 px, na proporção
A4. É possível escolher uma folha centralizada ou duas lado a lado, ajustar
a folha à tela ou à largura, selecionar zoom de 75% a 150% e entrar em tela cheia. O zoom
escala a composição inteira sem repaginar o conteúdo nem esticar a folha.
O tamanho inicial do texto é 19 px; a preferência existente continua em
`cyber-book-text-v2`. Alterar o tamanho do texto, diferente do zoom, repagina
a aula. Disposição e zoom também ficam salvos localmente.
No celular, permanece a composição responsiva de uma folha com gesto lateral.

Em tela cheia, cabeçalho, ferramentas e navegação ficam ocultos: aparecem
somente as folhas. Use Esc para voltar aos controles. As setas continuam
funcionando; no computador também é possível deslizar horizontalmente na tela
de toque, arrastar por uma margem sem selecionar texto ou usar o gesto
horizontal do touchpad. Gestos verticais continuam rolando a folha ampliada.
Escolha “Ajustar à largura” antes de entrar em tela cheia para ampliar até
as laterais sem deformar o papel; o restante da folha fica acessível por
rolagem vertical. Virar a página retorna ao topo da próxima folha.

As 22 aulas possuem uma nova redação autoral das explicações, desenvolvida a
partir dos assuntos e evidências das notas anteriores. Não se trata apenas de
inserir cartões na redação antiga. Títulos e âncoras, comandos literais, imagens,
referências e o estado real de validação dos laboratórios foram preservados.
O hook acrescenta os componentes editoriais à nova prosa, sem reescrevê-la
durante o build. Os quizzes continuam cobrindo os fundamentos ensinados.

Na seção 4, títulos de origem e referências ficam no
[arquivo de apoio](./Cloud-Based%20Hacking/assets/lessons/secao-04-apoio.json),
também acessível pelo sumário. Limites de autorização e estado real dos
experimentos continuam na prosa; separar a procedência não significa esconder
o que ainda não foi validado. Os desenhos distinguem conexões e estados
específicos, sem numeração ou legendas automáticas.

O site possui uma interface própria de biblioteca e leitura, construída em HTML,
CSS e JavaScript sobre os capítulos Markdown. O MkDocs continua responsável pela
publicação, pelas URLs estáveis e pelo índice de busca; a interface antiga de
documentação não é carregada.

- No computador, selecione uma folha centralizada ou duas lado a lado.
  As margens da mesa permanecem fora do papel; tela cheia não deforma a folha.
- No celular com tela de toque, deslize horizontalmente para passar a
  página. A rolagem nativa usa encaixe por página; botões e teclado continuam
  disponíveis. Seleção de texto, ampliação de imagens e gesto de zoom permanecem
  independentes. Faça o gesto sobre o corpo da folha; gestos iniciados na borda
  da tela podem ser reservados pelo sistema ou pelo navegador.
- Os blocos são medidos com as fontes e as dimensões reais da folha. Alterar
  o tamanho do texto recompõe as páginas. No computador, redimensionar a
  janela muda apenas a escala no modo de ajuste; no celular, recompõe a leitura.
- Use os botões, as teclas de seta ou Page Up/Page Down para navegar. O campo
  “Ir para” abre uma folha específica. As teclas não interferem com formulários.
- A posição é salva por capítulo neste navegador; “Continuar a leitura” retoma
  o último capítulo. A numeração pode mudar ao aumentar a letra, mas a retomada
  usa a posição do conteúdo, não apenas o número da folha.
- Sumário, busca, temas claro/escuro e ampliação de imagens usam controles
  acessíveis. As aulas terminam com acesso ao próprio quiz e à continuação.
- Tabelas viram registros verticais em folhas estreitas; código longo pode
  atravessar folhas. “Copiar” recupera o bloco original completo.
- A leitura é paginada por padrão. Sem JavaScript ou em caso de falha explícita
  de composição, o texto completo continua disponível, sem cortar conteúdo.

As 22 aulas publicadas receberam adaptação editorial: **152 termos destacados
possuem 152 cartões**, e **31 desenhos originais** explicam mecanismos específicos.
A aula 3 mantém seus 23 cartões e dez desenhos. As demais recebem definições
adequadas ao trecho e um desenho próprio, sem transformar todo negrito em amarelo.
Os capítulos futuros continuam como rascunhos.

O catálogo de termos e os pontos de inserção ficam em
[`scripts/lesson-editorial.json`](./scripts/lesson-editorial.json). O hook
[`illustrated_lessons.py`](./scripts/illustrated_lessons.py) aplica os componentes
durante o build, preservando a prosa, comandos, links, capturas e avisos das notas
originais. Ele interrompe a construção se um termo não for localizado ou se a
adaptação alterar a prosa. Diagramas Mermaid em código são substituídos pela
ilustração correspondente, e prefixos de legendas numeradas são removidos sem
apagar a explicação da captura.

As artes-fonte são SVGs editáveis em `Cloud-Based Hacking/assets/lessons`.
Se modificar a composição dos desenhos, regenere com
`.\.venv\Scripts\python.exe scripts\prepare-lesson-art.py` antes de construir.

Para novas aulas ilustradas, use `lesson-block` com `lesson-copy` e
`definition-rail`; cada `mark` deve apontar, por `aria-describedby`, para sua
definição em um `aside.definition-card`. No celular, o cartão aparece depois do
parágrafo. Durante a paginação, um destaque nunca é separado de seu cartão;
parágrafos longos podem ser divididos antes ou depois desse conjunto.
Os acessos ao quiz e à continuação ficam compactos no fim da leitura, sem
um título de encerramento que possa gerar uma folha vazia só de navegação.
Use `figure.lesson-figure` para os desenhos e informe dimensões e
descrição alternativa. Não transforme todo negrito existente em destaque amarelo.

Valide os componentes e a disponibilidade dos recursos offline após o build:

```powershell
.\.venv\Scripts\python.exe -m mkdocs build --strict
.\.venv\Scripts\python.exe scripts\validate-editorial.py
node scripts\validate-quiz-data.js
```

O PWA prepara as aulas e seus recursos para leitura offline após a primeira
visita conectada. No preview local, o service worker fica desativado para evitar
cache antigo durante o desenvolvimento. Para testá-lo intencionalmente, abra
`?offline-test=1` em uma página e aguarde a instalação antes de desligar a rede.
O teste precisa usar o mesmo prefixo `/cyber-learning/` da publicação.

Antes de publicar, confira no navegador as aulas na folha única, em celular,
com texto ampliado, nos dois temas, além de busca, retomada, links internos,
gestos para os dois lados, limites da primeira/última página, ampliação de
imagens e uma rodada do quiz. Emulação não comprova a sensação de
toque ou o comportamento das barras do navegador em um aparelho físico.

## Laboratório local de autenticação

O repositório também inclui um
[laboratório seguro de login, MFA e sessão](./labs/auth-mfa-local/README.md).
Ele funciona somente em `127.0.0.1`, usa dados inteiramente fictícios e não
possui integração com serviços externos.

## Publicação

Cada atualização enviada à branch `main` executa uma validação estrita e publica o resultado no GitHub Pages por meio do GitHub Actions.