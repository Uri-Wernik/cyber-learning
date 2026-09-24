window.CYBER_QUIZ_QUESTIONS = window.CYBER_QUIZ_QUESTIONS || [];
window.CYBER_QUIZ_QUESTIONS.push(
  ...[
    {
      id: "exam-01-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "Camadas de acesso",
      lesson: "Aula 1: Visão geral do curso",
      source:
        "01-introduction-to-cloud-computing-for-hackers/01-teaser/",
      question:
        "Qual opção diferencia conta, navegador e sistema operacional?",
      choices: [
        "Conta acessa um serviço; navegador executa conteúdo web; sistema executa processos locais com seus privilégios",
        "Conta controla o hardware; navegador cria usuários; sistema operacional apenas exibe páginas recebidas pela rede",
        "Conta e navegador são a mesma camada; sistema operacional serve somente para armazenar os arquivos baixados",
        "Conta define a porta de rede; navegador cria o endereço IP; sistema operacional registra o nome de domínio",
      ],
      correct: 0,
      explanation:
        "São três camadas diferentes. A conta existe dentro de um serviço, o navegador executa conteúdo web dentro de limites próprios e o sistema operacional executa processos locais com as permissões do usuário.",
    },
    {
      id: "exam-01-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "HTTPS e legitimidade",
      lesson: "Aula 1: Visão geral do curso",
      source:
        "01-introduction-to-cloud-computing-for-hackers/01-teaser/",
      question:
        "Ao ver HTTPS e um cadeado no navegador, qual conclusão é tecnicamente correta?",
      choices: [
        "O navegador confirmou que a organização por trás da página é honesta e que o conteúdo não pode imitar outro site",
        "A conexão com o domínio exibido usa proteção criptográfica, mas isso não comprova a intenção de quem controla a página",
        "O certificado impede páginas de phishing, embora não proteja outros tipos de conteúdo servido pelo mesmo domínio",
        "A comunicação está protegida apenas para senhas, enquanto os demais campos continuam trafegando sem criptografia",
      ],
      correct: 1,
      explanation:
        "HTTPS protege confidencialidade e integridade no transporte e ajuda a autenticar o domínio apresentado. Ele não julga a finalidade da página nem garante que o responsável pelo domínio seja confiável.",
    },
    {
      id: "exam-01-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Sessão autenticada e MFA",
      lesson: "Aula 1: Visão geral do curso",
      source:
        "01-introduction-to-cloud-computing-for-hackers/01-teaser/",
      question:
        "Por que reutilizar um token de sessão não significa quebrar criptograficamente o MFA?",
      choices: [
        "Porque o token contém somente o nome público do usuário e exige que todos os fatores sejam digitados novamente a cada requisição",
        "Porque o navegador remove o segundo fator do fluxo e passa a validar apenas a senha armazenada no servidor de identidade",
        "Porque o token representa uma autenticação já concluída; reutilizá-lo tenta aproveitar essa sessão, sujeita aos controles do serviço",
        "Porque o MFA protege exclusivamente o cadastro inicial da conta e deixa de participar das autenticações realizadas depois",
      ],
      correct: 2,
      explanation:
        "O serviço emite o token depois que a autenticação, inclusive o MFA, foi aceita. A reutilização tenta agir como aquela sessão, sem decifrar o segundo fator. Validade curta, vínculo ao dispositivo e nova autenticação podem impedir o uso.",
    },
    {
      id: "exam-02-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "Autenticação e autorização",
      lesson: "Aula 2: Pentest e Red Team",
      source:
        "01-introduction-to-cloud-computing-for-hackers/02-introduction-to-hacking-using-the-cloud/",
      question:
        "Qual é a diferença entre autenticação e autorização?",
      choices: [
        "Autenticação cifra a rede; autorização escolhe qual endereço IP será usado pelo dispositivo conectado",
        "Autenticação cria a conta; autorização guarda a senha em um cookie permanente dentro do navegador",
        "Autenticação inicia o servidor; autorização abre automaticamente todas as portas necessárias no firewall",
        "Autenticação confirma uma identidade; autorização define quais ações essa identidade pode executar",
      ],
      correct: 3,
      explanation:
        "Primeiro o sistema verifica a identidade por senha, chave ou outro fator. Depois consulta regras de autorização para decidir quais recursos e operações aquela identidade pode usar.",
    },
    {
      id: "exam-02-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "Pentest e Red Team",
      lesson: "Aula 2: Pentest e Red Team",
      source:
        "01-introduction-to-cloud-computing-for-hackers/02-introduction-to-hacking-using-the-cloud/",
      question:
        "Qual comparação descreve melhor a diferença de objetivo entre pentest e Red Team?",
      choices: [
        "O pentest busca encontrar e comprovar falhas dentro de um escopo; o Red Team avalia objetivos e controles em um cenário adversário",
        "O pentest testa somente redes internas; o Red Team testa somente aplicações que estejam publicadas diretamente na Internet",
        "O pentest mede somente disponibilidade; o Red Team mede apenas a velocidade usada para corrigir cada resultado",
        "O pentest corrige cada falha encontrada; o Red Team administra permanentemente os controles defensivos da organização",
      ],
      correct: 0,
      explanation:
        "O pentest costuma identificar e demonstrar vulnerabilidades em um conjunto definido de sistemas. O Red Team trabalha por objetivos e observa como pessoas, processos e tecnologia respondem juntos.",
    },
    {
      id: "exam-02-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Camadas de comprometimento",
      lesson: "Aula 2: Pentest e Red Team",
      source:
        "01-introduction-to-cloud-computing-for-hackers/02-introduction-to-hacking-using-the-cloud/",
      question:
        "Uma conta web foi acessada com uma sessão válida. O que ainda precisa ser demonstrado antes de afirmar controle do sistema operacional?",
      choices: [
        "Que a conta possui um endereço de e-mail verificado e que o navegador manteve a sessão aberta por mais de uma requisição válida",
        "Que houve execução fora dos limites da conta e do navegador, com um processo local e privilégios identificados no sistema",
        "Que a página usou HTTPS e que o token de sessão pôde consultar dados pertencentes ao serviço autenticado sem qualquer limitação",
        "Que o navegador carregou scripts da aplicação e que a política de mesma origem permitiu acesso permanente ao próprio domínio",
      ],
      correct: 1,
      explanation:
        "Acesso à conta, execução no navegador e execução no sistema são camadas diferentes. Para alegar controle do sistema é preciso comprovar código executando como processo local, identificar o usuário e os privilégios obtidos e não apenas mostrar ações dentro da aplicação web.",
    },
    {
      id: "exam-03-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "Computação em nuvem",
      lesson: "Aula 3: O que é computação em nuvem?",
      source:
        "01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud/",
      question:
        "O que a expressão computação em nuvem descreve neste livro?",
      choices: [
        "Uma rede separada da Internet, formada apenas por servidores virtuais sem hardware físico no provedor",
        "Um site que armazena arquivos remotos e substitui todos os sistemas operacionais instalados nas máquinas",
        "Recursos computacionais reais oferecidos como serviço, provisionados e administrados por meio de abstrações",
        "Um protocolo de transporte usado para conectar navegadores diretamente a máquinas virtuais de qualquer provedor",
      ],
      correct: 2,
      explanation:
        "A nuvem usa datacenters, servidores, redes e armazenamento reais. O provedor apresenta esses recursos por meio de serviços e planos de controle que permitem provisionar, alterar e remover capacidade sob demanda.",
    },
    {
      id: "exam-03-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "IP, domínio, URL e porta",
      lesson: "Aula 3: O que é computação em nuvem?",
      source:
        "01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud/",
      question:
        "Qual descrição relaciona corretamente endereço IP, domínio, URL e porta?",
      choices: [
        "O IP nomeia o serviço, o domínio identifica um processo, a URL escolhe a interface e a porta define o caminho do arquivo",
        "O IP identifica o protocolo, o domínio substitui o roteador, a URL inicia o serviço e a porta escolhe o servidor físico",
        "O IP identifica o usuário, o domínio registra a sessão, a URL cifra o conteúdo e a porta autentica o navegador",
        "O IP identifica uma interface, o domínio resolve para endereço, a URL inclui protocolo e caminho, e a porta aponta o serviço",
      ],
      correct: 3,
      explanation:
        "O endereço IP identifica uma interface na rede. O domínio é um nome resolvido para um endereço. A URL informa como acessar um recurso, inclusive esquema e caminho. A porta é um identificador lógico usado para entregar o tráfego ao processo adequado.",
    },
    {
      id: "exam-03-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Fluxo de uma requisição web",
      lesson: "Aula 3: O que é computação em nuvem?",
      source:
        "01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud/",
      question:
        "Qual sequência representa o caminho de uma requisição HTTP feita a um domínio público?",
      choices: [
        "DNS obtém um IP, a rede roteia os pacotes, filtros permitem a porta e o sistema entrega a conexão ao processo em escuta",
        "HTTP encontra o endereço MAC remoto, o navegador abre o firewall e o DNS seleciona o arquivo dentro do document root",
        "A URL inicia o servidor, o roteador cria o domínio e o processo web escolhe um IP público para devolver a resposta",
        "O certificado resolve o domínio, o Security Group inicia o Apache e o TCP transfere diretamente o arquivo ao navegador",
      ],
      correct: 0,
      explanation:
        "Primeiro o nome é resolvido para um endereço. Depois o tráfego é roteado, atravessa os controles de rede permitidos, chega à porta de destino e é entregue ao processo que está em escuta. Esse processo interpreta a requisição e produz a resposta.",
    },
    {
      id: "exam-04-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "Cliente e servidor",
      lesson: "Aula 4: Nuvem em testes autorizados",
      source:
        "01-introduction-to-cloud-computing-for-hackers/04-why-learn-cloud-computing-as-a-hacker/",
      question:
        "O que define os papéis de cliente e servidor em uma comunicação de rede?",
      choices: [
        "O cliente sempre é o computador local, enquanto o servidor sempre precisa estar em uma nuvem pública",
        "O cliente inicia a interação com um serviço, e o servidor escuta e responde naquele fluxo específico",
        "O cliente possui IP privado, enquanto o servidor obrigatoriamente possui um endereço IP público permanente",
        "O cliente usa uma porta fixa, enquanto o servidor escolhe qualquer porta nova para cada pacote recebido",
      ],
      correct: 1,
      explanation:
        "Cliente e servidor descrevem papéis no fluxo, não tipos permanentes de máquina. O cliente inicia uma solicitação e o processo servidor aguarda conexões em uma porta. A mesma máquina pode exercer papéis diferentes em comunicações diferentes.",
    },
    {
      id: "exam-04-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "Conexão direta e callback",
      lesson: "Aula 4: Nuvem em testes autorizados",
      source:
        "01-introduction-to-cloud-computing-for-hackers/04-why-learn-cloud-computing-as-a-hacker/",
      question:
        "Qual é a diferença de direção entre uma conexão direta e um callback?",
      choices: [
        "Na conexão direta o servidor resolve DNS; no callback o cliente ignora endereços e comunica apenas por nomes locais",
        "Na conexão direta o tráfego usa TCP; no callback o retorno precisa usar UDP para atravessar qualquer firewall",
        "Na conexão direta o operador inicia o acesso ao destino; no callback um componente no destino inicia o retorno ao receptor",
        "Na conexão direta existe autenticação; no callback não pode haver criptografia, identidade ou controle de sessão",
      ],
      correct: 2,
      explanation:
        "Na conexão direta, o lado do operador abre a comunicação com o serviço no destino. Em um callback, um componente executado no destino inicia uma conexão de saída para um receptor preparado. Os dois fluxos ainda dependem de endereço, rota, porta, processo e regras de rede.",
    },
    {
      id: "exam-04-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "EC2, C2 e encerramento do laboratório",
      lesson: "Aula 4: Nuvem em testes autorizados",
      source:
        "01-introduction-to-cloud-computing-for-hackers/04-why-learn-cloud-computing-as-a-hacker/",
      question:
        "Por que uma instância EC2 não é automaticamente um servidor C2, e o que deve ocorrer ao encerrar o laboratório?",
      choices: [
        "EC2 é um protocolo de comando; vira C2 ao receber IP privado, e basta fechar o terminal para eliminar recursos e registros em uso",
        "EC2 é um sistema operacional; vira C2 ao instalar Kali, e basta parar o navegador para remover armazenamento e regras em qualquer rede",
        "EC2 é uma regra de rede; vira C2 quando libera portas, e basta desconectar o SSH para interromper toda cobrança futura da sessão",
        "EC2 fornece computação; só atua como C2 com software e fluxo próprios, e recursos, exposição e custos devem ser encerrados",
      ],
      correct: 3,
      explanation:
        "EC2 é o serviço de máquinas virtuais da AWS. C2 descreve uma função de comando e controle que depende de software, comunicação e operação específicos. Ao terminar, é necessário remover ou encerrar recursos, revisar regras expostas e confirmar que não restaram custos.",
    },
    {
      id: "exam-05-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "Estados da instância EC2",
      lesson: "Aula 5: Roteiro e laboratório seguro",
      source: "02-cloud-basics/05-introduction-to-cloud-basics/",
      question:
        "Qual é a diferença principal entre parar e encerrar uma instância EC2?",
      choices: [
        "Parar desliga a computação preservando o recurso; encerrar remove a instância e pode eliminar volumes configurados para exclusão",
        "Parar exclui imediatamente a instância; encerrar apenas bloqueia novas conexões até que o usuário faça login novamente",
        "Parar remove o armazenamento e mantém o processador; encerrar conserva todos os componentes sem gerar qualquer custo",
        "Parar altera o sistema operacional para modo seguro; encerrar restaura automaticamente a imagem usada na criação",
      ],
      correct: 0,
      explanation:
        "Uma instância parada pode ser iniciada novamente e seus recursos persistentes continuam existindo. Encerrar é a ação de remover a instância. Volumes com exclusão configurada também podem ser apagados, por isso a consequência precisa ser conferida.",
    },
    {
      id: "exam-05-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "Custos residuais na nuvem",
      lesson: "Aula 5: Roteiro e laboratório seguro",
      source: "02-cloud-basics/05-introduction-to-cloud-basics/",
      question:
        "Por que uma instância parada não garante que o laboratório deixou de gerar custos?",
      choices: [
        "Porque o sistema operacional continua executando todos os processos, mesmo quando o estado exibido é stopped",
        "Porque a AWS converte automaticamente a instância parada em outro serviço pago sem registrar a mudança no console",
        "Porque volumes, endereços e outros recursos associados podem continuar provisionados e cobrados separadamente",
        "Porque o Security Group cobra por cada regra enquanto a instância não recebe uma nova chave de acesso",
      ],
      correct: 2,
      explanation:
        "Parar normalmente interrompe a cobrança de computação da instância, mas não remove recursos independentes. Armazenamento, snapshots, endereços e outros componentes podem permanecer ativos e ter cobrança própria.",
    },
    {
      id: "exam-05-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Verificação antes e depois do uso",
      lesson: "Aula 5: Roteiro e laboratório seguro",
      source: "02-cloud-basics/05-introduction-to-cloud-basics/",
      question:
        "Qual rotina reduz melhor o risco operacional e financeiro de um laboratório em nuvem?",
      choices: [
        "Criar a instância, confiar no Free Tier, abrir todas as portas necessárias e verificar a fatura detalhada apenas no fim do mês",
        "Confirmar região, estado, regras e orçamento antes do uso; ao final, encerrar recursos e revisar o console de cobrança",
        "Manter a instância sempre ligada, reutilizar as mesmas credenciais e remover apenas os arquivos criados no sistema que permanecerem ativos",
        "Parar a instância, excluir o histórico do terminal e assumir que volumes, endereços e regras da conta desapareceram juntos",
      ],
      correct: 1,
      explanation:
        "O ciclo seguro começa antes da execução: confirmar conta, região, recurso correto, exposição e alertas de orçamento. O encerramento exige remover o que não será reutilizado e verificar tanto o inventário quanto a área de custos.",
    },
  ]
);

