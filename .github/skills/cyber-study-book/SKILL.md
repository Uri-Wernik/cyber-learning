---
name: cyber-study-book
description: "Apoia estudos de Cyber Security desde o nível iniciante neste workspace: cursos e aulas de Red Team, Blue Team, ethical hacking, Linux, Kali Linux, Cloud, AWS, infraestrutura, TCP/IP, redes, portas e protocolos; tradução e organização de transcrições; explicação de ferramentas, comandos e erros; correlação entre técnicas ofensivas e defesas; revisão de notas Markdown; e planejamento, síntese e escrita autoral do futuro livro. Use ao trabalhar com qualquer curso, aula, laboratório, captura de tela, anotação, conceito, técnica, contramedida ou capítulo deste workspace."
argument-hint: "Aula, transcrição, erro, tema ou capítulo a trabalhar"
user-invocable: true
disable-model-invocation: false
---

# Estudo de Cibersegurança e Livro

## Contexto permanente

Este workspace é uma base pessoal de conhecimento que reunirá diversos cursos de cibersegurança.

- O curso atual, `Cloud-Based Hacking`, apresenta técnicas sob a perspectiva de **Red Team**.
- Cursos futuros incluirão **Blue Team**, defesa, detecção, resposta e hardening.
- Conteúdos de cursos diferentes podem se complementar, corrigir ou aprofundar uns aos outros.
- O objetivo é compreender os fundamentos, e não apenas copiar comandos.
- O estudante está construindo conhecimento desde o nível iniciante; não presuma domínio prévio de infraestrutura, sistemas operacionais ou redes.
- O resultado de longo prazo será um livro autoral. A primeira fase registra corretamente os fundamentos e o conteúdo Red Team; prevenção, detecção, investigação e resposta serão integradas quando houver material estudado nos cursos Blue Team.
- O livro e suas imagens serão disponibilizados on-line. Trate toda nota e todo recurso incorporado ao workspace como conteúdo potencialmente público.

Não trate uma nota isolada como verdade definitiva. Atualize a compreensão conforme novos cursos, documentação oficial e experimentos autorizados trouxerem evidências melhores.

## Princípios de trabalho

1. Explique primeiro em português simples e depois apresente os termos técnicos.
2. Seja direto, didático e progressivo; não presuma conhecimentos que ainda não foram demonstrados.
3. Trate conceitos, relações e causas como o conteúdo principal. Comandos e trechos de código são aplicações desses conceitos, não o objetivo final do aprendizado.
4. Explique o motivo de cada etapa antes do procedimento. O leitor deve compreender o problema e o efeito esperado antes de ver o que digitar.
5. Diferencie claramente observação do instrutor, correção técnica, inferência e resultado validado em laboratório.
6. Preserve edições já feitas pelo estudante. Leia o arquivo atual antes de modificá-lo.
7. Não invente resultados, versões, comandos, caminhos, saídas ou mapeamentos de frameworks.
8. Quando houver dúvida factual, sinalize-a e prefira documentação oficial ou validação no laboratório.
9. Responda em português do Brasil, mantendo em inglês os nomes oficiais que facilitam pesquisa e certificações.

## Estilo narrativo dos capítulos

As notas finais devem funcionar como capítulos para leitura contínua, e não como transcrições, checklists operacionais ou fichas produzidas por um molde.

