# Preparando o Evilginx em uma instância descartável

> **Status:** publicado; compilação, DNS autoritativo, emissão TLS e fluxo de autenticação devem ser validados separadamente no laboratório.
>
> **Título original:** Installing Evilginx on the Cloud
>
> **Escopo:** instalação em uma instância própria e descartável, com domínio neutro, aplicação controlada e identidades sintéticas. A infraestrutura não deve intermediar contas nem serviços de terceiros.

Na [aula anterior](20-introduction-to-evilginx.md), o Evilginx foi apresentado como um proxy **Adversary-in-the-Middle (AiTM)**: o navegador se conecta ao proxy, e o proxy estabelece outra conexão com a aplicação. Esta aula prepara os componentes necessários para iniciar a ferramenta, mas não executa ainda um fluxo de autenticação.

A pergunta central é como distinguir quatro estados que a transcrição tratava como se fossem um só: código baixado, programa compilado, serviços de rede alcançáveis e configuração interna da ferramenta. Concluir uma dessas etapas não comprova as demais.

## Começando com uma instância descartável

O instrutor escolheu uma instalação recente do Kali Linux em uma instância de nuvem. Isso reduz conflitos com serviços e configurações anteriores, mas não transforma a máquina em um ambiente seguro automaticamente. Ela continua sendo infraestrutura real, com endereço público, regras de entrada, armazenamento e possíveis custos.

O laboratório precisa, no mínimo, de:

- uma instância sob controle do estudante;
- um IPv4 público atual, representado por `<IP-PUBLICO-DO-LAB>`;
- um domínio neutro administrado pelo estudante, representado por `<DOMINIO-DO-LAB>`;
- regras de rede restritas ao necessário;
- uma aplicação e identidades criadas exclusivamente para o teste.

O endereço público deve ser confirmado antes de publicar DNS. Se a instância receber outro IP depois de ser interrompida e iniciada, registros antigos poderão conduzir ao destino errado.

## Separando resolução DNS de delegação

A demonstração criou registros `A` para o domínio principal, `www`, `ns1` e `ns2`, todos apontando para o IPv4 da instância. Um registro `A` apenas associa um nome a um IPv4:

| Nome ilustrativo | Tipo | Valor |
|---|---|---|
| `<DOMINIO-DO-LAB>` | `A` | `<IP-PUBLICO-DO-LAB>` |
| `www.<DOMINIO-DO-LAB>` | `A` | `<IP-PUBLICO-DO-LAB>` |
| `ns1.<DOMINIO-DO-LAB>` | `A` | `<IP-PUBLICO-DO-LAB>` |
| `ns2.<DOMINIO-DO-LAB>` | `A` | `<IP-PUBLICO-DO-LAB>` |

Criar os dois últimos registros não torna, sozinho, o Evilginx autoritativo pelo domínio. Para delegar uma zona, o domínio precisa possuir registros `NS` que indiquem os servidores responsáveis. Quando o nameserver fica dentro da própria zona delegada, o registrador também pode exigir **glue records**, que fornecem os endereços necessários para evitar uma dependência circular durante a resolução.

Portanto, há três configurações diferentes:

1. registros `A` fazem nomes resultarem em endereços;
2. registros `NS` declaram quais servidores são autoritativos pela zona;
3. glue records, quando necessários, permitem localizar nameservers que pertencem à própria zona.

O Evilginx inclui um servidor DNS, mas a forma de delegação depende do registrador e da versão utilizada. A configuração deve ser confirmada na documentação atual e com consultas DNS, não apenas pela aparência do painel.

## Portas, processos e controles de rede

Para atuar como servidor público, a ferramenta precisa receber tráfego nas portas utilizadas pelos seus serviços. DNS tradicional usa UDP `53` para a maioria das consultas e TCP `53` para respostas ou operações que exigem esse transporte. HTTP usa TCP `80`, e HTTPS usa TCP `443`.

Uma porta é um identificador lógico entre `0` e `65535`. Liberar essas portas no Security Group permite a chegada de pacotes à interface, mas não inicia nenhum processo. Da mesma forma, iniciar o Evilginx não altera automaticamente as regras da nuvem nem um firewall local.

Também não podem existir dois processos tentando escutar o mesmo endereço e a mesma porta ao mesmo tempo. Se Apache, Nginx ou outro serviço já ocupar `80` ou `443`, a inicialização poderá falhar. Os logs e uma inspeção das portas em escuta devem orientar o diagnóstico; não se deve encerrar serviços sem identificar antes sua função.

Expor DNS autoritativo e um proxy web aumenta a superfície do laboratório. As regras devem existir apenas durante o exercício, com os limites permitidos pelo provedor e pelo escopo autorizado.

## Instalando as ferramentas de compilação

Na instância Kali/Debian, o instrutor atualizou o índice de pacotes e instalou Git, Make e Go. Não é necessário manter uma sessão permanente como `root`; `sudo` pode ser aplicado somente aos comandos que exigem privilégio:

```bash
sudo apt update
sudo apt install git make golang-go
```

`apt update` atualiza a lista local de pacotes disponíveis. `apt install` solicita três componentes: Git para obter o repositório, Make para executar as regras de compilação fornecidas pelo projeto e a toolchain de Go para compilar o código-fonte.

