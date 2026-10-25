# Emitindo e instalando um certificado com Certbot

> **Status:** publicado.
>
> **Título original:** Enabling HTTPS on Phishing Pages
>
> **Escopo:** emissão de certificado para um domínio neutro e um servidor Apache sob controle do estudante. O procedimento não deve ser usado para dar aparência legítima a páginas que imitam terceiros.

Como sair da ideia de transporte protegido para uma configuração que possa ser conferida? A [aula anterior](18-introduction-to-https.md) explicou confidencialidade, integridade e autenticação no HTTP protegido por TLS. Nesta sequência, a Let's Encrypt valida o controle do domínio e emite o certificado; o Certbot coordena o pedido e sua integração ao Apache. O objetivo é compreender o encadeamento e suas verificações, não presumir sucesso apenas porque um instalador terminou.

Há responsabilidades separadas mesmo quando um programa automatiza parte do trabalho. DNS fornece o destino; **ACME**, o protocolo de automação, organiza o desafio de controle; **Certbot** solicita e administra o material; Apache o apresenta ao atender TLS. Essa divisão permite interpretar uma falha pela camada que a produziu. Nem a autoridade certificadora corrige a configuração local do Apache, nem uma regra de Security Group corrige um nome DNS incorreto.

## Preparando a validação

O controle do domínio precisa de uma evidência que a autoridade consiga verificar. Com o plugin Apache, o método normalmente usado é **HTTP-01**. A Let's Encrypt fornece um token de desafio, e o cliente ACME prepara uma resposta temporária sob `/.well-known/acme-challenge/`. Os servidores de validação procuram essa resposta usando o domínio solicitado, em vez de confiar apenas no que aparece no terminal do administrador.

Antes de iniciar o pedido, as condições abaixo precisam ser verificadas porque cada uma pode impedir essa busca externa:

- cada nome solicitado resolve publicamente para a instância correta;
- registros A e AAAA não conduzem a servidores diferentes por engano;
- o Apache está ativo e reconhece o nome no `VirtualHost` correspondente;
- a porta TCP `80` pode ser alcançada pela Internet durante o desafio HTTP-01;
- não existe proxy ou redirecionamento enviando o caminho do desafio a outro sistema;
- a página publicada é neutra e não coleta dados sensíveis.

É importante não trocar a porta do desafio pela porta do serviço final. HTTP-01 é verificado em `80`; HTTPS será atendido em `443`. Permitir apenas `443` não atende a essa validação. Se as futuras renovações continuarem usando HTTP-01, a disponibilidade de `80` permanecerá uma dependência do processo, não apenas uma necessidade da primeira emissão.

## Instalando sem manter uma sessão root

O instrutor usou um shell permanente de `root` na demonstração. Para o laboratório, não é necessário conservar esse nível de privilégio durante toda a sessão. Uma conta administrativa pode solicitar elevação com `sudo` nas operações necessárias, reduzindo o alcance de um comando incorreto digitado fora dessas operações.

As linhas de instalação abaixo se referem ao Kali/Debian do curso e devem ser interpretadas nesse contexto de sistema e repositórios:

```bash
sudo apt update
sudo apt install certbot python3-certbot-apache
```

Na instância, `sudo apt update` atualiza a lista local de pacotes disponíveis, sem atualizar todos os programas já instalados. Em seguida, `apt install` solicita o cliente e `python3-certbot-apache`, plugin que integra validação e instalação ao Apache. Antes de aceitar, examine dependências e origem dos repositórios; a lista solicitada e o resultado da instalação são estados diferentes.

