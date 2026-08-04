# Acessando uma instância remota com SSH

Esta aula utiliza a [instância Kali criada no EC2](07-installing-kali-linux-on-the-cloud.md). Os comandos executados depois da conexão serão aprofundados na [aula 9](09-linux-terminal-basics.md).

## O que é SSH

**SSH** significa *Secure Shell*. É um protocolo de aplicação usado para criar um canal criptografado entre cliente e servidor.

Nesta aula, o canal transportará uma **shell remota**: um interpretador de comandos executado no Kali. Teclado e tela permanecem no computador local, mas os comandos são processados remotamente.

SSH também pode transportar arquivos, encaminhar portas e criar outros canais, mas o primeiro uso será uma sessão de shell.

O terminal, o cliente `ssh` e a chave privada permanecem no computador local. O endereço público localiza a instância e o Security Group filtra o tráfego que chega à interface. No Kali, o servidor `sshd` aguarda a conexão e, depois da autenticação, inicia a shell que executará os comandos.

`sshd` significa *SSH daemon*. Um daemon é um processo que permanece em execução aguardando solicitações.

## TCP e porta 22

SSH normalmente usa **TCP**, protocolo de transporte que entrega fluxo de bytes confiável e ordenado. Sobre ele, SSH negocia criptografia, verifica integridade e autentica as partes.

A porta é um identificador lógico de `0` a `65535`, não conexão física. A porta de destino padrão do SSH é `22`.

Em uma conexão típica:

- o cliente escolhe uma porta de origem temporária;
- o destino é o IP público da instância;
- a porta de destino é `22`;
- o processo remoto em escuta é o `sshd`.

## Como a conexão chega ao Kali

O cliente recebe o IP público ou DNS da instância. Se houver um nome, o DNS o resolve; então o computador inicia TCP para a porta `22`. Roteadores encaminham os pacotes pela Internet até a VPC, onde a rota da subnet, o Internet Gateway e o Security Group determinam se eles alcançam a interface. O firewall do Kali ainda pode aplicar outro filtro.

Se a conexão for aceita, o kernel a entrega ao `sshd`. Cliente e servidor negociam algoritmos e chaves temporárias, o cliente verifica a identidade do servidor pela chave de host e o servidor autentica o usuário pela chave pública autorizada. Depois disso, o `sshd` inicia uma shell e as respostas passam pela conexão estabelecida.

O Security Group é stateful: a resposta de uma conexão permitida pode retornar.

Liberar a porta não inicia `sshd`. Iniciar `sshd` também não torna o serviço público se endereço, rota ou regras estiverem ausentes.

## IP público e privado

O IP público é alcançável pela Internet. A interface da instância também possui IP privado dentro da VPC. A AWS mapeia o endereço público para o privado da interface.

Ao parar e iniciar, o IPv4 público automático pode mudar. Confirme o endereço atual antes de conectar.

## Dois pares de chaves diferentes

A **chave de host** comprova a identidade do servidor: a parte privada fica na instância e a pública é apresentada ao cliente. A **chave do usuário** comprova a autorização para entrar: a privada fica no computador local e a pública autorizada fica em `~/.ssh/authorized_keys` no servidor.

A chave de host evita confiar silenciosamente em outro servidor. A chave do usuário permite login sem enviar a chave privada.

Não confunda a fingerprint do key pair exibida no EC2 com a fingerprint da chave de host apresentada durante a conexão.

## Como a chave autentica o usuário

O cliente indica qual chave pública pretende usar, e o servidor procura essa chave entre as autorizadas. O cliente usa a chave privada para assinar dados vinculados à sessão; o servidor verifica a assinatura com a chave pública. O login é permitido quando a assinatura e as demais regras são válidas.

A chave privada não é enviada ao servidor. Dizer que ela funciona exatamente como senha ou que os arquivos são “comparados” é simplificação incorreta.

Na imagem oficial do Kali para AWS, o usuário é `kali`. “Carly” em transcrições automáticas é erro de reconhecimento.

## Verificando a chave de host

Uma **fingerprint** é um resumo criptográfico da chave pública do servidor.

Antes da primeira conexão, obtenha a fingerprint por uma fonte confiável, como o log do sistema da instância no EC2. O cliente pode exibir:

```text
The authenticity of host '<IP-PUBLICO>' can't be established.
ED25519 key fingerprint is SHA256:<FINGERPRINT>.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

Compare os valores. Somente se coincidirem, responda `yes`.

O cliente armazena a chave em:

- Linux e macOS: `~/.ssh/known_hosts`;
- Windows: `%USERPROFILE%\.ssh\known_hosts`.

Uma chave diferente depois disso pode indicar reconstrução legítima, reutilização de IP ou interceptação. Não remova o registro antes de investigar.

`ssh-keyscan` coleta uma chave, mas sozinho não prova que pertence ao servidor correto, pois usa a mesma rede que está sendo verificada.

## Verificando o cliente local

```powershell
ssh -V
```

O programa `ssh` é o cliente OpenSSH; a opção `-V` mostra sua versão sem iniciar conexão. Não a confunda com `-v`, usada para diagnóstico.

## Protegendo a chave privada

### Linux e macOS

```bash
chmod 400 "/caminho/<CHAVE>.pem"
```

`400` permite somente leitura ao proprietário.

```bash
chmod 600 "/caminho/<CHAVE>.pem"
```

`600` permite leitura e escrita ao proprietário. Grupo e outros ficam sem acesso. A chave não precisa de execução; `700` não é a escolha correta.

Verifique com:

```bash
ls -l "/caminho/<CHAVE>.pem"
```

Em WSL, prefira manter a chave no diretório pessoal Linux, pois unidades do Windows seguem ACLs diferentes.

### Windows com OpenSSH

O Windows usa **Access Control Lists (ACLs)**. O arquivo deve pertencer ao usuário atual e não conceder leitura a outros usuários.

No PowerShell:

```powershell
$key = "C:\CAMINHO\<CHAVE>.pem"
icacls.exe $key /reset
icacls.exe $key /inheritance:r
icacls.exe $key /grant:r "$($env:USERNAME):(R)"
icacls.exe $key
```

- `$key`: guarda o caminho sem mostrar o conteúdo.
- `/reset`: redefine permissões explícitas.
- `/inheritance:r`: remove permissões herdadas.
- `/grant:r`: substitui a concessão para o usuário atual.
- `(R)`: concede leitura.
- último comando: exibe a ACL para conferência.

Não conceda acesso a `Everyone` ou grupos amplos apenas para eliminar o erro.

## Comando de conexão

No Windows:

```powershell
ssh -i "C:\CAMINHO\<CHAVE>.pem" kali@<IP-PUBLICO>
```

No Linux ou macOS:

```bash
ssh -i "/caminho/<CHAVE>.pem" kali@<IP-PUBLICO>
```

O cliente `ssh` inicia a sessão. A opção `-i` seleciona o arquivo de identidade; `kali` é o usuário remoto; `@` separa usuário e host; e o IP identifica a instância atual. Sem outra configuração, o destino é TCP/22.

Se o servidor tiver sido configurado em outra porta:

```bash
ssh -p <PORTA> -i "<CHAVE>" kali@<IP-PUBLICO>
```

`-p` define a porta remota. Alterar o comando não muda a porta em que `sshd` escuta nem o Security Group.

## Confirmando a sessão remota

```bash
whoami
hostname
uname -a
```

- `whoami`: usuário efetivo, esperado como `kali`;
- `hostname`: nome da máquina remota;
- `uname -a`: informações do kernel e sistema.

Para encerrar:

```bash
exit
```

`exit` fecha a shell e o SSH, mas não para a instância EC2.

## Testando apenas a porta no Windows

```powershell
Test-NetConnection <IP-PUBLICO> -Port 22
```

Resultado positivo comprova apenas que TCP pode ser estabelecido. Não comprova identidade do host nem autenticação do usuário.

## Diagnóstico detalhado

```bash
ssh -vvv -i "<CHAVE>" kali@<IP-PUBLICO>
```

`-vvv` mostra resolução, TCP, negociação e autenticação. Não publique a saída sem remover IPs, usuários e metadados.

## Erros comuns

### `ssh` não é reconhecido

Cliente ausente ou fora do `PATH`. Verifique `ssh -V` e, no Windows, o recurso OpenSSH Client.

### `Connection timed out`

O cliente não recebeu resposta. Verifique Região, estado, IP atual, TCP/22, origem da regra, rota, Internet Gateway, firewall local e `sshd`.

### `Connection refused`

O endereço respondeu, mas não há serviço aceitando naquela porta ou houve rejeição explícita. Confirme porta, `sshd` e firewall do Kali.

### `Permission denied (publickey)`

A rede e o SSH responderam, mas a autenticação falhou. Confirme usuário `kali`, chave correta, key pair associado e `authorized_keys`.

### `WARNING: UNPROTECTED PRIVATE KEY FILE`

Outros usuários acessam a chave. Corrija para `400` ou `600` em POSIX ou restrinja a ACL no Windows.

### `No such file or directory`

Caminho da chave incorreto. Use aspas se houver espaços.

### `Could not resolve hostname`

Nome DNS incorreto ou não resolvido. Confira o Console ou use o IP atual.

### `REMOTE HOST IDENTIFICATION HAS CHANGED`

A chave de host difere da armazenada. Interrompa e compare a nova fingerprint. Após confirmar substituição legítima:

```text
ssh-keygen -R <IP-OU-DNS>
```

Depois reconecte e valide a nova chave.

### Funcionava antes de parar a instância

O IPv4 público automático pode ter mudado. Atualize endereço e origem do Security Group, se necessário.

## Encerrando o acesso sem esquecer a instância

Execute `exit` para fechar a shell e a conexão SSH. Depois, pare ou termine a instância no Console e remova a regra TCP/22 quando ela não for mais necessária. Confira volumes e endereços remanescentes, preserve ou destrua a chave conforme os recursos que ainda dependem dela e revise cobrança e créditos. `exit` encerra o acesso remoto, não a cobrança da instância.

## Referências oficiais

- [Conectar a instância Linux com SSH](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-linux-inst-ssh.html)
- [Pré-requisitos de conexão](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connection-prereqs-general.html)
- [Solução de problemas no EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html)
- [Kali Linux na AWS](https://www.kali.org/docs/cloud/aws/)
