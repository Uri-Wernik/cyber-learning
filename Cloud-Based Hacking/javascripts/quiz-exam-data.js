window.CYBER_QUIZ_QUESTIONS = window.CYBER_QUIZ_QUESTIONS || [];

(() => {
  const levels = ["easy", "medium", "hard"];
  const guide = "04-preparacao-para-prova/01-guia-de-estudo/";
  const concepts = [
    {
      id: "iam",
      topic: "IAM",
      lesson: "Conceito essencial: IAM",
      source: `${guide}#iam`,
      questions: {
        easy: {
          question: "Para que serve o IAM na AWS?",
          choices: [
            "Controlar identidades e definir quais ações cada uma pode executar",
            "Criar discos virtuais e conectá-los automaticamente às instâncias",
            "Traduzir nomes de domínio para endereços IP públicos ou privados",
            "Entregar páginas HTTP armazenadas no sistema operacional da instância",
          ],
          correct: 0,
          explanation:
            "IAM significa Identity and Access Management. Ele administra identidades, funções e políticas de permissão dentro da AWS.",
        },
        medium: {
          question:
            "Um usuário consegue listar instâncias EC2, mas não consegue encerrá-las. Qual componente provavelmente definiu esse limite?",
          choices: [
            "A AMI usada para criar as instâncias que aparecem na listagem",
            "Uma política do IAM associada ao usuário ou à função utilizada",
            "O volume EBS conectado ao sistema operacional de cada instância",
            "O registro DNS usado para localizar o endereço público da conta",
          ],
          correct: 1,
          explanation:
            "As políticas do IAM dizem quais ações uma identidade pode executar. Visualizar e encerrar instâncias são permissões diferentes.",
        },
        hard: {
          question:
            "Uma identidade usa MFA, mas possui permissão administrativa total. O que essa situação demonstra?",
          choices: [
            "O MFA reduz automaticamente as permissões concedidas pela política do IAM",
            "O Security Group substitui o IAM sempre que a identidade usa um segundo fator",
            "O MFA fortalece o login, enquanto o IAM ainda decide o que a identidade pode fazer",
            "A AMI redefine as permissões da conta depois que a autenticação é concluída",
          ],
          correct: 2,
          explanation:
            "MFA reforça a autenticação. A autorização continua sendo definida pelas políticas do IAM, que podem ser amplas ou restritas.",
        },
      },
    },
    {
      id: "ec2",
      topic: "EC2",
      lesson: "Conceito essencial: EC2",
      source: `${guide}#ec2`,
      questions: {
        easy: {
          question: "O que o serviço EC2 fornece?",
          choices: [
            "Registros DNS usados para associar nomes a endereços de rede",
            "Máquinas virtuais na AWS, chamadas de instâncias",
            "Certificados TLS usados para proteger conexões HTTPS",
            "Políticas de acesso associadas a usuários e funções do IAM",
          ],
          correct: 1,
          explanation:
            "EC2 significa Elastic Compute Cloud. O serviço permite criar e executar máquinas virtuais na AWS.",
        },
        medium: {
          question:
            "Qual é a diferença principal entre parar e encerrar uma instância EC2?",
          choices: [
            "Parar remove o disco; encerrar preserva toda a máquina para reinício",
            "Parar altera a AMI; encerrar apenas fecha a conexão SSH atual",
            "Parar preserva a instância; encerrar remove a instância definitivamente",
            "Parar bloqueia o IAM; encerrar remove todas as identidades da conta",
          ],
          correct: 2,
          explanation:
            "Uma instância parada pode ser iniciada novamente. Uma instância encerrada é removida e não pode ser reiniciada.",
        },
        hard: {
          question:
            "Uma instância aparece como running, mas nenhum serviço responde. O que o estado running realmente comprova?",
          choices: [
            "Que todas as portas estão abertas e qualquer processo aceita conexões",
            "Que o Apache e o SSH foram configurados corretamente dentro do sistema",
            "Que o DNS e os certificados do domínio estão funcionando sem erros",
            "Que a máquina virtual está ligada, não que rede e serviços estejam prontos",
          ],
          correct: 3,
          explanation:
            "Running confirma que a computação está ativa. Security Group, portas e processos precisam ser verificados separadamente.",
        },
      },
    },
    {
      id: "ami",
      topic: "AMI",
      lesson: "Conceito essencial: AMI",
      source: `${guide}#ami`,
      questions: {
        easy: {
          question: "O que é uma AMI na AWS?",
          choices: [
            "Uma política que determina quais ações um usuário pode executar",
            "Um disco externo usado apenas para guardar cópias de segurança",
            "Um modelo usado como base para criar uma instância EC2",
            "Uma regra que libera portas de entrada para uma máquina virtual",
          ],
          correct: 2,
          explanation:
            "AMI significa Amazon Machine Image. Ela fornece a base de sistema e configuração inicial usada na criação da instância.",
        },
        medium: {
          question: "Como AMI e instância EC2 se relacionam?",
          choices: [
            "A instância é o modelo, enquanto a AMI é a máquina em execução",
            "A AMI substitui o volume EBS durante toda a execução da máquina",
            "A instância controla usuários, enquanto a AMI controla permissões do IAM",
            "A AMI é o modelo; a instância é a máquina criada a partir dele",
          ],
          correct: 3,
          explanation:
            "A AMI é uma imagem reutilizável. A instância é o recurso computacional criado e executado a partir dessa imagem.",
        },
        hard: {
          question:
            "Uma instância foi atualizada depois de ser criada. Outra instância nasce da mesma AMI original. Qual estado ela recebe?",
          choices: [
            "O estado salvo na AMI, sem copiar automaticamente as mudanças da primeira instância",
            "Todas as mudanças da primeira instância, porque a AMI acompanha máquinas em execução",
            "A configuração do IAM, porque políticas substituem os arquivos guardados na imagem",
            "Somente o conteúdo do Security Group, sem sistema operacional ou pacotes instalados",
          ],
          correct: 0,
          explanation:
            "Alterar uma instância não atualiza automaticamente a AMI que a originou. A nova instância começa com o estado da imagem.",
        },
      },
    },
    {
      id: "ebs",
      topic: "EBS",
      lesson: "Conceito essencial: EBS",
      source: `${guide}#ebs`,
      questions: {
        easy: {
          question: "Qual é a função principal do EBS?",
          choices: [
            "Controlar quem pode iniciar ou encerrar recursos dentro da conta",
            "Resolver nomes de domínio antes que o cliente abra uma conexão",
            "Filtrar pacotes de entrada conforme protocolo, porta e origem",
            "Fornecer armazenamento em bloco usado como disco virtual da instância",
          ],
          correct: 3,
          explanation:
            "EBS significa Elastic Block Store. Seus volumes funcionam como discos virtuais conectados às instâncias EC2.",
        },
        medium: {
          question:
            "Por que arquivos podem continuar disponíveis depois que uma instância EC2 é parada e iniciada novamente?",
          choices: [
            "Porque o volume EBS persiste mesmo quando a computação está parada",
            "Porque o Security Group copia os arquivos antes de desligar a máquina",
            "Porque o IAM guarda o sistema operacional dentro de cada política",
            "Porque o DNS mantém uma cópia dos dados enquanto o IP não muda",
          ],
          correct: 0,
          explanation:
            "Parar a instância interrompe a computação, mas o volume EBS persistente continua armazenando os dados.",
        },
        hard: {
          question:
            "Ao encerrar uma instância, o que determina se o volume EBS principal também será removido?",
          choices: [
            "O TTL do domínio associado ao endereço público da instância",
            "A configuração de exclusão do volume definida para o encerramento",
            "A quantidade de regras existentes no Security Group associado",
            "A política de MFA usada no último login realizado na conta AWS",
          ],
          correct: 1,
          explanation:
            "Volumes podem ser configurados para exclusão junto com a instância ou para permanecer depois do encerramento.",
        },
      },
    },
    {
      id: "security-group",
      topic: "Security Group",
      lesson: "Conceito essencial: Security Group",
      source: `${guide}#security-group`,
      questions: {
        easy: {
          question: "O que faz um Security Group?",
          choices: [
            "Filtra o tráfego permitido para recursos da AWS usando regras de rede",
            "Instala os programas necessários dentro do sistema operacional remoto",
            "Cria certificados TLS para todos os nomes ligados ao endereço público",
            "Define quais arquivos cada usuário Linux pode modificar na instância",
          ],
          correct: 0,
          explanation:
            "O Security Group funciona como um firewall virtual. Suas regras consideram protocolo, porta e origem ou destino.",
        },
        medium: {
          question:
            "Qual regra é necessária para permitir SSH somente a partir do IP do estudante?",
          choices: [
            "Liberar HTTP na porta 80 para qualquer origem disponível",
            "Liberar TCP na porta 22 usando o IP do estudante como origem",
            "Liberar HTTPS na porta 443 apenas para o endereço da instância",
            "Liberar DNS na porta 53 para todos os usuários existentes no IAM",
          ],
          correct: 1,
          explanation:
            "SSH normalmente escuta em TCP 22. Restringir a origem ao IP necessário reduz a exposição da porta.",
        },
        hard: {
          question:
            "A porta 80 está liberada no Security Group, mas a página não responde. Qual conclusão é correta?",
          choices: [
            "A regra garante que o Apache foi instalado e está executando corretamente",
            "O DNS deve estar errado, pois a regra também controla a resolução de nomes",
            "A rede permite a tentativa, mas ainda pode não existir processo em escuta",
            "O EBS precisa ser encerrado antes que o sistema aceite conexões HTTP",
          ],
          correct: 2,
          explanation:
            "O Security Group permite o tráfego chegar. Ele não instala, inicia nem verifica o processo que deve atender na porta.",
        },
      },
    },
    {
      id: "ip-e-porta",
      topic: "IP e porta",
      lesson: "Conceito essencial: IP e porta",
      source: `${guide}#ip-e-porta`,
      questions: {
        easy: {
          question: "Qual é a diferença entre endereço IP e porta?",
          choices: [
            "O IP escolhe o arquivo e a porta identifica o usuário autenticado",
            "O IP identifica a interface; a porta direciona a conexão ao programa",
            "O IP cifra o tráfego e a porta valida o certificado apresentado",
            "O IP define a permissão e a porta escolhe a política usada no IAM",
          ],
          correct: 1,
          explanation:
            "O IP localiza uma interface na rede. A porta permite ao sistema entregar a conexão ao processo correto.",
        },
        medium: {
          question:
            "Como SSH e HTTPS podem funcionar no mesmo endereço IP?",
          choices: [
            "Cada protocolo precisa receber um segundo endereço IP do provedor",
            "O DNS cria uma interface exclusiva sempre que um protocolo é usado",
            "Eles usam portas diferentes, normalmente 22 para SSH e 443 para HTTPS",
            "O IAM troca o endereço da máquina conforme a identidade conectada",
          ],
          correct: 2,
          explanation:
            "Um único IP pode atender vários serviços. As portas ajudam o sistema a distinguir a conexão destinada a cada processo.",
        },
        hard: {
          question:
            "Uma conexão recebe Connection refused em uma porta. O que isso normalmente indica?",
          choices: [
            "O nome não existe no DNS e nenhum pacote chegou ao endereço informado",
            "A chave privada foi aceita, mas o usuário não possui permissão no IAM",
            "O certificado TLS expirou antes que o cliente tentasse abrir uma conexão",
            "O endereço respondeu, mas não havia serviço aceitando naquela porta",
          ],
          correct: 3,
          explanation:
            "Connection refused costuma indicar que o host foi alcançado, mas nenhum processo aceitou a conexão na porta escolhida.",
        },
      },
    },
    {
      id: "dns",
      topic: "DNS",
      lesson: "Conceito essencial: DNS",
      source: `${guide}#dns`,
      questions: {
        easy: {
          question: "Qual é a função principal do DNS?",
          choices: [
            "Executar o servidor web depois que o sistema recebe uma requisição",
            "Cifrar os dados enviados entre o cliente e a aplicação remota",
            "Responder consultas sobre nomes com dados como endereços IP",
            "Definir quais ações uma identidade pode executar dentro da AWS",
          ],
          correct: 2,
          explanation:
            "DNS significa Domain Name System. Ele fornece registros sobre nomes, incluindo os endereços usados para localizar servidores.",
        },
        medium: {
          question:
            "O DNS devolveu o IP esperado, mas a página não abriu. O que já foi comprovado?",
          choices: [
            "Que o Apache respondeu e entregou corretamente o conteúdo solicitado",
            "Que o certificado TLS foi aceito e protegeu toda a comunicação",
            "Que a porta do serviço estava aberta e havia um processo em escuta",
            "Que a resolução do nome funcionou, mas não as demais camadas",
          ],
          correct: 3,
          explanation:
            "Uma resposta DNS correta comprova a resolução naquele caminho. Rede, porta e servidor web ainda precisam funcionar.",
        },
        hard: {
          question:
            "Depois de alterar o IP no DNS, alguns usuários ainda recebem o endereço antigo. Qual é a causa mais provável?",
          choices: [
            "Respostas anteriores ainda permanecem em cache até o TTL expirar",
            "O Apache substitui o registro DNS sempre que recebe uma requisição",
            "O Security Group escolhe um IP diferente para cada usuário conectado",
            "O IAM mantém uma cópia do endereço dentro da política da identidade",
          ],
          correct: 0,
          explanation:
            "Resolvedores podem usar a resposta armazenada até o TTL terminar. Por isso, mudanças não aparecem para todos ao mesmo tempo.",
        },
      },
    },
    {
      id: "registros-dns",
      topic: "Registros DNS",
      lesson: "Conceito essencial: A, CNAME e TTL",
      source: `${guide}#registros-dns`,
      questions: {
        easy: {
          question: "O que informa um registro DNS do tipo A?",
          choices: [
            "O certificado TLS que deverá ser apresentado pelo servidor",
            "A política do IAM aplicada à conta usada para acessar o serviço",
            "O nome alternativo que aponta para outro nome dentro do DNS",
            "O endereço IPv4 associado ao nome consultado pelo cliente",
          ],
          correct: 3,
          explanation:
            "Um registro A relaciona um nome a um endereço IPv4. Ele não abre portas nem inicia serviços.",
        },
        medium: {
          question: "Qual é a função de um registro CNAME?",
          choices: [
            "Fazer um nome funcionar como alias de outro nome",
            "Associar diretamente um nome a um endereço IPv4",
            "Determinar a porta usada pelo servidor HTTP ou HTTPS",
            "Definir por quanto tempo uma sessão autenticada será aceita",
          ],
          correct: 0,
          explanation:
            "CNAME significa Canonical Name. Ele aponta um alias para outro nome, que depois precisa ser resolvido.",
        },
        hard: {
          question:
            "Um registro foi corrigido, mas a resposta antiga continua aparecendo por alguns minutos. Qual campo explica isso?",
          choices: [
            "CNAME, porque todo alias mantém duas respostas ativas simultaneamente",
            "TTL, porque ele define por quanto tempo a resposta pode ficar em cache",
            "A, porque endereços IPv4 nunca podem ser substituídos depois de publicados",
            "IAM, porque a política da conta guarda versões anteriores do registro",
          ],
          correct: 1,
          explanation:
            "TTL significa Time to Live. Enquanto ele não expira, um resolvedor pode continuar usando a resposta guardada.",
        },
      },
    },
    {
      id: "http",
      topic: "HTTP",
      lesson: "Conceito essencial: HTTP",
      source: `${guide}#http`,
      questions: {
        easy: {
          question: "O que o HTTP define?",
          choices: [
            "Como clientes fazem requisições e servidores enviam respostas na Web",
            "Como identidades recebem permissões para alterar recursos da AWS",
            "Como discos virtuais são conectados a máquinas criadas por uma AMI",
            "Como arquivos são transferidos dentro de uma conexão SSH protegida",
          ],
          correct: 0,
          explanation:
            "HTTP organiza a comunicação da Web em requisições do cliente e respostas do servidor.",
        },
        medium: {
          question:
            "Qual afirmação diferencia corretamente HTTP e HTTPS?",
          choices: [
            "HTTP usa DNS, enquanto HTTPS encontra o servidor sem consultar nomes",
            "HTTPS transporta HTTP dentro de uma conexão protegida por TLS",
            "HTTP funciona com Apache, enquanto HTTPS exige outro servidor web",
            "HTTPS substitui portas por políticas de acesso configuradas no IAM",
          ],
          correct: 1,
          explanation:
            "A estrutura de requisições e respostas continua sendo HTTP. HTTPS acrescenta a proteção do TLS ao transporte.",
        },
        hard: {
          question:
            "Um servidor devolveu uma resposta HTTP. O que essa evidência permite concluir?",
          choices: [
            "Que todo o conteúdo recebido é legítimo e não pode conter erros",
            "Que o usuário foi autenticado e possui todas as permissões da aplicação",
            "Que a requisição chegou a um servidor HTTP, que produziu uma resposta",
            "Que o DNS nunca usou cache e sempre consultou a fonte autoritativa",
          ],
          correct: 2,
          explanation:
            "Uma resposta HTTP comprova que o fluxo alcançou um serviço capaz de responder. Ela não valida a intenção ou a correção do conteúdo.",
        },
      },
    },
    {
      id: "https",
      topic: "HTTPS",
      lesson: "Conceito essencial: HTTPS",
      source: `${guide}#https`,
      questions: {
        easy: {
          question: "O que é HTTPS?",
          choices: [
            "Um tipo de registro DNS usado para localizar servidores web",
            "O protocolo SSH adaptado para transferir páginas pelo navegador",
            "Uma política do IAM usada para permitir conexões na porta 443",
            "O protocolo HTTP transportado dentro de uma conexão TLS",
          ],
          correct: 3,
          explanation:
            "HTTPS mantém o funcionamento do HTTP e usa TLS para proteger os dados durante o transporte.",
        },
        medium: {
          question: "O que HTTPS protege diretamente?",
          choices: [
            "A confidencialidade e a integridade da comunicação com o servidor",
            "A configuração interna do sistema operacional e de todos os arquivos",
            "As permissões concedidas ao usuário depois que ele entra na aplicação",
            "A disponibilidade do servidor mesmo quando o processo está parado",
          ],
          correct: 0,
          explanation:
            "HTTPS protege os dados em trânsito e permite autenticar o servidor pelo certificado. Ele não controla arquivos ou permissões da aplicação.",
        },
        hard: {
          question:
            "Um servidor apresenta certificado válido para outro nome. Por que o navegador deve rejeitar a conexão?",
          choices: [
            "Porque todo certificado precisa usar o mesmo endereço IP do cliente",
            "Porque o nome solicitado não corresponde à identidade coberta pelo certificado",
            "Porque certificados TLS só podem ser usados em conexões feitas pela porta 22",
            "Porque o Security Group precisa assinar o certificado antes de liberar HTTPS",
          ],
          correct: 1,
          explanation:
            "O navegador verifica se o nome acessado está incluído no certificado. Um certificado de outro host não autentica o servidor solicitado.",
        },
      },
    },
    {
      id: "tls",
      topic: "TLS",
      lesson: "Conceito essencial: TLS",
      source: `${guide}#tls`,
      questions: {
        easy: {
          question: "Quais proteções o TLS oferece?",
          choices: [
            "Criação de instâncias, discos persistentes e políticas de identidade",
            "Resolução de nomes, controle de cache e escolha do endereço IPv4",
            "Criptografia, integridade dos dados e autenticação do servidor",
            "Transferência de arquivos, execução de comandos e acesso ao terminal",
          ],
          correct: 2,
          explanation:
            "TLS protege os dados em trânsito, detecta alterações e usa certificados para verificar a identidade do servidor.",
        },
        medium: {
          question: "Qual é a diferença entre certificado TLS e chave privada?",
          choices: [
            "O certificado fica secreto, enquanto a chave privada é enviada aos clientes",
            "O certificado abre a porta, enquanto a chave privada configura o DNS",
            "O certificado guarda a sessão, enquanto a chave privada contém a senha",
            "O certificado é apresentado; a chave privada permanece secreta no servidor",
          ],
          correct: 3,
          explanation:
            "O servidor envia o certificado, mas mantém a chave privada protegida para provar que controla a identidade apresentada.",
        },
        hard: {
          question:
            "Por que o TLS cria chaves de sessão durante o handshake?",
          choices: [
            "Para proteger os dados com criptografia simétrica eficiente após negociar a conexão",
            "Para substituir permanentemente a chave privada associada ao certificado",
            "Para alterar o endereço IP do servidor depois que o DNS foi consultado",
            "Para conceder ao cliente permissões administrativas dentro da aplicação",
          ],
          correct: 0,
          explanation:
            "O handshake autentica o servidor e estabelece segredos. Chaves simétricas derivadas protegem os dados da sessão com eficiência.",
        },
      },
    },
    {
      id: "ssh",
      topic: "SSH",
      lesson: "Conceito essencial: SSH",
      source: `${guide}#ssh`,
      questions: {
        easy: {
          question: "Para que serve o SSH?",
          choices: [
            "Associar um nome de domínio a um endereço IPv4 publicado",
            "Controlar uma máquina remota por uma conexão criptografada",
            "Emitir certificados TLS e configurar automaticamente o Apache",
            "Criar políticas de permissão para usuários e funções da AWS",
          ],
          correct: 1,
          explanation:
            "SSH significa Secure Shell. Ele fornece um canal criptografado para autenticação e acesso remoto.",
        },
        medium: {
          question: "Onde executam o cliente SSH e o processo sshd?",
          choices: [
            "Os dois executam dentro do Security Group associado à instância",
            "O cliente executa no servidor e o sshd executa no computador local",
            "O cliente executa localmente e o sshd fica em escuta na máquina remota",
            "Os dois executam no serviço DNS antes que a conexão TCP seja criada",
          ],
          correct: 2,
          explanation:
            "O cliente inicia a conexão no computador local. O daemon sshd aguarda e atende a conexão no sistema remoto.",
        },
        hard: {
          question:
            "A porta 22 responde, mas o SSH informa Permission denied. Qual etapa falhou?",
          choices: [
            "A resolução DNS, antes que qualquer pacote chegasse ao endereço",
            "A criação da instância, que ainda não alcançou o estado running",
            "A regra de rede, pois a porta não recebeu nenhuma conexão do cliente",
            "A autenticação, porque a rede e o serviço já responderam ao cliente",
          ],
          correct: 3,
          explanation:
            "Permission denied mostra que a comunicação chegou ao SSH, mas usuário, chave ou autorização não foram aceitos.",
        },
      },
    },
    {
      id: "transferencia-arquivos",
      topic: "FTP, FTPS e SFTP",
      lesson: "Conceito essencial: transferência de arquivos",
      source: `${guide}#transferencia-arquivos`,
      questions: {
        easy: {
          question: "Qual protocolo transfere arquivos dentro do SSH?",
          choices: [
            "SFTP",
            "FTP",
            "FTPS",
            "HTTP",
          ],
          correct: 0,
          explanation:
            "SFTP significa SSH File Transfer Protocol. Ele funciona dentro do canal SSH, normalmente na porta 22.",
        },
        medium: {
          question: "Qual comparação entre FTP, FTPS e SFTP está correta?",
          choices: [
            "FTP e SFTP são o mesmo protocolo, mas usam nomes diferentes",
            "FTPS protege FTP com TLS; SFTP é um protocolo executado sobre SSH",
            "SFTP protege FTP com TLS; FTPS é um protocolo executado sobre SSH",
            "Os três usam HTTP e diferem apenas pelo tipo de arquivo transferido",
          ],
          correct: 1,
          explanation:
            "FTPS mantém o protocolo FTP e adiciona TLS. SFTP é um protocolo diferente que usa a infraestrutura do SSH.",
        },
        hard: {
          question:
            "O SSH já funciona com usuário e chave na porta 22. Qual opção reaproveita diretamente essa infraestrutura para arquivos?",
          choices: [
            "FTP, porque toda conexão de arquivos usa automaticamente a chave do SSH",
            "FTPS, porque um certificado TLS substitui o usuário configurado no SSH",
            "SFTP, porque ele usa o canal e a autenticação oferecidos pelo SSH",
            "HTTP, porque o Apache converte qualquer requisição em transferência SFTP",
          ],
          correct: 2,
          explanation:
            "SFTP pode reutilizar endereço, porta, usuário e autenticação do SSH. FileZilla pode atuar como cliente desse protocolo.",
        },
      },
    },
    {
      id: "mfa",
      topic: "2FA e MFA",
      lesson: "Conceito essencial: 2FA e MFA",
      source: `${guide}#mfa`,
      questions: {
        easy: {
          question: "O que caracteriza a autenticação multifator?",
          choices: [
            "Usar duas senhas diferentes, que pertencem ao mesmo tipo de fator",
            "Usar HTTPS e uma porta diferente para cada tentativa de login",
            "Usar uma senha maior e guardá-la em dois navegadores separados",
            "Exigir provas de categorias diferentes, como senha e aplicativo autenticador",
          ],
          correct: 3,
          explanation:
            "MFA combina fatores diferentes, como algo que o usuário sabe e algo que possui. Duas senhas continuam sendo um único tipo.",
        },
        medium: {
          question: "Qual é a relação entre 2FA e MFA?",
          choices: [
            "2FA usa exatamente dois fatores; MFA é o termo para dois ou mais fatores",
            "2FA protege sessões; MFA serve somente para criar usuários no IAM",
            "2FA usa tokens; MFA funciona apenas com certificados instalados no servidor",
            "2FA pertence ao SSH; MFA pertence exclusivamente a aplicações HTTP",
          ],
          correct: 0,
          explanation:
            "2FA é um caso específico de MFA com dois fatores. MFA abrange autenticação com dois ou mais fatores.",
        },
        hard: {
          question:
            "Depois que senha e segundo fator são aceitos, por que a aplicação normalmente emite um token?",
          choices: [
            "Para abrir automaticamente todas as portas usadas pelo usuário autenticado",
            "Para representar a sessão sem repetir todos os fatores em cada requisição",
            "Para substituir o endereço IP e impedir que o DNS guarde respostas em cache",
            "Para alterar as permissões do IAM sempre que uma nova página for acessada",
          ],
          correct: 1,
          explanation:
            "O MFA protege a autenticação. Depois do sucesso, o token permite que a aplicação reconheça a sessão nas próximas requisições.",
        },
      },
    },
    {
      id: "cookie-e-sessao",
      topic: "Cookie e sessão",
      lesson: "Conceito essencial: cookie e sessão",
      source: `${guide}#cookie-e-sessao`,
      questions: {
        easy: {
          question: "Como cookie e sessão normalmente se relacionam?",
          choices: [
            "O cookie inicia o servidor e a sessão abre a porta usada pelo HTTP",
            "O cookie substitui a senha e a sessão guarda a chave privada do TLS",
            "O cookie carrega um identificador usado para localizar ou reconhecer a sessão",
            "O cookie resolve o domínio e a sessão escolhe o endereço IP retornado",
          ],
          correct: 2,
          explanation:
            "A sessão mantém o estado do login. O navegador pode guardar em um cookie o identificador necessário para reconhecê-la.",
        },
        medium: {
          question:
            "Por que o usuário não precisa digitar a senha em cada página depois do login?",
          choices: [
            "Porque o DNS guarda a senha junto com o endereço IP do servidor",
            "Porque o Security Group associa a identidade a todas as portas abertas",
            "Porque o Apache transforma a senha em uma política permanente do IAM",
            "Porque o navegador envia dados que permitem ao servidor reconhecer a sessão",
          ],
          correct: 3,
          explanation:
            "Depois da autenticação, cookies e tokens permitem que o servidor relacione novas requisições à sessão já criada.",
        },
        hard: {
          question:
            "Apagar o cookie do navegador garante que a sessão deixou de existir no servidor?",
          choices: [
            "Não; o cliente perde o identificador, mas a sessão pode continuar válida até expirar ou ser revogada",
            "Sim; apagar qualquer cookie encerra imediatamente todas as sessões mantidas por qualquer aplicação",
            "Não; o cookie fica armazenado no DNS e volta automaticamente na próxima resolução do nome",
            "Sim; o Security Group detecta a exclusão local e remove a identidade correspondente no IAM",
          ],
          correct: 0,
          explanation:
            "Remover o cookie pode impedir aquele navegador de apresentar o identificador. O estado no servidor pode permanecer válido.",
        },
      },
    },
    {
      id: "token-de-sessao",
      topic: "Token de sessão",
      lesson: "Conceito essencial: token de sessão",
      source: `${guide}#token-de-sessao`,
      questions: {
        easy: {
          question: "O que representa um token de sessão?",
          choices: [
            "Uma regra de rede usada para liberar acesso ao endereço da instância",
            "Um registro DNS que aponta o domínio para o serviço autenticado",
            "Uma imagem usada para criar uma nova máquina virtual na AWS",
            "Um segredo que identifica uma sessão depois que o login foi concluído",
          ],
          correct: 3,
          explanation:
            "O token representa o estado autenticado. Enquanto for aceito, permite reconhecer requisições como pertencentes àquela sessão.",
        },
        medium: {
          question: "Qual é a diferença principal entre senha e token de sessão?",
          choices: [
            "A senha participa do login; o token representa a sessão criada após o login",
            "A senha identifica a porta; o token identifica o endereço IP do servidor",
            "A senha configura o DNS; o token instala o certificado usado pelo HTTPS",
            "A senha pertence ao EBS; o token pertence ao Security Group da instância",
          ],
          correct: 0,
          explanation:
            "A senha é uma prova usada na autenticação. O token é emitido depois e mantém o estado da sessão.",
        },
        hard: {
          question:
            "Por que um token válido deve ser protegido como uma credencial?",
          choices: [
            "Porque ele revela obrigatoriamente a senha original em texto puro",
            "Porque sua reutilização pode permitir agir como a sessão autenticada",
            "Porque ele altera as políticas do IAM para conceder acesso administrativo",
            "Porque ele controla o endereço IP publicado nos registros DNS do domínio",
          ],
          correct: 1,
          explanation:
            "Um token aceito pode autorizar requisições sem pedir novamente a senha e o MFA. Expiração e revogação limitam esse risco.",
        },
      },
    },
    {
      id: "c2",
      topic: "C2",
      lesson: "Conceito essencial: C2",
      source: `${guide}#c2`,
      questions: {
        easy: {
          question: "O que significa C2 em segurança?",
          choices: [
            "Command and Control, ou Comando e Controle",
            "Certificate and Connection, ou Certificado e Conexão",
            "Client and Cloud, ou Cliente e Nuvem",
            "Cookie and Cache, ou Cookie e Cache",
          ],
          correct: 0,
          explanation:
            "C2 significa Command and Control. É a estrutura usada para enviar tarefas a agentes remotos e receber resultados.",
        },
        medium: {
          question: "Como callback e C2 podem se relacionar?",
          choices: [
            "O C2 resolve o domínio e o callback emite o certificado TLS",
            "Um agente pode iniciar um callback para estabelecer comunicação com o C2",
            "O callback cria uma AMI e o C2 conecta automaticamente o volume EBS",
            "O C2 abre a porta no Security Group sem uma regra configurada na AWS",
          ],
          correct: 1,
          explanation:
            "Em um fluxo de callback, o agente remoto inicia a conexão de retorno para a infraestrutura de C2.",
        },
        hard: {
          question: "Por que uma instância EC2 não é automaticamente um servidor C2?",
          choices: [
            "Porque EC2 não aceita conexões de rede nem permite instalar programas",
            "Porque C2 funciona somente em hardware físico fora de provedores de nuvem",
            "Porque EC2 fornece computação; a função de C2 depende do software e do fluxo implantados",
            "Porque toda instância EC2 é apenas um registro DNS sem sistema operacional",
          ],
          correct: 2,
          explanation:
            "EC2 é infraestrutura de computação. Ela só exerce função de C2 quando executa software e comunicação destinados a comando e controle.",
        },
      },
    },
    {
      id: "proxy-reverso",
      topic: "Proxy reverso e AiTM",
      lesson: "Conceito essencial: proxy reverso e AiTM",
      source: `${guide}#proxy-reverso`,
      questions: {
        easy: {
          question: "O que faz um proxy reverso?",
          choices: [
            "Cria políticas do IAM para cada pessoa que acessa a aplicação",
            "Emite certificados TLS sem consultar uma autoridade certificadora",
            "Substitui o DNS e entrega endereços IP diretamente ao navegador",
            "Recebe pedidos antes do servidor e os encaminha para o destino",
          ],
          correct: 3,
          explanation:
            "O proxy reverso fica na frente de uma aplicação. Ele recebe a conexão do cliente e cria outra conexão com o serviço.",
        },
        medium: {
          question: "Por que um proxy AiTM mantém duas conexões?",
          choices: [
            "Uma liga o cliente ao proxy e outra liga o proxy à aplicação",
            "Uma transporta DNS e outra substitui todas as políticas do IAM",
            "Uma cria a instância e outra mantém o volume EBS permanentemente",
            "Uma abre a porta SSH e outra converte automaticamente SFTP em FTP",
          ],
          correct: 0,
          explanation:
            "O cliente conversa com o proxy, e o proxy conversa separadamente com a aplicação. As mensagens são encaminhadas entre os lados.",
        },
        hard: {
          question:
            "Por que um proxy AiTM não precisa quebrar a criptografia TLS da aplicação?",
          choices: [
            "Porque TLS deixa de funcionar sempre que um proxy reverso recebe uma conexão",
            "Porque o proxy encerra uma conexão TLS e abre outra conexão TLS independente",
            "Porque o Security Group envia a chave privada da aplicação para todo cliente",
            "Porque o DNS decifra os dados antes de entregar o endereço IP ao navegador",
          ],
          correct: 1,
          explanation:
            "São duas sessões TLS distintas. O proxy lê os dados entre a decifragem de uma conexão e a cifragem da outra.",
        },
      },
    },
    {
      id: "apache",
      topic: "Apache",
      lesson: "Ferramenta essencial: Apache",
      source: `${guide}#apache`,
      questions: {
        easy: {
          question: "Qual é a função do Apache no curso?",
          choices: [
            "Controlar identidades e políticas de acesso dentro da conta AWS",
            "Transferir arquivos pelo protocolo SFTP usando uma chave SSH",
            "Receber requisições web e devolver arquivos ou conteúdo processado",
            "Emitir certificados TLS e assinar a própria cadeia de confiança",
          ],
          correct: 2,
          explanation:
            "Apache é um servidor web. Ele escuta requisições HTTP ou HTTPS e produz a resposta correspondente.",
        },
        medium: {
          question: "Como Security Group e Apache participam de uma requisição HTTP?",
          choices: [
            "Apache libera a porta na AWS e o Security Group escolhe o arquivo da página",
            "Os dois executam a mesma função e qualquer um pode substituir o outro",
            "O Security Group processa PHP e o Apache valida políticas associadas ao IAM",
            "O Security Group permite a chegada; o Apache recebe e responde à requisição",
          ],
          correct: 3,
          explanation:
            "A regra de rede e o servidor web atuam em camadas diferentes. O tráfego precisa passar pelo filtro antes de chegar ao Apache.",
        },
        hard: {
          question:
            "O Apache responde localmente, mas não de outro computador. Onde investigar primeiro?",
          choices: [
            "No caminho externo: IP, rota, Security Group e possíveis filtros locais",
            "Na AMI original, porque ela bloqueia toda conexão criada após a inicialização",
            "No IAM, porque permissões de API controlam diretamente cada requisição HTTP",
            "No EBS, porque o disco escolhe quais endereços podem acessar a porta 80",
          ],
          correct: 0,
          explanation:
            "A resposta local mostra que o serviço funciona dentro da máquina. A falha externa aponta para rede, endereço ou filtros.",
        },
      },
    },
    {
      id: "php",
      topic: "PHP",
      lesson: "Ferramenta essencial: PHP",
      source: `${guide}#php`,
      questions: {
        easy: {
          question: "Onde o código PHP é executado em uma aplicação web tradicional?",
          choices: [
            "No DNS, antes que o endereço IP seja enviado ao cliente",
            "No Security Group, quando a regra libera a porta HTTP",
            "No navegador, junto com todo o HTML recebido da aplicação",
            "No servidor, que envia ao cliente apenas o resultado produzido",
          ],
          correct: 3,
          explanation:
            "PHP é executado no servidor. O navegador recebe a resposta gerada, não o código PHP original.",
        },
        medium: {
          question: "Como Apache e PHP trabalham juntos?",
          choices: [
            "O Apache recebe a requisição e encaminha o recurso PHP para processamento",
            "O PHP abre a porta no Security Group e depois inicia o processo Apache",
            "O Apache resolve o domínio e o PHP cria o registro A correspondente",
            "O PHP configura o IAM e o Apache escolhe as permissões da identidade",
          ],
          correct: 0,
          explanation:
            "Apache atende a requisição web e usa a integração configurada para executar o PHP e devolver seu resultado.",
        },
        hard: {
          question:
            "Um arquivo PHP é devolvido como texto em vez de ser executado. Qual é a explicação mais provável?",
          choices: [
            "O DNS guardou o arquivo no cache e removeu todas as instruções do programa",
            "O servidor web não está configurado para processar PHP naquele recurso",
            "O IAM negou ao navegador permissão para executar código dentro da conta AWS",
            "O EBS converteu o arquivo para texto porque a instância estava em execução",
          ],
          correct: 1,
          explanation:
            "Sem integração de processamento, o servidor pode tratar o arquivo como conteúdo comum em vez de executar o código PHP.",
        },
      },
    },
    {
      id: "certbot",
      topic: "Certbot, ACME e Let's Encrypt",
      lesson: "Ferramenta essencial: Certbot",
      source: `${guide}#certbot`,
      questions: {
        easy: {
          question: "Como Certbot, ACME e Let's Encrypt se relacionam?",
          choices: [
            "Certbot usa ACME para solicitar um certificado à Let's Encrypt",
            "ACME usa Certbot para criar uma AMI dentro da Let's Encrypt",
            "Let's Encrypt usa IAM para instalar Certbot em toda instância EC2",
            "Certbot usa SFTP para transformar Let's Encrypt em servidor DNS",
          ],
          correct: 0,
          explanation:
            "Certbot é o cliente, ACME é o protocolo de automação e Let's Encrypt é a autoridade que emite o certificado.",
        },
        medium: {
          question: "O que o Certbot pode fazer ao usar seu plugin do Apache?",
          choices: [
            "Criar políticas do IAM e restringir usuários da conta AWS",
            "Solicitar o certificado e ajustar a configuração TLS do Apache",
            "Trocar o volume EBS e recriar a instância usando outra AMI",
            "Converter o protocolo SFTP em FTPS durante uma transferência",
          ],
          correct: 1,
          explanation:
            "O plugin pode participar da validação do domínio, obter o certificado e configurar o Apache para apresentá-lo.",
        },
        hard: {
          question:
            "Por que instalar Certbot não garante que um certificado será emitido?",
          choices: [
            "Porque certificados só podem ser emitidos depois que o volume EBS é removido",
            "Porque o IAM precisa transformar a identidade do usuário em servidor DNS",
            "Porque a autoridade ainda precisa validar o controle do nome solicitado",
            "Porque o Apache deve usar SSH em vez de HTTP durante toda validação",
          ],
          correct: 2,
          explanation:
            "A autoridade certificadora precisa comprovar que o solicitante controla o domínio. DNS e alcance do desafio precisam estar corretos.",
        },
      },
    },
    {
      id: "evilginx",
      topic: "Evilginx e session replay",
      lesson: "Ferramenta essencial: Evilginx",
      source: `${guide}#evilginx`,
      questions: {
        easy: {
          question: "O que é Evilginx?",
          choices: [
            "Um gerenciador de discos EBS usado para copiar máquinas virtuais",
            "Um resolvedor DNS que cria registros A e CNAME automaticamente",
            "Um cliente SSH usado apenas para transferir arquivos por SFTP",
            "Um framework de proxy reverso AiTM para fluxos de autenticação web",
          ],
          correct: 3,
          explanation:
            "Evilginx intermedeia a comunicação entre cliente e aplicação por meio de duas conexões separadas.",
        },
        medium: {
          question:
            "Por que o funcionamento do Evilginx não significa quebrar criptograficamente o MFA?",
          choices: [
            "Porque o usuário conclui o desafio verdadeiro e o proxy observa a sessão criada depois",
            "Porque o MFA deixa de existir quando a aplicação usa um certificado TLS válido",
            "Porque o proxy calcula o segundo fator sem receber qualquer mensagem do cliente",
            "Porque o Security Group converte o token de sessão na senha original do usuário",
          ],
          correct: 0,
          explanation:
            "O MFA é validado pela aplicação. O risco surge porque o token da sessão autenticada também passa pelo intermediário.",
        },
        hard: {
          question:
            "Qual medida reduz diretamente a possibilidade de session replay?",
          choices: [
            "Aumentar o TTL do DNS para manter o mesmo endereço por mais tempo",
            "Usar tokens curtos, revogáveis e vinculados ao contexto ou dispositivo",
            "Liberar mais portas no Security Group para evitar falhas de conexão",
            "Criar a instância a partir de uma AMI com mais programas instalados",
          ],
          correct: 1,
          explanation:
            "Expiração curta, revogação e vínculo ao contexto limitam onde e por quanto tempo um token capturado pode ser reutilizado.",
        },
      },
    },
  ];

  const questions = concepts.flatMap((concept, conceptIndex) =>
    levels.map((difficulty) => ({
      id: `exam-${String(conceptIndex + 1).padStart(2, "0")}-${difficulty}`,
      scope: "exam",
      concept: concept.id,
      difficulty,
      topic: concept.topic,
      lesson: concept.lesson,
      source: concept.source,
      ...concept.questions[difficulty],
    }))
  );

  window.CYBER_QUIZ_QUESTIONS.push(...questions);
})();
