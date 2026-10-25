# Por que usar nuvem em testes de segurança autorizados?

Que vantagem há em usar uma máquina distante se o testador já possui um computador? A resposta depende do papel que cada programa terá no laboratório. Para acompanhar esse raciocínio, use a [Aula 3: O que é computação em nuvem](03-what-is-the-cloud.md) como referência de rede e hospedagem e a [Aula 2: Hacking ético, pentest e Red Team](02-introduction-to-hacking-using-the-cloud.md) como referência dos limites do teste.

## Arquitetura cliente-servidor

Cliente é o programa que pede algo ou inicia uma comunicação; servidor é o programa que espera essa comunicação e atende conforme suas regras. Esses nomes descrevem papéis de software, não classes fixas de computadores. Um mesmo dispositivo pode exercer ambos em relações diferentes.

Para receber uma solicitação, o servidor precisa aguardar em um endereço e em uma porta lógica. O protocolo estabelece como interpretar os dados e construir a resposta. Na Web, por exemplo, o navegador solicita recursos e o software servidor web responde; nenhum dos dois papéis depende de a máquina ser grande ou pequena.

Isso ajuda a distinguir aplicações locais, remotas e híbridas. Nas locais, a maior parte do trabalho ocorre no dispositivo do usuário; nas remotas, o funcionamento depende principalmente de um serviço externo; nas híbridas, processamento e armazenamento são repartidos entre os lados. O que interessa é onde cada tarefa acontece, não apenas o lugar onde a janela aparece.

Também não basta observar tráfego de Internet para concluir que existe nuvem. A comunicação pode terminar em infraestrutura convencional, em outro dispositivo ou em um serviço de terceiro. Identificar o destino e sua função é uma verificação mais precisa do que classificar toda aplicação conectada como aplicação em nuvem.

## Infraestrutura remota de testes

No exercício autorizado, o operador entra na infraestrutura remota usando uma identidade autenticada. A partir dela, os serviços previstos se comunicam exclusivamente com os ativos permitidos e devolvem resultados ao ambiente controlado. A nuvem separa essa infraestrutura da estação pessoal, mas não separa o operador de sua responsabilidade.

A principal conveniência é poder criar uma máquina temporária sem adquirir hardware. Imagens e configurações documentadas ajudam a repetir o ambiente; estações autorizadas podem administrá-lo à distância; e a capacidade pode ser aumentada quando houver necessidade. Se o exercício exigir alcance público, uma hospedagem remota também pode fornecer conectividade estável. Ao concluir o trabalho, esses recursos podem ser removidos.

Para que isso seja vantagem e não exposição adicional, é preciso restringir interfaces administrativas, proteger a autenticação e isolar os dados do exercício. Um serviço publicado recebe potencialmente tráfego que não pertence ao laboratório. Não se deve interpretar toda conexão recebida como participação autorizada.

Antes do provisionamento, confira também a política do provedor sobre varreduras, carga, distribuição de código nocivo e outras atividades. São verificações independentes: o proprietário do alvo pode autorizar o teste, enquanto o contrato de hospedagem ainda restringe a maneira de executá-lo.

## Callback e C2: visão conceitual

Imagine primeiro uma ligação direta: o testador procura um serviço que já existe no alvo autorizado. Para funcionar, essa entrada precisa ter um caminho válido. NAT, que traduz endereços, filtros de firewall ou a inexistência de rota pública podem impedir a chegada, mesmo quando o ativo consegue navegar para fora.

No modelo chamado callback, a iniciativa muda de lado. Um agente que já está em execução no sistema do laboratório abre uma conexão de saída para um serviço de controle autorizado. Regras de saída podem diferir das de entrada, mas isso não significa atravessar qualquer barreira: o agente ainda precisa de permissão para executar e de resolução, rota e comunicação permitida até o destino.

C2 significa *Command and Control*, ou comando e controle. O nome descreve a infraestrutura que coordena agentes e transporta tarefas e resultados. No modelo autorizado, o operador autentica-se no serviço, uma conexão do agente é associada ao exercício e apenas as tarefas previstas no acordo são encaminhadas. A resposta volta pelo canal estabelecido.