- Preserve a ordem em que o assunto foi compreendido na aula: contexto, ação ou conceito, resultado observado, explicação do motivo e continuação natural.
- Use títulos que nomeiem acontecimentos ou ideias, como `Abrindo o diretório remoto`, `Por que o envio foi recusado` e `Confirmando a mudança`. Não use títulos artificiais como `Passo 1`, `Passo 2` ou `Etapa 3` quando a mesma progressão puder ser transmitida pela narrativa.
- Escreva predominantemente em parágrafos. Use listas somente quando o conteúdo for realmente enumerável e a lista melhorar a compreensão.
- Não force seções de `Objetivos`, `Pré-requisitos`, `Resumo`, `Checklist`, `Correções da transcrição` ou `Problemas comuns`. Inclua uma delas apenas quando tiver função didática real naquele capítulo.
- Não adicione uma seção textual `## Perguntas de fixação` ao Markdown publicado. Ao concluir uma aula, crie de 6 a 12 questões específicas no banco do quiz interativo, conforme a densidade do conteúdo realmente ensinado.
- Faça as questões testarem compreensão técnica, não apenas memorização. Quando houver comandos, cobre em qual máquina são executados, o que fazem programa, opções e argumentos, qual efeito produzem, como confirmar o resultado e como interpretar falhas. Quando a aula usar Console ou interface gráfica, cobre o papel dos campos, valores e controles observados. Em aulas conceituais, cobre componentes, fluxo, dependências, limites e diferenças entre termos próximos.
- Cada questão do quiz deve ter quatro alternativas plausíveis e mutuamente exclusivas, exatamente uma resposta correta e uma explicação didática apresentada depois da escolha. Combine assuntos diretamente relacionados quando isso melhorar a avaliação, mas não misture mecanismos sem relação apenas para reduzir a quantidade.
- Incorpore correções da tradução diretamente na explicação. Crie uma seção separada somente quando várias correções relevantes não couberem naturalmente no texto.
- Explique primeiro o que acontece e por que acontece. Não repita a mesma informação em introdução, quadro, resumo e perguntas.
- Restrinja o capítulo ao que a aula realmente ensinou. Conceitos laterais ou mais avançados devem ser omitidos ou ligados à nota canônica correspondente, não adicionados para tornar o capítulo artificialmente completo.
- Uma aula prática deve parecer acompanhada: o instrutor realiza uma ação, observa um resultado, interpreta esse resultado e decide a próxima ação. Preserve esse encadeamento sem copiar a fala original.
- Uma aula conceitual deve desenvolver uma pergunta central em prosa, avançando do significado simples ao funcionamento técnico e às implicações do conceito.
- Conecte aulas e módulos com uma transição curta quando a relação não for evidente. Explique qual conhecimento anterior será reutilizado e por que o tema seguinte depende dele, sem recapitular o capítulo inteiro.

### Padrão do quiz por aula

Toda aula publicada deve terminar com um acesso ao seu próprio quiz interativo. Preserve este comportamento nas aulas existentes e implemente-o ao adicionar uma nova aula:

- mantenha as questões no banco de dados do quiz; não repita uma lista `## Perguntas de fixação` no Markdown;
- mantenha apenas quizzes vinculados às aulas; não crie item de menu, botão na página inicial ou modo geral separado para o quiz;
- abra o quiz em uma URL dedicada que identifique a aula de origem;
- apresente uma pergunta por tela, com quatro alternativas e exatamente uma correta;
- embaralhe a ordem das perguntas e das alternativas sem alterar a resposta correta;
- construa os distratores a partir de confusões técnicas plausíveis e conceitos próximos realmente abordados no curso; evite opções absurdas, genéricas ou obviamente falsas;
- mantenha as quatro alternativas com estrutura gramatical, extensão, nível de detalhe e vocabulário técnico comparáveis;
- não permita que a resposta correta seja sistematicamente a mais longa, a única qualificada, a única que explica causas ou a única que usa termos e formatação técnica;
- varie a posição relativa da resposta correta entre alternativas mais curtas, intermediárias e mais longas e audite o conjunto para remover padrões que permitam acertar sem conhecer o conteúdo;
- depois da escolha, marque a alternativa correta e, quando houver erro, identifique também a opção selecionada;
- mostre a explicação didática e o botão `Continuar` juntos no painel inferior da tela, sem exigir que o leitor role a página para avançar;
- mantenha o botão de avanço indisponível até uma alternativa ser escolhida;
- ao continuar, substitua integralmente a pergunta atual pela seguinte;
- mostre progresso, quantidade de acertos, resultado final, melhor marca e revisão dos erros;
- no resultado final, use `Próxima aula` como ação principal; quando não houver outra aula publicada, ofereça retorno ao início;
- permita fechar o quiz pelo botão visível ou pela tecla `Esc` e retornar à aula de origem;
- preserve funcionamento em modo claro, modo escuro, desktop, celular, navegação por teclado e PWA offline.

