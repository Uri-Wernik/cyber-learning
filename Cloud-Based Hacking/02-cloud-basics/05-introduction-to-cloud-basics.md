# Fundamentos da nuvem: roteiro da seção e laboratório seguro

## Objetivos da aula

Ao final desta aula, você deverá ser capaz de:

- identificar o papel de cada aula desta seção;
- seguir um ciclo seguro para criar, usar e remover recursos;
- entender por que gratuidade, créditos e orçamento não eliminam o risco de cobrança;
- verificar se o laboratório foi realmente encerrado.

## Ponto de partida

A explicação conceitual sobre computação em nuvem está na [aula 3: O que é a nuvem?](../01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud.md). Nesta seção, o foco passa a ser operacional: preparar uma conta, criar uma máquina virtual, acessá-la remotamente e usar o terminal.

Todo procedimento deve ser realizado somente em uma conta própria e em laboratórios isolados ou expressamente autorizados.

## Mapa da seção

1. [Aula 6: Criando uma conta na AWS](06-signing-up-with-aws.md)  
   Conta, Console, Região, MFA, cobrança, orçamento e condições variáveis do Free Tier.

2. [Aula 7: Provisionando Kali Linux no EC2](07-installing-kali-linux-on-the-cloud.md)  
   Distribuição Linux, máquina virtual, AMI, instância, capacidade, armazenamento, publicador e key pair.

3. [Aula 8: Acesso remoto com SSH](08-communicating-with-cloud-computers-remotely-using-ssh.md)  
   Cliente e servidor SSH, TCP/22, identidade do servidor, autenticação por chave e diagnóstico.

4. [Aula 9: Fundamentos do terminal Linux](09-linux-terminal-basics.md)  
   Diretórios, caminhos, comandos, opções, argumentos e documentação local.

## Ciclo seguro do laboratório

Um laboratório em nuvem deve ser tratado como recurso temporário:

1. **Definir o objetivo:** saber o que será criado e qual resultado será verificado.
2. **Definir limites:** escolher Região, duração, tipo de instância e valor máximo aceitável.
3. **Preparar a conta:** habilitar MFA e configurar alertas de custo.
4. **Criar o mínimo necessário:** usar somente recursos e regras de rede exigidos.
5. **Verificar antes do uso:** confirmar imagem, estado, exposição de rede e chave selecionada.
6. **Executar o exercício autorizado:** não publicar segredos nem atingir terceiros.
7. **Encerrar o recurso:** parar temporariamente ou terminar definitivamente.
8. **Revisar resíduos e custos:** procurar volumes, snapshots, endereços e regras remanescentes.

## Custos não dependem apenas da instância

A cobrança da AWS é composta por recursos separados. Uma instância em execução pode gerar custo mesmo ociosa. Ao pará-la, a cobrança computacional normalmente é interrompida, mas armazenamento, snapshots, endereços e outros recursos podem continuar gerando despesas.

Créditos promocionais, testes e ofertas gratuitas possuem condições, limites e datas próprias. Eles não equivalem a uma promessa geral de uso gratuito.

Alertas de orçamento também não são um bloqueio instantâneo: dados de cobrança podem demorar a atualizar e, por padrão, o alerta não desliga recursos. A configuração será tratada na [aula 6](06-signing-up-with-aws.md).

## Checklist de limpeza

Ao terminar cada sessão:

- encerre a sessão SSH com `exit`;
- lembre-se de que fechar o terminal não desliga a instância;
- pare a instância se ela ainda será usada em breve;
- termine a instância quando o laboratório tiver acabado;
- confira volumes EBS adicionais;
- exclua snapshots desnecessários;
- libere endereços reservados sem uso;
- remova regras de entrada e Security Groups criados apenas para o exercício;
- mantenha chaves privadas fora de repositórios, diretórios web e pastas compartilhadas;
- consulte faturamento, créditos e orçamento após a atualização dos dados.

## Resumo

Esta seção transforma fundamentos de nuvem em um laboratório administrável. O fluxo não termina quando o exercício funciona: termina quando o acesso foi fechado, recursos desnecessários foram removidos e a cobrança foi verificada.

## Perguntas de fixação

1. Por que fechar o terminal não encerra uma instância EC2?
2. Que recursos podem continuar gerando custo depois que a instância é parada?
3. Qual é a diferença entre alerta de orçamento e limite rígido de gastos?
4. Quando é melhor parar uma instância e quando é melhor terminá-la?
