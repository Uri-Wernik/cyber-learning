# Dicionário fácil das aulas 1 a 22

Cada palavra aparece separada, com uma explicação curta e fácil de lembrar.

## Nuvem e computadores

- **Conta** — Seu espaço dentro de um serviço. É como um quarto ao qual você entra usando uma identidade.

- **Navegador** — Programa usado para abrir sites, como Chrome ou Firefox. Ele pede páginas e mostra as respostas.

- **Sistema operacional** — Base que controla programas, arquivos e dispositivos. Windows, Linux e macOS são exemplos.

- **Pentest** — Teste que procura e comprova falhas. É como uma inspeção técnica em um prédio.

- **Red Team** — Simulação mais ampla de um adversário. Em vez de olhar uma única fechadura, testa como o prédio inteiro reage.

- **Computação em nuvem** — Uso de computadores, discos e redes de um provedor pela Internet. É como alugar infraestrutura em vez de comprar tudo.

- **Máquina virtual** — Computador criado por software dentro de um servidor físico. Parece uma máquina separada, mas compartilha o hardware.

- **AWS** — Plataforma de nuvem da Amazon. Oferece máquinas virtuais, redes, discos e vários outros serviços.

- **Região** — Área geográfica onde os recursos da nuvem são criados. É como escolher em qual cidade ficará o servidor.

- **IAM** — Serviço da AWS que controla identidades e permissões. É como o setor que entrega crachás e decide quais portas cada crachá abre.

- **EC2** — Serviço da AWS que oferece máquinas virtuais. Uma máquina criada nele é chamada de instância.

- **Instância** — Máquina virtual criada na nuvem. Ela pode ser iniciada, parada ou encerrada.

- **AMI** — Modelo usado para criar uma instância EC2. É como uma forma pronta com sistema e configurações iniciais.

- **EBS** — Disco virtual usado por uma instância EC2. Pode continuar existindo mesmo quando a máquina está parada.

- **Security Group** — Filtro de rede da AWS. É como um porteiro que verifica protocolo, porta e origem antes de deixar o tráfego entrar.

- **Cliente** — Programa que inicia uma comunicação. É como o cliente de um restaurante fazendo um pedido.

- **Servidor** — Programa que espera pedidos e envia respostas. É como a cozinha que recebe e prepara o pedido.

- **Callback** — Conexão de retorno iniciada pelo computador remoto. É como deixar um número e receber a ligação de volta.

- **C2** — Sistema de comando e controle que recebe conexões e envia tarefas para agentes remotos. É como uma central de controle.

## Linux e acesso remoto

- **Kali Linux** — Distribuição Linux com ferramentas de redes e segurança já organizadas.

- **Terminal** — Janela usada para escrever comandos e ver seus resultados. É um painel de controle por texto.

- **CLI** — Forma de usar um programa digitando comandos, em vez de clicar em botões.

- **Shell** — Programa que lê o comando e pede ao sistema para executá-lo. É como um intérprete entre você e o Linux.

- **Bash** — Uma das shells mais usadas no Linux.

- **Comando** — Instrução dada ao sistema. Pode conter opções e um alvo sobre o qual trabalhar.

- **Caminho** — Endereço de um arquivo ou pasta dentro do sistema.

- **Root do sistema** — Diretório `/`, onde começa toda a árvore de arquivos do Linux.

- **Usuário root** — Conta administrativa do Linux. Possui acesso muito maior que um usuário comum.

- **Permissão** — Regra que decide quem pode ler, escrever ou executar um arquivo. É como a chave de uma sala.

- <span id="ssh"></span>**SSH** — Protocolo para controlar outro computador por um canal criptografado. É como um controle remoto dentro de um túnel protegido.

- **sshd** — Programa que fica no computador remoto esperando conexões SSH.

- **Chave pública** — Parte que pode ficar no servidor para reconhecer uma identidade.

- **Chave privada** — Parte secreta que fica com o usuário e prova que ele possui a chave correta.

- **Fingerprint** — Resumo curto da chave do servidor. Funciona como a impressão digital usada para conferir sua identidade.

