# Fundamentos do terminal Linux

## Do SSH ao terminal

Onde um comando será executado quando sua janela está no computador local, mas existe uma sessão SSH aberta? Na [aula 8](08-communicating-with-cloud-computers-remotely-using-ssh.md), o canal foi apresentado como acesso ao Kali remoto. Dentro dessa sessão, quem interpreta a linha é o sistema remoto; o computador local continua apresentando teclado e tela.

Antes de alterar qualquer coisa, reconheça a identidade e a máquina indicadas no prompt. O exemplo a seguir serve para aprender a leitura, não é saída capturada de uma sessão validada nesta reescrita.

```text
kali@servidor:~$
```

À esquerda, `kali` representa o usuário e `servidor`, o nome do computador. O `~` informa o diretório pessoal. O final `$` costuma aparecer para usuário comum, enquanto `#` é frequente em sessões administrativas de `root`. Como a apresentação pode ser personalizada, esses sinais ajudam a orientação, mas não substituem uma conferência da identidade quando necessário.

Digite apenas a instrução, nunca o prompt que a precede. Copiar `kali@servidor:~$` junto de um exemplo muda a entrada que o interpretador receberá e pode gerar um erro que nada tem a ver com o programa pretendido.

## Terminal, shell e CLI

A janela por onde você lê e digita é o terminal. O programa que dá significado à linha é a shell, como Bash ou Zsh. Já CLI, de *Command-Line Interface*, nomeia a interação por comandos textuais em vez de controles gráficos. O prompt é a indicação de que a shell aguarda outra instrução.

Ao receber Enter, a shell interpreta a linha, distingue o comando de suas opções e argumentos e inicia a operação correspondente. Ela apresenta a saída ou as mensagens de erro de volta no terminal. Separar essas funções evita atribuir à janela o trabalho que pertence ao interpretador ou ao programa executado.

## A árvore de diretórios

Para localizar um arquivo, imagine uma hierarquia que parte de um único início: `/`, o diretório raiz. Abaixo dele estão locais com funções diferentes, como `/etc` para configurações e `/home` para diretórios pessoais de usuários comuns. `/root`, `/tmp`, `/usr` e `/var` também pertencem a essa árvore. Mais adiante, o conteúdo web em `/var/www/html` será localizado seguindo essa mesma estrutura.

O nome *root* exige cuidado porque pode se referir a coisas distintas. A barra `/` marca a raiz da hierarquia; `root`, sem barra, é a identidade administrativa; e `/root` é o diretório pessoal dessa identidade. Estar na raiz dos arquivos não significa ser administrador, e entrar em `/root` não é o mesmo que entrar em `/`.

O diretório pessoal de `kali` normalmente é `/home/kali`. A forma `~` representa o diretório pessoal do usuário atual, não sempre o de Kali: para `root`, ela corresponde a `/root`. Por isso, a interpretação de um caminho com `~` depende de quem está usando a sessão.

## Caminhos absolutos e relativos

Um caminho descreve a localização de um arquivo ou diretório. Para interpretá-lo corretamente, observe se ele começa na raiz ou se depende do lugar em que a shell está naquele momento.

### Caminho absoluto

Quando o caminho começa por `/`, a busca parte da raiz. O exemplo aponta para um arquivo dentro da sequência de diretórios indicada:

```text
/var/www/html/index.html
```

Como o ponto inicial está declarado, mudar o diretório da sessão não altera o local identificado por esse caminho absoluto.

### Caminho relativo

Sem a barra inicial, a localização é relativa ao diretório de trabalho. Considere esta indicação:

```text
www/html
```

Partindo de `/var`, ela chega a `/var/www/html`; partindo de outro diretório, pode chegar a outro lugar ou não encontrar nada. Saber o diretório atual é, portanto, uma pré-condição para interpretar uma referência relativa.

