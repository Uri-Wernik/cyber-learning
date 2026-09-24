# Conceitos e ferramentas das aulas 1 a 22

Resumo curto dos termos técnicos mais importantes do curso.

## Conceitos

| Conceito | Explicação simples |
|---|---|
| **Computação em nuvem** | Aluguel de processamento, armazenamento e rede pela Internet. Em vez de comprar um servidor, você cria e remove recursos quando precisa. |
| **Máquina virtual** | Computador criado por software dentro de um servidor físico. Funciona como uma máquina separada, embora compartilhe o hardware. |
| **Cliente e servidor** | O cliente faz um pedido e o servidor responde. É como uma pessoa pedindo uma refeição e a cozinha preparando o pedido. |
| **Callback** | Conexão de retorno iniciada pela máquina remota. É como deixar seu número e receber a ligação de volta. |
| **C2 (Command and Control)** | Em português, **Comando e Controle**. É a central usada para enviar comandos a agentes remotos e receber seus resultados. |
| **IAM** | Gerenciamento de identidades e acessos da AWS. É como o setor que entrega crachás e decide quais portas cada crachá abre. |
| **MFA** | Autenticação com dois ou mais fatores, como senha e código do celular. É como uma porta com duas fechaduras diferentes. |
| **IP** | Endereço de uma máquina ou interface na rede. É parecido com o endereço de um prédio. |
| **Porta** | Número que entrega a conexão ao programa correto. Se o IP é o prédio, a porta é o número da sala. |
| <span id="dns"></span>**DNS** | Converte nomes em informações como endereços IP. Funciona como uma agenda que procura um nome e devolve o endereço. |
| **Registro A** | Liga um nome a um endereço IPv4. |
| **Registro AAAA** | Liga um nome a um endereço IPv6. |
| **CNAME** | Faz um nome funcionar como apelido de outro nome. |
| **TTL** | Tempo durante o qual uma resposta DNS pode permanecer guardada em cache. |
| **HTTP** | Conjunto de regras para pedidos e respostas na Web. O cliente pede um recurso e o servidor responde. |
| <span id="https"></span>**HTTPS** | HTTP com proteção TLS. É como colocar a conversa dentro de um envelope fechado. |
| **TLS** | Tecnologia que cifra os dados, detecta alterações e verifica o certificado do servidor. |
| **Certificado TLS** | Documento digital que liga um nome a uma chave pública. É a identidade apresentada pelo servidor. |
| **Autenticação** | Confirma quem é o usuário. Responde à pergunta: "quem é você?". |
| **Autorização** | Decide o que o usuário pode fazer. Responde à pergunta: "onde você pode entrar?". |
| **Cookie** | Pequeno dado que um site pede para o navegador guardar e devolver depois. |
| **Sessão** | Estado que mantém o usuário reconhecido após o login. |
| <span id="token-de-sessao"></span>**Token de sessão** | Segredo que representa um login concluído. É como uma pulseira de acesso: enquanto for aceita, não é preciso repetir o login. |
| **Proxy reverso** | Intermediário que recebe pedidos antes do servidor e os encaminha. É como uma recepção entre o visitante e o escritório. |
| **AiTM** | Sigla de *Adversary-in-the-Middle*. O intermediário mantém uma conexão com cada lado e repassa as mensagens entre eles. |
| **Phishlet** | Arquivo de regras que informa ao Evilginx quais hosts, caminhos e cookies pertencem a um fluxo. |
| <span id="session-replay"></span>**Session replay** | Reutilização de um token válido em outro cliente. É como tentar entrar usando uma pulseira de acesso que ainda não expirou. |

## SFTP, FTP e FTPS

| Protocolo | Como funciona |
|---|---|
| **FTP** | Protocolo próprio para transferir arquivos. Não possui criptografia nativa. |
| **FTPS** | É o FTP protegido com TLS. Mantém o funcionamento do FTP, mas cifra a comunicação. |
| **SFTP** | Protocolo de arquivos que funciona dentro do SSH, normalmente na porta `22`. Apesar do nome, não é FTP com SSH. |

## Ferramentas

| Ferramenta | Para que serve |
|---|---|
| **AWS Console** | Painel web usado para criar e administrar recursos da AWS. |
| **EC2** | Serviço da AWS que executa máquinas virtuais chamadas instâncias. |
| **AMI** | Modelo usado para criar uma instância EC2 com um sistema inicial. |
| **EBS** | Disco virtual usado pelas instâncias EC2. |
| **Security Group** | Porteiro da rede da AWS: permite ou bloqueia tráfego conforme protocolo, porta e origem. |
| **Kali Linux** | Distribuição Linux que reúne ferramentas de redes e segurança. |
| <span id="ssh"></span>**SSH / OpenSSH** | Permite controlar outro computador por um canal criptografado. É como um controle remoto dentro de um túnel protegido. |
| **FileZilla** | Programa gráfico para enviar e baixar arquivos. No curso, ele usa SFTP para falar com o servidor. |
| <span id="apache"></span>**Apache** | Servidor web. É como um garçom: recebe o pedido, busca a página ou chama o PHP e entrega a resposta. |
| **PHP** | Linguagem executada no servidor para receber dados, aplicar regras e produzir respostas. |
| **APT** | Gerenciador de pacotes que instala programas no Debian e no Kali. É como uma loja de aplicativos do terminal. |
| **systemctl** | Inicia, para e consulta serviços do Linux. É como um painel de liga e desliga. |
| **ss** | Mostra conexões e portas em escuta no Linux. |
| **curl** | Envia requisições e mostra respostas, sendo útil para testar HTTP e HTTPS pelo terminal. |
| **chown** | Altera o usuário e o grupo proprietários de um arquivo ou diretório. |
| **dig / Resolve-DnsName** | Consultam registros DNS no Linux e no Windows. |
| **Let's Encrypt** | Autoridade certificadora que emite certificados TLS automaticamente. |
| **ACME** | Protocolo que organiza a emissão e a renovação automática de certificados. |
| <span id="certbot"></span>**Certbot** | Usa ACME para pedir certificados e pode configurar o Apache. É como um assistente que cuida da papelada do HTTPS. |
| **Git** | Baixa código e controla suas versões. |
| **Go** | Linguagem usada para desenvolver as versões atuais do Evilginx. |
| **Make** | Executa as etapas de compilação definidas por um projeto. |
| <span id="evilginx"></span>**Evilginx** | Framework de proxy reverso AiTM. Ele encaminha um login em tempo real e pode observar credenciais e o token criado após o MFA. |

## Evilginx em resumo

O Evilginx fica entre o cliente e a aplicação, mantendo uma conexão com cada lado. Ele não quebra o MFA: encaminha o login verdadeiro e pode observar o token de sessão emitido **depois** que o MFA foi aceito.

[Abrir o simulado das 22 aulas :material-arrow-right:](../quiz.md){ .md-button .md-button--primary }
