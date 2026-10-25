# Visão geral do curso: segurança ofensiva autorizada na nuvem

## O que este curso realmente propõe

Como um computador que está em um datacenter pode participar do seu estudo de segurança? Essa é a pergunta que organiza o curso. Antes de qualquer simulação, será preciso entender o que se está alugando na nuvem, preparar o ambiente e estabelecer um acesso remoto protegido. Só depois essa base será usada para examinar páginas, autenticação, sessões e comportamentos de navegadores e sistemas operacionais.

As cenas de abertura devem ser lidas como exemplos condicionais, não como promessas. Um resultado depende do software e de sua versão, das configurações, dos privilégios disponíveis e dos controles presentes. Quando há participação humana, a ação realizada pela pessoa também faz parte dessas condições. Retirar uma delas pode mudar completamente o desfecho.

Aprender, aqui, significa conseguir explicar a relação entre infraestrutura, ação e evidência. O estudante deve saber reconstruir um laboratório isolado, reconhecer o que de fato aconteceu e comunicar o resultado sem publicar segredos. Repetir uma sequência de cliques sem entender esses vínculos não demonstra domínio e muito menos capacidade de alcançar qualquer sistema.

Para separar desde cedo os diferentes tipos de avaliação e de resultado, a [Aula 2: Hacking ético e testes autorizados](02-introduction-to-hacking-using-the-cloud.md) distinguirá hacking ético, pentest e Red Team. Ela também mostrará por que acesso a uma conta, execução no navegador e controle do computador não são expressões intercambiáveis.

## A autorização vem antes da técnica

Antes de perguntar se uma técnica funciona, pergunte se você tem autorização para aplicá-la naquele ambiente. Essa permissão precisa vir de quem pode responder legalmente pelo sistema e indicar recursos, período e ações permitidos. A presença de um endereço na Internet apenas indica alcance de rede; não expressa consentimento.

O lugar apropriado para praticar é um sistema próprio preparado para esse fim, um ambiente isolado, uma plataforma de treinamento ou CTFs, desafios com regras de participação próprias. Mesmo nesses ambientes, as regras continuam valendo. Use credenciais fictícias e descartáveis, assim como contas, cookies e tokens de teste: um segredo verdadeiro não se torna seguro porque aparece em uma aula.

Há ainda dois limites que devem ser conferidos separadamente: o acordo do exercício e as condições do provedor. Alugar uma máquina não dá direitos sobre a infraestrutura que a hospeda, sobre outros clientes nem sobre serviços externos. Se o procedimento ultrapassar qualquer desses limites, o laboratório precisa ser ajustado antes de continuar.

## O que uma demonstração não prova

Ao olhar uma página parecida com outra, verifique o que a semelhança realmente comprova: apenas a aparência. O domínio pode ser diferente, o conteúdo pode se comportar de outra forma e o certificado identifica o domínio apresentado, não a honestidade de seu operador. HTTPS protege a comunicação até esse destino; não transforma uma imitação em serviço legítimo.

O mesmo cuidado vale para autenticação multifator, ou MFA. Uma sessão obtida em uma condição específica não demonstra uma derrota geral de todos os métodos de autenticação. Para interpretar a evidência, é necessário identificar qual conta, sessão, navegador ou processo foi alcançado e quais condições permitiram isso. A gravação de um resultado não autoriza extrapolá-lo para versões e ambientes diferentes.

Por fim, a origem em nuvem não apaga registros, não remove barreiras técnicas nem amplia a permissão do exercício. A [Aula 2: Hacking ético e testes autorizados](02-introduction-to-hacking-using-the-cloud.md) fornece o vocabulário para descrever essas fronteiras. Ao longo do curso, uma conclusão responsável deve sempre dizer tanto o que a evidência sustenta quanto o que permanece sem comprovação.
