# Da exposição à investigação: lendo pistas sem antecipar conclusões

> **Status:** publicado.
>
> **Origem:** aula complementar Blue Team construída a partir da investigação da infraestrutura própria usada no módulo de phishing. Os identificadores públicos do laboratório foram substituídos por marcadores.
>
> **Escopo:** os comandos ativos desta aula devem ser executados somente contra sistemas próprios ou expressamente autorizados. Shodan e Censys serão usados apenas para consultar a exposição do próprio laboratório.

Nas aulas sobre [Apache e HTTP](../03-phishing/11-file-hosting-and-firewall-settings.md), [DNS](../03-phishing/16-domain-name-and-dns-basics.md), [HTTPS](../03-phishing/18-introduction-to-https.md) e [Certbot](../03-phishing/19-enabling-https-on-phishing-pages.md), construímos uma infraestrutura web e observamos cada componente pelo ponto de vista de quem a administra. Agora a perspectiva muda: o que um analista defensivo consegue descobrir quando recebe apenas o endereço de um servidor que merece investigação?

A pergunta central não é “como provar rapidamente que o servidor é malicioso?”, mas “quais fatos podem ser observados e quais hipóteses ainda precisam de outras evidências?”. Essa diferença evita que uma porta aberta, uma região de nuvem ou um certificado válido sejam transformados em conclusões que eles não sustentam.

## Quando o mesmo servidor muda de perspectiva

No laboratório ofensivo, abrir as portas `80` e `443`, iniciar o Apache, publicar um domínio e instalar um certificado foram ações conhecidas. Um analista externo não começa com esse histórico. Ele enxerga apenas os sinais que a infraestrutura expõe: endereços, nomes, portas, respostas HTTP, certificado e horários de observação.

Esses sinais são **indicadores**, isto é, dados úteis para procurar relações. Um indicador não é uma prova isolada de intenção. Um endereço IP pode ser compartilhado ou reutilizado; um título HTML pode aparecer em páginas legítimas; um certificado comprova controle de um nome durante a validação, não honestidade; e um servidor na porta `443` pode hospedar um site comum, uma API ou inúmeras outras aplicações.

Antes da coleta, o analista registra o ativo autorizado, a data, o horário e a origem da informação. Serviços mudam, endereços de nuvem podem ser reassociados e mecanismos de busca guardam observações feitas em momentos diferentes. Sem o tempo da evidência, duas medições incompatíveis podem parecer uma contradição quando apenas representam estados diferentes.

## Construindo o primeiro mapa com Nmap

Na máquina Kali do laboratório, uma primeira verificação pode limitar a busca às portas que já pertencem ao escopo:

```bash
nmap -sV -p 22,80,443 <IP-DO-LAB>
```

`nmap` inicia o scanner. A opção `-sV` pede sondas adicionais para estimar qual serviço e versão respondem em uma porta aberta. `-p 22,80,443` restringe o teste às três portas indicadas, e `<IP-DO-LAB>` representa o endereço autorizado. Essa atividade envia tráfego ao alvo; ela não deve ser executada contra endereços de terceiros sem permissão.

Uma saída como esta precisa ser lida por camadas:

```text
Host is up.

PORT    STATE SERVICE
22/tcp  open  ssh
80/tcp  open  http
443/tcp open  ssl/http
```

`Host is up` não significa que o “host está aberto”. Significa que pelo menos uma das sondas usadas pelo Nmap recebeu uma resposta compatível com um host alcançável. O estado `open` pertence a cada porta: existe um processo aceitando conexões naquele número e protocolo de transporte.

Em `443/tcp`, `443` é a porta lógica, `tcp` é o protocolo de transporte e `ssl/http` é a classificação do serviço feita pelo Nmap. No contexto desta aula, a aplicação é HTTP protegida por TLS, ou HTTPS. TCP não é o serviço web e uma porta aberta, por si só, não informa a finalidade do processo.

A identificação de versão também é uma estimativa produzida pelas respostas recebidas. Se um cabeçalho disser `Apache/2.4.68 (Debian)`, isso é uma pista sobre o servidor web e seu ambiente, não uma comprovação completa do sistema operacional da máquina. Banners podem ser alterados, ocultados ou entregues por um proxy intermediário.

## Pedindo metadados ao HTTP

Depois de localizar o serviço HTTP, o Nmap pode executar scripts do **Nmap Scripting Engine (NSE)** para observar a página inicial:

```bash
nmap -p 80 --script http-title,http-headers <IP-DO-LAB>
```

`-p 80` mantém a coleta na porta HTTP autorizada. `--script` seleciona dois scripts: `http-title` procura o conteúdo do elemento HTML `title`, enquanto `http-headers` faz, por padrão, uma requisição `HEAD` para `/` e exibe os cabeçalhos devolvidos.