window.CYBER_QUIZ_QUESTIONS.push(
  ...[
    {
      id: "exam-16-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "Função do DNS",
      lesson: "Aula 16: Domínio e DNS",
      source: "04-preparacao-para-prova/01-guia-de-estudo/#dns",
      question: "Para que serve o DNS?",
      choices: [
        "Responder consultas sobre nomes, fornecendo dados como o endereço IP associado a um domínio",
        "Transportar páginas HTML entre navegadores sem precisar de endereço IP, rota ou porta de destino",
        "Criptografar todo o tráfego de rede e validar automaticamente o conteúdo publicado em cada servidor",
        "Criar contas no sistema operacional e escolher quais arquivos cada processo poderá ler ou modificar",
      ],
      correct: 0,
      explanation:
        "DNS é um sistema de nomes. Ele fornece registros como endereços IP, mas não transporta a página e não abre a conexão com o servidor web.",
    },
    {
      id: "exam-16-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "Registros A, AAAA e CNAME",
      lesson: "Aula 16: Domínio e DNS",
      source: "04-preparacao-para-prova/01-guia-de-estudo/#dns",
      question: "Qual relação entre registros DNS está correta?",
      choices: [
        "A aponta para IPv6, AAAA cria um alias e CNAME guarda diretamente o endereço IPv4 do servidor",
        "A aponta para IPv4, AAAA aponta para IPv6 e CNAME declara que um nome é alias de outro nome",
        "A escolhe a porta HTTP, AAAA instala o certificado e CNAME inicia o processo servidor na máquina",
        "A transporta a página, AAAA cifra a resposta e CNAME autentica o usuário antes da conexão TCP",
      ],
      correct: 1,
      explanation:
        "A e AAAA são registros de endereço para IPv4 e IPv6. CNAME aponta um nome alternativo para outro nome, que depois precisa ser resolvido.",
    },
    {
      id: "exam-16-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Caminho da resolução DNS",
      lesson: "Aula 16: Domínio e DNS",
      source: "04-preparacao-para-prova/01-guia-de-estudo/#dns",
      question:
        "O que acontece quando o computador não possui em cache o IP de um domínio?",
      choices: [
        "O navegador escolhe um IP aleatório, abre a porta 443 e espera que o certificado indique o servidor correto",
        "O sistema envia HTTP ao registrador, que devolve o arquivo solicitado e grava o resultado no Security Group",
        "Um resolvedor busca a resposta na hierarquia DNS, consulta a fonte autoritativa e devolve o registro ao cliente",
        "O Apache consulta a chave privada, transforma o domínio em rota e envia a resposta diretamente ao navegador",
      ],
      correct: 2,
      explanation:
        "O resolvedor verifica seu cache e, quando necessário, percorre a hierarquia até encontrar o servidor autoritativo. Depois devolve a resposta ao computador, que inicia uma conexão separada.",
    },
    {
      id: "exam-17-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "Registro A",
      lesson: "Aula 17: Ligando domínio ao servidor",
      source: "04-preparacao-para-prova/01-guia-de-estudo/#dns",
      question: "O que um registro DNS do tipo A informa?",
      choices: [
        "Qual processo deve iniciar no servidor depois que o navegador enviar uma requisição para o domínio",
        "Qual certificado TLS precisa ser instalado para que qualquer subdomínio seja aceito pelo navegador",
        "Qual arquivo do document root deve ser devolvido para todas as URLs recebidas pelo servidor Apache",
        "Qual endereço IPv4 está associado ao nome consultado pelo cliente naquele momento",
      ],
      correct: 3,
      explanation:
        "O registro A associa um nome a um IPv4. Depois de receber esse endereço, o cliente ainda precisa alcançar a porta e conversar com o serviço.",
    },
    {
      id: "exam-17-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "CNAME e TTL",
      lesson: "Aula 17: Ligando domínio ao servidor",
      source: "04-preparacao-para-prova/01-guia-de-estudo/#dns",
      question:
        "Como CNAME e TTL influenciam uma alteração de nome no DNS?",
      choices: [
        "CNAME cria um alias para outro nome; TTL define por quanto tempo uma resposta anterior pode permanecer em cache",
        "CNAME cria uma nova porta no servidor; TTL define quantas conexões HTTP o Apache pode manter abertas",
        "CNAME copia um certificado TLS; TTL define por quanto tempo a chave privada pode ser usada pelo navegador",
        "CNAME redireciona o navegador por HTTP; TTL define quantas vezes o cliente seguirá o novo endereço",
      ],
      correct: 0,
      explanation:
        "CNAME relaciona um alias a um nome canônico. O TTL controla o cache, por isso alguns resolvedores podem continuar devolvendo uma resposta antiga até esse tempo terminar.",
    },
    {
      id: "exam-17-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "DNS correto e serviço indisponível",
      lesson: "Aula 17: Ligando domínio ao servidor",
      source: "04-preparacao-para-prova/01-guia-de-estudo/#dns",
      question:
        "O domínio resolve para o IP esperado, mas a página não abre. Qual conclusão é correta?",
      choices: [
        "O registro DNS está necessariamente errado, pois uma resposta A correta também comprova HTTP e Apache",
        "A resolução funcionou; rota, filtro de rede, porta e processo web ainda precisam ser verificados separadamente",
        "O CNAME precisa substituir o registro A, pois somente aliases conseguem abrir serviços publicados na Internet",
        "O TTL deve ser definido como zero, pois qualquer cache impede o navegador de iniciar uma conexão TCP",
      ],
      correct: 1,
      explanation:
        "DNS apenas forneceu o endereço. A conexão ainda depende de rota, Security Group, firewall, porta e servidor web em execução.",
    },
    {
      id: "exam-18-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "HTTPS e TLS",
      lesson: "Aula 18: Introdução ao HTTPS",
      source:
        "04-preparacao-para-prova/01-guia-de-estudo/#http-https-e-tls",
      question: "O que significa HTTPS?",
      choices: [
        "Um tipo de DNS que esconde o endereço IP e escolhe automaticamente a página inicial do servidor",
        "Um formato de arquivo usado pelo Apache para guardar senhas e tokens recebidos em formulários",
        "HTTP transmitido dentro de uma conexão protegida pelo protocolo TLS",
        "Uma versão do SSH criada para transferir páginas web diretamente pelo terminal",
      ],
      correct: 2,
      explanation:
        "HTTPS mantém as regras do HTTP, mas usa TLS para proteger a comunicação entre cliente e servidor.",
    },
    {
      id: "exam-18-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "Certificado e chave privada",
      lesson: "Aula 18: Introdução ao HTTPS",
      source:
        "04-preparacao-para-prova/01-guia-de-estudo/#http-https-e-tls",
      question:
        "Qual é a diferença entre um certificado TLS e sua chave privada?",
      choices: [
        "O certificado permanece secreto no servidor; a chave privada é enviada a todo cliente durante o handshake",
        "O certificado escolhe a rota da Internet; a chave privada abre a porta 443 no firewall da instância",
        "O certificado guarda cookies do usuário; a chave privada recupera sessões expiradas no banco de dados",
        "O certificado associa nomes a uma chave pública; a chave privada fica no servidor e prova sua posse",
      ],
      correct: 3,
      explanation:
        "O servidor apresenta o certificado aos clientes. A chave privada correspondente não é enviada e participa da prova criptográfica de identidade.",
    },
    {
      id: "exam-18-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Handshake TLS",
      lesson: "Aula 18: Introdução ao HTTPS",
      source:
        "04-preparacao-para-prova/01-guia-de-estudo/#http-https-e-tls",
      question:
        "Por que o TLS moderno cria chaves de sessão em vez de cifrar todos os dados diretamente com a chave do certificado?",
      choices: [
        "A criptografia assimétrica autentica e estabelece segredos; chaves simétricas derivadas protegem os dados com mais eficiência",
        "A chave do certificado funciona apenas com DNS, enquanto as chaves de sessão liberam as portas TCP no servidor",
        "O certificado deixa de ser válido após o primeiro pacote, então o navegador precisa solicitar outro a cada resposta",
        "As chaves de sessão removem a necessidade de validar nome, prazo e cadeia de confiança durante o handshake",
      ],
      correct: 0,
      explanation:
        "O handshake usa mecanismos assimétricos para autenticação e acordo de segredos. A partir deles, os dois lados derivam chaves simétricas rápidas para proteger a sessão.",
    },
    {
      id: "exam-19-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "Let's Encrypt, ACME e Certbot",
      lesson: "Aula 19: Habilitando HTTPS",
      source:
        "04-preparacao-para-prova/01-guia-de-estudo/#ferramentas-em-uma-frase",
      question:
        "Como Let's Encrypt, ACME e Certbot se relacionam?",
      choices: [
        "Let's Encrypt é o servidor web, ACME é o certificado e Certbot é a porta usada para receber HTTPS",
        "Let's Encrypt emite certificados, ACME define a automação e Certbot é um cliente desse protocolo",
        "Let's Encrypt resolve DNS, ACME cria usuários Linux e Certbot transfere arquivos para o document root",
        "Let's Encrypt é a chave privada, ACME é o domínio e Certbot é a autoridade raiz instalada no navegador",
      ],
      correct: 1,
      explanation:
        "Let's Encrypt é uma autoridade certificadora. ACME é o protocolo de validação e emissão automatizada. Certbot é um programa que conversa por ACME.",
    },
    {
      id: "exam-19-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "Desafio HTTP-01",
      lesson: "Aula 19: Habilitando HTTPS",
      source:
        "04-preparacao-para-prova/01-guia-de-estudo/#ferramentas-em-uma-frase",
      question:
        "Como o desafio ACME HTTP-01 confirma o controle de um domínio?",
      choices: [
        "A autoridade pede a senha da conta AWS e verifica se ela também funciona no usuário root do Linux",
        "O navegador envia a chave privada por HTTPS e a autoridade compara seu conteúdo com o registro CNAME",
        "O cliente publica uma resposta temporária e a autoridade tenta buscá-la pelo domínio usando HTTP na porta 80",
        "O Apache envia todos os arquivos do site e a autoridade confirma se o conteúdo combina com o nome registrado",
      ],
      correct: 2,
      explanation:
        "No HTTP-01, o cliente ACME disponibiliza um token em um caminho conhecido. A autoridade consulta o domínio e tenta obter a resposta pela porta 80.",
    },
    {
      id: "exam-19-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Diagnóstico de emissão TLS",
      lesson: "Aula 19: Habilitando HTTPS",
      source:
        "04-preparacao-para-prova/01-guia-de-estudo/#ferramentas-em-uma-frase",
      question:
        "O DNS aponta corretamente, mas o HTTP-01 falha. O que ainda pode impedir a validação?",
      choices: [
        "O navegador não possui cookie de sessão, embora o desafio ACME seja executado pelo servidor e pela autoridade",
        "A chave SSH usa outro formato, embora o desafio HTTP não dependa da autenticação do terminal local",
        "O volume EBS tem espaço livre, embora o endereço público seja suficiente para responder qualquer requisição",
        "A porta 80 pode estar bloqueada, o Apache pode estar parado ou o caminho do desafio pode ir a outro host",
      ],
      correct: 3,
      explanation:
        "DNS correto comprova somente a resolução. A autoridade ainda precisa alcançar TCP 80 e receber do servidor correto a resposta temporária preparada pelo cliente ACME.",
    },
    {
      id: "exam-20-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "Definição de Evilginx",
      lesson: "Aula 20: Introdução ao Evilginx",
      source:
        "04-preparacao-para-prova/01-guia-de-estudo/#como-o-evilginx-funciona",
      question: "O que é Evilginx?",
      choices: [
        "Um framework de proxy reverso AiTM que intermedeia fluxos de autenticação web",
        "Um cliente SSH usado para administrar instâncias por meio de uma chave privada local",
        "Um servidor DNS recursivo que converte automaticamente qualquer URL em endereço IPv4",
        "Um plugin do Apache que renova certificados TLS sem conversar com uma autoridade certificadora",
      ],
      correct: 0,
      explanation:
        "Evilginx atua como intermediário entre navegador e aplicação. Ele mantém duas conexões e encaminha o tráfego nos dois sentidos.",
    },
    {
      id: "exam-20-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "Duas conexões do proxy",
      lesson: "Aula 20: Introdução ao Evilginx",
      source:
        "04-preparacao-para-prova/01-guia-de-estudo/#como-o-evilginx-funciona",
      question:
        "Como um proxy AiTM intermedeia uma autenticação protegida por TLS?",
      choices: [
        "Ele quebra a chave privada da aplicação e usa a mesma conexão criptográfica nos dois lados do fluxo",
        "Ele encerra TLS em seu domínio e abre outra conexão TLS separada com a aplicação de destino",
        "Ele remove TCP da comunicação e encaminha os campos do formulário diretamente por registros DNS",
        "Ele converte o certificado do destino em uma chave SSH e entrega essa chave ao navegador conectado",
      ],
      correct: 1,
      explanation:
        "O navegador estabelece TLS com o proxy, e o proxy estabelece outro TLS com a aplicação. O intermediário vê os dados entre a decifragem de uma conexão e a cifragem da outra.",
    },
    {
      id: "exam-20-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Função de um phishlet",
      lesson: "Aula 20: Introdução ao Evilginx",
      source:
        "04-preparacao-para-prova/01-guia-de-estudo/#como-o-evilginx-funciona",
      question:
        "Por que um phishlet depende do comportamento da aplicação intermediada?",
      choices: [
        "Porque ele contém a AMI e precisa recriar a máquina virtual sempre que a página muda de aparência",
        "Porque ele substitui o DNS público e precisa escolher uma nova porta para cada resposta recebida",
        "Porque suas regras reconhecem hosts, caminhos e cookies, que podem mudar quando a aplicação altera o fluxo",
        "Porque ele guarda a chave privada do usuário e precisa convertê-la quando o navegador atualiza o certificado",
      ],
      correct: 2,
      explanation:
        "Um phishlet descreve elementos específicos do fluxo web. Mudanças de domínio, caminho, cabeçalho ou cookie podem fazer essas regras deixarem de corresponder.",
    },
    {
      id: "exam-21-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "Componentes de compilação",
      lesson: "Aula 21: Componentes do Evilginx",
      source:
        "04-preparacao-para-prova/01-guia-de-estudo/#como-o-evilginx-funciona",
      question:
        "Qual é o papel geral de Git, Go e Make em um projeto como Evilginx?",
      choices: [
        "Git emite o certificado, Go configura o DNS e Make abre as portas necessárias no Security Group",
        "Git hospeda a página, Go transfere os arquivos por SFTP e Make cria o usuário remoto no Linux",
        "Git autentica o domínio, Go atua como proxy e Make substitui o servidor autoritativo da zona DNS",
        "Git obtém o código, Go fornece a linguagem e Make coordena as etapas definidas para a compilação",
      ],
      correct: 3,
      explanation:
        "Git gerencia e obtém versões do código. Go é a linguagem e seu conjunto de ferramentas. Make executa uma sequência de tarefas descrita pelo projeto.",
    },
    {
      id: "exam-21-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "Domínio, DNS, IP e TLS",
      lesson: "Aula 21: Componentes do Evilginx",
      source:
        "04-preparacao-para-prova/01-guia-de-estudo/#como-o-evilginx-funciona",
      question:
        "Por que domínio, DNS, IP e certificado TLS precisam ser coerentes em um proxy web?",
      choices: [
        "O domínio precisa resolver para o proxy, a rede precisa alcançá-lo e o certificado precisa cobrir o nome solicitado",
        "O domínio substitui a porta, o DNS inicia o processo e o certificado escolhe o endereço IP usado pelo cliente",
        "O domínio compila o programa, o DNS cria cookies e o certificado instala automaticamente cada phishlet disponível",
        "O domínio guarda a sessão, o DNS valida a senha e o certificado transfere os arquivos do navegador ao servidor",
      ],
      correct: 0,
      explanation:
        "O cliente resolve o nome pelo DNS, conecta ao IP e valida se o certificado apresentado cobre aquele host. Uma inconsistência interrompe o fluxo em sua respectiva camada.",
    },
    {
      id: "exam-21-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Dependências de publicação",
      lesson: "Aula 21: Componentes do Evilginx",
      source:
        "04-preparacao-para-prova/01-guia-de-estudo/#como-o-evilginx-funciona",
      question:
        "O processo do proxy está ativo, mas o navegador não consegue abrir seu domínio. Qual sequência de verificação é mais útil?",
      choices: [
        "Trocar a linguagem Go, recriar o repositório Git e alterar o conteúdo do phishlet antes de verificar a rede",
        "Confirmar resolução DNS, IP atual, filtros de rede, portas em escuta e certificado apresentado para o host",
        "Apagar o token de sessão, mudar o usuário do Apache e recriar o volume EBS sem testar o endereço publicado",
        "Alterar o TTL para zero, desativar TCP e usar somente CNAME para transportar a página até o navegador",
      ],
      correct: 1,
      explanation:
        "Um processo ativo não comprova publicação. O diagnóstico deve seguir o caminho real: nome, endereço, rede, listener e TLS.",
    },
    {
      id: "exam-22-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "Senha e token de sessão",
      lesson: "Aula 22: Token de sessão e MFA",
      source:
        "04-preparacao-para-prova/01-guia-de-estudo/#token-de-sessao",
      question:
        "Qual é a diferença principal entre senha e token de sessão?",
      choices: [
        "A senha identifica a porta do serviço; o token informa ao DNS qual endereço deve responder ao navegador",
        "A senha cifra cada pacote da rede; o token contém a chave privada usada pelo certificado do servidor",
        "A senha participa do login; o token representa a sessão criada depois que a autenticação foi aceita",
        "A senha existe somente no navegador; o token é um comando executado pela shell do sistema remoto",
      ],
      correct: 2,
      explanation:
        "A senha é uma evidência usada durante a autenticação. O token é emitido depois do sucesso e permite reconhecer a sessão nas requisições seguintes.",
    },
    {
      id: "exam-22-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "MFA e sessão autenticada",
      lesson: "Aula 22: Token de sessão e MFA",
      source:
        "04-preparacao-para-prova/01-guia-de-estudo/#como-o-evilginx-funciona",
      question:
        "Por que observar um token depois do MFA não significa que o segundo fator foi quebrado?",
      choices: [
        "Porque o segundo fator deixa de existir quando a conta é criada e nunca participa dos logins posteriores",
        "Porque o proxy calcula sozinho o mesmo código temporário sem receber qualquer resposta do navegador",
        "Porque o token contém apenas informações públicas e exige todos os fatores novamente em cada requisição",
        "Porque o usuário concluiu o desafio verdadeiro e o token representa a sessão emitida depois dessa verificação",
      ],
      correct: 3,
      explanation:
        "O MFA funcionou e foi aceito pela aplicação. O risco aparece porque o token de uma sessão já autenticada também atravessa o intermediário.",
    },
    {
      id: "exam-22-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Proteções contra session replay",
      lesson: "Aula 22: Token de sessão e MFA",
      source:
        "04-preparacao-para-prova/01-guia-de-estudo/#session-replay",
      question:
        "Qual conjunto de controles reduz melhor o risco de reutilização de uma sessão intermediada?",
      choices: [
        "WebAuthn ligado à origem, token protegido ou vinculado ao dispositivo, validade curta e nova autenticação sensível",
        "Senha mais longa, página com HTTPS e um TTL DNS maior, mantendo a mesma sessão ativa por tempo indefinido",
        "Troca da porta SSH, remoção do CNAME e aumento do volume EBS, sem mudar como a aplicação trata sessões",
        "Uso de código TOTP sozinho, certificado válido e cookie sem expiração, aceito de qualquer dispositivo conectado",
      ],
      correct: 0,
      explanation:
        "WebAuthn verifica a origem, e controles de sessão limitam onde e por quanto tempo o token pode ser usado. Nova autenticação reduz o impacto em ações importantes.",
    },
  ]
);

