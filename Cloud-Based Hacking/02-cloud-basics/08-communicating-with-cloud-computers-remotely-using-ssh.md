# Acessando uma instância remota com SSH

Como usar o teclado do seu computador para trabalhar no Kali que está na AWS sem expor a comunicação? A [instância preparada no EC2](07-installing-kali-linux-on-the-cloud.md) será o destino desta aula. Primeiro construiremos o acesso e verificaremos suas identidades; a interpretação dos comandos dentro do sistema continua na [aula 9](09-linux-terminal-basics.md). Os testes descritos são formas de verificação, não registros de uma conexão já executada aqui.

## O que é SSH

SSH, abreviação de *Secure Shell*, estabelece um canal criptografado entre um programa cliente e um servidor. Ele pertence à camada de aplicação: define como os lados negociam proteção, autenticam-se e transportam seus canais de trabalho.

Aqui, o uso será abrir uma shell remota, isto é, um interpretador de comandos que roda no Kali. A digitação e a apresentação do texto ficam no computador local, mas o programa solicitado pela linha será executado na instância. Essa distinção evita modificar a máquina errada.

No lado local ficam terminal, cliente `ssh` e arquivo privado de autenticação. Na instância, quem espera conexões é `sshd`, nome derivado de *SSH daemon*. Daemon é um processo que permanece ativo atendendo solicitações; depois das verificações e do login, ele pode iniciar a shell do usuário.

Entre esses lados, endereço, rota e filtros precisam permitir a chegada à interface. O Security Group é um desses controles, não o servidor SSH em si. Embora SSH também possa transferir arquivos, encaminhar portas e transportar outros canais, esses usos não precisam ser configurados para compreender a sessão de shell desta aula.

## TCP e porta 22

Para transportar os dados, SSH normalmente usa TCP, que entrega um fluxo confiável e ordenado de bytes. Essa entrega não é, por si só, a proteção criptográfica: negociação de chaves, autenticação e integridade pertencem ao SSH que funciona sobre o transporte.

Uma porta de rede é um número lógico entre `0` e `65535`, não uma entrada física do computador. O destino padrão do SSH é a porta `22`. O cliente usa uma porta temporária de origem e tenta chegar ao IP público da instância nessa porta de destino, onde o `sshd` deve estar aguardando.

Endereço e porta respondem, portanto, a perguntas diferentes: qual interface alcançar e qual comunicação nessa máquina deve receber os dados. Informar corretamente um deles não compensa um erro no outro.

## Como a conexão chega ao Kali

O caminho começa com o destino fornecido ao cliente. Quando ele é um nome DNS, esse nome precisa ser resolvido para um endereço; só depois a tentativa TCP/22 pode seguir pela rede. Os roteadores encaminham os pacotes até a rede virtual da AWS, a VPC. A subnet é uma subdivisão dessa rede, e sua rota até o Internet Gateway precisa permitir o caminho de Internet.

Na chegada, o Security Group avalia o tráfego destinado à interface, e o firewall do Kali pode aplicar um filtro adicional. Se o caminho e os controles permitirem a conexão e houver servidor em escuta, o kernel entrega os dados ao `sshd`.

Então cliente e servidor negociam algoritmos e chaves temporárias. O cliente confere a identidade apresentada pela chave de host, e o servidor verifica a autenticação do usuário com a chave pública autorizada. Só depois dessas condições é possível abrir a shell e trazer sua saída de volta ao terminal.

Por acompanhar o estado das conexões, o Security Group permite o retorno correspondente a uma entrada permitida. Isso não elimina a necessidade das demais condições. Abrir uma regra não inicia `sshd`, e iniciar o processo não cria endereço público, rota ou permissão de entrada.

## IP público e privado

Para a conexão direta vinda da Internet, usa-se o endereço público. A interface também tem um endereço privado dentro da VPC, e a AWS realiza o mapeamento entre o público e esse privado. Não espere que o endereço privado seja alcançável diretamente da sua rede doméstica.

O IPv4 público atribuído automaticamente pode mudar depois de parar e iniciar a máquina. Antes de repetir um comando antigo, consulte o destino atual no Console. A ausência de resposta em um endereço antigo não demonstra, sozinha, defeito no SSH.

## Dois pares de chaves diferentes