No laboratório, a resposta sanitizada continha os seguintes elementos:

```text
PORT   STATE SERVICE
80/tcp open  http
| http-headers:
|   Server: Apache/2.4.68 (Debian)
|   Content-Length: 6259
|   Content-Type: text/html
|
|_  (Request type: HEAD)
|_http-title: Entrar - Nova Interface
```

Uma requisição `HEAD` pede os mesmos metadados de uma requisição `GET`, mas o servidor não envia o corpo da resposta. Por isso, o comando mostrou cabeçalhos e título coletado pelo script, não todo o HTML da página.

O cabeçalho `Server` declarou uma versão do Apache e uma distribuição, mas continua sendo um banner informado pelo servidor. `Content-Type: text/html` descreveu o formato da representação. `Content-Length: 6259` informou que o corpo correspondente teria `6259` bytes naquela resposta; não eram `626259` bytes e o valor não representa necessariamente o tamanho de um arquivo existente no disco. Conteúdo dinâmico, compressão e negociação podem produzir outra representação.

O título `Entrar - Nova Interface` é um bom termo para comparação porque tende a ser mais específico que “Apache”. Ainda assim, qualquer autor pode escolher esse texto. Ele se torna mais útil quando coincide com outros dados, como nomes, certificado, cabeçalhos, estrutura da página e período de atividade.

## Recebendo o corpo com curl

Quando a pergunta muda de “qual serviço está exposto?” para “qual resposta HTTP esse serviço entrega?”, `curl` é o cliente mais direto. Para receber cabeçalhos e corpo da página HTTP do laboratório:

```bash
curl -i http://<IP-DO-LAB>/
```

`curl` cria a requisição. A opção `-i` inclui os cabeçalhos da resposta na saída, e a URL define HTTP, host, porta padrão `80` e caminho `/`. Diferentemente do `http-headers`, que usou `HEAD`, esse comando faz uma requisição `GET` por padrão e recebe também o corpo.

Se o objetivo for preservar o HTML para comparação posterior, a saída pode ser gravada sem misturar os cabeçalhos:

```bash
curl http://<IP-DO-LAB>/ -o pagina-laboratorio.html
```

`-o` escolhe o arquivo de destino. O download não prova que a página é maliciosa e não deve ser aberto de forma descuidada em um navegador: o HTML pode carregar scripts e recursos externos quando renderizado. Para HTTPS, prefira o nome autorizado do domínio para que a negociação TLS use a identidade correta:

```bash
curl -i https://<DOMINIO-DO-LAB>/
```

Não use `-k` como atalho para ignorar erros de certificado durante a investigação. Uma falha de nome, validade ou confiança é evidência a ser explicada, não um obstáculo a ser escondido.

## Observando o certificado apresentado em HTTPS

Na porta `443`, os mesmos metadados HTTP podem ser combinados com a leitura do certificado:

```bash
nmap -sV -p 443 --script http-title,http-headers,ssl-cert <DOMINIO-DO-LAB>
```

O script `ssl-cert` recupera campos como nomes cobertos, emissor e período de validade. Na evidência do laboratório, o certificado havia sido emitido pela Let's Encrypt para o domínio configurado. Isso era coerente com a instalação feita anteriormente, mas não tornava legítimo o conteúdo da página. A autoridade certificadora validou o controle do nome; ela não avaliou a intenção de quem publicou o site.

Datas de validade também precisam ser comparadas com o horário da observação. Um certificado que era válido quando um mecanismo de busca o coletou pode já ter expirado, sido renovado ou substituído quando o analista fizer a consulta.

## Comparando a observação atual com Shodan e Censys

Nmap e `curl` examinaram diretamente o alvo autorizado no momento do teste. **Shodan** e **Censys** mantêm mecanismos de busca sobre serviços expostos à Internet. Eles executam suas próprias coletas em grandes faixas de endereços e indexam dados como portas, banners, respostas HTTP e certificados.

Isso não significa que “um Nmap gigante escaneia todos os IPs do mundo o tempo todo”. Cobertura, protocolos observados e frequência variam. O resultado é uma fotografia produzida em determinado momento, não uma visão completa e em tempo real.

O relatório guardado durante o laboratório permitiu comparar as duas perspectivas sem publicar o IP nem o domínio reais:

