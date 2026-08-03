# Hacking ético, pentest e Red Team: escopo antes da técnica

## O que é hacking ético

No sentido técnico, *hacking* envolve estudar sistemas, compreender seu funcionamento e encontrar maneiras não previstas de interagir com eles. A mesma habilidade pode ser usada de forma legítima ou abusiva.

O que torna uma avaliação ética não é a ferramenta utilizada nem a boa intenção declarada. São a autorização válida, o objetivo legítimo, os limites claros e a responsabilidade sobre os efeitos produzidos que separam uma avaliação de uma atividade abusiva.

**Hacking ético** é o uso autorizado de conhecimentos de segurança para identificar e demonstrar riscos. O profissional deve limitar-se ao escopo, reduzir impactos desnecessários, proteger os dados encontrados e entregar evidências ao responsável pelo sistema.

Quem concede a permissão precisa ter autoridade sobre os ativos avaliados. Possuir uma conta em uma plataforma não autoriza testar a própria plataforma. Programas de *bug bounty* também autorizam somente os ativos e métodos descritos em suas regras.

## Pentest e Red Team

Embora os termos sejam relacionados, eles não são sinônimos.

### Pentest

*Penetration test*, ou teste de intrusão, é uma avaliação delimitada por escopo e período. Seu objetivo é encontrar vulnerabilidades, confirmar de maneira controlada se elas podem ser exploradas e demonstrar o impacto ao responsável.

Um pentest normalmente termina com um relatório contendo metodologia, evidências, riscos e limitações. Ele não garante a descoberta de todas as vulnerabilidades. A exploração deve avançar somente até o ponto necessário e acordado para comprovar o risco.

### Red Team

Red Team é uma avaliação orientada por objetivos e inspirada no comportamento de adversários reais. Em vez de examinar vulnerabilidades isoladamente, procura verificar se uma organização consegue impedir ou perceber uma sequência plausível de ações contra seus ativos.

Uma operação de Red Team costuma ter escopo, duração e coordenação mais amplos do que um pentest. Pode envolver tecnologia, identidades, processos e, quando explicitamente autorizado, simulações de engenharia social. Nem todo pentest é uma operação de Red Team, e usar esse nome não concede permissão adicional.

### Hacking ético como categoria geral

Hacking ético é a categoria mais ampla. Pentest e Red Team são modalidades de trabalho autorizado, cada uma com objetivos e regras próprias.

## Alvo, ativo e autorização

Um **ativo** é qualquer recurso que possua valor, como uma aplicação, banco de dados, identidade, estação ou informação. Quando esse ativo ou um de seus componentes é selecionado para a avaliação, ele se torna um **alvo** do teste.

O **escopo** define o limite: quais domínios, IPs, aplicações, contas, horários e técnicas estão incluídos ou excluídos. A **autorização** é a permissão explícita de quem possui autoridade sobre esses ativos. As **regras de engajamento** transformam essa permissão em instruções operacionais, registrando quem autoriza e executa, o período, os limites de volume e indisponibilidade, os contatos para incidentes, os critérios de interrupção e o tratamento das evidências.

Pessoas envolvidas em simulações de engenharia social exigem autorização organizacional específica. Uma porta aberta, falha aparente ou serviço público não representa consentimento.

## Conta, navegador e sistema não são a mesma coisa

A palavra “invadir” pode esconder resultados muito diferentes. Para avaliar corretamente o impacto, é necessário identificar qual camada foi realmente comprometida.

### Comprometimento de conta

Uma conta pode ser comprometida por exposição de senha, abuso da recuperação ou obtenção de um token de sessão. Um **token de sessão** é um segredo emitido pelo serviço depois da autenticação e frequentemente armazenado em um cookie. Enquanto estiver válido, pode permitir ações como aquela conta sem revelar a senha.

Capturar uma sessão após autenticação legítima não significa quebrar criptograficamente o MFA. O resultado depende do tipo de autenticação, vínculo da sessão ao dispositivo, validade do token e outros controles.

### Comprometimento do navegador

Uma página comum executa código em um contexto limitado pelo navegador. A **política de mesma origem** separa conteúdos de origens diferentes, e a **sandbox** restringe o acesso direto ao sistema.

Recursos como câmera, microfone e localização normalmente dependem de permissão do usuário ou de autorização já concedida. Carregar uma página não garante acesso automático a esses recursos.

### Comprometimento do sistema

Há comprometimento do sistema quando alguém obtém capacidade de executar código, usar uma conta local ou controlar um processo no dispositivo. O alcance inicial continua limitado pelos privilégios desse processo ou usuário.

Controle administrativo, persistência e acesso a outros usuários são etapas distintas. Uma interface remota não cria privilégios que o processo não possui.

### Uma camada pode levar a outra, mas não há equivalência

Uma conta comprometida pode expor dados daquele serviço. Uma sessão web pode fornecer acesso a aplicações abertas. Uma vulnerabilidade no navegador pode, em situações específicas, ser combinada com outra falha para alcançar o sistema. Cada transição exige condições adicionais e deve ser comprovada separadamente.

## Papel da nuvem no curso

A nuvem fornecerá infraestrutura remota para os laboratórios. Ela poderá hospedar máquinas, aplicações e serviços de apoio, mas não altera os requisitos de autorização nem garante que uma técnica funcione.

Os fundamentos técnicos estão na [Aula 3: O que é computação em nuvem](03-what-is-the-cloud.md). A razão para utilizá-la em testes autorizados será aprofundada na [Aula 4: Por que usar nuvem em testes](04-why-learn-cloud-computing-as-a-hacker.md).

A nuvem não torna uma atividade ética, privada ou anônima. Também não existe técnica universal capaz de comprometer qualquer conta, navegador ou sistema. Quando alguém afirma ter “controle total”, ainda é necessário verificar privilégios, alcance, persistência e restrições. Descrever o resultado com precisão faz parte do trabalho técnico.

## Perguntas de fixação

1. Quais quatro elementos transformam uma habilidade de hacking em uma atividade ética e autorizada?
2. Como o objetivo e o escopo de um pentest diferem dos de uma operação Red Team?
3. Qual é a diferença entre ativo, alvo, escopo, autorização e regras de engajamento?
4. Quais limites técnicos e operacionais devem aparecer nas regras de engajamento antes do teste?
5. Como um token de sessão permite ações em uma aplicação sem revelar necessariamente a senha?
6. Quais controles podem limitar a reutilização de um token de sessão obtido após MFA?
7. Como a política de mesma origem e a sandbox limitam o código executado por uma página no navegador?
8. Por que acesso à câmera, ao microfone ou à localização não surge automaticamente ao carregar uma página?
9. Se um processo obtiver execução no sistema, o que determina suas permissões iniciais e por que isso não garante privilégio administrativo?
10. Que condições adicionais precisam ser comprovadas para passar de conta comprometida para navegador e depois para sistema operacional?