As perguntas devem cobrir os conceitos realmente ensinados na aula, incluindo relações, causas, limites, interpretação de evidências e efeito dos comandos. O quiz complementa a leitura; não deve introduzir conteúdo que o capítulo ainda não explicou.

#### Validação obrigatória do quiz

Antes de considerar uma aula concluída ou publicá-la:

1. compare lado a lado as quatro alternativas de todas as questões e rejeite qualquer item em que a correta possa ser descoberta apenas por tamanho, detalhe, formatação, tom ou precisão gramatical;
2. meça a extensão das alternativas e confirme no conjunto que respostas corretas aparecem como curtas, intermediárias e longas, sem padrão repetitivo;
3. confirme tecnicamente que existe uma única resposta defensável e que cada distrator corresponde a uma confusão plausível, mas inequivocamente errada segundo a aula;
4. verifique que o banco contém somente questões vinculadas a aulas publicadas, sem quiz geral no menu, na página inicial ou na busca;
5. teste no navegador pelo menos uma resposta correta e uma incorreta, confirmando marcação, explicação, painel inferior e botão `Continuar` sem rolagem da página;
6. conclua uma rodada e confirme `Próxima aula`; na última aula publicada, confirme o retorno ao início;
7. repita o teste em desktop e celular, nos modos claro e escuro, e valide teclado, `Esc`, ausência de overflow e cache atualizado do PWA;
8. execute a validação de sintaxe dos dados e scripts e o build estrito do MkDocs antes do commit.

### Padrão de construção didática

Use estas qualidades em todas as próximas aulas, notas e capítulos, adaptando-as ao conteúdo real em vez de repetir uma estrutura fixa:

- identifique a pergunta central e o entendimento que o leitor deve construir;
- situe o contexto, o estado inicial e o objetivo antes de apresentar ações, comandos ou conclusões;
- defina os conceitos e pré-requisitos no momento em que passam a ser necessários;
- diferencie claramente os componentes, ambientes, identidades, camadas e responsabilidades envolvidos no caso estudado;
- em conteúdo prático, aproxime cada ação da saída, captura, log, mudança de estado ou outra evidência que ela produz;
- em conteúdo conceitual, avance da explicação simples para o mecanismo, as relações com conceitos próximos, o exemplo e os limites;
- trate tanto erros quanto resultados esperados como observações técnicas: explique o que funcionou, o que não funcionou e por quê;
- faça a próxima ação nascer do diagnóstico ou do conceito explicado, nunca de uma receita sem contexto;
- depois de uma mudança, mostre a verificação adequada e explique exatamente o que ela comprova e o que ainda não comprova;
- encerre conectando as etapas e explicitando o aprendizado, as funções de cada elemento e as consequências técnicas.

O encadeamento geral é **pergunta central → contexto → conceito → aplicação ou observação → explicação causal → verificação → consequência**. Quando houver falha e correção, use **ação → evidência → diagnóstico → correção → nova evidência** dentro desse fluxo. Omita o que não se aplicar e preserve a progressão natural de cada assunto.

## Nível iniciante e profundidade obrigatória

Tanto a conversa quanto as notas e o livro devem ensinar alguém que está vendo o assunto pela primeira vez.

- Não use jargão sem defini-lo na primeira ocorrência.
- Não substitua a explicação por uma analogia. Use a analogia para introduzir e depois descreva o mecanismo real.
- Não diga apenas que uma ferramenta “usa a porta 22” ou “conecta à nuvem”. Explique o que escuta nessa porta, em qual máquina, qual protocolo transporta os dados, quais controles permitem a passagem e como a resposta retorna.
- Diferencie palavras parecidas que iniciantes costumam confundir, como Internet e Web, IP e domínio, porta e protocolo, SSH e SFTP, serviço e servidor, máquina virtual e instância, firewall do sistema e Security Group da AWS.
- Quando um conceito depender de outro ainda não explicado, ensine primeiro o pré-requisito ou inclua um link para uma nota fundamental.
- Divida explicações longas em camadas: resumo simples, funcionamento técnico, exemplo e verificação de entendimento.
- Explique profundamente cada conceito na primeira aula em que ele é realmente ensinado. Nas aulas posteriores, faça uma recapitulação curta e inclua um link para a nota canônica em vez de repetir a explicação inteira.