A instalação deve ser confirmada antes de continuar:

```bash
git --version
make --version
go version
```

Esses comandos comprovam que os executáveis foram encontrados e informam suas versões. Eles não comprovam que o Evilginx foi baixado ou compilado.

## Baixando e compilando o projeto

O código oficial pode ser clonado do repositório do projeto. A demonstração trabalhou em um diretório administrativo; o exemplo abaixo mantém essa escolha explícita:

```bash
cd /opt
sudo git clone https://github.com/kgretzky/evilginx2.git
sudo chown -R "$USER":"$USER" /opt/evilginx2
cd /opt/evilginx2
make
```

`git clone` cria uma cópia local do repositório. A mudança de propriedade evita compilar continuamente como `root`. `make` lê as regras fornecidas pelo projeto e produz o executável; na estrutura demonstrada, o binário fica sob o diretório `build`.

Não receber uma mensagem de erro é um indício, não a verificação final. Confirme que o executável existe e consulte sua versão:

```bash
ls -l build/evilginx
build/evilginx -v
```

O código-fonte, o binário e a configuração persistente cumprem papéis diferentes. Recompilar substitui ou atualiza o programa; não apaga automaticamente a configuração armazenada no diretório do usuário.

## Mantendo phishlets separados do código

Os arquivos YAML chamados **phishlets** descrevem regras específicas de intermediação. Eles não são o programa principal e não devem ser tratados como “páginas prontas” confiáveis. Repositórios comunitários podem estar desatualizados ou conter transformações não auditadas.

Antes de usar um conjunto externo:

- examine a origem e o histórico do repositório;
- fixe um hash de commit conhecido;
- leia os YAML que serão carregados;
- confirme compatibilidade com a versão compilada;
- use somente regras destinadas à aplicação controlada no laboratório.

O argumento `-p` informa ao executável qual diretório contém os phishlets:

```bash
build/evilginx -p <DIRETORIO-DE-PHISHLETS-AUDITADOS>
```

Se o caminho for relativo, ele será resolvido a partir do diretório atual do shell. Baixar arquivos em outra pasta não faz a ferramenta encontrá-los automaticamente. A [aula seguinte](22-bypassing-2fa-mfa.md) registra como essa diferença de caminhos apareceu no laboratório e como foi diagnosticada.

## Configurando domínio e IPv4 no console

Ao iniciar, a versão mostrada no curso avisou que o domínio e o IPv4 externo ainda não estavam definidos. No console interativo, a configuração foi feita com comandos equivalentes a:

```text
config domain <DOMINIO-DO-LAB>
config ipv4 <IP-PUBLICO-DO-LAB>
config
```

O primeiro valor informa o domínio-base administrado pelo laboratório. O segundo informa o IPv4 público pelo qual a instância é alcançada. O comando `config` permite revisar o estado salvo.

Esses valores não publicam registros DNS, não abrem portas e não emitem, por si só, um certificado. Eles apenas configuram o comportamento interno da ferramenta. O resultado precisa ser comparado com a resolução pública real e com a interface de rede da instância.

Como o diretório de configuração padrão pertence ao usuário que inicia o processo, executar uma vez como `root` e outra como `kali` pode produzir dois estados separados, por exemplo `/root/.evilginx` e `/home/kali/.evilginx`. Essa diferença explica por que uma configuração ou blacklist pode parecer desaparecer entre execuções.

## O que esta preparação comprova

Ao final da sequência, é possível comprovar separadamente:

- dependências disponíveis pelas respectivas versões;
- repositório presente pelo diretório e pelo commit obtido;
- compilação pelo executável produzido e sua versão;
- phishlets localizados pelo diretório indicado em `-p`;
- domínio e IPv4 salvos pela saída de `config`;
- serviços iniciados pelos logs e pelas portas realmente em escuta;
- DNS pela resposta de um resolvedor externo;
- HTTPS pela negociação TLS e pelo certificado apresentado.

A demonstração do curso não foi reproduzida integralmente neste workspace. Em especial, criar registros no painel e ver o console abrir não prova que a delegação DNS, a emissão de certificado ou um fluxo de autenticação estejam funcionando.

## Encerrando a infraestrutura

Depois do laboratório, encerre o processo, remova delegações e registros temporários, feche as portas que deixaram de ser necessárias e termine a instância se ela não tiver outra função. Revise volumes, snapshots e endereços reservados que possam continuar existindo ou gerando custo.

O diretório de configuração, logs, banco de sessões, phishlets e certificados podem conter identificadores ou segredos. Eles não devem ser publicados. Se qualquer credencial ou sessão real tiver passado pela ferramenta, trate-a como exposta, revogue-a e investigue o ocorrido.

## Referências

- [Repositório oficial do Evilginx](https://github.com/kgretzky/evilginx2)
- [Documentação da edição Community](https://help.evilginx.com/community)
- [Do nome de domínio ao endereço IP](../03-phishing/16-domain-name-and-dns-basics.md)
- [O que o HTTPS protege](../03-phishing/18-introduction-to-https.md)
