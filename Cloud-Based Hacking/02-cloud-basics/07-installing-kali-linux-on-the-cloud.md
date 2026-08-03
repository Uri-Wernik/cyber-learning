# Provisionando Kali Linux no Amazon EC2

Esta aula parte de uma [conta AWS protegida, uma Região definida e alertas de cobrança configurados](06-signing-up-with-aws.md).

A definição de computação em nuvem está na [aula 3: O que é a nuvem?](../01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud.md).

## Linux, Debian e Kali Linux

**Linux** é o núcleo, ou *kernel*, que gerencia processador, memória, dispositivos e processos. Uma **distribuição Linux** combina esse kernel com ferramentas de sistema, gerenciador de pacotes, repositórios, configurações e aplicações.

**Debian** é uma distribuição Linux que serve de base para várias outras.

**Kali Linux** é uma distribuição baseada no Debian e mantida para testes de segurança. Possui repositórios, configurações, metapacotes e ferramentas voltados a esse trabalho. Portanto, não é apenas “Debian com alguns programas instalados”.

Imagens do Kali para nuvem podem ser enxutas. Não presuma que toda ferramenta esteja pré-instalada: confira a documentação e instale somente o necessário.

## Máquina virtual, EC2, AMI e instância

Uma **máquina virtual**, ou VM, é um computador definido em software que recebe recursos de um host físico por uma camada de virtualização.

**Amazon Elastic Compute Cloud (EC2)** é o serviço da AWS usado para provisionar e administrar capacidade computacional virtual.

Uma **Amazon Machine Image (AMI)** não é a máquina em execução. É uma imagem ou template de inicialização que contém o software necessário para preparar o sistema e informações sobre armazenamento.

Uma **instância EC2** é o recurso criado a partir da AMI. Possui estado, identificador, rede, armazenamento e capacidade próprios.

Ao criar uma instância, a AMI fornece o sistema e a configuração inicial. O tipo de instância acrescenta vCPU, RAM e capacidade de rede; os volumes fornecem armazenamento; a rede e o Security Group definem a conectividade permitida; e o key pair fornece a chave pública usada no acesso inicial.

Uma AMI pode iniciar várias instâncias. AMIs são regionais e precisam ser compatíveis com a arquitetura escolhida.

## Tipo de instância, CPU, RAM e disco

O **instance type** representa uma combinação de recursos. Nomes e elegibilidade mudam, portanto não dependa de um tipo citado em gravação antiga.

| Recurso | Significado |
|---|---|
| vCPU | Unidade virtual de processamento apresentada à instância |
| RAM | Memória temporária usada pelos processos |
| Desempenho de rede | Capacidade aproximada de comunicação |
| EBS | Armazenamento persistente configurado separadamente |
| Instance store | Armazenamento temporário de alguns tipos |

O tipo define principalmente processamento, memória e características de rede. O disco normalmente é um volume **Amazon Elastic Block Store (EBS)**.

RAM e armazenamento não são equivalentes. A RAM perde conteúdo ao desligar; um volume EBS pode permanecer e continuar sendo cobrado mesmo com a instância parada.

## Escolhendo uma imagem confiável

Uma AMI de terceiros inicia código com amplo controle dentro da instância. Imagem falsa ou abandonada pode conter credenciais, serviços inseguros ou software modificado.

Para o Kali:

