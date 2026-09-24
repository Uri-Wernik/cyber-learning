# Como tudo funciona em conjunto

As questões mais difíceis não pedem uma definição isolada. Elas apresentam um estado, como "a porta responde, mas o login falha", e exigem que você descubra qual parte do fluxo já foi comprovada e qual ainda precisa ser investigada.

## Da criação da instância até a shell remota

O acesso SSH começa no plano de controle da AWS, antes de qualquer comando ser digitado. A instância precisa ser criada em uma região conhecida, com uma AMI, capacidade, armazenamento e interface de rede. O key pair associa uma chave pública à identidade que poderá ser usada no sistema. O Security Group decide quais origens podem tentar alcançar TCP 22.

Quando o cliente SSH é executado no computador local, o fluxo segue esta ordem:

1. o cliente obtém o endereço de destino;
2. o sistema local escolhe uma rota e uma porta temporária de origem;
3. os pacotes atravessam a Internet até a rede da AWS;
4. os filtros da nuvem e do sistema permitem ou recusam a chegada;
5. o sistema da instância entrega TCP 22 ao processo `sshd` em escuta;
6. cliente e servidor negociam algoritmos e criam o canal criptográfico;
7. a chave do host identifica o servidor;
8. o usuário remoto e a chave privada participam da autenticação;
9. depois do sucesso, o `sshd` inicia uma shell com os privilégios daquela conta.

Cada observação comprova somente parte do caminho:

| Evidência | O que comprova | O que ainda não comprova |
|---|---|---|
| Instância em estado `running` | A computação foi iniciada. | Que existe rota, porta liberada ou serviço em escuta. |
| Teste TCP positivo na porta 22 | A origem alcançou algum listener naquela porta. | Que usuário e chave serão aceitos. |
| Fingerprint do host exibida | O protocolo SSH respondeu e apresentou uma identidade. | Que aquela identidade pertence ao servidor esperado sem verificação. |
| Prompt remoto exibido | A autenticação foi aceita e uma shell foi aberta. | Que o usuário possui privilégio root ou acesso ao plano de controle da AWS. |

Um timeout aponta primeiro para endereço, rota ou filtro. `Connection refused` indica que o destino foi alcançado, mas não havia listener aceitando naquela porta. `Permission denied` ocorre depois que a rede e o SSH já participaram e desloca a investigação para usuário, chave e autorização.

## Do navegador até um arquivo servido pelo Apache

Ao abrir uma URL HTTP, o navegador pode primeiro consultar DNS para obter o IP do domínio. Depois cria uma conexão TCP com a porta indicada ou com a porta padrão do esquema. O Security Group e o firewall local precisam permitir a chegada, e o Apache precisa estar em escuta.

O navegador envia uma requisição contendo método, caminho e cabeçalhos. O Apache interpreta o host e o caminho segundo sua configuração. Quando o conteúdo é estático, o servidor relaciona a URL a um arquivo abaixo do document root, lê esse arquivo com a identidade do processo e devolve uma resposta HTTP com status, cabeçalhos e corpo.

Esse encadeamento separa quatro estados frequentemente confundidos:

- instalar o pacote cria os arquivos do programa;
- iniciar o serviço cria o processo em execução;
- escutar em uma porta torna o processo disponível naquela interface;
- liberar a rede permite que uma origem tente chegar até ele.

Se a página responde em `127.0.0.1` dentro da instância, Apache, porta local e conteúdo básico já foram parcialmente comprovados. Se o acesso externo falha, reinstalar o pacote não é o primeiro passo. O diagnóstico deve seguir para endereço público, rota, Security Group e firewall do sistema.

Uma resposta `404 Not Found` mostra que o servidor respondeu, mas não encontrou o recurso solicitado no mapeamento atual. Ela é diferente de não conseguir criar a conexão. Uma resposta `403 Forbidden` também vem do servidor, porém informa que a solicitação alcançou o serviço e foi recusada por uma regra ou permissão aplicável.

## O FileZilla usa SSH, não o Apache

Ao selecionar SFTP, o FileZilla atua como cliente do subsistema de transferência do SSH. Ele usa host, porta, usuário, chave privada e a identidade do servidor apresentada pelo `sshd`. Apache não autentica essa conexão.

Depois do login, a interface exibe dois sistemas de arquivos: o painel local representa o computador em que o FileZilla está aberto; o painel remoto representa a instância. Arrastar um item envia ou baixa dados entre caminhos específicos. O status de sucesso da fila comprova a transferência indicada, mas não garante que o arquivo foi colocado no document root.

O usuário autenticado continua sujeito às regras do Linux. Por isso, estas duas frases podem ser verdadeiras ao mesmo tempo:

- a conexão SFTP foi autenticada com sucesso;
- o upload para `/var/www/html` foi negado.

O primeiro resultado fala sobre identidade no SSH. O segundo fala sobre propriedade e permissão no sistema de arquivos. Alterar a propriedade com `chown` pode permitir a escrita do usuário escolhido, mas a mudança deve ser limitada ao caminho necessário e confirmada com uma nova listagem.

Mesmo depois do upload, a publicação é uma verificação separada. O arquivo precisa estar no caminho que o Apache mapeia, o processo web precisa conseguir lê-lo e uma requisição deve receber o conteúdo esperado.

## Do formulário até o processamento em PHP

O navegador começa com o HTML recebido, constrói o DOM e executa os scripts permitidos. JavaScript pode alterar elementos e interceptar o evento de envio. Por isso, ler apenas o arquivo original não basta para afirmar qual requisição será produzida.

Quando o envio tradicional acontece:

1. o navegador coleta campos que possuem `name`;
2. `method` determina o método HTTP;
3. `action` determina o recurso de destino;
4. com `POST`, os valores seguem no corpo da requisição;
5. HTTPS, quando usado, protege o transporte com TLS;
6. Apache recebe a requisição e encaminha o arquivo PHP ao processamento configurado;
7. PHP disponibiliza os campos em `$_POST`;
8. o código valida a entrada e tenta realizar a operação prevista;
9. o servidor devolve uma resposta, que pode incluir redirecionamento.

O processo PHP herda a identidade usada pelo serviço web. Essa identidade, e não o visitante do navegador, precisa ter acesso ao arquivo de destino. Se `fopen` falhar, a aplicação deve tratar a falha. Tornar todo o diretório gravável por qualquer usuário com permissão `777` troca um diagnóstico por uma exposição maior.

No laboratório seguro, o valor registrado deve ser um evento fictício, nunca uma senha real. A comprovação termina com a leitura controlada desse evento, a remoção do arquivo e o encerramento dos recursos usados.

## Phishing não altera as camadas técnicas

O pretexto e a isca tentam convencer uma pessoa a iniciar o fluxo. Depois do clique, a infraestrutura continua seguindo DNS, IP, TCP, TLS, HTTP, navegador e servidor. A engenharia social não substitui esses mecanismos.

Da mesma forma, o cadeado HTTPS não avalia a intenção da página. Ele informa que o navegador criou uma conexão protegida com o domínio mostrado e que um certificado aceito participou da autenticação do servidor. Uma página enganosa pode usar HTTPS válido.

Uma landing page também não compromete automaticamente o navegador ou o sistema. Para demonstrar cada transição seriam necessárias evidências próprias. No exercício publicado, o objetivo é compreender o fluxo de uma página e registrar uma ação fictícia, sem explorar software e sem coletar segredo.

## Como localizar a camada da falha

Ao receber um cenário, comece pelo último fato comprovado:

| Cenário | Camada já comprovada | Próxima investigação |
|---|---|---|
| A instância aparece como `running`, mas a porta não responde. | Plano de controle e computação. | IP, rota, filtros e processo em escuta. |
| TCP 22 responde, mas o SSH nega acesso. | Rede e listener SSH. | Usuário, chave privada, permissões da chave e autorização remota. |
| O SFTP conecta, mas não envia ao document root. | Rede, SSH e autenticação. | Propriedade e permissão do caminho remoto. |
| Apache responde localmente, mas não externamente. | Serviço e porta dentro da instância. | Rota pública, Security Group e firewall local. |
| O servidor devolve `404`. | Rede, HTTP e processo web. | URL, configuração de host, document root e nome do recurso. |
| O POST chega ao PHP, mas o arquivo não é criado. | Navegador, HTTP, Apache e execução PHP. | Identidade do processo, caminho, modo de abertura e permissões. |

O diagnóstico termina com uma nova evidência. Alterar uma regra sem repetir o teste não comprova correção. Mudar propriedade sem listar o caminho novamente não confirma o novo estado. A prova pode perguntar tanto qual ação realizar quanto qual observação valida o resultado.

## Antes do simulado

Você deve conseguir narrar os quatro fluxos sem decorar uma receita:

- computador local até `sshd`;
- navegador até Apache e document root;
- FileZilla até o sistema de arquivos remoto;
- formulário até PHP e registro fictício.

Se alguma transição ainda parecer automática, retorne a [Conceitos fundamentais](02-conceitos-fundamentais.md) ou consulte a ferramenta correspondente em [Ferramentas e comandos](03-ferramentas-e-comandos.md).

[Montar o simulado :material-arrow-right:](../quiz.md){ .md-button .md-button--primary }
