# Provisionando Kali Linux no Amazon EC2

Como transformar as escolhas do Console em um computador de laboratório? Antes de iniciar, tenha a [conta AWS protegida, a Região escolhida e os alertas de cobrança preparados](06-signing-up-with-aws.md). Esta aula acompanha as decisões de provisionamento, sem afirmar que uma instância já foi criada ou testada no seu ambiente.

Se precisar retomar o que está sendo alugado, consulte a [aula 3: O que é a nuvem?](../01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud.md). Aqui, o foco é reconhecer a função de cada componente antes de aceitar a criação de um recurso cobrável.

## Linux, Debian e Kali Linux

O computador precisa de uma camada que administre processador, memória, dispositivos e programas em execução. Linux é esse núcleo, também chamado *kernel*. Para formar um sistema utilizável, ele é reunido a aplicações, ferramentas administrativas, configurações, repositórios e um gerenciador de pacotes; esse conjunto recebe o nome de distribuição Linux.

Debian é uma dessas distribuições e serve de base para outras. Kali Linux deriva dessa base, mas é mantido com configurações, repositórios, ferramentas e metapacotes voltados a testes de segurança. Metapacotes agrupam a seleção de outros pacotes; não se deve reduzir o Kali a uma instalação indiferenciada de Debian com alguns executáveis extras.

A imagem destinada à nuvem pode trazer um conjunto menor do que o sistema conhecido em outras instalações. Uma ferramenta ausente não prova defeito da imagem. Consulte sua documentação e instale apenas o necessário ao exercício autorizado, sem presumir que tudo já está disponível.

## Máquina virtual, EC2, AMI e instância

Uma máquina virtual é um computador apresentado por software sobre recursos físicos de um host. A camada de virtualização fornece ao sistema convidado recursos com que ele trabalha como processador, memória e dispositivos. Na AWS, Amazon Elastic Compute Cloud, ou EC2, é o serviço usado para criar e administrar essa capacidade.

Para iniciar o sistema, é preciso escolher uma AMI, sigla de Amazon Machine Image. Ela é um modelo com software de inicialização e informações de armazenamento, não uma máquina já ligada. A partir desse modelo nasce uma instância EC2: o recurso concreto que terá identificador, estado, rede, armazenamento e capacidade próprios.

Cada escolha responde a uma pergunta diferente. A AMI determina o sistema inicial; o tipo de instância fornece vCPU, memória e características de rede; os volumes conservam dados; e a configuração de rede, junto do Security Group, delimita a conectividade. O key pair seleciona a chave pública para o acesso inicial.

Várias instâncias podem partir da mesma AMI sem se tornarem a mesma máquina. A imagem precisa estar disponível na Região utilizada e ser compatível com a arquitetura escolhida. Conferir apenas o nome “Kali” não resolve essas duas dependências.

## Tipo de instância, CPU, RAM e disco

O *instance type*, ou tipo de instância, reúne características de capacidade. Escolha-o pelo trabalho pretendido, não porque seu nome apareceu em uma gravação: disponibilidade, elegibilidade e condições comerciais podem mudar. A tabela separa recursos que um iniciante pode confundir.

| Recurso | Significado |
|---|---|
| vCPU | Unidade virtual de processamento apresentada à instância |
| RAM | Memória temporária usada pelos processos |
| Desempenho de rede | Capacidade aproximada de comunicação |
| EBS | Armazenamento persistente configurado separadamente |
| Instance store | Armazenamento temporário de alguns tipos |

Processamento e memória pertencem principalmente à escolha do tipo, enquanto o disco normalmente será um volume EBS, de *Elastic Block Store*. A persistência desse volume é administrada separadamente da execução da instância.

Isso explica por que RAM e disco não são substitutos: a memória de trabalho perde seu conteúdo quando o sistema desliga, mas o volume pode guardar arquivos para a próxima inicialização. A permanência útil dos dados também significa possível permanência de cobrança com a instância parada. Alguns tipos ainda oferecem *instance store*, armazenamento temporário que não deve ser confundido com a persistência do EBS.

## Escolhendo uma imagem confiável

