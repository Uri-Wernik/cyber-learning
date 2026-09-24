# Conceitos fundamentais

Os conceitos abaixo formam um único sistema. A prova pode começar em uma definição simples e terminar perguntando por que um resultado não comprova a hipótese apresentada. Por isso, cada termo aparece junto de sua função, de suas dependências e de seus limites.

## A autorização vem antes da técnica

**Segurança ofensiva** usa a perspectiva de um possível atacante para encontrar e demonstrar riscos. **Hacking ético** não é uma ferramenta ou uma técnica diferente: é a aplicação desse conhecimento com autorização, limites e responsabilidade. Sem esses elementos, ter boa intenção ou usar um ambiente acessível não torna a atividade legítima.

Os termos que delimitam um teste possuem funções diferentes:

| Termo | Significado na atividade |
|---|---|
| **Ativo** | Recurso que possui valor, como uma conta, aplicação, domínio ou instância. |
| **Alvo** | Elemento específico que será avaliado durante o teste. |
| **Escopo** | Limite do que está incluído e excluído, com sistemas, período e técnicas permitidas. |
| **Autorização** | Consentimento concedido por quem possui autoridade sobre os ativos. |
| **Regras de engajamento** | Condições operacionais, contatos, horários, interrupções e formas de produzir evidência. |

Um **pentest** procura encontrar e comprovar vulnerabilidades dentro de um escopo definido. Uma operação **Red Team** trabalha por objetivos e simula um adversário para avaliar como pessoas, processos e tecnologia se comportam em conjunto. Ambos exigem autorização. O nome Red Team não amplia o escopo nem elimina restrições.

Esses fundamentos aparecem em [Visão geral do curso](../01-introduction-to-cloud-computing-for-hackers/01-teaser.md) e em [Hacking ético, pentest e Red Team](../01-introduction-to-cloud-computing-for-hackers/02-introduction-to-hacking-using-the-cloud.md).

### Evidência e camadas de comprometimento

Uma evidência só sustenta a conclusão correspondente à camada observada. Acesso a uma **conta** permite agir dentro daquele serviço conforme os privilégios da conta. Código executado em uma página continua sujeito à **sandbox** do navegador e à **Same-Origin Policy (SOP)**, a política que limita o acesso entre origens diferentes. Controle do **sistema operacional** exige demonstrar um processo local, a identidade sob a qual ele executa e os privilégios disponíveis.

Essas transições não são automáticas:

1. uma sessão de conta não prova execução de código no navegador;
2. execução no navegador não prova saída da sandbox;
3. um processo no sistema não garante privilégio administrativo;
4. privilégio em uma máquina não concede acesso ao plano de controle da nuvem.

**Autenticação** verifica uma identidade. **Autorização** decide o que essa identidade pode fazer. **MFA (Multi-Factor Authentication)** exige fatores de categorias diferentes durante a autenticação. Depois do sucesso, o serviço pode emitir um **token de sessão**, um segredo temporário que representa aquela sessão. Tentar reutilizar esse token não quebra a criptografia do MFA, mas tenta aproveitar uma autenticação já aceita. Validade curta, vínculo ao dispositivo e nova autenticação podem limitar a reutilização.

## A nuvem continua sendo infraestrutura real

**Computação em nuvem** oferece computação, rede e armazenamento como serviços provisionados por um plano de controle. O usuário vê botões e APIs, mas o provedor continua operando datacenters, servidores físicos, cabos, roteadores e dispositivos de armazenamento.

A **virtualização** permite dividir a capacidade de um computador físico em ambientes lógicos isolados. O **hipervisor** coordena essa divisão. Uma **máquina virtual** recebe processador virtual, memória, interfaces de rede e discos virtuais. Na AWS, uma máquina criada pelo serviço Amazon Elastic Compute Cloud é chamada de **instância EC2**.

Uma **AMI (Amazon Machine Image)** é o modelo usado para iniciar a instância. Ela não é a máquina em execução. O **tipo de instância** define uma combinação de capacidade computacional. Um **volume EBS (Elastic Block Store)** fornece armazenamento em bloco que pode continuar existindo independentemente do estado da computação, conforme a configuração.

O **plano de controle** é a camada usada para criar, alterar e remover recursos, como o Console da AWS e suas APIs. O **plano de dados** é onde a carga de trabalho realmente executa e troca dados. Entrar por SSH no Kali modifica o sistema da instância; alterar uma regra no Console modifica um recurso do plano de controle.

### Conta, região e responsabilidade

A **conta AWS** é o limite administrativo e financeiro principal. O **usuário root da AWS** controla essa conta e não é o mesmo que o usuário **root do Linux**, que possui privilégios máximos dentro de um sistema operacional.

O **IAM (Identity and Access Management)** administra identidades e políticas na AWS. Uma política expressa ações permitidas ou negadas sobre recursos. O princípio do **menor privilégio** concede apenas o necessário para a tarefa. Credenciais temporárias reduzem o tempo de exposição em comparação com segredos permanentes, mas não eliminam a necessidade de MFA, armazenamento seguro e revisão de permissões.

