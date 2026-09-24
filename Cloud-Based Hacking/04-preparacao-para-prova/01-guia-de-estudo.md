# Conceitos e ferramentas das aulas 1 a 22

Esta é uma lista curta para consulta. Cada item explica **o que é** e **como funciona**, sem repetir o conteúdo completo das aulas.

## Mapa rápido das 22 aulas

1. **Visão geral:** conta, navegador e sistema operacional são camadas diferentes. Um **token de sessão** representa um login já concluído.
2. **Pentest e Red Team:** pentest procura e comprova falhas; Red Team simula um adversário para testar vários controles trabalhando juntos.
3. **Computação em nuvem:** servidores físicos são divididos em recursos virtuais que podem ser criados e removidos por painel ou API.
4. **Nuvem e conexões:** cliente inicia uma comunicação, servidor responde, **callback** é uma conexão de retorno e **C2** coordena agentes remotos.
5. **Ciclo do laboratório:** uma instância pode estar iniciando, ligada, parando, parada ou encerrada. Armazenamento e outros recursos podem continuar existindo.
6. **Conta AWS:** **IAM** controla identidades e permissões; **MFA** pede mais de um fator; regiões separam recursos geograficamente.
7. **Kali no EC2:** a **AMI** é o modelo, **EC2** é a máquina virtual, **EBS** é o disco e o **Security Group** filtra tráfego.
8. **SSH:** cria um canal remoto criptografado. O cliente roda no computador local e o processo `sshd` atende na máquina remota.
9. **Terminal Linux:** a shell interpreta comandos; caminhos localizam arquivos; usuário, grupo e permissões controlam o acesso.
10. **Phishing:** combina uma mensagem, um motivo e uma página para induzir uma ação. Não é a mesma coisa que exploit ou malware.
11. **Apache e HTTP:** Apache escuta requisições web, encontra o recurso solicitado e devolve uma resposta HTTP.
12. **Cópia e SFTP:** uma cópia estática salva o que o navegador recebeu; FileZilla usa SFTP para transferir arquivos por SSH.
13. **Publicação no Apache:** o **document root** é a pasta publicada. `chown` altera o proprietário para permitir ou bloquear escrita.
14. **Formulários:** HTML cria campos; JavaScript pode alterar o DOM; `POST` envia dados no corpo da requisição.
15. **PHP e arquivos:** PHP executa no servidor, lê `$_POST` e pode abrir, escrever e fechar arquivos conforme as permissões do processo.
16. **Domínio e DNS:** DNS transforma um nome em dados como um endereço IP. O navegador ainda precisa conectar ao serviço depois da resolução.
17. **Registros DNS:** registro **A** aponta para IPv4; **AAAA** aponta para IPv6; **CNAME** cria um nome alternativo; **TTL** controla cache.
18. **HTTPS e TLS:** TLS cifra a comunicação, detecta alterações e permite verificar o certificado apresentado pelo servidor.
19. **Certbot e ACME:** Certbot conversa com uma autoridade certificadora, prova o controle do domínio e configura o certificado no Apache.
20. **Evilginx:** é um proxy reverso AiTM que fica entre navegador e aplicação e consegue observar dados que atravessam as duas conexões.
21. **Componentes do Evilginx:** domínio, DNS, IP, TLS e **phishlets** trabalham juntos para intermediar hosts e fluxos de autenticação.
22. **Sessão e MFA:** o proxy encaminha senha e segundo fator em tempo real e pode observar o token emitido depois do login.

## Conceitos que mais aparecem

### Token de sessão

- **O que é:** um valor secreto que identifica uma sessão já autenticada.
- **Como funciona:** depois do login, o servidor entrega o token ao navegador. O navegador o envia nas próximas requisições para não repetir senha e MFA a cada página.
- **Importante:** quem consegue reutilizar um token válido pode agir como aquela sessão até ela expirar ou ser revogada.

### Autenticação, autorização e MFA

- **Autenticação:** confirma quem é o usuário.
- **Autorização:** define o que esse usuário pode fazer.
- **MFA:** combina dois ou mais fatores, como senha e aplicativo autenticador.
- **Como funciona:** o MFA protege o momento do login; depois dele, a aplicação normalmente usa um token de sessão.

### Cliente, servidor, callback e C2

- **Cliente:** inicia a conexão ou faz a pergunta.
- **Servidor:** fica em escuta e responde.
- **Callback:** o computador remoto inicia uma conexão de retorno.
- **C2:** sistema que recebe conexões e envia comandos para agentes.

### IP, domínio, URL e porta

- **IP:** endereço de uma interface na rede.
- **Domínio:** nome usado por pessoas, como `example.com`.
- **URL:** endereço completo de um recurso, incluindo protocolo, host e caminho.
- **Porta:** número lógico que entrega a conexão ao processo certo, como `22`, `80` ou `443`.

### DNS

- **O que é:** sistema que responde perguntas sobre nomes de domínio.
- **Como funciona:** o computador consulta um resolvedor; ele usa cache ou procura o servidor autoritativo e devolve o registro encontrado.
- **Registros principais:** `A` para IPv4, `AAAA` para IPv6 e `CNAME` para alias.
- **TTL:** tempo que uma resposta pode permanecer em cache.

