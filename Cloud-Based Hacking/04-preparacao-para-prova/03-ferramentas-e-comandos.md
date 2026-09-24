# Ferramentas e comandos

Uma ferramenta só faz sentido quando sua camada está clara. O Console da AWS altera recursos da conta; `ssh` abre uma sessão remota; FileZilla transfere arquivos; Apache atende HTTP; PHP processa uma requisição no servidor. Nenhuma delas substitui as demais.

Os exemplos usam apenas identificadores fictícios. A chave privada deve permanecer fora do repositório, do document root e de qualquer material publicado.

## O plano de controle da AWS

### AWS Management Console

O **AWS Management Console** é a interface web do plano de controle. Ele é executado no navegador local, mas as ações são enviadas às APIs da AWS com a identidade autenticada na conta.

As entradas importantes são conta, região, serviço, recurso e ação solicitada. A saída é um novo estado do recurso ou uma mensagem explícita de erro. Ver uma instância no Console comprova que o plano de controle conhece aquele recurso; não comprova que o sistema operacional ou um serviço interno esteja funcionando.

### IAM e MFA

O **IAM** cria identidades e aplica políticas de autorização na AWS. Ele existe no plano de controle, não dentro do Kali. Uma política deve conceder apenas as ações necessárias.

O **MFA** acrescenta outro fator à autenticação. Ele protege a entrada da identidade, mas não corrige uma política ampla e não transforma credenciais permanentes em temporárias. O usuário root da AWS deve ficar protegido e reservado para as tarefas que o exigem.

### EC2, AMI, EBS e estado da instância

O **EC2** provisiona e controla instâncias. A **AMI** fornece o modelo inicial, o tipo de instância define capacidade e o **EBS** fornece armazenamento em bloco. Os controles `Start`, `Stop` e `Terminate` alteram estados diferentes:

- `Start` inicia novamente uma instância preservada;
- `Stop` desliga a computação, mas mantém o recurso e componentes persistentes;
- `Terminate` remove a instância e pode excluir volumes marcados para remoção.

Fechar SSH ou executar `exit` não aciona nenhum desses controles.

### Security Group

O **Security Group** é um filtro stateful associado à interface da instância. Uma regra de entrada combina protocolo, porta e origem permitida. Uma regra TCP 22 permite uma tentativa de SSH dentro desses limites; ela não instala `sshd`, não escolhe o usuário e não valida a chave.

Evite origens amplas quando uma origem específica atende ao laboratório. Ao encerrar, remova regras que não serão mais usadas.

### Key pair e AWS Budgets

O **key pair** usado no provisionamento associa a chave pública autorizada à instância. A chave privada fica com o estudante e participa da autenticação SSH. Perder essa chave não pode ser corrigido pedindo sua cópia à AWS, porque o provedor não armazena o arquivo privado entregue no momento da criação.

**AWS Budgets** acompanha custo ou uso e gera alertas conforme os limites configurados. Ele auxilia o controle financeiro, mas não substitui a inspeção do inventário nem garante que todo recurso será bloqueado ao alcançar um valor.

Esses serviços são apresentados em [Criando e protegendo uma conta AWS](../02-cloud-basics/06-signing-up-with-aws.md) e [Provisionando Kali Linux no EC2](../02-cloud-basics/07-installing-kali-linux-on-the-cloud.md).

## Kali Linux, terminal e shell

**Kali Linux** é o sistema operacional da instância usada no laboratório. Ele executa processos como `sshd` e Apache. O aplicativo de terminal permanece no computador local durante o acesso, enquanto a shell aberta depois do login executa no Kali remoto.

O prompt informa o contexto. Em `kali@servidor:~$`, `kali` é o usuário, `servidor` é a máquina, `~` representa o diretório pessoal e `$` indica uma shell de usuário comum. Esse texto já aparece na tela e não deve ser digitado.

### Navegação e inspeção

Estes comandos são executados na shell do Kali:

```bash
pwd
ls -la /var/www/html
cd /var/www/html
```

`pwd` imprime o diretório atual. `ls` lista conteúdo; `-l` solicita formato detalhado e `-a` inclui entradas ocultas. O caminho é o argumento inspecionado. `cd` altera o diretório da shell, mas não produz uma confirmação por padrão, por isso `pwd` deve ser usado depois quando a localização importa.

Atalhos de navegação também possuem significado:

- `cd ..` abre o diretório pai;
- `cd ~` retorna ao diretório pessoal;
- `cd -` retorna ao diretório anterior quando a shell oferece esse comportamento;
- Tab completa nomes sem executar o comando.

### Documentação, histórico e código de saída

```bash
man ls
help cd
ls --help
history
echo $?
```

`man ls` abre a página de manual do programa e `q` fecha o visualizador. `help cd` consulta ajuda para um comando interno da shell. `ls --help` pede ajuda resumida ao próprio programa.

