# Phishing e engenharia social

O que uma mensagem tenta fazer a pessoa decidir, e qual parte disso depende de um servidor? Depois de estudar acesso ao Kali e administração pelo terminal, precisamos separar essas duas questões. A instância poderá hospedar páginas e arquivos do laboratório, mas a existência dessa infraestrutura não explica, sozinha, a interação humana.

Esta é uma aula conceitual sobre phishing e engenharia social. O foco está em compreender componentes, decisões e evidências de uma simulação inofensiva. Coleta de credenciais, cookies, tokens e outros dados reais não faz parte do conteúdo nem do exercício descrito.

## Limite ético e autorização

Antes de examinar o mecanismo, reconheça seus possíveis efeitos: uma abordagem sem consentimento pode favorecer fraude, violação de privacidade, prejuízo financeiro e comprometimento de contas. Chamar a atividade de estudo não elimina esses danos nem fornece permissão.

Uma simulação exige autorização explícita, com escopo, participantes e duração definidos, em infraestrutura própria ou preparada para o laboratório. Use identidades, contas e dados fictícios. Não solicite nem armazene senhas verdadeiras, e determine como os artefatos serão retirados no encerramento.

A posse de um servidor na nuvem cobre apenas um recurso de infraestrutura. Ela não autoriza testar pessoas, empresas, marcas ou aplicações externas. A [aula 2](../01-introduction-to-cloud-computing-for-hackers/02-introduction-to-hacking-using-the-cloud.md) explica como conferir esse limite; aqui, ele também precisa abranger a participação humana, não apenas os endereços envolvidos.

## Engenharia social

Quando uma comunicação usa contexto e influência para levar alguém a agir, estamos tratando de engenharia social. O ponto inicial é uma decisão humana, e não necessariamente um defeito em um programa.

E-mail, página e servidor podem apresentar a solicitação e apoiar a interação, mas são meios usados pelo cenário. Uma resposta, um clique ou uma aprovação podem ocorrer mesmo com o software funcionando de acordo com seu projeto. Por isso, analisar apenas a configuração do servidor deixa de fora a parte central do mecanismo.

Para compreender uma situação, pergunte o que a pessoa acredita estar acontecendo e o que lhe é pedido. Essas perguntas ajudam a separar a influência exercida pela comunicação da função técnica que entrega a mensagem ou apresenta a página.

## O que é phishing

Phishing é uma forma de engenharia social em que uma mensagem ou interface se apresenta como legítima para induzir uma ação. A representação de confiança faz parte do problema: não é simplesmente a presença de um link ou de um arquivo.

A solicitação pode envolver abrir um link ou arquivo, responder a uma mensagem, visitar uma página, aprovar algo ou fornecer informação. Essas possibilidades descrevem comportamentos diferentes e exigem evidências diferentes; uma visita não demonstra que houve aprovação ou entrega de dados.

Embora a página de login falsa seja um exemplo conhecido, ela não define toda a categoria. Um cenário pode existir sem uma página clonada e até sem página web. Para reconhecer o mecanismo, acompanhe a comunicação e a ação procurada, em vez de procurar obrigatoriamente um formulário.

## Como o cenário se desenvolve

A análise começa pelo objetivo permitido e pelo evento inofensivo que poderá ser observado. Nesse contexto, um pretexto dá sentido ao contato, uma isca motiva a atenção e um canal realiza a entrega. Se houver um link, ele pode conduzir a uma landing page ou a outro destino onde a ação definida seria realizada.

Não trate esse encadeamento como uma receita obrigatória nem como uma progressão garantida. Uma interação telefônica pode dispensar página, por exemplo. O planejamento também precisa incluir qual evidência pode ser guardada e como a simulação termina; essas condições não devem ser improvisadas depois da participação.

## Pretexto

O pretexto é a história usada para tornar o contato coerente aos olhos de quem o recebe. Ele estabelece quem aparenta falar, qual relação essa identidade teria com o destinatário e por que a mensagem surgiria naquele momento.