Uma **região** é uma área geográfica na qual o provedor organiza serviços. Muitos recursos precisam ser procurados na região onde foram criados. Escolher outra região no Console pode dar a falsa impressão de que a instância desapareceu.

No modelo de **responsabilidade compartilhada**, o provedor protege a infraestrutura que opera, enquanto o cliente continua responsável por suas identidades, dados, configurações, sistema convidado e exposição de rede, conforme o serviço utilizado. Criar uma instância não autoriza testar a infraestrutura compartilhada do provedor ou recursos de outros clientes.

**AWS Free Tier** descreve ofertas com limites de gratuidade, não uma garantia de custo zero. **AWS Budgets** acompanha valores e pode gerar alertas conforme a configuração, mas não deve ser tratado como um bloqueio universal de cobrança. Parar uma instância interrompe a computação, porém volumes, snapshots ou endereços associados podem continuar provisionados. Encerrar o laboratório exige revisar e remover cada recurso desnecessário.

Essas relações são desenvolvidas em [O que é computação em nuvem?](../01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud.md), [Roteiro e laboratório seguro](../02-cloud-basics/05-introduction-to-cloud-basics.md), [Criando e protegendo uma conta AWS](../02-cloud-basics/06-signing-up-with-aws.md) e [Provisionando Kali Linux no EC2](../02-cloud-basics/07-installing-kali-linux-on-the-cloud.md).

## A rede transporta dados entre processos

Uma **network**, ou rede, é um conjunto de dispositivos e interfaces conectados que trocam dados segundo protocolos. Uma **LAN (Local Area Network)** é uma rede local. A **Internet** interliga muitas redes. A **Web** é um dos serviços que funciona sobre a Internet, principalmente por HTTP e HTTPS. A **nuvem** usa redes e Internet, mas inclui também computação, armazenamento, gerenciamento e modelos de serviço.

**Cliente** e **servidor** são papéis em uma comunicação. O cliente inicia uma interação; o processo servidor aguarda solicitações e responde. Uma máquina não recebe um desses papéis para sempre. Ela pode ser cliente em um fluxo e servidor em outro.

Em uma conexão direta, o operador inicia a comunicação com um serviço no destino. Em um **callback**, um componente no destino inicia uma conexão de retorno para um receptor preparado. Um **C2 (Command and Control)** usa comunicação para comandar agentes dentro de um exercício autorizado. **EC2** e **C2** não são a mesma coisa: EC2 fornece computação, enquanto C2 descreve uma função que depende de software e fluxo próprios. A diferença é apresentada em [Nuvem em testes autorizados](../01-introduction-to-cloud-computing-for-hackers/04-why-learn-cloud-computing-as-a-hacker.md).

### Identificadores diferentes respondem a perguntas diferentes

Um **endereço IP** identifica uma interface na rede. Um IP **privado** é usado em um espaço de endereçamento interno; um IP **público** pode ser roteado pela Internet quando a arquitetura e as regras permitem. Ter um IP público não garante que exista serviço acessível.

Um **domínio** é um nome. O **DNS (Domain Name System)** resolve esse nome para dados como endereços IP. Uma **URL (Uniform Resource Locator)** descreve como localizar um recurso e pode incluir esquema, host, porta, caminho, consulta e fragmento.

Uma **porta de rede** é um identificador lógico de `0` a `65535`, não uma entrada física. Ela ajuda o sistema operacional a entregar o tráfego ao processo correto. O servidor costuma escutar em uma porta conhecida; o cliente usa uma porta de origem temporária para a conexão.

Um **protocolo** define regras para a comunicação. Neste trecho do livro:

- **IP** leva pacotes entre endereços de rede;
- **TCP** cria um fluxo confiável entre portas;
- **HTTP** organiza requisições e respostas da Web;
- **HTTPS** usa HTTP protegido por TLS;
- **SSH** cria um canal remoto autenticado e criptografado;
- **SFTP** transfere arquivos dentro de uma sessão SSH.

HTTP ou SSH não substituem TCP e IP. Eles funcionam em camadas: dados da aplicação seguem por TCP, que segue por IP. Uma porta padrão é uma convenção, não uma obrigação. SSH costuma usar TCP 22, HTTP usa TCP 80 e HTTPS usa TCP 443.

### Rota, filtro e processo em escuta

Para uma conexão alcançar um serviço, várias condições precisam ser verdadeiras:

1. o nome, quando usado, deve resolver para o endereço esperado;
2. origem e destino precisam ter uma rota de ida e retorno;
3. o **Security Group** da AWS e o firewall do sistema devem permitir o tráfego;
4. um processo deve estar em **escuta** no endereço e na porta;
5. o protocolo e a autenticação devem ser aceitos pelo serviço.

O Security Group filtra tráfego da instância. Ele não instala nem inicia programas. Iniciar o Apache não cria automaticamente uma regra de entrada. Por isso, "porta liberada" e "serviço iniciado" são estados diferentes.

## Linux organiza processos, identidades e arquivos

**Linux** é uma família de sistemas baseada no kernel Linux. **Debian** é uma distribuição, e **Kali Linux** deriva dela com ferramentas voltadas a testes de segurança. Kali não transforma uma ação em autorizada e não ignora as permissões do sistema.