Há duas perguntas criptográficas na conexão. “Este é o servidor que pretendo alcançar?” é respondida pela chave de host: sua parte privada permanece na instância, e a pública pode ser conferida pelo cliente. “Este usuário possui a identidade autorizada para entrar?” envolve a chave do usuário: a privada permanece local, e a pública permitida está em `~/.ssh/authorized_keys` no destino.

As privadas não precisam viajar para realizar essas provas. Uma protege o reconhecimento do servidor; a outra participa do login do usuário. Verificar só uma não substitui verificar a outra.

Por esse motivo, a fingerprint de um key pair exibida pelo EC2 não deve ser usada como se fosse a fingerprint da chave de host mostrada pelo cliente. São referências a chaves de funções diferentes, ainda que a palavra “chave” apareça nas duas telas.

## Como a chave autentica o usuário

Na autenticação, o cliente informa a chave pública que pretende apresentar. Se o servidor a reconhecer entre as autorizadas, o cliente usa a privada para assinar dados ligados àquela sessão. O servidor verifica a assinatura com a pública, além das demais regras de acesso.

O que se comprova é a posse da chave privada correspondente; não se envia esse arquivo nem se comparam duas cópias dele. Essa é a diferença essencial em relação à ideia simplificada de uma senha transmitida para conferência.

O nome do usuário também participa da tentativa: na imagem oficial do Kali para AWS ele é `kali`. Uma transcrição que diga “Carly” não está indicando outro usuário; trata-se de reconhecimento incorreto do nome. Uma chave válida para um usuário não garante acesso com um nome diferente.

## Verificando a chave de host

Para comparar identidades sem ler uma chave pública inteira, usa-se uma fingerprint, seu resumo criptográfico. O valor só ajuda se a referência for confiável: uma impressão apresentada pela própria conexão ainda não prova que o destino está correto.

Antes do primeiro acesso, procure a referência por um caminho confiável, como o log do sistema da instância no EC2. Durante a tentativa, o cliente pode mostrar o aviso exemplificado abaixo; os valores entre marcadores não são uma identidade real validada nesta nota.

