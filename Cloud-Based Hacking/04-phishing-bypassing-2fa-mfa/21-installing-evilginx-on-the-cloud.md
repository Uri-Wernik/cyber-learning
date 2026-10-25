# Preparando o Evilginx em uma instância descartável

O programa abriu. Pronto, tudo funcionando? Ainda não. Uma cozinha pode ter fogão instalado e continuar sem gás; uma ferramenta pode mostrar seu console e continuar sem receber uma única conexão. A comparação serve para lembrar uma dependência, não para transformar serviços de rede em utensílios: cada componente precisa de uma verificação própria.

Na [aula anterior](20-introduction-to-evilginx.md), vimos duas conexões no modelo **Adversary-in-the-Middle (AiTM)**: navegador para proxy e proxy para aplicação. Agora vamos entender a preparação da máquina que executa esse intermediário. O ambiente precisa ser próprio e descartável, com domínio neutro, aplicação controlada e identidades sintéticas, sem intermediar contas ou serviços de terceiros. Compilação, DNS, TLS e autenticação continuam exigindo validações separadas.

Acompanhe quatro estados: código obtido, executável produzido, rede alcançável e configuração coerente. Eles podem parecer uma única instalação, mas não são. Se uma etapa falha, saber qual estado já foi confirmado evita começar tudo de novo sem necessidade.

## Começando com uma instância descartável

O instrutor partiu de uma instância recente do Kali Linux. Isso ajuda a reduzir conflitos com programas e configurações anteriores. Mas “descartável” descreve o destino planejado da máquina, não a ausência de responsabilidade: ela tem rede, armazenamento e cobrança enquanto existir.

O laboratório precisa reunir:

- uma instância sob controle do estudante;
- um IPv4 público atual, representado por `<IP-PUBLICO-DO-LAB>`;
- um domínio neutro administrado pelo estudante, representado por `<DOMINIO-DO-LAB>`;
- regras de rede restritas ao necessário;
- uma aplicação e identidades criadas exclusivamente para o teste.

Comece pelo endereço atual. Se a instância foi parada e iniciada, seu IPv4 público automático pode ter mudado. Publicar o IP antigo no DNS é como atualizar uma agenda com o telefone errado: o nome pode estar bem escrito, mas leva a outro destino. No caso de um endereço reutilizado pelo provedor, esse erro pode até apontar para infraestrutura que já não é sua.

## Separando resolução DNS de delegação

Uma etiqueta escrita “servidor DNS” não concede a um computador autoridade sobre um domínio. A demonstração criou nomes como `ns1` e `ns2`, mas o começo das letras não determina a função. O que importa são os registros e a delegação.

Os registros `A` apresentados relacionavam estes nomes ao IPv4 da instância:

| Nome ilustrativo | Tipo | Valor |
|---|---|---|
| `<DOMINIO-DO-LAB>` | `A` | `<IP-PUBLICO-DO-LAB>` |
| `www.<DOMINIO-DO-LAB>` | `A` | `<IP-PUBLICO-DO-LAB>` |
| `ns1.<DOMINIO-DO-LAB>` | `A` | `<IP-PUBLICO-DO-LAB>` |
| `ns2.<DOMINIO-DO-LAB>` | `A` | `<IP-PUBLICO-DO-LAB>` |

Isso informa endereços. Outra pergunta é: **quem tem autoridade para responder pela zona?** Os registros `NS` indicam esses servidores responsáveis. Quando seus nomes pertencem à própria zona delegada, pode aparecer uma dependência circular: precisamos achar o servidor para consultar a zona, mas precisamos consultar a zona para achar o servidor.

Os **glue records**, quando exigidos pelo registrador, fornecem os endereços que ajudam a sair desse círculo. Não são um segundo nome para registros web. Cada informação resolve uma parte:

1. registros `A` fazem nomes resultarem em endereços;
2. registros `NS` declaram quais servidores são autoritativos pela zona;
3. glue records, quando necessários, permitem localizar nameservers que pertencem à própria zona.

O Evilginx inclui um servidor DNS, mas não pode simplesmente declarar a si mesmo responsável no restante da hierarquia. A relação precisa ser configurada e confirmada conforme o registrador e a versão usados. Um painel salvo mostra uma intenção de configuração; uma resposta DNS adequada permite investigar o resultado.