O ponto `.` representa o lugar atual, e `..`, seu diretório pai. Já `~` é a forma usada para o diretório pessoal. Ao longo do caminho, `/` separa nomes; no início, indica a raiz. No Linux, não se troca essa barra pela invertida `\` comum em caminhos Windows.

A grafia também importa: `Downloads` e `downloads` podem ser diretórios diferentes. Se o nome tiver espaços, as aspas mantêm o conjunto como um único argumento. A instrução abaixo só poderá mudar para o diretório se ele existir no local em que for interpretado.

```bash
cd "Meus Arquivos"
```

## Comando, opção e argumento

Antes de usar uma linha como receita, separe operação, ajustes e destino. Este exemplo solicita uma listagem, sem modificar os arquivos:

```bash
ls -la /var/www/html
```

O comando `ls` escolhe a operação de listar. A opção combinada `-la` reúne `-l`, para detalhes, e `-a`, para incluir entradas ocultas. O argumento `/var/www/html` informa sobre qual diretório trabalhar; não é parte do nome do programa.

Um hífen costuma introduzir opções curtas, como `-l`, e dois introduzem opções longas, como `--help`. Essas convenções não significam que todos os programas aceitam as mesmas letras. Consulte a documentação do comando que será executado para compreender o efeito real de cada opção.

## `pwd`: descobrir o diretório atual

Quando houver dúvida sobre onde uma referência relativa começa, consulte o diretório de trabalho. `pwd`, de *print working directory*, lê essa informação na sessão:

```bash
pwd
```

Sem receber opções ou argumentos, ele apresenta o caminho absoluto do local atual. `/home/kali` é um exemplo possível, não uma saída garantida em qualquer sessão. Essa leitura será usada para conferir as mudanças produzidas por `cd`.

## `ls`: listar conteúdo

O comando `ls` permite olhar o conteúdo antes de decidir para onde ir. Sem um caminho explícito, ele lista o diretório em que a sessão se encontra:

```bash
ls
```

Para consultar outro local sem mudar de diretório, passe o caminho como argumento:

```bash
ls /var
```

As opções abaixo mudam o que é apresentado e como a listagem aparece. Os comentários explicam as três variantes, não devem ser confundidos com nomes de arquivos:

```bash
ls -l   # formato detalhado
ls -a   # inclui entradas ocultas
ls -la  # combina as duas opções
```

### Como ler `ls -l`

O formato detalhado oferece pistas sobre tipo e acesso. O início de uma entrada de diretório pode ter esta forma:

```text
drwxr-xr-x
```

O primeiro caractere informa o tipo: `d` indica diretório, `-` indica arquivo comum e `l` indica link simbólico. Depois dele, os nove caracteres se dividem em três conjuntos: permissões do proprietário, do grupo e dos demais usuários, nessa ordem.

Dentro de cada conjunto, `r` representa leitura, `w` representa escrita e `x` representa execução de arquivo ou travessia de diretório. Um `-` nessa posição indica que aquela permissão está ausente. No exemplo `rwxr-xr-x`, o dono possui as três, enquanto grupo e outros possuem leitura e execução ou travessia.

A linha detalhada também pode apresentar quantidade de links, proprietário, grupo, tamanho, horário e nome. O horário normalmente corresponde à última modificação, não necessariamente à criação. Assim, a listagem ajuda a verificar propriedades específicas, mas não deve ser usada para concluir uma história do arquivo que ela não mostra.

## `cd`: mudar o diretório

Depois de localizar um diretório, `cd`, de *change directory*, muda o lugar de trabalho da própria sessão. Ele normalmente é uma função interna da shell, pois a mudança precisa afetar o interpretador em uso. As variantes abaixo mostram destinos absolutos e formas especiais de navegação:

```bash
cd /var  # caminho absoluto
cd ..    # diretório pai
cd       # diretório pessoal
cd ~     # diretório pessoal
cd -     # diretório anterior, quando suportado
```

Em `cd /var`, o argumento é `/var`; `cd` é a operação interna que altera o diretório atual. Já `cd ..` usa o pai, `cd` sem caminho e `cd ~` voltam ao diretório pessoal, e `cd -` pode retornar ao diretório anterior quando suportado.

Uma mudança bem-sucedida normalmente não imprime uma confirmação. Use `pwd` para verificar onde a sessão ficou. A ausência de texto não é uma regra universal de sucesso: o resultado deve ser conferido pela propriedade que o comando pretendia ler ou alterar.

## Consultando documentação

### `man`

Não é preciso decorar todas as opções. Para consultar o manual do programa de listagem, abra a documentação pelo nome:

```bash
man ls
```

O programa `man` procura a página do assunto recebido como argumento, aqui `ls`. Durante a leitura, `q` sai da visualização. A documentação de um comando interno pode estar na própria shell, não em uma página individual.

Para o `cd` no Bash, a consulta correspondente é:

```bash
help cd
```

### `--help`

Muitos programas também oferecem uma ajuda curta diretamente por opção:

```bash
ls --help
```

Nesse caso, `--help` tem dois hífens e solicita a ajuda de `ls`. Não presuma que a mesma opção existe em qualquer comando: quando não houver suporte, recorra a `man`, à ajuda da shell ou à documentação oficial.

## Histórico

Para consultar instruções já usadas na sessão, peça o histórico:

```bash
history
```

A saída apresenta comandos anteriores, e as setas para cima e para baixo permitem recuperar linhas. Recuperar não significa que a instrução ainda seja adequada: usuário, diretório ou destino podem ter mudado. Leia a linha inteira antes de executá-la novamente.

O histórico também explica um risco de privacidade: um segredo digitado como argumento pode permanecer registrado. Quando houver alternativa, não coloque senhas, tokens ou material de chave privada na linha de comando. Compartilhar o histórico sem revisar pode publicar esses dados.

## Preenchimento com Tab

Para reduzir erros de grafia, a shell oferece preenchimento com Tab. Por exemplo, você pode começar um caminho ainda incompleto:

```text
cd /var/ww
```

Se houver uma correspondência única, Tab pode completar o restante. Se houver várias, pressioná-lo novamente pode apresentar as possibilidades. Esse recurso depende dos nomes disponíveis naquele ambiente; não cria um diretório que está faltando.

Completar não executa a instrução. Confira o caminho resultante antes de Enter, especialmente quando nomes parecidos correspondem a recursos diferentes.

## Percorrendo a hierarquia na prática

A sequência abaixo permite relacionar cada mudança à leitura de sua consequência no Kali do laboratório. Ela percorre diretórios e lista conteúdo, sem criar uma saída artificial para representar o seu ambiente:

```bash
pwd
cd /
pwd
ls
cd var
pwd
cd ..
pwd
cd ~
pwd
ls -la
```

Observe a alternância entre ação e conferência. Depois de ir a `/`, `pwd` deve mostrar a raiz. A instrução relativa `cd var` passa então a significar `/var`, e `cd ..` retorna ao pai, que nesse ponto é `/`. Ao final, `cd ~` recupera o diretório pessoal do usuário, e `ls -la` apresenta também entradas iniciadas por ponto. Compare os resultados reais em vez de apenas executar a sequência sem leitura.

## Investigando erros

| Mensagem ou sintoma | Possível causa | Verificação |
|---|---|---|
| `command not found` | Nome incorreto ou programa ausente | Confira grafia e use Tab |
| `No such file or directory` | Caminho incorreto, maiúsculas ou item ausente | Execute `pwd` e `ls` |
| `Permission denied` | Usuário sem permissão | Examine com `ls -ld <CAMINHO>` |
| `Not a directory` | Parte do caminho é arquivo | Liste o caminho por etapas |
| Nenhuma saída | Pode ter funcionado ou não produzir texto | Use verificação específica |

A mensagem ajuda a localizar a falha, mas também existe uma indicação numérica: a shell guarda em `$?` o código de saída do último comando. Para consultá-lo imediatamente:

```bash
echo $?
```

O programa `echo` apresenta o valor expandido de `$?`. Em geral, `0` indica sucesso e outro número indica erro; a interpretação específica pertence ao comando executado. Consulte logo após a operação em dúvida, porque executar outra instrução substitui o valor que você queria examinar.

A investigação deve começar por grafia, caminho, usuário e permissões. Não acrescente `sudo` por reflexo: aumentar privilégios não corrige um nome errado nem explica a causa. Use a tabela como orientação inicial e confirme a condição concreta antes de alterar o ambiente.

O aprendizado fica completo quando você consegue dizer em qual máquina está, qual caminho foi interpretado, qual programa recebeu quais argumentos e qual observação confirma o efeito. A raiz `/`, o usuário `root` e o diretório `/root` continuam distintos; da mesma forma, uma data de modificação ou uma linha sem saída não autoriza conclusões além do que foi verificado.
