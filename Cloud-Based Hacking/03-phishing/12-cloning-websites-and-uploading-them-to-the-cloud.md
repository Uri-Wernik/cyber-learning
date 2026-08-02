# Clonando páginas e enviando arquivos para a nuvem

> **Título original:** Cloning Websites & Uploading Them to The Cloud  
> **Duração:** 8 minutos  
> **Escopo:** use somente páginas próprias ou criadas para um laboratório autorizado.

## Objetivos da aula

Ao final desta aula, você deverá ser capaz de:

- explicar o que o navegador salva ao criar uma cópia local de uma página;
- diferenciar cópia estática de aplicação web completa;
- diferenciar SFTP de FTP e FTPS;
- configurar o FileZilla Client para usar a conexão SSH existente;
- identificar os lados local e remoto da interface;
- enviar e baixar arquivos sem confundir transferência com publicação web;
- verificar o resultado sem expor chaves ou dados particulares.

## Conhecimentos usados nesta aula

Esta aula aplica conceitos já estudados. Consulte as explicações completas quando necessário:

- [Computação em nuvem, IP, portas e cliente-servidor](../01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud.md)
- [Instância Kali, usuário e key pair](../02-cloud-basics/07-installing-kali-linux-on-the-cloud.md)
- [SSH, TCP/22, chave privada e fingerprint](../02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh.md)
- [Caminhos e permissões no Linux](../02-cloud-basics/09-linux-terminal-basics.md)
- [Phishing e engenharia social](10-introduction-to-phishing.md)
- [Apache, HTTP/80, Security Group e `/var/www/html`](11-file-hosting-and-firewall-settings.md)

O conteúdo novo desta aula é a cópia estática da página, o protocolo SFTP e o uso do FileZilla.

## Cópia estática de uma página

Ao escolher **Salvar página como → Página da Web, completa**, o navegador tenta guardar no computador os arquivos que recebeu para exibir a página, como:

- **HTML:** estrutura e conteúdo textual;
- **CSS:** regras de aparência;
- **JavaScript:** código enviado ao navegador;
- imagens, fontes e outros recursos acessíveis.

O resultado é uma **cópia estática local**. Ela representa parte do que o navegador recebeu, mas não reproduz todo o sistema original.

Normalmente não são copiados:

- código de back-end executado no servidor;
- banco de dados;
- lógica real de autenticação;
- APIs privadas;
- sessões de usuários;
- serviços externos;
- conteúdo obtido dinamicamente depois do carregamento.

URLs absolutas, recursos externos e controles como CSP e CORS também podem fazer a cópia aparecer incompleta.

> [!NOTE]
> Abrir o arquivo salvo no navegador não o publica na Internet. Ele continua armazenado somente no computador local.

## Use uma página própria

Para estudar a transferência, crie ou salve uma página inofensiva do próprio laboratório. Não publique cópias de marcas ou formulários reais.

Um exercício seguro pode usar uma página simples com:

- título do laboratório;
- texto informativo;
- imagem sem dados pessoais;
- nenhum campo de senha;
- nenhum envio de informações.

O objetivo desta aula é aprender infraestrutura e transferência de arquivos, não coletar credenciais.

## O que é SFTP

**SFTP** significa **SSH File Transfer Protocol**. É um protocolo para manipular arquivos remotos dentro de uma sessão SSH.

Ele permite:

- listar diretórios;
- enviar arquivos, operação chamada **upload**;
- baixar arquivos, operação chamada **download**;
- criar, renomear e remover itens quando o usuário possui permissão;
- consultar informações como tamanho, data e permissões.

Como SFTP utiliza o SSH configurado na [aula 8](../02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh.md), normalmente usa a mesma conexão TCP na porta `22`, a mesma conta `kali` e a mesma chave privada.

### SFTP não é FTP

| Tecnologia | Proteção | Porta comum | Observação |
|---|---|---:|---|
| FTP | Sem criptografia nativa | `21` | Tecnologia antiga; autenticação e dados podem ficar expostos. |
| FTPS | FTP protegido com TLS | Varia | Continua sendo FTP, com TLS adicionado. |
| SFTP | Canal criptografado do SSH | `22` | Protocolo diferente, usado nesta aula. |