O canal não altera a identidade com que o agente executa. Se o processo tem poderes limitados, suas tarefas continuam limitadas pelo usuário, pelo sistema, pela rede e pelos demais controles. Uma conexão ativa é evidência de comunicação; não é, sozinha, evidência de privilégios administrativos ou de controle completo.

Vale separar duas siglas visualmente próximas: Amazon EC2 nomeia um serviço de capacidade computacional da AWS; C2 nomeia a função de coordenação descrita aqui. Uma instância EC2 não se torna C2 por existir.

Nesta aula, o assunto termina no mecanismo conceitual. Implantar controle de agentes exigiria um ambiente isolado, permissão específica e proteção contra conexões externas acidentais. Não há aqui uma execução validada desse fluxo nem instruções adicionais para ampliá-lo.

## Escalabilidade aplicada aos testes

Outra utilidade é ajustar a capacidade ao período do exercício. Mais memória, processamento ou instâncias podem ajudar quando a tarefa admite divisão. Essa possibilidade é chamada escalabilidade; ela não garante que dobrar máquinas dobre o resultado.

O limite pode estar na rede, no disco, no algoritmo, nas cotas do provedor ou na capacidade do próprio alvo. Aumentar atividades simultâneas nessas condições pode elevar apenas a cobrança e o impacto. Por isso, a decisão precisa considerar o gargalo real e não apenas a disponibilidade de recursos para alugar.

O acordo deve definir destinos exatos, taxa, concorrência, duração e horários. Orçamento e cotas delimitam recursos, enquanto monitoramento e critérios de interrupção delimitam efeitos sobre o alvo. Sem essas verificações, a expansão pode causar indisponibilidade ou levar comunicação para fora do escopo, contrariando a finalidade do teste.

## Nuvem não significa anonimato

Se o tráfego sai de uma máquina na nuvem, o destino pode observar o IP dessa infraestrutura em vez do IP da estação pessoal. Isso muda uma observação de rede, não apaga a ligação do recurso com a conta que o criou.

O provedor pode manter informações de identidade, autenticação, cobrança e verificação da conta. Também pode registrar chamadas administrativas, criação e exclusão de recursos, mudanças de regras, endereços atribuídos e seus horários, além de metadados de conexão e eventos de abuso. Desligar uma instância não significa apagar esses registros.

Do outro lado, o alvo pode guardar origem, horário, protocolo, requisições e resultados. DNS e registro de domínios acrescentam outras informações. VPNs e proxies alteram trechos do caminho, mas não justificam uma promessa geral de anonimato nem garantem eliminação das evidências já produzidas.

Em vez de tratar registros como algo a desaparecer, o exercício legítimo deve aproveitar a rastreabilidade: a possibilidade de relacionar ação, recurso e horário. Essa relação ajuda a demonstrar o cumprimento do acordo e a distinguir o tráfego do teste de eventos que não pertencem a ele.

## Preparando e encerrando o laboratório

A preparação começa com autorização escrita, escopo confirmado e leitura das políticas vigentes. Uma conta ou projeto separado ajuda a não misturar o laboratório com outros trabalhos. Identidades, chaves e regras devem conceder somente o necessário; dados e credenciais devem ser fictícios. Registre recursos e horários e defina antecipadamente duração, volume, cotas e orçamento.

Ao terminar, interrompa processos e sessões e retire serviços, regras e credenciais temporárias. Elimine dados conforme o acordo e confira a remoção de instâncias, discos, endereços e demais recursos cobrados. Uma máquina ausente da lista não comprova, sozinha, que toda a infraestrutura associada desapareceu.

A verificação final tem duas perguntas diferentes: restou algum serviço público sem finalidade e restou algum recurso gerando custo? Preserve apenas evidências permitidas. Assim, o benefício da nuvem fica claro sem exageros: ela facilita montar, administrar e desfazer infraestrutura, mas não substitui autorização, controles nem comprovação do resultado.