| Dado indexado | O que sustentava | O que não sustentava |
| --- | --- | --- |
| Nome reverso associado ao EC2 | O endereço estava relacionado à infraestrutura pública da AWS quando foi observado | A identidade ou nacionalidade de quem operava a instância |
| Código de região `il-central-1` | A instância estava na região AWS Israel (Tel Aviv) | A localização física do operador ou o uso de VPN |
| Portas `80` e `443` | Serviços web respondiam nessas portas durante a coleta | Que o conteúdo era phishing ou que o servidor era C2 |
| Banner `Apache/2.4.68 (Debian)` | O serviço se apresentou dessa forma | Uma identificação infalível do sistema e de todos os pacotes instalados |
| Título `Entrar - Nova Interface` | A página padrão expunha esse título | Que outras páginas com o mesmo título pertenciam ao mesmo responsável |
| Certificado da Let's Encrypt | O nome passou por validação e estava associado ao certificado naquele período | Que a página era segura, honesta ou pertencente à organização imitada |
| Vulnerabilidades sugeridas | A versão observada podia estar relacionada a determinados CVEs | Que a configuração estava realmente vulnerável ou explorável |

O código `il-central-1` possui significado geográfico real: é a região da AWS em Israel. A inferência termina aí. Qualquer pessoa autorizada a usar aquela região pode criar uma instância remotamente. Geolocalização da infraestrutura não é geolocalização do operador.

As vulnerabilidades listadas por uma plataforma também exigem cuidado. Quando são inferidas a partir do produto e da versão aparentes, funcionam como hipóteses para validação. Backports de correções, pacotes da distribuição, configuração, módulos carregados e até um banner impreciso podem alterar o resultado. Nenhum CVE deve ser tratado como confirmado apenas porque apareceu ao lado do host.

## Transformando semelhanças em hipóteses

Um analista pode comparar o título, os cabeçalhos, os nomes do certificado e outros dados para encontrar infraestrutura semelhante. Essa busca produz um **cluster**, ou agrupamento de observações com características em comum. Ela não identifica automaticamente um mesmo operador nem autoriza testar os outros servidores encontrados.

A investigação ganha força quando a observação externa encontra telemetria interna. Logs de DNS podem mostrar qual máquina resolveu o domínio. Logs de proxy ou firewall podem registrar conexões ao IP e à porta. Um **Endpoint Detection and Response (EDR)** pode relacionar a conexão ao processo que a iniciou. Horários permitem comparar essas evidências com alertas, mensagens recebidas e ações do usuário.

Se uma máquina interna se conecta ao servidor em intervalos regulares, como a cada poucos minutos, esse padrão pode sugerir **beaconing**: comunicação periódica usada por alguns agentes para procurar novas instruções. Regularidade sozinha também não prova **Command and Control (C2)**. Atualizadores, monitoramento e outros programas legítimos podem produzir padrões semelhantes. Processo de origem, volume, destino, conteúdo permitido pelos logs e contexto do ativo precisam ser correlacionados.

O encadeamento defensivo fica assim:

1. a coleta externa registra o que estava exposto e quando;
2. os dados formam uma hipótese, não um veredito;
3. a telemetria interna procura clientes, processos e horários relacionados;
4. múltiplas fontes independentes aumentam ou reduzem a confiança;
5. somente então o analista classifica o evento e decide contenção, preservação de evidências ou encerramento.

Nesse laboratório, ficou comprovado que um servidor próprio respondeu por SSH, HTTP e HTTPS, apresentou determinados metadados e havia sido indexado por um mecanismo de busca. Não ficou comprovado, por essas observações isoladas, que um servidor com características parecidas fosse phishing, C2 ou operado por alguém localizado na região da nuvem.

## Encerrando sem deixar a exposição ativa

Depois da coleta, salve somente os resultados necessários e remova IPs, domínios, identificadores de conta e outros dados que não precisam aparecer nas notas públicas. O PDF original do relatório não deve ser incorporado ao livro enquanto contiver esses identificadores.

No ambiente AWS, confirme se a instância ainda tem função no laboratório. Quando o exercício terminar, remova regras públicas desnecessárias, retire registros DNS, revogue certificados se houver comprometimento da chave, encerre a instância e verifique custos. Fechar o terminal local não interrompe os serviços nem elimina a exposição na nuvem.

Esta ponte defensiva encerra a análise da infraestrutura web básica. A [próxima aula](../04-phishing-bypassing-2fa-mfa/20-introduction-to-evilginx.md) volta à perspectiva ofensiva autorizada para estudar por que um proxy entre navegador e aplicação altera o fluxo de autenticação.

## Fontes técnicas consultadas

- [Nmap: script `http-headers`](https://nmap.org/nsedoc/scripts/http-headers.html)
- [Nmap: script `http-title`](https://nmap.org/nsedoc/scripts/http-title.html)
- [Nmap: script `ssl-cert`](https://nmap.org/nsedoc/scripts/ssl-cert.html)
- [Shodan: What is Shodan?](https://help.shodan.io/the-basics/what-is-shodan)
- [AWS Regions](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html)
