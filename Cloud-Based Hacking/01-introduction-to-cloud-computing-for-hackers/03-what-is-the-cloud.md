# O que é computação em nuvem?

## A nuvem como modelo de uso

**Computação em nuvem** é um modelo no qual recursos computacionais são disponibilizados por rede, provisionados conforme a necessidade e administrados por interfaces padronizadas, como painéis e APIs.

Esses recursos podem incluir:

- processamento;
- memória;
- armazenamento;
- redes virtuais;
- bancos de dados;
- filas, funções e outros serviços gerenciados.

Um servidor remoto pode fazer parte da nuvem, mas nem todo servidor remoto constitui um serviço de nuvem. O modelo normalmente combina:

1. **Autosserviço sob demanda:** criação e remoção de recursos sem instalação física manual.
2. **Acesso por rede:** administração e consumo através de conexões de rede.
3. **Compartilhamento de recursos:** infraestrutura distribuída entre clientes com isolamento lógico.
4. **Elasticidade:** capacidade de crescer ou diminuir rapidamente.
5. **Uso mensurado:** consumo, limites e cobrança registrados pelo serviço.

## A nuvem continua sendo infraestrutura física

“Nuvem” é uma abstração. Dados e programas continuam sendo processados por equipamentos reais em datacenters.

Na base dessa infraestrutura existem edifícios com controle de acesso, energia, geradores, refrigeração, racks de servidores, dispositivos de armazenamento, switches, roteadores e sistemas de monitoramento. A abstração não elimina nenhum desses componentes; ela permite administrá-los por interfaces de software.

Sobre o hardware, o provedor utiliza virtualização e automação. Um **hipervisor** pode dividir um servidor físico em várias **máquinas virtuais**, cada uma com processador, memória, disco e interfaces de rede virtuais. Em muitos provedores, uma máquina criada pelo cliente é chamada de **instância**.

Uma instância não representa necessariamente um computador físico exclusivo. Várias instâncias podem compartilhar o mesmo equipamento mantendo separação lógica. Serviços gerenciados abstraem ainda mais essa estrutura.

O **plano de controle** é o conjunto de APIs, consoles e mecanismos que cria, configura e remove recursos. Ele é diferente do serviço executado dentro da máquina virtual.

## O que é um servidor remoto?

A palavra **servidor** pode designar:

- um computador físico preparado para fornecer recursos;
- uma máquina virtual;
- um programa que aguarda conexões e fornece um serviço.

O programa é o elemento que efetivamente atende clientes. Um servidor web, por exemplo, é um processo que recebe requisições HTTP e produz respostas. A máquina na qual ele é executado também costuma ser chamada informalmente de servidor.

**Remoto** significa apenas que o recurso é acessado por rede a partir de outro dispositivo. Um servidor remoto pode estar em um datacenter, em outra unidade de uma empresa ou em uma residência. Distância não é suficiente para caracterizar nuvem.

## Rede local, Internet e Web

Uma **rede**, ou *network*, é um conjunto de dispositivos e interfaces capazes de trocar dados segundo protocolos comuns.

Uma **rede local**, ou LAN, conecta dispositivos dentro de um ambiente como residência, laboratório ou escritório. A **Internet** interliga redes e encaminha pacotes com a família de protocolos TCP/IP. A **Web** é apenas um dos serviços construídos sobre essas redes, composto por documentos e aplicações acessados principalmente por HTTP ou HTTPS. A **nuvem**, por sua vez, é o modelo de fornecimento e administração de recursos computacionais por rede.

A Web utiliza redes, mas não é sinônimo de Internet. SSH, DNS e correio eletrônico utilizam a Internet sem fazer parte da Web. Um site também pode existir apenas em uma rede local.

Nem toda aplicação conectada à Internet utiliza nuvem. Também existem recursos de nuvem que não são acessíveis pela Internet pública.

## IP, domínio, URL e porta

Um **endereço IP** identifica uma interface ou ponto lógico em uma rede e permite o roteamento dos pacotes. Um **domínio** é um nome que o DNS pode resolver para um ou mais endereços. Uma **URL** reúne as informações usadas para localizar um recurso, incluindo protocolo, host e caminho. Já uma **porta de rede** é um identificador lógico de `0` a `65535` usado para entregar os dados ao processo correto; não é uma entrada física.

