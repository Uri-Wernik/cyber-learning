# Visão geral do curso: segurança ofensiva autorizada na nuvem

## O que este curso realmente propõe

Este curso apresenta como recursos de computação em nuvem podem apoiar testes de segurança autorizados. O conteúdo começa pelos fundamentos: o que é nuvem, como criar um ambiente remoto de laboratório e como acessá-lo com segurança. Depois, avança para simulações controladas envolvendo páginas web, autenticação, sessões, navegadores e sistemas operacionais.

As demonstrações iniciais mostram resultados possíveis em cenários específicos. Cada técnica depende de fatores como versão do software, configuração, permissões, interação do participante e controles de segurança existentes.

O objetivo realista não é ensinar alguém a “invadir qualquer sistema”. O curso constrói os fundamentos necessários para compreender a infraestrutura usada em avaliações, montar laboratórios isolados e reproduzíveis, interpretar o alcance de cada resultado e documentar evidências sem expor credenciais ou dados reais.

A diferença entre hacking ético, pentest e Red Team, assim como entre comprometer uma conta, um navegador e um sistema operacional, será explicada na [Aula 2: Hacking ético e testes autorizados](02-introduction-to-hacking-using-the-cloud.md).

## A autorização vem antes da técnica

Os exercícios pertencem somente a sistemas próprios preparados para o laboratório, CTFs e plataformas de treinamento, ambientes isolados ou ativos cobertos por autorização explícita do responsável legal.

Um serviço estar acessível pela Internet não significa que ele possa ser testado. A autorização precisa definir quais ativos fazem parte do exercício, durante qual período e quais ações são permitidas. Contas, cookies, tokens e outros dados utilizados no laboratório devem ser fictícios e descartáveis.

Também é necessário respeitar os termos de uso do provedor de nuvem. Ter acesso a uma conta ou máquina virtual não autoriza testes contra a infraestrutura do provedor, seus demais clientes ou serviços de terceiros.

## O que uma demonstração não prova

Uma página pode imitar visualmente um serviço legítimo, mas domínio, conteúdo, certificado e comportamento ainda podem revelar diferenças. HTTPS protege a comunicação com o domínio exibido; não comprova que o responsável pelo domínio seja confiável nem que a página tenha finalidade legítima.

Da mesma forma, capturar uma sessão autenticada não significa quebrar universalmente qualquer forma de MFA. Acesso a uma conta on-line, execução dentro de um navegador e controle do sistema operacional são resultados diferentes. Cada demonstração do curso representa uma combinação específica de condições, não uma capacidade universal.

Usar a nuvem também não oferece anonimato, não elimina controles técnicos e não concede permissão para alcançar terceiros. Esse vocabulário e essas diferenças são desenvolvidos na [Aula 2: Hacking ético e testes autorizados](02-introduction-to-hacking-using-the-cloud.md).
