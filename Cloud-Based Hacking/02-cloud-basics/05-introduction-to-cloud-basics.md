# Fundamentos da nuvem: roteiro da seção e laboratório seguro

## Dos conceitos para um laboratório real

A explicação conceitual sobre computação em nuvem está na [aula 3: O que é a nuvem?](../01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud.md). Nesta seção, o foco passa a ser operacional: preparar uma conta, criar uma máquina virtual, acessá-la remotamente e usar o terminal.

Todo procedimento deve ser realizado somente em uma conta própria e em laboratórios isolados ou expressamente autorizados.

## Como a seção avança

A preparação começa na [aula 6](06-signing-up-with-aws.md), com conta, Console, Região, MFA, cobrança e orçamento. Na [aula 7](07-installing-kali-linux-on-the-cloud.md), essas decisões permitem criar uma instância Kali no EC2 e compreender AMI, capacidade, armazenamento e key pair. A [aula 8](08-communicating-with-cloud-computers-remotely-using-ssh.md) estabelece o acesso remoto por SSH; então a [aula 9](09-linux-terminal-basics.md) ensina a localizar-se e trabalhar no terminal Linux.

Com essa base operacional pronta, as aulas seguintes usam a instância e o terminal para estudar engenharia social, hospedagem web e transferência de arquivos em um laboratório autorizado.

## Ciclo seguro do laboratório

Um laboratório em nuvem deve ser tratado como recurso temporário. Antes de criá-lo, define-se o objetivo, a Região, a duração, a capacidade e o valor máximo aceitável. A conta é protegida com MFA e alertas de custo, e somente os recursos e as regras de rede necessários são criados.

Antes do uso, imagem, estado, exposição de rede e chave selecionada são conferidos. O exercício permanece dentro do escopo autorizado e não publica segredos. Ao final, a instância é parada ou terminada conforme a necessidade, e volumes, snapshots, endereços, regras e custos remanescentes são revisados.

## Custos não dependem apenas da instância

A cobrança da AWS é composta por recursos separados. Uma instância em execução pode gerar custo mesmo ociosa. Ao pará-la, a cobrança computacional normalmente é interrompida, mas armazenamento, snapshots, endereços e outros recursos podem continuar gerando despesas.

Créditos promocionais, testes e ofertas gratuitas possuem condições, limites e datas próprias. Eles não equivalem a uma promessa geral de uso gratuito.

Alertas de orçamento também não são um bloqueio instantâneo: dados de cobrança podem demorar a atualizar e, por padrão, o alerta não desliga recursos. A configuração será tratada na [aula 6](06-signing-up-with-aws.md).

## Quando o laboratório realmente termina

Encerrar a sessão SSH com `exit` fecha apenas o acesso remoto; fechar o terminal também não desliga a instância. Se o laboratório será retomado em breve, a instância pode ser parada. Quando o trabalho acabou, ela deve ser terminada e os volumes EBS adicionais, snapshots, endereços reservados, regras de entrada e Security Groups temporários precisam ser conferidos.

As chaves privadas continuam fora de repositórios, diretórios web e pastas compartilhadas. Depois que os dados de cobrança forem atualizados, faturamento, créditos e orçamento são consultados. O fluxo termina quando o acesso foi fechado, os recursos desnecessários desapareceram e a cobrança foi verificada.
