Anteriormente, aprendemos como criar cópias idênticas de sites legítimos existentes ou clonar sites, e

também aprendemos como clonar manualmente páginas de login, como esta aqui, e armazenar o nome de usuário

e a senha para que possamos vê-los quando o alvo fizer login.

Tudo isso é ótimo, mas na verdade temos um pequeno problema.

Se você observar o URL aqui, primeiro verá que ele é basicamente o endereço IP do nosso servidor.

Você também pode ver que há um ícone aqui dizendo perigoso.

Novamente, isso torna esse site mais suspeito.

E, além de todos esses problemas, na primeira vez que você carregar esse site, receberá

um aviso como este, um aviso realmente intrusivo e ruim, informando que esse site pode ser perigoso

e que a única maneira de entrar nele é clicar em mais detalhes e, em seguida, clicar em visitar este site inseguro.

Portanto, todos esses problemas tornam o que aprendemos anteriormente meio inútil, porque o alvo nunca

colocará seu nome de usuário e senha.

Portanto, nesta palestra e nas próximas, quero ensinar a você como remover esse ícone perigoso

e fazer com que ele realmente diga seguro e como ter um nome de domínio real aqui para que o site pareça muito

mais legítimo.

E as informações que vou ensinar a você podem ser usadas em qualquer site que você hospede.

Portanto, seja um site com um código maligno ou uma tela de login como a que temos aqui, ou

até mesmo seu próprio site pessoal, vou mostrar como torná-lo seguro

aqui, ativando o Https.

E vou mostrar como vincular um nome de domínio real aqui, de modo que, quando for carregado, você verá algo semelhante

ao que tem aqui, como o Facebook. com.

Este é o site legítimo do Facebook, e você também verá o ícone de cadeado aqui.

Isso faz com que o site pareça muito menos suspeito e, portanto, aumenta as chances de um ataque bem-sucedido.

Então, o que estamos fazendo até agora é colocar o IP do nosso servidor da Web e do nosso navegador da Web e, portanto, estamos

carregando o site em nosso servidor da Web.

Muito, muito simples.

Mas o objetivo é fazer com que esse servidor da Web ou esse site seja carregado sempre que o usuário digitar um nome de site

real, como Z. com.

E, para fazermos isso, precisamos primeiro entender o que acontece quando um usuário insere um nome

de domínio normal no navegador da Web.

Por exemplo, temos um usuário aqui e ele quer ir para o Facebook. com.

Agora o navegador não sabe onde está o facebook. com e só pode se comunicar com ele usando o IP, mas o usuário

só recebe o nome do domínio.

Então, o que acontece nesse caso?

O navegador da Web fará uma solicitação de DNS a um servidor DNS, e o servidor DNS é basicamente um

computador na nuvem ou na Internet que contém vários registros.

E, como você pode ver, cada registro tem um nome de domínio e um endereço IP.

Portanto, ele basicamente traduz o nome de domínio para o endereço IP do servidor que hospeda o site que está sendo solicitado.

Portanto, o usuário está solicitando o Facebook. com.

O servidor DNS irá para o registro que contém o facebook. com e fornecer uma resposta com o IP do

servidor do Facebook.

Assim, o usuário obterá o IP do Facebook e, portanto, poderá fazer uma solicitação direta

ao servidor que hospeda o site do Facebook e, assim, obter acesso ao Facebook.

Mas o usuário nunca precisou lembrar o IP do Facebook.

Eles basicamente digitaram facebook. com.

Eles perguntam ao servidor DNS, e o servidor DNS nos fornece o IP do Facebook. com.

Portanto, se quisermos fazer o mesmo com nosso servidor da Web de hackers, teremos que registrar um novo nome de domínio.

Digamos que vamos chamá-la de página de login. com e fazer com que esse nome de domínio seja vinculado ao endereço

IP do nosso servidor da Web na nuvem.

Como resultado, quando o usuário digita na página de login. com, o navegador da Web não saberá para onde

ir.

Portanto, ele enviará uma solicitação de DNS para o servidor DNS pedindo o IP da página de login. com.

O servidor DNS vai verificar seus registros e, na verdade, ele tem um registro disso.

E ele tem o IP.

Portanto, ele responderá com o IP do servidor do hacker.

E, como resultado, o navegador da Web solicitará o site ou o servidor da Web que está sendo

executado nesse IP.

Portanto, tudo o que precisamos fazer para que isso funcione é comprar um nome de domínio e vinculá-lo ao IP do nosso

servidor em nuvem.

