# Criando e protegendo uma conta AWS

> **Atualidade:** a referência temporal destas observações é agosto de 2026. Planos comerciais e rótulos do painel podem ter mudado; consulte as fontes oficiais antes de provisionar. Esta reescrita não representa nova conferência comercial.

## O que uma conta AWS representa

Antes de criar a primeira máquina, quem poderá administrá-la e quem responderá pela fatura? A conta AWS liga essas responsabilidades. Ela organiza os recursos, as identidades e suas permissões e a relação financeira com o provedor. O cadastro, portanto, não é apenas uma tela de acesso ao laboratório.

Separe um e-mail que você controla, um gerenciador para guardar uma senha exclusiva e um dispositivo para a autenticação multifator. Escolha também um endereço de e-mail acompanhado regularmente para receber avisos financeiros. Um alerta enviado a uma caixa esquecida oferece pouca ajuda prática.

As notas podem explicar o processo, mas não devem conter os segredos que o tornam possível. Senhas, sementes de autenticador, códigos de recuperação e dados completos de pagamento precisam ficar em armazenamento apropriado, nunca no material que poderá ser publicado.

## AWS Free Tier

O primeiro limite a entender é o financeiro. A expressão AWS Free Tier não deve ser traduzida como um ano irrestrito sem cobrança. Ofertas podem combinar plano, créditos, testes e franquias; cada combinação tem condições e vencimentos.

Uma conta nova pode receber condições diferentes das de uma conta antiga, e país, Região e serviço também podem interferir. Por isso, uma gravação ou a experiência de outro estudante não determina o preço do seu laboratório.

