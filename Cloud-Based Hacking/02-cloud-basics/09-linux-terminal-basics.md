# Fundamentos do terminal Linux

## Do SSH ao terminal

Na [aula 8](08-communicating-with-cloud-computers-remotely-using-ssh.md), usamos SSH para abrir uma sessão na máquina Kali. Depois da conexão, os comandos digitados são executados na máquina remota, não no computador local.

Antes de executar qualquer comando, confirme máquina e usuário no prompt.

```text
kali@servidor:~$
```

Nesse prompt, `kali` identifica o usuário atual, `servidor` representa o nome da máquina e `~` indica o diretório pessoal. O símbolo `$` costuma acompanhar usuários comuns, enquanto `#` aparece frequentemente em uma shell administrativa de `root`.

O prompt não faz parte do comando e não deve ser digitado.

## Terminal, shell e CLI

O **terminal** é o aplicativo que apresenta entrada e saída textual. Dentro dele, o **shell**, como Bash ou Zsh, interpreta os comandos. **CLI** significa *Command-Line Interface* e descreve essa forma de interação por texto. O **prompt** indica que o shell está pronto para receber uma nova instrução.

Ao pressionar Enter, o shell interpreta a linha, localiza o comando, processa opções e argumentos, executa a operação e mostra saída ou erro.

## A árvore de diretórios

O sistema de arquivos Linux forma uma única hierarquia iniciada em `/`, o diretório raiz. Dentro dela ficam diretórios como `/etc`, usado por configurações, `/home`, que reúne diretórios pessoais de usuários comuns, `/root`, reservado ao usuário administrativo, `/tmp`, `/usr` e `/var`. O caminho `/var/www/html`, usado posteriormente pelo Apache, também pertence a essa mesma hierarquia.

A palavra *root* aparece em sentidos diferentes:

- `/`: diretório raiz do sistema de arquivos;
- `root`: usuário administrativo;
- `/root`: diretório pessoal do usuário `root`.

Portanto, `/` e `/root` não são o mesmo diretório.

Diretórios pessoais de usuários comuns normalmente ficam em `/home`. Para `kali`, costuma ser `/home/kali`.

O símbolo `~` representa o diretório pessoal do usuário atual:

- para `kali`, geralmente `/home/kali`;
- para `root`, `/root`.

## Caminhos absolutos e relativos

Um caminho informa onde está um item.

### Caminho absoluto

Começa em `/` e descreve a localização desde a raiz:

```text
/var/www/html/index.html
```

Identifica o mesmo local independentemente do diretório atual.

### Caminho relativo

É interpretado a partir do diretório atual:

```text
www/html
```

Se o diretório atual for `/var`, aponta para `/var/www/html`.

O ponto `.` representa o diretório atual, `..` representa o diretório pai e `~` representa o diretório pessoal do usuário atual. A barra `/` identifica a raiz quando aparece no início e separa os nomes ao longo do caminho.