Atualmente, há um grande número de sites que você pode usar para comprar nomes de domínio.

Eles são chamados de registradores de nomes de domínio, e o preço geralmente depende do nome que você escolher.

Portanto, alguns nomes são mais caros do que outros.

Eu prefiro usar Name. com, mas você pode usar qualquer outro site, e as etapas para comprar um nome

de domínio e vinculá-lo a um servidor são praticamente as mesmas.

A única diferença é o tema ou a experiência do usuário no site.

Assim, quando você aprender a fazer isso, poderá fazê-lo basicamente com qualquer site.

Mas, como eu disse, prefiro usar o Name. com, portanto, é esse que vou usar.

Portanto, tudo o que você precisa fazer é acessar o site no qual deseja registrar o domínio.

Por isso, vou para o Name. com.

E todos esses sites terão uma caixa de pesquisa como esta, que permite que você pesquise um nome de

domínio.

Porque os nomes de domínio precisam ser exclusivos.

Portanto, você pode registrar o nome que quiser, desde que o nome não seja usado, desde que o nome não seja

registrado por outra pessoa.

Portanto, você deve tentar registrar um nome que seja semelhante ao nome do site que está tentando

clonar.

Por exemplo, se estiver clonando a segurança, talvez tente registrar um domínio que se chame segurança, mas que

não tenha um olho ou tenha dois olhos em vez de um, portanto, você pode ser um pouco criativo com

isso.

Mas, no nosso caso, estamos servindo uma página de login falsa para o Facebook, e todos os domínios que soam semelhantes

ao Facebook já estão, na verdade, ocupados.

É por isso que vamos registrar um nome de domínio que seja um pouco genérico, por exemplo, formulário de login.

E, na verdade, você não precisa dizer. com ou. co.

Na verdade, ele pesquisará todos os tdls possíveis.

Portanto, ele listará vários outros tdls dos quais você nunca ouviu falar, como. io, como dot support, dot Rockstar,

e a lista continua.

Portanto, como você pode ver, podemos, por meio do formulário de login, oferecer suporte ao ponto 821.

E depois temos todas as outras opções aqui, como. org.

Dot io, dot limited.

E, como você pode ver, o preço geralmente fica em torno de 10 euros, exceto se o nome de domínio for realmente bom.

Por exemplo, o. io aqui lhe custará €51.

Portanto, vou optar pelo formulário de login Co, que custa apenas 13 euros. 35.

E, mais tarde, mostrarei como brincar com esse nome de domínio, com alguns truques para fazer

com que ele pareça muito, muito crível e passe como uma página de login real do Facebook.

Mas, por enquanto, queremos comprar esse nome de domínio ou registrá-lo.

Portanto, tudo o que você precisa fazer, como em qualquer outro site de compras, é clicar em Add to Cart.

Em seguida, clicaremos em checkout para finalizar a compra.

Ele tentará lhe vender alguns complementos.

Vamos apenas dizer que continue a dar uma olhada.

E, como eu disse, o uso disso é muito semelhante em qualquer site que venda domínios ou registradores de domínios.

A única coisa que seria diferente é o tema.

Na verdade, vou manter a privacidade avançada aqui, pois isso ocultará minhas informações pessoais,

já que as pessoas podem realmente procurar informações pessoais da pessoa que registrou um domínio.

Portanto, se você ativar essa opção, suas informações ficarão ocultas.

Portanto, é altamente recomendável manter essa opção.

Em seguida, passaremos para a próxima etapa, que solicitará que eu faça login.

Agora, se você não tiver uma conta com eles, poderá clicar em registrar e se inscrever em uma conta.

É muito, muito fácil.

Portanto, não vou falar sobre isso.

Já tenho uma conta, portanto, vou fazer login em minha conta.

E agora que estou conectado, temos a página de pagamento.

Como em qualquer outra página de checkout ou pagamento, você deve preencher suas informações.

Já tenho minhas informações armazenadas, portanto, vou continuar.

E é isso.

Agora, na verdade, somos proprietários desse nome de domínio, portanto, não precisamos vinculá-lo a nenhum site.

Algumas pessoas compram nomes de domínio, os mantêm e os vendem posteriormente.

Mas a ideia é que agora somos proprietários desse nome de domínio e podemos fazer o que quisermos com ele.

Na próxima aula, mostrarei como modificar suas configurações para que ele seja vinculado ao nosso servidor da Web, de modo

que, quando as pessoas digitarem esse nome de domínio no navegador da Web, elas serão direcionadas ao nosso servidor

da Web.
