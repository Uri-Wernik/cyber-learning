# O essencial das aulas 1 a 22

Somente os conceitos e as ferramentas mais importantes do curso.

## Conceitos essenciais

| Termo | Explicação |
|---|---|
| **AWS** | Plataforma de nuvem da Amazon, onde são criados servidores, discos e redes virtuais. |
| <span id="iam"></span>**IAM** | *Identity and Access Management*. Controla identidades e permissões dentro da AWS. |
| <span id="ec2"></span>**EC2** | *Elastic Compute Cloud*. Serviço da AWS usado para criar máquinas virtuais chamadas instâncias. |
| <span id="ami"></span>**AMI** | *Amazon Machine Image*. Modelo com sistema e configurações usado para criar uma instância EC2. |
| <span id="ebs"></span>**EBS** | *Elastic Block Store*. Disco virtual persistente conectado à instância. |
| <span id="security-group"></span>**Security Group** | Firewall virtual da AWS. É o porteiro que decide qual tráfego pode chegar à instância. |
| <span id="ip-e-porta"></span>**IP e porta** | O IP identifica a máquina na rede; a porta entrega a conexão ao programa correto, como `22`, `80` ou `443`. |
| <span id="dns"></span>**DNS** | *Domain Name System*. Procura um nome e devolve seu IP, como uma agenda de endereços. |
| <span id="registros-dns"></span>**A, CNAME e TTL** | `A` liga um nome a um IPv4, `CNAME` cria um apelido e `TTL` define o tempo de cache da resposta. |
| <span id="http"></span>**HTTP** | Protocolo usado para pedidos e respostas na Web. |
| <span id="https"></span>**HTTPS** | É o HTTP protegido por TLS. |
| <span id="tls"></span>**TLS** | Cifra a comunicação, detecta alterações e verifica o certificado apresentado pelo servidor. |
| <span id="ssh"></span>**SSH** | *Secure Shell*. Permite controlar outra máquina por uma conexão criptografada. |
| <span id="mfa"></span>**2FA e MFA** | Exigem mais de uma prova no login, como senha e código temporário. |
| <span id="cookie-e-sessao"></span>**Cookie e sessão** | O cookie guarda um identificador; a sessão mantém o usuário reconhecido após o login. |
| <span id="token-de-sessao"></span>**Token de sessão** | Segredo que representa um login concluído. É como uma pulseira de acesso válida por algum tempo. |
| <span id="c2"></span>**C2** | *Command and Control*, em português **Comando e Controle**. Central que envia comandos para agentes remotos e recebe resultados. |
| <span id="proxy-reverso"></span>**Proxy reverso e AiTM** | O proxy fica entre cliente e aplicação. Em um fluxo AiTM, ele mantém uma conexão com cada lado e repassa as mensagens. |
| <span id="session-replay"></span>**Session replay** | Reutilização de um token válido para tentar continuar uma sessão já autenticada. |

<span id="transferencia-arquivos"></span>
## FTP, FTPS e SFTP

| Protocolo | Explicação |
|---|---|
| **FTP** | Transfere arquivos, mas não possui criptografia nativa. |
| **FTPS** | É o FTP protegido por TLS. |
| **SFTP** | Transfere arquivos dentro do SSH, normalmente pela porta `22`. Não é FTP com SSH. |

## Ferramentas essenciais

| Ferramenta | Para que serve |
|---|---|
| **Kali Linux** | Sistema Linux que reúne ferramentas de redes e segurança. |
| <span id="apache"></span>**Apache** | Servidor web. Funciona como um garçom: recebe o pedido, busca o conteúdo e entrega a resposta. |
| <span id="php"></span>**PHP** | Linguagem executada no servidor para receber dados, aplicar regras e gerar respostas. |
| **FileZilla** | Programa gráfico usado para enviar e baixar arquivos por SFTP. |
| <span id="certbot"></span>**Certbot, ACME e Let's Encrypt** | Certbot usa o protocolo ACME para pedir à Let's Encrypt um certificado TLS e pode configurar o Apache. |
| <span id="evilginx"></span>**Evilginx** | Framework de proxy reverso AiTM que intermedeia um login e pode observar o token emitido após o MFA. |

## Evilginx e MFA

O Evilginx não quebra o MFA. Ele encaminha o login verdadeiro e pode observar o token criado **depois** que o segundo fator foi aceito.

[Abrir o simulado das 22 aulas :material-arrow-right:](../quiz.md){ .md-button .md-button--primary }
