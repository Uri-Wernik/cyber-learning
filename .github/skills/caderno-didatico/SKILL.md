---
name: caderno-didatico
description: "Use ao criar ou revisar aulas, capítulos, notas de estudo e PDFs ilustrados deste projeto. O padrão local é editorial limpo, com título centralizado só na abertura, preferindo uma linha; todo termo destacado em amarelo deve ter cartão explicativo na mesma página, sem setas. Use desenhos originais detalhados com fundo bege, sem números nem chamadas numeradas no texto. Organize os blocos pelo espaço real, evitando grandes vazios internos. Use linguagem acessível e explicação progressiva. Caderno pautado e colorido somente quando solicitado."
user-invocable: true
disable-model-invocation: false
---

# Material didático ilustrado deste projeto

Esta é a versão local de `caderno-didatico`. As preferências abaixo valem neste workspace, sem alterar a skill pessoal nem outros projetos.

## Precedência e limites

- Ao trabalhar nas aulas de cibersegurança, aplique também `cyber-study-book`. Preserve precisão, ética, privacidade, narrativa e o sistema de quiz do curso.
- Leia a aula existente antes de revisar. Não altere publicações, navegação ou avaliações quando o pedido tratar apenas de uma demonstração em PDF.
- Não copie textos, personagens, desenhos ou composições identificáveis dos livros de referência. Aproveite princípios gerais de didática com redação e arte próprias.
- Uma revisão pontual não autoriza reformular toda a aula ou acrescentar conteúdo alheio ao que foi ensinado.

## Padrão editorial local

1. Use composição limpa: papel claro, prosa escura, cor de apoio discreta e tipografia confortável.
2. Use título principal somente na abertura de uma aula, capítulo ou unidade equivalente, centralizado em relação à folha inteira. Prefira uma linha e use duas apenas quando o texto realmente não couber na largura útil com tamanho confortável. Não force quebras prévias, comprima letras ou diminua a fonte excessivamente para fazê-lo caber.
3. Mantenha subtítulos de seção próximos do conteúdo e, normalmente, alinhados à coluna de leitura.
   A continuação em outra folha não é uma nova abertura: não repita o título principal nem invente um título grande para cada página. Use somente subtítulos quando houver uma mudança real de assunto.
4. Destaque a primeira ocorrência de termos realmente novos e necessários para o iniciante. Meça a expressão inteira, com folga para acentos e descendentes. **Amarelo significa conceito técnico com cartão de definição obrigatório**, não decoração.
5. Ensine o termo novo na própria explicação e dê a **cada termo marcado em amarelo exatamente um cartão explicativo**, com o mesmo nome, na mesma página e próximo da primeira ocorrência. A explicação em prosa não dispensa esse cartão; não deixe palavras amarelas sem apoio nem definições laterais soltas. Verde é a referência atual, não uma obrigação de cor para todo material. **Não desenhe setas, linhas-guia ou pontos ligando palavras às definições.** A associação acontece pelo nome, proximidade e ordem de leitura.
6. Não repita a marcação nem o cartão em toda ocorrência. Não transforme palavras comuns em uma coleção de notas.
7. Distribua texto, cartões e desenhos pelo espaço real de seus blocos. Não reserve uma faixa vazia fixa para uma figura, nem alinhe todas as figuras e conclusões na mesma altura por conveniência.
8. Preserve respiro funcional, mas corrija desníveis grandes entre o fim da prosa e o fim dos cartões. Ajuste a proporção das colunas e a distribuição dos blocos, sem cortar conteúdo ou diminuir a letra silenciosamente.
   **A aula deve fluir entre as folhas.** Não imponha uma seção por página: se houver espaço para o próximo subtítulo e o início de sua explicação, continue na mesma folha. Quebre apenas quando os próximos blocos não couberem com leitura confortável. Meça também a faixa vazia inferior, não só os espaços entre texto e desenho; não disfarce esse problema aumentando figuras, espaçamentos ou margens.
