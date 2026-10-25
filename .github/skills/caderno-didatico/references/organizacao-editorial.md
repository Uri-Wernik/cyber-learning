# Organização sem vazios desnecessários

## O defeito a evitar

Se a prosa termina cedo e os cartões continuam muito abaixo, uma figura colocada depois de toda a faixa lateral pode deixar um grande vazio na coluna principal. Fixar a figura em uma coordenada igual em todas as páginas piora o problema.

Não resolver isso preenchendo o vazio com desenhos decorativos, repetindo definições, cortando prosa ou reduzindo a letra.

## Fluxo de composição

O título pertence à aula ou ao capítulo, não à folha física. Na abertura, tente compô-lo em uma linha centralizada na página; use duas somente quando a largura realmente exigir. Nas continuações, entre no conteúdo ou em um subtítulo de seção, sem repetir um cabeçalho grande e sem reservar sua antiga altura como espaço vazio.

**Não reserve uma folha para cada seção.** A seção seguinte deve aproveitar a área livre quando seu subtítulo e ao menos o primeiro bloco explicativo couberem juntos. A continuação de um assunto pode atravessar folhas, sem repetir a abertura. Planeje cada cartão junto de seu parágrafo: não mova apenas a definição. Todo termo marcado em amarelo precisa de cartão na mesma folha, mesmo quando também é explicado na prosa.

1. Defina as margens e a largura útil total.
2. Meça a quebra real da prosa e das definições com a fonte e o tamanho de produção.
3. Reserve uma coluna principal confortável e uma coluna lateral larga o suficiente para definições curtas. Uma coluna lateral estreita demais cria notas altas.
4. Alinhe cada cartão aproximadamente ao parágrafo que introduz o termo. Não é necessário alinhamento exato à palavra, já que não há linha de ligação.
5. Para evitar colisões, desloque cartões respeitando um intervalo regular e padding legível.
6. Compare o fim da prosa com o fim da faixa de cartões. Se houver desnível grande, redistribua largura ou blocos. Uma figura pode acompanhar prosa em outra composição quando isso melhorar a leitura.
   Quando todos os cartões daquele trecho já terminaram, um parágrafo seguinte pode aproveitar a largura total. Reserve afastamento real das notas; um pequeno ajuste vertical é preferível a manter outra coluna estreita com metade da largura vazia.
7. Escolha o lugar da figura pela explicação, não pelo fim da folha. Ela pode entrar entre parágrafos, ocupar a coluna principal com cartões ao lado ou atravessar a largura útil. Dentro da região escolhida, calcule seu topo pelos limites reais dos blocos anteriores e pelo intervalo de leitura. Não use uma altura fixa ou obrigue toda figura a vir depois da prosa inteira.
8. Não acrescente legenda, frase-resumo destacada ou fonte no rodapé por padrão. Se uma legenda for explicitamente necessária, aproxime-a da imagem. Conclusões conceituais devem integrar a narrativa, sem slogan automático ou bloco reservado ao final.

Os parâmetros do arquivo de configuração são um ponto de partida local para A4. Não são cotas a reproduzir cegamente em qualquer formato.

## Limiares de revisão

Na demonstração de referência deste projeto:

- buscar de 16 a 24 pt entre o bloco de leitura e a figura;
- revisar desníveis superiores a aproximadamente duas entrelinhas entre o fim da prosa e dos cartões;
- usar intervalos de cerca de 10 pt entre cartões, ajustando quando necessário;
- manter o espaço interno suficiente para cabeçalho, definição e descendentes;
- preservar margens e respiro ao fim da página: espaço externo não é o mesmo que um buraco interno entre elementos relacionados.

Isso não autoriza deixar grandes áreas inferiores ociosas por causa de quebras artificiais. Antes de aprovar, meça o limite inferior ocupado e tente colocar o próximo bloco real. Uma faixa livre pode ser necessária se a próxima figura ou um parágrafo com cartão não couberem, mas a quebra deve ter esse motivo documentado. Não estique figuras ou aumente espaços para maquiar o vazio. A última página pode naturalmente terminar antes.

Meça os limites reais da tinta e das caixas, não apenas o número de linhas. Se a mudança de proporção das colunas não resolver, replaneje a composição, sem manipular os testes para aprovar uma página ruim.

## Vocabulário e cartões

Marque somente a primeira ocorrência de um termo relevante e novo. Cada expressão amarela exige exatamente um cartão com seu significado, além da explicação em prosa. Compare as duas listas antes de exportar: não aceite termos destacados sem cartão, cartões ausentes na página do termo ou definições soltas na lateral. Use o mesmo nome e a mesma página, sem setas, rabichos ou linhas-guia. Verde é a referência de cor atual, não uma obrigação para todos os materiais. Não remova o amarelo nem esconda a definição apenas no glossário para fazer a auditoria passar.

