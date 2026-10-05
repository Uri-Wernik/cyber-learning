# Emitindo e instalando um certificado com Certbot

> **Status:** publicado.
>
> **Título original:** Enabling HTTPS on Phishing Pages
>
> **Escopo:** emissão de certificado para um domínio neutro e um servidor Apache sob controle do estudante. O procedimento não deve ser usado para dar aparência legítima a páginas que imitam terceiros.

Na [aula anterior](18-introduction-to-https.md), HTTPS foi decomposto em HTTP protegido por TLS, com confidencialidade, integridade e autenticação do servidor. Agora o domínio do laboratório será validado pela Let's Encrypt, e o Certbot usará o certificado emitido para configurar o Apache.

Essa automação atravessa quatro componentes diferentes: DNS aponta o nome para a instância; o desafio ACME comprova controle do domínio; o Certbot obtém e administra os arquivos; e o Apache apresenta o certificado nas conexões TLS. Identificar cada componente evita procurar um erro de DNS no Security Group ou um erro de Apache na autoridade certificadora.

## Preparando a validação

O plugin Apache do Certbot normalmente utiliza o desafio **HTTP-01**. A Let's Encrypt fornece um token, o cliente ACME disponibiliza uma resposta temporária sob `/.well-known/acme-challenge/` e servidores de validação tentam buscá-la pelo domínio.

Antes da emissão, confirme que:

- cada nome solicitado resolve publicamente para a instância correta;
- registros A e AAAA não conduzem a servidores diferentes por engano;
- o Apache está ativo e reconhece o nome no `VirtualHost` correspondente;
- a porta TCP `80` pode ser alcançada pela Internet durante o desafio HTTP-01;
- não existe proxy ou redirecionamento enviando o caminho do desafio a outro sistema;
- a página publicada é neutra e não coleta dados sensíveis.

O HTTP-01 usa a porta `80`, mesmo que o objetivo final seja servir HTTPS na porta `443`. Abrir somente `443` antes da validação não satisfaz esse desafio. A porta `80` também precisa continuar disponível quando o mesmo método for usado nas renovações.

## Instalando sem manter uma sessão root

Na demonstração, o instrutor abriu um shell permanente como `root`. Isso amplia o impacto de um comando digitado incorretamente. O laboratório pode manter a sessão no usuário administrativo e aplicar `sudo` apenas às operações que exigem privilégio.

No ambiente Kali/Debian mostrado no curso, os pacotes usados são instalados com:

```bash
sudo apt update
sudo apt install certbot python3-certbot-apache
```

O primeiro comando atualiza o índice local de pacotes; ele não atualiza todos os programas instalados. O segundo solicita o cliente Certbot e o plugin que integra autenticação e instalação ao Apache. Leia a lista de dependências e confirme a origem dos repositórios antes de aceitar.