Também explica por que o pedido pareceria necessário. Seu papel é fornecer contexto de legitimidade, não obrigatoriamente chamar atenção por si só. Ao examinar uma simulação, separar a história do estímulo imediato ajuda a entender por que duas mensagens sobre o mesmo assunto podem exercer influências diferentes.

Essa identificação é uma ferramenta de leitura do cenário, não uma justificativa para representar terceiros sem permissão. O laboratório deve manter o pretexto dentro do acordo, usando identidades sintéticas e sem transformar uma história fictícia em contato indevido com pessoas externas.

## Isca

Se o pretexto organiza a história, a isca é o elemento que busca despertar atenção ou motivação para agir. Curiosidade, urgência, promessa de recompensa, receio de perder acesso e vontade de resolver um problema são exemplos conceituais dos estímulos envolvidos.

A diferença pode ser formulada como duas perguntas: por que esse contato pareceria legítimo e por que alguém decidiria agir agora? A primeira aponta para o pretexto; a segunda, para a isca. Na simulação autorizada, qualquer estímulo continua limitado pelo acordo e não pode produzir dano real. Compreender a distinção não exige intensificar a pressão sobre participantes.

## Entrega

A entrega corresponde ao meio que faz o conteúdo chegar ao participante. E-mail, mensagem instantânea, SMS, ligação, rede social e contato presencial são canais possíveis; um código QR pode conduzir ao destino indicado no cenário.

Nenhum desses meios é fraudulento por natureza. Para classificar a interação, é preciso examinar a representação enganosa e a tentativa de indução, e não simplesmente notar que houve um SMS ou um QR.

A evidência de entrega também tem alcance restrito. Ela pode demonstrar que o conteúdo chegou, mas não que foi lido ou compreendido, nem que produziu a ação desejada. Manter essas observações separadas evita atribuir sucesso a etapas que não foram verificadas.

## Landing page

Landing page quer dizer página de destino, aquela a que um link ou direcionamento conduz. Marketing e aplicações legítimas também usam o termo; sua presença não demonstra fraude. No cenário de phishing, a página pode prolongar a história apresentada pela mensagem.

Para analisá-la, separe o que aparece do que a infraestrutura faz. A aparência é a apresentação visual; o domínio é o nome que participa da URL; o servidor entrega o conteúdo; e o código define comportamentos. Alterar uma dessas partes não altera automaticamente as outras.

Uma cópia visual não transfere o domínio do serviço original nem compromete o site verdadeiro. Também não fornece, só por existir, acesso às contas de quem usa aquele serviço. São conclusões muito maiores do que a semelhança de uma tela permite sustentar.

No laboratório introdutório, a página deve mostrar apenas conteúdo inofensivo. Não inclua formulários que recebam credenciais ou segredos. Uma página simples é suficiente para compreender hospedagem e visita sem introduzir coleta de dados.

## Ação esperada

A ação esperada é o comportamento que foi escolhido para observar na simulação. Defini-la antes do exercício permite alinhar finalidade, autorização e evidência. Sem essa decisão, há risco de interpretar qualquer interação como sucesso ou de guardar informação que não era necessária.

Uma visita a uma página de treinamento, um botão sem transmissão de dados pessoais ou uma confirmação de recebimento podem bastar. Identificar corretamente os componentes do cenário também é uma atividade adequada de aprendizagem. A métrica precisa ser compatível com o objetivo inofensivo, não com uma ambição de comprometer uma conta.

Observe ainda o limite da prova: confirmar recebimento não comprova visita; confirmar visita não demonstra entrega de informação. A ação escolhida determina exatamente qual dessas conclusões seria defensável.

## Uma etapa não garante a seguinte

O encadeamento tem várias interrupções possíveis. Uma mensagem entregue pode não ser lida. Uma história compreendida pode não convencer, e um estímulo que chama atenção pode não levar a um clique. Mesmo uma página aberta pode não produzir o comportamento definido para a simulação.

