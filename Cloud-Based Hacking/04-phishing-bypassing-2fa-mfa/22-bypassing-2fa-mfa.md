# Do phishlet carregado à sessão autenticada

Você colocou os arquivos na máquina, abriu o programa e esperou que ele os encontrasse. Só que baixar e encontrar não são a mesma coisa. Um livro guardado na estante errada continua existindo; quem procura na estante indicada pode não vê-lo. Com arquivos, o endereço da busca tem um papel parecido.

Esta aula começa por dois problemas relatados no laboratório: as regras estavam em uma pasta diferente da examinada pelo programa, e uma lista de bloqueio interferia no próprio acesso autorizado. O estudante informou que a carga e a correção do bloqueio funcionaram; a autenticação completa e a reutilização de sessão ainda não foram reproduzidas. O estudo pertence a infraestrutura própria, com aplicação e identidades sintéticas. Credenciais, códigos MFA e sessões de serviços de terceiros ficam fora dele, mesmo quando a conta é do operador.

Precisamos manter as duas histórias separadas. Corrigir a carga de arquivos e um bloqueio não comprova uma autenticação completa. E o título “bypass de 2FA/MFA” também precisa de tradução técnica: no modelo estudado, o participante resolve o desafio verdadeiro; a exposição possível vem da sessão que a aplicação emite **depois** dessa validação.

## Carregando as regras que faltavam

O objeto procurado pelo programa é um **phishlet**, arquivo YAML com regras de um fluxo web. Ele descreve hosts, parâmetros e elementos de sessão que a ferramenta deve reconhecer. Não é apenas o desenho de uma tela de login, nem uma regra que serve para qualquer aplicação. Se o comportamento do destino muda, sua compatibilidade pode mudar também.

No relato do estudante, o executável estava em `/home/kali/evilginx2/build/evilginx`. Os arquivos adicionais haviam sido obtidos em outra pasta. O histórico abaixo foi normalizado apenas para retirar os números do `history` e os caracteres `\n` usados como quebras de linha. É um registro do que foi executado, não uma recomendação de regras para serviços de terceiros.

```bash
cd /home/kali
git clone https://github.com/An0nUD4Y/Evilginx-Phishlets.git
cd Evilginx-Phishlets
ls
cd ../evilginx2
build/evilginx -p phishlets
```

Vamos localizar os objetos antes de tirar conclusões. A partir de `/home/kali`, `git clone` criou `/home/kali/Evilginx-Phishlets`. O estudante entrou nessa pasta e usou `ls` para consultar o conteúdo. Depois, `cd ../evilginx2` levou o shell para a pasta do projeto compilado.

Agora leia a última linha como duas perguntas. **Onde está o programa?** Em `build/evilginx`, a partir da pasta atual. **Onde procurar as regras?** No diretório indicado por `-p phishlets`, também a partir da pasta atual. Portanto, aquela execução procurava `/home/kali/evilginx2/phishlets`, não a pasta recém-clonada.

Esse era o desencontro. Os YAML podiam existir e continuar fora da busca. O programa não estava obrigado a percorrer o computador procurando o que o operador talvez quisesse usar. O local indicado precisava corresponder ao local dos arquivos.

O ajuste registrado foi:

```bash
cp /home/kali/Evilginx-Phishlets/*.yaml /home/kali/evilginx2/phishlets/
build/evilginx -p phishlets
```

O shell expande `*.yaml` para os nomes encontrados na origem. `cp` copia esses arquivos para o destino, e a nova execução lê o diretório informado. O efeito dessa mudança é a localização das regras. Ela não publica DNS, não emite certificado e não realiza uma autenticação.

Há uma ressalva importante sobre a origem: esse repositório é comunitário, não o projeto oficial do Evilginx. Sua presença no histórico não é um selo de auditoria. Regras podem estar antigas, incompatíveis ou conter transformações não revisadas. Elas exigem leitura e associação a um commit conhecido antes de qualquer exercício próprio.