Linux usa `/`, não a barra invertida `\` comum no Windows. Nomes diferenciam maiúsculas de minúsculas. `Downloads` e `downloads` podem ser locais distintos.

Para nomes com espaços, use aspas:

```bash
cd "Meus Arquivos"
```

## Comando, opção e argumento

```bash
ls -la /var/www/html
```

Nessa linha, `ls` é o comando e define a operação principal. `-la` combina as opções `-l` e `-a`, alterando o formato da listagem e incluindo entradas ocultas. `/var/www/html` é o argumento, ou seja, o diretório sobre o qual `ls` trabalhará.

Opções curtas normalmente usam um hífen, como `-l`. Longas usam dois, como `--help`. Cada programa define suas próprias opções.

## `pwd`: descobrir o diretório atual

`pwd` significa *print working directory*.

```bash
pwd
```

Sem opções ou argumentos, `pwd` imprime o caminho absoluto do diretório atual, como `/home/kali`.

## `ls`: listar conteúdo

Sem argumentos, lista o diretório atual:

```bash
ls
```

Com outro caminho:

```bash
ls /var
```

Opções comuns:

```bash
ls -l   # formato detalhado
ls -a   # inclui entradas ocultas
ls -la  # combina as duas opções
```

### Como ler `ls -l`

Uma entrada pode começar assim:

```text
drwxr-xr-x
```

O primeiro caractere indica o tipo:

- `d`: diretório;
- `-`: arquivo comum;
- `l`: link simbólico.

Os nove caracteres seguintes formam três grupos de três: o primeiro pertence ao proprietário, o segundo ao grupo e o terceiro aos demais usuários. Em `rwxr-xr-x`, o proprietário possui leitura, escrita e execução; grupo e outros possuem leitura e execução.

- `r`: leitura;
- `w`: escrita;
- `x`: execução em arquivos ou travessia em diretórios;
- `-`: permissão ausente.

A listagem também pode mostrar links, proprietário, grupo, tamanho, última modificação e nome. A data normalmente é de modificação, não necessariamente de criação.

## `cd`: mudar o diretório

`cd` significa *change directory* e normalmente é interno ao shell.

```bash
cd /var  # caminho absoluto
cd ..    # diretório pai
cd       # diretório pessoal
cd ~     # diretório pessoal
cd -     # diretório anterior, quando suportado
```

Em `cd /var`, `cd` é um comando interno do shell e `/var` é o argumento. A operação muda o diretório da sessão e normalmente não mostra saída; `pwd` confirma o novo local.

Ausência de texto não comprova, sozinha, que qualquer comando funcionou. Use uma verificação apropriada.

## Consultando documentação

### `man`

```bash
man ls
```

`man` abre a página de manual e `ls` informa o assunto procurado. Pressione `q` para sair da visualização.

Alguns comandos, como `cd`, pertencem ao shell. No Bash, consulte:

```bash
help cd
```

### `--help`

```bash
ls --help
```

`--help` possui dois hífens. Nem todo comando implementa essa opção; use também `man`, `help` e documentação oficial.

## Histórico

```bash
history
```

O histórico lista comandos anteriores. As setas para cima e para baixo percorrem essa lista. Revise a linha antes de executar, pois pode conter caminho ou parâmetro que já não é adequado.

Segredos incluídos em argumentos também podem ficar registrados. Evite colocar senhas, tokens ou chaves privadas na linha de comando quando houver alternativa.

## Preenchimento com Tab

Tab é um recurso do shell para completar nomes. Após digitar:

```text
cd /var/ww
```

Tab pode completar o caminho se houver uma única correspondência. Com várias, pressionar novamente pode exibi-las.

O preenchimento reduz erros, mas não executa o comando. Confira antes de Enter.

## Percorrendo a hierarquia na prática

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

Depois de `cd /`, `pwd` deve mostrar `/`. A partir dali, `cd var` usa um caminho relativo e entra em `/var`; `cd ..` retorna à raiz. `cd ~` volta ao diretório pessoal, e `ls -la` inclui também as entradas iniciadas por ponto.

## Investigando erros

| Mensagem ou sintoma | Possível causa | Verificação |
|---|---|---|
| `command not found` | Nome incorreto ou programa ausente | Confira grafia e use Tab |
| `No such file or directory` | Caminho incorreto, maiúsculas ou item ausente | Execute `pwd` e `ls` |
| `Permission denied` | Usuário sem permissão | Examine com `ls -ld <CAMINHO>` |
| `Not a directory` | Parte do caminho é arquivo | Liste o caminho por etapas |
| Nenhuma saída | Pode ter funcionado ou não produzir texto | Use verificação específica |

O código de saída do último comando fica em `$?`:

```bash
echo $?
```

- `0`: normalmente sucesso;
- outro valor: algum erro.

Consulte imediatamente, pois o comando seguinte substitui o valor.

Não adicione `sudo` automaticamente ao encontrar erro. Primeiro confirme comando, caminho, usuário e permissões.

Lembre que `/` é a raiz, enquanto `/root` é o diretório pessoal do usuário `root`. Caminhos Linux usam `/`, e `ls -l` normalmente mostra a última modificação, não a criação. Um comando sem saída também não está automaticamente validado.

## Perguntas de fixação

1. No prompt `kali@servidor:~$`, o que representam usuário, máquina, `~` e `$`, e por que o prompt não deve ser digitado?
2. Qual é a diferença entre terminal, shell, CLI, prompt e comando?
3. Por que `/`, `/root` e `/home/kali` representam locais diferentes?
4. O que torna `/var/www/html/index.html` absoluto, de que depende `www/html` e como espaços e maiúsculas afetam caminhos?
5. Em `ls -la /var/www/html`, qual é o comando, quais opções foram combinadas e qual é o argumento?
6. O que muda entre `ls`, `ls /var`, `ls -l`, `ls -a` e `ls -la`, e como `drwxr-xr-x` deve ser interpretado?
7. O que fazem `cd /var`, `cd ..`, `cd ~` e `cd -`, e qual comando confirma o diretório resultante?
8. Quando usar `man ls`, `help cd` e `ls --help`, e como sair da página de manual?
9. O que `history` armazena e por que comandos recuperados pelas setas precisam ser revisados?
10. O que o preenchimento com Tab faz e o que ele não faz?
11. O que `echo $?` mostra, o que normalmente significam `0` e outros valores e por que a consulta deve ser imediata?
12. Como `pwd`, `ls` e `ls -ld <CAMINHO>` ajudam a distinguir caminho incorreto de falta de permissão?