Confiar na imagem é confiar no código que começará a controlar o sistema. Uma AMI falsa, modificada ou abandonada pode trazer serviços inseguros e credenciais indevidas. O primeiro resultado de busca não é uma prova de procedência.

Comece na [página oficial de imagens](https://www.kali.org/get-kali/#kali-cloud) e siga a referência para o AWS Marketplace. Confira produto e publicador e leia as instruções de acesso. Depois compare arquitetura, data, Região, termos e eventual preço de software com o que será selecionado no Console.

Não trate um AMI ID de outra época ou Região como identificador universal. Ele pode mudar, assim como a disponibilidade. A documentação da imagem oficial do Kali informa `kali` como usuário SSH; esse dado deve ser conferido na imagem efetivamente usada.

A revisão financeira também tem várias partes: plano, créditos, tipo, duração, disco, endereço público, tráfego e cobrança do Marketplace. Um selo “Free Tier eligible” não afirma que essa combinação inteira terá custo zero.

## Key pair

O key pair liga duas chaves relacionadas matematicamente, com funções distintas. A parte pública pode ser colocada no servidor; a privada fica protegida no computador de quem fará o acesso. Essa divisão permite comprovar posse da privada sem transmiti-la à instância.

Na primeira inicialização, a chave pública escolhida é incluída em `~/.ssh/authorized_keys` para o usuário definido pela AMI. A [aula 8 sobre autenticação SSH](08-communicating-with-cloud-computers-remotely-using-ssh.md) explicará como a chave privada participa da assinatura usada no login. Ela não funciona como uma senha comum enviada ao servidor.

Ao criar o par, guarde o arquivo privado em um diretório local protegido. Não o compartilhe, não o inclua nas notas e não o coloque em repositórios ou diretórios web. Normalmente o download só está disponível na criação; a AWS não fornece depois uma cópia recuperável dessa privada.

O nome do par é apenas uma identificação administrativa. Criar um novo par com o mesmo nome não troca a chave pública já instalada em uma instância antiga. Para o cliente OpenSSH, o formato normalmente escolhido é `.pem`; `.ppk` atende ao PuTTY. Escolha conforme o cliente, sem publicar ou fotografar o conteúdo para documentar a escolha.

## Levando essas escolhas para o Console

A interface pode reorganizar controles, mas cada decisão abaixo continua necessária. Leia as opções pelo efeito que produzem e não apenas pela posição em que apareciam na gravação.

### Confirmar a Região

Comece selecionando o local registrado na aula anterior. É nesse contexto que serão procurados ou criados AMI, key pair, instância e Security Group. Essa conferência evita interpretar uma lista de outra Região como ausência de recursos.

### Abrir o EC2

Encontre o serviço EC2 e abra a criação de instância. Um nome como `kali-lab` permite reconhecer a finalidade sem revelar clientes ou alvos. O nome ajuda a organização; ele não define o sistema operacional nem suas permissões.

### Selecionar a AMI

Na seleção da imagem, retome a referência oficial do Kali. Confira se o publicador e a arquitetura correspondem ao produto pretendido, leia os termos e o preço do Marketplace e confirme as instruções e o usuário `kali`. A seleção só está coerente quando esses dados concordam, não apenas quando o título da imagem parece correto.

### Escolher o tipo

Compare vCPU, RAM e arquitetura e escolha a menor capacidade que atende ao exercício. Confira o preço e a eventual cobertura pelos créditos da sua conta. Uma máquina no estado `running` já pode consumir capacidade cobrável mesmo que ninguém tenha aberto SSH.

### Criar o key pair

Selecione ou crie o par adequado ao laboratório e guarde o download privado em local protegido. A documentação do exercício pode mencionar qual par foi escolhido, mas não deve abrir, colar, fotografar ou publicar seu conteúdo.

### Configurar a rede

Se o computador local chegar diretamente pela Internet, confira a atribuição de endereço público. O Security Group é um filtro virtual associado à interface da instância e acompanha o estado das conexões, propriedade chamada *stateful*.

Para esta etapa, a entrada necessária é TCP na porta de destino `22`, limitada ao seu IP público atual, normalmente representado com `/32`. Não escolha `0.0.0.0/0` para SSH no laboratório pessoal: essa faixa permitiria tentativas de qualquer IPv4 da Internet, e não somente da sua máquina.

A regra permite a passagem; ela não liga o servidor SSH. Da mesma forma, um `sshd` ativo não pode ser alcançado se o caminho ou os filtros impedirem a comunicação. HTTP e HTTPS ainda não são necessários e não devem ser liberados nesta criação.

### Configurar armazenamento

Escolha tipo e tamanho do EBS pelo uso previsto e confira o preço atual. Observe a opção de exclusão na terminação e qualquer volume adicional, pois isso determina o que pode sobrar depois. Uma franquia antiga não justifica aumentar o disco sem necessidade.

### Revisar e iniciar

Antes de confirmar, reúna a revisão: Região e procedência da AMI, tipo compatível, par correto, entrada TCP/22 restrita, endereço público quando necessário e volumes previstos. Compare a estimativa de custo com o limite definido. Só então solicite a inicialização.

### Verificar o resultado

Depois da solicitação, aguarde o estado `running` e as verificações de status aprovadas. Confira IPv4 ou DNS público, key pair e Security Group. Esses dados confirmam a configuração e a preparação da instância, mas ainda não comprovam um login SSH.

Anote os identificadores necessários para administrar o laboratório, como Região, instance ID, AMI, tipo, par e grupo. Esses registros administrativos devem ser tratados conforme a privacidade do ambiente; em material público, use referências sanitizadas. O conteúdo da chave privada não faz parte dessa documentação.

## Ciclo de vida

| Estado ou ação | Efeito principal |
|---|---|
| `pending` | Instância sendo preparada |
| `running` | Sistema ativo e computação potencialmente cobrada |
| `reboot` | Reinicia sem encerrar a instância |
| `stopping` / `stopped` | Interrompe computação e preserva EBS |
| `shutting-down` / `terminated` | Remove definitivamente a instância |

Parar não tem o mesmo efeito que terminar. Uma instância parada preserva EBS e pode voltar a executar; na retomada, seu IPv4 público automático pode ser outro. A terminação remove definitivamente a instância e não pode ser desfeita. O volume raiz costuma acompanhar a exclusão por padrão, mas volumes adicionais dependem da opção configurada e precisam de conferência própria.

## Custos e limpeza

O tempo de execução é apenas parte da conta. Examine também EBS, snapshots, IPv4 público, Elastic IP, tráfego e eventual preço do software da AMI. A parada da computação não demonstra encerramento de todas essas parcelas.

Quando o exercício acabar de vez, feche SSH e termine a instância pelo Console. Procure volumes remanescentes e retire snapshots, endereços, regras e Security Groups que perderam a finalidade. Exclua o par e sua privada local somente depois de confirmar que nenhum recurso ainda depende deles. Finalmente, confira a cobrança atualizada: a limpeza precisa aparecer tanto nos recursos quanto nos custos.

## Problemas comuns

### A imagem não aparece

Confira primeiro a Região e retome o caminho oficial de acesso à imagem. Se ela continuar ausente, examine as condições do plano e a assinatura do Marketplace. Não substitua por uma imagem de procedência desconhecida apenas para contornar a ausência.

### O tipo não pode ser selecionado

Compare a arquitetura exigida pela AMI com a oferecida pelo tipo. Depois confira disponibilidade regional e cotas. Se precisar mudar de tipo, escolha outro compatível e revise novamente o preço antes de aceitar.

### A instância demora a ficar pronta

Observe as verificações de status antes de repetir a criação. Mensagens do Marketplace, notificações da conta e log do sistema podem esclarecer o que impediu a preparação. Uma demora não comprova falha definitiva nem justifica criar várias máquinas cobradas.

### O Kali possui poucas ferramentas

Uma instalação enxuta pode ser a composição prevista para a imagem de nuvem. Compare com a documentação e os metapacotes oficiais antes de concluir que algo está errado. Instalar somente as ferramentas exigidas pelo exercício mantém o ambiente e seu propósito compreensíveis.

## Referências oficiais

- [Kali Linux na AWS](https://www.kali.org/docs/cloud/aws/)
- [Amazon Machine Images](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html)
- [Key pairs do EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html)
- [Ciclo de vida do EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html)
