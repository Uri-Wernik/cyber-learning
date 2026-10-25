# Hacking ético, pentest e Red Team: escopo antes da técnica

## O que é hacking ético

Duas pessoas podem usar o mesmo programa e realizar trabalhos de naturezas muito diferentes. Para entender essa diferença, comece pelo sentido de *hacking*: investigar como um sistema funciona e descobrir interações que não eram as esperadas por seus projetistas. A habilidade descreve uma forma de estudar e agir; por si só, não define legitimidade.

Hacking ético é essa investigação conduzida com permissão válida, finalidade legítima e compromisso com os efeitos do teste. Não basta anunciar uma boa intenção. O responsável pela avaliação precisa aceitar limites, evitar impactos desnecessários, proteger as informações encontradas e devolver evidências úteis a quem responde pelo sistema.

O trabalho começa, portanto, antes da ferramenta: é preciso conferir quem autorizou e se essa pessoa tem autoridade sobre os recursos envolvidos. Uma conta de usuário permite usar determinadas funções de uma plataforma, não investigar livremente sua infraestrutura. Da mesma maneira, um programa de *bug bounty*, que recompensa relatos de falhas, concede somente a permissão descrita nas regras publicadas para seus ativos e métodos.

Essa distinção acompanha todo o curso. Uma descoberta tecnicamente interessante não justifica continuar quando o limite combinado foi atingido. Saber interromper e documentar o que foi observado também é parte da competência técnica.

## Pentest e Red Team

Quando uma avaliação recebe um nome, esse nome deve ajudar a entender sua finalidade. Pentest e Red Team pertencem ao trabalho autorizado, mas organizam perguntas e evidências de maneiras diferentes; não são apenas duas etiquetas para qualquer atividade ofensiva.

### Pentest

No pentest, abreviação de *penetration test* ou teste de intrusão, a pergunta central é quais vulnerabilidades podem ser confirmadas nos recursos e no tempo combinados. Uma suspeita de falha precisa ser examinada com cuidado; quando houver demonstração de impacto, ela deve parar no ponto suficiente e previamente permitido.

O resultado costuma ser um relatório que liga método, evidência, risco e limitações. Ele permite ao responsável compreender o problema sem exigir uma exploração maior do que a necessária. Como o teste cobre um recorte de sistemas, condições e tempo, a ausência de um achado não prova que todas as vulnerabilidades foram eliminadas ou sequer procuradas.

### Red Team

Em Red Team, o exercício é organizado em torno de objetivos e de uma sequência plausível de ações inspiradas em adversários. A investigação não se limita a perguntar se uma falha existe: observa também se os controles e a organização conseguem impedir ou perceber o encadeamento previsto no exercício.

Isso pode exigir coordenação e duração maiores e envolver aplicações, identidades e processos. A participação de pessoas por meio de engenharia social só entra quando estiver expressamente autorizada. Essa amplitude não é uma licença implícita: cada recurso e cada método continuam sujeitos ao acordo, e chamar uma atividade de Red Team não converte um pentest comum em uma operação sem restrições.

### Hacking ético como categoria geral

É útil pensar em níveis de classificação. Hacking ético nomeia o compromisso geral com investigação autorizada e responsável; pentest e Red Team descrevem modalidades dentro desse conjunto. Para distinguir uma da outra, examine a pergunta do trabalho, o acordo e as evidências esperadas, não apenas o nome da ferramenta escolhida.

## Alvo, ativo e autorização

Antes de selecionar um destino, reconheça o que está em jogo. Um ativo é um recurso que tem valor para alguém: pode ser informação, uma identidade, uma aplicação, um banco de dados ou uma estação. O termo alvo indica o ativo, ou componente dele, que foi escolhido para ser examinado; não significa que qualquer recurso valioso esteja liberado para teste.

O escopo desenha a fronteira prática da avaliação. Ele identifica domínios, endereços IP, aplicações e contas permitidos e excluídos, além de horários e técnicas. Já a autorização é o ato de permitir o trabalho por parte de quem tem poder para isso. Uma lista de destinos sem essa permissão não basta, assim como uma permissão vaga não substitui limites claros.

