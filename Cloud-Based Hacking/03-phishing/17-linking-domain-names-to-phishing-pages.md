# Publicando registros DNS para o laboratório

> **Status:** publicado.
>
> **Título original:** Linking Domain Names to Phishing Pages
>
> **Escopo:** configuração de DNS para um domínio neutro, uma página de treinamento e um servidor sob controle do estudante. Nomes que imitam marcas e páginas destinadas a enganar terceiros ficam fora do laboratório.

O que precisa ser publicado para que um nome encontre a instância certa? A [aula anterior](16-domain-name-and-dns-basics.md) separou domínio, IP e URL e acompanhou a procura pelo DNS autoritativo. Agora o foco é o conteúdo da zona: os registros que permitem resolver um nome controlado pelo estudante para o IPv4 público do laboratório, sem atribuir ao DNS o trabalho do servidor web.

## O estado inicial

O registro fornece um direito de uso com prazo, mas não escolhe a máquina que atenderá um host. Para preparar o apontamento, precisamos conferir dois dados independentes:

- um domínio neutro administrado pelo estudante, representado aqui por `<DOMINIO-DO-LAB>`;
- o IPv4 público atual da instância, representado por `<IP-PUBLICO-DO-LAB>`.

O IP deve ser conferido no estado atual da instância, não copiado de uma anotação antiga. Ao parar e iniciar uma máquina de nuvem, seu endereço público pode mudar, salvo quando há um endereço estático configurado para isso. Se o valor antigo continuar publicado e for reutilizado pelo provedor, o nome poderá conduzir a um sistema que já não pertence ao laboratório.

O painel é uma interface para publicar dados DNS padronizados. Normalmente pede **tipo**, **nome ou host**, **valor ou resposta** e **TTL**, o tempo de cache. Os rótulos variam entre provedores, mas compreender o papel de cada campo permite reconhecer a mesma configuração em outra interface.

## Associando o domínio ao IPv4 com um registro A

Para associar um nome a um IPv4, usamos o tipo de registro **A**. Muitos painéis representam o domínio principal com `@` ou com o campo de nome vazio. Isso é uma convenção de gerenciamento da raiz da zona, não uma instrução para acrescentar `@` ao domínio que o visitante consultará.

Este exemplo conceitual relaciona os campos ao efeito esperado, mantendo os dados reais do ambiente substituídos por marcadores:

| Campo | Valor ilustrativo | Significado |
|---|---|---|
| Tipo | `A` | A resposta contém um endereço IPv4 |
| Nome | `@` | Domínio principal da zona no painel deste exemplo |
| Valor | `<IP-PUBLICO-DO-LAB>` | Interface pública que deverá receber a conexão |
| TTL | valor oferecido pelo provedor | Tempo durante o qual a resposta pode permanecer em cache |

Dizer que o registro “redireciona todas as solicitações” sugere um efeito que ele não produz. A resposta DNS fornece o endereço. Um **redirecionamento HTTP**, por outro lado, vem do atendimento web: um status como `301`, `302` ou `303` orienta o navegador a solicitar outra URL. Publicar um endereço no DNS não cria esse status nem troca sozinho a URL exibida.

Depois da resolução, o cliente ainda precisa alcançar a rede de destino, passar pelos controles de entrada e conectar-se à porta atendida pelo processo web. Um Apache parado ou uma porta bloqueada impede a página mesmo quando o DNS está correto. Essa independência orienta o diagnóstico: corrigir um registro não inicia um serviço.

## Criando um nome alternativo com CNAME

Quando a intenção é fazer um nome acompanhar outro nome, entra o registro **Canonical Name (CNAME)**. Ele declara um alias, não um endereço. O resolvedor segue o alvo canônico e procura seus registros de endereço, evitando repetir diretamente o mesmo IPv4 em cada alias. Ainda é necessário que o nome de destino possa ser resolvido.

No exemplo de subdomínio neutro abaixo, o alvo continua sendo um nome administrado pelo estudante:

| Campo | Valor ilustrativo | Significado |
|---|---|---|
| Tipo | `CNAME` | O nome será um alias |
| Nome | `portal-lab` | Forma `portal-lab.<DOMINIO-DO-LAB>` |
| Valor | `<DOMINIO-DO-LAB>` | Nome canônico controlado pelo estudante |

O alvo deve ser um **nome**. Um IP não é valor de CNAME, e o nome que declara esse alias não deve reunir outros registros de dados. Por isso, o CNAME tradicional é comum em subdomínios. Alguns provedores oferecem flattening ou recursos semelhantes no domínio principal, mas essas soluções não apagam a diferença entre alias e registro de endereço.