```text
The authenticity of host '<IP-PUBLICO>' can't be established.
ED25519 key fingerprint is SHA256:<FINGERPRINT>.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

Compare o valor apresentado com a referência obtida. Responda `yes` somente após confirmar a coincidência; aceitar sem conferir apenas registra uma confiança que ainda não foi demonstrada.

O cliente guarda a identidade conhecida em `~/.ssh/known_hosts` no Linux e no macOS, ou em `%USERPROFILE%\.ssh\known_hosts` no Windows. Em conexões futuras, uma diferença pode indicar reconstrução legítima ou reutilização do IP, mas também pode representar interceptação. Investigue a causa antes de apagar o registro.

O utilitário `ssh-keyscan` consegue coletar a chave anunciada. Entretanto, como depende do mesmo caminho de rede em análise, essa coleta sozinha não autentica o servidor. Obter um valor e verificar sua procedência são operações diferentes.

## Verificando o cliente local

Antes de tentar acessar a instância, confirme no computador local se o cliente está disponível. O comando abaixo apenas consulta sua versão e não abre uma conexão.

```powershell
ssh -V
```

`ssh` chama o cliente OpenSSH, e `-V`, com letra maiúscula, pede a versão. A opção minúscula `-v` tem outra finalidade: acrescenta informações de diagnóstico de uma tentativa. Ver uma versão confirma a presença do cliente, não o funcionamento da rede até o Kali.

## Protegendo a chave privada

### Linux e macOS

No computador que guarda a privada, limite a leitura ao proprietário. Em sistemas com permissões POSIX, o primeiro exemplo permite apenas leitura por esse proprietário.

```bash
chmod 400 "/caminho/<CHAVE>.pem"
```

O programa `chmod` modifica permissões do arquivo indicado; `400` deixa grupo e outros sem acesso e concede leitura ao dono. Outra opção apropriada, caso o proprietário também precise escrever no arquivo, é:

```bash
chmod 600 "/caminho/<CHAVE>.pem"
```

Nesse segundo caso, `600` preserva leitura e escrita somente para o proprietário. A chave é um arquivo de dados, não um programa que precise executar; por isso, `700` não é a permissão indicada para ela.

Depois da mudança, consulte a listagem para conferir as permissões efetivas:

```bash
ls -l "/caminho/<CHAVE>.pem"
```

Em WSL, guarde preferencialmente a chave no diretório pessoal Linux. Uma unidade do Windows segue regras de ACL que não são necessariamente equivalentes aos modos POSIX esperados pelo exemplo. Aplicar um número sem conferir o sistema de arquivos pode não produzir a proteção pretendida.

### Windows com OpenSSH

No Windows, a proteção é expressa por Access Control Lists, ou ACLs: listas de identidades e acessos concedidos ao arquivo. A privada deve pertencer ao usuário atual e não ficar legível para outras pessoas. No PowerShell local, a sequência preservada abaixo ajusta e depois apresenta essa lista.

```powershell
$key = "C:\CAMINHO\<CHAVE>.pem"
icacls.exe $key /reset
icacls.exe $key /inheritance:r
icacls.exe $key /grant:r "$($env:USERNAME):(R)"
icacls.exe $key
```

A variável `$key` contém o caminho do arquivo, não seu conteúdo. `icacls.exe` manipula a ACL: `/reset` redefine as permissões explícitas, `/inheritance:r` retira permissões herdadas e `/grant:r` substitui a concessão destinada ao usuário atual. A indicação `(R)` concede leitura.

A última chamada, sem opções de alteração, mostra o resultado. Examine-o para confirmar proprietário e ausência de leitores indevidos, pois a proteção real depende da ACL final. Não adicione `Everyone` nem grupos amplos como maneira de fazer desaparecer uma mensagem de erro.

## Comando de conexão

Com destino atual, usuário e chave conferidos, execute o cliente na máquina local. No Windows, o arquivo de identidade é selecionado por um caminho desse sistema:

```powershell
ssh -i "C:\CAMINHO\<CHAVE>.pem" kali@<IP-PUBLICO>
```

No Linux ou no macOS, a mesma operação usa o caminho local correspondente:

```bash
ssh -i "/caminho/<CHAVE>.pem" kali@<IP-PUBLICO>
```

Na linha, `ssh` inicia o cliente e `-i` indica qual privada usar na autenticação. Depois, `kali@<IP-PUBLICO>` reúne o usuário remoto e o destino, separados por `@`. Sem configuração diferente, a tentativa segue para TCP/22. Substitua os marcadores apenas pelos dados do seu laboratório autorizado.

Se o servidor tiver sido deliberadamente configurado em outra porta, ela pode ser informada ao cliente:

```bash
ssh -p <PORTA> -i "<CHAVE>" kali@<IP-PUBLICO>
```

Nesse exemplo, `-p` escolhe a porta de destino da tentativa. Essa opção não reconfigura `sshd` e não cria uma regra no Security Group. As três configurações precisam concordar; mudar somente a linha local não move o serviço remoto.

## Confirmando a sessão remota

Depois de autenticar, confirme onde você está antes de executar alterações. Os três comandos abaixo são interpretados no Kali remoto, não na estação que exibe o terminal.

```bash
whoami
hostname
uname -a
```

`whoami` informa a identidade efetiva, que deve corresponder ao usuário escolhido, aqui `kali`. `hostname` mostra o nome da máquina, e `uname -a` apresenta informações do kernel e do sistema. Compare essas respostas com o ambiente esperado, sem publicar identificadores desnecessários.

Quando concluir a sessão, peça à shell que termine:

```bash
exit
```

Ao sair, a shell e a conexão SSH são encerradas. A instância EC2 continua com seu estado anterior; `exit` não envia uma ordem de parada ao serviço da AWS.

## Testando apenas a porta no Windows

Se a dúvida for apenas a chegada TCP, use este teste no PowerShell local:

```powershell
Test-NetConnection <IP-PUBLICO> -Port 22
```

`Test-NetConnection` consulta o destino, e `-Port 22` seleciona a porta. Um resultado positivo indica que a conexão TCP pôde ser estabelecida naquele momento. Não houve, com isso, conferência da chave de host nem autenticação do usuário: essas provas pertencem ao SSH.

## Diagnóstico detalhado

Para localizar em que ponto o SSH falha, o cliente pode apresentar detalhes adicionais da tentativa:

```bash
ssh -vvv -i "<CHAVE>" kali@<IP-PUBLICO>
```

A combinação `-vvv` aumenta a informação sobre resolução, estabelecimento TCP, negociação e autenticação. Leia a saída pela etapa em que parou, em vez de trocar várias configurações ao acaso. Antes de compartilhar qualquer trecho, retire IPs, nomes de usuário e outros metadados privados.

## Erros comuns

### `ssh` não é reconhecido

Nesse caso, a falha é local e anterior à rede: o sistema não encontrou o cliente. Confira a consulta `ssh -V`, a disponibilidade no `PATH` e, no Windows, o recurso OpenSSH Client. Não há razão para abrir mais portas no servidor para corrigir um programa local ausente.

### `Connection timed out`

O tempo esgotou sem a resposta necessária. Comece confirmando Região, estado da instância e IP atual; depois examine TCP/22 e a origem autorizada na regra. Rota, Internet Gateway, firewall local e disponibilidade de `sshd` também fazem parte do caminho. O sintoma sozinho não identifica qual desses elementos falhou.

### `Connection refused`

Uma recusa indica resposta do destino ou de um controle que rejeitou a conexão, em vez de simples silêncio. Confira se a porta é a correta, se há `sshd` atendendo e se o firewall do Kali está rejeitando. Uma regra permissiva na AWS não cria o processo que deveria responder.

### `Permission denied (publickey)`

A tentativa já alcançou o SSH, mas a prova de identidade do usuário não foi aceita. Compare o nome `kali`, a privada selecionada e o par previsto na criação; a pública correspondente precisa estar autorizada em `authorized_keys`. Abrir a rede para mais origens não corrige uma autenticação rejeitada.

### `WARNING: UNPROTECTED PRIVATE KEY FILE`

O cliente identificou proteção inadequada do arquivo privado, permitindo acesso indevido a outros usuários. Restrinja o arquivo com `400` ou `600` em sistemas POSIX, ou confira a ACL no Windows. A correção deve reduzir o acesso e ser verificada, não apenas suprimir o aviso.

### `No such file or directory`

O cliente não encontrou o arquivo no caminho indicado. Confira a localização local e preserve aspas se houver espaços. Antes de investigar o servidor, resolva essa entrada de arquivo que a própria estação precisa ler.

### `Could not resolve hostname`

A transformação do nome em endereço não foi concluída. Revise o nome mostrado no Console e a resolução; para separar esse problema, pode-se usar o IP público atual do laboratório. Chegar por IP não dispensa a verificação da identidade do servidor.

### `REMOTE HOST IDENTIFICATION HAS CHANGED`

A identidade apresentada difere da que ficou armazenada para o destino. Interrompa a tentativa e compare a nova fingerprint por referência confiável. Somente depois de confirmar uma substituição legítima, remova o registro antigo com:

```text
ssh-keygen -R <IP-OU-DNS>
```

`ssh-keygen -R` retira a entrada conhecida associada ao IP ou nome informado. Isso não comprova a nova identidade; na reconexão, ela ainda deverá ser conferida antes da aceitação.

### Funcionava antes de parar a instância

Confira se o endereço público automático mudou na retomada. Atualize o destino local se necessário e verifique também se o seu próprio IP de origem ainda corresponde à regra do Security Group. São dois endereços diferentes, sujeitos a mudanças independentes.

## Encerrando o acesso sem esquecer a instância

O encerramento tem uma parte dentro da sessão e outra na administração da AWS. Primeiro use `exit`; depois decida no Console se a instância deve ser parada para retomada ou terminada definitivamente. Quando o acesso não tiver mais finalidade, retire a regra temporária TCP/22.

Confira volumes e endereços que permaneceram e decida sobre a guarda ou destruição da chave conforme os recursos que ainda dependem dela. Revise créditos e cobrança depois da atualização. Dessa forma, a verificação cobre tanto a sessão fechada quanto o estado da infraestrutura, sem confundir desconexão com fim dos custos.

## Referências oficiais

- [Conectar a instância Linux com SSH](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-linux-inst-ssh.html)
- [Pré-requisitos de conexão](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connection-prereqs-general.html)
- [Solução de problemas no EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html)
- [Kali Linux na AWS](https://www.kali.org/docs/cloud/aws/)
