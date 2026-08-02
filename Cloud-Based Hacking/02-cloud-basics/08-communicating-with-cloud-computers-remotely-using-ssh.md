# Acessando uma instância remota com SSH

## Objetivos da aula

Ao final desta aula, você deverá ser capaz de:

- explicar a arquitetura cliente-servidor do SSH;
- identificar o cliente `ssh` e o servidor `sshd`;
- descrever uma conexão TCP para a porta `22`;
- diferenciar chave de host de chave do usuário;
- verificar uma fingerprint antes de confiar no servidor;
- proteger uma chave privada no Linux, macOS e Windows;
- interpretar o comando `ssh`;
- investigar erros comuns.

## Pré-requisitos

Esta aula utiliza a [instância Kali criada no EC2](07-installing-kali-linux-on-the-cloud.md). Os comandos executados depois da conexão serão aprofundados na [aula 9](09-linux-terminal-basics.md).

## O que é SSH

**SSH** significa *Secure Shell*. É um protocolo de aplicação usado para criar um canal criptografado entre cliente e servidor.

Nesta aula, o canal transportará uma **shell remota**: um interpretador de comandos executado no Kali. Teclado e tela permanecem no computador local, mas os comandos são processados remotamente.

SSH também pode transportar arquivos, encaminhar portas e criar outros canais, mas o primeiro uso será uma sessão de shell.

| Componente | Local | Função |
|---|---|---|
| Terminal | Computador local | Interface de texto |
| Cliente `ssh` | Computador local | Inicia o protocolo e protege a sessão |
| Chave privada | Computador local | Prova controle da credencial autorizada |
| Endereço público | AWS | Permite localizar o destino |
| Security Group | AWS | Filtra tráfego até a interface |
| Servidor `sshd` | Kali | Escuta conexões e fornece SSH |
| Shell | Kali | Executa comandos após autenticação |

`sshd` significa *SSH daemon*. Um daemon é um processo que permanece em execução aguardando solicitações.

## TCP e porta 22

SSH normalmente usa **TCP**, protocolo de transporte que entrega fluxo de bytes confiável e ordenado. Sobre ele, SSH negocia criptografia, verifica integridade e autentica as partes.

A porta é um identificador lógico de `0` a `65535`, não conexão física. A porta de destino padrão do SSH é `22`.

Em uma conexão típica:

- o cliente escolhe uma porta de origem temporária;
- o destino é o IP público da instância;
- a porta de destino é `22`;
- o processo remoto em escuta é o `sshd`.

## Fluxo da conexão

1. O cliente recebe IP público ou DNS da instância.
2. Se houver nome, o DNS o resolve para IP.
3. O computador inicia TCP para `<IP-PUBLICO>:22`.
4. Roteadores encaminham pacotes pela Internet.
5. Rota da subnet e Internet Gateway alcançam a interface.
6. O Security Group verifica TCP/22 e a origem.
7. O firewall do Kali também pode filtrar.
8. O kernel entrega a conexão ao `sshd` em escuta.
9. Cliente e servidor negociam algoritmos e chaves temporárias.
10. O cliente verifica a identidade do servidor pela chave de host.
11. O servidor autentica o usuário pela chave pública autorizada.
12. O `sshd` inicia uma shell para o usuário.
13. Respostas voltam pela conexão estabelecida.

O Security Group é stateful: a resposta de uma conexão permitida pode retornar.

Liberar a porta não inicia `sshd`. Iniciar `sshd` também não torna o serviço público se endereço, rota ou regras estiverem ausentes.

## IP público e privado

O IP público é alcançável pela Internet. A interface da instância também possui IP privado dentro da VPC. A AWS mapeia o endereço público para o privado da interface.

Ao parar e iniciar, o IPv4 público automático pode mudar. Confirme o endereço atual antes de conectar.

## Dois pares de chaves diferentes

| Chave | O que comprova | Privada fica em | Pública fica em |
|---|---|---|---|
| Chave de host | Identidade do servidor | Instância | Apresentada ao cliente |
| Chave do usuário | Autorização do usuário | Computador local | `~/.ssh/authorized_keys` |

A chave de host evita confiar silenciosamente em outro servidor. A chave do usuário permite login sem enviar a chave privada.

Não confunda a fingerprint do key pair exibida no EC2 com a fingerprint da chave de host apresentada durante a conexão.

## Autenticação por chave pública

1. O cliente indica uma chave pública.
2. O servidor procura essa chave entre as autorizadas.
3. O cliente usa a chave privada para assinar dados vinculados à sessão.
4. O servidor verifica a assinatura com a chave pública.
5. O login é permitido se a assinatura e as regras forem válidas.

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

## Checklist de conectividade

- [ ] Região correta.
- [ ] Instância `running`.
- [ ] Verificações de status aprovadas.
- [ ] IPv4 ou DNS público atual.
- [ ] Rota pública válida.
- [ ] Security Group permitindo TCP/22 somente do IP atual.
- [ ] Cliente OpenSSH instalado.
- [ ] Usuário `kali`.
- [ ] Chave privada correspondente.
- [ ] Permissões restritas na chave.
- [ ] Fingerprint disponível para comparação.

## Verificando o cliente local

```text
ssh -V
├─ ssh: cliente OpenSSH
├─ -V: mostra a versão
├─ efeito: não inicia conexão
└─ resultado: identificação do cliente
```

Não confunda `-V`, versão, com `-v`, diagnóstico.

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

```text
ssh -i "<CAMINHO-DA-CHAVE>" kali@<IP-PUBLICO>
├─ ssh: executa o cliente Secure Shell local
├─ -i: seleciona o arquivo de identidade
├─ caminho: chave privada correspondente à instância
├─ kali: usuário existente no sistema remoto
├─ @: separa usuário e host
├─ IP: endereço atual da instância
├─ porta: TCP/22 por padrão
└─ resultado: abre uma shell remota após as verificações
```

Se o servidor tiver sido configurado em outra porta:

```text
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

```text
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

## Limpeza

1. Execute `exit`.
2. Pare ou termine a instância no Console.
3. Remova TCP/22 quando não for mais necessário.
4. Confira volumes e endereços remanescentes.
5. Preserve ou destrua a chave conforme os recursos que dependem dela.
6. Revise cobrança e créditos.

## Resumo

SSH usa cliente local e `sshd` remoto para transportar uma shell em canal criptografado sobre TCP. A porta padrão é `22`, mas endereço, rota, Security Group, firewall e serviço precisam estar corretos.

A chave de host autentica o servidor; o key pair autentica o usuário. A chave privada permanece local e deve ser acessível somente ao proprietário.

## Perguntas de fixação

1. Qual é a diferença entre terminal, shell, `ssh` e `sshd`?
2. Qual processo escuta TCP/22?
3. Por que liberar a porta não inicia SSH?
4. Qual é a diferença entre chave de host e chave do usuário?
5. A chave privada é enviada ao servidor?
6. O que a fingerprint representa?
7. Por que `400` ou `600` é preferível a `700`?
8. O que `-i` informa?
9. Qual é a diferença entre timeout e `Permission denied`?
10. Por que `exit` não encerra cobrança?

## Referências oficiais

- [Conectar a instância Linux com SSH](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-linux-inst-ssh.html)
- [Pré-requisitos de conexão](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connection-prereqs-general.html)
- [Solução de problemas no EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html)
- [Kali Linux na AWS](https://www.kali.org/docs/cloud/aws/)
