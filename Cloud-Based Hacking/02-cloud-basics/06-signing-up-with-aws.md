# Criando e protegendo uma conta AWS

> **Atualidade:** condições comerciais e nomes da interface mudam. As observações temporais desta nota correspondem a agosto de 2026; confirme-as nas páginas oficiais antes de criar recursos.

## Objetivos da aula

Ao final desta aula, você deverá ser capaz de:

- criar uma conta usando o site oficial da AWS;
- reconhecer os elementos principais do AWS Management Console;
- selecionar e registrar uma Região;
- diferenciar o usuário root de identidades administradas pelo IAM;
- habilitar autenticação multifator;
- acompanhar créditos, uso e cobranças;
- criar um orçamento e compreender suas limitações.

## Antes de começar

Uma conta AWS é simultaneamente:

- limite administrativo para recursos;
- limite de identidade e permissões;
- relação de cobrança com a AWS.

Prepare um e-mail controlado por você, senha única armazenada em gerenciador, dispositivo para MFA e endereço que receberá alertas de cobrança.

Nunca registre nas notas senhas, códigos de recuperação, sementes de autenticador ou dados completos de pagamento.

## AWS Free Tier

Não existe uma promessa universal de “um ano de AWS grátis”.

Novos clientes podem encontrar planos, créditos iniciais, testes e ofertas gratuitas com prazos e limites diferentes. Contas antigas, países, Regiões e serviços também podem seguir condições distintas.

Por isso:

1. consulte o [AWS Free Tier](https://aws.amazon.com/free/);
2. leia as [perguntas frequentes](https://aws.amazon.com/free/free-tier-faqs/);
3. confira qual plano aparece para sua conta;
4. verifique serviços elegíveis, saldo e vencimento dos créditos;
5. não confie apenas no selo “Free Tier eligible”.

A AWS exige método de pagamento válido em muitos cadastros. Isso não transforma todo recurso em gratuito nem garante ausência de cobrança.

## Criando a conta

1. Acesse [https://aws.amazon.com/](https://aws.amazon.com/) e inicie a criação.
2. Confirme o domínio antes de inserir dados.
3. Informe um e-mail controlado por você e um nome para a conta.
4. Crie senha forte e exclusiva para o usuário root.
5. Leia as condições do plano apresentado.
6. Forneça os dados solicitados pela AWS.
7. Conclua as verificações de e-mail, telefone ou identidade.
8. Aguarde a confirmação de ativação antes de provisionar recursos.

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

### 1. Habilitar MFA no root

**MFA**, ou autenticação multifator, exige mais de um fator para entrar. A senha é algo que você sabe; uma passkey, chave de segurança ou código temporário vem de algo que possui.

Habilite MFA imediatamente. Quando disponível, prefira passkeys ou chaves de segurança resistentes a phishing e proteja os meios de recuperação.

### 2. Não criar access keys para o root

Access keys permitem acesso programático às APIs. Uma chave do root teria poder sobre toda a conta. Não crie essa credencial para uso cotidiano.

### 3. Criar e testar a identidade cotidiana

Configure a identidade normal, atribua somente as permissões necessárias, habilite MFA e teste o acesso antes de sair do root.

### 4. Configurar acesso à cobrança quando necessário

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

1. Abra **Billing and Cost Management**.
2. Acesse **Budgets**.
3. Crie um orçamento mensal de custo.
4. Defina um valor baixo e compatível com seu limite.
5. Configure alertas, por exemplo em 50%, 80% e 100%.
6. Quando disponível, adicione alerta de custo previsto.
7. Informe um e-mail monitorado.
8. Salve e confirme que o orçamento aparece como ativo.

Um orçamento comum **não é teto de gastos**. Ele monitora dados e envia alertas. Como os dados não são atualizados em tempo real, o uso pode continuar antes da notificação.

## Checklist antes de criar a instância

- [ ] A conta foi ativada.
- [ ] O plano e a validade dos créditos foram conferidos.
- [ ] O root possui MFA.
- [ ] Não existem access keys do root.
- [ ] Uma identidade cotidiana foi configurada e testada.
- [ ] O acesso à cobrança funciona para a identidade correta.
- [ ] Um orçamento e seus alertas foram configurados.
- [ ] A Região foi escolhida e registrada.
- [ ] Nenhum segredo foi incluído nas notas.

A próxima etapa é [provisionar Kali Linux em uma instância EC2](07-installing-kali-linux-on-the-cloud.md).

## Resumo

O cadastro é apenas o início. Uma conta preparada para laboratório possui root protegido, MFA, identidade cotidiana, Região definida e acompanhamento de cobrança. O Free Tier é um conjunto variável de planos, créditos e ofertas limitadas, não autorização para criar qualquer recurso gratuitamente.

## Perguntas de fixação

1. Por que o root da AWS não deve ser usado diariamente?
2. Qual é a diferença entre o root da AWS e o `root` do Linux?
3. O que uma política IAM controla?
4. Por que uma instância pode parecer ausente na Região errada?
5. Por que o Free Tier não garante ausência de cobrança?
6. Por que um orçamento não interrompe necessariamente os gastos?

## Referências oficiais

- [AWS Free Tier](https://aws.amazon.com/free/)
- [Perguntas frequentes do AWS Free Tier](https://aws.amazon.com/free/free-tier-faqs/)
- [Boas práticas para o usuário root](https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html)
- [Boas práticas do IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html)
