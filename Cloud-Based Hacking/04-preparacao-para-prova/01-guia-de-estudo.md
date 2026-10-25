# O essencial das aulas 1 a 22

Este guia reúne os fundamentos que conectam as 22 aulas publicadas. Ele serve para revisão rápida e não substitui as explicações e verificações completas de cada aula.

## Segurança, autorização e phishing

| Termo | Explicação |
|---|---|
| <span id="autorizacao"></span>**Hacking ético e autorização** | Um teste só é ético quando existe autorização explícita de quem possui autoridade sobre os ativos, além de objetivo legítimo, limites claros e cuidado com os efeitos produzidos. |
| **Escopo e regras de engajamento** | Definem quais ativos, contas, horários e técnicas estão permitidos, quem participa, quando interromper e como tratar as evidências. Um serviço público ou uma falha aparente não representam consentimento. |
| **Pentest e Red Team** | Pentest procura e confirma vulnerabilidades dentro de um recorte. Red Team avalia se uma organização impede ou percebe uma sequência de ações orientada por objetivos. Ambos exigem autorização. |
| <span id="phishing"></span>**Phishing** | Forma de engenharia social que usa uma mensagem ou interface enganosa para tentar induzir uma ação. Pretexto é a história; isca é o motivo imediato; entrega é o canal; landing page é o destino. |

## Nuvem e AWS

| Termo | Explicação |
|---|---|
| <span id="computacao-em-nuvem"></span>**Computação em nuvem** | Modelo que oferece processamento, armazenamento, redes e outros recursos por rede, com provisionamento sob demanda e uso mensurado. A nuvem continua sendo infraestrutura física em datacenters. |
| **AWS** | Provedor de nuvem que oferece serviços administrados por Console e APIs. O provedor protege a infraestrutura física; o cliente ainda precisa proteger identidades, rede, sistema, aplicações e dados. |
| <span id="regiao-aws"></span>**AWS Region** | Área geográfica que reúne infraestrutura da AWS. Instâncias, AMIs, key pairs, volumes e Security Groups são regionais; selecionar a Região errada pode fazer um recurso parecer ausente. |
| <span id="iam"></span>**IAM** | *Identity and Access Management*. Controla identidades e permissões dentro da AWS. O usuário root da conta deve ser protegido com MFA e reservado para tarefas que realmente o exigem. |
| <span id="ec2"></span>**EC2** | *Elastic Compute Cloud*. Serviço da AWS usado para criar máquinas virtuais chamadas instâncias. Uma instância em estado `running` está ligada, mas isso não prova que seus serviços estão acessíveis. |
| <span id="ami"></span>**AMI** | *Amazon Machine Image*. Imagem que fornece o sistema e a configuração inicial usados para criar uma instância EC2. |
| **Tipo de instância** | Combinação de vCPU, RAM e capacidade de rede. Ele não é o disco da máquina e pode gerar cobrança enquanto a instância estiver em execução. |
| <span id="ebs"></span>**EBS** | *Elastic Block Store*. Armazenamento em bloco usado como disco virtual persistente da instância. Pode continuar existindo e gerando custo quando a computação está parada. |
| <span id="ciclo-de-vida-ec2"></span>**Ciclo de vida e custos** | Parar preserva a instância para novo início; terminar remove a instância definitivamente. A limpeza também precisa conferir volumes, snapshots, endereços, tráfego e outros recursos cobrados. |
| <span id="security-group"></span>**Security Group** | Firewall virtual e stateful associado à interface da instância. Permite tráfego por protocolo, porta e origem, mas não instala nem inicia serviços. |
| <span id="ip-e-porta"></span>**IP e porta** | O IP identifica uma interface na rede. A porta é um número lógico de `0` a `65535` que entrega a conexão ao processo correto, como SSH em `22`, HTTP em `80` e HTTPS em `443`. |
| **Disponibilidade, escalabilidade e elasticidade** | Disponibilidade é permanecer acessível; escalabilidade é suportar mais carga; elasticidade é aumentar ou reduzir recursos rapidamente. Nenhuma delas acontece automaticamente só porque o serviço está na nuvem. |
| <span id="c2"></span>**Callback e C2** | Um callback parte de um agente já executado para um serviço autorizado. **C2**, ou *Command and Control*, coordena agentes e resultados, mas não cria privilégios nem atravessa qualquer controle de rede. |

## Linux e acesso remoto

| Termo | Explicação |
|---|---|
| **Kali Linux** | Distribuição Linux baseada no Debian e voltada a testes de segurança. Imagens de nuvem podem ser enxutas, por isso ferramentas precisam ser verificadas antes do uso. |
| <span id="key-pair"></span>**Key pair** | A chave pública é colocada na instância; a chave privada permanece secreta e protegida no computador local. A chave privada não é enviada ao servidor durante a autenticação. |
| <span id="ssh"></span>**SSH** | *Secure Shell*. Cria um canal criptografado entre o cliente local e o processo `sshd` remoto, normalmente sobre TCP na porta `22`, e pode transportar shell, arquivos e outros canais. |
| <span id="terminal-shell"></span>**Terminal, shell e CLI** | O terminal apresenta entrada e saída; o shell, como Bash ou Zsh, interpreta comandos; CLI é a interação por texto. Depois do SSH, os comandos são executados na máquina remota. |
| **Caminhos e comandos** | Caminhos absolutos começam em `/`; relativos partem do diretório atual. Em uma linha como `ls -la /var/www/html`, `ls` é o comando, `-la` reúne opções e o caminho é o argumento. |