window.CYBER_QUIZ_QUESTIONS.push(
  ...[
    {
      id: "exam-11-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "Apache e document root",
      lesson: "Aula 11: Apache, HTTP e exposição web",
      source: "03-phishing/11-file-hosting-and-firewall-settings/",
      question:
        "Qual é a função do Apache e do document root no laboratório web?",
      choices: [
        "O Apache recebe requisições HTTP; o document root é o diretório que ele usa para localizar conteúdo publicado",
        "O Apache resolve nomes DNS; o document root armazena as chaves privadas usadas para autenticar conexões SSH",
        "O Apache libera regras no Security Group; o document root define quais endereços IP podem acessar a instância",
        "O Apache instala pacotes Linux; o document root registra os comandos digitados pelo usuário no terminal remoto",
      ],
      correct: 0,
      explanation:
        "Apache é o processo servidor web. Ao receber uma requisição, sua configuração relaciona o caminho solicitado a arquivos ou aplicações. O document root é a raiz de conteúdo usada nessa publicação, como /var/www/html em uma configuração comum.",
    },
    {
      id: "exam-11-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "APT, systemctl e ss",
      lesson: "Aula 11: Apache, HTTP e exposição web",
      source: "03-phishing/11-file-hosting-and-firewall-settings/",
      question:
        "O que APT, systemctl e ss verificam ou modificam em etapas diferentes?",
      choices: [
        "APT abre portas, systemctl cria endereços públicos e ss instala os arquivos do servidor dentro do document root",
        "APT gerencia pacotes, systemctl controla unidades de serviço e ss mostra sockets e processos em escuta",
        "APT autentica usuários, systemctl transfere arquivos por SFTP e ss altera a propriedade dos diretórios publicados",
        "APT resolve domínios, systemctl cria certificados HTTPS e ss configura regras de entrada no provedor de nuvem",
      ],
      correct: 1,
      explanation:
        "APT instala e atualiza pacotes. systemctl consulta e controla serviços administrados pelo systemd. ss inspeciona sockets, permitindo verificar se existe um processo escutando na porta esperada.",
    },
    {
      id: "exam-11-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Diagnóstico web em camadas",
      lesson: "Aula 11: Apache, HTTP e exposição web",
      source: "03-phishing/11-file-hosting-and-firewall-settings/",
      question:
        "O Apache responde localmente, mas a página não abre de outro computador. Qual diagnóstico vem a seguir?",
      choices: [
        "Reinstalar o navegador remoto, pois uma resposta local comprova que rota, IP público e regras externas também funcionam",
        "Alterar o document root, pois acesso externo depende apenas do nome do arquivo padrão encontrado pelo processo Apache",
        "Verificar IP e rota, regra de entrada TCP, firewall local e alcance externo, pois o serviço local já foi comprovado",
        "Trocar HTTP por SFTP, pois o protocolo de transferência é necessário para que o navegador receba qualquer página remota",
      ],
      correct: 2,
      explanation:
        "A resposta local comprova que o processo atende dentro da máquina, mas não testa o caminho externo. O próximo passo é verificar endereço de destino, roteamento e filtros da nuvem e do sistema, sem reinstalar o serviço que já respondeu.",
    },
    {
      id: "exam-12-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "FTP, FTPS e SFTP",
      lesson: "Aula 12: Cópia de páginas e SFTP",
      source:
        "03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud/",
      question:
        "Qual alternativa diferencia corretamente SFTP, FTP e FTPS?",
      choices: [
        "SFTP é FTP na porta 22, FTP usa certificados SSH e FTPS é o subsistema padrão do processo sshd",
        "SFTP e FTPS são nomes equivalentes, enquanto FTP descreve somente cópias feitas entre diretórios locais",
        "SFTP usa HTTP, FTP usa TCP sem portas e FTPS funciona apenas dentro de uma sessão de terminal Linux",
        "SFTP opera sobre SSH; FTP é um protocolo próprio; FTPS acrescenta TLS ao protocolo FTP",
      ],
      correct: 3,
      explanation:
        "SFTP é um subsistema de transferência dentro de SSH e normalmente usa a mesma porta 22. FTP possui funcionamento e canais próprios. FTPS protege FTP com TLS, por isso não deve ser confundido com SFTP.",
    },
    {
      id: "exam-12-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "Perfil SFTP no FileZilla",
      lesson: "Aula 12: Cópia de páginas e SFTP",
      source:
        "03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud/",
      question:
        "Quais dados permitem ao FileZilla iniciar uma conexão SFTP com a instância?",
      choices: [
        "Protocolo SFTP, host, porta do SSH, usuário remoto e arquivo de chave correspondente ao acesso autorizado",
        "Protocolo HTTP, document root, usuário do Apache, senha do site copiado e regra de saída do navegador",
        "Protocolo FTP, região da AWS, ID da AMI, chave pública do servidor e caminho do arquivo index local",
        "Protocolo HTTPS, domínio fictício, certificado da página, usuário root da AWS e endereço MAC da instância",
      ],
      correct: 0,
      explanation:
        "O FileZilla atua como cliente SFTP. Ele precisa localizar o servidor, chegar à porta do SSH e autenticar a identidade Linux com a chave apropriada. A primeira conexão também apresenta a chave do host para verificação.",
    },
    {
      id: "exam-12-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Comprovação de transferência",
      lesson: "Aula 12: Cópia de páginas e SFTP",
      source:
        "03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud/",
      question:
        "O painel de transferência indicou sucesso. O que confirma que o site foi enviado ao lugar esperado?",
      choices: [
        "A presença dos arquivos apenas no painel local, pois o FileZilla sempre replica a mesma estrutura no document root remoto",
        "A listagem do diretório remoto correto e uma requisição ao servidor que encontre os arquivos publicados nessa estrutura esperada",
        "A chave do host aceita na primeira conexão, pois ela comprova o conteúdo e o caminho de todos os uploads posteriores",
        "O status running da instância, pois uma máquina ativa sempre publica automaticamente qualquer arquivo transferido por SFTP",
      ],
      correct: 1,
      explanation:
        "O status da fila indica transferência, mas é preciso verificar o caminho remoto e depois observar o comportamento do servidor web. Um arquivo enviado ao diretório errado pode existir na instância sem estar publicado pelo Apache.",
    },
    {
      id: "exam-13-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "Propriedade e permissão",
      lesson: "Aula 13: Publicando uma página no Apache",
      source:
        "03-phishing/13-creating-a-fake-login-page-on-the-cloud/",
      question:
        "Qual é a diferença entre propriedade e permissão de um arquivo no Linux?",
      choices: [
        "Propriedade define a porta usada pelo arquivo; permissão escolhe o endereço IP no qual ele será publicado",
        "Propriedade indica o processo que criou a rede; permissão informa qual pacote instalou o programa no sistema",
        "Propriedade associa usuário e grupo; permissão define operações de leitura, escrita e execução para categorias",
        "Propriedade registra o caminho absoluto; permissão converte esse caminho em um domínio acessível pelo navegador",
      ],
      correct: 2,
      explanation:
        "Cada arquivo possui proprietário e grupo. As permissões dizem o que proprietário, grupo e demais usuários podem fazer. Alterar propriedade e alterar bits de permissão são operações relacionadas, mas diferentes.",
    },
    {
      id: "exam-13-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "Anatomia do chown",
      lesson: "Aula 13: Publicando uma página no Apache",
      source:
        "03-phishing/13-creating-a-fake-login-page-on-the-cloud/",
      question:
        "O que faz sudo chown -R kali:kali /var/www/html no contexto do laboratório?",
      choices: [
        "Inicia o Apache como kali, abre recursivamente a porta 80 e publica o diretório para qualquer origem da Internet",
        "Concede leitura e escrita a todos, instala o usuário kali e remove a necessidade de autenticação no acesso SFTP",
        "Move o document root para a home, troca o usuário do serviço web e reinicia os processos encontrados no diretório",
        "Executa chown com privilégio, aplica recursivamente usuário e grupo kali aos itens abaixo do caminho informado",
      ],
      correct: 3,
      explanation:
        "sudo fornece o privilégio necessário, chown altera propriedade, -R percorre o conteúdo, kali:kali define usuário e grupo e /var/www/html é o alvo. O comando não abre porta, não inicia serviço e não equivale a permissão 777.",
    },
    {
      id: "exam-13-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Erro de escrita por SFTP",
      lesson: "Aula 13: Publicando uma página no Apache",
      source:
        "03-phishing/13-creating-a-fake-login-page-on-the-cloud/",
      question:
        "O login SFTP funciona, mas o upload para /var/www/html é recusado. Qual explicação é mais provável?",
      choices: [
        "A autenticação provou acesso à conta, mas o usuário remoto ainda não possui propriedade ou permissão de escrita no diretório",
        "O Security Group permitiu somente leitura de arquivos, pois regras de rede controlam separadamente upload e download no SFTP",
        "O Apache bloqueou a chave privada, pois todo upload ao document root precisa ser autenticado pelo processo servidor web",
        "A AMI perdeu o endereço público, pois a ausência de IP permite login remoto, mas impede escrita em diretórios do sistema",
      ],
      correct: 0,
      explanation:
        "Autenticar no SSH não concede escrita em todos os caminhos. /var/www/html costuma pertencer a outra identidade. A propriedade e as permissões do sistema de arquivos determinam se o usuário do SFTP pode criar ou substituir itens ali.",
    },
    {
      id: "exam-14-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "Atributos id e name",
      lesson: "Aula 14: Entendendo o envio de formulários",
      source:
        "03-phishing/14-modifying-the-page-to-steal-login-information/",
      question:
        "Qual papel o atributo name exerce em um campo de formulário enviado?",
      choices: [
        "Ele escolhe a folha de estilo e determina como o campo aparece visualmente no navegador do visitante",
        "Ele fornece a chave usada para associar o valor do campo aos dados enviados na requisição",
        "Ele define a identidade global do servidor e substitui o endereço do atributo action do formulário",
        "Ele inicia o interpretador PHP e concede ao processo permissão para gravar arquivos no sistema operacional",
      ],
      correct: 1,
      explanation:
        "No envio tradicional de um formulário, name identifica a chave associada ao valor. id serve principalmente para identificar o elemento no documento e relacioná-lo a scripts, estilos ou rótulos. Os dois podem ter o mesmo texto, mas não possuem a mesma função.",
    },
    {
      id: "exam-14-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "POST e execução no servidor",
      lesson: "Aula 14: Entendendo o envio de formulários",
      source:
        "03-phishing/14-modifying-the-page-to-steal-login-information/",
      question:
        "O que acontece quando um formulário usa method POST e action aponta para um arquivo PHP?",
      choices: [
        "O navegador executa o PHP localmente, grava o resultado no DOM e envia somente o código de saída ao Apache",
        "O Security Group interpreta os campos, valida o conteúdo e escolhe qual usuário Linux receberá a requisição",
        "O navegador envia os dados no corpo HTTP; o servidor encaminha a requisição ao processamento PHP configurado",
        "O DNS converte cada campo em parâmetro, enquanto o SSH grava os valores no arquivo indicado pelo atributo action",
      ],
      correct: 2,
      explanation:
        "O navegador constrói a requisição HTTP e inclui os campos no corpo do POST. No servidor, Apache e sua integração com PHP processam o recurso solicitado. O código PHP não é executado pelo navegador.",
    },
    {
      id: "exam-14-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Código-fonte, DOM e transporte",
      lesson: "Aula 14: Entendendo o envio de formulários",
      source:
        "03-phishing/14-modifying-the-page-to-steal-login-information/",
      question:
        "Por que alterar apenas o HTML salvo pode não controlar o envio de uma interface web moderna?",
      choices: [
        "Porque navegadores modernos ignoram formulários em arquivos HTML e aceitam somente campos criados diretamente por PHP",
        "Porque o atributo action funciona apenas em HTTP sem TLS e deixa de existir quando o servidor apresenta certificado",
        "Porque o document root impede JavaScript, então todo evento precisa ser configurado pelo Security Group da instância",
        "Porque scripts podem modificar o DOM e interceptar eventos; é preciso observar o comportamento final e a requisição gerada",
      ],
      correct: 3,
      explanation:
        "O código recebido é apenas o estado inicial. JavaScript pode criar elementos, mudar atributos e impedir o envio padrão. A verificação deve considerar o DOM em execução, os listeners de evento e a requisição observada na rede.",
    },
    {
      id: "exam-15-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "Entrada POST no PHP",
      lesson: "Aula 15: Arquivos, permissões e PHP",
      source:
        "03-phishing/15-stealing-facebook-login-using-an-identical-fake-login-page/",
      question:
        "Como os valores recebidos em $_POST devem ser tratados por uma aplicação PHP?",
      choices: [
        "Como entrada não confiável, validada conforme o uso e nunca presumida segura apenas por ter chegado via POST ou HTTPS",
        "Como dados confiáveis, pois o navegador só inclui em $_POST campos que passaram por autenticação no lado do servidor",
        "Como comandos do sistema, pois cada chave enviada corresponde automaticamente a um programa instalado no Linux",
        "Como conteúdo já sanitizado, pois o Apache remove caracteres perigosos antes de entregar a requisição ao PHP",
      ],
      correct: 0,
      explanation:
        "$_POST reúne valores enviados pelo cliente. O método e o HTTPS não tornam esse conteúdo confiável. A aplicação precisa validar formato, finalidade e limites, além de evitar registrar segredos reais no laboratório.",
    },
    {
      id: "exam-15-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "Processo web e gravação de arquivo",
      lesson: "Aula 15: Arquivos, permissões e PHP",
      source:
        "03-phishing/15-stealing-facebook-login-using-an-identical-fake-login-page/",
      question:
        "O PHP chama fopen em modo de acréscimo, mas recebe falha de permissão. O que deve ser verificado?",
      choices: [
        "Se o navegador possui escrita no diretório remoto e se o Security Group permite o método HTTP usado pelo formulário",
        "Qual identidade executa o processo web, quem possui o caminho e quais permissões alcançam o arquivo e o diretório",
        "Se o cliente SFTP continua conectado e se a chave privada foi copiada para dentro do document root do Apache",
        "Qual região resolveu o domínio e se o DNS autorizou a criação de uma nova linha no arquivo de destino",
      ],
      correct: 1,
      explanation:
        "A gravação ocorre no servidor com a identidade do processo web, não com o usuário do navegador ou do FileZilla. É necessário examinar propriedade e permissões do diretório e do arquivo, além de tratar explicitamente a falha retornada por fopen.",
    },
    {
      id: "exam-15-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Menor privilégio e limpeza",
      lesson: "Aula 15: Arquivos, permissões e PHP",
      source:
        "03-phishing/15-stealing-facebook-login-using-an-identical-fake-login-page/",
      question:
        "Qual solução preserva melhor a segurança de um registro fictício usado no laboratório?",
      choices: [
        "Aplicar permissão 777 ao document root inteiro e manter o arquivo depois da aula para facilitar testes futuros",
        "Salvar senhas reais fora do document root, pois mudar o caminho elimina riscos de coleta e de exposição indevida",
        "Registrar apenas evento fictício em arquivo restrito ao processo necessário, tratar erros e remover o artefato ao final",
        "Executar o Apache como root, pois uma identidade administrativa evita falhas de escrita e simplifica a limpeza posterior",
      ],
      correct: 2,
      explanation:
        "O laboratório não precisa de credenciais reais. Um evento fictício é suficiente para comprovar o fluxo. O arquivo deve ter acesso mínimo, erros precisam ser tratados e os dados e recursos do exercício devem ser removidos depois.",
    },
  ]
);

