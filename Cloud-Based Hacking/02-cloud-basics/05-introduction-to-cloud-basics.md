# Fundamentos da nuvem: roteiro da seção e laboratório seguro

## Dos conceitos para um laboratório real

O que precisa estar pronto antes de digitar um comando em um computador alugado? A [aula 3: O que é a nuvem?](../01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud.md) explicou o conceito; agora será preciso transformá-lo em decisões concretas sobre conta, máquina, acesso e duração. O objetivo desta seção é permitir que você reconheça esses componentes e saiba o que cada ação modifica.

Use apenas uma conta própria e um ambiente isolado ou explicitamente autorizado. A nuvem continua apoiada em computadores reais administrados por um provedor: não é um espaço sem regras, e o acesso à sua máquina não inclui permissão sobre recursos alheios.

## Como a seção avança

A [aula 6](06-signing-up-with-aws.md) começa pela identidade que administra os recursos. Nela, o Console será apresentado como painel web, a Região como escolha geográfica dos recursos e MFA como proteção de entrada. Cobrança e orçamento entram antes da primeira máquina para que o exercício já tenha um limite financeiro conhecido.

Depois, a [aula 7](07-installing-kali-linux-on-the-cloud.md) reúne imagem AMI, capacidade, armazenamento e key pair na criação de uma instância Kali no EC2. A [aula 8](08-communicating-with-cloud-computers-remotely-using-ssh.md) trata do canal SSH usado para chegar ao sistema. Com a conexão estabelecida, a [aula 9](09-linux-terminal-basics.md) mostra como se orientar e interpretar instruções no terminal Linux.

Essa ordem evita confundir o painel administrativo com o sistema remoto. Mais adiante, a mesma instância e seu terminal apoiarão o estudo de engenharia social, hospedagem web e transferência de arquivos, sempre dentro do laboratório permitido.

## Ciclo seguro do laboratório

Pense no laboratório como algo com início e fim, não como uma máquina que ficará esquecida. Antes de criar recursos, escolha finalidade, Região, tempo de uso, capacidade e gasto aceitável. Proteja a conta com MFA e prepare os alertas; só então crie o conjunto mínimo de recursos e regras necessário ao exercício.

Antes de usar a máquina, confira a imagem escolhida, o estado da instância, sua exposição de rede e a chave de acesso. Durante o trabalho, mantenha o escopo e os segredos protegidos. No encerramento, a decisão de parar ou terminar deve ser acompanhada de uma revisão do que permanece: volumes, snapshots, endereços, regras e cobrança possuem ciclos próprios.

## Custos não dependem apenas da instância

Não há um único contador para “a máquina inteira”. A capacidade computacional pode ser cobrada enquanto a instância executa, mesmo sem atividade do estudante. Parar costuma interromper essa parcela, mas o armazenamento que conserva seus dados pode continuar existindo e custando. Snapshots e endereços também precisam ser examinados separadamente.

Uma oferta gratuita ou um crédito apenas altera as condições financeiras daquele uso elegível. Prazo, saldo, serviço e limites precisam ser consultados; não se deve transformar uma promoção em promessa de gratuidade para qualquer configuração.

O orçamento serve para acompanhar esse consumo e gerar avisos, não para garantir um desligamento automático. Como as informações de cobrança podem chegar com atraso, o gasto pode continuar antes do alerta. A [aula 6](06-signing-up-with-aws.md) mostrará como configurar e conferir esse acompanhamento.

## Quando o laboratório realmente termina

Ao usar `exit`, você fecha a shell remota e a sessão SSH, mas a instância não recebe uma ordem de desligamento. Fechar a janela do terminal também não resolve isso. Se houver retomada próxima, pode fazer sentido parar a instância; se a finalidade acabou, termine-a e confira os recursos associados.

Essa conferência inclui volumes EBS adicionais, snapshots, endereços reservados, regras de entrada e Security Groups temporários. A chave privada deve permanecer protegida, fora de repositórios, pastas compartilhadas e diretórios web, enquanto houver uso legítimo para ela.

Por último, consulte faturamento, créditos e orçamento depois da atualização dos dados. O encerramento fica demonstrado quando o acesso temporário foi removido, nenhum recurso desnecessário permanece e os custos remanescentes foram entendidos. Apenas desconectar não comprova nenhuma dessas três condições.