<span id="transferencia-arquivos"></span>
## FTP, FTPS e SFTP

| Protocolo | Explicação |
|---|---|
| **FTP** | Transfere arquivos, mas não possui criptografia nativa e normalmente usa a porta `21` para controle. |
| **FTPS** | Continua sendo FTP, agora protegido por TLS. |
| **SFTP** | É o *SSH File Transfer Protocol*: transfere arquivos dentro do SSH, normalmente pela porta `22`. Não é FTP protegido por SSH. |
| **FileZilla Client** | Cliente gráfico que pode usar SFTP para enviar e baixar arquivos. O painel local representa o computador do usuário; o remoto representa o sistema de arquivos da instância. |

## Web, arquivos e programas no servidor

| Termo | Explicação |
|---|---|
| <span id="apache"></span>**Apache** | Servidor web que recebe requisições HTTP, procura o recurso configurado e devolve uma resposta. O pacote instalado só atende conexões quando o serviço está ativo e a rede permite a chegada. |
| <span id="document-root"></span>**Document root e `index.html`** | O document root é o diretório inicial usado pelo Apache para servir arquivos, comumente `/var/www/html`. Ao pedir `/`, o servidor pode procurar um arquivo de índice como `index.html`. |
| <span id="http"></span>**HTTP** | Protocolo de aplicação baseado em requisições e respostas. TCP transporta os bytes, IP encaminha os pacotes e a porta identifica o processo servidor. |
| **Transferir e publicar** | Enviar um arquivo para `/home/kali` comprova transferência, não publicação. Para aparecer na Web, ele precisa estar no local servido, ter permissões adequadas e ser entregue por um servidor ativo. |
| <span id="formulario-post"></span>**Formulário e `POST`** | Em HTML, `action` indica a URL de destino, `method="post"` coloca normalmente os valores no corpo da requisição e `name` fornece a chave de cada campo. `POST` não cifra os dados. |
| <span id="php"></span>**PHP** | Linguagem executada no servidor. O Apache encaminha a requisição ao interpretador, o programa processa a entrada e o navegador recebe apenas a resposta produzida. |
| <span id="permissoes-linux"></span>**Proprietário e permissões** | O usuário do SSH, o processo web e o proprietário do arquivo podem ser identidades diferentes. Permissão `777` concede acesso amplo e não substitui o diagnóstico nem o princípio do menor privilégio. |

## DNS e transporte protegido

| Termo | Explicação |
|---|---|
| <span id="dns"></span>**DNS** | *Domain Name System*. Resolve nomes para endereços. Domínio é um nome; IP identifica uma interface; URL também informa protocolo, host e caminho. |
| <span id="registros-dns"></span>**A, CNAME e TTL** | `A` associa um nome a um IPv4, `CNAME` cria um nome alternativo e `TTL` informa por quanto tempo uma resposta pode ficar em cache. Registrar um domínio não publica sozinho esses registros. |
| <span id="https"></span>**HTTPS** | É HTTP protegido por TLS. Protege a comunicação com o domínio apresentado, mas não prova que a página ou organização é honesta. |
| <span id="tls"></span>**TLS** | Fornece confidencialidade, integridade e autenticação do servidor por certificado. O certificado apresenta a identidade; a chave privada correspondente deve permanecer secreta. |
| <span id="certbot"></span>**Certbot, ACME e Let's Encrypt** | Certbot usa o protocolo ACME para solicitar um certificado à Let's Encrypt, comprovar o controle do domínio e configurar ou orientar a configuração do servidor web. |

## Autenticação, sessão e Evilginx

| Termo | Explicação |
|---|---|
| <span id="mfa"></span>**2FA e MFA** | 2FA exige dois fatores; MFA é o termo mais amplo para dois ou mais fatores independentes. Eles fortalecem a autenticação, mas não definem sozinhos como a sessão posterior será protegida. |
| <span id="cookie-e-sessao"></span>**Cookie e sessão** | A sessão mantém o estado autenticado no serviço. O navegador costuma guardar em um cookie um identificador ou token associado a essa sessão. |
| <span id="token-de-sessao"></span>**Token de sessão** | Segredo emitido depois da autenticação para representar uma sessão válida. Deve ser protegido como credencial mesmo sem revelar a senha. |
| <span id="proxy-reverso"></span>**Proxy reverso e AiTM** | O proxy recebe a conexão do navegador e abre outra conexão com a aplicação. Em um fluxo *Adversary-in-the-Middle*, ele intermedeia as mensagens em tempo real. |
| <span id="evilginx"></span>**Evilginx e session replay** | Evilginx é um framework de proxy reverso AiTM. Ele pode observar uma sessão emitida depois do MFA; tentar reutilizar esse token em outro cliente é chamado de *session replay*. |

O Evilginx não quebra a criptografia do MFA. O usuário conclui o desafio verdadeiro, e o risco surge porque o token criado **depois** da autenticação também atravessa o intermediário. O resultado depende do serviço, do tipo de MFA e dos controles aplicados à sessão.

[Abrir o quiz das 22 aulas :material-arrow-right:](../quiz.md){ .md-button .md-button--primary }