9. Cada desenho deve explicar **uma afirmação específica do trecho**. Identifique componentes, ação, direção, mudança ou relação e o que o leitor compreenderá ao olhar. Mostre detalhes funcionais, como recurso virtual versus físico, regra de rede versus processo em escuta ou parte de URL usada no DNS. Não aceite apenas três ícones com nomes ou um servidor genérico repetido como se fosse uma explicação.
   **Não transforme a figura em rodapé fixo.** Coloque-a junto do conceito que ela explica: entre parágrafos, numa coluna ou em painel largo, conforme o raciocínio. Nesta versão, preserve o painel bege suave aprovado em todas as figuras, com margens internas reais, salvo pedido explícito de desenho livre. Recompose objetos e rótulos dentro dele: não basta acrescentar um fundo ou esticar um esquema simples. Não é necessário ilustrar toda página, nem aumentar detalhes decorativos para ocupar espaço.
   **Não numere fotos, figuras ou desenhos.** Não coloque identificadores no canto dos painéis, sobrescritos, pequenos números ou chamadas numeradas no texto. Remova também as frases criadas apenas para encaminhar o leitor a uma figura numerada; não reserve uma faixa vazia para o identificador removido. A relação entre prosa e desenho deve ser clara pela proximidade, pelos componentes e pelos rótulos explicativos. Preserve números técnicos necessários e a paginação normal.
10. O caderno pautado e os títulos desenhados de cores fortes são um modo opcional, somente quando solicitado; não devem substituir automaticamente este padrão.
11. Não acrescente automaticamente legendas explicativas sob cada desenho, chamadas de imagem, identificadores numerados, frases-resumo destacadas, slogans de conclusão ou linhas de fontes no rodapé. A página deve terminar naturalmente com sua explicação ou figura. Se a imagem precisar de uma distinção essencial, inclua-a na prosa ou em um rótulo curto pertinente.
12. Mantenha as fontes verificadas e a procedência em arquivo de apoio separado. Não exiba links vazios, botões ou referências repetidas em cada página. Preserve créditos ou atribuições quando houver obrigação de licença; esta preferência visual não autoriza apagá-los.

Consulte [organização editorial](./references/organizacao-editorial.md) para a sequência de composição e os testes de espaço. Os parâmetros locais estão em [editorial-style.json](./assets/editorial-style.json). São decisões deste projeto, não regras atribuídas aos livros.

## Escrita e explicação

- Comece por uma pergunta concreta ou uma situação reconhecível.
- Dê significado simples antes de introduzir o termo técnico. Desenvolva o mecanismo com relações, causas e consequências.
- Explique no fluxo da prosa; o cartão é uma ajuda de consulta, não o único lugar que ensina o conceito.
- Use analogias para aproximar e declare seus limites antes de voltar ao funcionamento real.
- Prefira parágrafos conectados; listas e quadros entram quando tiverem função.
- Use humor leve sem constranger pessoas, infantilizar o leitor ou enfraquecer a precisão.
- Preserve conteúdo autoral e explique evidências e limitações. Não invente resultados, medições ou fontes.
- Em dúvidas técnicas, confira documentação ou fontes adequadas ao assunto. Os livros de referência visual não são autoridade científica automática.

## Revisão e entrega

1. Verifique conceitos, termos, exemplos, limites e a correspondência entre texto e desenho.
2. Confira se cada termo novo tem significado explícito em prosa. Compare a lista completa de expressões amarelas com a lista de cartões: correspondência um a um, mesmo nome, mesma página e ausência de conectores. Nenhum termo destacado pode ficar sem cartão, e nenhuma definição lateral pode ficar fora de sua caixa.
3. Confira se há título principal apenas nas aberturas e se ele cabe em uma linha antes de recorrer a duas. Meça centralização, destaques, caixas, margens e espaços entre blocos.
4. Confirme que todo o texto foi preservado e que não há sobreposição.
   Verifique a paginação contínua: subtítulo não pode ficar órfão, termo e cartão devem permanecer juntos, e uma troca de seção não deve deixar meia folha vazia. Registre o motivo das quebras e a altura livre restante.
5. Renderize e abra todas as páginas finais; após uma correção, reinspecione as afetadas. Confira ausência de números e chamadas de identificação de imagens, fundo bege, margens internas equilibradas, rótulos legíveis e fluxos que não colidam com textos ou objetos.
6. A prévia deve vir do PDF exportado. Ofereça texto acessível e descrições das figuras quando necessário.
   Descrições acessíveis e referências técnicas podem ficar na alternativa textual ou em arquivo de apoio; não precisam virar texto visível extra abaixo de todo desenho.
7. Em tela estreita, mova cartões para logo depois de seus parágrafos, em vez de comprimir a coluna lateral.
8. Execute somente verificações pertinentes. Não rode build do site para uma alteração restrita a esta skill ou a um PDF externo à publicação.
9. Entregue o PDF e os recursos solicitados, explicitando o que foi validado e eventuais limitações.