A cópia também pode sobrescrever arquivos de mesmo nome. Esse é mais um motivo para o relato pertencer a uma instância descartável, nunca a um ambiente de produção. O aprendizado duradouro aqui é relacionar **pasta atual, caminho relativo e diretório de carga**, não aprovar automaticamente tudo o que foi baixado.

## Quando o próprio IP entra na blacklist

Depois dos arquivos, surgiu outro tipo de estado. O Evilginx mantém uma **blacklist**, lista de bloqueio armazenada no diretório de configuração de quem iniciou o processo. Nessa execução, a identidade era `root`, e o arquivo estava em:

```text
/root/.evilginx/blacklist.txt
```

O nome lista de bloqueio já sugere sua finalidade, mas é preciso observar o efeito real. Na configuração padrão descrita para a ferramenta, uma requisição considerada não autorizada pode registrar o IP de origem. Isso pode ocorrer ao visitar um endereço sem correspondência com uma entrada ativa ou relacionada a uma regra desabilitada ou oculta.

Assim, uma tentativa de conferir o domínio durante a preparação pode alterar o ambiente: o endereço do próprio teste entra na lista. “Eu só abri a página” não garante que o sistema permaneceu no mesmo estado.

Qual IP o servidor vê? Muitas redes usam **Network Address Translation (NAT)**, tradução de endereços no roteador. O computador pode ter um IP privado, enquanto o destino observa o IP público de saída compartilhado por vários clientes. Bloquear esse endereço pode alcançar mais de uma máquina da mesma rede.

Isso explica uma consequência do bloqueio; não é uma orientação para mudar de origem e contorná-lo. No diagnóstico autorizado, o trabalho é identificar a entrada indevida e sua causa. A correção relatada pelo estudante incluiu:

```bash
rm /root/.evilginx/blacklist.txt
build/evilginx -p phishlets
```

O detalhe decisivo está no alcance de `rm`: foi removido o **arquivo inteiro**, não apenas o endereço do estudante. Outras entradas existentes também seriam apagadas. Na inicialização seguinte, a ferramenta recriou o arquivo vazio e carregou novamente a lista.

Há dois lugares para o estado existir: disco e memória. Apagar o arquivo não garante que um processo ainda aberto esqueça os endereços que já leu. Por isso, a nova execução faz parte da explicação do resultado. É semelhante a corrigir uma anotação enquanto alguém continua consultando uma cópia antiga, mas aqui a distinção técnica é entre armazenamento persistente e estado do processo.

Não transforme esse histórico em receita para qualquer erro. A remoção não corrige DNS, TLS nem sintaxe de YAML. Só faz sentido investigar essa causa depois de confirmar um bloqueio indevido do acesso autorizado. O cuidado é parar, inspecionar e preservar as entradas ainda necessárias, não adotar exclusão total como solução padrão.

O caminho também depende do usuário. Uma execução como `kali` usaria normalmente `/home/kali/.evilginx`, não `/root/.evilginx`. Arquivo com o mesmo nome em diretórios de usuários diferentes não é o mesmo arquivo.

Segundo o relato do estudante, a ferramenta passou a funcionar depois da cópia, da limpeza e da nova execução com `-p phishlets`. Sem a saída detalhada do console, não podemos afirmar quais YAML foram aceitos ou qual mensagem específica desapareceu. O relato sustenta o diagnóstico dessas condições, não um login completo já comprovado.

## Associando um phishlet ao domínio do laboratório

Uma regra encontrada ainda precisa corresponder à configuração do exercício. No console interativo, `phishlets` lista as regras reconhecidas. Expressões estranhas da tradução, como “lista de peixes” ou “fish lit”, eram tentativas de reconhecer esse mesmo nome técnico.

Na versão apresentada, o instrutor associou a regra a um **hostname**, nome do host usado na configuração, e mudou seu estado:

```text
phishlets hostname <PHISHLET-DO-LAB> <DOMINIO-DO-LAB>
phishlets enable <PHISHLET-DO-LAB>
```

Essas linhas pertencem ao console da ferramenta, não ao shell Linux. A primeira define a associação com o domínio controlado; a segunda habilita a regra. São mudanças internas. Habilitar não cria registros no DNS nem garante uma porta em escuta.

No curso, uma tentativa inicial de ativação falhou ao obter o certificado e revelou dois subdomínios sem os registros esperados. O erro trouxe uma pista: aquela regra dependia de nomes que ainda não apontavam corretamente. O instrutor criou os registros correspondentes, aguardou a atualização observada no DNS e tentou de novo.

O erro não é uma cerimônia obrigatória da primeira execução. Ele aparece quando há uma condição ausente ou incompatível. E os subdomínios não formam uma lista universal: dependem das regras e do ambiente. Copiar nomes de outra apresentação sem ler o diagnóstico pode apenas criar uma configuração sem relação com o problema.

Um registro `A` fornece um IPv4 associado ao nome. Depois vêm rota, Security Group, firewall local e processo em escuta. Se a resolução funciona, mas o filtro bloqueia, o serviço não é alcançado. Se o filtro permite, mas não existe processo atendendo, o resultado também não está completo. Cada camada tem uma pergunta própria.

O HTTPS acrescenta a identidade criptográfica de cada nome. A emissão de certificado comprova condições de controle do domínio conforme o desafio, não honestidade do conteúdo. E continuam existindo dois trechos: TLS do navegador até o proxy e TLS do proxy até a aplicação. Nenhuma confirmação no console transforma esses trechos em uma quebra da criptografia do serviço.

## Criando a rota de entrada

“A regra está habilitada; qual endereço representa a entrada do teste?” Na ferramenta, esse objeto recebe o nome **lure**. As linhas mostradas pelo instrutor para criar e consultar a entrada foram:

```text
lures create <PHISHLET-DO-LAB>
lures
```

`create` cria o objeto associado à regra, e a consulta lista entradas e identificadores. No exemplo, a primeira recebeu ID `0` e um caminho aleatório. Esse zero não é uma porta, um IP ou uma indicação de que alguém já se autenticou: é apenas a referência interna daquele objeto.

O curso também mostrou a edição do caminho e a consulta da URL:

```text
lures edit 0 path <CAMINHO-DO-LAB>
lures get-url 0
```

`path` é a parte da URL depois do domínio. Trocar o caminho muda a rota da entrada; não troca o endereço resolvido pelo DNS, o certificado, a regra associada ou o escopo autorizado. Identificadores parecidos não tornam essas operações equivalentes.

Aqui, a entrada pertence exclusivamente ao domínio e aos participantes do laboratório. O uso de uma regra de serviço externo pelo instrutor não concede permissão para reproduzir esse serviço como destino. Uma conta pessoal também não basta: quem autoriza o teste precisa ter autoridade sobre os componentes envolvidos.

O caminho de laboratório deve identificar uma rota de teste, não imitar uma marca para induzir terceiros ao erro. A aplicação de destino e as identidades sintéticas precisam existir dentro do ambiente autorizado.

## O que acontece durante a autenticação

Um registro de visita aparece. Isso significa que a conta está autenticada? Não. O programa pode ter registrado uma interação antes de a aplicação aceitar qualquer fator. Para entender a sequência, acompanhe quem toma cada decisão.

O navegador conversa por HTTPS com o intermediário, que abre outro trecho HTTPS até a aplicação controlada. As entradas sintéticas e as respostas passam por esse caminho; a decisão de validar os fatores e emitir a sessão continua na aplicação.