Métodos de instalação mudam entre distribuições e versões. Se esses pacotes não estiverem disponíveis ou se o sistema usar outro servidor web, consulte as [instruções oficiais do Certbot](https://certbot.eff.org/instructions) para a combinação realmente instalada, em vez de misturar pacotes de origens diferentes.

Depois da instalação, confirme que o programa existe e que a configuração atual do Apache é válida:

```bash
certbot --version
sudo apache2ctl configtest
```

`certbot --version` identifica a versão executada. `apache2ctl configtest` analisa os arquivos do Apache e deve informar que a sintaxe está válida antes de qualquer modificação automática. Uma falha nessa etapa precisa ser corrigida antes de solicitar o certificado.

## Solicitando somente os nomes necessários

Com DNS e porta `80` confirmados, o plugin pode obter e instalar um certificado para os hosts explicitamente informados:

```bash
sudo certbot --apache \
  -d <DOMINIO-DO-LAB> \
  -d portal-lab.<DOMINIO-DO-LAB>
```

Os marcadores entre `<` e `>` precisam ser substituídos pelos nomes neutros realmente controlados antes da execução. No shell, eles não devem ser digitados literalmente.

`sudo` concede o privilégio necessário para ler e alterar configurações protegidas. `certbot` inicia o cliente ACME. A opção `--apache` seleciona um plugin que pode autenticar o domínio e instalar o certificado no Apache. Cada `-d` adiciona um nome que deverá passar pela validação e aparecer no certificado.

Solicite apenas hosts que já apontam para esse servidor. Se um subdomínio ainda não foi configurado, omita-o em vez de permitir que uma autorização parcial esconda o problema.

Durante a primeira execução, o Certbot pode solicitar um e-mail de contato, aceite dos termos da autoridade certificadora e uma decisão sobre redirecionar HTTP para HTTPS. Leia as opções exibidas pela versão instalada. O e-mail e os nomes usados podem aparecer em arquivos e logs administrativos; não os publique em capturas.

## O que acontece durante a emissão

O Certbot cria ou seleciona uma conta ACME, prepara a resposta ao desafio e pede à Let's Encrypt que valide cada nome. A autoridade consulta o DNS e faz uma requisição HTTP pública para o token. Receber a resposta esperada comprova controle operacional daquele domínio naquele momento; não comprova propriedade de uma empresa nem legitimidade do conteúdo.

Depois da autorização, a autoridade assina o certificado. O plugin salva o material administrado sob `/etc/letsencrypt/` e ajusta o `VirtualHost` para usar a cadeia e a chave corretas. Em uma configuração comum, estes caminhos são referências atualizadas pelo próprio Certbot:

```text
/etc/letsencrypt/live/<NOME-DO-CERTIFICADO>/fullchain.pem
/etc/letsencrypt/live/<NOME-DO-CERTIFICADO>/privkey.pem
```

`fullchain.pem` contém o certificado do servidor e a cadeia intermediária que o Apache apresenta ao cliente. `privkey.pem` contém a chave privada e deve permanecer secreta. Não copie a chave para um arquivo de notas, diretório web, captura de tela ou repositório. Também não apague manualmente arquivos dentro de `/etc/letsencrypt/`; o Certbot mantém versões e referências necessárias à renovação.

A lista administrada pode ser consultada sem exibir o conteúdo das chaves:

```bash
sudo certbot certificates
```

Essa saída informa nomes cobertos, prazo e caminhos. Antes de compartilhá-la, remova domínio, e-mail e outros identificadores do laboratório.

## Abrindo a porta HTTPS na nuvem

Instalar o certificado não altera o Security Group da instância. Para um site público do laboratório, a regra de entrada correspondente a HTTPS usa protocolo TCP e porta de destino `443`. A origem pública, quando realmente necessária, costuma abranger os clientes autorizados ou a Internet; essa decisão amplia a superfície exposta e deve fazer parte do escopo do exercício.

O Security Group apenas permite que pacotes alcancem a interface. O Apache ainda precisa escutar em `443`, carregar a configuração TLS e possuir acesso à chave privada. Um firewall local pode acrescentar outro controle. Portanto, “regra salva” e “serviço HTTPS funcionando” são evidências distintas.

Depois da alteração, teste novamente a sintaxe e recarregue o serviço somente se a configuração estiver válida:

```bash
sudo apache2ctl configtest
sudo systemctl reload apache2
```

`reload` pede ao Apache que releia a configuração sem a interrupção completa de um `restart`. Se o teste de sintaxe falhar, não execute a recarga; leia a mensagem e corrija o arquivo indicado.

## Confirmando o resultado sem confiar apenas no ícone

Uma requisição de cabeçalhos verifica resolução, conexão TLS e resposta HTTP:

```bash
curl --head https://<DOMINIO-DO-LAB>
```

O sucesso comprova que aquele cliente conseguiu negociar TLS e recebeu uma resposta. No navegador, confira o host completo e examine os detalhes do certificado: nomes cobertos, emissor e validade. Teste também cada subdomínio incluído; um certificado válido para o domínio principal não cobre automaticamente todos os subdomínios.

Se HTTP foi configurado para redirecionar, uma requisição a `http://<DOMINIO-DO-LAB>` deve retornar um status `3xx` e um cabeçalho `Location` com destino HTTPS. Esse é o redirecionamento HTTP que o registro A, por si só, não realizava.

## Renovação precisa ser testada

Certificados públicos têm validade limitada. Uma mensagem de que a renovação foi configurada não prova que ela continuará funcionando depois de mudanças em DNS, firewall, plugins ou configuração do Apache.

A instalação pode fornecer um timer do `systemd` ou outra tarefa agendada. Verifique o mecanismo presente no sistema e execute uma simulação:

```bash
systemctl list-timers --all | grep certbot
sudo certbot renew --dry-run
```

O primeiro comando procura um timer relacionado ao Certbot; ausência de saída exige conferir o método de instalação e a documentação correspondente. O segundo usa o ambiente de testes para simular a renovação sem substituir o certificado ativo por um certificado de produção novo. Um teste bem-sucedido mostra que o método atual conseguiu repetir a validação naquele momento.

Não é necessário copiar os caminhos do certificado para um arquivo pessoal: o Certbot e a configuração do Apache já mantêm essas referências. O material mais importante para investigar falhas fica normalmente em `/var/log/letsencrypt/`, mas logs devem ser sanitizados antes de serem compartilhados.

## Interpretando falhas pela camada correta

Uma falha de emissão pode ser localizada pela evidência apresentada:

| Evidência | Camada a investigar |
|---|---|
| `NXDOMAIN` | nome ausente ou incorreto no DNS |
| Resposta com IP antigo | registro ou cache DNS |
| Timeout no desafio HTTP-01 | rota, Security Group, firewall local ou serviço na porta `80` |
| Resposta do host errado | `VirtualHost`, proxy ou múltiplos servidores no mesmo IP |
| Erro de configuração do Apache | sintaxe, módulo, arquivos ou permissões locais |
| Certificado válido, mas alerta de site enganoso | reputação ou conteúdo, não a negociação TLS |

Não repita solicitações de produção indiscriminadamente: autoridades certificadoras aplicam limites de emissão. Corrija a causa e use os mecanismos de teste documentados antes de tentar novamente.

## Encerrando o laboratório

Ao finalizar, remova a página de treinamento, feche portas que não precisam permanecer públicas e elimine registros DNS que apontem para uma instância encerrada. Se a chave privada tiver sido exposta, o certificado deve ser revogado e substituído; apenas apagar uma cópia local não desfaz o comprometimento.

O resultado correto desta aula não é um site “legítimo” por possuir cadeado. É uma cadeia técnica verificável: o domínio chega ao servidor autorizado, o desafio ACME comprova controle, a CA emite o certificado, o Apache apresenta a cadeia correta, a porta `443` conduz ao serviço e a renovação consegue repetir o processo.

## Referências oficiais

- [Instruções do Certbot](https://certbot.eff.org/instructions)
- [Guia de uso do Certbot](https://eff-certbot.readthedocs.io/en/stable/using.html)
- [Tipos de desafio da Let's Encrypt](https://letsencrypt.org/docs/challenge-types/)