Na URL `https://exemplo.test/area`, `https` indica o protocolo, `exemplo.test` é o host e `/area` é o caminho. No fluxo HTTPS tradicional, o cliente normalmente estabelece TCP com a porta `443`, negocia TLS e então troca mensagens HTTP protegidas.

## Como uma requisição chega a um serviço hospedado

Considere um serviço web autorizado e público. Quando o usuário informa uma URL, o navegador consulta o DNS para descobrir o endereço correspondente. O sistema encontra uma rota e inicia a conexão; roteadores encaminham os pacotes até a rede do provedor, onde um endereço público, balanceador ou gateway recebe o tráfego.

Antes de a requisição chegar à aplicação, regras de rede e firewalls decidem se a conexão pode continuar. No destino, um processo precisa estar em execução e escutando na porta correta. Só então ele recebe a requisição, produz uma resposta e envia os pacotes de volta ao cliente.

Apenas atribuir um IP público não torna um serviço acessível. É necessário haver rota, controles de rede compatíveis, firewall local, processo em execução e porta em escuta. Liberar uma porta não inicia o serviço; iniciar o serviço também não faz o firewall permitir a conexão.

Um computador em uma LAN também pode publicar um serviço mediante roteamento, NAT, encaminhamento de porta e firewall. Serviços locais apenas não ficam expostos por padrão.

## Público e privado: três distinções

“Público” e “privado” mudam de significado conforme o contexto. Uma **nuvem pública** oferece infraestrutura a vários clientes com isolamento lógico, enquanto uma **nuvem privada** é destinada a uma organização. Um **IP público** é roteável pela Internet; um **IP privado** pertence ao espaço de uma rede interna. Um **serviço público** foi planejado para aceitar conexões externas, enquanto um serviço privado depende de caminhos controlados.

Uma máquina em nuvem pública pode possuir apenas IP privado. Uma nuvem privada pode publicar determinados serviços. “Nuvem pública” não significa que todos os recursos estejam visíveis ao público.

A expressão “IP real” é imprecisa. O correto é distinguir endereços públicos de privados. Ambos são válidos em seus contextos.

## Provedor e hospedagem

Um **provedor de nuvem** opera infraestrutura e oferece recursos como serviços. AWS, Azure e Google Cloud são exemplos, mas diferem em arquitetura, preços, regiões, controles e políticas.

**Hospedar** significa manter uma aplicação, serviço ou dado em infraestrutura capaz de atendê-lo. Hospedagem não significa necessariamente exposição pública.

A responsabilidade é compartilhada. Em uma máquina virtual, o provedor normalmente protege datacenter, hardware e virtualização, enquanto o cliente administra identidades, regras de rede, sistema operacional, aplicações e dados.

A cobrança pode ser por consumo, assinatura ou capacidade reservada. Recursos esquecidos, tráfego e armazenamento podem gerar custos relevantes.

## Disponibilidade

**Disponibilidade** é a capacidade de um serviço permanecer acessível e funcionar corretamente quando necessário.

Nenhuma instância é “sempre ligada” por definição. Hardware, software, rede, configuração e manutenção podem causar interrupções. Alta disponibilidade geralmente exige:

- componentes redundantes;
- distribuição entre domínios de falha;
- balanceamento de carga;
- verificações de integridade;
- recuperação automatizada;
- monitoramento e testes.

Um SLA descreve compromissos do provedor, mas não elimina a possibilidade de indisponibilidade.

## Escalabilidade e elasticidade

**Escalabilidade** é a capacidade de atender a uma carga maior sem perder o nível de serviço esperado.

- **Escala vertical:** aumentar processador, memória ou capacidade de uma máquina.
- **Escala horizontal:** distribuir o trabalho entre várias instâncias.

**Elasticidade** é a capacidade de aumentar e reduzir recursos conforme a demanda.

Escala não acontece magicamente. A aplicação precisa suportar distribuição de trabalho, os dados precisam permanecer consistentes e limites de custo e capacidade devem ser considerados. Disponibilidade e escalabilidade são relacionadas, mas diferentes.

Disponibilidade e escala dependem da arquitetura; não surgem apenas porque um recurso está na nuvem. Da mesma forma, uma instância não corresponde necessariamente a um servidor físico exclusivo, e o provedor não assume toda a manutenção e segurança das aplicações.

Na [Aula 4: Por que usar nuvem em testes](04-why-learn-cloud-computing-as-a-hacker.md), esses fundamentos serão aplicados aos laboratórios autorizados.