## Portas, processos e controles de rede

Imagine um pedido chegando ao endereço certo e encontrando a porta do atendimento fechada. Na rede, a porta não é física: é um identificador lógico de `0` a `65535` que participa da entrega ao processo correto.

No cenário estudado, DNS tradicional utiliza UDP `53` na maioria das consultas e também TCP `53` em respostas ou operações que precisam desse transporte. HTTP utiliza TCP `80`; HTTPS, TCP `443`. Ver um desses serviços responder não comprova que os outros responderão.

O Security Group controla a passagem até a interface. O processo em escuta é quem recebe a comunicação. **Permitir passagem não inicia o processo; iniciar o processo não muda os filtros.** Um firewall local ainda pode impor outra condição. Essa distinção vale para qualquer servidor, não apenas para esta ferramenta.

Existe também a disputa pelo mesmo ponto de escuta. Na configuração comum considerada aqui, dois processos não ocupam ao mesmo tempo a mesma combinação de endereço, porta e transporte. Se Apache, Nginx ou outro programa já usa `80` ou `443`, o serviço pretendido pode não iniciar. Logs e inspeção da escuta ajudam a identificar o dono do recurso antes de encerrar algo.

Publicar DNS autoritativo e um proxy web aumenta a superfície exposta. O laboratório deve manter apenas os acessos necessários e pelo período autorizado, respeitando os termos do provedor. Uma máquina vazia de arquivos pessoais ainda pode produzir impacto na rede.

## Instalando as ferramentas de compilação

Baixar uma receita e preparar o prato não são a mesma ação. No software, obter código-fonte e produzir o executável também são etapas distintas. A analogia termina no resultado: a compilação segue regras técnicas e pode falhar por dependência ou incompatibilidade, não por falta de “jeito”.

Na instância Kali/Debian, o instrutor preparou as ferramentas:

```bash
sudo apt update
sudo apt install git make golang-go
```

Essas linhas são executadas no Linux remoto. `sudo` fornece o privilégio necessário sem exigir que toda a sessão permaneça como `root`. `apt update` renova o índice de pacotes; não atualiza automaticamente todos os programas instalados.

A instalação pede Git para obter o repositório, Make para seguir as regras de construção e a **toolchain** de Go, o conjunto de ferramentas usado para transformar código nessa linguagem em programa executável. Cada ferramenta participa de uma etapa, não de três instalações equivalentes do Evilginx.

Antes de continuar, confirme que elas estão disponíveis:

```bash
git --version
make --version
go version
```

A saída de versão responde a uma pergunta pequena e importante: aquele executável foi encontrado? Ela ajuda a registrar o ambiente e investigar compatibilidade. Ainda não demonstra que o projeto foi baixado ou compilado.

## Baixando e compilando o projeto

O exemplo preserva o diretório `/opt` da demonstração e a origem oficial do código:

```bash
cd /opt
sudo git clone https://github.com/kgretzky/evilginx2.git
sudo chown -R "$USER":"$USER" /opt/evilginx2
cd /opt/evilginx2
make
```

Leia a mudança de estado, não apenas a sequência de teclas. Primeiro, o shell entra em `/opt`. `git clone` cria ali a cópia local. O `chown` muda recursivamente a propriedade desse diretório para a identidade indicada por `$USER`, permitindo trabalhar nos arquivos sem compilar continuamente como `root`.

Já na pasta do projeto, `make` segue suas regras de **compilação**. Na estrutura demonstrada, o resultado esperado é um **binário** sob `build`: o arquivo que o sistema pode executar. Código-fonte é a entrada da construção; binário é seu produto. A **configuração persistente** guarda escolhas que podem continuar existindo entre execuções e não some simplesmente porque o programa foi recompilado.

Como saber se o produto apareceu?

```bash
ls -l build/evilginx
build/evilginx -v
```

`ls -l` consulta a existência e os metadados do arquivo. A execução com `-v` pede a versão. Não receber erro na compilação é um indício; encontrar e consultar o executável é uma verificação mais específica. Nenhum desses resultados, sozinho, configura DNS ou garante que uma porta externa esteja alcançável.