Abra a página do [AWS Free Tier](https://aws.amazon.com/free/) e as [perguntas frequentes](https://aws.amazon.com/free/free-tier-faqs/). Compare essas informações com o plano efetivamente apresentado à sua conta: quais serviços entram, quanto saldo existe e quando ele expira. O rótulo “Free Tier eligible” informa elegibilidade, mas não comprova que a configuração e o tempo de uso escolhidos serão integralmente cobertos.

Em muitos cadastros, será solicitado um meio de pagamento válido. Fornecê-lo estabelece uma possibilidade de cobrança; não transforma recursos fora das condições da oferta em recursos gratuitos. Só avance depois de compreender essa diferença.

## Criando a conta pelo site oficial

Use [https://aws.amazon.com/](https://aws.amazon.com/) como ponto de entrada e confira o domínio antes de digitar informações pessoais. O cadastro pede um e-mail controlado por você e um nome de conta. A senha criada para o usuário root deve ser forte e exclusiva; leia o plano e seus termos antes de aceitar as condições e fornecer os demais dados exigidos.

Conclua as verificações solicitadas, que podem envolver e-mail, telefone ou identidade. A confirmação de ativação é a evidência para seguir ao provisionamento. Se houver demora, aguarde e confira o estado do cadastro: abrir contas repetidas ou repetir verificações financeiras não é uma solução apropriada para um atraso.

## AWS Management Console

Depois do cadastro, a administração ocorre no AWS Management Console, uma interface web que aciona serviços e APIs da AWS. API é a interface pela qual programas solicitam operações; o painel oferece controles visuais para essas operações. Entrar nele não significa entrar no Linux nem iniciar uma máquina virtual.

Na pesquisa de serviços você localizará EC2, IAM e Billing. O seletor de Região muda o local em que os recursos regionais são consultados ou criados, enquanto o menu da conta reúne configurações, segurança e saída. Já Billing and Cost Management concentra informações financeiras, como uso, créditos, faturas e orçamentos.

O endereço direto é [https://console.aws.amazon.com/](https://console.aws.amazon.com/). Ao navegar, mantenha a distinção: um controle do Console administra um recurso; o sistema operacional desse recurso é outro ambiente, com outro acesso.

## Região

Uma AWS Region identifica uma área geográfica independente da AWS, organizada em Zonas de Disponibilidade. Essas zonas são divisões de infraestrutura dentro da Região. Escolha o local do laboratório e anote-o para reencontrar seus recursos.

Instância EC2, imagem AMI, key pair, volume e Security Group têm contexto regional. Se você abrir outra Região, a lista pode parecer vazia mesmo com a máquina ainda ativa em outro lugar. Antes de recriar um recurso que parece ter sumido, confira esse seletor.

A escolha deve levar em conta a presença da imagem oficial do Kali e de um tipo de instância compatível, o preço e a distância de rede, que influencia a latência. Quando houver exigência sobre onde os dados podem permanecer, ela também delimita a escolha. Nem tudo segue esse recorte: IAM, informações da conta e cobrança possuem alcance global ou de conta.

## Usuário root e IAM

O e-mail do cadastro identifica o AWS account root user. Essa identidade tem acesso total à conta e pode realizar tarefas que não estão disponíveis a identidades comuns. Por isso, ela deve ser preservada para situações realmente necessárias, não adotada como login habitual.

Apesar do nome, esse root não é o usuário `root` de uma máquina Linux. O primeiro atua na conta e nas APIs da AWS; o segundo possui privilégios dentro de um sistema operacional. Uma permissão em um desses planos não equivale automaticamente a uma permissão no outro.

| Identidade | Finalidade | Uso recomendado |
|---|---|---|
| Root da conta AWS | Propriedade, recuperação e tarefas exclusivas | Somente quando realmente necessário |
| IAM Identity Center ou função IAM | Acesso humano com credenciais temporárias | Preferência para uso cotidiano |
| IAM user | Credenciais de longa duração | Somente quando temporárias não forem adequadas |

IAM, abreviação de *Identity and Access Management*, organiza a relação entre identidade, ação e recurso. Suas políticas respondem quem pode fazer o quê na AWS. Elas não criam nem modificam, por si mesmas, usuários do Kali.

Depois de proteger o root, prepare a identidade cotidiana. Quando adequado, prefira IAM Identity Center ou funções com credenciais temporárias, evitando manter segredos de longa duração. Se a situação exigir IAM user, proteja-o com MFA e não gere access keys sem finalidade. Em qualquer opção, menor privilégio significa conceder apenas o necessário para o trabalho previsto.

## Proteção inicial

### Habilitar MFA no root

MFA significa autenticação multifator: a verificação combina fatores independentes. A senha representa conhecimento; uma chave de segurança, passkey ou um dispositivo que fornece códigos representa posse. Não se trata apenas de repetir duas senhas.

Ative essa proteção no root logo no início. Prefira passkeys ou chaves de segurança resistentes a phishing quando disponíveis e preserve os meios de recuperação. MFA reforça a entrada, mas não corrige permissões excessivas nem configurações inseguras depois do login.

### Não criar access keys para o root

Access keys são credenciais para programas chamarem as APIs. Se pertencerem ao root, carregam o alcance dessa identidade sobre a conta. Elas não são necessárias como atalho para o uso diário e não devem ser criadas para esse fim. Também não são o par de chaves SSH usado posteriormente para entrar no Linux.

### Criar e testar a identidade cotidiana

A identidade normal precisa ser configurada com as permissões mínimas e MFA. Faça um teste de acesso antes de encerrar a sessão de root: a evidência necessária é conseguir entrar pela identidade preparada e realizar as operações permitidas, não apenas vê-la listada no painel.

### Configurar acesso à cobrança quando necessário

Se a identidade cotidiana não conseguir abrir a cobrança, não conclua imediatamente que o cadastro falhou. Pode ser necessário habilitar esse acesso nas configurações da conta usando root. Mesmo com essa opção liberada, a identidade ainda depende das permissões IAM apropriadas; configuração da conta e autorização da identidade são condições diferentes.

## Cobrança, créditos e orçamento

Em Billing and Cost Management, acompanhe o plano ativo, o uso elegível e a fatura estimada. Examine saldo e vencimento de créditos e distribua a leitura dos custos por serviço e Região. Isso ajuda a reconhecer recursos que continuam ativos fora da tela em que você costuma trabalhar.

Confira também o orçamento e os destinatários de seus avisos. Um crédito pode reduzir a cobrança final sem reduzir o consumo bruto do laboratório; ao acabar o saldo, o mesmo uso pode passar a aparecer na fatura. Portanto, observar apenas o valor líquido não é suficiente para entender o custo real.

### Criando um orçamento

Para transformar o limite financeiro em acompanhamento, abra Budgets dentro de Billing and Cost Management e escolha um orçamento mensal de custo. Use um valor baixo que você possa assumir. Os avisos podem ser distribuídos em faixas como 50%, 80% e 100%; quando a opção existir, inclua também previsão de consumo.

Cadastre um e-mail acompanhado, salve a configuração e confira se o orçamento ficou ativo. Essa conferência confirma a criação do acompanhamento, não um bloqueio financeiro. O orçamento comum apenas compara dados e envia alertas: ele não é um teto de gastos e não interrompe recursos por padrão. Como a atualização não é em tempo real, pode haver consumo antes da notificação.

## Antes de criar a primeira instância

A preparação está pronta quando há evidência de ativação, entendimento do plano e dos créditos e proteção do root por MFA, sem access keys cotidianas. A identidade normal deve ter sido testada, inclusive para consultar a cobrança quando necessário. Região escolhida, orçamento e destinatários de alertas precisam estar conferidos.

Registre decisões, não segredos. Esta aula não comprova que esses controles já foram configurados na sua conta; ela explica o que verificar antes de assumir custos. Com essas condições atendidas, siga para [provisionar Kali Linux em uma instância EC2](07-installing-kali-linux-on-the-cloud.md).

## Referências oficiais

- [AWS Free Tier](https://aws.amazon.com/free/)
- [Perguntas frequentes do AWS Free Tier](https://aws.amazon.com/free/free-tier-faqs/)
- [Boas práticas para o usuário root](https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html)
- [Boas práticas do IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html)
