# Publicando registros DNS para o laboratório

> **Status:** publicado.
>
> **Título original:** Linking Domain Names to Phishing Pages
>
> **Escopo:** configuração de DNS para um domínio neutro, uma página de treinamento e um servidor sob controle do estudante. Nomes que imitam marcas e páginas destinadas a enganar terceiros ficam fora do laboratório.

Na [aula anterior](16-domain-name-and-dns-basics.md), o domínio foi separado do endereço IP e da URL, e o caminho entre o resolvedor recursivo e o servidor DNS autoritativo foi apresentado. Agora esse modelo será aplicado: um registro será publicado na zona DNS para que um nome sob controle do estudante resulte no IPv4 público do servidor do laboratório.

## O estado inicial

Registrar um domínio concede o direito de usá-lo durante determinado período, mas não escolhe sozinho qual servidor atenderá cada nome. Antes da configuração, são necessários dois valores:

- um domínio neutro administrado pelo estudante, representado aqui por `<DOMINIO-DO-LAB>`;
- o IPv4 público atual da instância, representado por `<IP-PUBLICO-DO-LAB>`.

O endereço não deve ser copiado de uma aula antiga sem conferência. Instâncias de nuvem podem receber outro IP público depois de serem interrompidas e iniciadas, a menos que se use um endereço estático configurado para esse fim. Um registro desatualizado pode levar visitantes ao sistema errado se o provedor reutilizar o endereço.

O painel varia entre provedores, mas normalmente solicita **tipo**, **nome ou host**, **valor ou resposta** e **TTL**. Esses campos representam dados DNS padronizados; apenas os rótulos e a aparência da interface mudam.

## Associando o domínio ao IPv4 com um registro A

Um registro **A** informa qual endereço IPv4 corresponde a um nome. Para representar o domínio principal no painel, muitos provedores usam `@` ou deixam o campo de nome vazio. Essa convenção pertence à interface de gerenciamento; o caractere `@` não passa a fazer parte do domínio consultado.

Uma configuração conceitual para o laboratório seria:

| Campo | Valor ilustrativo | Significado |
|---|---|---|
| Tipo | `A` | A resposta contém um endereço IPv4 |
| Nome | `@` | Domínio principal da zona no painel deste exemplo |
| Valor | `<IP-PUBLICO-DO-LAB>` | Interface pública que deverá receber a conexão |
| TTL | valor oferecido pelo provedor | Tempo durante o qual a resposta pode permanecer em cache |

É comum dizer que esse registro “redireciona todas as solicitações” para o servidor, mas isso mistura duas operações. O DNS apenas responde com dados, neste caso um IPv4. Um **redirecionamento HTTP** é uma resposta do servidor, como `301`, `302` ou `303`, que orienta o navegador a solicitar outra URL. Criar um registro A não produz nenhuma dessas respostas.

Depois de obter o IP pelo DNS, o cliente ainda precisa alcançar a rede, passar pelos controles de entrada, conectar-se à porta do serviço e enviar uma requisição ao servidor web. Se o Apache estiver parado ou a porta estiver bloqueada, o DNS poderá estar correto e a página ainda assim não abrirá.

## Criando um nome alternativo com CNAME

Um registro **Canonical Name (CNAME)** declara que um nome é um alias de outro nome. Em vez de repetir um endereço IP, o resolvedor segue o alvo canônico e procura os registros de endereço associados a ele.

Para um subdomínio neutro, o painel poderia receber:

| Campo | Valor ilustrativo | Significado |
|---|---|---|
| Tipo | `CNAME` | O nome será um alias |
| Nome | `portal-lab` | Forma `portal-lab.<DOMINIO-DO-LAB>` |
| Valor | `<DOMINIO-DO-LAB>` | Nome canônico controlado pelo estudante |

O valor de um CNAME deve ser um **nome**, não um endereço IP. Também não se deve combinar um CNAME com outros registros de dados no mesmo nome. Por esse motivo, o CNAME tradicional costuma ser usado em subdomínios; alguns provedores oferecem recursos próprios, como flattening, para obter comportamento semelhante no domínio principal.