A frase “FTP sobre SSH” da tradução é uma simplificação imprecisa. SFTP não é uma sessão FTP comum encapsulada; é um protocolo próprio que utiliza a infraestrutura do SSH.

## O que é o FileZilla Client

O **FileZilla Client** é um programa com interface gráfica para transferir arquivos entre o computador local e um servidor remoto.

Nesta aula:

- o FileZilla é executado no Windows;
- a instância Kali é o destino remoto;
- a conexão usa SFTP;
- o serviço remoto é fornecido pelo SSH já instalado no Kali.

Não é necessário instalar **FileZilla Server**. Também não é necessário liberar outra porta para o FileZilla: SFTP reutiliza a porta `22` do SSH.

## O que é necessário

### No Windows

- [FileZilla Client](https://filezilla-project.org/download.php?type=client);
- navegador;
- chave privada `.pem` correspondente à instância;
- página inofensiva e seus recursos.

### Na AWS e no Kali

- instância em execução;
- IP público ou DNS atual;
- usuário remoto `kali`;
- SSH acessível conforme a [aula 8](../02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh.md).

Mantenha a chave privada fora da pasta da página, do diretório publicado e de repositórios.

## Configurando o FileZilla

Abra **Arquivo → Gerenciador de Sites → Novo site** e informe:

| Campo | Valor do laboratório |
|---|---|
| Nome do site | Nome descritivo, como `AWS Kali` |
| Protocolo | `SFTP - SSH File Transfer Protocol` |
| Host | IP público ou DNS atual da instância |
| Porta | `22` ou vazio para usar a porta padrão |
| Tipo de logon | Arquivo de chave |
| Usuário | `kali` |
| Arquivo de chave | Chave privada correspondente à instância |

![Configuração SFTP do laboratório no Gerenciador de Sites do FileZilla](assets/aula-12/01-configuracao-sftp-filezilla.png)

*Figura 1: Configuração do cliente SFTP. O IP e o caminho da chave privada estão desfocados.*

Na primeira conexão, o FileZilla pode pedir confirmação da chave de host. Compare a fingerprint por uma fonte confiável, conforme explicado na [aula 8](../02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh.md), antes de aceitar.

## Entendendo a interface

- **Painel esquerdo:** arquivos do computador local.
- **Painel direito:** arquivos da instância Kali.
- **Área superior:** log da conexão e das operações.
- **Área inferior:** fila, transferências concluídas e falhas.

Arrastar um arquivo da esquerda para a direita realiza upload. Arrastar da direita para a esquerda realiza download.

![Conexão SFTP entre o computador local e a instância Kali](assets/aula-12/02-conexao-sftp-bem-sucedida.png)

*Figura 2: O computador local aparece à esquerda e o sistema de arquivos remoto à direita. Dados particulares estão desfocados.*

## Transferindo uma página de laboratório

1. No painel local, abra a pasta da página.
2. Confirme que o HTML e sua pasta de recursos estão juntos.
3. No painel remoto, abra `/home/kali`.
4. Arraste o HTML e os recursos para o painel remoto.
5. Acompanhe o estado na fila e no log.
6. Atualize o painel remoto.
7. Confirme nome, tamanho e data dos arquivos recebidos.

O FileZilla pode manter uma listagem antiga na tela. Use **Atualizar** quando uma alteração não aparecer imediatamente.

## Transferir não é publicar

Estes diretórios têm funções diferentes:

| Diretório | Função nesta aula |
|---|---|
| `/home/kali` | Diretório pessoal do usuário; local adequado para receber e conferir arquivos. |
| `/var/www/html` | Document root comum do Apache; arquivos ali podem ser servidos por HTTP. |

Uma conexão SFTP bem-sucedida e um arquivo em `/home/kali` não provam que a página está pública.

Para publicar uma página própria no laboratório, o arquivo precisa ser colocado no document root correto, ter permissões adequadas e ser servido pelo Apache. Esse fluxo está explicado na [aula 11](11-file-hosting-and-firewall-settings.md).

## Resultado observado

As capturas comprovam que:

- o perfil SFTP foi configurado;
- a autenticação com o usuário `kali` funcionou;
- o FileZilla conseguiu acessar e listar `/home/kali`;
- os lados local e remoto ficaram disponíveis para transferência.

A mensagem **“Listagem do diretório `/home/kali` bem sucedida”** comprova conexão e autorização para listar esse diretório. Ela não comprova, sozinha, que um upload terminou nem que o Apache publicou o arquivo.

Para comprovar um upload, verifique simultaneamente:

- status de transferência concluída;
- arquivo no painel remoto;
- nome e tamanho esperados;
- presença do arquivo em uma nova listagem.

## Correções da tradução automática

| Transcrição | Interpretação correta |
|---|---|
| “FTP sobre SSH” | SFTP é um protocolo próprio executado dentro do SSH. |
| Usuário “Carly” | O usuário da imagem oficial do Kali é normalmente `kali`. |
| “var HTML” | O caminho pretendido é `/var/www/html`. |
| “Localizador” | É o Finder do macOS, equivalente ao Explorador de Arquivos no Windows. |

## Problemas comuns

| Sintoma | Verificação |
|---|---|
| Tempo limite | Siga o diagnóstico de rede e porta `22` da [aula 8](../02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh.md). |
| Falha de autenticação | Confira usuário, chave correspondente e permissões da chave. |
| Aviso de chave de host alterada | Interrompa e valide a nova fingerprint antes de confiar. |
| `Permission denied` | Confirme o diretório remoto e as permissões do usuário `kali`. |
| Arquivo não aparece | Atualize a listagem e confira a fila de transferências. |
| HTML abre sem imagens ou CSS | Envie também a pasta de recursos e confira os caminhos. |
| Upload funciona, mas o site não aparece | O arquivo pode estar em `/home/kali`, não em `/var/www/html`. |
| Página remota retorna `403` ou `404` | Consulte permissões, document root e caminhos na [aula 11](11-file-hosting-and-firewall-settings.md). |

## Artefatos produzidos pelo laboratório

Esta atividade pode produzir:

- perfil salvo no FileZilla;
- registro da chave de host conhecida;
- autenticação SSH no servidor;
- operações SFTP no log da sessão;
- arquivos novos no sistema remoto;
- eventual cópia posterior no document root.

Registre apenas evidências necessárias e remova os arquivos de teste quando terminar.

## Resumo

```text
PÁGINA LOCAL
Navegador → salva HTML e recursos no Windows

TRANSFERÊNCIA
FileZilla → SFTP sobre SSH/TCP 22 → /home/kali

PUBLICAÇÃO, SE NECESSÁRIA
/home/kali → document root do Apache → HTTP/TCP 80 → navegador
```

- Salvar uma página produz uma cópia estática, não o back-end.
- SFTP é um protocolo de arquivos executado dentro do SSH.
- FileZilla Client é a interface local; o Kali fornece o serviço remoto.
- O painel esquerdo é local e o direito é remoto.
- `/home/kali` recebe arquivos, mas não é automaticamente a raiz web.
- Transferência, publicação e acesso HTTP são etapas diferentes.

## Checklist de revisão

- [ ] Sei explicar o que o navegador salva e o que permanece no servidor original.
- [ ] Sei diferenciar SFTP, FTP e FTPS.
- [ ] Sei identificar os campos necessários no FileZilla.
- [ ] Sei diferenciar os painéis local e remoto.
- [ ] Sei explicar upload e download.
- [ ] Sei diferenciar `/home/kali` de `/var/www/html`.
- [ ] Sei comprovar uma transferência sem depender apenas de uma mensagem.
- [ ] Usei somente conteúdo próprio e dados fictícios.

## Perguntas de fixação

1. Por que **Salvar página como** não copia o back-end?
2. Qual é a diferença entre SFTP e FTP?
3. Por que o FileZilla não precisa de uma nova porta além da `22`?
4. Onde a chave privada permanece durante a autenticação?
5. O que representam os painéis esquerdo e direito?
6. Qual é a diferença entre upload e download?
7. Por que um arquivo em `/home/kali` não aparece automaticamente no navegador?
8. Que evidências confirmam que um upload realmente terminou?