`history` exibe comandos anteriores. Ele pode guardar caminhos obsoletos e também segredos digitados indevidamente, então uma linha recuperada deve ser revisada antes de nova execução.

`echo $?` mostra o código de saída do comando anterior. Por convenção, `0` indica sucesso e outros valores indicam alguma falha. A consulta deve ocorrer imediatamente, porque qualquer comando seguinte substitui esse valor. Código zero não dispensa a verificação do efeito esperado.

## OpenSSH e diagnóstico de rede

O **OpenSSH** implementa o cliente `ssh` no computador local e o servidor `sshd` na instância. Ele oferece confidencialidade, integridade, autenticação do servidor, autenticação do usuário e canais para shell ou subsistemas como SFTP.

Antes da conexão, no computador local:

```powershell
ssh -V
Test-NetConnection <IP-PUBLICO> -Port 22
```

`ssh -V` mostra a versão do cliente sem iniciar conexão. `Test-NetConnection` tenta estabelecer TCP com a porta indicada. Um resultado positivo comprova alcance até um listener, não a identidade do servidor nem a aceitação da chave.

A conexão completa também é iniciada no computador local:

```powershell
ssh -i "<CAMINHO>\<CHAVE>.pem" kali@<IP-PUBLICO>
```

`ssh` inicia o cliente. `-i` seleciona o arquivo de identidade privado. `kali` é o usuário no sistema remoto, `@` separa usuário e host, e `<IP-PUBLICO>` identifica a interface de destino. Sem `-p`, o cliente usa a porta padrão 22. Se outra porta for informada, `sshd` e Security Group precisam usar o mesmo valor.

Na primeira conexão, a fingerprint da chave do host precisa ser comparada com uma fonte confiável. Aceitar sem verificar cria confiança na identidade apresentada, qualquer que seja ela. A chave aceita é lembrada em `known_hosts`, e uma mudança futura precisa ser investigada.

Em Linux ou macOS, permissões como estas restringem a leitura da chave ao proprietário:

```bash
chmod 400 <CHAVE.pem>
chmod 600 <CHAVE.pem>
```

`400` permite apenas leitura ao proprietário. `600` permite leitura e escrita ao proprietário. No Windows, `icacls.exe` cumpre a função equivalente por meio de ACLs, removendo herança inadequada e limitando a leitura ao usuário necessário. A sintaxe aplicada deve corresponder ao caminho e à conta local, conforme explicado na [aula de SSH](../02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh.md).

Depois do login, os comandos abaixo executam no Kali remoto:

```bash
whoami
hostname
uname -a
exit
```

`whoami` confirma a identidade efetiva, `hostname` identifica a máquina e `uname -a` mostra informações do kernel e da arquitetura. `exit` encerra a shell e a conexão, não a instância EC2.

Quando houver falha, `ssh -vvv` acrescenta detalhes sobre resolução, conexão, negociação e autenticação. Use a saída para localizar a etapa, não como tentativa aleatória de correção.

## Apache e as ferramentas do sistema

### APT

O **APT** gerencia pacotes em sistemas derivados do Debian. Estes comandos executam no Kali remoto com privilégio administrativo:

```bash
sudo apt update
sudo apt install apache2
```

`sudo` solicita execução conforme a política administrativa. `apt update` atualiza índices de repositórios e não instala o Apache. `apt install apache2` resolve dependências e solicita a instalação do pacote. Instalar coloca software no disco, mas não comprova que o serviço esteja em execução.

### systemctl

O **systemctl** conversa com o `systemd`, gerenciador de serviços do sistema:

```bash
sudo systemctl start apache2
systemctl is-active apache2
sudo systemctl --no-pager status apache2
```

`start` solicita a inicialização. `is-active` responde de forma curta se o serviço está ativo. `status` mostra estado e mensagens recentes; `--no-pager` evita abrir um visualizador interativo. Consultar o estado é a evidência que separa o comando enviado do resultado alcançado.

Ao terminar o laboratório:

```bash
sudo systemctl stop apache2
```

Parar o processo não remove a regra TCP 80 do Security Group e não encerra a instância. Essas limpezas pertencem a camadas diferentes.

### ss

O **ss** consulta sockets mantidos pelo kernel:

```bash
sudo ss -ltnp 'sport = :80'
```

`-l` mostra listeners, `-t` limita a TCP, `-n` mantém endereços e portas em forma numérica e `-p` inclui o processo quando o privilégio permite. O filtro seleciona a porta local 80. A saída comprova que existe um processo em escuta, mas não testa o caminho pela Internet.

### curl

O **curl** é um cliente de protocolos. O teste abaixo executa dentro da instância:

```bash
curl -I http://127.0.0.1/
```