Ao acessar `portal-lab.<DOMINIO-DO-LAB>`, o navegador continua tratando esse nome como o host solicitado, mesmo que o DNS o tenha conduzido ao mesmo IP do domínio principal. O Apache precisa reconhecer o host ou possuir uma configuração padrão apropriada. DNS compartilhado não significa configuração web compartilhada automaticamente.

## Por que a mudança pode parecer demorada

O painel costuma atualizar os servidores autoritativos rapidamente, mas resolvedores intermediários podem conservar respostas anteriores até o TTL terminar. Também pode existir **cache negativo**, que preserva por algum tempo a informação de que um nome não existia.

Esse comportamento é frequentemente chamado de “propagação DNS”. Não significa que o novo registro seja copiado para todos os servidores DNS do mundo. Na prática, diferentes caches expiram em momentos diferentes e voltam a consultar a fonte autoritativa quando precisam de uma resposta nova.

Repetir alterações durante esse intervalo dificulta o diagnóstico. Primeiro, confira no painel se tipo, nome e valor foram salvos corretamente. Depois, compare a resposta autoritativa com a resposta do resolvedor usado pelo computador.

## Verificando cada camada

No Windows, `Resolve-DnsName` permite consultar o registro sem depender do carregamento da página:

```powershell
Resolve-DnsName <DOMINIO-DO-LAB> -Type A
```

`Resolve-DnsName` é o programa consultado pelo PowerShell; `<DOMINIO-DO-LAB>` é o nome sob teste; e `-Type A` limita a resposta ao mapeamento IPv4. O resultado esperado é o IP público atual do laboratório. Uma resposta antiga sugere cache; `NXDOMAIN` informa que o nome consultado não existe segundo aquela resolução; timeout indica ausência de resposta e não prova que o registro está incorreto.

Em Linux, a consulta equivalente pode ser feita com `dig` quando o pacote correspondente estiver instalado:

```bash
dig A <DOMINIO-DO-LAB>
```

O comando consulta DNS; a seção `ANSWER` deve ser interpretada junto com o servidor consultado, o TTL e o código de status. Receber o endereço esperado comprova a resolução naquele caminho, mas ainda não comprova que o serviço web está acessível.

Depois do DNS, uma requisição de cabeçalhos testa a camada HTTP sem enviar dados de formulário:

```bash
curl --head http://<DOMINIO-DO-LAB>
```

`curl` atua como cliente; `--head` solicita apenas os cabeçalhos; a URL define HTTP e o host. Uma resposta HTTP demonstra que resolução, rota, porta e servidor participaram do fluxo. Ela não garante que o conteúdo esteja correto, que HTTPS esteja configurado ou que o site seja confiável.

## Um alerta de reputação não é um teste bem-sucedido

Na demonstração, o domínio carregou uma página copiada e o navegador exibiu um aviso de site enganoso. Isso mostrou que o nome resolvia e que algum servidor respondeu, mas também indicou que mecanismos de proteção classificaram o conteúdo ou a infraestrutura como perigoso.

O aviso não aparece simplesmente porque a conexão usa HTTP, e habilitar HTTPS não é uma forma legítima de removê-lo. Em um laboratório próprio que receba esse bloqueio, a atitude segura é interromper a publicação, remover o conteúdo problemático e revisar a infraestrutura. Não se deve orientar visitantes a ignorar a proteção.

O curso também propôs subdomínios e variações ortográficas de marcas para aumentar a credibilidade da página. Fora de um teste formalmente autorizado, isso caracteriza impersonação e pode viabilizar fraude. Mesmo em conscientização interna, participantes, escopo, coleta de dados, retenção e encerramento precisam de aprovação prévia; credenciais reais não devem ser solicitadas nem armazenadas.

## Encerrando sem deixar apontamentos ativos

Ao concluir o exercício, remova os registros A e CNAME que não serão mais usados, desligue a página de treinamento, restrinja as portas abertas e confira se o domínio possui renovação automática. Se a instância for encerrada, elimine imediatamente qualquer registro que ainda aponte para seu antigo IP.

A evidência central desta aula deve ser construída em camadas: primeiro o nome retorna o IP esperado; depois a conexão alcança o serviço; por fim o servidor responde ao host solicitado. Essa separação evita atribuir ao DNS funções que pertencem à rede, ao firewall, ao Apache ou ao protocolo HTTP.