As regras de engajamento tornam o acordo executável: registram responsáveis, período, volume permitido, limites de indisponibilidade, contatos de incidente, condições de interrupção e destino das evidências. Se uma simulação envolver pessoas, também é necessária a autorização organizacional específica correspondente. Encontrar uma porta aberta ou uma falha aparente demonstra uma condição técnica, jamais consentimento.

## Conta, navegador e sistema não são a mesma coisa

Uma descrição como “conseguiu invadir” deixa sem resposta a pergunta mais importante: acesso a quê? Para atribuir impacto a uma observação, separe a identidade usada em um serviço, o ambiente do navegador e o sistema operacional do dispositivo. Evidência em uma dessas camadas não comprova automaticamente resultado nas outras.

### Comprometimento de conta

No caso de uma conta, o problema pode estar na senha exposta, na recuperação de acesso ou na sessão já estabelecida. Depois de autenticar o usuário, o serviço pode emitir um token de sessão, um valor secreto que representa aquele estado e frequentemente fica em um cookie. Enquanto aceito pelo serviço, esse valor pode permitir ações da conta sem que a senha seja conhecida.

Por isso, observar uma sessão obtida depois de uma autenticação legítima é diferente de demonstrar uma quebra criptográfica de MFA. O alcance depende do método de autenticação, da validade do token, de eventual vínculo ao dispositivo e de outros controles. A evidência deve dizer quais ações a conta permitiu naquela condição, sem atribuir acesso a toda a máquina.

### Comprometimento do navegador

Uma página aberta não recebe, por padrão, os mesmos poderes de um programa administrativo. O navegador impõe fronteiras: a política de mesma origem separa conteúdos de origens distintas, e uma sandbox restringe a interação direta do conteúdo web com o restante do sistema.

Câmera, microfone e localização normalmente passam por permissões do usuário, inclusive permissões que podem ter sido concedidas antes. Assim, ver uma página carregada não é evidência de acesso a esses recursos. É necessário identificar a ação, a permissão e o resultado observado, em vez de supor que todo código de página controla o dispositivo.

### Comprometimento do sistema

A camada do sistema é alcançada quando há execução de código, utilização de uma conta local ou controle de um processo no dispositivo. Ainda assim, o primeiro resultado herda as permissões da identidade ou do processo envolvido; execução não é sinônimo de administração.

Para afirmar poder administrativo, permanência após reinício ou acesso a outros usuários, seria necessária evidência própria de cada capacidade. Uma janela de controle remoto apenas apresenta funções disponíveis ao processo: a aparência dessa interface não aumenta seus privilégios.

### Uma camada pode levar a outra, mas não há equivalência

As camadas podem se relacionar sem serem equivalentes. O acesso a uma conta pode revelar dados do serviço, e uma sessão web pode permitir ações em aplicações autenticadas. Em situações específicas, uma falha do navegador pode ser combinada com outra para atingir o sistema. Cada passagem exige condições adicionais; documentar a primeira não permite declarar as seguintes como realizadas.

## Papel da nuvem no curso

Neste curso, a nuvem será o lugar onde máquinas, aplicações e serviços auxiliares de laboratório poderão funcionar. Ela fornece infraestrutura remota, não uma autorização nova nem uma garantia de sucesso. A responsabilidade pelo uso e pelos dados continua com quem prepara e executa o exercício.

A [Aula 3: O que é computação em nuvem](03-what-is-the-cloud.md) apresenta os fundamentos dessa infraestrutura, enquanto a [Aula 4: Por que usar nuvem em testes](04-why-learn-cloud-computing-as-a-hacker.md) examina sua utilidade operacional.

Ao avaliar qualquer demonstração, mantenha as perguntas construídas aqui: qual recurso estava permitido, qual camada foi atingida, quais privilégios existiam e o que a evidência mostrou? “Controle total” não dispensa verificar alcance, persistência e restrições. Tampouco executar na nuvem torna a atividade automaticamente ética, privada ou anônima.