`-I` solicita somente os cabeçalhos da resposta. `127.0.0.1` é o endereço de loopback, portanto os pacotes permanecem na própria máquina e não atravessam a Internet nem o Security Group. Uma resposta HTTP comprova o serviço local; o status informa como a solicitação foi tratada.

### Apache HTTP Server

O **Apache** recebe requisições HTTP, escolhe uma configuração de site e relaciona o caminho da URL a conteúdo ou processamento. Na configuração estudada, `/var/www/html` é o document root. Esta inspeção aproxima arquivo, propriedade e permissão da página publicada:

```bash
ls -la /var/www/html
```

O servidor lê arquivos como a identidade do processo web. Ele não usa automaticamente a conta `kali` do SSH. A instalação e o diagnóstico completo aparecem em [Apache, HTTP e exposição web](../03-phishing/11-file-hosting-and-firewall-settings.md).

## FileZilla e SFTP

O **FileZilla Client** oferece uma interface gráfica para transferência. No perfil estudado, ele executa no computador local e usa SFTP para conversar com o subsistema fornecido pelo SSH da instância.

O perfil precisa de:

- protocolo SFTP;
- IP ou DNS da instância;
- porta 22 ou a porta configurada no `sshd`;
- usuário `kali`;
- arquivo de chave privada correspondente.

O painel esquerdo mostra o sistema de arquivos local; o direito mostra o remoto. O log superior registra conexão e operações. A fila inferior apresenta transferências concluídas e falhas. Da esquerda para a direita ocorre upload; da direita para a esquerda ocorre download.

SFTP reutiliza o canal SSH, mas não ignora permissões Linux. Se o login funciona e o upload é negado, a rede e a autenticação já avançaram. A investigação muda para o diretório de destino.

FileZilla não publica a página por si só. Ele transfere o arquivo para um caminho. O Apache precisa mapear esse caminho e conseguir ler o conteúdo. A separação é detalhada em [Cópia de páginas e SFTP](../03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud.md).

## chown e a propriedade do document root

O **chown** altera usuário e grupo proprietários. No laboratório, ele foi executado na shell remota, não no FileZilla nem no Console da AWS:

```bash
sudo chown -R kali:kali /var/www/html
```

`sudo` fornece o privilégio necessário. `chown` é o programa. `-R` aplica a alteração ao diretório e aos itens abaixo dele. O primeiro `kali` define o usuário, o segundo define o grupo, e `/var/www/html` é o alvo.

O comando não muda os bits `rwx`, não inicia Apache e não transfere arquivos. A confirmação pode ser feita pela listagem detalhada ou pela atualização do painel remoto. A [aula de publicação](../03-phishing/13-creating-a-fake-login-page-on-the-cloud.md) mostra por que a propriedade anterior impedia a escrita por SFTP.

## Navegador e ferramentas de desenvolvimento

O **navegador** interpreta HTML e CSS, executa JavaScript, constrói o DOM e envia requisições. Abrir o código-fonte mostra a resposta original; inspecionar o DOM mostra o estado atual depois das modificações feitas por scripts.

As ferramentas de desenvolvimento ajudam a observar:

- atributos e elementos existentes no DOM;
- listeners e mudanças realizadas por JavaScript;
- método, URL, cabeçalhos, corpo e resposta de uma requisição;
- mensagens e erros produzidos no contexto da página.

Elas observam o comportamento do cliente. Não exibem automaticamente o código PHP, o sistema de arquivos ou as permissões do servidor.

## PHP e operações de arquivo

O **PHP** executa no servidor. `$_POST` fornece um array associativo com entrada enviada pelo cliente. Antes do uso, a aplicação precisa verificar método, presença das chaves, formato e finalidade.

`fopen` abre um arquivo e devolve um handle ou `false`. Os modos estudados têm efeitos diferentes:

- `w` abre para escrita e trunca o conteúdo existente;
- `a` abre para escrita no final;
- `a+` permite leitura e escrita, mantendo novas escritas no final.

`fwrite` tenta gravar bytes e informa quantidade ou falha. `fclose` encerra a referência ao arquivo. O ponto `.` concatena strings, e `\n` dentro de aspas duplas representa uma nova linha.

Um redirecionamento após o processamento precisa enviar `Location` antes do corpo. O status `303 See Other` orienta o navegador a fazer a próxima requisição com `GET`, e `exit` impede que o script continue executando código posterior.

Essas funções não garantem permissão de escrita. O processo PHP usa a identidade do serviço web, normalmente restrita. Uma falha deve levar à verificação de caminho, proprietário, grupo e permissões, nunca à coleta de dados reais ou à aplicação indiscriminada de `777`. O fluxo seguro está em [Arquivos, permissões e PHP](../03-phishing/15-stealing-facebook-login-using-an-identical-fake-login-page.md).
