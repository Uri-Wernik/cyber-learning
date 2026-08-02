# Fundamentos do terminal Linux

## Objetivos da aula

Ao final desta aula, você deverá ser capaz de:

- distinguir terminal, shell e CLI;
- compreender a árvore de diretórios do Linux;
- diferenciar `/`, `/root` e `/home/kali`;
- usar caminhos absolutos e relativos;
- reconhecer comando, opção e argumento;
- navegar com `pwd`, `ls` e `cd`;
- consultar ajuda com `man` e `--help`;
- reutilizar comandos com histórico e Tab;
- interpretar permissões básicas exibidas por `ls -l`;
- investigar erros sem executar comandos às cegas.

## Do SSH ao terminal

Na [aula 8](08-communicating-with-cloud-computers-remotely-using-ssh.md), usamos SSH para abrir uma sessão na máquina Kali. Depois da conexão, os comandos digitados são executados na máquina remota, não no computador local.

Antes de executar qualquer comando, confirme máquina e usuário no prompt.

```text
kali@servidor:~$
```

Normalmente:

- `kali`: usuário atual;
- `servidor`: nome da máquina;
- `~`: diretório pessoal;
- `$`: usuário comum;
- `#`: frequentemente usuário administrativo `root`.

O prompt não faz parte do comando e não deve ser digitado.

## Terminal, shell e CLI

| Termo | Significado |
|---|---|
| **Terminal** | Aplicativo que mostra entrada e saída textual. |
| **Shell** | Programa que interpreta comandos, como Bash ou Zsh. |
| **CLI** | *Command-Line Interface*: interação baseada em texto. |
| **Prompt** | Indicação de que o shell está pronto. |
| **Comando** | Instrução reconhecida pelo shell. |

Ao pressionar Enter, o shell interpreta a linha, localiza o comando, processa opções e argumentos, executa a operação e mostra saída ou erro.

## A árvore de diretórios

O sistema de arquivos Linux forma uma única árvore. O ponto mais alto é `/`.

```text
/
├── etc/
├── home/
│   └── kali/
├── root/
├── tmp/
├── usr/
└── var/
    └── www/
        └── html/
```

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

| Referência | Significado |
|---|---|
| `.` | Diretório atual |
| `..` | Diretório pai |
| `~` | Diretório pessoal atual |
| `/` | Raiz e separador de diretórios |

Linux usa `/`, não a barra invertida `\` comum no Windows. Nomes diferenciam maiúsculas de minúsculas. `Downloads` e `downloads` podem ser locais distintos.

Para nomes com espaços, use aspas:

```bash
cd "Meus Arquivos"
```

## Comando, opção e argumento

```bash
ls -la /var/www/html
```

```text
ls -la /var/www/html
├─ comando: ls
├─ opções: -l e -a, combinadas como -la
└─ argumento: /var/www/html
```

- **Comando:** operação principal.
- **Opção:** altera o comportamento.
- **Argumento:** objeto sobre o qual o comando trabalha.

Opções curtas normalmente usam um hífen, como `-l`. Longas usam dois, como `--help`. Cada programa define suas próprias opções.

## `pwd`: descobrir o diretório atual

`pwd` significa *print working directory*.

```bash
pwd
```

```text
pwd
├─ comando: exibe o diretório atual
├─ opções: nenhuma
├─ argumentos: nenhum
└─ resultado: caminho absoluto, como /home/kali
```

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

Os nove seguintes formam três grupos:

```text
rwx  r-x  r-x
│    │    └─ outros usuários
│    └────── grupo
└─────────── proprietário
```

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

```text
cd /var
├─ comando interno: cd
├─ argumento: /var
├─ efeito: altera o diretório desta sessão
├─ saída: normalmente nenhuma
└─ verificação: execute pwd
```

Ausência de texto não comprova, sozinha, que qualquer comando funcionou. Use uma verificação apropriada.

## Consultando documentação

### `man`

```bash
man ls
```

```text
man ls
├─ man: abre uma página de manual
├─ ls: assunto procurado
└─ saída: pressione q
```

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

## Verificação prática

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

Confirme que:

1. depois de `cd /`, `pwd` mostra `/`;
2. `cd var` funciona como caminho relativo a partir de `/`;
3. dentro de `/var`, `cd ..` retorna a `/`;
4. `cd ~` retorna ao diretório pessoal;
5. `ls -la` inclui entradas iniciadas por ponto.

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

## Correções da transcrição

- `LZ`, `LHS` e `RLS` são erros: o comando correto é `ls`.
- `/` é a raiz; `/root` é a pasta do usuário `root`.
- Caminhos Linux usam `/`.
- `ls -l` mostra normalmente a última modificação, não a criação.
- No Bash, `help cd` pode ser mais apropriado que `man cd`.
- Comando sem saída não está automaticamente validado.
- Opções longas, como `--help`, usam dois hífens.

## Resumo

- O terminal apresenta a sessão; o shell interpreta comandos.
- Todos os caminhos pertencem à árvore iniciada em `/`.
- `/`, `/root` e `/home/kali` são locais diferentes.
- Caminhos absolutos começam em `/`; relativos dependem do diretório atual.
- `pwd`, `ls` e `cd` permitem localizar e navegar.
- `man`, `help` e `--help` explicam comandos.
- `history`, setas e Tab aumentam eficiência.
- `ls -l` apresenta tipo, permissões e metadados.

## Perguntas de fixação

1. Qual é a diferença entre terminal, shell e CLI?
2. Por que `/` e `/root` não são sinônimos?
3. Onde costuma ficar o diretório do usuário `kali`?
4. O que torna `/var/www/html` absoluto?
5. Se você está em `/var`, aonde `www/html` aponta?
6. Quais são comando, opções e argumento em `ls -la /etc`?
7. Por que `help cd` pode ser melhor que `man cd`?
8. O que representam os grupos de permissões?
9. Como confirmar que `cd` funcionou?
10. Por que revisar comandos recuperados do histórico?
