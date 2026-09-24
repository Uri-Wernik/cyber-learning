# Preparação para a prova

Esta parte reorganiza as 15 aulas publicadas como material de revisão. Ela não substitui os capítulos: mostra quais relações precisam estar claras, reúne conceitos que aparecem em aulas diferentes e conduz ao simulado configurável.

O conteúdo ainda cobre a fase inicial do livro. Ele parte de ética e autorização, passa por nuvem, redes, Linux e acesso remoto, e termina no funcionamento de uma página web usada em um laboratório controlado de phishing. Os capítulos que permanecem como rascunho não entram nesta prova.

!!! warning "O mesmo limite ético continua valendo"
    Técnicas de segurança ofensiva só podem ser praticadas em sistemas próprios, CTFs, laboratórios isolados ou ambientes cobertos por autorização explícita. A prova avalia também a capacidade de reconhecer esses limites.

## O que precisa ser compreendido

Memorizar nomes não basta. Para cada assunto, tente responder a cinco perguntas:

1. **O que é?** Defina o elemento sem usar outro termo desconhecido.
2. **Onde ele existe?** Diferencie computador local, infraestrutura da AWS, sistema operacional, processo e navegador.
3. **De que depende?** Identifique rede, serviço, identidade, permissão e configuração necessários.
4. **Que evidência comprova seu funcionamento?** Use estado, saída de comando, socket em escuta, resposta HTTP ou alteração observável.
5. **O que essa evidência ainda não comprova?** Uma porta alcançável, por exemplo, não confirma autenticação; um cadeado HTTPS não confirma que a página é legítima.

As questões fáceis verificam definições e funções. As médias conectam dois ou mais componentes. As difíceis apresentam um resultado ou uma falha e exigem que você localize a camada responsável.

## Uma rota de revisão

Comece pelas diferenças que sustentam todo o restante:

- autorização não é a mesma coisa que acesso técnico;
- Internet, Web e nuvem não são sinônimos;
- IP, domínio, URL, porta e protocolo identificam partes diferentes da comunicação;
- liberar uma porta não inicia um serviço;
- autenticação não concede permissão para qualquer arquivo;
- conta comprometida, navegador comprometido e sistema comprometido são estados distintos.

Depois, revise o livro por blocos:

| Bloco | O que conectar | Capítulos de origem |
|---|---|---|
| Ética e método | ativo, alvo, escopo, autorização, regras de engajamento, pentest e Red Team | [Aulas 1 e 2](../01-introduction-to-cloud-computing-for-hackers/01-teaser.md) |
| Nuvem e redes | infraestrutura física, virtualização, EC2, cliente-servidor, IP, porta, protocolo e custo | [Aulas 3 a 7](../01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud.md) |
| Acesso e sistema | SSH, chave, fingerprint, terminal, caminhos, usuários e permissões | [Aulas 8 e 9](../02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh.md) |
| Web em laboratório | phishing, Apache, HTTP, SFTP, formulários, PHP e registro seguro de eventos fictícios | [Aulas 10 a 15](../03-phishing/10-introduction-to-phishing.md) |

Na sequência, leia [Conceitos fundamentais](02-conceitos-fundamentais.md), consulte [Ferramentas e comandos](03-ferramentas-e-comandos.md) e percorra [Como tudo funciona em conjunto](04-como-tudo-funciona.md). O [simulado configurável](../quiz.md) fecha a revisão com perguntas de todas as aulas.

## Como usar o resultado do simulado

Uma resposta errada deve indicar o próximo trecho a estudar. Leia a explicação, abra a aula vinculada e procure reconstruir o mecanismo sem olhar a alternativa correta. Em seguida, explique em voz alta:

- qual era a origem e o destino;
- qual processo estava em execução;
- qual protocolo e porta participavam;
- qual identidade e permissão estavam sendo usadas;
- qual observação separa uma hipótese da outra.

Ao refazer a rodada, altere a quantidade ou a dificuldade. A melhor marca é salva para cada combinação, de modo que uma prova curta não substitua o histórico de uma prova mais longa.