- **APT** — Gerenciador de pacotes do Debian e do Kali. É parecido com uma loja de aplicativos usada pelo terminal.

- **systemctl** — Ferramenta que inicia, para e consulta serviços do Linux. É como um painel de liga e desliga.

- **ss** — Ferramenta que mostra conexões e portas em escuta. É como olhar quais portas do prédio estão abertas.

- **curl** — Cliente que envia requisições e mostra respostas. É útil para testar um site sem precisar da interface do navegador.

- **chown** — Comando que troca o proprietário de um arquivo ou pasta. É como alterar o nome no documento de posse.

## Web, páginas e arquivos

- **Phishing** — Mensagem ou página criada para induzir uma pessoa a realizar uma ação.

- **Exploit** — Código que aproveita uma falha de software para produzir um comportamento não esperado.

- **Malware** — Programa criado para executar ações prejudiciais ou indesejadas em um dispositivo.

- <span id="http"></span>**HTTP** — Linguagem de pedidos e respostas usada na Web. O navegador pede um recurso e o servidor responde.

- <span id="apache"></span>**Apache** — Programa que entrega sites. Pense nele como um garçom: recebe o pedido do navegador, busca a página e leva a resposta.

- **Document root** — Pasta que o Apache usa como ponto inicial para encontrar os arquivos publicados.

- **HTML** — Estrutura da página. É como o esqueleto que organiza títulos, textos, imagens e formulários.

- **CSS** — Aparência da página. Controla cores, tamanhos e posições.

- **JavaScript** — Comportamento da página. Pode reagir a cliques, mudar elementos e enviar dados.

- **DOM** — Versão da página que o navegador mantém na memória. JavaScript pode modificá-la depois que o HTML chega.

- **Formulário** — Conjunto de campos usado para receber dados e enviá-los a um destino.

- **POST** — Método HTTP usado para enviar dados no corpo de uma requisição.

- **PHP** — Linguagem executada no servidor. Ela recebe dados, executa regras e gera uma resposta para o navegador.

- **`$_POST`** — Área do PHP onde ficam os campos recebidos por uma requisição POST.

- **`fopen`** — Função do PHP que tenta abrir um arquivo.

- **`fwrite`** — Função do PHP que tenta escrever dados no arquivo aberto.

- **`fclose`** — Função do PHP que fecha o arquivo depois do uso.

- **FileZilla** — Programa gráfico para transferir arquivos. Um lado mostra o computador local e o outro mostra o remoto.

- **FTP** — Protocolo antigo de transferência de arquivos sem criptografia nativa.

- **FTPS** — FTP protegido com TLS.

- **SFTP** — Protocolo de transferência que funciona dentro do SSH. É como levar arquivos pelo mesmo túnel protegido do acesso remoto.

## Rede, DNS e HTTPS

- **Protocolo** — Conjunto de regras que dois programas seguem para conseguir conversar.

- **IP** — Endereço de uma interface na rede. É parecido com o endereço de um prédio.

- **Domínio** — Nome fácil de lembrar, como `example.com`, usado no lugar de decorar um IP.

- **URL** — Endereço completo de um recurso. É como informar rua, prédio e sala, tudo junto.

- **Porta** — Número que leva a conexão ao programa correto. Se o IP é o prédio, a porta é o número da sala.

- <span id="dns"></span>**DNS** — Sistema que encontra dados de um domínio. É como uma agenda que procura um nome e devolve seu endereço IP.

- **Resolvedor DNS** — Servidor que procura a resposta DNS em nome do computador.

- **DNS autoritativo** — Servidor que guarda a resposta oficial de um domínio.

- **Registro A** — Registro DNS que liga um nome a um endereço IPv4.

- **Registro AAAA** — Registro DNS que liga um nome a um endereço IPv6.

- **CNAME** — Registro DNS que faz um nome funcionar como apelido de outro nome.

- **TTL** — Tempo durante o qual uma resposta DNS pode ficar guardada em cache.

- **Cache** — Cópia temporária de uma resposta usada para evitar buscar a mesma informação novamente.