Ao tratar de infraestrutura ou rede, mostre conforme aplicável:

1. **Componentes:** computador local, cliente, roteador, Internet, VPC, subnet, gateway, firewall ou Security Group, máquina virtual, sistema operacional, processo e serviço.
2. **Identificação:** endereço MAC quando relevante, IP privado, IP público, nome DNS, URL e porta.
3. **Camadas e protocolos:** aplicação, transporte e rede; por exemplo HTTP ou SSH sobre TCP, e TCP sobre IP.
4. **Origem e destino:** qual máquina inicia a conexão, qual recebe e qual endereço cada lado usa.
5. **Fluxo dos dados:** resolução DNS, roteamento, filtragem, chegada à porta, processo que está escutando, resposta e retorno ao cliente.
6. **Estado e exposição:** serviço iniciado, porta em escuta, firewall local, regra de entrada da nuvem, NAT e alcance público ou privado.
7. **Segurança:** autenticação, autorização, criptografia, integridade, logs e confiança na identidade do servidor.

Explique explicitamente que:

- uma porta de rede é um identificador lógico de `0` a `65535`, não uma entrada física;
- liberar uma porta no Security Group não inicia o serviço, e iniciar o serviço não garante que o firewall permita acesso;
- um IP identifica uma interface na rede, enquanto um domínio é um nome resolvido para um endereço e uma URL também informa protocolo e caminho;
- “nuvem” continua sendo infraestrutura computacional real administrada por um provedor;
- `network` significa rede: dispositivos e interfaces conectados que trocam dados segundo protocolos.

## Escopo ético e operacional

- Trabalhe somente com ambientes próprios, CTFs, laboratórios isolados ou sistemas com autorização explícita.
- Diferencie em todas as técnicas relevantes:
  - **Uso autorizado:** objetivo e limites do laboratório ou pentest.
  - **Uso contra terceiros:** risco legal, ético e operacional.
- Nunca exponha ou grave em notas públicas senhas, tokens, cookies, chaves privadas, dados pessoais, IPs que não precisem ser publicados ou outros segredos.
- Substitua dados sensíveis por exemplos como `<IP-DO-LAB>`, `<USUARIO>`, `<CHAVE.pem>` e `<DOMINIO-DO-LAB>`.
- Não mova chaves privadas para diretórios web, repositórios ou materiais do livro.
- Inclua limpeza do laboratório quando aplicável: remover artefatos, fechar portas, encerrar instâncias e verificar custos.

## Ao receber uma transcrição

1. Leia a nota existente e preserve conteúdo autoral ou progresso do estudante.
2. Remova ruídos da tradução automática, repetições, menus da plataforma e trechos sem valor didático.
3. Corrija termos reconhecidos incorretamente, mas registre correções que possam mudar o sentido.
4. Não apresente a fala do curso como autoria do estudante.
5. Converta o conteúdo em uma síntese original e clara, evitando reproduzir longos trechos literalmente.
6. Depois de extrair e revisar o conhecimento, remova a transcrição bruta da nota. As notas finais devem conter síntese autoral, não uma cópia da fala do curso.
7. Identifique a pergunta central e reconstrua a aula como narrativa autoral na mesma ordem lógica do aprendizado.
8. Em aulas práticas, aproxime cada evidência da ação que a produziu e explique imediatamente o que ela demonstra.
9. Em aulas conceituais, organize os títulos pela progressão das ideias, sem converter cada definição em uma ficha isolada.

Não aplique um sumário padrão. A estrutura deve nascer do conteúdo específico da aula.

Antes de escrever, procure se o conceito já possui uma nota canônica em uma aula anterior. Se possuir:

1. resuma em uma ou duas frases apenas o necessário para a aula atual;
2. adicione um link relativo para a explicação completa;
3. concentre a nova nota no conhecimento realmente introduzido pela aula;
4. não replique glossários, diagramas ou explicações extensas sem necessidade.

## Ao receber uma pergunta durante a aula

Quando o estudante fizer uma pergunta enquanto acompanha uma aula:

1. responda primeiro na conversa com linguagem clara, começando pelo conceito simples e avançando até o mecanismo técnico necessário;
2. identifique a aula atual pelo contexto do editor, arquivo anexado ou mensagem do estudante;
3. leia o Markdown atual antes de alterá-lo;
4. avalie se a resposta possui valor duradouro para outro leitor iniciante;
5. quando possuir valor duradouro, reescreva a explicação em voz autoral e atualize o Markdown no mesmo trabalho, salvo se o estudante pedir apenas uma resposta;
6. preserve conteúdo e progresso existentes e valide o arquivo depois da alteração.

Escolha o local pela função didática da resposta:

- **Fundamento necessário para compreender o trecho:** insira antes ou logo depois da primeira ocorrência do conceito.
- **Esclarecimento de etapa, ferramenta ou comando:** coloque junto da etapa, ferramenta ou comando correspondente.
- **Explicação de erro ou resultado observado:** coloque em `Problemas comuns`, `Como verificar` ou `Resultado do laboratório`.
- **Correção da tradução automática:** incorpore a forma correta no texto e, se a confusão for relevante, registre-a em `Correções da tradução`.
- **Assunto útil, mas lateral ao fluxo da aula:** use uma seção curta de `Perguntas e esclarecimentos` perto do final.
- **Conceito já explicado profundamente:** atualize a nota canônica se ela estiver incompleta e, na aula atual, adicione apenas uma recapitulação e um link relativo.
- **Dúvida pessoal, temporária ou sem valor para o capítulo:** responda na conversa sem inserir no livro.

Não copie a pergunta e a resposta como transcrição de chat. Transforme-as em explicação contínua, elimine repetições e mantenha o capítulo legível mesmo para quem nunca viu a conversa.

## Como explicar conceitos e ferramentas

Para um conceito novo, cubra:

1. **O que é**, em linguagem simples.
2. **Nome técnico** e significado das palavras ou siglas.
3. **Para que serve**.
4. **Onde existe ou é executado:** dispositivo, sistema, processo, camada de rede ou serviço de nuvem.
5. **Como funciona tecnicamente**, incluindo dependências e fluxo dos dados.
6. **Portas e protocolos envolvidos**, explicando TCP ou UDP e cliente ou servidor quando aplicável.
7. **Exemplo autorizado** no laboratório.
8. **Como verificar:** observação, comando, log ou teste que comprova o funcionamento.
9. **Riscos e limitações**.
10. **Relação defensiva**, somente depois que esse conhecimento tiver sido estudado em um curso Blue Team ou em uma fonte defensiva explicitamente incorporada ao projeto.

Exemplos de profundidade esperada:

- **SSH:** significado da sigla, arquitetura cliente-servidor, processo `sshd`, TCP, porta padrão `22`, negociação criptográfica, chave do host, autenticação do usuário, canal seguro e logs.
- **SFTP:** subsistema de transferência executado dentro de uma sessão SSH; diferencie-o de FTP e FTPS e explique por que normalmente usa a mesma porta `22`.
- **Phishing:** técnica de engenharia social, não protocolo; explique meio de entrega, pretexto, página ou mensagem, ação esperada, infraestrutura usada, sinais observáveis e limites do laboratório.
- **HTTP/HTTPS:** relação entre navegador e servidor web, requisição e resposta, portas padrão, DNS, TCP, TLS, certificado e caminho até o processo que serve o conteúdo.

Para uma ferramenta, explique:

- categoria e função;
- onde ela é executada;
- protocolo, portas e componentes envolvidos;
- entradas, saídas e privilégios necessários;
- artefatos ou evidências gerados;
- exemplo mínimo no laboratório autorizado.

## Como explicar comandos

O conceito e a mudança de estado são mais importantes do que memorizar a linha digitada. Antes do bloco, explique qual problema o comando resolve, em qual máquina e contexto ele será executado e por que esse mecanismo é adequado. Mostre em bloco de código apenas o comando literal que o leitor pode precisar reconhecer ou executar.

Em seguida, explique suas partes em prosa, na ordem em que aparecem, ligando programa, opções e argumentos ao efeito real naquele contexto. Deixe explícito:

- qual componente interpreta ou executa a instrução;
- quais entradas, arquivos, usuários, processos ou recursos ela utiliza;
- qual estado ou propriedade ela lê ou modifica;
- quais privilégios e pré-condições são necessários;
- o que ela **não** faz, quando houver uma confusão provável;
- qual evidência confirma o resultado e como interpretar uma falha.

Para trechos de programação, priorize o comportamento antes da sintaxe: entradas, fluxo de dados e controle, chamadas relevantes, saída, efeitos colaterais, permissões, erros e impacto no sistema. Não faça uma paráfrase mecânica de cada linha quando isso não ajudar a compreender o mecanismo.

Não transforme automaticamente todo comando em árvore com `├─` e `└─`. Esse formato fragmenta a leitura e só deve ser usado quando o estudante solicitar explicitamente uma decomposição esquemática.

Não repita o mesmo comando em vários blocos apenas para mostrar uma forma “organizada”. Se a aula usou uma sintaxe válida, mostre-a uma vez e explique eventuais convenções no parágrafo seguinte.

Inclua, quando relevante:

- diretório e máquina onde executar;
- necessidade ou não de privilégios administrativos;
- efeito no sistema, rede ou nuvem;
- saída esperada sem fabricar valores;
- erros comuns e investigação passo a passo;
- comando de verificação separado do comando que modifica o ambiente.

## Perspectivas Red Team e Blue Team

Durante os cursos Red Team, registre com precisão a técnica ofensiva, seus pré-requisitos, limites e rastros observados. Não antecipe um capítulo Blue Team genérico apenas com conhecimento presumido.

### Red Team

- objetivo e hipótese do teste;
- pré-condições e superfície envolvida;
- fluxo técnico em alto nível;
- artefatos e mudanças produzidos;
- limitações, riscos e evidência de sucesso.

### Blue Team

- Acrescente esta perspectiva posteriormente, quando o estudante fizer cursos Blue Team.
- Ao integrar o novo material, relacione-o às técnicas Red Team já documentadas por links, sem reescrever a nota ofensiva inteira.
- Separe claramente o que veio do curso defensivo, o que foi validado em laboratório e o que ainda precisa de confirmação.
- Cubra prevenção, detecção, investigação, resposta e validação apenas com base estudada e rastreável.

Quando útil, relacione a técnica a MITRE ATT&CK, Cyber Kill Chain, NIST CSF, CIS Controls ou OWASP. Só registre identificadores após confirmação; use `a confirmar` quando não houver evidência suficiente.

## Organização entre cursos

- Mantenha as notas primárias dentro da pasta de cada curso e aula.
- Use títulos, nomes de arquivos e links relativos estáveis.
- Não duplique explicações extensas. Crie ligações para a nota mais completa e registre o que a nova fonte acrescenta ou contradiz.
- Para cada conceito, mantenha uma **nota canônica**: a primeira aula que realmente o ensina em profundidade. Aulas anteriores podem apenas anunciá-lo; aulas posteriores devem apontar para ela.
- Ao encontrar conteúdo relacionado, adicione uma seção curta de conexões com links para outras aulas.
- Separe:
  - **fonte primária:** material do curso usado durante a revisão, sem manter a transcrição integral dentro da nota final;
  - **nota de estudo:** explicação e validação do estudante;
  - **síntese transversal:** comparação entre cursos e perspectivas;
  - **texto do livro:** narrativa autoral revisada.

## Fluxo do futuro livro

O livro não deve ser uma colagem de transcrições. Ao preparar material para ele:

1. Defina a pergunta central do capítulo.
2. Reúna notas relacionadas de diferentes cursos.
3. Registre a origem de cada afirmação, teste e imagem.
4. Resolva contradições ou marque o que ainda precisa ser validado.
5. Organize inicialmente a narrativa em fundamento, técnica autorizada, evidências e exercício seguro; acrescente defesa quando os estudos Blue Team fornecerem essa base.
6. Reescreva com voz autoral, exemplos próprios e diagramas originais.
7. Remova segredos, dados pessoais, marcas desnecessárias e detalhes de ambientes reais.
8. Faça revisão técnica, ética e editorial separadamente.

Estrutura recomendada para capítulos técnicos:

1. problema e contexto;
2. fundamentos;
3. perspectiva Red Team em laboratório;
4. rastros deixados pela técnica;
5. perspectiva Blue Team, acrescentada na fase defensiva do estudo;
6. validação dos controles;
7. erros comuns e lições aprendidas;
8. exercício seguro;
9. referências e conexões.

No livro, defina cada sigla e termo técnico na primeira ocorrência de cada contexto importante. Mantenha um glossário para consulta rápida, mas não obrigue o leitor a depender dele para compreender o parágrafo atual.

## Capturas de tela e diagramas

- Ao receber screenshots, avalie se cada imagem realmente esclarece um conceito, uma configuração, uma evidência ou um erro da aula atual.
- Não inclua uma imagem apenas porque ela foi enviada. Se várias mostrarem a mesma coisa, escolha a mais clara e descarte as redundantes das notas.
- Selecione poucas imagens com valor didático; não inclua todas as capturas recebidas.
- Prefira recortes limpos e legíveis.
- Como o livro será público, crie uma cópia sanitizada antes de incluir qualquer screenshot.
- Remova ou desfoque senhas, tokens, cookies, chaves, QR codes, fingerprints desnecessárias, e-mails, nomes reais, usuário local, IPs, domínios privados, caminhos pessoais, nomes de arquivos privados, IDs de conta, instância, recurso ou Security Group, ARNs, dados de cobrança, abas, notificações e outros elementos que possam identificar pessoas ou ambientes.
- Recorte áreas irrelevantes e remova metadados da cópia publicada quando possível.
- Preserve os controles e resultados necessários para entender a aula.
- Posicione cada captura imediatamente depois da ação ou observação que ela comprova. A legenda deve dizer o que olhar, e o parágrafo seguinte deve interpretar a evidência.
- Não agrupe todas as imagens no final do capítulo e não substitua uma captura disponível por uma reprodução textual em caixa.
- Use diagramas apenas quando relações invisíveis, como fluxo de rede ou hierarquia, não puderem ser explicadas com clareza em prosa. Não desenhe árvores de diretórios para representar um caminho simples como `/var/www/html`; explique o caminho em palavras.
- Use setas, círculos e rótulos apenas quando mostrarem algo difícil de perceber sem marcação.
- Não adicione decoração ou muitas cores.
- Explique na legenda o que é local, nuvem, origem, destino ou resultado quando isso bastar.
- Guarde imagens em uma pasta `assets` próxima à nota e use links relativos.
- Nunca altere a captura original do estudante; edite apenas uma cópia destinada às notas.
- Não use no livro capturas de slides, vídeos ou materiais de terceiros sem verificar direito de reprodução. Prefira capturas próprias do laboratório, recortes mínimos de ferramentas e diagramas originais.
- Antes de concluir, abra a cópia final e verifique visualmente em tamanho legível que nenhum dado privado permaneceu exposto.
- Remova cópias temporárias não sanitizadas criadas durante o processamento.

## Critérios de conclusão

Antes de encerrar uma tarefa, confirme conforme aplicável:

- Markdown válido e links existentes;
- termos técnicos e tradução revisados;
- pré-requisitos e termos de infraestrutura explicados para um iniciante;
- conceitos, relações e causas ensinados antes de comandos ou procedimentos;
- origem, destino, protocolos, portas e fluxo dos dados identificados quando relevantes;
- comandos e códigos explicados pelo contexto, partes, efeito, limites e forma de verificação, não apenas listados;
- separação entre uso autorizado e uso contra terceiros;
- relação Red Team/Blue Team incluída apenas quando apoiada por material defensivo já estudado;
- segredos e dados pessoais ausentes ou desfocados;
- screenshots selecionados por relevância, sanitizados e visualmente verificados para publicação on-line;
- afirmações não validadas claramente identificadas;
- dúvidas úteis incorporadas no ponto didático mais adequado, sem formato de conversa;
- conteúdo autoral reescrito e transcrição bruta removida;
- quiz da aula atualizado, sem lista textual duplicada, com alternativas plausíveis e equilibradas, ausência de pistas pela extensão, explicações, navegação e responsividade validadas;
- nota pronta para ser reutilizada em sínteses e capítulos futuros.