Se o visitante pede `portal-lab.<DOMINIO-DO-LAB>`, esse continua sendo o host solicitado pelo navegador. A resolução pode conduzi-lo ao mesmo IP do domínio principal sem trocar o nome usado na camada web. O Apache precisa reconhecer esse host ou dispor de uma configuração padrão apropriada. Compartilhar um destino DNS não configura automaticamente o conteúdo de ambos os nomes.

## Por que a mudança pode parecer demorada

Salvar o registro e perceber a mudança no computador são momentos diferentes. A fonte autoritativa costuma ser atualizada rapidamente; resolvedores podem, porém, conservar respostas anteriores até expirar o TTL. Existe ainda **cache negativo**, que armazena temporariamente uma resposta de inexistência. Assim, um nome recém-criado pode continuar parecendo ausente para quem o consultou antes.

A expressão “propagação DNS” costuma descrever essa diferença de percepção. Não significa copiar o registro novo para todos os servidores DNS do mundo. Cada cache tem seu momento de expiração e volta a consultar quando precisa de informação nova. Dois clientes podem, portanto, discordar temporariamente sem que o painel tenha perdido a configuração.

Mudar os valores repetidamente durante a espera mistura estados e dificulta explicar a resposta recebida. Primeiro, confira tipo, nome e valor salvos no painel. Depois, diferencie o que responde a fonte autoritativa do que responde o resolvedor do computador. A existência de cache é uma hipótese a verificar, não uma explicação automática para qualquer falha.

## Verificando cada camada

A verificação inicial deve isolar o DNS. No PowerShell do Windows, `Resolve-DnsName` consulta o registro sem depender de o navegador conseguir carregar o site:

```powershell
Resolve-DnsName <DOMINIO-DO-LAB> -Type A
```

O cmdlet `Resolve-DnsName` recebe em `<DOMINIO-DO-LAB>` o nome próprio a testar; `-Type A` seleciona o mapeamento IPv4. Compare a resposta com o endereço público atual da instância. Um valor antigo pode indicar cache. `NXDOMAIN` informa inexistência segundo aquela resolução, enquanto timeout indica que não houve resposta no prazo e não demonstra um registro incorreto.

Se a consulta ocorrer em Linux, `dig` oferece a verificação equivalente, desde que o pacote correspondente esteja instalado:

```bash
dig A <DOMINIO-DO-LAB>
```

Nesse comando, `A` escolhe o tipo e o argumento seguinte representa o nome consultado. Leia `ANSWER` junto com o servidor que respondeu, o TTL e o status. O endereço esperado comprova a resolução por aquele caminho, mas o teste ainda não conversou com o Apache nem demonstrou que a porta web está acessível.

Com a resolução examinada, uma requisição de cabeçalhos pode avançar para HTTP sem preencher nem transmitir formulário:

```bash
curl --head http://<DOMINIO-DO-LAB>
```

Aqui `curl` é o cliente, `--head` pede cabeçalhos e a URL escolhe HTTP e o host do laboratório. Receber uma resposta mostra que o teste avançou pela resolução, pela rota e pela porta até um serviço que respondeu. A conclusão para aí: não valida o conteúdo completo, não configura HTTPS e não atesta confiabilidade.

## Um alerta de reputação não é um teste bem-sucedido

O instrutor mostrou o domínio carregando uma página copiada e recebendo um alerta de site enganoso. Essa observação registra resolução e resposta de algum servidor, mas também uma classificação de perigo pelos mecanismos de proteção. Ler a tela apenas como sucesso de publicação apagaria parte essencial da evidência.

O alerta não deve ser atribuído simplesmente ao uso de HTTP. Reputação de conteúdo e proteção do transporte são verificações diferentes; instalar um certificado não é correção legítima da primeira. Caso o laboratório receba esse bloqueio, interrompa a publicação, retire o material problemático e revise o ambiente, sem pedir a visitantes que ignorem a proteção.

A proposta do curso de aproximar subdomínios e grafias de marcas também exige limite explícito. Fora de autorização formal, essa impersonação pode viabilizar fraude; ela não é necessária ao estudo dos registros. Mesmo uma campanha interna precisa de aprovação prévia quanto a participantes, escopo, coleta, retenção e encerramento. Credenciais reais não devem ser solicitadas ou armazenadas.

## Encerrando sem deixar apontamentos ativos

O apontamento deve acompanhar o ciclo de vida da infraestrutura. Ao concluir, retire registros A e CNAME sem uso, desligue a página, restrinja portas e confira a renovação automática do domínio. Se encerrar a instância, remova imediatamente as referências ao IP antigo, para que o nome não continue anunciando um destino que deixou de representar o laboratório.

A conclusão depende de uma cadeia de evidências: o nome retorna o endereço esperado, a conexão alcança a porta e o servidor responde ao host solicitado. Se uma parte falhar, não declare a anterior incorreta sem investigar. Manter essas verificações separadas preserva os papéis de DNS, rede, firewall, Apache e HTTP.