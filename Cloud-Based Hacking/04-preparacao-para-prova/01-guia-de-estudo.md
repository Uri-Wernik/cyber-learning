# Siglas, conceitos e ferramentas do curso

Resumo das siglas e tecnologias estudadas nas aulas 1 a 22.

## Siglas e conceitos

| Sigla ou termo | Nome completo | O que é |
|---|---|---|
| **AWS** | *Amazon Web Services* | Plataforma de nuvem da Amazon. Oferece máquinas virtuais, redes, discos e outros serviços. |
| **IAM** | *Identity and Access Management* - Gestão de Identidade e Acesso | Serviço da AWS que controla usuários, funções e permissões. |
| **EC2** | *Elastic Compute Cloud* | Serviço da AWS usado para criar e executar máquinas virtuais chamadas instâncias. |
| **AMI** | *Amazon Machine Image* | Modelo com sistema e configurações iniciais usado para criar uma instância EC2. |
| **EBS** | *Elastic Block Store* | Disco virtual persistente conectado a uma instância EC2. |
| **VPC** | *Virtual Private Cloud* - Nuvem Privada Virtual | Rede virtual isolada onde ficam os recursos da AWS. |
| **Security Group** | Grupo de segurança | Firewall virtual da AWS que libera ou bloqueia tráfego por protocolo, porta e origem. |
| **2FA / MFA / TOTP** | Autenticação de dois fatores, autenticação multifator e senha temporária | 2FA usa dois fatores; MFA usa dois ou mais; TOTP é o código que muda após alguns segundos. |
| **IP / IPv4 / IPv6** | *Internet Protocol* | IP identifica uma interface na rede; IPv4 e IPv6 são duas versões desse sistema de endereços. |
| **TCP** | *Transmission Control Protocol* | Cria uma conexão confiável entre programas e usa portas para entregar os dados ao serviço correto. |
| **CIDR** | *Classless Inter-Domain Routing* | Forma de representar um endereço ou intervalo de rede, como `192.0.2.0/24`. |
| <span id="dns"></span>**DNS** | *Domain Name System* - Sistema de Nomes de Domínio | Procura registros de um nome e devolve informações como seu endereço IP. |
| **A / AAAA / CNAME / TTL** | Registros e tempo de cache do DNS | `A` aponta para IPv4, `AAAA` para IPv6, `CNAME` cria um alias e `TTL` define o tempo de cache. |
| **HTTP** | *Hypertext Transfer Protocol* - Protocolo de Transferência de Hipertexto | Define como clientes fazem requisições e servidores enviam respostas na Web. |
| <span id="https"></span>**HTTPS** | *Hypertext Transfer Protocol Secure* | É o HTTP protegido por TLS. |
| **TLS** | *Transport Layer Security* - Segurança da Camada de Transporte | Cifra os dados, detecta alterações e permite verificar o certificado do servidor. |
| **CA** | *Certificate Authority* - Autoridade Certificadora | Organização que valida o controle de um nome e assina certificados TLS. |
| **ACME** | *Automatic Certificate Management Environment* | Protocolo que automatiza a emissão e a renovação de certificados TLS. |
| **SSH** | *Secure Shell* | Protocolo para acessar e controlar outra máquina por uma conexão criptografada. |
| **HTML / CSS / JS / DOM** | Estrutura, estilo, comportamento e modelo da página | HTML organiza, CSS estiliza, JavaScript controla ações e o DOM representa a página na memória. |
| **POST / PHP** | Método HTTP e linguagem de servidor | POST envia dados no corpo da requisição; PHP processa esses dados no servidor. |
| **C2** | *Command and Control* - Comando e Controle | Central que envia comandos para agentes remotos e recebe os resultados. |
| **AiTM** | *Adversary-in-the-Middle* - Adversário no Meio | Intermediário ativo que mantém uma conexão com cada lado e repassa as mensagens. |
| <span id="token-de-sessao"></span>**Token de sessão** | Identificador secreto de uma sessão | Representa um login concluído e permite que o servidor reconheça o usuário nas próximas requisições. |
| <span id="session-replay"></span>**Session replay** | Reutilização de sessão | Uso de um token válido em outro cliente para tentar continuar a sessão já autenticada. |
| **WebAuthn / FIDO2 / Passkey** | Padrões de autenticação ligados ao domínio | Usam criptografia em vez de uma senha reutilizável e são mais resistentes a proxies de phishing. |

## SFTP, FTP e FTPS

| Sigla | Nome completo | O que é |
|---|---|---|
| **FTP** | *File Transfer Protocol* - Protocolo de Transferência de Arquivos | Transfere arquivos, mas não possui criptografia nativa. |
| **FTPS** | *FTP over TLS* | É o FTP protegido por TLS. |
| **SFTP** | *SSH File Transfer Protocol* | Transfere arquivos dentro do SSH, normalmente pela porta `22`. Não é FTP com SSH. |

## Ferramentas

| Ferramenta | O que faz |
|---|---|
| **AWS Console** | Painel usado para criar e administrar recursos da AWS. |
| **Kali Linux** | Distribuição Linux que reúne ferramentas de redes e segurança. |
| **OpenSSH** | Implementa o cliente `ssh`, o servidor `sshd` e o SFTP. |
| <span id="apache"></span>**Apache** | Servidor web que recebe requisições HTTP/HTTPS e entrega arquivos ou conteúdo processado. |
| **FileZilla** | Cliente gráfico usado para enviar e baixar arquivos; no curso, utiliza SFTP. |
| **APT / systemctl** | APT instala pacotes; `systemctl` inicia, para e consulta serviços do Linux. |
| **ss / curl** | `ss` mostra portas em escuta; `curl` envia requisições e mostra respostas HTTP/HTTPS. |
| **chown** | Altera o usuário e o grupo proprietários de arquivos e diretórios. |
| **dig / Resolve-DnsName** | Consultam registros DNS no Linux e no Windows. |
| **Let's Encrypt** | Autoridade certificadora que emite certificados TLS automaticamente. |
| <span id="certbot"></span>**Certbot** | Cliente ACME que solicita certificados e pode configurar o Apache. |
| **Git / Go / Make** | Git baixa o código, Go é a linguagem do Evilginx e Make executa as etapas de compilação. |
| <span id="evilginx"></span>**Evilginx** | Framework de proxy reverso AiTM que intermedeia logins e pode observar o token emitido após o MFA. |
| **Phishlet** | Arquivo de configuração do Evilginx que descreve hosts, caminhos e cookies de um fluxo. |

## Evilginx e MFA

O Evilginx não quebra o MFA. Ele encaminha o login verdadeiro em tempo real e pode observar o token de sessão criado **depois** que o segundo fator foi aceito.

[Abrir o simulado das 22 aulas :material-arrow-right:](../quiz.md){ .md-button .md-button--primary }