### HTTP, HTTPS e TLS

- **HTTP:** formato de requisições e respostas da Web.
- **HTTPS:** HTTP dentro de uma conexão TLS.
- **TLS:** negocia chaves, cifra o conteúdo e verifica o certificado do servidor.
- **Certificado:** liga uma chave pública a um domínio.
- **Chave privada:** segredo mantido pelo servidor para provar sua identidade.

### Cookie e sessão

- **Cookie:** pequeno dado que o navegador guarda para um site.
- **Sessão:** estado mantido para reconhecer o usuário entre várias requisições.
- **Como funcionam juntos:** o cookie pode carregar um identificador ou token que aponta para a sessão no servidor.

### Proxy reverso

- **O que é:** servidor que recebe uma requisição e abre outra conexão para o serviço de destino.
- **Como funciona:** cliente e aplicação não conversam diretamente; o proxy recebe, encaminha e devolve as respostas.
- **Usos comuns:** balanceamento, cache, publicação de aplicações e aplicação de políticas.

### Adversary-in-the-Middle (AiTM)

- **O que é:** intermediação ativa entre duas partes.
- **Como funciona:** o intermediário mantém uma conexão com o navegador e outra com a aplicação, podendo observar dados antes de encaminhá-los.

### Phishlet

- **O que é:** conjunto de regras usado pelo Evilginx para entender os hosts, cookies e partes de um fluxo web.
- **Como funciona:** informa quais endereços devem ser intermediados e quais elementos precisam ser reconhecidos durante a navegação.

### Session replay

- **O que é:** reutilização de uma sessão capturada em outro cliente.
- **Como funciona:** o segundo cliente apresenta o token como se fosse o navegador que concluiu o login.
- **Limites:** expiração curta, nova autenticação, vínculo ao dispositivo e proteção de token podem impedir a reutilização.

## Ferramentas em uma frase

| Ferramenta | O que é e como funciona |
|---|---|
| **AWS Console** | Painel web para criar, alterar e remover recursos da conta AWS. |
| **IAM** | Serviço da AWS que associa identidades a políticas de permissão. |
| **EC2** | Serviço da AWS que executa máquinas virtuais chamadas instâncias. |
| **Kali Linux** | Distribuição Linux com ferramentas de redes e segurança. |
| **Security Group** | Filtro de rede da AWS que permite ou bloqueia protocolos, portas e origens. |
| **OpenSSH** | Conjunto formado pelo cliente `ssh` e pelo servidor `sshd`. |
| **Terminal** | Janela que mostra a entrada e a saída da shell. |
| **Bash** | Shell que interpreta comandos e inicia programas no Linux. |
| **APT** | Gerenciador que consulta repositórios e instala pacotes no Debian e no Kali. |
| **systemctl** | Programa que consulta, inicia, recarrega e para serviços do sistema. |
| **ss** | Ferramenta que mostra conexões e portas em escuta. |
| **curl** | Cliente que envia requisições HTTP e mostra a resposta recebida. |
| **Apache** | Servidor web que escuta HTTP/HTTPS e entrega arquivos ou conteúdo processado. |
| **FileZilla** | Cliente gráfico que transfere arquivos; no livro, usa SFTP. |
| **SFTP** | Protocolo de transferência de arquivos executado dentro do SSH. |
| **PHP** | Linguagem executada no servidor para processar requisições e gerar respostas. |
| **chown** | Comando Linux que altera o usuário e o grupo proprietários de um arquivo. |
| **Resolve-DnsName / dig** | Ferramentas que consultam registros DNS no Windows e no Linux. |
| **Let's Encrypt** | Autoridade certificadora que emite certificados TLS por validação automatizada. |
| **ACME** | Protocolo usado para automatizar emissão e renovação de certificados. |
| **Certbot** | Cliente ACME que solicita certificados e pode configurar o Apache. |
| **Git** | Ferramenta que baixa e controla versões de código-fonte. |
| **Go** | Linguagem em que as versões atuais do Evilginx são implementadas. |
| **Evilginx** | Framework de proxy reverso AiTM voltado a fluxos de autenticação web. |

## Como o Evilginx funciona

1. O navegador abre um domínio que aponta para o proxy.
2. O proxy abre outra conexão com a aplicação real.
3. A página e as requisições passam pelo proxy nos dois sentidos.
4. Senha e desafio de MFA são encaminhados enquanto o login acontece.
5. Depois do sucesso, a aplicação emite um token de sessão.
6. Como a resposta também passa pelo proxy, o token pode ser observado e reutilizado enquanto for aceito.

Isso não decifra nem quebra o MFA. O usuário conclui o desafio verdadeiro, e o que pode ser reutilizado é a sessão criada **depois** da autenticação. Passkeys e chaves FIDO2/WebAuthn são mais resistentes porque vinculam a confirmação ao domínio correto.

[Abrir o simulado das 22 aulas :material-arrow-right:](../quiz.md){ .md-button .md-button--primary }