- <span id="https"></span>**HTTPS** — HTTP com proteção. É como enviar a conversa dentro de um envelope fechado.

- <span id="tls"></span>**TLS** — Tecnologia que cria a proteção usada pelo HTTPS. Ela combina certificado, chaves e criptografia.

- **Handshake TLS** — Conversa inicial em que navegador e servidor escolhem a proteção e criam chaves para aquela sessão.

- **Criptografia** — Transformação que deixa os dados ilegíveis para quem não possui a chave correta.

- **Certificado TLS** — Documento digital que liga um domínio a uma chave pública. É como a identidade apresentada pelo servidor.

- **Autoridade certificadora** — Organização que verifica o controle do domínio e assina o certificado. Funciona como um cartório digital.

- **Let's Encrypt** — Autoridade certificadora que emite certificados TLS de forma automatizada.

- **ACME** — Protocolo que define a conversa automática para pedir, validar e renovar certificados.

- <span id="certbot"></span>**Certbot** — Programa que usa ACME para pedir um certificado e pode configurar o Apache. É como um assistente que cuida da papelada do HTTPS.

- **HTTP-01** — Teste no qual a autoridade busca um código temporário pelo domínio usando HTTP na porta 80.

## Login, sessão e Evilginx

- **Autenticação** — Processo que confirma a identidade do usuário. É a pergunta: "quem é você?".

- **Autorização** — Regra que decide o que o usuário pode fazer. É a pergunta: "onde você pode entrar?".

- **MFA** — Login que exige dois ou mais tipos de prova, como senha e código do celular. É como uma porta com duas fechaduras diferentes.

- **Cookie** — Pequeno dado que o navegador guarda para um site. É como um bilhete que o site pede para ver novamente.

- **Sessão** — Estado que mantém o usuário reconhecido depois do login.

- <span id="token-de-sessao"></span>**Token de sessão** — Valor secreto que representa um login já concluído. É como uma pulseira entregue depois da entrada: enquanto for aceita, não é preciso mostrar os documentos novamente.

- **Proxy** — Programa que recebe uma comunicação e a encaminha para outro destino. É um intermediário.

- **Proxy reverso** — Proxy que fica na frente de um servidor e recebe os pedidos antes dele. É como uma recepção entre o visitante e o escritório.

- **AiTM** — Intermediário ativo entre duas partes. Ele mantém uma conversa com cada lado e encaminha as mensagens.

- <span id="evilginx"></span>**Evilginx** — Framework que usa um proxy reverso AiTM para intermediar um login web em tempo real.

- **Phishlet** — Arquivo de regras que explica ao Evilginx quais hosts, caminhos e cookies fazem parte de um fluxo.

- **Lure** — Link criado para conduzir o navegador a um fluxo configurado no proxy.

- <span id="session-replay"></span>**Session replay** — Reutilização de um token válido em outro cliente. É como alguém tentar entrar usando uma pulseira de acesso que ainda não expirou.

- **Passkey** — Credencial criptográfica criada para um serviço específico. Ela não envia uma senha reutilizável.

- **WebAuthn** — Padrão que liga a autenticação ao domínio correto. Uma página parecida não recebe uma confirmação válida para o domínio verdadeiro.

- **Git** — Ferramenta que baixa e controla versões de código.

- **Go** — Linguagem usada para desenvolver as versões atuais do Evilginx.

- **Make** — Ferramenta que executa as etapas de compilação definidas por um projeto.

## Evilginx em seis passos

1. O navegador abre o domínio do proxy.
2. O proxy abre outra conexão com a aplicação.
3. A página passa pelo proxy até o navegador.
4. As respostas do navegador voltam pelo proxy.
5. Depois do login e do MFA, a aplicação cria um token de sessão.
6. Como o token atravessa o proxy, ele pode ser observado e reutilizado enquanto ainda for aceito.

O Evilginx não quebra a criptografia do MFA. Ele intermedeia o login verdadeiro e observa a sessão criada **depois** da verificação.

[Abrir o simulado das 22 aulas :material-arrow-right:](../quiz.md){ .md-button .md-button--primary }
