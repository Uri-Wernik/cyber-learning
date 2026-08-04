# Criando e protegendo uma conta AWS

> **Atualidade:** condições comerciais e nomes da interface mudam. As observações temporais desta nota correspondem a agosto de 2026; confirme-as nas páginas oficiais antes de criar recursos.

## O que uma conta AWS representa

Uma conta AWS reúne três responsabilidades: delimita os recursos administrados, concentra identidades e permissões e estabelece a relação de cobrança com a AWS.

Prepare um e-mail controlado por você, senha única armazenada em gerenciador, dispositivo para MFA e endereço que receberá alertas de cobrança.

Nunca registre nas notas senhas, códigos de recuperação, sementes de autenticador ou dados completos de pagamento.

## AWS Free Tier

Não existe uma promessa universal de “um ano de AWS grátis”.

Novos clientes podem encontrar planos, créditos iniciais, testes e ofertas gratuitas com prazos e limites diferentes. Contas antigas, países, Regiões e serviços também podem seguir condições distintas.

Por isso, consulte o [AWS Free Tier](https://aws.amazon.com/free/) e suas [perguntas frequentes](https://aws.amazon.com/free/free-tier-faqs/), confira o plano apresentado à sua conta e verifique serviços elegíveis, saldo e vencimento dos créditos. O selo “Free Tier eligible” sozinho não comprova que o uso será gratuito.

A AWS exige método de pagamento válido em muitos cadastros. Isso não transforma todo recurso em gratuito nem garante ausência de cobrança.

## Criando a conta pelo site oficial

A criação começa em [https://aws.amazon.com/](https://aws.amazon.com/). Antes de inserir dados, confirme o domínio. Informe um e-mail sob seu controle e um nome para a conta, crie uma senha forte e exclusiva para o usuário root e leia as condições do plano apresentado. Depois de fornecer os dados solicitados, conclua as verificações de e-mail, telefone ou identidade e aguarde a confirmação de ativação antes de provisionar recursos.

A ativação pode levar algum tempo. Um atraso não deve ser contornado criando várias contas ou repetindo cobranças de verificação.

## AWS Management Console

O **AWS Management Console** é a interface web usada para chamar serviços e APIs da AWS. Ele não é a máquina virtual, e apenas entrar no Console não inicia uma instância.

Elementos usados nesta seção:

- **Pesquisa de serviços:** localiza EC2, IAM e Billing.
- **Seletor de Região:** determina onde recursos regionais são vistos ou criados.
- **Menu da conta:** dá acesso a segurança, configurações e saída.
- **Billing and Cost Management:** apresenta créditos, uso, faturas e orçamentos.

O acesso direto é [https://console.aws.amazon.com/](https://console.aws.amazon.com/).

## Região

Uma **AWS Region** é uma área geográfica independente com uma ou mais Zonas de Disponibilidade. Escolha uma Região e registre-a durante o laboratório.

Instâncias EC2, AMIs, key pairs, volumes e Security Groups são regionais. Se uma instância “desaparecer” do Console, verifique primeiro o seletor de Região.

A escolha pode considerar:

- disponibilidade da imagem oficial do Kali;
- disponibilidade do tipo de instância;
- preço;
- distância e latência;
- exigências de residência de dados.

IAM, dados da conta e cobrança possuem escopo global ou de conta.

## Usuário root e IAM

O cadastro cria o **AWS account root user**, identificado pelo e-mail da conta. Ele possui acesso total e consegue executar algumas ações exclusivas.

Esse usuário não é o `root` do Linux. O root da AWS administra a conta e suas APIs; o root do Linux administra um sistema operacional específico.

| Identidade | Finalidade | Uso recomendado |
|---|---|---|
| Root da conta AWS | Propriedade, recuperação e tarefas exclusivas | Somente quando realmente necessário |
| IAM Identity Center ou função IAM | Acesso humano com credenciais temporárias | Preferência para uso cotidiano |
| IAM user | Credenciais de longa duração | Somente quando temporárias não forem adequadas |

**IAM** significa *Identity and Access Management*. Ele controla quem pode executar quais ações sobre quais recursos. Uma política IAM concede permissões na AWS; não altera usuários dentro do Kali.

Para uma conta pessoal de laboratório:

1. proteja primeiro o root;
2. prefira identidades e funções com credenciais temporárias quando possível;
3. se usar IAM user, habilite MFA e evite access keys sem necessidade;
4. aplique o princípio do menor privilégio.

## Proteção inicial

### Habilitar MFA no root

**MFA**, ou autenticação multifator, exige mais de um fator para entrar. A senha é algo que você sabe; uma passkey, chave de segurança ou código temporário vem de algo que possui.

Habilite MFA imediatamente. Quando disponível, prefira passkeys ou chaves de segurança resistentes a phishing e proteja os meios de recuperação.

### Não criar access keys para o root

Access keys permitem acesso programático às APIs. Uma chave do root teria poder sobre toda a conta. Não crie essa credencial para uso cotidiano.

### Criar e testar a identidade cotidiana

Configure a identidade normal, atribua somente as permissões necessárias, habilite MFA e teste o acesso antes de sair do root.

### Configurar acesso à cobrança quando necessário

Identidades IAM não acessam automaticamente o Console de cobrança. O root pode precisar liberar esse acesso nas configurações da conta; depois disso, a identidade ainda precisa das permissões IAM apropriadas.

## Cobrança, créditos e orçamento

No Console de **Billing and Cost Management**, verifique:

- plano atual;
- saldo e validade dos créditos;
- uso elegível;
- fatura estimada;
- custos por serviço e Região;
- orçamento e destinatários dos alertas.

Créditos podem reduzir a fatura e esconder quanto o laboratório consumiria sem eles. Monitore o saldo e o uso bruto.

### Criando um orçamento

Em **Billing and Cost Management**, abra **Budgets** e crie um orçamento mensal de custo. Defina um valor baixo e compatível com seu limite, configure alertas em percentuais como 50%, 80% e 100% e, quando disponível, adicione uma previsão. Informe um e-mail monitorado, salve e confirme que o orçamento aparece como ativo.

Um orçamento comum **não é teto de gastos**. Ele monitora dados e envia alertas. Como os dados não são atualizados em tempo real, o uso pode continuar antes da notificação.

## Antes de criar a primeira instância

Só avance quando a conta estiver ativada, o plano e a validade dos créditos tiverem sido conferidos e o root estiver protegido por MFA, sem access keys para uso cotidiano. A identidade normal precisa estar configurada e testada, o acesso à cobrança deve funcionar para a identidade correta, e orçamento, alertas e Região devem estar registrados. Nenhum segredo pertence às notas.

A próxima etapa é [provisionar Kali Linux em uma instância EC2](07-installing-kali-linux-on-the-cloud.md).

## Referências oficiais

- [AWS Free Tier](https://aws.amazon.com/free/)
- [Perguntas frequentes do AWS Free Tier](https://aws.amazon.com/free/free-tier-faqs/)
- [Boas práticas para o usuário root](https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html)
- [Boas práticas do IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html)