Por isso, cada evidência precisa ser atribuída à sua etapa. A ocorrência de uma ação humana também não comprova exploração de software nem execução de malware. O cenário reúne componentes e decisões, e não uma ferramenta única que transforma automaticamente entrega em comprometimento.

## Phishing, exploração de navegador e malware

Esses três termos respondem a mecanismos diferentes. Phishing trabalha sobre a decisão da pessoa; exploração de navegador aproveita uma vulnerabilidade nele ou em um componente; malware é software destinado a ações maliciosas ou não autorizadas.

Uma interação pode combinar essas coisas, como um link que conduz a uma exploração ou à entrega de código nocivo, mas a combinação não apaga suas diferenças. Uma página comum carregada não é, só por isso, uma exploração: é necessária uma condição técnica específica. Da mesma forma, o endereço de um link não é o software que teria de ser carregado ou executado.

Na leitura das evidências, identifique qual mecanismo realmente ocorreu, em vez de usar uma palavra ampla para todos. Este laboratório não obtém credenciais reais e não acrescenta exploração ou execução de malware à simples visita inofensiva.

## Alcance entre dispositivos e sistemas

Mensagens e páginas podem ser acessadas em plataformas diferentes, mas o comportamento visual e funcional pode mudar conforme tela e navegador. Essa disponibilidade ampla da Web não torna universal uma exploração técnica.

Um exploit depende da vulnerabilidade e da versão afetada. Um malware depende de sistema operacional, arquitetura e condições de execução; um arquivo destinado ao Windows não se torna executável no Linux ou no macOS apenas porque foi entregue por um link.

Assim, a expressão “funciona em qualquer dispositivo” não é uma conclusão técnica aceitável sobre exploit ou malware. Para avaliar alcance, seria necessário comprovar as condições de cada ambiente, e não extrapolar a partir de uma página que abriu em mais de uma tela.

## Aparência, HTTPS e confiança

Uma tela reconhecível pode ter sido entregue por infraestrutura completamente diferente daquela que o visitante imagina. A semelhança visual não identifica quem controla o destino.

HTTPS protege a comunicação com o domínio apresentado e permite verificar o certificado correspondente. Ele não concede um atestado de honestidade à organização nem à finalidade da página. Um domínio enganoso também pode usar essa proteção de transporte.

Para verificar a situação, trate aparência, endereço e comportamento como observações separadas. A proteção da conexão responde como os dados viajam até aquele destino, não se a solicitação deveria ser atendida.

## Verificação conceitual

Use o caso fictício abaixo para reconhecer os componentes sem colocar uma pessoa ou um serviço real em teste:

> Um instrutor autorizado envia uma mensagem somente a uma conta de teste. A mensagem informa que há uma atividade no portal do laboratório e aponta para `https://treinamento.exemplo.invalid/atividade`. A página mostra “simulação concluída”, não possui formulário e não registra dados pessoais.

Nesse exemplo, a permissão é a autorização explícita do instrutor para atuar no laboratório e na conta de teste; a mera existência da conta não substituiria essa permissão. A história de uma atividade disponível é o pretexto, e o convite para consultá-la funciona como isca. A mensagem realiza a entrega, e a página no caminho `/atividade` é o destino.

Abrir essa página é a ação definida. A evidência autorizada limita-se à confirmação sem dados sensíveis; o texto não relata uma execução real nem um resultado medido. O domínio terminado em `.invalid` é reservado para exemplos e não aponta para um serviço a ser usado.

Se fossem acrescentados exploração de vulnerabilidade, entrega de código malicioso ou armazenamento de senhas, o caso teria outros mecanismos e outros riscos. Nenhum desses procedimentos integra a atividade descrita. A distinção ajuda a manter o exercício dentro do limite conceitual e inofensivo.

## Próxima aula

Agora podemos voltar à infraestrutura sem confundi-la com a influência sobre pessoas. A [aula 11](11-file-hosting-and-firewall-settings.md) examinará Apache, hospedagem e acesso HTTP com conteúdo inofensivo, identificando o que cada verificação de rede realmente demonstra.