window.CYBER_QUIZ_QUESTIONS.push(
  ...[
    {
      id: "exam-06-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "Identidades administrativas",
      lesson: "Aula 6: Criando e protegendo uma conta AWS",
      source: "02-cloud-basics/06-signing-up-with-aws/",
      question:
        "Qual é a diferença entre o usuário root da AWS e o usuário root do Linux?",
      choices: [
        "O root da AWS administra somente arquivos da instância, enquanto o root do Linux controla todas as contas do provedor",
        "O root da AWS é criado dentro do Kali, enquanto o root do Linux existe apenas no painel web da conta de nuvem",
        "O root da AWS controla a conta do provedor; o root do Linux possui privilégios máximos dentro de um sistema operacional",
        "O root da AWS e o root do Linux são a mesma identidade, sincronizada automaticamente quando a instância é iniciada",
      ],
      correct: 2,
      explanation:
        "O usuário root da AWS pertence ao plano de controle da conta e pode administrar serviços e faturamento. O root do Linux é uma identidade local do sistema operacional. Uma não se transforma automaticamente na outra.",
    },
    {
      id: "exam-06-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "IAM, MFA e menor privilégio",
      lesson: "Aula 6: Criando e protegendo uma conta AWS",
      source: "02-cloud-basics/06-signing-up-with-aws/",
      question:
        "Qual configuração segue melhor o princípio do menor privilégio em uma conta AWS?",
      choices: [
        "Usar diariamente o root com MFA, pois o segundo fator torna desnecessária a separação entre identidades e funções",
        "Criar uma access key do root, armazená-la na instância e limitar o acesso apenas pela regra do Security Group",
        "Compartilhar um usuário administrativo entre os estudantes, registrando em um arquivo quem utilizou cada credencial",
        "Proteger o root para emergências e usar identidades IAM com MFA e apenas as permissões exigidas por cada atividade",
      ],
      correct: 3,
      explanation:
        "O root deve ser protegido e reservado para tarefas que realmente o exigem. O uso cotidiano deve ocorrer com identidades IAM individuais, MFA e políticas limitadas às ações necessárias.",
    },
    {
      id: "exam-06-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Credenciais e controles de custo",
      lesson: "Aula 6: Criando e protegendo uma conta AWS",
      source: "02-cloud-basics/06-signing-up-with-aws/",
      question:
        "Qual afirmação relaciona corretamente credenciais temporárias, regiões e AWS Budgets?",
      choices: [
        "Credenciais temporárias reduzem exposição prolongada; recursos são regionais; Budgets alerta custos, mas não bloqueia toda cobrança",
        "Credenciais temporárias eliminam a necessidade de MFA; regiões compartilham recursos; Budgets encerra instâncias ao atingir o limite",
        "Credenciais permanentes expiram a cada sessão; regiões servem apenas para idioma; Budgets substitui todas as consultas de faturamento",
        "Credenciais do root são temporárias por padrão; regiões não afetam inventário; Budgets impede criar qualquer recurso fora do Free Tier",
      ],
      correct: 0,
      explanation:
        "Credenciais temporárias têm validade limitada e reduzem o tempo de exposição. Muitos recursos precisam ser procurados na região em que foram criados. AWS Budgets envia alertas conforme a configuração, mas não deve ser tratado como um bloqueio automático de despesas.",
    },
    {
      id: "exam-07-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "AMI e instância EC2",
      lesson: "Aula 7: Provisionando Kali Linux no EC2",
      source: "02-cloud-basics/07-installing-kali-linux-on-the-cloud/",
      question:
        "Como uma AMI se diferencia de uma instância EC2?",
      choices: [
        "A AMI é o modelo usado no provisionamento; a instância é a máquina virtual criada e executada a partir desse modelo",
        "A AMI é a regra de entrada da rede; a instância é o endereço público associado ao sistema depois da inicialização",
        "A AMI é a chave privada do usuário; a instância é a chave pública instalada automaticamente no computador local",
        "A AMI é o volume temporário da sessão; a instância é o orçamento que acompanha os recursos durante o laboratório",
      ],
      correct: 0,
      explanation:
        "A Amazon Machine Image reúne uma base para o sistema e sua inicialização. O EC2 usa essa imagem, junto com tipo, armazenamento, rede e outras configurações, para criar uma instância executável.",
    },
    {
      id: "exam-07-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "Chave e Security Group",
      lesson: "Aula 7: Provisionando Kali Linux no EC2",
      source: "02-cloud-basics/07-installing-kali-linux-on-the-cloud/",
      question:
        "Quais funções pertencem, respectivamente, ao key pair e ao Security Group durante o acesso SSH?",
      choices: [
        "O key pair abre a porta na nuvem; o Security Group descriptografa a chave privada apresentada pelo cliente",
        "O key pair participa da autenticação do usuário; o Security Group decide se o tráfego de rede pode chegar à porta",
        "O key pair inicia o serviço sshd; o Security Group cria o usuário Linux informado no comando de conexão",
        "O key pair escolhe a região da instância; o Security Group associa a AMI ao volume usado pelo sistema operacional",
      ],
      correct: 1,
      explanation:
        "O par de chaves é usado para provar a identidade do usuário no SSH. O Security Group é um filtro de rede da AWS. Permitir TCP 22 nele não inicia o sshd, assim como ter uma chave válida não abre a rota até a instância.",
    },
    {
      id: "exam-07-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Condições para acesso remoto",
      lesson: "Aula 7: Provisionando Kali Linux no EC2",
      source: "02-cloud-basics/07-installing-kali-linux-on-the-cloud/",
      question:
        "Uma instância está running e possui IP público. O que ainda precisa estar correto para o SSH funcionar?",
      choices: [
        "Somente a AMI precisa ter sido criada na mesma região do computador que executará o cliente SSH",
        "A chave privada precisa estar no servidor e o Security Group precisa liberar qualquer protocolo para a origem",
        "Rota, regra TCP 22, sshd em escuta, usuário correto e chave privada correspondente precisam participar do fluxo",
        "O Apache precisa responder na porta 80 antes que o sistema permita autenticação remota pela porta padrão do SSH configurado",
      ],
      correct: 2,
      explanation:
        "O estado running e o IP não bastam. A rede precisa ter rota e regra de entrada adequadas, o sistema deve executar o sshd na porta esperada e a autenticação deve usar usuário e chave correspondentes.",
    },
    {
      id: "exam-08-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "Arquitetura do SSH",
      lesson: "Aula 8: Acesso remoto com SSH",
      source:
        "02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh/",
      question:
        "Onde ficam o cliente SSH e o processo sshd em um acesso à instância?",
      choices: [
        "Os dois ficam no Security Group, que executa os comandos depois de conferir o endereço IP de origem",
        "O cliente fica no Apache, enquanto o sshd é iniciado pelo navegador ao abrir uma URL com porta 22",
        "O cliente fica na instância, enquanto o sshd roda no computador local e solicita a chave pública ao usuário",
        "O cliente roda no computador de origem, enquanto o sshd escuta conexões no sistema operacional da instância",
      ],
      correct: 3,
      explanation:
        "O programa cliente é executado na máquina que inicia a conexão. Na instância, o daemon sshd aguarda conexões, normalmente em TCP 22, negocia o canal seguro e conduz a autenticação.",
    },
    {
      id: "exam-08-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "Chaves do usuário e do host",
      lesson: "Aula 8: Acesso remoto com SSH",
      source:
        "02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh/",
      question:
        "Por que o SSH usa a chave do usuário e também apresenta uma fingerprint do host?",
      choices: [
        "A chave do usuário autentica o acesso à conta remota; a chave do host ajuda o cliente a reconhecer a identidade do servidor",
        "A chave do usuário abre a regra de rede; a chave do host substitui o endereço IP durante o roteamento dos pacotes",
        "A chave do usuário cifra o disco local; a chave do host instala o cliente SSH na primeira conexão realizada",
        "A chave do usuário escolhe a porta remota; a chave do host concede privilégios root depois que o canal é criado",
      ],
      correct: 0,
      explanation:
        "São identidades diferentes. O par do usuário comprova que o cliente possui a chave privada autorizada. A chave do host identifica o servidor e sua fingerprint permite detectar uma mudança inesperada de identidade.",
    },
    {
      id: "exam-08-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Diagnóstico de SSH",
      lesson: "Aula 8: Acesso remoto com SSH",
      source:
        "02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh/",
      question:
        "Um teste TCP para a porta 22 funciona, mas o SSH retorna Permission denied. Qual interpretação é mais adequada?",
      choices: [
        "O teste comprova que a chave privada está correta, então o erro só pode ser causado por uma versão antiga do cliente",
        "A rede alcança a porta; agora devem ser verificados usuário, chave, permissões locais e autorização no servidor",
        "O Security Group bloqueou a conexão depois do teste, então é necessário liberar também UDP 22 para autenticar",
        "O DNS falhou após o handshake, então o nome de usuário deve ser substituído pelo endereço MAC da instância",
      ],
      correct: 1,
      explanation:
        "O teste TCP confirma alcance até a porta, não autenticação. Permission denied indica que a conexão chegou ao SSH e falhou na etapa de identidade ou autorização. Usuário, arquivo de chave, permissões da chave e configuração remota são os próximos pontos.",
    },
    {
      id: "exam-09-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "Terminal, shell e CLI",
      lesson: "Aula 9: Fundamentos do terminal Linux",
      source: "02-cloud-basics/09-linux-terminal-basics/",
      question:
        "Como terminal, shell e CLI se relacionam em uma sessão Linux?",
      choices: [
        "O terminal é o sistema de arquivos, a shell é o usuário root e a CLI é a rede usada para enviar comandos",
        "O terminal interpreta cada programa, a shell desenha a janela e a CLI substitui todas as interfaces gráficas",
        "O terminal oferece a interface, a shell interpreta comandos e a CLI é o modo de interação por texto",
        "O terminal armazena comandos, a shell cria diretórios e a CLI define as permissões de cada arquivo",
      ],
      correct: 2,
      explanation:
        "O terminal é a interface que exibe entrada e saída. A shell, como Bash, interpreta o que foi digitado e inicia programas. CLI significa Command-Line Interface, a forma de interação baseada em texto.",
    },
    {
      id: "exam-09-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "Caminhos e anatomia de comandos",
      lesson: "Aula 9: Fundamentos do terminal Linux",
      source: "02-cloud-basics/09-linux-terminal-basics/",
      question:
        "Qual alternativa descreve um caminho absoluto e a estrutura básica de um comando?",
      choices: [
        "O caminho absoluto começa no diretório atual; o comando contém apenas uma opção e nunca recebe nomes de arquivos",
        "O caminho absoluto depende do histórico da shell; o comando combina usuário, senha e código de saída anterior",
        "O caminho absoluto começa em home; o comando sempre contém sudo, programa, porta e endereço de destino",
        "O caminho absoluto começa em /; o comando normalmente combina programa, opções e argumentos conforme a tarefa",
      ],
      correct: 3,
      explanation:
        "Um caminho absoluto localiza o item a partir da raiz do sistema, indicada por /. Na linha de comando, o programa define a ação, opções ajustam o comportamento e argumentos informam alvos ou valores.",
    },
    {
      id: "exam-09-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Evidências e diagnóstico no Linux",
      lesson: "Aula 9: Fundamentos do terminal Linux",
      source: "02-cloud-basics/09-linux-terminal-basics/",
      question:
        "Qual combinação de evidências ajuda a diagnosticar uma operação de arquivo que falhou?",
      choices: [
        "Confirmar o diretório com pwd, inspecionar arquivo e permissões com ls -l, ler o erro e verificar o código de saída",
        "Executar history, repetir o comando com sudo e considerar a tarefa concluída se nenhuma janela gráfica aparecer",
        "Usar Tab para alterar permissões, executar cd sem argumento e interpretar qualquer saída vazia como sucesso garantido",
        "Consultar man apenas depois de apagar o arquivo, ignorar o usuário atual e verificar somente o horário mostrado no prompt",
      ],
      correct: 0,
      explanation:
        "O diagnóstico combina contexto e evidência: diretório atual, existência e metadados do arquivo, mensagem emitida e código de saída. Usar sudo sem entender a causa pode ocultar o problema e criar novos riscos.",
    },
    {
      id: "exam-10-easy",
      scope: "exam",
      difficulty: "easy",
      topic: "Definição de phishing",
      lesson: "Aula 10: Phishing e engenharia social",
      source: "03-phishing/10-introduction-to-phishing/",
      question:
        "O que caracteriza phishing?",
      choices: [
        "A exploração automática de qualquer falha no navegador, sem mensagem, pretexto ou ação esperada do usuário",
        "O uso de comunicação enganosa para induzir uma pessoa a executar uma ação que beneficia o atacante",
        "A instalação obrigatória de malware por uma vulnerabilidade no sistema operacional antes de qualquer interação",
        "A cópia de arquivos entre servidores por um protocolo remoto, mesmo quando existe autorização dos proprietários",
      ],
      correct: 1,
      explanation:
        "Phishing é uma técnica de engenharia social. Ela combina mensagem, contexto e ação desejada, como abrir um link ou fornecer informação. Pode usar uma página falsa, mas não é sinônimo de malware ou exploit.",
    },
    {
      id: "exam-10-medium",
      scope: "exam",
      difficulty: "medium",
      topic: "Pretexto, isca e página",
      lesson: "Aula 10: Phishing e engenharia social",
      source: "03-phishing/10-introduction-to-phishing/",
      question:
        "Como pretexto, isca e landing page participam de uma tentativa de phishing?",
      choices: [
        "O pretexto é o código executado, a isca é o certificado TLS e a landing page é a regra que libera a porta do servidor",
        "O pretexto é a vulnerabilidade, a isca é o malware instalado e a landing page é o sistema operacional comprometido",
        "O pretexto dá sentido à história, a isca estimula a ação e a landing page recebe o visitante no fluxo planejado",
        "O pretexto autentica o domínio, a isca cria o endereço IP e a landing page estabelece a conexão de transporte",
      ],
      correct: 2,
      explanation:
        "O pretexto é a narrativa usada para tornar a solicitação plausível. A isca é o elemento que desperta urgência ou interesse. A landing page é um possível destino da interação, não uma vulnerabilidade por si só.",
    },
    {
      id: "exam-10-hard",
      scope: "exam",
      difficulty: "hard",
      topic: "Página, exploit e malware",
      lesson: "Aula 10: Phishing e engenharia social",
      source: "03-phishing/10-introduction-to-phishing/",
      question:
        "Qual exemplo demonstra uma interação com uma página sem confundir página falsa, exploit e malware?",
      choices: [
        "Registrar senhas reais em texto puro, pois HTTPS torna legítima qualquer coleta realizada dentro do laboratório",
        "Executar um exploit no navegador, pois toda página copiada precisa comprometer o sistema para comprovar o clique",
        "Instalar um agente permanente, pois uma landing page não consegue produzir nenhuma evidência verificável de interação sozinha",
        "Registrar apenas um evento fictício de envio, pois a página pode medir a ação sem explorar software nem coletar segredo",
      ],
      correct: 3,
      explanation:
        "Uma página pode registrar que um formulário fictício foi enviado. Esse evento mostra a interação sem significar exploração do navegador ou instalação de um programa no sistema.",
    },
  ]
);