O **terminal** apresenta uma interface de entrada e saída. A **shell**, como Bash, interpreta comandos e inicia programas. **CLI (Command-Line Interface)** é o modo de interação por texto. O prompt mostra contexto como usuário, máquina e diretório, mas não é o comando em si.

O diretório **raiz**, representado por `/`, é o início da árvore de arquivos. O usuário **root** é uma identidade administrativa. O símbolo e o usuário têm nomes semelhantes, mas funções diferentes.

Um **caminho absoluto** começa em `/` e independe do diretório atual. Um **caminho relativo** é interpretado a partir do diretório em que a shell está. Um comando normalmente combina **programa**, **opções** e **argumentos**. O código de saída informa se o programa relatou sucesso ou falha, mas ainda precisa ser interpretado junto da evidência produzida.

Cada arquivo possui **proprietário**, **grupo** e permissões para leitura, escrita e execução. A identidade de um processo determina quais dessas permissões ele recebe. Autenticar como `kali` por SFTP não concede escrita automática em um diretório pertencente a `root`.

O [acesso remoto com SSH](../02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh.md) conecta o cliente local ao processo `sshd` da instância. A chave do usuário participa da autenticação; a chave do host identifica o servidor. A fingerprint exibida na primeira conexão deve ser verificada antes de criar confiança. Os [fundamentos do terminal Linux](../02-cloud-basics/09-linux-terminal-basics.md) fornecem o contexto para interpretar comandos, caminhos e falhas.

## A Web liga navegador, servidor e aplicação

Em uma interação web, o navegador envia uma **requisição HTTP** e o servidor devolve uma **resposta HTTP**. A requisição inclui método, caminho, cabeçalhos e, quando aplicável, corpo. A resposta inclui um **status code**, cabeçalhos e conteúdo.

O **Apache HTTP Server** é um processo que pode escutar requisições HTTP. O **document root** é a raiz de conteúdo que sua configuração usa para mapear caminhos da URL para arquivos ou aplicações. Colocar um arquivo em outro diretório da instância não o publica automaticamente.

No navegador, **HTML** descreve a estrutura, **CSS** define apresentação e **JavaScript** pode alterar comportamento. O **código-fonte recebido** é a resposta original. O **DOM (Document Object Model)** é a representação em memória que o navegador constrói e que scripts podem modificar. Uma cópia estática preserva apenas recursos obtidos; ela não reproduz automaticamente APIs, banco de dados, autenticação ou lógica do servidor original.

### Formulário, POST e PHP

Em um formulário HTML:

- `id` identifica o elemento no documento e pode ligá-lo a rótulos, estilos ou scripts;
- `name` fornece a chave associada ao valor enviado;
- `action` indica o recurso de destino;
- `method` escolhe o método HTTP, como `POST`.

Com `POST`, os campos seguem no corpo da requisição. Isso não cria criptografia. Quem protege o transporte é HTTPS, quando TLS está corretamente estabelecido.

**PHP** é executado no servidor quando o Apache está configurado para encaminhar o recurso ao interpretador adequado. O navegador recebe o resultado, não o código PHP. A superglobal `$_POST` reúne dados enviados pelo cliente e deve ser tratada como entrada não confiável.

Quando uma aplicação abre um arquivo, o modo escolhido define se haverá leitura, substituição ou acréscimo. A gravação ocorre com a identidade do processo web. Uma falha de `fopen` deve ser tratada explicitamente, não escondida com permissão `777`. No laboratório, basta registrar um evento fictício, restringir o arquivo e removê-lo no encerramento.

O fluxo completo é construído em [Apache, HTTP e exposição web](../03-phishing/11-file-hosting-and-firewall-settings.md), [Cópia de páginas e SFTP](../03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud.md), [Publicando uma página no Apache](../03-phishing/13-creating-a-fake-login-page-on-the-cloud.md), [Entendendo o envio de formulários](../03-phishing/14-modifying-the-page-to-steal-login-information.md) e [Arquivos, permissões e PHP](../03-phishing/15-stealing-facebook-login-using-an-identical-fake-login-page.md).

## Phishing descreve a manipulação, não o protocolo

**Engenharia social** busca influenciar decisões humanas. **Phishing** aplica essa manipulação por uma comunicação enganosa para induzir uma ação, como abrir um link ou enviar informação. O **pretexto** é a história que dá sentido ao pedido. A **isca** cria interesse, urgência ou curiosidade. A **landing page** é um possível destino do fluxo.

Uma página falsa não é automaticamente um **exploit**, porque pode não explorar falha de software. Também não é automaticamente **malware**, porque pode não instalar código persistente no sistema. HTTPS pode proteger a comunicação com essa página sem atestar sua intenção. A distinção e o modelo seguro de demonstração aparecem em [Phishing e engenharia social](../03-phishing/10-introduction-to-phishing.md).

No laboratório autorizado, a evidência deve ser proporcional ao objetivo. Registrar que um formulário fictício foi enviado comprova a interação sem coletar senhas reais. No encerramento, arquivos, regras de rede e recursos de nuvem criados para o exercício precisam ser removidos.