Esses nomes de pacotes não devem ser generalizados a qualquer distribuição ou servidor web. Se o ambiente instalado não corresponder ao apresentado, use as [instruções oficiais do Certbot](https://certbot.eff.org/instructions) para essa combinação. Misturar métodos e origens para contornar uma diferença de versão pode introduzir outra causa de falha em vez de resolver a primeira.

A próxima evidência deve confirmar duas pré-condições locais: encontrar o executável instalado e validar a configuração do Apache antes de permitir alterações automáticas.

```bash
certbot --version
sudo apache2ctl configtest
```

O primeiro comando, `certbot --version`, informa qual versão foi executada. O segundo usa `apache2ctl configtest`, com privilégio administrativo, para analisar a sintaxe dos arquivos do Apache. Se ele apontar erro, essa configuração deve ser corrigida antes do pedido. Conseguir consultar a versão do cliente não compensa uma configuração web inválida.

## Solicitando somente os nomes necessários

Depois de conferir DNS e alcance em `80`, o pedido pode especificar exatamente os hosts neutros controlados pelo laboratório. O plugin Apache reúne as funções de obter e instalar o certificado:

```bash
sudo certbot --apache \
  -d <DOMINIO-DO-LAB> \
  -d portal-lab.<DOMINIO-DO-LAB>
```

Os trechos entre `<` e `>` são marcadores de documentação, não nomes prontos para o shell. Antes de executar, substitua-os pelos domínios neutros realmente controlados. Digitar os sinais literalmente não representa a configuração pretendida e pode ser interpretado de outra forma pelo shell.

A execução solicita elevação com `sudo` porque o cliente acessará configurações protegidas. `certbot` inicia a conversa ACME, enquanto `--apache` escolhe o plugin que pode validar e instalar no Apache. Cada ocorrência de `-d` acrescenta um nome ao pedido. Todos os nomes incluídos precisam satisfazer a validação e integrar o certificado resultante.

A lista deve corresponder aos hosts já preparados para essa instância. Se o subdomínio ainda não aponta corretamente, deixe-o fora do pedido até configurá-lo. Uma autorização parcial não deve ser usada para tratar como resolvida uma dependência que continua ausente.

Na primeira execução, a versão instalada pode pedir contato por e-mail, aceite dos termos da autoridade e uma escolha de redirecionamento de HTTP para HTTPS. Leia as opções reais, pois a interface pode variar. E-mail e nomes do laboratório podem ficar em configurações e logs administrativos; isso não os torna apropriados para aparecer em capturas públicas.

## O que acontece durante a emissão

Durante a emissão, o cliente cria ou seleciona uma conta ACME e prepara o desafio de cada nome. A Let's Encrypt consulta DNS e busca a resposta por HTTP público. Quando encontra o conteúdo esperado, obtém evidência de controle operacional do domínio naquele momento. Essa é uma comprovação delimitada: não identifica a empresa representada na página nem avalia se o conteúdo é legítimo.

Após autorizar os nomes, a autoridade assina o certificado. O material administrado fica sob `/etc/letsencrypt/`, e o plugin ajusta o `VirtualHost`, configuração do Apache que associa o site às suas opções, para usar cadeia e chave. Os caminhos comuns abaixo são referências mantidas pelo Certbot, não arquivos que precisam ser copiados para a pasta da página:

```text
/etc/letsencrypt/live/<NOME-DO-CERTIFICADO>/fullchain.pem
/etc/letsencrypt/live/<NOME-DO-CERTIFICADO>/privkey.pem
```

Os dois arquivos têm sensibilidades diferentes. `fullchain.pem` reúne o certificado do servidor e a cadeia intermediária apresentada ao cliente; `privkey.pem` guarda a chave privada. Esta deve permanecer secreta, fora de notas, repositórios, capturas e diretórios web. Também não se deve apagar manualmente o conteúdo de `/etc/letsencrypt/`: versões e referências ali mantidas participam da administração e da renovação.

Para revisar os certificados administrados, é possível consultar seus metadados sem abrir nem mostrar o conteúdo das chaves:

```bash
sudo certbot certificates
```

A consulta apresenta cobertura de nomes, validade e caminhos de arquivos. Ela ajuda a conferir o pedido, mas ainda pode revelar domínio, e-mail e outros identificadores. Remova esses dados antes de compartilhar a saída como evidência pública.

## Abrindo a porta HTTPS na nuvem

A instalação local não modifica o **Security Group**. Esse controle de tráfego da nuvem precisa permitir o alcance previsto para HTTPS, com TCP e porta de destino `443`. A origem deve refletir os clientes autorizados ou, apenas quando necessário ao site público do laboratório, a Internet. Ampliar essa origem é uma mudança de exposição que precisa caber no escopo, não uma consequência automática da emissão.

Permitir pacotes na interface não garante que exista um serviço atendendo. O Apache precisa escutar em `443`, carregar as opções TLS e conseguir acessar a chave; um firewall do próprio sistema pode impor outro filtro. Logo, salvar a regra confirma uma configuração de rede, enquanto receber HTTPS confirma um fluxo mais amplo. Nenhuma das duas evidências deve ser usada no lugar da outra.

Antes de aplicar a configuração ao serviço, a sintaxe deve ser conferida novamente. As linhas abaixo são sequenciais: a segunda só deve ser executada se a primeira confirmar validade.

```bash
sudo apache2ctl configtest
sudo systemctl reload apache2
```

`systemctl reload apache2` solicita releitura da configuração sem a interrupção completa de um `restart`. Isso não é motivo para ignorar o teste anterior. Se `configtest` falhar, pare a sequência, examine a mensagem e corrija o arquivo indicado antes de recarregar.

## Confirmando o resultado sem confiar apenas no ícone

A verificação externa pode começar por um pedido de cabeçalhos. Para produzir uma resposta, esse teste precisa passar por resolução, conexão TLS e atendimento HTTP:

```bash
curl --head https://<DOMINIO-DO-LAB>
```

Se o pedido funcionar, aquele cliente negociou TLS e recebeu HTTP. No navegador, examine também host completo, nomes cobertos, emissor e validade do certificado. Cada subdomínio incluído precisa de teste próprio: a validade para o domínio principal não estende automaticamente a cobertura a qualquer outro nome. O ícone sozinho oferece menos evidência que essa conferência.

Se foi escolhida a migração por redirecionamento, a resposta a `http://<DOMINIO-DO-LAB>` deve trazer um status `3xx` e `Location` para HTTPS. Essa orientação vem do servidor HTTP. Ela permite observar, na prática, a operação que um registro A não fazia: pedir ao navegador que solicite outra URL.

## Renovação precisa ser testada

A emissão inicial não encerra a administração, porque o certificado expira. **Renovação** é a obtenção de outro certificado antes desse vencimento. Uma mensagem de agendamento não garante que o processo continuará possível depois de alterar DNS, firewall, plugin ou Apache; as dependências precisam permanecer disponíveis.

Conforme o método instalado, o agendamento pode usar um timer do `systemd` ou outra tarefa. A verificação deve identificar o mecanismo real e testar a repetição da validação:

```bash
systemctl list-timers --all | grep certbot
sudo certbot renew --dry-run
```

`systemctl list-timers --all` lista os timers, e `grep certbot` filtra os relacionados ao cliente. Sem saída, investigue o método de instalação antes de concluir que não existe agendamento. Já `certbot renew --dry-run` usa o ambiente de testes para simular a renovação, sem trocar o certificado ativo por uma nova emissão de produção. O sucesso valida o método nas condições atuais, não garante que futuras mudanças não o interrompam.

Certbot e Apache já mantêm as referências necessárias aos arquivos, dispensando copiá-las para notas pessoais como parte da instalação. Para investigar falhas, os registros costumam estar em `/var/log/letsencrypt/`. Eles devem ser lidos no contexto do erro e sanitizados antes de compartilhamento, pois podem conter identificadores administrativos.

## Interpretando falhas pela camada correta

Quando a emissão falha, a mensagem deve orientar a próxima investigação, em vez de motivar uma repetição indiscriminada. A relação entre evidência e camada pode ser organizada assim:

| Evidência | Camada a investigar |
|---|---|
| `NXDOMAIN` | nome ausente ou incorreto no DNS |
| Resposta com IP antigo | registro ou cache DNS |
| Timeout no desafio HTTP-01 | rota, Security Group, firewall local ou serviço na porta `80` |
| Resposta do host errado | `VirtualHost`, proxy ou múltiplos servidores no mesmo IP |
| Erro de configuração do Apache | sintaxe, módulo, arquivos ou permissões locais |
| Certificado válido, mas alerta de site enganoso | reputação ou conteúdo, não a negociação TLS |

Autoridades aplicam limites de emissão, de modo que insistir em pedidos de produção pode criar outra restrição sem corrigir a causa inicial. Localize o problema e use os mecanismos de teste documentados antes de tentar novamente. Uma falha no desafio não é evidência de que o certificado precise de mais tentativas iguais.

## Encerrando o laboratório

Ao concluir, retire a página de treinamento, feche exposições sem função e elimine apontamentos DNS para instâncias encerradas. Se houve exposição da chave privada, apagar a cópia visível não basta: o certificado precisa ser revogado e substituído. O encerramento deve tratar tanto da infraestrutura quanto da confiança no material criptográfico.

A conclusão adequada relaciona evidências: domínio apontando ao servidor autorizado, desafio de controle atendido, certificado emitido pela CA, cadeia apresentada pelo Apache, serviço alcançável em `443` e renovação testada. Essa cadeia descreve transporte protegido administrável. Ela não declara a página legítima por possuir um cadeado nem substitui a verificação de cada componente.

## Referências oficiais

- [Instruções do Certbot](https://certbot.eff.org/instructions)
- [Guia de uso do Certbot](https://eff-certbot.readthedocs.io/en/stable/using.html)
- [Tipos de desafio da Let's Encrypt](https://letsencrypt.org/docs/challenge-types/)