Mantenha o texto principal compreensível sozinho. Quando a definição exigir uma explicação longa, desenvolva-a em prosa e deixe no cartão apenas um apoio de consulta.

## Desenhos mais elaborados

Use detalhes que ajudem a reconhecer e entender o objeto: contorno e partes de um órgão esquemático, estrutura de uma máquina, camada de um material ou ampliação com rótulo. Diferencie modelo de anatomia literal e indique quando não há escala.

Setas dentro de um desenho podem representar fluxo ou direção. A proibição de conectores é entre palavra destacada e cartão; não impede uma seta necessária à explicação do mecanismo.

### Posição, forma e necessidade

Para cada figura, registre qual conceito esclarece e depois de qual parágrafo ela ajuda mais. Um quadro de uma relação simples pode ficar no meio da coluna; um percurso de rede pode precisar de painel largo. Um quadro quadrado exige recompor objetos, rótulos e fluxos no novo espaço, não distorcer o SVG horizontal.

O fundo claro e suave das figuras aprovadas (`#FFF8EB` como referência local) deve acompanhar todas as figuras desta composição. Desenho livre é uma exceção que depende de pedido explícito. Reserve margens internas equilibradas para setas, contornos e rótulos; não coloque o painel colado no conteúdo nem corte suas bordas. Não acrescente retângulo verde em torno de cada objeto: contornos internos devem identificar componentes reais ou relações, não reproduzir cartões de interface.

### Relação com a prosa, sem numeração

Não use números de identificação em fotos, figuras ou desenhos, nem chamadas numeradas na narrativa. Remova identificadores de canto, sobrescritos e frases acrescentadas apenas para encaminhar o leitor à imagem. Não deixe a antiga faixa de numeração vazia no painel.

Mantenha a imagem junto do raciocínio que ela esclarece. A prosa deve explicar o mecanismo, enquanto os rótulos mostram componentes, relações, fluxos e estados. Preserve números que pertencem ao assunto, como portas de rede, e os números normais das páginas: eles não são identificadores de imagens.

### Mais detalhe, mas detalhe que ensina

Antes de desenhar, registre a frase específica que a figura esclarece. Exemplo: “várias máquinas virtuais compartilham um equipamento” pede mostrar as VMs, seus recursos virtuais, o hipervisor e a base física; repetir três notebooks não esclarece o compartilhamento.

Mostre origem e destino de uma transmissão, rótulos nas partes relevantes, estado anterior/posterior quando necessário e correspondência entre desenho e prosa. Diferencie uma seta de solicitação de uma alocação de recurso, e uma camada lógica de uma peça física. Declare simplificações no texto acessível de apoio quando não precisarem ocupar a página.

Detalhamento não é textura, engrenagens ou cabos aleatórios. Se um detalhe não ensina nada do conceito, retire-o. Teste a legibilidade de cada rótulo na dimensão final, preservando fonte confortável.

Não inclua uma imagem só para cumprir “uma por página”. Uma explicação clara em prosa pode continuar sem figura. Tampouco remova uma figura útil apenas para fabricar variedade.

Quando a figura ocupa só a coluna principal, cartões podem estar ao seu lado, desde que não invadam a imagem. Quando ela atravessa a folha, os cartões anteriores devem terminar antes e os posteriores começar abaixo dela. Preserve a ordem de leitura e não separe o termo de sua definição em outra página.

## Checklist de aceitação

- O título aparece somente na abertura da aula ou capítulo, centralizado na folha inteira?
- Foi medida a opção de uma linha, deixando duas apenas para títulos longos?
- As continuações evitam repetir o cabeçalho grande e o espaço reservado a ele?
- Todo termo amarelo tem exatamente um cartão com o mesmo nome na mesma página, sem setinha, além da explicação em prosa?
- O texto e as definições foram preservados?
- As colunas estão equilibradas sem miniaturizar as letras?
- A figura está no ponto em que ajuda a entender o conceito, em vez de sempre ao fim da página?
- O formato foi recomposto para seus objetos e rótulos, dentro do fundo bege com margens internas reais, sem deformações?
- Fotos e desenhos estão sem números de identificação ou chamadas numeradas, sem uma faixa vazia no lugar dos antigos identificadores?
- A figura explica uma afirmação específica, com detalhes funcionais em vez de ícones genéricos?
- Quando não há desenho, a explicação continua suficiente e não há espaço reservado vazio?
- O topo da figura depende dos limites reais dos blocos anteriores da região que ocupa?
- A página evita legendas genéricas, slogans e fontes de rodapé desnecessários?
- As referências e descrições acessíveis continuam disponíveis em material de apoio?
- A forma ampliada ou o detalhe desenhado esclarece algo concreto?
- O espaço livre restante funciona como margem ou respiro, em vez de interromper a leitura?

O resultado precisa ser inspecionado no PDF renderizado, não apenas aprovado por geometria.
