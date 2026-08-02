# Visão geral do curso: segurança ofensiva autorizada na nuvem

## Objetivos da aula

Ao final desta apresentação, você deverá ser capaz de:

- compreender a proposta geral do curso;
- reconhecer os limites éticos e legais dos exercícios;
- identificar os principais grupos de assuntos que serão estudados;
- distinguir demonstrações educacionais de garantias de resultado.

## Proposta do curso

Este curso apresenta como recursos de computação em nuvem podem apoiar testes de segurança autorizados. O conteúdo começa pelos fundamentos: o que é nuvem, como criar um ambiente remoto de laboratório e como acessá-lo com segurança. Depois, avança para simulações controladas envolvendo páginas web, autenticação, sessões, navegadores e sistemas operacionais.

As demonstrações iniciais mostram resultados possíveis em cenários específicos. Cada técnica depende de fatores como versão do software, configuração, permissões, interação do participante e controles de segurança existentes.

O objetivo realista não é ensinar alguém a “invadir qualquer sistema”, mas desenvolver fundamentos para:

- compreender a infraestrutura usada em avaliações de segurança;
- montar laboratórios isolados e reproduzíveis;
- executar exercícios guiados dentro de um escopo autorizado;
- interpretar o alcance e as limitações de cada resultado;
- documentar evidências sem expor credenciais ou dados reais.

A diferença entre hacking ético, pentest e Red Team, assim como entre comprometer uma conta, um navegador e um sistema operacional, será explicada na [Aula 2: Hacking ético e testes autorizados](02-introduction-to-hacking-using-the-cloud.md).

## Autorização vem antes da técnica

Todos os exercícios devem ocorrer exclusivamente em:

- sistemas próprios preparados para o laboratório;
- CTFs e plataformas destinadas a treinamento;
- ambientes isolados;
- ativos cobertos por autorização explícita do responsável legal.

Um serviço estar acessível pela Internet não significa que ele possa ser testado. A autorização precisa definir quais ativos fazem parte do exercício, durante qual período e quais ações são permitidas. Contas, cookies, tokens e outros dados utilizados no laboratório devem ser fictícios e descartáveis.

Também é necessário respeitar os termos de uso do provedor de nuvem. Ter acesso a uma conta ou máquina virtual não autoriza testes contra a infraestrutura do provedor, seus demais clientes ou serviços de terceiros.

## Correções importantes

- Uma página pode imitar visualmente um serviço legítimo, mas domínio, conteúdo, certificado e comportamento ainda podem revelar diferenças.
- HTTPS protege a comunicação com o domínio exibido. Não garante que o responsável pelo domínio seja confiável nem que a página tenha finalidade legítima.
- A autenticação multifator reduz significativamente o risco. Capturar uma sessão autenticada não equivale a quebrar universalmente qualquer MFA.
- Acesso a uma conta on-line, execução dentro de um navegador e controle do sistema operacional são resultados diferentes.
- Usar a nuvem não oferece anonimato, não elimina controles técnicos e não concede permissão para alcançar terceiros.

## Resumo

O curso utilizará infraestrutura em nuvem para estudar segurança ofensiva em laboratórios autorizados. O aprendizado será progressivo: primeiro os fundamentos, depois a infraestrutura e, por fim, exercícios controlados. As demonstrações representam cenários específicos, não capacidades universais.

## Perguntas de fixação

1. Quais ambientes podem ser usados legalmente para realizar os exercícios?
2. Por que HTTPS não comprova que uma página é legítima?
3. Por que uma demonstração do curso não garante o mesmo resultado em qualquer ambiente?
4. Por que comprometer uma conta não significa necessariamente controlar o computador do usuário?