## Mantendo phishlets separados do código

Uma ferramenta pode existir sem saber interpretar o fluxo de uma aplicação específica. Os **phishlets** são arquivos YAML com essas regras. Eles não são o binário principal nem uma coleção de páginas automaticamente confiáveis.

Uma regra comunitária pode estar antiga, incompatível ou conter transformações não revisadas. Para um conjunto externo destinado somente à aplicação controlada, a conferência inclui:

- examine a origem e o histórico do repositório;
- fixe um hash de commit conhecido;
- leia os YAML que serão carregados;
- confirme compatibilidade com a versão compilada;
- use somente regras destinadas à aplicação controlada no laboratório.

Depois da origem e do conteúdo, vem uma pergunta bem concreta: onde estão os arquivos?

```bash
build/evilginx -p <DIRETORIO-DE-PHISHLETS-AUDITADOS>
```

O argumento `-p` informa o diretório a examinar. Se o caminho for relativo, seu ponto de partida é a pasta atual do shell. Ter os YAML em uma pasta e indicar outra não faz o programa adivinhar a intenção.

Essa diferença entre **existir** e **ser encontrado** aparece no diagnóstico real da [aula seguinte](22-bypassing-2fa-mfa.md). A pergunta correta não será apenas “eu baixei?”, mas “a execução está procurando no lugar em que os arquivos realmente ficaram?”.

## Configurando domínio e IPv4 no console

Há dois locais de digitação nesta sequência. O shell Linux inicia o programa; o console interativo recebe comandos da própria ferramenta. A versão mostrada pelo instrutor avisou que domínio e IPv4 externo não haviam sido definidos. Ele ajustou esses valores no console:

```text
config domain <DOMINIO-DO-LAB>
config ipv4 <IP-PUBLICO-DO-LAB>
config
```

`config domain` define o domínio-base interno, e `config ipv4` informa o endereço público esperado. A consulta `config` mostra o estado salvo. Os marcadores representam recursos próprios, não valores para digitar literalmente.

Mas escrever um endereço em um aplicativo não atualiza a Internet inteira. Essas operações não publicam DNS, não alteram Security Groups e não emitem certificado por si sós. Compare o estado interno com a instância e a resolução externa para saber se as partes concordam.

O usuário da execução também importa. Sob `root`, os dados podem ficar em `/root/.evilginx`; sob `kali`, em `/home/kali/.evilginx`. São diretórios distintos. Uma configuração que parece ter “sumido” pode estar na pasta de outra identidade. Antes de recriar tudo, confirme quem iniciou o processo.

## O que esta preparação comprova

Acompanhar a instalação fica mais fácil quando cada observação responde à sua própria pergunta:

- versões das ferramentas: as dependências estão disponíveis?
- diretório e commit: qual código foi obtido?
- executável e versão: a compilação produziu o programa?
- diretório indicado por `-p`: onde a execução procura regras?
- saída de `config`: quais valores estão salvos?
- logs e escuta: quais serviços realmente iniciaram?
- resposta de um resolvedor externo: o DNS responde como esperado?
- negociação e certificado: o trecho HTTPS passou na verificação?

Essas perguntas não são redundantes. Um console aberto não responde por todas. O curso não foi reproduzido integralmente neste workspace, e delegação, emissão TLS e autenticação continuam exigindo evidências separadas. Não vamos preencher essa distância com a frase “deu certo”.

## Encerrando a infraestrutura

Fechar o programa é uma parte do encerramento, não o encerramento inteiro. Pare o processo, retire delegações e registros temporários e feche portas sem função. Se a instância foi criada só para o exercício, termine-a quando não for mais necessária.

Depois, procure o que pode ter ficado: volumes, snapshots e endereços reservados podem existir e gerar cobrança sem a execução principal. Essa revisão é diferente de sair de um console.

Configuração, logs, banco de sessões, regras e certificados também merecem atenção antes de qualquer publicação. Podem revelar identidades e segredos. Se uma credencial ou sessão real atravessou a ferramenta, apagar a cópia local não desfaz a exposição: é necessário revogar o acesso afetado e investigar. O exercício só termina quando seu alcance, seus dados e seus recursos foram conferidos.