1. parta da [página oficial de imagens](https://www.kali.org/get-kali/#kali-cloud);
2. use o link oficial para o AWS Marketplace;
3. confirme produto e publicador;
4. leia instruções e nome de usuário padrão;
5. confira arquitetura, data, Região e preço de software;
6. não selecione apenas o primeiro resultado de busca.

Não fixe um AMI ID nas notas: ele é regional e pode mudar. Na imagem oficial documentada pelo Kali, o usuário SSH é `kali`.

O selo “Free Tier eligible” não garante custo zero. Depende de plano, créditos, tipo, duração, armazenamento, endereço público, tráfego e Marketplace.

## Key pair

Um **key pair** do EC2 contém duas partes relacionadas matematicamente:

- **chave pública:** colocada na instância durante a primeira inicialização;
- **chave privada:** mantida no computador do usuário.

Na primeira inicialização, a chave pública selecionada é adicionada a `~/.ssh/authorized_keys` do usuário definido pela AMI. A chave privada correspondente será usada na [autenticação SSH da aula 8](08-communicating-with-cloud-computers-remotely-using-ssh.md).

A chave privada:

- não é uma senha comum;
- não é enviada ao servidor durante a conexão;
- não deve ser compartilhada;
- não deve ficar em repositórios, diretórios web ou notas;
- deve ser armazenada em diretório local protegido;
- normalmente só pode ser baixada uma vez ao ser criada.

A AWS não mantém cópia recuperável da chave privada. Criar outro key pair com o mesmo nome não faz a nova chave funcionar automaticamente em instância antiga.

Para OpenSSH, escolha normalmente `.pem`. O formato `.ppk` é destinado ao PuTTY.

## Levando essas escolhas para o Console

Os nomes e posições dos controles podem mudar, mas as decisões técnicas permanecem.

### Confirmar a Região

Selecione a Região definida na aula anterior. AMIs, key pairs, instâncias e Security Groups serão criados nela.

### Abrir o EC2

Localize **EC2** e inicie uma nova instância. Use nome descritivo, como `kali-lab`, sem dados de clientes ou alvos reais.

### Selecionar a AMI

Use a referência oficial do projeto Kali e confira:

- publicador;
- arquitetura;
- instruções;
- usuário `kali`;
- preço de software;
- termos do Marketplace.

### Escolher o tipo

Escolha a menor capacidade suficiente. Confirme vCPUs, RAM, arquitetura, preço e eventual cobertura por créditos.

Uma instância pode consumir capacidade cobrável ao entrar em `running`, mesmo sem SSH aberto.

### Criar o key pair

Crie um key pair relacionado ao laboratório, baixe a chave privada e mova-a para diretório protegido. Não abra, fotografe, publique ou cole seu conteúdo.

### Configurar a rede

Confirme que a instância receberá endereço público se o acesso vier diretamente da Internet.

O **Security Group** é um firewall virtual e stateful associado à interface. Para SSH, crie regra de entrada:

- protocolo: TCP;
- porta de destino: `22`;
- origem: somente seu IP público atual, normalmente `/32`.

Não use `0.0.0.0/0` para SSH em laboratório pessoal. Essa origem permite tentativas de qualquer endereço IPv4 da Internet.

Liberar TCP/22 não inicia o SSH. Um `sshd` ativo também não será alcançável se a rede bloquear.

Não libere HTTP ou HTTPS nesta etapa.

### Configurar armazenamento

Confira tipo e tamanho do EBS, preço atual, exclusão na terminação e volumes adicionais. Não aumente o disco apenas porque um limite antigo já foi gratuito.

### Revisar e iniciar

Revise Região, AMI, publicador, tipo, key pair, regra TCP/22, endereço público, volumes e estimativa de preço. Depois, inicie.

### Verificar o resultado

Aguarde:

- estado `running`;
- verificações de status aprovadas;
- IPv4 ou DNS público;
- key pair correto;
- Security Group esperado.

Registre Região, instance ID, AMI, tipo, key pair e Security Group. Não registre o conteúdo da chave privada.

## Ciclo de vida

| Estado ou ação | Efeito principal |
|---|---|
| `pending` | Instância sendo preparada |
| `running` | Sistema ativo e computação potencialmente cobrada |
| `reboot` | Reinicia sem encerrar a instância |
| `stopping` / `stopped` | Interrompe computação e preserva EBS |
| `shutting-down` / `terminated` | Remove definitivamente a instância |

Ao parar e iniciar, o IPv4 público automático pode mudar. A terminação é irreversível. O volume raiz costuma ser excluído por padrão; volumes adicionais dependem da configuração.

## Custos e limpeza

Além do tempo da instância, verifique EBS, snapshots, IPv4 público, Elastic IP, tráfego e preço da AMI.

Ao terminar definitivamente, encerre a sessão SSH e termine a instância. Em seguida, confira volumes restantes, remova snapshots, endereços, regras e Security Groups sem uso e só exclua o key pair e a chave local quando nenhum recurso depender deles. Consulte a cobrança depois da atualização.

## Problemas comuns

### A imagem não aparece

- confirme a Região;
- acesse pelo link oficial;
- verifique limitações do plano;
- confira a assinatura do Marketplace.

### O tipo não pode ser selecionado

- confira arquitetura da AMI;
- verifique disponibilidade e cota;
- escolha outro tipo compatível após revisar o preço.

### A instância demora a ficar pronta

- aguarde as verificações;
- confira mensagens do Marketplace;
- verifique notificações da conta;
- consulte o log do sistema.

### O Kali possui poucas ferramentas

Isso pode ser esperado em imagem de nuvem. Consulte os metapacotes oficiais e instale somente o necessário.

## Referências oficiais

- [Kali Linux na AWS](https://www.kali.org/docs/cloud/aws/)
- [Amazon Machine Images](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html)
- [Key pairs do EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html)
- [Ciclo de vida do EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html)

## Perguntas de fixação

1. Qual é a relação entre kernel Linux, distribuição Debian e distribuição Kali Linux?
2. O que uma AMI fornece e o que só passa a existir quando uma instância EC2 é criada?
3. Como tipo de instância, volume EBS, rede, Security Group e key pair participam da composição da instância?
4. Por que RAM e armazenamento EBS possuem ciclos de vida e cobrança diferentes?
5. Quais dados de publicador, arquitetura, Região, usuário padrão e preço devem ser verificados antes de escolher uma AMI?
6. Onde a chave pública e a chave privada do key pair ficam após a primeira inicialização?
7. Por que criar outro key pair com o mesmo nome não concede acesso automático a uma instância antiga?
8. Qual regra de entrada deve ser configurada para SSH e por que uma origem `/32` é mais restrita que `0.0.0.0/0`?
9. Por que o estado `running` não comprova sozinho que a instância está pronta para receber SSH?
10. O que muda entre reiniciar, parar e terminar uma instância, inclusive para IP público e volumes?
11. Quais recursos além da instância devem ser procurados durante a limpeza para evitar cobrança residual?