1. o navegador se conecta por HTTPS ao domínio do laboratório;
2. o Evilginx abre outra conexão com a aplicação controlada;
3. usuário e senha sintéticos atravessam o proxy e são encaminhados;
4. a aplicação solicita o segundo fator;
5. a resposta MFA também atravessa o proxy em tempo real;
6. a aplicação valida os fatores e emite os dados da sessão autenticada;
7. o proxy encaminha a resposta ao navegador e pode registrar os elementos que o phishlet reconhece como tokens.

A fronteira importante está entre **apresentar os fatores** e **ter os fatores aceitos**. Antes da validação, observar uma senha não comprova uma **sessão autenticada**. Depois, a aplicação pode emitir um **token** que representa esse estado nas próximas requisições.

O token não precisa conter a senha ou o código MFA. Pense nele como uma referência temporária que o serviço reconhece, não como a gravação de todo o formulário. É por representar acesso que ele precisa permanecer secreto.

No console da apresentação, os registros podiam ser consultados assim:

```text
sessions
sessions <ID-DA-SESSAO>
```

`sessions` lista informações como regra, horário, IP e indicação de tokens reconhecidos. O identificador seleciona um registro para detalhamento. Esse detalhe pode conter credenciais e cookies válidos: não deve ser copiado para uma captura pública só porque apareceu em uma ferramenta de estudo.

O instrutor apresentou cookies sendo importados em outro navegador, que apareceu autenticado sem repetir os fatores. Esse resultado pertence à demonstração do curso, não a uma reprodução feita aqui. A diferença é essencial: ter o valor de um token e conseguir que outro cliente seja aceito não são a mesma observação.

A aplicação pode exigir vários tokens, manter estado no servidor, vincular a sessão ao dispositivo, considerar mudanças de contexto, impor prazo ou pedir nova autenticação. O teste de aceitação depende dessas condições. Por isso, “encontrei um cookie” não permite concluir “tenho controle total”.

## O que foi e o que não foi validado

Vamos voltar às evidências disponíveis. O estudante relatou funcionamento depois de colocar os YAML no local indicado, remover o bloqueio sob `root` e reiniciar a ferramenta. Esse é o resultado registrado do laboratório. Não há uma saída detalhada que permita estendê-lo automaticamente a cada regra ou a todo o fluxo.

O material ainda não comprova:

- todos os phishlets copiados e sua compatibilidade com a versão compilada;
- resolução DNS de cada hostname necessário;
- emissão e cadeia de confiança do certificado TLS;
- autenticação completa contra uma aplicação controlada;
- captura de uma sessão sintética;
- aceitação ou recusa da sessão em outro navegador.

Essa lista não diminui o valor do diagnóstico. Ela impede que uma descoberta pequena e útil vire uma conclusão grande demais. Abrir o programa confirma execução; resolver um nome confirma uma resposta DNS; receber HTTPS confirma condições daquele trecho; nenhum desses fatos substitui a evidência dos outros.

## Encerrando sem deixar credenciais ou infraestrutura expostas

A última pergunta do exercício não é “funcionou?”, mas “o que ficou ligado ou guardado?”. Desabilite as entradas e regras temporárias, pare o processo e revise registros de sessão, YAML de terceiros, banco local e dados sintéticos. Se houver sessão na aplicação, sua revogação precisa acontecer lá: apagar um arquivo da ferramenta não faz o servidor esquecer um acesso já concedido.

Depois, confira DNS, portas e instância. Remova apontamentos temporários, feche regras sem função e termine a máquina quando ela não for mais necessária. Sair do SSH encerra a conversa com o terminal remoto; não desliga automaticamente a VM nem sua cobrança.

Certificados, mudanças de rede, logs, histórico e lista de bloqueio podem ajudar a reconstruir o exercício. Para o livro, preserve somente as evidências autorizadas e substitua identidades, IPs, domínios e tokens por valores fictícios. O objetivo é mostrar **o que cada resultado comprova**, sem publicar o segredo que produziria o risco estudado.
