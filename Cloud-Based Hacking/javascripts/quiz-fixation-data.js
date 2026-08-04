window.CYBER_QUIZ_QUESTIONS.push(
  ...[
  {
    "id": "fix-01-01",
    "scope": "lesson-fixation",
    "fixationNumber": 1,
    "difficulty": "medium",
    "topic": "Autorização e escopo em testes de segurança",
    "lesson": "Aula 1: Visão geral do curso - segurança ofensiva autorizada na nuvem",
    "source": "01-introduction-to-cloud-computing-for-hackers/01-teaser/",
    "question": "Qual informação uma autorização para teste de segurança deve definir, e quem tem competência para concedê-la?",
    "choices": [
      "Quais ativos estão incluídos, o período permitido, as técnicas autorizadas e o responsável legal com autoridade sobre esses ativos",
      "Apenas a ferramenta que será utilizada e o IP do testador, podendo ser concedida por qualquer membro da equipe",
      "Somente a data do teste e a duração máxima, independentemente de autoridade sobre os recursos",
      "Apenas a tecnologia envolvida e a boa intenção declarada, sem necessidade de autorização formal"
    ],
    "correct": 0,
    "explanation": "A autorização válida é um elemento fundamental que transforma hacking em atividade ética. Deve definir: quais ativos (domínios, IPs, aplicações, contas), qual período, quais técnicas e quem autoriza (responsável legal com autoridade sobre os recursos). A boa intenção ou a ferramenta não substituem essa formalidade."
  },
  {
    "id": "fix-01-02",
    "scope": "lesson-fixation",
    "fixationNumber": 2,
    "difficulty": "medium",
    "topic": "HTTPS e segurança de comunicação",
    "lesson": "Aula 1: Visão geral do curso - segurança ofensiva autorizada na nuvem",
    "source": "01-introduction-to-cloud-computing-for-hackers/01-teaser/",
    "question": "O que HTTPS protege tecnicamente e o que ele não consegue informar sobre a intenção de uma página?",
    "choices": [
      "Protege a comunicação com o domínio exibido; não comprova que o responsável pelo domínio seja confiável nem que a página tenha finalidade legítima",
      "Protege totalmente contra phishing e garante que a página pertence a uma organização legítima",
      "Protege somente senhas, permitindo qualquer outro tipo de ataque à página",
      "Protege a página inteira de cópias e garante que o conteúdo não pode ser clonado"
    ],
    "correct": 0,
    "explanation": "HTTPS protege a criptografia e integridade da comunicação entre cliente e servidor (domínio exibido), mas não valida a intenção por trás da página. Uma página legítima pode ser clonada com HTTPS válido, enganando o visitante. O certificado não prova propriedade confiável nem intenção honesta."
  },
  {
    "id": "fix-01-03",
    "scope": "lesson-fixation",
    "fixationNumber": 3,
    "difficulty": "hard",
    "topic": "Variáveis e condições em demonstrações técnicas",
    "lesson": "Aula 1: Visão geral do curso - segurança ofensiva autorizada na nuvem",
    "source": "01-introduction-to-cloud-computing-for-hackers/01-teaser/",
    "question": "Quais categorias de condições podem alterar o resultado de uma demonstração de ataque?",
    "choices": [
      "Versão do software, configuração, permissões, interação do participante e controles de segurança existentes",
      "Apenas a versão do navegador e a senha do usuário",
      "Somente a data da demonstração e a localização do servidor",
      "Apenas o sistema operacional e nada mais"
    ],
    "correct": 0,
    "explanation": "Uma demonstração técnica não funciona universalmente. O resultado depende de múltiplas variáveis: versão específica do software, configuração particular, permissões do usuário, ações que o participante realiza e controles de defesa implementados. Mudar qualquer uma delas pode impedir a exploração."
  },
  {
    "id": "fix-01-04",
    "scope": "lesson-fixation",
    "fixationNumber": 4,
    "difficulty": "hard",
    "topic": "Autenticação, tokens de sessão e MFA",
    "lesson": "Aula 1: Visão geral do curso - segurança ofensiva autorizada na nuvem",
    "source": "01-introduction-to-cloud-computing-for-hackers/01-teaser/",
    "question": "Por que capturar uma sessão após autenticação legítima não equivale a quebrar criptograficamente o MFA?",
    "choices": [
      "Um token de sessão é um segredo emitido após autenticação válida; capturá-lo usa a autenticação existente, não quebra o MFA. Controles como vínculo ao dispositivo podem limitar a reutilização mesmo com o token",
      "Porque MFA é sempre impossível de quebrar com qualquer técnica",
      "Porque capturar uma sessão quebra automaticamente todo tipo de MFA existente",
      "Porque tokens de sessão nunca funcionam após MFA"
    ],
    "correct": 0,
    "explanation": "Capturar um token de sessão aproveita autenticação já concedida, não quebra a criptografia do MFA. O resultado depende do tipo de autenticação, vínculo da sessão ao dispositivo, validade do token e outros controles. Muitos sistemas implementam defesas contra reutilização de sessão em outro dispositivo."
  },
  {
    "id": "fix-01-05",
    "scope": "lesson-fixation",
    "fixationNumber": 5,
    "difficulty": "hard",
    "topic": "Camadas de comprometimento",
    "lesson": "Aula 1: Visão geral do curso - segurança ofensiva autorizada na nuvem",
    "source": "01-introduction-to-cloud-computing-for-hackers/01-teaser/",
    "question": "Qual é a diferença técnica fundamental entre comprometer uma conta, um navegador e um sistema operacional?",
    "choices": [
      "Conta: acesso a dados do serviço. Navegador: execução de código em contexto isolado. Sistema: execução de código com permissões do processo/usuário local, limitadas ainda pelo SO",
      "São todas exatamente a mesma coisa; 'invadir' é um termo universal que significa o mesmo em qualquer contexto",
      "Conta: quebra do servidor. Navegador: quebra total do computador. Sistema: cópia de arquivos",
      "Não há diferença técnica; apenas uma questão de terminologia imprecisa"
    ],
    "correct": 0,
    "explanation": "Cada camada é uma transição distinta que requer condições adicionais e deve ser comprovada separadamente. Comprometer uma conta oferece dados daquele serviço. Uma sessão web em navegador executa código em sandbox com política de mesma origem. Controle do sistema executa código com privilégios do processo/usuário local, ainda limitado pelo SO e sem acesso administrativo automático."
  },
  {
    "id": "fix-01-06",
    "scope": "lesson-fixation",
    "fixationNumber": 6,
    "difficulty": "medium",
    "topic": "Autorização e compartilhamento de responsabilidade",
    "lesson": "Aula 1: Visão geral do curso - segurança ofensiva autorizada na nuvem",
    "source": "01-introduction-to-cloud-computing-for-hackers/01-teaser/",
    "question": "Por que possuir uma máquina virtual na nuvem não autoriza testar a infraestrutura do provedor ou outros clientes?",
    "choices": [
      "Ter acesso a um recurso que você criou não autoriza testes contra a infraestrutura do provedor, outros clientes ou serviços de terceiros, mesmo que estejam acessíveis",
      "Porque a nuvem nunca permite segurança de forma alguma",
      "Porque máquinas virtuais são inacessíveis e não podem ser testadas",
      "Porque o provedor autoriza automaticamente qualquer teste feito a partir de uma conta"
    ],
    "correct": 0,
    "explanation": "Autorização é específica por ativo. Uma máquina virtual que você criou não concede permissão para testar a infraestrutura compartilhada do provedor ou seus demais clientes. Responsabilidade é separada: você autoriza o que está sob seu controle; o provedor proíbe testes contra sua infraestrutura compartilhada. Termos de serviço definem esses limites."
  },
  {
    "id": "fix-01-07",
    "scope": "lesson-fixation",
    "fixationNumber": 1,
    "difficulty": "medium",
    "topic": "Ética em segurança ofensiva",
    "lesson": "Aula 2: Hacking ético, pentest e Red Team - escopo antes da técnica",
    "source": "01-introduction-to-cloud-computing-for-hackers/02-introduction-to-hacking-using-the-cloud/",
    "question": "Quais são os quatro elementos que transformam uma habilidade de hacking em uma atividade ética e autorizada?",
    "choices": [
      "Autorização válida, objetivo legítimo, limites claros (escopo) e responsabilidade sobre os efeitos produzidos",
      "Apenas a ferramenta utilizada e a boa intenção declarada",
      "Apenas o pagamento pelo serviço de teste",
      "Apenas trabalhar sozinho e de forma discreta"
    ],
    "correct": 0,
    "explanation": "Hacking ético não é definido pela ferramenta ou pela intenção pessoal. São estes quatro elementos que separam uma atividade autorizada de um abuso: 1) Autorização válida de quem tem poder legal, 2) Objetivo legítimo de segurança, 3) Escopo claro (quais ativos, período, técnicas), 4) Responsabilidade sobre os efeitos e proteção de dados encontrados."
  },
  {
    "id": "fix-01-08",
    "scope": "lesson-fixation",
    "fixationNumber": 2,
    "difficulty": "medium",
    "topic": "Pentest vs Red Team",
    "lesson": "Aula 2: Hacking ético, pentest e Red Team - escopo antes da técnica",
    "source": "01-introduction-to-cloud-computing-for-hackers/02-introduction-to-hacking-using-the-cloud/",
    "question": "Como o objetivo e o escopo de um pentest diferem dos de uma operação Red Team?",
    "choices": [
      "Pentest: avaliação delimitada por escopo e período, foca vulnerabilidades isoladas. Red Team: orientado por objetivos, simula sequências de ações de adversários reais, normalmente com escopo e duração mais amplos",
      "Pentest e Red Team são sinônimos e funcionam exatamente da mesma forma",
      "Red Team é sempre mais rápido que pentest e não produz relatório",
      "Pentest avalia apenas software; Red Team avalia apenas pessoas"
    ],
    "correct": 0,
    "explanation": "Pentest examina vulnerabilidades de forma isolada dentro de escopo e período definidos, resultando em relatório técnico. Red Team simula comportamento de adversários reais em sequências plausíveis de ataque, geralmente com escopo mais abrangente e coordenação mais ampla. Usar 'Red Team' não concede permissão adicional além da autorização do alvo."
  },
  {
    "id": "fix-01-09",
    "scope": "lesson-fixation",
    "fixationNumber": 3,
    "difficulty": "medium",
    "topic": "Definições operacionais: ativo, alvo, escopo",
    "lesson": "Aula 2: Hacking ético, pentest e Red Team - escopo antes da técnica",
    "source": "01-introduction-to-cloud-computing-for-hackers/02-introduction-to-hacking-using-the-cloud/",
    "question": "Qual é a diferença exata entre ativo, alvo, escopo, autorização e regras de engajamento?",
    "choices": [
      "Ativo: recurso com valor. Alvo: ativo selecionado para teste. Escopo: quais domínios/IPs/técnicas incluídas. Autorização: permissão explícita de quem possui autoridade. Regras de engajamento: instruções operacionais que registram período, limites, contatos e critérios de interrupção",
      "Todos esses termos significam exatamente a mesma coisa",
      "Ativo e alvo são opostos; escopo nunca é documentado; autorização é apenas uma formalidade",
      "Autorização é dada verbalmente; regras de engajamento não existem em testes reais"
    ],
    "correct": 0,
    "explanation": "São conceitos hierárquicos e complementares. Um ativo (aplicação, banco de dados, servidor) é um recurso com valor. Quando selecionado para teste, torna-se um alvo. Escopo define inclusões/exclusões (quais domínios, IPs, aplicações, horários, técnicas). Autorização é a permissão explícita de quem tem poder legal. Regras de engajamento formalizam tudo: quem autoriza e executa, período, limites de volume, contatos, critérios de parada, tratamento de evidências."
  },
  {
    "id": "fix-01-10",
    "scope": "lesson-fixation",
    "fixationNumber": 4,
    "difficulty": "hard",
    "topic": "Regras de engajamento operacionais",
    "lesson": "Aula 2: Hacking ético, pentest e Red Team - escopo antes da técnica",
    "source": "01-introduction-to-cloud-computing-for-hackers/02-introduction-to-hacking-using-the-cloud/",
    "question": "Quais limites técnicos e operacionais devem aparecer explicitamente nas regras de engajamento antes do teste iniciar?",
    "choices": [
      "Período autorizado, limites de volume, limites de indisponibilidade permitida, contatos para incidentes, critérios de interrupção obrigatória e tratamento das evidências coletadas",
      "Apenas o valor do contrato e nada mais",
      "Apenas o nome do testador e a data de início",
      "Nenhum limite é necessário; autorização verbal é suficiente"
    ],
    "correct": 0,
    "explanation": "Regras de engajamento transformam permissão genérica em instruções operacionais precisas. Devem registrar: durante qual período o teste ocorre, quais limites de volume de requisições (rate limiting), quantas interrupções de serviço são aceitáveis, contatos de emergência para parar, critérios que forçam interrupção (ex: detecção anômala), como as evidências serão protegidas e descartadas. Sem isso, há ambiguidade sobre autorização real."
  },
  {
    "id": "fix-01-11",
    "scope": "lesson-fixation",
    "fixationNumber": 5,
    "difficulty": "hard",
    "topic": "Tokens de sessão e autenticação multifator",
    "lesson": "Aula 2: Hacking ético, pentest e Red Team - escopo antes da técnica",
    "source": "01-introduction-to-cloud-computing-for-hackers/02-introduction-to-hacking-using-the-cloud/",
    "question": "Como um token de sessão permite ações em uma aplicação sem revelar a própria senha do usuário?",
    "choices": [
      "Após autenticação bem-sucedida, o serviço emite um token armazenado em cookie; enquanto válido, permite ações daquela conta sem a senha ser transmitida novamente",
      "Porque tokens substituem senhas de forma idêntica",
      "Tokens nunca funcionam; senhas sempre precisam ser reenvidas a cada ação",
      "Um token é apenas um nome fictício; não é um segredo real"
    ],
    "correct": 0,
    "explanation": "Um token de sessão é um segredo criptográfico gerado pelo serviço após autenticação bem-sucedida (incluindo MFA se aplicável). Armazenado em cookie, identifica a sessão autenticada. Enquanto válido, permite operações sem reenviarlá senha original. Isso melhora experiência (menos digitação) mas cria novo vetor: se um atacante capturar o token, pode agir como aquela conta, desde que o token seja válido e os controles permitam."
  },
  {
    "id": "fix-01-12",
    "scope": "lesson-fixation",
    "fixationNumber": 6,
    "difficulty": "hard",
    "topic": "Controles contra reutilização de sessão",
    "lesson": "Aula 2: Hacking ético, pentest e Red Team - escopo antes da técnica",
    "source": "01-introduction-to-cloud-computing-for-hackers/02-introduction-to-hacking-using-the-cloud/",
    "question": "Quais controles de segurança podem limitar a reutilização de um token de sessão capturado após MFA?",
    "choices": [
      "Vínculo da sessão ao dispositivo específico, validação contínua de identidade, limite de tempo restrito, detecção de anomalias, verificações geográficas e re-autenticação em operações sensíveis",
      "Nenhum controle é possível uma vez que o token foi capturado",
      "Apenas a senha pode proteger; tokens não têm defesa",
      "MFA protege contra captura de tokens de forma perfeita e universal"
    ],
    "correct": 0,
    "explanation": "Muitos controles trabalham juntos para detectar reutilização de sessão em contexto não-esperado: vínculo criptográfico ao dispositivo (fingerprint, certificado), limite curto de expiração, detecção de anomalias (IP diferente, comportamento anormal), verificação geográfica (comparar com histórico), re-autenticação obrigatória para operações críticas. Esses são complementos a MFA, não substitutos."
  },
  {
    "id": "fix-01-13",
    "scope": "lesson-fixation",
    "fixationNumber": 7,
    "difficulty": "medium",
    "topic": "Segurança do navegador: SOP e sandbox",
    "lesson": "Aula 2: Hacking ético, pentest e Red Team - escopo antes da técnica",
    "source": "01-introduction-to-cloud-computing-for-hackers/02-introduction-to-hacking-using-the-cloud/",
    "question": "Como a política de mesma origem (SOP) e a sandbox limitam o código executado por uma página web no navegador?",
    "choices": [
      "SOP separa conteúdos de diferentes origens (domínio/protocolo/porta), impedindo scripts de um site acessarem dados de outro. Sandbox restringe acesso direto ao filesystem, hardware e sistema operacional",
      "SOP e sandbox não limitam nada; qualquer página tem acesso total ao computador",
      "SOP controla senhas; sandbox controla apenas cores",
      "Essas proteções só funcionam em navegadores antigos"
    ],
    "correct": 0,
    "explanation": "São mecanismos complementares. SOP (Same Origin Policy) é uma regra de segurança que impede um script em site A de ler dados em site B, mesmo que ambos estejam na aba. Sandbox isola o processo do navegador do resto do SO, bloqueando acesso direto ao filesystem, dispositivos e processos. Juntas, essas proteções criam uma barreira entre página web e sistema, reduzindo danos se a página for comprometida."
  },
  {
    "id": "fix-01-14",
    "scope": "lesson-fixation",
    "fixationNumber": 8,
    "difficulty": "medium",
    "topic": "Permissões e recursos do navegador",
    "lesson": "Aula 2: Hacking ético, pentest e Red Team - escopo antes da técnica",
    "source": "01-introduction-to-cloud-computing-for-hackers/02-introduction-to-hacking-using-the-cloud/",
    "question": "Por que acesso à câmera, ao microfone ou à localização não surge automaticamente ao carregar uma página web?",
    "choices": [
      "Esses recursos são protegidos por permissão explícita do usuário. Carregar uma página não concede acesso automático, mesmo que a página requisite; o navegador requer consentimento ou autorização prévia",
      "Porque câmeras e microfones não existem em dispositivos",
      "Porque páginas web nunca tentam acessar esses recursos",
      "Porque HTTPS bloqueia automaticamente câmera e microfone"
    ],
    "correct": 0,
    "explanation": "Câmera, microfone, localização, contatos e outros recursos sensíveis são protegidos por permissão explícita do usuário. Uma página pode solicitar acesso via API (getUserMedia, Geolocation), mas o navegador intercepta e pede confirmação. Se o usuário nega, a página não obtém acesso. Se concede, a permissão é lembrada para aquela origem. Não há bypass automático apenas por carregar a página."
  },
  {
    "id": "fix-01-15",
    "scope": "lesson-fixation",
    "fixationNumber": 9,
    "difficulty": "hard",
    "topic": "Privilégios e execução de processo",
    "lesson": "Aula 2: Hacking ético, pentest e Red Team - escopo antes da técnica",
    "source": "01-introduction-to-cloud-computing-for-hackers/02-introduction-to-hacking-using-the-cloud/",
    "question": "Se um processo obtém execução no sistema operacional, o que determina suas permissões iniciais e por que isso não garante privilégio administrativo?",
    "choices": [
      "Permissões iniciais são determinadas pelo usuário que executa o processo. Um processo herdaesses privilégios; sem acesso administrativo prévio, não pode alcançá-lo apenas por estar em execução no SO",
      "Porque todos os processos automaticamente têm privilégio administrativo",
      "Porque privilégio administrativo não existe em sistemas operacionais modernos",
      "Porque uma vez que qualquer código executa, o SO inteiro está comprometido"
    ],
    "correct": 0,
    "explanation": "Execução de código no SO é diferente de controle do SO. Permissões iniciais vêm do usuário que disparou o processo. Um processo herdaesses privilégios e está confinado por eles. Controle administrativo é uma escalação adicional que requer falha de segurança específica ou acesso a credenciais admin. Sem isso, o processo permanece limitado, mesmo com execução confirmada."
  },
  {
    "id": "fix-01-16",
    "scope": "lesson-fixation",
    "fixationNumber": 10,
    "difficulty": "hard",
    "topic": "Progressão de comprometimento entre camadas",
    "lesson": "Aula 2: Hacking ético, pentest e Red Team - escopo antes da técnica",
    "source": "01-introduction-to-cloud-computing-for-hackers/02-introduction-to-hacking-using-the-cloud/",
    "question": "Que condições adicionais precisam ser comprovadas para progredir de conta comprometida para navegador comprometido e depois para sistema operacional comprometido?",
    "choices": [
      "Conta comprometida → Navegador: necessário executar código no contexto do navegador, contornar SOP ou sandbox. Navegador → SO: necessário explorar falha no navegador combinada com outra falha para escape. Cada transição exige condições específicas, nenhuma é garantida",
      "Todas as progressões acontecem automaticamente quando uma conta é comprometida",
      "Não existem diferenças entre essas camadas; elas são a mesma coisa",
      "Uma vez que qualquer camada está comprometida, as outras caem imediatamente"
    ],
    "correct": 0,
    "explanation": "Progressão entre camadas não é automática nem equivalente. Comprometer conta permite dados do serviço; comprometer navegador requer executar código em seu contexto (cross-site, malware, etc) e contornar SOP/sandbox; comprometer SO exige combinar vulnerabilidade do navegador com falha adicional para escape de sandbox. Cada passo é uma exploração separada com condições próprias. Falhar em um passo não permite prosseguir para o próximo."
  },
  {
    "id": "fix-01-17",
    "scope": "lesson-fixation",
    "fixationNumber": 1,
    "difficulty": "medium",
    "topic": "Definição e características de computação em nuvem",
    "lesson": "Aula 3: O que é computação em nuvem?",
    "source": "01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud/",
    "question": "Quais cinco características diferenciam computação em nuvem de um servidor remoto convencional?",
    "choices": [
      "Autosserviço sob demanda, acesso por rede, compartilhamento de recursos com isolamento lógico, elasticidade rápida e uso mensurado",
      "Apenas estar em um local remoto e ter acesso pela Internet",
      "Ser mais caro que servidor dedicado",
      "Usar criptografia e nada mais"
    ],
    "correct": 0,
    "explanation": "Um servidor remoto simples é apenas um computador distante. Nuvem é um modelo que combina cinco características: 1) Autosserviço - criar/remover recursos por painel/API sem intervenção física, 2) Acesso em rede - administrado remotamente, 3) Compartilhamento com isolamento - múltiplos clientes, separação lógica, 4) Elasticidade - crescer/encolher rapidamente, 5) Medição - consumo registrado e cobrado. Servidor remoto sem esses elementos não é nuvem."
  },
  {
    "id": "fix-01-18",
    "scope": "lesson-fixation",
    "fixationNumber": 2,
    "difficulty": "medium",
    "topic": "Virtualização e isolamento lógico",
    "lesson": "Aula 3: O que é computação em nuvem?",
    "source": "01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud/",
    "question": "Como um hipervisor permite que várias instâncias compartilhem um servidor físico mantendo isolamento lógico efetivo?",
    "choices": [
      "O hipervisor divide um servidor físico em máquinas virtuais com processador, memória, disco e redes virtuais separados, aplicando separação lógica enquanto compartilham hardware",
      "Cada máquina virtual recebe seu próprio servidor físico dedicado",
      "Um hipervisor copia o servidor físico inteiro, sem isolamento de nenhuma espécie",
      "Isolamento lógico não é possível; todas as instâncias veem os mesmos dados"
    ],
    "correct": 0,
    "explanation": "Um hipervisor é software que executa no hardware e cria abstrações virtuais. Cada máquina virtual obtém CPU virtual, memória virtual, disco virtual e interfaces de rede virtuais. O hipervisor isola essas máquinas logicamente, impedindo que uma acesse memória de outra, mesmo compartilhando o hardware físico. Várias instâncias podem coexistir no mesmo servidor com segurança de separação."
  },
  {
    "id": "fix-01-19",
    "scope": "lesson-fixation",
    "fixationNumber": 3,
    "difficulty": "hard",
    "topic": "Camadas de abstração em nuvem",
    "lesson": "Aula 3: O que é computação em nuvem?",
    "source": "01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud/",
    "question": "Qual é a diferença operacional entre plano de controle, máquina virtual e processo servidor executado dentro dela?",
    "choices": [
      "Plano de controle: APIs e consoles que criam/configuram recursos. VM: abstração do hipervisor (processador, memória, disco virtuais). Servidor: processo que aguarda conexões dentro da VM e fornece serviço",
      "Todos os três termos significam exatamente a mesma coisa",
      "Plano de controle está dentro da VM; VM está dentro do servidor",
      "Servidor é mais importante que plano de controle"
    ],
    "correct": 0,
    "explanation": "São três níveis de abstração distintos. Plano de controle é a infraestrutura de software do provedor (AWS Console, APIs) que gerencia recursos. Máquina virtual é a abstração de um computador completo criada pelo hipervisor. Servidor é um processo específico rodando dentro da VM que aguarda conexões (ex: nginx, Apache). Cada nível tem função diferente na arquitetura."
  },
  {
    "id": "fix-01-20",
    "scope": "lesson-fixation",
    "fixationNumber": 4,
    "difficulty": "medium",
    "topic": "Polissemia da palavra 'servidor'",
    "lesson": "Aula 3: O que é computação em nuvem?",
    "source": "01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud/",
    "question": "Em quais três sentidos diferentes a palavra 'servidor' pode ser usada em computação?",
    "choices": [
      "1) Computador físico preparado para fornecer recursos, 2) Máquina virtual, 3) Programa que aguarda conexões e fornece um serviço",
      "Servidor significa apenas computador; nunca é usado para programas",
      "Servidor é sinônimo de nuvem",
      "A palavra 'servidor' tem apenas um significado universal"
    ],
    "correct": 0,
    "explanation": "A palavra 'servidor' é polissêmica. Pode designar: 1) Um computador físico dedicado a fornecer recursos (hardware), 2) Uma máquina virtual que simula esse computador (abstração), 3) Um programa que executa em qualquer máquina e atende requisições (software). O contexto determina qual significado. Um servidor web é o programa (3), a máquina executando-o é a VM (2) ou físico (1)."
  },
  {
    "id": "fix-01-21",
    "scope": "lesson-fixation",
    "fixationNumber": 5,
    "difficulty": "medium",
    "topic": "Relação entre rede, internet, web e nuvem",
    "lesson": "Aula 3: O que é computação em nuvem?",
    "source": "01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud/",
    "question": "Como LAN (rede local), Internet, Web e nuvem se relacionam sem serem sinônimos?",
    "choices": [
      "LAN: conexão local entre dispositivos. Internet: interliga redes usando TCP/IP. Web: serviço construído sobre Internet (HTTP/HTTPS). Nuvem: modelo de fornecimento de recursos por rede. Cada um é distinto; nenhum implica o outro",
      "Todos os quatro termos significam exatamente a mesma coisa",
      "A Web é igual à Internet; nuvem é igual à LAN",
      "Nuvem só funciona em LAN, nunca na Internet pública"
    ],
    "correct": 0,
    "explanation": "São conceitos concêntricos, não sinônimos. LAN é um conjunto de dispositivos em um local conectados (sala, prédio). Internet é a rede global que conecta múltiplas LANs usando TCP/IP. Web é apenas um serviço construído sobre a Internet (documentos em HTTP/HTTPS); existem outros serviços (SSH, DNS, email) que não são Web. Nuvem é um modelo de administração e entrega de recursos por rede, independente da escala. Um site pode estar em LAN local sem Web; recurso de nuvem pode estar não-público."
  },
  {
    "id": "fix-01-22",
    "scope": "lesson-fixation",
    "fixationNumber": 6,
    "difficulty": "medium",
    "topic": "Componentes de URL e portas de rede",
    "lesson": "Aula 3: O que é computação em nuvem?",
    "source": "01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud/",
    "question": "Na URL `https://exemplo.test/area`, quais partes representam protocolo, host e caminho, e qual é a porta normalmente usada?",
    "choices": [
      "Protocolo: https, Host: exemplo.test, Caminho: /area, Porta: 443",
      "Protocolo: exemplo, Host: test, Caminho: https, Porta: 80",
      "Protocolo: /area, Host: https, Caminho: exemplo.test, Porta: 3000",
      "Todos os componentes significam a mesma coisa"
    ],
    "correct": 0,
    "explanation": "Uma URL tem estrutura: [protocolo]://[host]/[caminho]. Em `https://exemplo.test/area`: https é o protocolo (define criptografia TLS), exemplo.test é o host (domínio), /area é o caminho (recurso específico). HTTPS tradicionalmente usa porta 443 (negociação TLS, depois HTTP). HTTP usa 80. A porta não aparece na URL quando é a padrão."
  },
  {
    "id": "fix-01-23",
    "scope": "lesson-fixation",
    "fixationNumber": 7,
    "difficulty": "hard",
    "topic": "Fluxo de requisição até o servidor",
    "lesson": "Aula 3: O que é computação em nuvem?",
    "source": "01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud/",
    "question": "Descreva o fluxo completo desde a resolução DNS até a entrega da requisição ao processo que escuta na porta de destino.",
    "choices": [
      "1) Navegador consulta DNS para resolver domínio em IP, 2) Sistema acha rota e inicia conexão TCP, 3) Roteadores encaminham pacotes à rede do provedor, 4) Firewall e regras de rede filtram, 5) Processo em execução escutando na porta recebe a requisição",
      "DNS é irrelevante; a requisição vai direto ao servidor",
      "Firewall está bloqueado e impossível alcançar qualquer servidor",
      "A requisição sempre falha em roteadores"
    ],
    "correct": 0,
    "explanation": "Fluxo completo: 1) DNS: navegador consulta serviço DNS informando domínio, recebe IP público correspondente. 2) Roteamento: sistema consulta tabela de rota para encontrar caminho ao IP, inicia conexão TCP/TLS. 3) Transporte: roteadores intermediários encaminham pacotes até rede do provedor. 4) Filtragem: firewall de rede do provedor e regras de acesso decidem se permitem. 5) Processo: máquina recebe pacote, firewall local permite/nega, processo escutando na porta recebe. Cada passo pode bloquear."
  },
  {
    "id": "fix-01-24",
    "scope": "lesson-fixation",
    "fixationNumber": 8,
    "difficulty": "hard",
    "topic": "Condições de acessibilidade de serviços",
    "lesson": "Aula 3: O que é computação em nuvem?",
    "source": "01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud/",
    "question": "Por que atribuir um endereço IP público e liberar uma porta não são suficientes para tornar um serviço web acessível?",
    "choices": [
      "Necessárias: rota de rede, firewall compatível, processo em execução escutando, porta liberada. Apenas atribuir IP público não inicia o serviço nem faz firewall permitir; configuração completa é exigida",
      "Porque IP público é suficiente sozinho; firewall não importa",
      "Porque libertar porta automaticamente inicia o serviço",
      "Porque não há diferença entre esses dois passos"
    ],
    "correct": 0,
    "explanation": "Acessibilidade requer convergência de múltiplos fatores. IP público é endereço roteável, mas sem: 1) Rota de rede do cliente até lá, 2) Firewall de rede e de instância permitindo, 3) Processo web em execução, 4) Processo escutando na porta certa - nada funciona. Liberar porta é apenas um passo; não inicia serviço. Ter IP público sem processo rodando retorna recusa de conexão. Configuração completa em todas as camadas é necessária."
  },
  {
    "id": "fix-01-25",
    "scope": "lesson-fixation",
    "fixationNumber": 9,
    "difficulty": "hard",
    "topic": "Público e privado em contextos diferentes",
    "lesson": "Aula 3: O que é computação em nuvem?",
    "source": "01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud/",
    "question": "Como os termos 'público' e 'privado' mudam de significado quando falamos de modelo de nuvem, endereço IP e exposição de serviço?",
    "choices": [
      "Nuvem pública: oferecida a múltiplos clientes com isolamento lógico. Nuvem privada: dedicada a uma organização. IP público: roteável na Internet. IP privado: interno à rede. Serviço público: planejado para conexões externas. Serviço privado: acesso via caminhos controlados. Cada contexto tem significado distinto",
      "Público e privado significam sempre a mesma coisa em qualquer contexto",
      "IP real significa a mesma coisa que IP público",
      "Nuvem pública expõe todos os recursos ao público; nuvem privada esconde tudo"
    ],
    "correct": 0,
    "explanation": "Público/privado muda conforme o contexto: 1) Modelo: Nuvem pública (múltiplos clientes, AWS/Azure) vs. privada (dedicada a organização). 2) Rede: IP público é roteável pela Internet; IP privado é interno (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16). 3) Serviço: Público planejado para receber conexões externas; privado usa caminhos controlados (VPN, bastião). Uma máquina em nuvem pública pode ter só IP privado. Uma nuvem privada pode publicar serviços seletivamente. A imprecisão 'IP real' deve ser evitada."
  },
  {
    "id": "fix-01-26",
    "scope": "lesson-fixation",
    "fixationNumber": 10,
    "difficulty": "hard",
    "topic": "Escalabilidade, elasticidade e disponibilidade",
    "lesson": "Aula 3: O que é computação em nuvem?",
    "source": "01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud/",
    "question": "Qual é a diferença técnica entre escala vertical, escala horizontal e elasticidade, e por que nenhuma delas garante disponibilidade sozinha?",
    "choices": [
      "Vertical: aumentar CPU/memória de uma máquina. Horizontal: distribuir carga entre várias máquinas. Elasticidade: aumentar/reduzir conforme demanda. Nenhuma garante disponibilidade; faltam redundância, failover automático, monitoramento, SLA e testes",
      "Todos os três termos significam aumentar capacidade, e qualquer um automaticamente torna serviço disponível",
      "Escala horizontal é o oposto de elasticidade",
      "Disponibilidade é garantida apenas com escala vertical"
    ],
    "correct": 0,
    "explanation": "São conceitos complementares, não equivalentes. Escala vertical: aumentar processador, memória de uma instância (limite em um ponto). Escala horizontal: adicionar mais instâncias para distribuir carga (requer arquitetura de distribuição). Elasticidade: capacidade de crescer/reduzir automaticamente conforme carga. Disponibilidade é diferente: requer redundância (múltiplos componentes), domínios de falha distribuídos, balanceamento, health-check, recuperação automática e SLA. Uma aplicação pode escalar mas não ter alta disponibilidade se não tiver redundância."
  },
  {
    "id": "fix-01-27",
    "scope": "lesson-fixation",
    "fixationNumber": 11,
    "difficulty": "hard",
    "topic": "Responsabilidade compartilhada em nuvem",
    "lesson": "Aula 3: O que é computação em nuvem?",
    "source": "01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud/",
    "question": "Em uma máquina virtual na nuvem, quais camadas normalmente pertencem ao provedor e quais continuam sob responsabilidade do cliente?",
    "choices": [
      "Provedor: datacenter, hardware, virtualização, hipervisor. Cliente: identidades, regras de rede, SO, aplicações, dados. Segurança é compartilhada; provedor não assume manutenção de apps do cliente",
      "Provedor assume 100% de responsabilidade; cliente não precisa se preocupar com nada",
      "Cliente é responsável por tudo, incluindo hardware e datacenter",
      "Não há divisão de responsabilidade em nuvem"
    ],
    "correct": 0,
    "explanation": "Modelo de responsabilidade compartilhada é fundamental. Provedor protege: instalações físicas, controle de acesso, energia, refrigeração, hardware, hipervisor. Cliente protege: gerenciamento de identidades e chaves, regras de firewall, sistema operacional, patches de apps, dados sensíveis, conformidade. Nem lado assume tudo. Provedor não varre ou atualiza apps do cliente; cliente não pode tocar no hardware. Custa-memória precisa refletir essa divisão."
  },
  {
    "id": "fix-01-28",
    "scope": "lesson-fixation",
    "fixationNumber": 1,
    "difficulty": "medium",
    "topic": "Papéis cliente-servidor em comunicação",
    "lesson": "Aula 4: Por que usar nuvem em testes de segurança autorizados?",
    "source": "01-introduction-to-cloud-computing-for-hackers/04-why-learn-cloud-computing-as-a-hacker/",
    "question": "O que determina se um processo assume o papel de cliente ou servidor em uma comunicação de rede?",
    "choices": [
      "Cliente normalmente inicia conexão ou envia solicitação. Servidor aguarda comunicações em endereço/porta, processa dados e produz resposta. Papéis são dinâmicos conforme a comunicação",
      "Porque o computador é cliente ou servidor, nunca ambos",
      "Porque é determinado apenas pela versão do SO",
      "Porque protocolo é irrelevante para definir papéis"
    ],
    "correct": 0,
    "explanation": "Cliente e servidor são papéis, não categorias permanentes de computador. Em uma requisição HTTP, navegador é cliente (inicia), servidor web é servidor (aguarda/responde). No mesmo navegador, se ele disponibiliza um serviço P2P, ele é servidor para outros peers. Protocolo define formato; papéis definem quem inicia e quem atende. Um dispositivo pode ser cliente em uma comunicação e servidor em outra simultaneamente."
  },
  {
    "id": "fix-01-29",
    "scope": "lesson-fixation",
    "fixationNumber": 2,
    "difficulty": "medium",
    "topic": "Dinamismo de papéis na rede",
    "lesson": "Aula 4: Por que usar nuvem em testes de segurança autorizados?",
    "source": "01-introduction-to-cloud-computing-for-hackers/04-why-learn-cloud-computing-as-a-hacker/",
    "question": "Por que um mesmo dispositivo pode ser cliente em uma conexão e servidor em outra simultânea ou sequencialmente?",
    "choices": [
      "Porque papéis são função da comunicação específica, não do computador. Um dispositivo pode iniciar requisição (cliente) e ao mesmo tempo aguardar conexões (servidor) em dois processos diferentes",
      "Porque não é possível ser cliente e servidor ao mesmo tempo",
      "Porque um dispositivo é sempre fixo em um papel",
      "Porque processo é sinônimo de computador"
    ],
    "correct": 0,
    "explanation": "Papéis são por comunicação/processo, não por máquina. Um notebook pode: 1) Executar navegador web (cliente HTTP a um servidor web remoto), 2) Executar servidor local de desenvolvimento (servidor para requisições do mesmo notebook ou de outro), 3) Executar cliente SSH (cliente a um servidor remoto). Tudo simultaneamente em processos diferentes. Máquina não é cliente ou servidor; processos assumem papéis conforme necessário."
  },
  {
    "id": "fix-01-30",
    "scope": "lesson-fixation",
    "fixationNumber": 3,
    "difficulty": "hard",
    "topic": "Callback vs conexão direta",
    "lesson": "Aula 4: Por que usar nuvem em testes de segurança autorizados?",
    "source": "01-introduction-to-cloud-computing-for-hackers/04-why-learn-cloud-computing-as-a-hacker/",
    "question": "Como uma conexão direta difere de um callback iniciado por um agente de laboratório remoto?",
    "choices": [
      "Direta: testador inicia conexão ao alvo. Callback: agente (já no alvo) inicia conexão de saída ao serviço de controle. Callback contorna NAT/firewall de entrada porque parte de dentro, mas segue regras de saída existentes",
      "São exatamente a mesma coisa; não há diferença",
      "Callback sempre funciona universalmente; conexão direta nunca funciona",
      "Conexão direta é usada para dados; callback é usado apenas para controle"
    ],
    "correct": 0,
    "explanation": "Duas arquiteturas distintas. Conexão direta: operador no seu PC inicia conexão TCP para alvo remoto; se NAT/firewall bloqueiam entrada, falha. Callback: agente malware/shell já em execução no alvo (injetado, baixado, etc) inicia conexão de saída para servidor de controle; usa regras de saída (geralmente mais permissivas). Não atravessa universalmente controles; dependem que agente esteja executando, tenha permissão, resolva DNS, alcance destino, use protocolo permitido."
  },
  {
    "id": "fix-01-31",
    "scope": "lesson-fixation",
    "fixationNumber": 4,
    "difficulty": "hard",
    "topic": "Pré-requisitos técnicos para callback",
    "lesson": "Aula 4: Por que usar nuvem em testes de segurança autorizados?",
    "source": "01-introduction-to-cloud-computing-for-hackers/04-why-learn-cloud-computing-as-a-hacker/",
    "question": "Quais condições de execução, permissão, DNS, rota e firewall precisam existir para um callback de laboratório funcionar?",
    "choices": [
      "Agente em execução, permissão de escuta/envio, resolução DNS funcional, rota de rede até serviço de controle, firewall de saída permitindo conexão. Falta de qualquer um bloqueará callback",
      "Apenas IP público do serviço de controle é necessário",
      "Callback sempre funciona independentemente de qualquer controle",
      "Somente a senha do administrador é necessária"
    ],
    "correct": 0,
    "explanation": "Callback é frágil. Precisa de convergência: 1) Agente em execução (não foi killado), 2) Permissão de rede (processo/usuário permite escuta/send), 3) DNS resolvendo nome do C2, 4) Rota de rede até IP do servidor de controle, 5) Firewall de saída permitindo protocolo. Se qualquer um falhar (DNS resolvi para IP errado, firewall bloqueia porta, rota desaparece, agente morreu), callback não funciona. Não é mágico nem universal."
  },
  {
    "id": "fix-01-32",
    "scope": "lesson-fixation",
    "fixationNumber": 5,
    "difficulty": "hard",
    "topic": "Fluxo conceitual de C2",
    "lesson": "Aula 4: Por que usar nuvem em testes de segurança autorizados?",
    "source": "01-introduction-to-cloud-computing-for-hackers/04-why-learn-cloud-computing-as-a-hacker/",
    "question": "Como operador, serviço de controle (C2) e agente de laboratório participam do fluxo conceitual de Command and Control?",
    "choices": [
      "Operador autentica em serviço C2, envia tarefas. Agente (já em laboratório) inicia callback ao C2, estabelecendo canal. Serviço associa conexão à sessão; operador envia comandos no escopo; agente executa com privilégios que possui; resultados retornam pelo canal",
      "Operador assume todos os privilégios de qualquer agente automaticamente",
      "C2 funciona sem autenticação ou autorização",
      "Agente não precisa estar em execução; C2 o 'acorda' remotamente"
    ],
    "correct": 0,
    "explanation": "Fluxo de C2: 1) Operador autentica na infraestrutura de controle com credenciais/chaves, 2) Agente (antes executado no laboratório, ou injetado durante exploração) inicia callback TCP/UDP/HTTP ao serviço C2, 3) Serviço aceita conexão, associa à sessão do operador e laboratório, 4) Operador envia apenas comandos no escopo autorizado, 5) Agente os executa com privilégios que já possui (não ganham privilégios do operador), 6) Saída retorna pelo canal. Tudo é separado por autorização e escopo."
  },
  {
    "id": "fix-01-33",
    "scope": "lesson-fixation",
    "fixationNumber": 6,
    "difficulty": "hard",
    "topic": "Limitações de privilégio em C2",
    "lesson": "Aula 4: Por que usar nuvem em testes de segurança autorizados?",
    "source": "01-introduction-to-cloud-computing-for-hackers/04-why-learn-cloud-computing-as-a-hacker/",
    "question": "Por que um agente conectado a C2 continua limitado pelos privilégios do processo e do usuário que o executa, mesmo sob controle remoto?",
    "choices": [
      "Porque C2 é apenas um canal de comunicação. Agente executa com permissões do contexto (usuário, processo) onde roda; comando remoto não eleva privilégios. Sistema operacional ainda enforça limite de acesso baseado no usuário",
      "Porque C2 concede privilégios administrativos universalmente",
      "Porque agentes em nuvem não têm qualquer limitação",
      "Porque todos os comandos são executados como root/admin automaticamente"
    ],
    "correct": 0,
    "explanation": "C2 é infraestrutura de comunicação, não mágica de elevação de privilégio. Se agente roda como usuário comum, comandos herdam restrições daquele usuário. Não pode ler arquivo de admin, não pode executar com sudo sem senha, não pode acessar dispositivos restritos. Sistema operacional continua enforçando DAC/MAC. Para executar como admin, agente precisa: 1) Exploração de falha separada (privilege escalation), 2) Credenciais válidas, 3) Autorização explícita (sudo com senha). C2 não contorna isso."
  },
  {
    "id": "fix-01-34",
    "scope": "lesson-fixation",
    "fixationNumber": 7,
    "difficulty": "medium",
    "topic": "Distinção EC2 vs C2",
    "lesson": "Aula 4: Por que usar nuvem em testes de segurança autorizados?",
    "source": "01-introduction-to-cloud-computing-for-hackers/04-why-learn-cloud-computing-as-a-hacker/",
    "question": "Qual é a diferença técnica entre Amazon EC2 (serviço AWS) e Command and Control (C2), apesar das siglas parecidas?",
    "choices": [
      "EC2: serviço de computação da AWS que provisiona máquinas virtuais. C2: infraestrutura de coordenação para comunicação operador-agente em simulações. São completamente não-relacionados; a semelhança é apenas acidental",
      "EC2 e C2 são sinônimos",
      "C2 é um tipo de EC2",
      "EC2 é um substituto para C2"
    ],
    "correct": 0,
    "explanation": "Coincidem em sigla apenas. EC2 = Elastic Compute Cloud, serviço de máquinas virtuais da Amazon. C2 = Command and Control, arquitetura de coordenação operador-servidor-agente em operações ofensivas. Não há relação técnica. EC2 é infraestrutura; C2 é software de orquestração. Um payload de C2 pode ser hospedado em EC2, mas usar EC2 não cria C2, nem usar C2 depende de EC2."
  },
  {
    "id": "fix-01-35",
    "scope": "lesson-fixation",
    "fixationNumber": 8,
    "difficulty": "hard",
    "topic": "Escala, custo e impacto em testes",
    "lesson": "Aula 4: Por que usar nuvem em testes de segurança autorizados?",
    "source": "01-introduction-to-cloud-computing-for-hackers/04-why-learn-cloud-computing-as-a-hacker/",
    "question": "Como aumentar instâncias ou concorrência em teste de carga pode elevar custo, impacto ao alvo e risco de atingir destinos fora do escopo?",
    "choices": [
      "Mais instâncias/concorrência amplificam carga (consumo de recursos, cobrança de nuvem). Tráfego concentrado pode inundar alvo além do planejado, causando DoS não-autorizado. Requisições podem ultrapassar escopo (outros subdomínios, servidores). Limites de taxa e lista exata de destinos são obrigatórios",
      "Escalar não tem impacto em custo ou alvo",
      "Teste de carga nunca causa indisponibilidade",
      "Tráfego sempre permanece exatamente no escopo"
    ],
    "correct": 0,
    "explanation": "Escala amplifica tudo. 10 instâncias × 100 requisições/seg = 1000 req/seg vs. 1 instância × 10 req/seg = 10 req/seg. Custo nuvem escala com recursos alocados. Impacto ao alvo: 1000 req/seg pode saturar conexão, cache, banco de dados, causando indisponibilidade não-planejada. Risco de escopo: sem precisão, requisições podem: cair em load balancer errado, atingir serviço colateral (cache compartilhado), alcançar IP vizinho, explorar misconfiguration de rede. Autorização deve especificar limite de taxa, targets exatos, orçamento, critério de parada automática."
  },
  {
    "id": "fix-01-36",
    "scope": "lesson-fixation",
    "fixationNumber": 9,
    "difficulty": "hard",
    "topic": "Rastreabilidade de atividades em nuvem",
    "lesson": "Aula 4: Por que usar nuvem em testes de segurança autorizados?",
    "source": "01-introduction-to-cloud-computing-for-hackers/04-why-learn-cloud-computing-as-a-hacker/",
    "question": "Quais registros do provedor de nuvem, do alvo e do sistema DNS podem relacionar uma atividade de teste à conta do laboratório?",
    "choices": [
      "Provedor: identidade da conta, cobrança, plano de controle (criação/alteração de recursos), IPs atribuídos, horários de uso, regras de rede. Alvo: endereço de origem, horário, protocolo, requisições. DNS: registros de resolução de domínio. Não há anonimato; rastreabilidade ajuda a demonstrar autorização",
      "Nuvem oferece anonimato completo",
      "VPN elimina todos os registros de provedor",
      "Excluir a instância apaga todos os registros"
    ],
    "correct": 0,
    "explanation": "Nuvem é altamente rastreável em favor da transparência. Provedor registra: qual conta, como autenticou (chaves, MFA), cobrança e verificação, todas as chamadas de API (criar VM, mudar firewall), IPs públicos atribuídos, qual recurso fez o quê em que horário. Alvo registra: IP de origem (seu EC2), horário exato de requisição, tipos de requisição, sucesso/erro. DNS registra: quem resolveu qual domínio, quando. VPN mascara destino até o provedor VPN, mas depois tráfego identifica alvo. Excluir VM não apaga CloudTrail/logs do provedor. Em teste legítimo, essa rastreabilidade prova autorização."
  },
  {
    "id": "fix-01-37",
    "scope": "lesson-fixation",
    "fixationNumber": 10,
    "difficulty": "hard",
    "topic": "Encerramento completo de laboratório",
    "lesson": "Aula 4: Por que usar nuvem em testes de segurança autorizados?",
    "source": "01-introduction-to-cloud-computing-for-hackers/04-why-learn-cloud-computing-as-a-hacker/",
    "question": "Quais recursos precisam ser conferidos após excluir a instância principal para comprovar que o laboratório foi encerrado e a cobrança foi cessada?",
    "choices": [
      "Snapshots de disco, volumes EBS desacoplados, endereços IP elásticos/públicos ainda alocados, regras de segurança/firewall, VPCs personalizadas, dados em S3/storage, credenciais/chaves temporárias, registros de log, backups automáticos, reservas de capacidade. Cada um pode gerar cobrança contínua após instância deletada",
      "Apenas excluir a instância é suficiente para parar cobrança",
      "Snapshots e volumes nunca geram custo",
      "Endereços IP elásticos são sempre liberados automaticamente"
    ],
    "correct": 0,
    "explanation": "Excluir EC2 não encerra tudo. Muitos recursos continuam criando custo: 1) Snapshots (backups de disco) continuam armazenados, 2) Volumes EBS não-attachados ocupam espaço, 3) Endereços IP elásticos ainda alocados, 4) Grupos de segurança/rules criadas, 5) VPCs/subnets/gateways personalizados, 6) Dados em S3 (armazenamento persistente), 7) Credenciais/keys IAM criadas, 8) Backups RDS, 9) Registros de log em CloudWatch. Encerramento completo requer varredura sistemática. Verificação final: nenhum serviço público rodando, apenas evidências autorizadas preservadas, ciclo de faturamento zerado."
  }
],
  ...[
  {
    "id": "fix-02-01",
    "scope": "lesson-fixation",
    "fixationNumber": 1,
    "difficulty": "medium",
    "topic": "Ciclo de laboratório em nuvem",
    "lesson": "05 - Fundamentos da nuvem: roteiro da seção e laboratório seguro",
    "source": "02-cloud-basics/05-introduction-to-cloud-basics/",
    "question": "Em que ordem objetivo, limites, proteção da conta, criação, verificação, uso e limpeza aparecem no ciclo do laboratório?",
    "choices": [
      "Objetivo → Criação → Proteção → Limites → Verificação → Uso → Limpeza",
      "Objetivo → Limites → Proteção → Criação → Verificação → Uso → Limpeza",
      "Proteção → Objetivo → Limites → Criação → Verificação → Uso → Limpeza",
      "Objetivo → Limites → Criação → Proteção → Verificação → Uso → Limpeza"
    ],
    "correct": 1,
    "explanation": "O ciclo seguro começa definindo objetivo, depois estabelece limites e duração, protege a conta com MFA e alertas, cria os recursos necessários, verifica imagem e rede antes de usar, executa o exercício dentro do escopo, e por fim realiza a limpeza revisando custos e removendo recursos."
  },
  {
    "id": "fix-02-02",
    "scope": "lesson-fixation",
    "fixationNumber": 2,
    "difficulty": "medium",
    "topic": "SSH vs. instância EC2",
    "lesson": "05 - Fundamentos da nuvem: roteiro da seção e laboratório seguro",
    "source": "02-cloud-basics/05-introduction-to-cloud-basics/",
    "question": "Por que executar `exit` ou fechar o terminal encerra apenas a sessão SSH, mas não a instância EC2?",
    "choices": [
      "Porque SSH e EC2 funcionam como um único serviço integrado",
      "Porque `exit` e fechar o terminal desligam apenas o acesso remoto à instância, deixando o recurso computacional em execução e gerando cobrança",
      "Porque a instância é protegida por um serviço de backup automático",
      "Porque o terminal precisa de confirmação adicional para parar a instância"
    ],
    "correct": 1,
    "explanation": "SSH é apenas o canal de comunicação entre computador local e instância remota. Quando você executa `exit`, encerra essa comunicação, mas a instância EC2 continua rodando na nuvem e consumindo recursos, gerando custo. Para parar a instância, é necessário usar o Console AWS."
  },
  {
    "id": "fix-02-03",
    "scope": "lesson-fixation",
    "fixationNumber": 3,
    "difficulty": "easy",
    "topic": "Estados da instância EC2",
    "lesson": "05 - Fundamentos da nuvem: roteiro da seção e laboratório seguro",
    "source": "02-cloud-basics/05-introduction-to-cloud-basics/",
    "question": "Qual é a diferença operacional entre parar e terminar uma instância?",
    "choices": [
      "Parar é temporário e preserva o EBS; terminar é permanente e geralmente deleta o EBS",
      "Parar deleta todos os dados; terminar apenas suspende a instância",
      "Terminar pode ser revertido em 24 horas; parar não pode ser desfeito",
      "Parar custa mais que terminar porque mantém os volumes"
    ],
    "correct": 0,
    "explanation": "Parar uma instância interrompe a computação e preserva o volume EBS e dados, permitindo retomar depois. Terminar a instância é permanente e irreversível; por padrão, o volume raiz é excluído. Volumes adicionais dependem da configuração. Parar é útil para retomar depois; terminar é para encerrar definitivamente."
  },
  {
    "id": "fix-02-04",
    "scope": "lesson-fixation",
    "fixationNumber": 4,
    "difficulty": "medium",
    "topic": "Custos residuais em nuvem",
    "lesson": "05 - Fundamentos da nuvem: roteiro da seção e laboratório seguro",
    "source": "02-cloud-basics/05-introduction-to-cloud-basics/",
    "question": "Quais recursos podem continuar existindo ou gerando custo depois que a computação é interrompida?",
    "choices": [
      "Apenas o volume raiz e as chaves privadas",
      "Volumes EBS adicionais, snapshots, endereços reservados e Security Groups temporários",
      "Somente dados armazenados em S3 e backup automático",
      "Nenhum recurso gera custo após parar a instância"
    ],
    "correct": 1,
    "explanation": "Quando você para uma instância, a cobrança computacional é interrompida, mas muitos outros recursos continuam gerando despesas: volumes EBS adicionais, snapshots, endereços Elastic IP, regras de entrada e Security Groups temporários. Por isso é importante revisar e remover o que não é necessário após a limpeza."
  },
  {
    "id": "fix-02-05",
    "scope": "lesson-fixation",
    "fixationNumber": 5,
    "difficulty": "medium",
    "topic": "AWS Free Tier",
    "lesson": "05 - Fundamentos da nuvem: roteiro da seção e laboratório seguro",
    "source": "02-cloud-basics/05-introduction-to-cloud-basics/",
    "question": "Por que créditos promocionais e o selo de oferta gratuita não garantem custo zero?",
    "choices": [
      "Porque os créditos expiram automaticamente após 30 dias",
      "Porque créditos possuem condições, limites e datas próprias; nem todo recurso é elegível; contas antigas e Regiões específicas podem ter regras diferentes",
      "Porque a AWS bloqueia automaticamente contas que usam créditos",
      "Porque o selo de oferta gratuita só funciona uma única vez na vida de uma conta"
    ],
    "correct": 1,
    "explanation": "Créditos promocionais não significam uso ilimitado. Cada promoção tem prazos de validade e limites específicos. O selo 'Free Tier eligible' sozinho não comprova que determinado recurso será gratuito – depende do plano, serviços elegíveis, tipo de instância, armazenamento e outras variáveis. Contas antigas, Regiões e serviços podem seguir regras distintas."
  },
  {
    "id": "fix-02-06",
    "scope": "lesson-fixation",
    "fixationNumber": 6,
    "difficulty": "easy",
    "topic": "AWS Budgets",
    "lesson": "05 - Fundamentos da nuvem: roteiro da seção e laboratório seguro",
    "source": "02-cloud-basics/05-introduction-to-cloud-basics/",
    "question": "Por que um alerta de orçamento não funciona como bloqueio instantâneo de gastos?",
    "choices": [
      "Porque o orçamento só pode ser consultado uma vez por dia",
      "Porque os dados de cobrança não são atualizados em tempo real, o uso pode continuar antes da notificação chegar",
      "Porque alertas de orçamento são apenas uma sugestão, não uma política",
      "Porque a AWS não permite parar a cobrança automaticamente"
    ],
    "correct": 1,
    "explanation": "Um orçamento monitora e envia alertas em percentuais como 50%, 80% e 100%, mas não é um teto de gastos. Como os dados de cobrança não são atualizados em tempo real, você pode continuar consumindo recursos antes de receber o alerta. Portanto, o orçamento é uma ferramenta de monitoramento, não um bloqueio automático."
  },
  {
    "id": "fix-02-07",
    "scope": "lesson-fixation",
    "fixationNumber": 7,
    "difficulty": "medium",
    "topic": "Verificação pré-uso da instância",
    "lesson": "05 - Fundamentos da nuvem: roteiro da seção e laboratório seguro",
    "source": "02-cloud-basics/05-introduction-to-cloud-basics/",
    "question": "Quais elementos de imagem, rede, chave e exposição precisam ser verificados antes de usar a instância?",
    "choices": [
      "Apenas a velocidade de processamento e a quantidade de RAM",
      "Imagem, estado, exposição de rede e chave selecionada devem ser conferidos; se algo estiver errado, o acesso remoto ou a segurança podem ser comprometidos",
      "Somente o endereço IP público e o nome da instância",
      "Apenas o tipo de armazenamento e o Security Group"
    ],
    "correct": 1,
    "explanation": "Antes de usar a instância, é necessário verificar: a imagem está correta (Kali Linux), o estado é 'running', a exposição de rede é apropriada (não aberta sem necessidade), e a chave selecionada está disponível localmente. Falhas nessas verificações podem impedir acesso legítimo ou expor a instância desnecessariamente."
  },
  {
    "id": "fix-02-08",
    "scope": "lesson-fixation",
    "fixationNumber": 8,
    "difficulty": "hard",
    "topic": "Encerramento de laboratório",
    "lesson": "05 - Fundamentos da nuvem: roteiro da seção e laboratório seguro",
    "source": "02-cloud-basics/05-introduction-to-cloud-basics/",
    "question": "Que evidências mostram que o laboratório foi realmente encerrado, e não apenas que o terminal foi fechado?",
    "choices": [
      "Apenas fechar o terminal é suficiente para encerrar o laboratório",
      "Instância terminada no Console, volumes EBS removidos, snapshots excluídos, endereços liberados, regras removidas, e dados de cobrança atualizados sem novos gastos",
      "A chave privada foi deletada do computador local",
      "O SSH apresenta erro de conexão recusada"
    ],
    "correct": 1,
    "explanation": "Simplesmente fechar o terminal ou executar `exit` não encerra o laboratório. Evidências reais de encerramento incluem: instância terminada (não apenas parada), volumes EBS adicionais removidos, snapshots excluídos, endereços Elastic IP liberados, regras de Security Group removidas, e após a atualização de dados, verificação de que nenhuma cobrança residual aparece."
  },
  {
    "id": "fix-02-09",
    "scope": "lesson-fixation",
    "fixationNumber": 1,
    "difficulty": "medium",
    "topic": "Estrutura da conta AWS",
    "lesson": "06 - Criando e protegendo uma conta AWS",
    "source": "02-cloud-basics/06-signing-up-with-aws/",
    "question": "Quais três responsabilidades administrativas, de identidade e de cobrança ficam reunidas em uma conta AWS?",
    "choices": [
      "Recursos administrados, identidades e permissões, e relação de cobrança com a AWS",
      "Servidor físico, virtualizações e segurança de dados",
      "Somente armazenamento, processamento e rede",
      "Backup automático, recuperação de desastres e conformidade"
    ],
    "correct": 0,
    "explanation": "Uma conta AWS reúne três responsabilidades: delimita os recursos administrados (EC2, S3, etc.), concentra identidades e permissões (quem pode fazer o quê), e estabelece a relação de cobrança com a AWS. Tudo isso dentro de um único espaço administrativo."
  },
  {
    "id": "fix-02-10",
    "scope": "lesson-fixation",
    "fixationNumber": 2,
    "difficulty": "easy",
    "topic": "Usuário root AWS vs root Linux",
    "lesson": "06 - Criando e protegendo uma conta AWS",
    "source": "02-cloud-basics/06-signing-up-with-aws/",
    "question": "Qual é a diferença entre o usuário root da conta AWS e o usuário `root` dentro do Linux?",
    "choices": [
      "Não há diferença, ambos têm o mesmo poder",
      "Root AWS administra a conta e suas APIs; root Linux administra um sistema operacional específico",
      "Root AWS é local; root Linux é remoto",
      "Root Linux é obrigatório; root AWS é opcional"
    ],
    "correct": 1,
    "explanation": "O root da AWS é a conta proprietária que administra toda a conta, recursos, IAM e faturamento. O root do Linux é o usuário administrativo dentro do sistema operacional (Kali). Ambos têm poder total em seus domínios, mas atuam em níveis completamente diferentes."
  },
  {
    "id": "fix-02-11",
    "scope": "lesson-fixation",
    "fixationNumber": 3,
    "difficulty": "medium",
    "topic": "Boas práticas com root AWS",
    "lesson": "06 - Criando e protegendo uma conta AWS",
    "source": "02-cloud-basics/06-signing-up-with-aws/",
    "question": "Por que o root da AWS deve ser reservado para recuperação e tarefas exclusivas?",
    "choices": [
      "Porque o root tem acesso total à conta e credenciais de longa duração comprometidas expõem tudo",
      "Porque o root não pode ser protegido com MFA",
      "Porque o root não consegue criar identidades IAM",
      "Porque usar root frequentemente reduz o custo de computação"
    ],
    "correct": 0,
    "explanation": "O root AWS possui poder absoluto: acesso a todas as APIs, permissões e faturamento. Se suas credenciais forem comprometidas, a conta inteira está em risco. Por isso deve ser usado raramente, protegido com MFA e habilitado apenas para tarefas que realmente exigem esse nível de privilégio, como recuperação de conta ou configurações críticas."
  },
  {
    "id": "fix-02-12",
    "scope": "lesson-fixation",
    "fixationNumber": 4,
    "difficulty": "medium",
    "topic": "IAM e políticas",
    "lesson": "06 - Criando e protegendo uma conta AWS",
    "source": "02-cloud-basics/06-signing-up-with-aws/",
    "question": "O que uma política IAM define e por que ela não altera usuários existentes dentro do Kali?",
    "choices": [
      "Uma política IAM estabelece quem pode fazer quais ações sobre quais recursos na AWS; ela não altera usuários do Kali porque IAM é um serviço da AWS, não do sistema operacional Linux",
      "Uma política IAM muda as senhas de root do Linux",
      "Uma política IAM controla o acesso físico aos data centers",
      "Uma política IAM sincroniza usuários do Linux com a AWS"
    ],
    "correct": 0,
    "explanation": "IAM (Identity and Access Management) é um serviço AWS que define permissões para ações nas APIs e recursos da AWS. Ele não tem nenhuma relação com usuários do Linux dentro da máquina Kali. Uma política IAM define quem (identidade AWS) pode fazer quê (ação) em qual recurso (EC2, S3, etc.), mas não afeta usuários do sistema operacional."
  },
  {
    "id": "fix-02-13",
    "scope": "lesson-fixation",
    "fixationNumber": 5,
    "difficulty": "hard",
    "topic": "Credenciais temporárias vs. permanentes",
    "lesson": "06 - Criando e protegendo uma conta AWS",
    "source": "02-cloud-basics/06-signing-up-with-aws/",
    "question": "Quais vantagens existem em usar credenciais temporárias por função ou IAM Identity Center no acesso cotidiano?",
    "choices": [
      "Credenciais temporárias expiram automaticamente, reduzem janelas de risco de comprometimento e facilitam auditoria; permitem controle granular de permissões sem expor credenciais de longa duração",
      "Credenciais temporárias permitem usar múltiplas contas AWS simultaneamente",
      "Credenciais temporárias não precisam de MFA",
      "Credenciais temporárias custam menos que IAM users"
    ],
    "correct": 0,
    "explanation": "Credenciais temporárias (por função IAM ou IAM Identity Center) expiram automaticamente após um tempo, limitando o dano se forem comprometidas. Access keys permanentes de um IAM user, se vazadas, permanecem válidas até serem rotacionadas manualmente. Por isso, credenciais temporárias são a preferência: segurança maior e menos necessidade de gerenciar secrets de longa duração."
  },
  {
    "id": "fix-02-14",
    "scope": "lesson-fixation",
    "fixationNumber": 6,
    "difficulty": "medium",
    "topic": "Regiões AWS",
    "lesson": "06 - Criando e protegendo uma conta AWS",
    "source": "02-cloud-basics/06-signing-up-with-aws/",
    "question": "Quais recursos são regionais e por que selecionar a Região errada pode fazer uma instância parecer ausente?",
    "choices": [
      "Apenas o S3 é regional; outros recursos são globais",
      "Instâncias EC2, AMIs, key pairs, volumes e Security Groups são regionais; se você selecionar a Região errada no Console, não verá seus recursos lá",
      "Todas as regiões contêm cópias de todos os recursos",
      "Regiões só afetam o preço, não a visibilidade dos recursos"
    ],
    "correct": 1,
    "explanation": "EC2, AMIs, key pairs, volumes EBS e Security Groups são recursos regionais: existem apenas na Região onde foram criados. Se você trocar o seletor de Região no Console e procurar uma instância que criou em `us-east-1`, mas estiver vendo `eu-west-1`, a instância não aparecerá. IAM, cobrança e dados da conta são globais ou de escopo de conta."
  },
  {
    "id": "fix-02-15",
    "scope": "lesson-fixation",
    "fixationNumber": 7,
    "difficulty": "medium",
    "topic": "MFA",
    "lesson": "06 - Criando e protegendo uma conta AWS",
    "source": "02-cloud-basics/06-signing-up-with-aws/",
    "question": "O que MFA acrescenta à autenticação e por que passkeys ou chaves de segurança oferecem maior resistência a phishing?",
    "choices": [
      "MFA exige um segundo fator além da senha; passkeys e chaves de segurança resistem a phishing porque são verificadas criptograficamente em relação ao domínio, não apenas replicadas",
      "MFA reduz a necessidade de senha",
      "MFA é apenas uma segunda senha",
      "Passkeys e chaves de segurança usam a mesma tecnologia de phishing"
    ],
    "correct": 0,
    "explanation": "MFA exige algo que você sabe (senha) e algo que você possui (token, passkey, chave de segurança). Passkeys e chaves de segurança são resistentes a phishing porque sua verificação é criptograficamente vinculada ao domínio legítimo. Um atacante não consegue reutilizar o fator em outro site. Códigos TOTP são mais vulneráveis porque podem ser digitados manualmente por engano."
  },
  {
    "id": "fix-02-16",
    "scope": "lesson-fixation",
    "fixationNumber": 8,
    "difficulty": "easy",
    "topic": "Access keys do root",
    "lesson": "06 - Criando e protegendo uma conta AWS",
    "source": "02-cloud-basics/06-signing-up-with-aws/",
    "question": "Por que não devem ser criadas access keys para uso cotidiano do root?",
    "choices": [
      "Porque access keys do root custam mais caro",
      "Porque access keys são permanentes e uma chave do root teria poder sobre toda a conta; comprometimento seria catastrófico",
      "Porque access keys do root não funcionam com a AWS CLI",
      "Porque a AWS não permite criar mais de 5 access keys"
    ],
    "correct": 1,
    "explanation": "Access keys são credenciais de longa duração para acesso programático. Uma access key do root teria permissões totais sobre a conta. Se vazar, um atacante poderia deletar recursos, cobrar serviços, acessar dados sensíveis. Por isso, access keys do root não devem ser criadas para uso cotidiano; use funções IAM e credenciais temporárias em seu lugar."
  },
  {
    "id": "fix-02-17",
    "scope": "lesson-fixation",
    "fixationNumber": 9,
    "difficulty": "hard",
    "topic": "AWS Free Tier e cobrança",
    "lesson": "06 - Criando e protegendo uma conta AWS",
    "source": "02-cloud-basics/06-signing-up-with-aws/",
    "question": "Que dados do Free Tier, dos créditos e da fatura precisam ser conferidos antes de criar recursos?",
    "choices": [
      "Apenas o saldo de créditos",
      "Plano atual, saldo e validade dos créditos, uso elegível, fatura estimada, custos por serviço e Região, serviços cobertos pelo Free Tier e condições específicas da conta",
      "Somente a Região selecionada",
      "Apenas o tipo de instância disponível"
    ],
    "correct": 1,
    "explanation": "Antes de criar recursos, confirme no Console de Billing: qual plano você tem, qual é o saldo de créditos e quando expira, quais serviços são elegíveis para Free Tier, qual é a fatura estimada, e quais custos aparecem por serviço e Região. Isso evita surpresas, especialmente com créditos que podem esconder custos reais ou ter condições específicas para sua conta."
  },
  {
    "id": "fix-02-18",
    "scope": "lesson-fixation",
    "fixationNumber": 10,
    "difficulty": "hard",
    "topic": "AWS Budgets",
    "lesson": "06 - Criando e protegendo uma conta AWS",
    "source": "02-cloud-basics/06-signing-up-with-aws/",
    "question": "Quais campos e alertas são configurados em um orçamento, e por que ele monitora em vez de interromper automaticamente o consumo?",
    "choices": [
      "Tipo de orçamento (mensal), limite de custo, alertas em percentuais como 50%, 80%, 100%, e e-mail para notificações; monitora porque dados não são em tempo real e a AWS não oferece limite automático por padrão",
      "Apenas o valor máximo é configurado",
      "Orçamentos são criados automaticamente sem campos a configurar",
      "Alertas ocorrem apenas uma vez, no final do mês"
    ],
    "correct": 0,
    "explanation": "Um orçamento exige: tipo (mensal de custo é comum), valor limite, percentuais de alerta (ex: 50%, 80%, 100% do limite), e e-mail para receber notificações. Ele monitora em vez de bloquear automaticamente porque: (1) dados de cobrança não são em tempo real, (2) a AWS oferece isso como alerta, não como teto de gastos, (3) essa é a responsabilidade do usuário gerenciar."
  },
  {
    "id": "fix-02-19",
    "scope": "lesson-fixation",
    "fixationNumber": 1,
    "difficulty": "easy",
    "topic": "Linux, Debian e Kali Linux",
    "lesson": "07 - Provisionando Kali Linux no Amazon EC2",
    "source": "02-cloud-basics/07-installing-kali-linux-on-the-cloud/",
    "question": "Qual é a relação entre kernel Linux, distribuição Debian e distribuição Kali Linux?",
    "choices": [
      "Todas as três são a mesma coisa",
      "Linux é o kernel que gerencia hardware; Debian é uma distribuição que combina o kernel com ferramentas; Kali é uma distribuição baseada em Debian voltada para testes de segurança",
      "Linux é apenas o terminal de comando",
      "Debian e Kali são sistemas operacionais separados que não compartilham código"
    ],
    "correct": 1,
    "explanation": "Linux é o kernel (núcleo) que gerencia processador, memória e dispositivos. Debian é uma distribuição Linux completa (kernel + ferramentas + repositórios). Kali Linux é uma distribuição baseada em Debian, mantida para segurança, com repositórios, metapacotes e ferramentas especializadas para testes de penetração. Não é apenas Debian com alguns programas adicionados."
  },
  {
    "id": "fix-02-20",
    "scope": "lesson-fixation",
    "fixationNumber": 2,
    "difficulty": "medium",
    "topic": "AMI vs. Instância EC2",
    "lesson": "07 - Provisionando Kali Linux no Amazon EC2",
    "source": "02-cloud-basics/07-installing-kali-linux-on-the-cloud/",
    "question": "O que uma AMI fornece e o que só passa a existir quando uma instância EC2 é criada?",
    "choices": [
      "AMI e instância são a mesma coisa",
      "AMI fornece template do sistema e configuração inicial; instância EC2 é o recurso em execução com estado, identificador, rede, armazenamento e capacidade próprios",
      "AMI fornece apenas o processador",
      "Instância é a imagem, AMI é o computador em execução"
    ],
    "correct": 1,
    "explanation": "Uma AMI (Amazon Machine Image) é um template ou imagem de inicialização que contém o sistema operacional e configurações iniciais. Não é uma máquina em execução. Quando você cria uma instância EC2 a partir de uma AMI, nasce um recurso com estado (running, stopped, etc.), identificador único, interface de rede, endereço IP, volumes de armazenamento e capacidade computacional próprios. Uma AMI pode iniciar múltiplas instâncias."
  },
  {
    "id": "fix-02-21",
    "scope": "lesson-fixation",
    "fixationNumber": 3,
    "difficulty": "hard",
    "topic": "Composição da instância EC2",
    "lesson": "07 - Provisionando Kali Linux no Amazon EC2",
    "source": "02-cloud-basics/07-installing-kali-linux-on-the-cloud/",
    "question": "Como tipo de instância, volume EBS, rede, Security Group e key pair participam da composição da instância?",
    "choices": [
      "Todos são opcionais e podem ser adicionados depois",
      "Tipo fornece vCPU, RAM e capacidade de rede; volumes EBS fornecem armazenamento persistente; rede e Security Group definem conectividade; key pair fornece a chave pública para acesso inicial",
      "Apenas o tipo de instância importa; outros são irrelevantes",
      "Eles são configurados automaticamente pela AWS sem envolvimento do usuário"
    ],
    "correct": 1,
    "explanation": "Ao criar uma instância EC2: a AMI fornece o sistema e configuração inicial, o instance type define vCPU, RAM e capacidade de rede, os volumes EBS fornecem armazenamento persistente, a rede (VPC) e Security Group determinam o tráfego permitido, e o key pair fornece a chave pública colocada em `~/.ssh/authorized_keys` para acesso SSH inicial."
  },
  {
    "id": "fix-02-22",
    "scope": "lesson-fixation",
    "fixationNumber": 4,
    "difficulty": "medium",
    "topic": "RAM e EBS",
    "lesson": "07 - Provisionando Kali Linux no Amazon EC2",
    "source": "02-cloud-basics/07-installing-kali-linux-on-the-cloud/",
    "question": "Por que RAM e armazenamento EBS possuem ciclos de vida e cobrança diferentes?",
    "choices": [
      "Porque RAM e EBS custam o mesmo valor",
      "Porque RAM perde conteúdo ao desligar e seu uso é temporário; EBS é persistente e pode continuar gerando cobrança mesmo com a instância parada, enquanto RAM não",
      "Porque EBS é mais rápido que RAM",
      "Porque a AWS oferece RAM gratuitamente"
    ],
    "correct": 1,
    "explanation": "RAM (memória da instância) perde todo seu conteúdo quando a instância desliga ou termina. EBS (armazenamento em blocos persistente) retém dados mesmo com a instância parada e continua gerando custo. Por isso são coisas diferentes: RAM é temporária e vinculada ao ciclo de vida da instância, EBS é permanente e tem seu próprio ciclo de vida e cobrança."
  },
  {
    "id": "fix-02-23",
    "scope": "lesson-fixation",
    "fixationNumber": 5,
    "difficulty": "hard",
    "topic": "Escolha de AMI",
    "lesson": "07 - Provisionando Kali Linux no Amazon EC2",
    "source": "02-cloud-basics/07-installing-kali-linux-on-the-cloud/",
    "question": "Quais dados de publicador, arquitetura, Região, usuário padrão e preço devem ser verificados antes de escolher uma AMI?",
    "choices": [
      "Apenas o nome da AMI é importante",
      "Publicador oficial (confirme Kali), arquitetura (x86_64 ou ARM), disponibilidade na Região selecionada, usuário SSH padrão (kali para Kali Linux), preço de software do Marketplace, termos e elegibilidade Free Tier",
      "Somente o tamanho em gigabytes",
      "Apenas a data de criação"
    ],
    "correct": 1,
    "explanation": "Antes de escolher uma AMI, especialmente a do Kali Linux: confirme o publicador (deve ser oficial do projeto Kali), verifique a arquitetura (x86_64 é comum), certifique-se de que está disponível na Região escolhida, confirme o usuário SSH padrão (para Kali é 'kali'), revise o preço de software, leia os termos do Marketplace, e verifique elegibilidade para Free Tier se necessário."
  },
  {
    "id": "fix-02-24",
    "scope": "lesson-fixation",
    "fixationNumber": 6,
    "difficulty": "medium",
    "topic": "Key pair: localização das chaves",
    "lesson": "07 - Provisionando Kali Linux no Amazon EC2",
    "source": "02-cloud-basics/07-installing-kali-linux-on-the-cloud/",
    "question": "Onde a chave pública e a chave privada do key pair ficam após a primeira inicialização?",
    "choices": [
      "Ambas ficam no Console AWS",
      "A chave pública é adicionada a `~/.ssh/authorized_keys` no Kali; a chave privada fica no computador local do usuário",
      "Ambas ficam no computador local",
      "A chave pública fica no Kali e a privada no Console AWS"
    ],
    "correct": 1,
    "explanation": "Durante a primeira inicialização da instância, a chave pública do key pair selecionado é adicionada a `~/.ssh/authorized_keys` do usuário (kali, neste caso) dentro da instância. A chave privada correspondente é baixada e deve ficar armazenada protegida no computador local. A AWS não mantém cópia da chave privada e, se perdida, não pode ser recuperada."
  },
  {
    "id": "fix-02-25",
    "scope": "lesson-fixation",
    "fixationNumber": 7,
    "difficulty": "medium",
    "topic": "Key pair reutilização",
    "lesson": "07 - Provisionando Kali Linux no Amazon EC2",
    "source": "02-cloud-basics/07-installing-kali-linux-on-the-cloud/",
    "question": "Por que criar outro key pair com o mesmo nome não concede acesso automático a uma instância antiga?",
    "choices": [
      "Porque AWS sincroniza automaticamente todos os key pairs",
      "Porque cada key pair é único; criar um novo key pair com o mesmo nome não gera a mesma chave privada que foi usada na instância antiga",
      "Porque a instância antiga é automaticamente deletada",
      "Porque nomes de key pairs não importam para acesso SSH"
    ],
    "correct": 1,
    "explanation": "Quando você cria um key pair, a AWS gera um par único matematicamente vinculado. Se criar outro key pair com o mesmo nome, será um par completamente diferente. A instância antiga continua com a chave pública do primeiro par em `authorized_keys`, portanto a chave privada do novo par não funcionará. Se perder a chave privada original, perde acesso à instância."
  },
  {
    "id": "fix-02-26",
    "scope": "lesson-fixation",
    "fixationNumber": 8,
    "difficulty": "hard",
    "topic": "Regra SSH no Security Group",
    "lesson": "07 - Provisionando Kali Linux no Amazon EC2",
    "source": "02-cloud-basics/07-installing-kali-linux-on-the-cloud/",
    "question": "Qual regra de entrada deve ser configurada para SSH e por que uma origem `/32` é mais restrita que `0.0.0.0/0`?",
    "choices": [
      "Protocolo UDP, porta 443, origem qualquer IP",
      "Protocolo TCP, porta 22, origem seu IP público atual com máscara `/32`; `/32` significa um único IP, enquanto `0.0.0.0/0` permite qualquer IP da Internet",
      "Protocolo TCP, porta 3389, origem `0.0.0.0/0`",
      "Protocolo HTTPS, porta 22, origem localhost"
    ],
    "correct": 1,
    "explanation": "A regra SSH correta é: protocolo TCP, porta de destino 22. A origem deve ser somente o seu IP público atual, especificado com `/32` (um único host). `0.0.0.0/0` permite tentativas de qualquer endereço IPv4 da Internet, expondo a instância a varreduras e ataques. `/32` é mais seguro para laboratório pessoal."
  },
  {
    "id": "fix-02-27",
    "scope": "lesson-fixation",
    "fixationNumber": 9,
    "difficulty": "medium",
    "topic": "Estado running da instância",
    "lesson": "07 - Provisionando Kali Linux no Amazon EC2",
    "source": "02-cloud-basics/07-installing-kali-linux-on-the-cloud/",
    "question": "Por que o estado `running` não comprova sozinho que a instância está pronta para receber SSH?",
    "choices": [
      "Porque `running` significa que a máquina virtual está ligada, mas não garante que o `sshd` está respondendo ou que as verificações de status foram aprovadas",
      "Porque `running` é apenas um estado temporário",
      "Porque máquinas em `running` nunca aceitam SSH",
      "Porque SSH não depende do estado da instância"
    ],
    "correct": 0,
    "explanation": "O estado `running` indica que a instância foi ligada, mas não prova que está totalmente pronta. Você também precisa verificar: (1) verificações de status aprovadas (status checks), (2) endereço IPv4/DNS público atribuído, (3) key pair correto, (4) Security Group com regra TCP/22. Somente depois de confirmar tudo é seguro tentar SSH."
  },
  {
    "id": "fix-02-28",
    "scope": "lesson-fixation",
    "fixationNumber": 10,
    "difficulty": "hard",
    "topic": "Ciclo de vida da instância",
    "lesson": "07 - Provisionando Kali Linux no Amazon EC2",
    "source": "02-cloud-basics/07-installing-kali-linux-on-the-cloud/",
    "question": "O que muda entre reiniciar, parar e terminar uma instância, inclusive para IP público e volumes?",
    "choices": [
      "Todos resultam no mesmo estado final",
      "Reiniciar: instância reinicia, IP público automático pode mudar, volumes EBS preservados; Parar: cobrança computacional interrompida, IP automático muda ao reiniciar, volumes EBS preservados; Terminar: instância deletada, volume raiz normalmente excluído, mudança irreversível",
      "Apenas terminar altera a instância; reiniciar e parar não mudam nada",
      "Reiniciar deleta dados; parar preserva; terminar é reversível"
    ],
    "correct": 1,
    "explanation": "Reboot reinicia sem encerrar; o IPv4 automático pode mudar, EBS é preservado. Stop interrompe computação (menos cobrança), EBS preservado, IPv4 automático muda se iniciar novamente. Terminate é permanente e irreversível; volume raiz é normalmente deletado por padrão, volumes adicionais dependem da configuração. Nunca confunda parar com terminar."
  },
  {
    "id": "fix-02-29",
    "scope": "lesson-fixation",
    "fixationNumber": 11,
    "difficulty": "hard",
    "topic": "Limpeza de recursos EC2",
    "lesson": "07 - Provisionando Kali Linux no Amazon EC2",
    "source": "02-cloud-basics/07-installing-kali-linux-on-the-cloud/",
    "question": "Quais recursos além da instância devem ser procurados durante a limpeza para evitar cobrança residual?",
    "choices": [
      "Apenas deletar a instância é suficiente",
      "Volumes EBS adicionais, snapshots, Elastic IPs, endereços públicos, Security Groups temporários e regras de entrada; verificar também tráfego de dados e preço de AMI se usada do Marketplace",
      "Somente chaves privadas",
      "Apenas o Console de Billing"
    ],
    "correct": 1,
    "explanation": "Ao terminar uma instância, a limpeza completa exige verificar: volumes EBS adicionais (geralmente não são deletados automaticamente), snapshots de backup, Elastic IPs ou endereços públicos reservados, Security Groups criados para a instância, regras de entrada e saída customizadas, e se a AMI era do Marketplace (pode ter custo associado). A AWS continua cobrando por esses recursos mesmo com a instância terminada."
  },
  {
    "id": "fix-02-30",
    "scope": "lesson-fixation",
    "fixationNumber": 1,
    "difficulty": "medium",
    "topic": "Localização de SSH",
    "lesson": "08 - Acessando uma instância remota com SSH",
    "source": "02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh/",
    "question": "Em quais máquinas são executados o cliente `ssh`, o servidor `sshd` e a shell remota?",
    "choices": [
      "Todos os três executam no computador local",
      "Cliente `ssh` no computador local; `sshd` (servidor) e shell remota no Kali; teclado e tela permanecem locais, mas comandos são processados remotamente",
      "Todos executam no Kali",
      "O cliente executar no Kali e o servidor no computador local"
    ],
    "correct": 1,
    "explanation": "SSH é dividido em componentes: o cliente `ssh` executa no computador local e inicia a conexão. O servidor `sshd` (SSH daemon) executa no Kali e aguarda a conexão. Após autenticação, uma shell remota é iniciada no Kali. O teclado e a tela permanecem no computador local, mas os comandos digitados são executados na máquina remota."
  },
  {
    "id": "fix-02-31",
    "scope": "lesson-fixation",
    "fixationNumber": 2,
    "difficulty": "hard",
    "topic": "Caminho da conexão SSH",
    "lesson": "08 - Acessando uma instância remota com SSH",
    "source": "02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh/",
    "question": "Descreva o caminho da conexão desde o IP público e o Security Group até o processo `sshd` na porta TCP `22`.",
    "choices": [
      "A conexão vai diretamente para o IP sem passar por segurança",
      "Cliente estabelece TCP para IP público, roteadores encaminham pela Internet até a VPC, rota da subnet direciona para a interface, Internet Gateway permite entrada, Security Group filtra o tráfego na porta 22, a interface recebe o pacote e entrega ao kernel, que passa para `sshd` em escuta naquela porta",
      "O Security Group é o único bloqueio de segurança",
      "A VPC e o Internet Gateway não são necessários"
    ],
    "correct": 1,
    "explanation": "O caminho completo: cliente inicia TCP para o IP público/porta 22, roteadores na Internet encaminham os pacotes, chegam na VPC (rede virtual da AWS), rota da subnet e Internet Gateway permitem a entrada, Security Group (firewall stateful) valida a regra de entrada para TCP/22, a interface de rede recebe o pacote, o kernel Linux o entrega ao processo `sshd` escutando naquela porta. Firewall local pode adicionar filtros adicionais."
  },
  {
    "id": "fix-02-32",
    "scope": "lesson-fixation",
    "fixationNumber": 3,
    "difficulty": "hard",
    "topic": "Dois pares de chaves SSH",
    "lesson": "08 - Acessando uma instância remota com SSH",
    "source": "02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh/",
    "question": "Qual é a diferença entre a chave de host e o key pair do usuário, e como a chave privada autentica sem ser enviada ao servidor?",
    "choices": [
      "Ambas as chaves são idênticas",
      "Chave de host comprova identidade do servidor (privada na instância, pública ao cliente); key pair (chave do usuário) autoriza login (privada no computador local, pública em `authorized_keys`). A privada não é enviada; o cliente assina dados com ela, servidor verifica a assinatura com a chave pública",
      "Apenas a chave de host é importante; o key pair não importa",
      "A chave privada do usuário é enviada encriptada ao servidor"
    ],
    "correct": 1,
    "explanation": "Dois pares de chaves operam em SSH: (1) Chave de host: privada na instância, pública apresentada ao cliente para provar que é o servidor correto. (2) Key pair (chave do usuário): privada no computador local, pública em `~/.ssh/authorized_keys` no servidor. O cliente usa a privada para assinar um desafio; o servidor verifica com a pública. A chave privada nunca viaja pela rede."
  },
  {
    "id": "fix-02-33",
    "scope": "lesson-fixation",
    "fixationNumber": 4,
    "difficulty": "medium",
    "topic": "Fingerprint SSH",
    "lesson": "08 - Acessando uma instância remota com SSH",
    "source": "02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh/",
    "question": "O que a fingerprint representa, onde a chave aceita é armazenada e por que ela deve ser verificada antes de responder `yes`?",
    "choices": [
      "Fingerprint é a chave completa do servidor",
      "Fingerprint é um resumo criptográfico da chave pública do servidor; é armazenada em `~/.ssh/known_hosts` (Linux/macOS) ou `%USERPROFILE%\\.ssh\\known_hosts` (Windows); deve ser verificada para detectar interceptação ou mudanças não esperadas",
      "Fingerprint é apenas um número aleatório",
      "Fingerprint não importa para segurança"
    ],
    "correct": 1,
    "explanation": "Fingerprint é um resumo criptográfico (hash) da chave pública do servidor. Antes de responder `yes` à pergunta de confiança na primeira conexão, obtenha a fingerprint por fonte confiável (ex: log do sistema no EC2) e compare. O cliente armazena a chave aceita em `known_hosts`. Mudanças depois disso podem indicar interceptação ou reconstrução legítima, mas devem ser investigadas."
  },
  {
    "id": "fix-02-34",
    "scope": "lesson-fixation",
    "fixationNumber": 5,
    "difficulty": "easy",
    "topic": "Comando ssh -V",
    "lesson": "08 - Acessando uma instância remota com SSH",
    "source": "02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh/",
    "question": "No comando `ssh -V`, o que fazem `ssh` e `-V`, e por que `-V` não é igual a `-v`?",
    "choices": [
      "Ambos mostram a mesma informação",
      "`ssh` é o cliente OpenSSH; `-V` (maiúscula) mostra versão sem iniciar conexão; `-v` (minúscula) inicia diagnóstico detalhado durante a conexão",
      "`ssh` é uma senha; `-V` inicia uma conexão remota",
      "Ambos deletam dados locais"
    ],
    "correct": 1,
    "explanation": "`ssh` é o comando do cliente OpenSSH. `-V` (maiúscula) exibe a versão do programa sem conectar a nada. `-v` (minúscula, case-sensitive) inicia modo verbose: mostra resolução de DNS, negociação, autenticação e detalhes da conexão, útil para diagnóstico de problemas. Não confunda as duas."
  },
  {
    "id": "fix-02-35",
    "scope": "lesson-fixation",
    "fixationNumber": 6,
    "difficulty": "medium",
    "topic": "Comando SSH completo",
    "lesson": "08 - Acessando uma instância remota com SSH",
    "source": "02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh/",
    "question": "Em `ssh -i \"C:\\CAMINHO\\<CHAVE>.pem\" kali@<IP-PUBLICO>`, o que fazem cada parte e em qual computador o comando é executado?",
    "choices": [
      "Todas as partes executam no Kali",
      "`ssh` inicia o cliente; `-i` seleciona o arquivo de identidade (chave privada); `kali` é o usuário remoto; `@` separa usuário e host; `<IP-PUBLICO>` identifica a instância. O comando executa no computador local",
      "O comando executa no servidor AWS",
      "A chave `.pem` é a chave pública"
    ],
    "correct": 1,
    "explanation": "Este comando executa no computador local (PowerShell ou terminal). `ssh` inicia o cliente OpenSSH. `-i \"C:\\...\"` especifica o caminho até a chave privada (arquivo .pem). `kali` é o usuário remoto na instância. `@` é separador. `<IP-PUBLICO>` é o endereço da instância. Sem outra configuração, a porta padrão é 22."
  },
  {
    "id": "fix-02-36",
    "scope": "lesson-fixation",
    "fixationNumber": 7,
    "difficulty": "medium",
    "topic": "Opção -p do SSH",
    "lesson": "08 - Acessando uma instância remota com SSH",
    "source": "02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh/",
    "question": "O que a opção `-p <PORTA>` altera e quais configurações do `sshd` e do Security Group também precisam coincidir?",
    "choices": [
      "A opção `-p` altera a senha",
      "A opção `-p` define a porta de destino remota; `sshd` deve estar configurado para escutar nessa porta e o Security Group deve ter regra de entrada permitindo tráfego TCP naquela porta",
      "A opção `-p` muda apenas a porta local, não a remota",
      "Security Group não afeta a porta SSH"
    ],
    "correct": 1,
    "explanation": "Se `sshd` na instância foi configurado para escutar em porta não-padrão (ex: 2222 em vez de 22), você precisa usar `ssh -p 2222 ...`. Mas duas configurações devem coincidir: (1) a porta em que `sshd` escuta no Kali, (2) a porta permitida pela regra de entrada do Security Group. Se alguma estiver diferente, a conexão falha."
  },
  {
    "id": "fix-02-37",
    "scope": "lesson-fixation",
    "fixationNumber": 8,
    "difficulty": "hard",
    "topic": "Permissões de chave privada",
    "lesson": "08 - Acessando uma instância remota com SSH",
    "source": "02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh/",
    "question": "Como `chmod 400`, `chmod 600` e as restrições feitas por `icacls.exe` protegem a chave privada em sistemas diferentes?",
    "choices": [
      "Todas as permissões têm o mesmo efeito",
      "`chmod 400`: leitura-só para proprietário em Linux/macOS; `chmod 600`: leitura e escrita para proprietário. Ambas removem acesso de grupo e outros. `icacls.exe` no Windows redefine permissões, remove herança e concede leitura apenas ao usuário atual, evitando que outro usuário ou \"Everyone\" acesse a chave",
      "Permissões de arquivo não protegem chaves privadas",
      "Apenas `chmod 700` é aceitável"
    ],
    "correct": 1,
    "explanation": "Em Linux/macOS: `chmod 400` (read-only proprietário) ou `chmod 600` (read-write proprietário) protegem a chave. Em Windows: `icacls.exe` redefine ACLs, remove permissões herdadas, e garante que apenas o usuário atual (proprietário) tenha leitura. O objetivo é comum: impedir que qualquer outro usuário ou processo acesse a chave privada."
  },
  {
    "id": "fix-02-38",
    "scope": "lesson-fixation",
    "fixationNumber": 9,
    "difficulty": "easy",
    "topic": "Confirmação após SSH",
    "lesson": "08 - Acessando uma instância remota com SSH",
    "source": "02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh/",
    "question": "O que `whoami`, `hostname` e `uname -a` confirmam depois da conexão?",
    "choices": [
      "Apenas exibem números aleatórios",
      "`whoami` confirma o usuário efetivo (esperado: kali); `hostname` mostra o nome da máquina remota; `uname -a` exibe informações do kernel e sistema operacional",
      "Todos mostram a mesma informação",
      "Esses comandos não funcionam após SSH"
    ],
    "correct": 1,
    "explanation": "`whoami` deve mostrar `kali`, confirmando que você está autenticado como o usuário esperado. `hostname` exibe o nome da máquina remota (ex: 'kali-lab'), comprovando que está na instância correta. `uname -a` mostra detalhes do kernel Linux, versão e arquitetura, validando que é realmente um sistema Linux remoto."
  },
  {
    "id": "fix-02-39",
    "scope": "lesson-fixation",
    "fixationNumber": 10,
    "difficulty": "medium",
    "topic": "Test-NetConnection",
    "lesson": "08 - Acessando uma instância remota com SSH",
    "source": "02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh/",
    "question": "O que um resultado positivo de `Test-NetConnection <IP> -Port 22` comprova e o que ainda não comprova?",
    "choices": [
      "Comprova completa autenticação e funcionamento do SSH",
      "Comprova que TCP pode ser estabelecido com o host na porta 22; não comprova identidade do servidor, autenticação do usuário ou que `sshd` está realmente escutando",
      "Comprova apenas que a máquina está ligada",
      "Não comprova nada sobre conectividade"
    ],
    "correct": 1,
    "explanation": "Um resultado positivo (timed out False) significa que TCP conseguiu chegar à porta 22 e a conexão TCP foi aceita. Mas isso é apenas conectividade de rede. Não prova: que é realmente um `sshd` respondendo, que as chaves e permissões funcionarão, que a autenticação será bem-sucedida. Você ainda precisa tentar `ssh` completo para validar tudo."
  },
  {
    "id": "fix-02-40",
    "scope": "lesson-fixation",
    "fixationNumber": 11,
    "difficulty": "hard",
    "topic": "Diagnóstico de erros SSH",
    "lesson": "08 - Acessando uma instância remota com SSH",
    "source": "02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh/",
    "question": "Como distinguir timeout, conexão recusada e falha de chave, e quando `ssh -vvv` ajuda a localizar a etapa da falha?",
    "choices": [
      "Todos os erros são iguais",
      "Timeout: cliente não recebeu resposta, verifica rede/Security Group. Connection refused: endereço respondeu mas `sshd` não está respondendo. Permission denied: rede funcionou mas autenticação falhou. `ssh -vvv` mostra todo o fluxo (DNS, TCP, negociação) para identificar exatamente onde parou",
      "Erros SSH não podem ser diferenciados",
      "Apenas reiniciar o servidor resolve"
    ],
    "correct": 1,
    "explanation": "Connection timed out = sem resposta, problema de rede/rota/Security Group. Connection refused = TCP respondeu mas `sshd` não está escutando/ativo. Permission denied (publickey) = rede OK, mas chave/usuário errados. `ssh -vvv` (verbose triplo) mostra resolução DNS, negociação TCP, algoritmos, e autenticação passo-a-passo, permitindo identificar exatamente qual etapa falhou."
  },
  {
    "id": "fix-02-41",
    "scope": "lesson-fixation",
    "fixationNumber": 12,
    "difficulty": "medium",
    "topic": "Exit SSH",
    "lesson": "08 - Acessando uma instância remota com SSH",
    "source": "02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh/",
    "question": "O que `exit` encerra e por que ele não para a instância EC2?",
    "choices": [
      "`exit` para a instância",
      "`exit` encerra a shell remota e a conexão SSH, retornando ao terminal local; a instância EC2 continua em `running` consumindo recursos",
      "`exit` deleta a instância",
      "`exit` não faz nada"
    ],
    "correct": 1,
    "explanation": "`exit` é um comando do shell que encerra a shell remota e fecha a conexão SSH. Você volta ao prompt do computador local. Mas a instância EC2 continua em estado `running`, gerando cobrança. Para parar ou terminar a instância, use o Console AWS ou AWS CLI."
  },
  {
    "id": "fix-02-42",
    "scope": "lesson-fixation",
    "fixationNumber": 1,
    "difficulty": "easy",
    "topic": "Componentes do prompt Linux",
    "lesson": "09 - Fundamentos do terminal Linux",
    "source": "02-cloud-basics/09-linux-terminal-basics/",
    "question": "No prompt `kali@servidor:~$`, o que representam usuário, máquina, `~` e `$`, e por que o prompt não deve ser digitado?",
    "choices": [
      "Todos os caracteres devem ser digitados",
      "`kali` = usuário atual; `servidor` = nome da máquina; `~` = diretório pessoal; `$` = indicação que shell está pronto. O prompt não é digitado porque já aparece automaticamente",
      "O prompt é um comando",
      "Cada caractere representa um endereço de memória"
    ],
    "correct": 1,
    "explanation": "O prompt `kali@servidor:~$` é exibido automaticamente pelo shell para indicar que está pronto para receber comandos. Nunca digite o prompt. Seu significado: `kali` identifica o usuário, `servidor` é o nome da máquina remota, `~` indica que você está no diretório pessoal (`/home/kali`), `$` indica que é um usuário comum (não `root`)."
  },
  {
    "id": "fix-02-43",
    "scope": "lesson-fixation",
    "fixationNumber": 2,
    "difficulty": "medium",
    "topic": "Terminal, shell e CLI",
    "lesson": "09 - Fundamentos do terminal Linux",
    "source": "02-cloud-basics/09-linux-terminal-basics/",
    "question": "Qual é a diferença entre terminal, shell, CLI, prompt e comando?",
    "choices": [
      "Todos os termos significam a mesma coisa",
      "Terminal = aplicativo que mostra entrada/saída; Shell = interpretador de comandos (Bash, Zsh); CLI = interface por texto; Prompt = indicação que shell está pronto; Comando = instrução a executar",
      "Terminal é o que controla tudo",
      "CLI e shell são interconexões de rede"
    ],
    "correct": 1,
    "explanation": "Terminal é o aplicativo (ex: putty, iTerm2) que apresenta entrada/saída. Dentro dele, o shell (Bash, Zsh) interpreta os comandos. CLI significa Command-Line Interface, descrevendo essa forma de interação textual. O prompt (ex: `$`) indica que o shell está pronto. Um comando é a instrução que você digita."
  },
  {
    "id": "fix-02-44",
    "scope": "lesson-fixation",
    "fixationNumber": 3,
    "difficulty": "easy",
    "topic": "Diretório raiz vs root",
    "lesson": "09 - Fundamentos do terminal Linux",
    "source": "02-cloud-basics/09-linux-terminal-basics/",
    "question": "Por que `/`, `/root` e `/home/kali` representam locais diferentes?",
    "choices": [
      "Todas as três são a mesma localização",
      "`/` é o diretório raiz do sistema; `/root` é o diretório pessoal do usuário administrativo `root`; `/home/kali` é o diretório pessoal do usuário comum `kali`. Três locais distintos na hierarquia",
      "Apenas `/` existe; os outros são aliases",
      "Todas as três são atalhos para `/home`"
    ],
    "correct": 1,
    "explanation": "A hierarquia Linux começa em `/` (raiz do sistema). `/root` fica fora de `/home` e é reservado para o usuário `root`. `/home/kali` é a pasta pessoal do usuário `kali` dentro de `/home`. Três caminhos completamente diferentes em locais distintos da árvore de diretórios."
  },
  {
    "id": "fix-02-45",
    "scope": "lesson-fixation",
    "fixationNumber": 4,
    "difficulty": "medium",
    "topic": "Caminhos absolutos e relativos",
    "lesson": "09 - Fundamentos do terminal Linux",
    "source": "02-cloud-basics/09-linux-terminal-basics/",
    "question": "O que torna `/var/www/html/index.html` absoluto, de que depende `www/html` e como espaços e maiúsculas afetam caminhos?",
    "choices": [
      "Ambos são absolutos",
      "Caminho absoluto começa em `/`; `www/html` é relativo (depende do diretório atual). Espaços exigem aspas: `cd \"Meus Arquivos\"`. Maiúsculas são case-sensitive: `Downloads` ≠ `downloads`",
      "Caminhos com barras são sempre relativos",
      "Maiúsculas não afetam nomes de arquivo"
    ],
    "correct": 1,
    "explanation": "Caminhos absolutos começam em `/` e funcionam de qualquer diretório. Caminhos relativos dependem do diretório atual: `www/html` funciona diferente se você está em `/var` ou em `/home`. Espaços nos nomes requerem aspas para não serem interpretados como separadores. Linux diferencia maiúsculas: `File.txt` e `file.txt` são arquivos diferentes."
  },
  {
    "id": "fix-02-46",
    "scope": "lesson-fixation",
    "fixationNumber": 5,
    "difficulty": "medium",
    "topic": "Anatomia de um comando",
    "lesson": "09 - Fundamentos do terminal Linux",
    "source": "02-cloud-basics/09-linux-terminal-basics/",
    "question": "Em `ls -la /var/www/html`, qual é o comando, quais opções foram combinadas e qual é o argumento?",
    "choices": [
      "Tudo é um único comando",
      "Comando: `ls`; Opções: `-l` (detalhado) e `-a` (ocultos) combinadas em `-la`; Argumento: `/var/www/html` (o alvo)",
      "Comando é `/var/www/html`",
      "Não há argumento neste comando"
    ],
    "correct": 1,
    "explanation": "`ls` é o comando principal. `-la` combina duas opções: `-l` (formato longo/detalhado) e `-a` (inclui entradas ocultas). `/var/www/html` é o argumento, informando sobre qual diretório `ls` deve trabalhar. Sem argumento, `ls` listaria o diretório atual."
  },
  {
    "id": "fix-02-47",
    "scope": "lesson-fixation",
    "fixationNumber": 6,
    "difficulty": "hard",
    "topic": "Saída de ls -l",
    "lesson": "09 - Fundamentos do terminal Linux",
    "source": "02-cloud-basics/09-linux-terminal-basics/",
    "question": "O que muda entre `ls`, `ls /var`, `ls -l`, `ls -a` e `ls -la`, e como `drwxr-xr-x` deve ser interpretado?",
    "choices": [
      "Todos os comandos produzem a mesma saída",
      "`ls` lista atual; `ls /var` lista `/var`; `-l` mostra formato detalhado; `-a` inclui ocultos; `-la` combina ambas. Em `drwxr-xr-x`: `d`=diretório, `rwx`=proprietário (read/write/execute), `r-x`=grupo, `r-x`=outros",
      "Opções não afetam a saída",
      "Apenas o diretório é listado, nunca os arquivos"
    ],
    "correct": 1,
    "explanation": "`ls` lista o diretório atual em formato curto (só nomes). `-l` muda para formato longo com permissões, proprietário, tamanho, data. `-a` inclui arquivos ocultos (começados com `.`). Ao ver `drwxr-xr-x`: primeiro `d` é tipo (diretório); os 9 caracteres seguintes são permissões em 3 grupos (proprietário, grupo, outros); `x` em diretório significa permissão para entrar."
  },
  {
    "id": "fix-02-48",
    "scope": "lesson-fixation",
    "fixationNumber": 7,
    "difficulty": "easy",
    "topic": "Comando cd",
    "lesson": "09 - Fundamentos do terminal Linux",
    "source": "02-cloud-basics/09-linux-terminal-basics/",
    "question": "O que fazem `cd /var`, `cd ..`, `cd ~` e `cd -`, e qual comando confirma o diretório resultante?",
    "choices": [
      "Todos os comandos deletam diretórios",
      "`cd /var` entra em `/var`; `cd ..` vai para pai; `cd ~` vai para pessoal; `cd -` retorna anterior. `pwd` confirma o novo local",
      "`cd` não muda diretório",
      "Esses comandos apenas listam conteúdo"
    ],
    "correct": 1,
    "explanation": "`cd` (change directory) muda o diretório da sessão. `/var` é caminho absoluto. `..` é diretório pai. `~` é diretório pessoal. `-` é diretório anterior (quando suportado). Nenhum desses comandos produz saída por padrão; use `pwd` (print working directory) para confirmar onde você está agora."
  },
  {
    "id": "fix-02-49",
    "scope": "lesson-fixation",
    "fixationNumber": 8,
    "difficulty": "medium",
    "topic": "Consulta de documentação Linux",
    "lesson": "09 - Fundamentos do terminal Linux",
    "source": "02-cloud-basics/09-linux-terminal-basics/",
    "question": "Quando usar `man ls`, `help cd` e `ls --help`, e como sair da página de manual?",
    "choices": [
      "Todos os comandos fazem a mesma coisa",
      "`man ls` abre manual; `help cd` para comandos internos do shell; `--help` para ajuda curta. Pressione `q` para sair do manual",
      "Apenas `man` funciona",
      "Documentação não existe em Linux"
    ],
    "correct": 1,
    "explanation": "`man` abre a página de manual completa em pager (use `q` para sair). `help cd` funciona para comandos internos do shell (ex: `cd`, `history`). `--help` exibe uma ajuda resumida sem abrir pager. Nem todo comando implementa `--help`; consulte também `man` e documentação oficial."
  },
  {
    "id": "fix-02-50",
    "scope": "lesson-fixation",
    "fixationNumber": 9,
    "difficulty": "medium",
    "topic": "History Linux",
    "lesson": "09 - Fundamentos do terminal Linux",
    "source": "02-cloud-basics/09-linux-terminal-basics/",
    "question": "O que `history` armazena e por que comandos recuperados pelas setas precisam ser revisados?",
    "choices": [
      "`history` deleta tudo",
      "`history` lista comandos anteriores; setas para cima/baixo percorrem a lista. Precisam ser revistos porque podem conter caminhos obsoletos, parâmetros incorretos ou segredos registrados (senhas, tokens, chaves)",
      "`history` é apenas um nome de arquivo",
      "O histórico não armazena nada útil"
    ],
    "correct": 1,
    "explanation": "O shell (Bash, Zsh) mantém histórico de comandos executados. `history` lista-os. Setas para cima/baixo recuperam comandos. Sempre revise antes de Enter porque: pode ter caminho diferente agora, parâmetro pode não ser adequado, segredos podem estar visíveis na linha de comando. Evite colocar senhas e tokens na CLI quando possível."
  },
  {
    "id": "fix-02-51",
    "scope": "lesson-fixation",
    "fixationNumber": 10,
    "difficulty": "easy",
    "topic": "Tab completion",
    "lesson": "09 - Fundamentos do terminal Linux",
    "source": "02-cloud-basics/09-linux-terminal-basics/",
    "question": "O que o preenchimento com Tab faz e o que ele não faz?",
    "choices": [
      "Tab executa o comando",
      "Tab completa nomes de arquivos e diretórios se houver correspondência única; múltiplas correspondências podem ser exibidas; não executa o comando",
      "Tab apenas mostra erros",
      "Tab não funciona em Linux"
    ],
    "correct": 1,
    "explanation": "Tab é um recurso de conclusão automática. Após digitar `cd /var/ww`, Tab tenta completar o caminho se houver correspondência única. Com múltiplas opções, pressionar novamente exibe-as. Tab reduz erros e economiza digitação, mas não executa o comando. Você ainda precisa revisar e pressionar Enter."
  },
  {
    "id": "fix-02-52",
    "scope": "lesson-fixation",
    "fixationNumber": 11,
    "difficulty": "hard",
    "topic": "Código de saída",
    "lesson": "09 - Fundamentos do terminal Linux",
    "source": "02-cloud-basics/09-linux-terminal-basics/",
    "question": "O que `echo $?` mostra, o que normalmente significam `0` e outros valores e por que a consulta deve ser imediata?",
    "choices": [
      "`echo $?` mostra o diretório atual",
      "`echo $?` exibe o código de saída do último comando; `0` = sucesso, outro valor = erro. Deve ser consultado imediatamente porque o próximo comando substitui esse valor",
      "`echo $?` mostra a senha",
      "Códigos de saída não existem em Linux"
    ],
    "correct": 1,
    "explanation": "`$?` é uma variável que armazena o código de saída (return code) do último comando executado. Convenção: `0` = sucesso, qualquer outro valor = algum erro. Consulte imediatamente após o comando de interesse, pois qualquer outro comando executado muda `$?`. Exemplo: `ls /inexistente; echo $?` mostrará um código diferente de zero."
  },
  {
    "id": "fix-02-53",
    "scope": "lesson-fixation",
    "fixationNumber": 12,
    "difficulty": "hard",
    "topic": "Diagnóstico de erros Linux",
    "lesson": "09 - Fundamentos do terminal Linux",
    "source": "02-cloud-basics/09-linux-terminal-basics/",
    "question": "Como `pwd`, `ls` e `ls -ld <CAMINHO>` ajudam a distinguir caminho incorreto de falta de permissão?",
    "choices": [
      "Esses comandos não ajudam no diagnóstico",
      "`pwd` confirma o diretório atual, `ls` tenta listar o caminho (falha se não existe ou sem permissão), `ls -ld <CAMINHO>` mostra metadados e permissões sem entrar. Se `ls -ld` funciona mas `ls` não, é permissão. Se nenhum funciona, é caminho errado ou item ausente",
      "Todos os três comandos fazem exatamente a mesma coisa",
      "Esses comandos só funcionam como root"
    ],
    "correct": 1,
    "explanation": "Para diagnosticar: (1) `pwd` confirma de onde você está. (2) `ls /caminho/suspeito` lista o conteúdo; se falha com 'No such file', caminho errado. (3) `ls -ld /caminho/suspeito` mostra permissões sem entrar; se funciona mas `ls` puro não, é problema de permissão dentro daquele diretório. Essa abordagem separa erro de caminho (inexistente) de erro de acesso (permissão insuficiente)."
  }
],
  ...[
  {
    "id": "fix-03-01",
    "scope": "lesson-fixation",
    "fixationNumber": 1,
    "difficulty": "medium",
    "topic": "Engenharia social vs vulnerabilidade técnica",
    "lesson": "10 - Introduction to Phishing",
    "source": "03-phishing/10-introduction-to-phishing/",
    "question": "Como engenharia social pode produzir uma ação mesmo quando nenhum software apresenta vulnerabilidade?",
    "choices": [
      "A engenharia social manipula decisões humanas através de contexto, comunicação e influência, independentemente de falhas técnicas",
      "A engenharia social sempre explora vulnerabilidades ocultas que o software não consegue detectar",
      "A engenharia social só funciona quando combinada com exploit de navegador ou malware",
      "A engenharia social requer acesso direto ao código da máquina da vítima"
    ],
    "correct": 0,
    "explanation": "A aula enfatiza que engenharia social atua primeiro sobre uma decisão humana. Uma falha de software não é obrigatória—uma pessoa pode ser induzida a clicar, responder ou aprovar algo mesmo quando os programas funcionam como projetados."
  },
  {
    "id": "fix-03-02",
    "scope": "lesson-fixation",
    "fixationNumber": 2,
    "difficulty": "medium",
    "topic": "Pretexto vs isca em phishing",
    "lesson": "10 - Introduction to Phishing",
    "source": "03-phishing/10-introduction-to-phishing/",
    "question": "Como pretexto e isca cumprem funções diferentes dentro do encadeamento entre objetivo, entrega e ação esperada?",
    "choices": [
      "O pretexto estabelece a narrativa legítima e a isca oferece o motivo imediato para agir",
      "Pretexto e isca são sinônimos que descrevem a mesma técnica de manipulação",
      "A isca explica o contexto e o pretexto motiva a ação",
      "O pretexto é a infraestrutura técnica e a isca é a mensagem entregue"
    ],
    "correct": 0,
    "explanation": "A aula define pretexto como a narrativa que explica por que o contato acontece e por que a solicitação parece sensata. Isca é o elemento para atrair atenção ou motivar a ação, explorando curiosidade, urgência, recompensa ou medo. Cumprem papéis sequenciais e complementares."
  },
  {
    "id": "fix-03-03",
    "scope": "lesson-fixation",
    "fixationNumber": 3,
    "difficulty": "medium",
    "topic": "Etapas de phishing e falhas não garantidas",
    "lesson": "10 - Introduction to Phishing",
    "source": "03-phishing/10-introduction-to-phishing/",
    "question": "Por que a entrega bem-sucedida de uma mensagem não comprova leitura, convencimento, clique ou ação?",
    "choices": [
      "Cada etapa é independente: mensagem pode ser entregue sem ser lida, lida sem convencer, pretexto pode não motivar clique, e landing page pode abrir sem ação esperada",
      "A entrega bem-sucedida sempre garante leitura e convencimento automáticos",
      "A mensagem não chega ao destinatário quando não há vulnerabilidade técnica",
      "Leitura, convencimento e clique ocorrem simultaneamente após entrega"
    ],
    "correct": 0,
    "explanation": "A aula enfatiza que 'uma etapa não garante a seguinte'. A mensagem pode ser entregue sem ser lida; o pretexto pode ser compreendido sem convencer; a isca pode chamar atenção sem gerar clique; e a landing page pode abrir sem produzir a ação esperada."
  },
  {
    "id": "fix-03-04",
    "scope": "lesson-fixation",
    "fixationNumber": 4,
    "difficulty": "medium",
    "topic": "Definição de phishing",
    "lesson": "10 - Introduction to Phishing",
    "source": "03-phishing/10-introduction-to-phishing/",
    "question": "O que torna uma mensagem phishing: o canal usado ou a combinação de representação enganosa e influência?",
    "choices": [
      "A combinação de representação enganosa e tentativa de influenciar uma ação, independentemente do canal",
      "Somente o canal de entrega, como e-mail ou SMS",
      "Apenas páginas de login falsas com formulários",
      "Unicamente o código malicioso executado no navegador"
    ],
    "correct": 0,
    "explanation": "A aula define phishing como uma forma de engenharia social onde uma mensagem ou interface tenta se passar por comunicação legítima para provocar uma ação. O que importa é a representação enganosa combinada à tentativa de influenciar, não o canal isoladamente. Receber a mensagem também não significa que as etapas posteriores ocorreram."
  },
  {
    "id": "fix-03-05",
    "scope": "lesson-fixation",
    "fixationNumber": 5,
    "difficulty": "medium",
    "topic": "Componentes técnicos de uma página",
    "lesson": "10 - Introduction to Phishing",
    "source": "03-phishing/10-introduction-to-phishing/",
    "question": "Qual é a diferença entre aparência, domínio, servidor que entrega os arquivos e código que define o comportamento?",
    "choices": [
      "São camadas distintas: aparência é o que o usuário vê, domínio identifica a URL, servidor entrega os arquivos, código determina comportamento",
      "Todos os quatro conceitos descrevem o mesmo elemento de uma página",
      "Aparência e domínio são idênticos, servidor e código são sinônimos",
      "Apenas domínio e código importam; aparência e servidor são irrelevantes"
    ],
    "correct": 0,
    "explanation": "A aula separa explicitamente essas camadas: aparência é a apresentação visual, domínio é o nome na URL, servidor entrega os arquivos, código determina o comportamento. Copiar a aparência não transfere propriedade do domínio original, não compromete o site verdadeiro e não concede acesso às contas."
  },
  {
    "id": "fix-03-06",
    "scope": "lesson-fixation",
    "fixationNumber": 6,
    "difficulty": "easy",
    "topic": "Landing page legítima vs maliciosa",
    "lesson": "10 - Introduction to Phishing",
    "source": "03-phishing/10-introduction-to-phishing/",
    "question": "Por que uma landing page pode ser legítima e não precisa conter formulário de login?",
    "choices": [
      "Landing page significa página de destino, termo usado legitimamente em marketing; em laboratório seguro deve apresentar conteúdo inofensivo sem receber credenciais",
      "Todas as landing pages são maliciosas por definição",
      "Landing page é sinônimo de página de phishing que sempre coleta dados",
      "Uma página sem formulário de login não pode ser acessada pela Internet"
    ],
    "correct": 0,
    "explanation": "A aula esclarece que landing page também é usada legitimamente em marketing e aplicações web, portanto não é maliciosa por definição. Em laboratório seguro, deve apenas apresentar conteúdo inofensivo, sem formulários que recebam credenciais ou segredos."
  },
  {
    "id": "fix-03-07",
    "scope": "lesson-fixation",
    "fixationNumber": 7,
    "difficulty": "hard",
    "topic": "Distinção entre phishing, exploit e malware",
    "lesson": "10 - Introduction to Phishing",
    "source": "03-phishing/10-introduction-to-phishing/",
    "question": "Qual é a diferença técnica entre phishing, exploração de navegador, malware e coleta de credenciais?",
    "choices": [
      "Phishing influencia decisão humana, exploit aproveita vulnerabilidade técnica, malware é software malicioso executado, coleta de credenciais é prática excluída deste laboratório",
      "São quatro nomes para a mesma ação de comprometimento de contas",
      "Malware é o único termo que describe ações em segurança; os outros são imprecisos",
      "Phishing sempre requer exploit e malware simultaneamente para funcionar"
    ],
    "correct": 0,
    "explanation": "A aula diferencia claramente: phishing procura influenciar uma decisão humana; exploração de navegador aproveita vulnerabilidade no navegador ou componente; malware é software para executar ações maliciosas não autorizadas. Um link de phishing pode levar a exploit ou entregar malware, mas as técnicas continuam distintas. Coleta de credenciais reais está fora deste laboratório."
  },
  {
    "id": "fix-03-08",
    "scope": "lesson-fixation",
    "fixationNumber": 8,
    "difficulty": "easy",
    "topic": "Página vs exploração de navegador",
    "lesson": "10 - Introduction to Phishing",
    "source": "03-phishing/10-introduction-to-phishing/",
    "question": "Por que carregar uma página comum não comprova exploração do navegador?",
    "choices": [
      "Exploração exige vulnerabilidade ou condição técnica específica no navegador; carregar página comum não preenche esse requisito",
      "Toda página web automaticamente explora o navegador quando é carregada",
      "Exploração de navegador não existe como conceito técnico real",
      "Abrir qualquer página é equivalente a executar um exploit de segurança"
    ],
    "correct": 0,
    "explanation": "A aula estabelece que uma página comum não 'explora o navegador' apenas por ser carregada. Exploração exige vulnerabilidade ou condição técnica específica. Carregar conteúdo estático HTML não satisfaz essa condição."
  },
  {
    "id": "fix-03-09",
    "scope": "lesson-fixation",
    "fixationNumber": 9,
    "difficulty": "hard",
    "topic": "Portabilidade de exploits e malware",
    "lesson": "10 - Introduction to Phishing",
    "source": "03-phishing/10-introduction-to-phishing/",
    "question": "Quais dependências impedem afirmar que um exploit ou malware funciona em qualquer dispositivo?",
    "choices": [
      "Exploits dependem de vulnerabilidade e versão específicas; malware depende de SO, arquitetura e condições; arquivo para Windows não é automaticamente executável em Linux ou macOS",
      "Não existem dependências; exploits e malware funcionam universalmente em qualquer dispositivo",
      "Apenas a versão do navegador importa; sistema operacional é irrelevante",
      "A Internet é a única dependência para explorar qualquer dispositivo"
    ],
    "correct": 0,
    "explanation": "A aula estabelece que exploits dependem da vulnerabilidade e versão específica, malware depende de sistema operacional, arquitetura e condições. 'Funciona em qualquer dispositivo' não é afirmação técnica válida para exploit ou malware. Um arquivo para Windows não se torna automaticamente executável no Linux ou macOS."
  },
  {
    "id": "fix-03-10",
    "scope": "lesson-fixation",
    "fixationNumber": 10,
    "difficulty": "medium",
    "topic": "HTTPS e validação de certificados",
    "lesson": "10 - Introduction to Phishing",
    "source": "03-phishing/10-introduction-to-phishing/",
    "question": "O que HTTPS protege, e por que um domínio enganoso também pode usar certificado válido?",
    "choices": [
      "HTTPS protege a comunicação com o domínio apresentado permitindo validar o certificado daquele domínio; um domínio enganoso também pode usar HTTPS com certificado válido",
      "HTTPS garante que uma organização é legítima e confiável em qualquer contexto",
      "Um domínio enganoso não pode obter certificado válido de nenhuma forma",
      "HTTPS é usado exclusivamente para evitar phishing em todas as situações"
    ],
    "correct": 0,
    "explanation": "A aula esclareça que HTTPS protege a comunicação com o domínio apresentado e permite validar o certificado daquele domínio. Porém, HTTPS não afirma que uma organização é legítima. Um domínio enganoso também pode usar HTTPS. Identidade aparente, endereço e comportamento devem ser analisados separadamente."
  },
  {
    "id": "fix-03-11",
    "scope": "lesson-fixation",
    "fixationNumber": 11,
    "difficulty": "hard",
    "topic": "Cenário fictício autorizado",
    "lesson": "10 - Introduction to Phishing",
    "source": "03-phishing/10-introduction-to-phishing/",
    "question": "No cenário com domínio `.invalid`, quais elementos correspondem a autorização, pretexto, isca, entrega, destino, ação e evidência?",
    "choices": [
      "Autorização: laboratório próprio e conta de teste; pretexto: atividade no portal; isca: convite para consultar; entrega: mensagem; destino: `/atividade`; ação: abrir página; evidência: confirmação sem dados sensíveis",
      "Autorização é apenas o certificado HTTPS; pretexto e isca são nomes para a mesma coisa; entrega ocorre apenas por e-mail",
      "Pretexto é o domínio; isca é a URL; entrega é o certificado HTTPS",
      "A ação esperada é armazenar senhas; a evidência é a coleta de credenciais"
    ],
    "correct": 0,
    "explanation": "A aula apresenta um cenário verificacional completo: laboratório próprio e conta de teste = autorização; atividade no portal = pretexto; convite para consultá-la = isca; mensagem = entrega; `/atividade` = landing page; abrir página = ação; confirmação sem dados sensíveis = evidência. O domínio `.invalid` é reservado para exemplos."
  },
  {
    "id": "fix-03-12",
    "scope": "lesson-fixation",
    "fixationNumber": 12,
    "difficulty": "medium",
    "topic": "Comprovação de ação sem coleta de dados",
    "lesson": "10 - Introduction to Phishing",
    "source": "03-phishing/10-introduction-to-phishing/",
    "question": "Como comprovar a ação esperada sem solicitar ou armazenar dados pessoais ou senhas?",
    "choices": [
      "A ação pode ser apenas visitar página de treinamento, pressionar botão que não transmite dados pessoais, confirmar recebimento da mensagem ou identificar componentes do cenário",
      "É impossível comprovar ação sem coletar senha real",
      "Armazenar senhas é a única evidência válida de sucesso",
      "Comprometer uma conta é métrica apropriada para exercício introdutório"
    ],
    "correct": 0,
    "explanation": "A aula estabelece que em laboratório seguro, a ação pode ser apenas visitar página de treinamento, pressionar botão que não transmite dados pessoais, confirmar recebimento da mensagem ou identificar componentes do cenário. 'Comprometer uma conta' não é métrica apropriada para exercício introdutório."
  },
  {
    "id": "fix-03-13",
    "scope": "lesson-fixation",
    "fixationNumber": 1,
    "difficulty": "medium",
    "topic": "Infraestrutura web em camadas",
    "lesson": "11 - File Hosting and Firewall Settings",
    "source": "03-phishing/11-file-hosting-and-firewall-settings/",
    "question": "Qual é a diferença entre máquina servidora, software Apache instalado, processo em execução e serviço `apache2`?",
    "choices": [
      "Máquina servidora é o computador; software é arquivo no disco; processo é execução ativa; serviço é função gerenciada pelo sistema",
      "Os quatro termos descrevem exatamente a mesma coisa",
      "Máquina servidora é o protocolo; Apache é a porta de comunicação",
      "Processo e serviço são impossíveis de distinguir"
    ],
    "correct": 0,
    "explanation": "A aula diferencia claramente: máquina servidora fornece recursos; software Apache é conjunto de arquivos no disco; processo é execução ativa com ID gerenciado; serviço é função de longa duração gerenciada pelo sistema como `apache2`. Um serviço pode possuir vários processos."
  },
  {
    "id": "fix-03-14",
    "scope": "lesson-fixation",
    "fixationNumber": 2,
    "difficulty": "medium",
    "topic": "Camadas de protocolo em requisição HTTP",
    "lesson": "11 - File Hosting and Firewall Settings",
    "source": "03-phishing/11-file-hosting-and-firewall-settings/",
    "question": "Como HTTP, TCP, IP e a porta `80` participam de camadas diferentes da mesma requisição?",
    "choices": [
      "HTTP é camada de aplicação (protocolo); TCP é camada de transporte (conexão); IP é camada de rede (roteamento); porta 80 identifica qual aplicação recebe",
      "Todos os quatro são o mesmo protocolo com nomes diferentes",
      "HTTP é a porta; TCP é a aplicação; IP é o certificado",
      "Porta 80 é irrelevante para HTTP"
    ],
    "correct": 0,
    "explanation": "A aula estrutura as camadas: HTTP define requisição e resposta da camada de aplicação; TCP estabelece conexão e transporta bytes ordenados (transporte); IP encaminha pacotes (rede); porta identifica qual aplicação deve recebê-los. A porta padrão HTTP é 80."
  },
  {
    "id": "fix-03-15",
    "scope": "lesson-fixation",
    "fixationNumber": 3,
    "difficulty": "medium",
    "topic": "Método HTTP, status codes",
    "lesson": "11 - File Hosting and Firewall Settings",
    "source": "03-phishing/11-file-hosting-and-firewall-settings/",
    "question": "Na requisição `GET /files/one.jpg HTTP/1.1`, o que representam as partes, e o que `200`, `404` e `403` informam?",
    "choices": [
      "GET solicita recurso, `/files/one.jpg` é caminho solicitado, `HTTP/1.1` é versão; 200 OK é sucesso, 404 Not Found é recurso inexistente, 403 Forbidden é acesso recusado",
      "GET é a porta; HTTP/1.1 é o domínio; todos os códigos significam erro de conexão",
      "200, 404 e 403 são nomes de servidores",
      "O caminho não importa em requisições HTTP"
    ],
    "correct": 0,
    "explanation": "A aula detalha: GET é método que solicita recurso; `/files/one.jpg` é caminho; `HTTP/1.1` é versão do protocolo. Status codes: 200 OK = sucesso; 404 Not Found = comunicação chegou mas caminho não correspondeu a recurso; 403 Forbidden = servidor recusou acesso."
  },
  {
    "id": "fix-03-16",
    "scope": "lesson-fixation",
    "fixationNumber": 4,
    "difficulty": "easy",
    "topic": "Document root e mapeamento de arquivos",
    "lesson": "11 - File Hosting and Firewall Settings",
    "source": "03-phishing/11-file-hosting-and-firewall-settings/",
    "question": "Como `/files/one.jpg` é mapeado para `/var/www/html/files/one.jpg` sem expor livremente o sistema de arquivos?",
    "choices": [
      "O document root `/var/www/html` é ponto inicial; Apache mapeia caminhos relativos sem dar acesso livre; navegador não recebe acesso ao sistema de arquivos",
      "O navegador tem acesso direto a todos os arquivos do servidor",
      "O mapeamento expõe automaticamente toda a estrutura de arquivos",
      "Sem document root, Apache serve apenas a raiz `/`"
    ],
    "correct": 0,
    "explanation": "A aula explica que document root é o diretório usado pelo Apache como ponto inicial. `/files/one.jpg` mapeia para `/var/www/html/files/one.jpg` conforme configuração. O navegador não recebe acesso livre; Apache decide quais recursos servir. Essa associação pode ser alterada."
  },
  {
    "id": "fix-03-17",
    "scope": "lesson-fixation",
    "fixationNumber": 5,
    "difficulty": "medium",
    "topic": "APT e gerenciamento de pacotes",
    "lesson": "11 - File Hosting and Firewall Settings",
    "source": "03-phishing/11-file-hosting-and-firewall-settings/",
    "question": "Qual é a diferença entre `sudo apt update` e `sudo apt install apache2`, e o que cada parte desses comandos faz?",
    "choices": [
      "`apt update` atualiza índices de repositórios (não instala); `apt install apache2` instala o pacote; `sudo` fornece privilégio administrativo necessário",
      "Ambos os comandos instalam o Apache imediatamente",
      "`update` instala programas; `install` apenas atualiza metadados",
      "`sudo` transforma permanentemente a sessão em root"
    ],
    "correct": 0,
    "explanation": "A aula detalha: `apt update` atualiza índices locais de repositórios sem instalar programas; `apt install apache2` solicita instalação do pacote apache2; `sudo` executa com privilégio conforme política sem transformar permanentemente a sessão em root. Leia dependências antes de confirmar."
  },
  {
    "id": "fix-03-18",
    "scope": "lesson-fixation",
    "fixationNumber": 6,
    "difficulty": "medium",
    "topic": "Verificação de serviço com systemctl",
    "lesson": "11 - File Hosting and Firewall Settings",
    "source": "03-phishing/11-file-hosting-and-firewall-settings/",
    "question": "O que `sudo systemctl start apache2` altera, e como `is-active` e `status` verificam resultados diferentes?",
    "choices": [
      "`start` inicia o serviço; `is-active` verifica somente se está rodando; `status` mostra estado e mensagens recentes",
      "Ambos os comandos fazem exatamente a mesma verificação",
      "`status` apenas reinicia o Apache",
      "Ausência de mensagem é suficiente para confirmar sucesso"
    ],
    "correct": 0,
    "explanation": "A aula diferencia: `systemctl start` solicita inicialização; `is-active` verifica se está rodando (resposta curta); `--no-pager status` mostra estado, mensagens e detalhes. Ausência de mensagem não é verificação suficiente; deve-se consultar explicitamente."
  },
  {
    "id": "fix-03-19",
    "scope": "lesson-fixation",
    "fixationNumber": 7,
    "difficulty": "medium",
    "topic": "Diagnóstico de sockets com ss",
    "lesson": "11 - File Hosting and Firewall Settings",
    "source": "03-phishing/11-file-hosting-and-firewall-settings/",
    "question": "Em `sudo ss -ltnp 'sport = :80'`, o que fazem o programa, as opções e o filtro?",
    "choices": [
      "`ss` consulta sockets; `-l` mostra listeners, `-t` limita a TCP, `-n` mantém números, `-p` inclui processo; filtro seleciona porta local 80",
      "As opções -l, -t, -n, -p não têm significado específico",
      "`ss` é um alias para `systemctl`",
      "O filtro seleciona qualquer protocolo"
    ],
    "correct": 0,
    "explanation": "A aula explica: `ss` é ferramenta para consultar sockets; opções: `-l` = listeners, `-t` = TCP, `-n` = número não nome, `-p` = processo (quando permitido); filtro `'sport = :80'` seleciona listener na porta local 80. Um listener `0.0.0.0:80` significa aceita na porta 80 de interfaces IPv4 locais."
  },
  {
    "id": "fix-03-20",
    "scope": "lesson-fixation",
    "fixationNumber": 8,
    "difficulty": "medium",
    "topic": "Listener vs CIDR em Security Group",
    "lesson": "11 - File Hosting and Firewall Settings",
    "source": "03-phishing/11-file-hosting-and-firewall-settings/",
    "question": "Qual é a diferença entre o listener `0.0.0.0:80` e a origem `0.0.0.0/0` no Security Group?",
    "choices": [
      "Listener `0.0.0.0:80` significa processo aceita na porta 80 de interfaces locais; origem `0.0.0.0/0` significa qualquer IPv4 pode conectar",
      "Os dois conceitos descrevem exatamente a mesma coisa",
      "Listener representa origem; Security Group representa destino",
      "`0.0.0.0/0` seleciona o IP da instância"
    ],
    "correct": 0,
    "explanation": "A aula diferencia claramente: listener `0.0.0.0:80` = processo em escuta (local); origem `0.0.0.0/0` em Security Group = qualquer IPv4 (remoto). Não são equivalentes: o primeiro é local, o segundo é remoto. CIDR `/0` fixa zero bits, abrangendo toda a faixa."
  },
  {
    "id": "fix-03-21",
    "scope": "lesson-fixation",
    "fixationNumber": 9,
    "difficulty": "easy",
    "topic": "Teste local de conexão HTTP",
    "lesson": "11 - File Hosting and Firewall Settings",
    "source": "03-phishing/11-file-hosting-and-firewall-settings/",
    "question": "O que `curl -I http://127.0.0.1/` testa, o que `-I` solicita e por que a conexão não atravessa a AWS?",
    "choices": [
      "`curl` testa localmente; `-I` solicita apenas cabeçalhos; `127.0.0.1` não atravessa AWS pois é loop local (própria máquina)",
      "`curl` é um navegador web completo",
      "-I instala dependências",
      "Testar localmente atravessa o Security Group AWS"
    ],
    "correct": 0,
    "explanation": "A aula explica que `curl` é cliente; `-I` solicita apenas cabeçalhos (sem corpo); `127.0.0.1` é loopback. Esse teste não atravessa Internet nem Security Group. Qualquer resposta HTTP demonstra que servidor respondeu; código informa resultado."
  },
  {
    "id": "fix-03-22",
    "scope": "lesson-fixation",
    "fixationNumber": 10,
    "difficulty": "easy",
    "topic": "Listagem de diretório com ls",
    "lesson": "11 - File Hosting and Firewall Settings",
    "source": "03-phishing/11-file-hosting-and-firewall-settings/",
    "question": "Em `ls -la /var/www/html`, o que fazem o comando, as opções e o caminho?",
    "choices": [
      "`ls` lista; `-l` usa formato detalhado; `-a` inclui ocultos; `/var/www/html` é o document root examinado",
      "As opções -l e -a não têm significado",
      "`ls` instala programas",
      "O caminho `/var/www/html` é irrelevante"
    ],
    "correct": 0,
    "explanation": "A aula detalha: `ls` lista conteúdo; `-l` formato detalhado com permissões; `-a` inclui arquivos ocultos; caminho especifica document root. Isso permite examinar quais arquivos existem e suas permissões."
  },
  {
    "id": "fix-03-23",
    "scope": "lesson-fixation",
    "fixationNumber": 11,
    "difficulty": "medium",
    "topic": "CIDR e inicialização de serviços",
    "lesson": "11 - File Hosting and Firewall Settings",
    "source": "03-phishing/11-file-hosting-and-firewall-settings/",
    "question": "O que `/0` e `/32` significam em CIDR, e por que liberar TCP/80 no Security Group não inicia o Apache?",
    "choices": [
      "`/0` fixa zero bits abrangendo qualquer IPv4; `/32` fixa 32 bits selecionando um IPv4; Security Group apenas permite tráfego, não inicia Apache",
      "Os dois significam exatamente a mesma coisa em CIDR",
      "Liberar TCP/80 automaticamente inicia todos os serviços",
      "`/32` representa qualquer origem IPv4"
    ],
    "correct": 0,
    "explanation": "A aula explica CIDR: `/0` significa nenhum bit precisa coincidir (qualquer IPv4); `/32` significa todos 32 bits coincidem (um IPv4 específico). Security Groups controlam tráfego apenas; instalar, iniciar ou configurar Apache exigem outras ações. Permitir TCP/80 não cria Apache."
  },
  {
    "id": "fix-03-24",
    "scope": "lesson-fixation",
    "fixationNumber": 12,
    "difficulty": "hard",
    "topic": "Diagnóstico em camadas",
    "lesson": "11 - File Hosting and Firewall Settings",
    "source": "03-phishing/11-file-hosting-and-firewall-settings/",
    "question": "Se o teste local funciona e o público falha, como investigar uma camada por vez e encerrar serviço, regra e instância ao final?",
    "choices": [
      "Confirme Apache com `systemctl`, verifique listener com `ss`, teste local com `curl`, consulte Security Group, confirme IP público, então acesse HTTP público. Encerre com `stop apache2`, remova regra e termine instância",
      "Altere todas as camadas simultaneamente até funcionar",
      "Não é necessário seguir diagnóstico ordenado",
      "Apache permanece rodando mesmo após `stop`"
    ],
    "correct": 0,
    "explanation": "A aula recomenda ordem: 1) Confirme pacote e `systemctl is-active apache2`; 2) Procure listener TCP/80 com `ss`; 3) Teste localmente com `curl`; 4) Se local funciona, consulte Security Group; 5) Confirme IP atual; 6) Acesse HTTP público. Encerramento: `systemctl stop apache2`, remova regra TCP/80, confirm término da exposição, stop/terminate instância, verifique custos."
  },
  {
    "id": "fix-03-25",
    "scope": "lesson-fixation",
    "fixationNumber": 1,
    "difficulty": "medium",
    "topic": "Cópia estática de página",
    "lesson": "12 - Cloning Websites and Uploading Them to The Cloud",
    "source": "03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud/",
    "question": "Quais arquivos uma cópia estática pode salvar, quais componentes do servidor não são copiados e por que abrir o HTML local não o publica?",
    "choices": [
      "Cópia salva HTML, CSS, JavaScript e imagens acessíveis; não copia código back-end, banco de dados, autenticação, APIs privadas ou conteúdo dinâmico; arquivo local permanece no computador, não é publicado",
      "Cópia estática salva tudo o que o servidor contém, incluindo banco de dados",
      "Abrir arquivo local no navegador publica automaticamente na Internet",
      "Recursos externos e CSP não afetam completude da cópia"
    ],
    "correct": 0,
    "explanation": "A aula descreve que cópia estática representa parte do que navegador recebeu. Normalmente não copia: código back-end, banco de dados, lógica autenticação, APIs privadas, sessões, serviços externos, conteúdo dinâmico. URLs absolutas e controles como CSP/CORS podem fazer parecer incompleta. Abrir arquivo local não publica; continua armazenado apenas no computador."
  },
  {
    "id": "fix-03-26",
    "scope": "lesson-fixation",
    "fixationNumber": 2,
    "difficulty": "easy",
    "topic": "Diferenças entre FTP, FTPS e SFTP",
    "lesson": "12 - Cloning Websites and Uploading Them to The Cloud",
    "source": "03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud/",
    "question": "Qual é a diferença técnica entre FTP, FTPS e SFTP?",
    "choices": [
      "FTP sem criptografia porta 21, FTPS é FTP+TLS, SFTP é protocolo próprio sobre SSH porta 22 com criptografia nativa",
      "Os três protocolos funcionam identicamente",
      "SFTP é simplesmente FTP sobre SSH",
      "Nenhum dos três oferece criptografia"
    ],
    "correct": 0,
    "explanation": "A aula diferencia: FTP (porta 21) sem criptografia nativa; FTPS continua sendo FTP com TLS adicionado; SFTP é protocolo próprio dentro da infraestrutura SSH (porta 22) com criptografia nativa. SFTP não é sessão FTP comum encapsulada; é protocolo distinto que utiliza SSH."
  },
  {
    "id": "fix-03-27",
    "scope": "lesson-fixation",
    "fixationNumber": 3,
    "difficulty": "medium",
    "topic": "FileZilla e reutilização SSH",
    "lesson": "12 - Cloning Websites and Uploading Them to The Cloud",
    "source": "03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud/",
    "question": "Por que o FileZilla reutiliza o SSH, a porta TCP `22`, o usuário `kali` e a mesma chave privada?",
    "choices": [
      "SFTP utiliza infraestrutura SSH já configurada: mesma conexão TCP 22, mesma conta kali e mesma chave privada; não requer instalação adicional de servidor",
      "FileZilla precisa de configuração separada do SSH",
      "Seria necessário instalar FileZilla Server para funcionar",
      "SFTP exige porta diferente do SSH"
    ],
    "correct": 0,
    "explanation": "A aula explica que SFTP utiliza SSH configurado na aula anterior. Reutiliza: mesma conexão TCP porta 22, mesma conta `kali`, mesma chave privada. Não requer FileZilla Server nem porta adicional. A infraestrutura SSH fornece o transporte criptografado para SFTP."
  },
  {
    "id": "fix-03-28",
    "scope": "lesson-fixation",
    "fixationNumber": 4,
    "difficulty": "medium",
    "topic": "Configuração de perfil SFTP",
    "lesson": "12 - Cloning Websites and Uploading Them to The Cloud",
    "source": "03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud/",
    "question": "Quais valores devem ser informados nos campos protocolo, host, porta, tipo de logon, usuário e arquivo de chave?",
    "choices": [
      "Protocolo: SFTP; host: IP ou DNS da instância; porta: 22 ou vazio para padrão; logon: arquivo de chave; usuário: kali; arquivo: chave privada correspondente",
      "Protocolo: FTP; host: qualquer valor; porta: 80; logon: senha",
      "Todos os campos são opcionais",
      "Arquivo de chave vai no campo de senha"
    ],
    "correct": 0,
    "explanation": "A aula detalha configuração: protocolo = SFTP; host = IP público ou DNS da instância; porta = 22 ou vazio para padrão; tipo logon = arquivo de chave; usuário = kali; arquivo de chave = chave privada `.pem` correspondente à instância. Chave privada deve estar fora da pasta de página e repositório."
  },
  {
    "id": "fix-03-29",
    "scope": "lesson-fixation",
    "fixationNumber": 5,
    "difficulty": "medium",
    "topic": "Verificação da chave de host",
    "lesson": "12 - Cloning Websites and Uploading Them to The Cloud",
    "source": "03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud/",
    "question": "O que a confirmação da chave de host protege e por que a fingerprint deve ser comparada?",
    "choices": [
      "Chave de host protege contra man-in-the-middle; fingerprint deve ser comparada com fonte confiável antes de aceitar para validar identidade real",
      "Chave de host é irrelevante para segurança",
      "Fingerprint não precisa ser verificada",
      "Qualquer chave de host deve ser aceita automaticamente"
    ],
    "correct": 0,
    "explanation": "A aula explica que na primeira conexão FileZilla pode pedir confirmação da chave de host. Isso protege contra man-in-the-middle. Deve-se comparar fingerprint por fonte confiável conforme aula 8, antes de aceitar. Aviso de chave alterada exige interrupção e revalidação."
  },
  {
    "id": "fix-03-30",
    "scope": "lesson-fixation",
    "fixationNumber": 6,
    "difficulty": "medium",
    "topic": "Interface do FileZilla",
    "lesson": "12 - Cloning Websites and Uploading Them to The Cloud",
    "source": "03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud/",
    "question": "O que representam os painéis esquerdo e direito, o log superior e a fila inferior do FileZilla?",
    "choices": [
      "Painel esquerdo: computador local; painel direito: Kali remoto; log superior: conexão e operações; fila inferior: transferências e falhas",
      "Painel esquerdo é a configuração; painel direito é o banco de dados",
      "Log e fila são desnecessários",
      "Ambos os painéis mostram o mesmo sistema de arquivos"
    ],
    "correct": 0,
    "explanation": "A aula descreve layout: painel esquerdo mostra arquivos do computador local; painel direito mostra sistema de arquivos da instância Kali. Área superior registra conexão e operações. Inferior apresenta fila, transferências concluídas e falhas. FileZilla pode manter listagem antiga; usar **Atualizar** quando alteração não aparecer."
  },
  {
    "id": "fix-03-31",
    "scope": "lesson-fixation",
    "fixationNumber": 7,
    "difficulty": "easy",
    "topic": "Upload e download com FileZilla",
    "lesson": "12 - Cloning Websites and Uploading Them to The Cloud",
    "source": "03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud/",
    "question": "Qual é a diferença entre arrastar um arquivo da esquerda para a direita e da direita para a esquerda?",
    "choices": [
      "Esquerda para direita = upload; direita para esquerda = download",
      "Ambas as direções fazem a mesma operação",
      "Direção não importa para transferência",
      "Arrastar sempre deleta o arquivo"
    ],
    "correct": 0,
    "explanation": "A aula estabelece que arrastar arquivo da esquerda (local) para direita (remoto) realiza upload. Arrastar da direita para esquerda realiza download. O painel de origem e destino determinam a direção da operação."
  },
  {
    "id": "fix-03-32",
    "scope": "lesson-fixation",
    "fixationNumber": 8,
    "difficulty": "medium",
    "topic": "Caminhos e estrutura em upload",
    "lesson": "12 - Cloning Websites and Uploading Them to The Cloud",
    "source": "03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud/",
    "question": "Por que HTML, CSS, JavaScript e imagens precisam manter caminhos e estrutura compatíveis no upload?",
    "choices": [
      "Recursos referenciados em HTML precisam estar em caminhos corretos relativos; se estrutura é alterada, links não encontram arquivos (imagens ou CSS aparecem quebrados)",
      "Ordem dos arquivos não importa",
      "Caminhos podem ser arbitrários",
      "Pasta de recursos e HTML podem ser separadas"
    ],
    "correct": 0,
    "explanation": "A aula enfatiza que HTML contém referências a CSS, JavaScript e imagens. Se estrutura compatível não é mantida no upload, os caminhos não resolvem e os recursos não aparecem. Se arquivo abre sem imagens ou CSS, significa: envie também pasta de recursos e confira os caminhos."
  },
  {
    "id": "fix-03-33",
    "scope": "lesson-fixation",
    "fixationNumber": 9,
    "difficulty": "easy",
    "topic": "Diferença entre diretórios no Kali",
    "lesson": "12 - Cloning Websites and Uploading Them to The Cloud",
    "source": "03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud/",
    "question": "Qual é a diferença entre armazenar o arquivo em `/home/kali` e publicá-lo a partir de `/var/www/html`?",
    "choices": [
      "Armazenar: diretório pessoal, local adequado para receber e conferir; publicar: document root do Apache, arquivos ali são servidos por HTTP",
      "Ambos os diretórios servem a mesma função",
      "Armazenar em `/home/kali` publica automaticamente",
      "Transferência bem-sucedida prova que Apache publicou"
    ],
    "correct": 0,
    "explanation": "A aula diferencia: `/home/kali` é diretório pessoal adequado para receber e conferir arquivos; `/var/www/html` é document root comum Apache onde arquivos podem ser servidos por HTTP. Uma conexão SFTP bem-sucedida e arquivo em `/home/kali` não provam que página está pública."
  },
  {
    "id": "fix-03-34",
    "scope": "lesson-fixation",
    "fixationNumber": 10,
    "difficulty": "medium",
    "topic": "Comprovação de operações bem-sucedidas",
    "lesson": "12 - Cloning Websites and Uploading Them to The Cloud",
    "source": "03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud/",
    "question": "O que a mensagem de listagem bem-sucedida comprova e o que ainda não comprova?",
    "choices": [
      "Comprova: conexão e autorização para listar `/home/kali`; não comprova: conclusão de upload, presença de arquivo no painel ou persistência após nova listagem",
      "Listagem bem-sucedida prova que upload completou",
      "Listagem não oferece informação útil",
      "Qualquer mensagem comprova todas as operações"
    ],
    "correct": 0,
    "explanation": "A aula esclarece que mensagem 'Listagem do diretório `/home/kali` bem sucedida' comprova conexão e autorização para listar. Porém não comprova sozinha que upload terminou. Para comprovar: status de conclusão, arquivo no painel com nome e tamanho esperados, continuação após nova listagem."
  },
  {
    "id": "fix-03-35",
    "scope": "lesson-fixation",
    "fixationNumber": 11,
    "difficulty": "hard",
    "topic": "Diagnóstico de problemas SFTP",
    "lesson": "12 - Cloning Websites and Uploading Them to The Cloud",
    "source": "03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud/",
    "question": "Quais evidências confirmam que a transferência terminou e como distinguir timeout, autenticação e permissão negada?",
    "choices": [
      "Confirmar: status conclusão, arquivo no painel com nome/tamanho corretos, persistência após atualizar; timeout = sem resposta/filtrado, autenticação = falha login/chave incorreta, permissão = `Permission denied` com acesso ao servidor",
      "Não há diferença entre os tipos de erro",
      "Status não importa para transferência",
      "Qualquer erro significa que tudo falhou"
    ],
    "correct": 0,
    "explanation": "A aula lista evidências de sucesso: status conclusão, arquivo aparece com nome e tamanho esperados, persiste após `Atualizar`. Diagnóstico de falhas: timeout = sem resposta ou rota bloqueada; autenticação = falha ao autenticar; permissão = `Permission denied`. Cada tipo exige investigação diferente."
  },
  {
    "id": "fix-03-36",
    "scope": "lesson-fixation",
    "fixationNumber": 12,
    "difficulty": "easy",
    "topic": "Segurança de chave privada",
    "lesson": "12 - Cloning Websites and Uploading Them to The Cloud",
    "source": "03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud/",
    "question": "Por que a chave privada deve permanecer fora da pasta da página, do document root e do repositório?",
    "choices": [
      "Impede exposição acidental de credencial de acesso ao servidor remoto; se publicada, terceiros poderiam autenticar usando a chave",
      "Localização da chave não importa para segurança",
      "Chave privada deve ser armazenada no document root",
      "Colocar chave em repositório público não oferece risco"
    ],
    "correct": 0,
    "explanation": "A aula recomenda manter chave privada fora de: pasta de página, diretório publicado e repositórios. Isso impede exposição acidental. Se publicada, terceiros poderiam usar chave para autenticar contra instância. Documentar evidência necessária e remover quando terminar."
  },
  {
    "id": "fix-03-37",
    "scope": "lesson-fixation",
    "fixationNumber": 1,
    "difficulty": "easy",
    "topic": "Document root do Apache",
    "lesson": "13 - Creating a Fake Login Page on The Cloud",
    "source": "03-phishing/13-creating-a-fake-login-page-on-the-cloud/",
    "question": "Qual diretório foi aberto no painel remoto do FileZilla?",
    "choices": [
      "/var/www/html",
      "/home/kali",
      "/tmp",
      "/root"
    ],
    "correct": 0,
    "explanation": "A aula mostra que o diretório `/var/www/html` foi aberto no painel remoto do FileZilla. Este é o document root comum do Apache na configuração apresentada, onde arquivos podem ser servidos por HTTP."
  },
  {
    "id": "fix-03-38",
    "scope": "lesson-fixation",
    "fixationNumber": 2,
    "difficulty": "medium",
    "topic": "Erro de permissão em SFTP",
    "lesson": "13 - Creating a Fake Login Page on The Cloud",
    "source": "03-phishing/13-creating-a-fake-login-page-on-the-cloud/",
    "question": "Por que o primeiro upload foi negado?",
    "choices": [
      "O diretório `/var/www/html` pertencia ao usuário root; a sessão SFTP usava kali que não tinha permissão de escrita",
      "O arquivo estava corrompido",
      "A conexão SFTP não estava funcionando",
      "O FileZilla não suporta upload para Apache"
    ],
    "correct": 0,
    "explanation": "A aula explica que o upload foi recusado com `SSH_FX_PERMISSION_DENIED`. A conexão funcionava, mas o diretório `/var/www/html` pertencia a `root root`, enquanto a sessão SFTP usava o usuário `kali`. O usuário da sessão não podia criar arquivo naquele diretório."
  },
  {
    "id": "fix-03-39",
    "scope": "lesson-fixation",
    "fixationNumber": 3,
    "difficulty": "medium",
    "topic": "Local de execução do comando",
    "lesson": "13 - Creating a Fake Login Page on The Cloud",
    "source": "03-phishing/13-creating-a-fake-login-page-on-the-cloud/",
    "question": "Onde o comando `chown` foi executado?",
    "choices": [
      "No terminal conectado à instância Kali via SSH",
      "No FileZilla",
      "No cmd local do Windows",
      "Na AWS Console"
    ],
    "correct": 0,
    "explanation": "A aula esclarece que o comando foi executado **no Kali remoto** dentro da sessão SSH. Não foi digitado no campo de endereço do FileZilla nem no CMD local sem conexão com a instância. O terminal SSH fornecia acesso ao sistema de arquivos remoto."
  },
  {
    "id": "fix-03-40",
    "scope": "lesson-fixation",
    "fixationNumber": 4,
    "difficulty": "medium",
    "topic": "Necessidade de sudo para alteração de propriedade",
    "lesson": "13 - Creating a Fake Login Page on The Cloud",
    "source": "03-phishing/13-creating-a-fake-login-page-on-the-cloud/",
    "question": "Para que `sudo` foi necessário?",
    "choices": [
      "O diretório ainda pertencia a root; alterar propriedade exige privilégio administrativo",
      "sudo não era necessário",
      "sudo era para copiar a página",
      "sudo faz o upload automaticamente"
    ],
    "correct": 0,
    "explanation": "A aula explica que `sudo` fornecia privilégio administrativo necessário. O diretório pertencia a `root`, e apenas root (ou sudo) podia alterar sua propriedade. Sem `sudo`, o comando `chown` seria recusado."
  },
  {
    "id": "fix-03-41",
    "scope": "lesson-fixation",
    "fixationNumber": 5,
    "difficulty": "easy",
    "topic": "Função do comando chown",
    "lesson": "13 - Creating a Fake Login Page on The Cloud",
    "source": "03-phishing/13-creating-a-fake-login-page-on-the-cloud/",
    "question": "O que `chown` alterou?",
    "choices": [
      "O proprietário e grupo do diretório `/var/www/html` de root root para kali kali",
      "O conteúdo do arquivo HTML",
      "A página foi clonada",
      "O upload foi executado"
    ],
    "correct": 0,
    "explanation": "A aula mostra que `chown` altera proprietário. Especificamente, mudou o proprietário e grupo do diretório `/var/www/html` de `root root` para `kali kali`. Isso permitiu que o usuário `kali` tivesse permissão de escrita no diretório."
  },
  {
    "id": "fix-03-42",
    "scope": "lesson-fixation",
    "fixationNumber": 6,
    "difficulty": "easy",
    "topic": "Opção -R do chown",
    "lesson": "13 - Creating a Fake Login Page on The Cloud",
    "source": "03-phishing/13-creating-a-fake-login-page-on-the-cloud/",
    "question": "O que a opção `-R` fez?",
    "choices": [
      "Aplicou a mudança recursivamente: ao diretório, seus arquivos e subdiretórios",
      "Removeu o diretório",
      "-R não tem significado em chown",
      "Restaurou permissões originais"
    ],
    "correct": 0,
    "explanation": "A aula explica que `-R` significa **recursive**. Isso faz a mudança alcançar o próprio diretório e os arquivos e subdiretórios que já estejam dentro dele. Sem `-R`, apenas o diretório seria alterado."
  },
  {
    "id": "fix-03-43",
    "scope": "lesson-fixation",
    "fixationNumber": 7,
    "difficulty": "medium",
    "topic": "Sintaxe de usuário:grupo",
    "lesson": "13 - Creating a Fake Login Page on The Cloud",
    "source": "03-phishing/13-creating-a-fake-login-page-on-the-cloud/",
    "question": "O que representa cada parte de `kali:kali`?",
    "choices": [
      "Primeiro kali é usuário proprietário, segundo é grupo proprietário, separados por dois-pontos",
      "Ambas as partes significam a mesma coisa",
      "O segundo kali é a senha",
      "A ordem entre usuário e grupo pode ser trocada"
    ],
    "correct": 0,
    "explanation": "A aula detalha a sintaxe: `kali:kali` = primeiro `kali` é usuário proprietário, segundo `kali` é grupo proprietário. Os dois campos são separados pelo sinal `:`. Isso estabelece ambos os responsáveis pelo diretório."
  },
  {
    "id": "fix-03-44",
    "scope": "lesson-fixation",
    "fixationNumber": 8,
    "difficulty": "medium",
    "topic": "Alteração de propriedade no FileZilla",
    "lesson": "13 - Creating a Fake Login Page on The Cloud",
    "source": "03-phishing/13-creating-a-fake-login-page-on-the-cloud/",
    "question": "O que mudou de `root root` para `kali kali` no FileZilla?",
    "choices": [
      "As colunas finais exibindo proprietário e grupo; permissões continuaram `drwxr-xr-x`",
      "Nada mudou no FileZilla",
      "Todas as colunas foram alteradas",
      "O caminho do diretório mudou"
    ],
    "correct": 0,
    "explanation": "A aula mostra que após `chown` e atualização do FileZilla, as duas colunas finais mudaram de `root root` para `kali kali`. As permissões exibidas (`drwxr-xr-x`) continuaram iguais. O que mudou foi a propriedade."
  },
  {
    "id": "fix-03-45",
    "scope": "lesson-fixation",
    "fixationNumber": 9,
    "difficulty": "hard",
    "topic": "Funções diferenciadas de ferramentas",
    "lesson": "13 - Creating a Fake Login Page on The Cloud",
    "source": "03-phishing/13-creating-a-fake-login-page-on-the-cloud/",
    "question": "Qual foi a função do FileZilla e qual foi a função do `chown`?",
    "choices": [
      "FileZilla: transferir arquivos; chown: alterar proprietário do diretório para permitir escrita",
      "Ambas as ferramentas fazem a mesma coisa",
      "chown envia a página",
      "FileZilla altera permissões"
    ],
    "correct": 0,
    "explanation": "A aula clarifica a distinção: FileZilla é cliente SFTP para transferir arquivos. `chown` altera proprietário do diretório. O comando `chown` não enviou a página; apenas mudou a propriedade de `/var/www/html` para permitir que `kali` fizesse upload."
  },
  {
    "id": "fix-03-46",
    "scope": "lesson-fixation",
    "fixationNumber": 10,
    "difficulty": "easy",
    "topic": "Arquivo padrão do Apache",
    "lesson": "13 - Creating a Fake Login Page on The Cloud",
    "source": "03-phishing/13-creating-a-fake-login-page-on-the-cloud/",
    "question": "Por que o arquivo recebeu o nome `index.html`?",
    "choices": [
      "Quando alguém abre apenas o IP sem indicar arquivo, Apache procura a página padrão `index.html` em `/var/www/html`",
      "Todos os arquivos devem ter nome `index.html`",
      "FileZilla renomeia automaticamente",
      "O nome da página não importa para Apache"
    ],
    "correct": 0,
    "explanation": "A aula explica que na configuração apresentada, quando alguém abre somente o IP ou domínio sem indicar arquivo, o Apache procura a página padrão `index.html` dentro de `/var/www/html`. Por isso, o arquivo enviado recebeu esse nome, tornando-se a página inicial do site."
  }
]
);
