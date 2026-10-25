from html import escape
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "Cloud-Based Hacking" / "assets" / "lessons"
CATALOG = json.loads(Path(__file__).with_name("lesson-editorial.json").read_text(encoding="utf-8"))
INK, GREEN, SOFT, PAPER, BEIGE, RUST = "#263b35", "#286957", "#dfecdf", "#fffef9", "#fff8eb", "#97654f"


def text(x, y, value, size=21, color=INK, anchor="middle"):
    return f'<text x="{x}" y="{y}" font-family="Arial, sans-serif" font-size="{size}" fill="{color}" text-anchor="{anchor}">{escape(value)}</text>'


def line(x, y, a, b, color=GREEN, dashed=False):
    dash = ' stroke-dasharray="7 6"' if dashed else ""
    return f'<path d="M{x} {y} L{a} {b}" fill="none" stroke="{color}" stroke-width="2.5" stroke-linecap="round"{dash}/>'


def arrow(x, y, a, b, color=GREEN):
    from math import atan2, cos, sin
    angle = atan2(b-y, a-x)
    return line(x, y, a, b, color) + f'<path d="M{a-11*cos(angle-.5)} {b-11*sin(angle-.5)} L{a} {b} L{a-11*cos(angle+.5)} {b-11*sin(angle+.5)}" fill="none" stroke="{color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>'


def box(x, y, w, h, fill=SOFT, stroke=GREEN, dashed=False):
    dash = ' stroke-dasharray="7 6"' if dashed else ""
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="7" fill="{fill}" stroke="{stroke}" stroke-width="1.5"{dash}/>'


def component(x, y, w, h, title, subtitle=None, fill=SOFT):
    label_y = y+h/2+7 if subtitle is None else y+h/2-7
    result = box(x, y, w, h, fill) + text(x+w/2, label_y, title, 22, GREEN)
    if subtitle:
        result += text(x+w/2, label_y+29, subtitle, 18)
    return result


def laptop(x, y, title):
    return (box(x, y, 102, 68, SOFT, INK) + box(x+8, y+8, 86, 49, PAPER, INK)
            + line(x+20, y+23, x+80, y+23) + line(x+20, y+36, x+70, y+36)
            + f'<path d="M{x} {y+68} l-12 14 h126 l-12 -14" fill="#e8e4d7" stroke="{INK}" stroke-width="2"/>'
            + text(x+51, y+111, title, 19))


def chip(x, y, title):
    pins = "".join(line(x-7, y+10+i*12, x, y+10+i*12) + line(x+72, y+10+i*12, x+79, y+10+i*12) for i in range(4))
    return pins + component(x, y, 72, 60, title)


def heading(value):
    return text(450, 42, value, 25, GREEN)


def draw(number):
    if number == "01":
        return (heading("Permissão define o limite do exercício")
                + box(32, 72, 540, 235, PAPER) + text(302, 104, "Dentro do laboratório", 22, GREEN)
                + laptop(65, 142, "operador autorizado") + arrow(193, 183, 276, 183)
                + component(290, 142, 235, 90, "Ativos aprovados", "ações e período definidos")
                + arrow(289, 267, 143, 267) + text(398, 278, "evidências permitidas", 18)
                + box(622, 105, 242, 165, "none", RUST, True) + text(743, 157, "Terceiros", 23, RUST)
                + text(743, 191, "fora do escopo", 20, RUST)
                + line(597, 155, 597, 231, RUST) + text(450, 358, "Estar na Internet não significa estar autorizado.", 22))
    if number == "02":
        return (heading("Modalidades diferentes, limites em comum")
                + box(34, 72, 832, 238, PAPER) + text(450, 110, "Hacking ético: atividade autorizada", 24, GREEN)
                + component(67, 143, 346, 126, "Pentest", "vulnerabilidades e impactos")
                + component(487, 143, 346, 126, "Red Team", "sequência orientada a objetivos")
                + text(450, 352, "Autorização + escopo + evidências protegidas", 22))
    if number == "04":
        return (heading("Quem inicia a conexão muda; os limites permanecem")
                + text(58, 98, "Conexão direta", 21, GREEN, "start")
                + component(42, 120, 210, 74, "Testador") + arrow(266, 155, 578, 155)
                + text(420, 136, "solicita ao serviço", 19)
                + component(594, 120, 256, 74, "Serviço do laboratório")
                + text(58, 239, "Callback", 21, GREEN, "start")
                + component(42, 260, 210, 74, "Controle autorizado")
                + arrow(578, 295, 266, 295) + text(420, 276, "agente inicia a saída", 19)
                + component(594, 260, 256, 74, "Agente já executado")
                + text(450, 378, "Rede, permissão e privilégios continuam necessários.", 20))
    if number == "05":
        return (heading("Fechar o terminal não encerra os recursos")
                + component(34, 100, 235, 100, "Instância executando", "CPU, memória e disco")
                + arrow(282, 150, 408, 150) + text(345, 129, "parar", 19)
                + component(423, 100, 200, 100, "Instância parada", "execução interrompida")
                + arrow(523, 215, 523, 265) + component(405, 278, 290, 69, "Volume pode permanecer", fill="#e9e5d9")
                + arrow(638, 150, 673, 150) + text(655, 85, "terminar", 19)
                + component(687, 100, 178, 100, "Terminada", "revisar recursos")
                + text(238, 305, "Conferir separadamente:", 19)
                + text(238, 335, "volumes, snapshots e endereços", 18))
    if number == "06":
        return (heading("Root da AWS não é root do Linux")
                + box(34, 74, 832, 125, PAPER)
                + component(58, 98, 215, 76, "Identidade AWS", "root ou identidade IAM")
                + arrow(290, 135, 520, 135) + text(405, 116, "políticas IAM", 18)
                + component(538, 98, 300, 76, "APIs e recursos da conta")
                + box(34, 234, 832, 125, PAPER)
                + component(58, 258, 215, 76, "Usuário Linux", "kali ou root")
                + arrow(290, 295, 520, 295) + text(405, 276, "permissões do sistema", 18)
                + component(538, 258, 300, 76, "Processos e arquivos"))
    if number == "07":
        return (heading("A instância combina escolhas distintas")
                + component(35, 80, 230, 83, "AMI", "sistema inicial")
                + component(35, 217, 230, 83, "Tipo de instância", "CPU, RAM e rede")
                + arrow(277, 122, 374, 184) + arrow(277, 257, 374, 217)
                + box(389, 111, 240, 190, PAPER) + text(509, 147, "Instância EC2", 23, GREEN)
                + chip(413, 177, "CPU") + chip(529, 177, "RAM")
                + component(677, 148, 185, 91, "Volume EBS", "dados persistentes", "#e9e5d9")
                + arrow(642, 194, 665, 194)
                + text(450, 352, "Key pair: pública na configuração; privada fica local.", 20))
    if number == "08":
        return (heading("Duas verificações, duas chaves privadas protegidas")
                + box(35, 76, 330, 245, PAPER) + box(535, 76, 330, 245, PAPER)
                + text(200, 111, "Cliente local", 23, GREEN) + text(700, 111, "Servidor SSH", 23, GREEN)
                + text(700, 162, "chave privada de host", 20)
                + arrow(523, 183, 377, 183) + text(450, 167, "prova", 18)
                + text(200, 204, "verifica a identidade do servidor", 18)
                + text(200, 253, "chave privada do usuário", 20)
                + arrow(377, 272, 523, 272) + text(450, 256, "assinatura", 18)
                + text(700, 294, "verifica a chave autorizada", 18)
                + text(450, 367, "A rede recebe provas; não recebe as chaves privadas.", 21))
    if number == "09":
        return (heading("A linha digitada tem partes com funções diferentes")
                + box(53, 81, 794, 95, PAPER)
                + text(122, 143, "ls", 38, GREEN) + text(291, 143, "-la", 38, GREEN)
                + text(588, 143, "/var/www/html", 38, GREEN)
                + line(85, 187, 160, 187) + line(232, 187, 353, 187) + line(426, 187, 791, 187)
                + text(122, 227, "programa", 21) + text(291, 227, "opções", 21) + text(588, 227, "argumento", 21)
                + text(291, 258, "-l e -a", 19)
                + component(211, 294, 478, 66, "A shell interpreta e inicia o programa"))
    if number == "10":
        return (heading("Observar uma etapa não comprova a seguinte")
                + laptop(53, 109, "mensagem recebida") + laptop(399, 109, "página visitada") + laptop(751, 109, "ação realizada")
                + line(185, 151, 359, 151, GREEN, True) + line(537, 151, 711, 151, GREEN, True)
                + text(272, 130, "depende de ação", 18) + text(624, 130, "depende de ação", 18)
                + box(54, 279, 792, 72, PAPER)
                + text(450, 310, "A métrica do laboratório é definida antes do exercício.", 21)
                + text(450, 336, "Sem senhas reais nem dados de participantes.", 19))
    if number == "11":
        return (heading("Do caminho de rede ao arquivo atendido")
                + laptop(32, 103, "navegador") + arrow(153, 142, 286, 142) + text(220, 121, "TCP/80", 20)
                + component(301, 103, 164, 82, "Regra", "permite a entrada")
                + arrow(480, 142, 551, 142)
                + box(568, 80, 296, 243, PAPER) + text(716, 113, "Máquina de destino", 21, GREEN)
                + component(596, 144, 240, 70, "Apache em escuta")
                + arrow(716, 224, 716, 252)
                + text(716, 282, "document root → recurso", 19)
                + arrow(549, 293, 141, 293) + text(340, 276, "resposta HTTP, inclusive 404", 19)
                + text(450, 368, "Regra de rede e processo ativo resolvem condições diferentes.", 20))
    if number == "12":
        return (heading("Transferir um arquivo não é o mesmo que publicá-lo")
                + component(35, 84, 240, 90, "FileZilla no Windows", "cliente SFTP")
                + arrow(291, 130, 585, 130) + text(438, 110, "SSH / TCP 22", 20)
                + component(602, 84, 260, 90, "Usuário no Kali", "grava onde tem permissão")
                + component(35, 241, 240, 90, "Navegador", "cliente HTTP")
                + arrow(291, 286, 585, 286) + text(438, 267, "HTTP / TCP 80", 20)
                + component(602, 241, 260, 90, "Apache", "lê o conteúdo publicado")
                + line(732, 187, 732, 226, GREEN, True)
                + text(450, 378, "O destino do upload precisa ser escolhido e conferido.", 20))
    if number == "13":
        return (heading("Identidade da conexão e permissão de escrita")
                + component(40, 105, 220, 84, "Sessão SFTP", "usuário kali autenticado")
                + arrow(277, 148, 410, 148) + text(343, 127, "tenta criar", 19)
                + box(426, 77, 433, 246, PAPER) + text(642, 114, "/var/www/html", 26, GREEN)
                + text(642, 155, "proprietário | grupo | permissões", 20)
                + component(458, 180, 369, 59, "O sistema decide se permite")
                + text(642, 280, "conexão válida ≠ escrita autorizada", 21, RUST)
                + text(450, 368, "Alterar propriedade não realiza o upload do arquivo.", 20))
    if number == "14":
        return (heading("Os atributos descrevem o envio; o código decide o efeito")
                + box(34, 75, 350, 248, PAPER) + text(209, 112, "Navegador / DOM", 24, GREEN)
                + text(209, 158, "action → destino", 22) + text(209, 196, "method → método", 22)
                + text(209, 234, "name → chave do valor", 22)
                + arrow(400, 171, 544, 171) + text(472, 150, "envio nativo", 18)
                + component(561, 109, 302, 113, "Processador no servidor", "recebe e valida a requisição")
                + line(394, 280, 543, 280, RUST) + line(533, 265, 533, 295, RUST)
                + text(706, 287, "exemplo: envio cancelado", 20, RUST)
                + text(450, 369, "POST não cifra dados. O transporte protegido depende de TLS.", 20))
    if number == "15":
        return (heading("O processo web escreve e responde com sua própria identidade")
                + component(34, 92, 200, 84, "Apache", "recebe a requisição")
                + arrow(250, 134, 359, 134) + component(376, 92, 226, 84, "PHP no servidor", "processa o evento fictício")
                + arrow(620, 134, 676, 134) + component(691, 92, 174, 84, "Arquivo", "escrita permitida?")
                + line(776, 192, 776, 222) + text(776, 252, "propriedade", 19) + text(776, 282, "e permissões", 19)
                + arrow(488, 193, 488, 277) + component(281, 292, 414, 63, "Resposta HTTP para o navegador")
                + text(197, 242, "Usuário SFTP ≠ processo web", 19, RUST))
    if number == "16":
        return (heading("A consulta DNS acontece antes da requisição web")
                + laptop(32, 93, "cliente") + arrow(152, 135, 284, 135)
                + component(301, 91, 252, 91, "Resolvedor recursivo", "consulta ou usa cache válido")
                + arrow(571, 135, 648, 135)
                + component(666, 91, 198, 91, "Autoritativo", "registros da zona")
                + text(707, 219, "raiz e TLD ajudam", 18) + text(707, 244, "a localizar a zona", 18)
                + arrow(648, 166, 571, 166) + arrow(284, 166, 153, 166)
                + text(426, 235, "resposta: dados + TTL", 20)
                + arrow(152, 335, 648, 335) + text(456, 319, "depois: conexão com o servidor web", 20))
    if number == "17":
        return (heading("Nomes, aliases e endereços não são a mesma coisa")
                + component(35, 94, 220, 84, "Nome do laboratório", "example.test")
                + arrow(272, 135, 572, 135) + text(421, 114, "A → endereço", 22)
                + component(589, 94, 274, 84, "IPv4 de documentação", "192.0.2.10")
                + component(35, 249, 220, 84, "Alias", "portal.example.test")
                + arrow(272, 291, 572, 291) + text(421, 270, "CNAME → outro nome", 22)
                + component(589, 249, 274, 84, "Nome canônico", "example.test")
                + text(450, 378, "DNS responde com dados; um redirecionamento vem do HTTP.", 20))
    if number == "18":
        return (heading("Proteger o transporte não certifica a honestidade da página")
                + laptop(35, 116, "navegador") + laptop(751, 116, "servidor")
                + box(224, 85, 453, 219, PAPER)
                + text(450, 123, "Handshake TLS", 26, GREEN)
                + text(450, 164, "nome + validade + cadeia do certificado", 20)
                + text(450, 203, "estabelecimento de chaves de sessão", 20)
                + arrow(172, 259, 728, 259) + text(450, 246, "HTTP protegido depois da negociação", 20)
                + text(450, 365, "Conteúdo honesto e aplicação segura exigem outras verificações.", 20))
    if number == "19":
        return (heading("A validação do domínio e o atendimento HTTPS têm etapas próprias")
                + component(35, 91, 245, 91, "Autoridade certificadora", "verifica o desafio")
                + arrow(296, 137, 581, 137) + text(438, 117, "HTTP-01 / TCP 80", 20)
                + box(597, 91, 267, 263, PAPER) + text(730, 125, "Apache + Certbot", 22, GREEN)
                + text(730, 162, "resposta temporária no domínio", 18)
                + arrow(297, 246, 583, 246) + text(440, 229, "certificado emitido após validar", 18)
                + component(35, 285, 245, 69, "Navegador")
                + arrow(296, 319, 581, 319) + text(439, 301, "HTTPS / TCP 443", 20)
                + text(728, 290, "chave privada no servidor", 18) + text(728, 326, "renovação precisa ser testada", 18))
    if number == "20":
        return (text(125, 35, "Navegador", 24, GREEN)
                + text(445, 35, "Proxy do laboratório", 24, GREEN)
                + text(755, 35, "Aplicação controlada", 24, GREEN)
                + box(22, 60, 210, 148, PAPER)
                + box(36, 77, 182, 32, SOFT) + text(127, 99, "domínio do proxy", 18)
                + text(127, 145, "HTTP a enviar", 20) + text(127, 180, "dentro de TLS", 18)
                + box(344, 60, 202, 148, PAPER)
                + text(445, 94, "TLS recebido termina", 18)
                + line(366, 110, 524, 110)
                + text(445, 140, "mensagem HTTP", 20)
                + text(445, 171, "novo cliente TLS", 18)
                + box(658, 60, 218, 148, PAPER)
                + text(767, 94, "seu domínio e certificado", 17)
                + line(680, 110, 854, 110)
                + text(767, 141, "valida os fatores", 20)
                + text(767, 175, "emite a sessão", 20)
                + arrow(245, 132, 331, 132) + text(288, 114, "TLS", 19, GREEN)
                + arrow(559, 132, 645, 132) + text(602, 114, "outro TLS", 18, GREEN)
                + arrow(645, 244, 559, 244) + arrow(331, 244, 245, 244)
                + text(445, 252, "resposta HTTP", 18)
                + text(127, 252, "recebe a resposta", 18)
                + text(767, 252, "produz a resposta", 18)
                + line(445, 216, 445, 227)
                + box(280, 297, 330, 71, "#e9e5d9", RUST)
                + text(445, 327, "O conteúdo é acessível no proxy:", 19, RUST)
                + text(445, 353, "ele é a ponta de cada conexão.", 18, RUST))
    if number == "21":
        return (text(137, 36, "Arquivos do projeto", 23, GREEN)
                + text(453, 36, "Programa produzido", 23, GREEN)
                + text(767, 36, "Programa em execução", 22, GREEN)
                + box(45, 63, 180, 154, PAPER)
                + box(64, 81, 142, 33, SOFT) + text(135, 104, "código-fonte", 18)
                + box(64, 128, 142, 33, SOFT) + text(135, 151, "Makefile", 18)
                + text(135, 193, "fonte da construção", 17)
                + arrow(240, 134, 339, 134) + text(289, 115, "make", 20, GREEN)
                + box(353, 63, 200, 154, PAPER)
                + text(453, 105, "build/evilginx", 23, GREEN)
                + text(453, 145, "executável no disco", 18)
                + text(453, 184, "não atende sozinho", 18)
                + arrow(568, 134, 659, 134) + text(613, 114, "iniciar", 19)
                + box(675, 63, 186, 154, PAPER)
                + text(768, 102, "processo ativo", 20, GREEN)
                + text(768, 140, "logs e escuta", 18)
                + text(768, 181, "conferir no sistema", 17)
                + line(453, 231, 453, 264, RUST, True)
                + box(300, 278, 306, 82, "#e9e5d9", RUST)
                + text(453, 310, "Configuração persistente", 21, RUST)
                + text(453, 340, "não é apagada ao recompilar", 18, RUST)
                + text(140, 297, "DNS e TLS:", 20, GREEN)
                + text(140, 329, "outros testes", 18)
                + text(765, 298, "Phishlets:", 20, GREEN)
                + text(765, 329, "arquivos de regras", 18))
    if number == "22":
        return (text(137, 36, "Antes da validação", 23, GREEN)
                + text(452, 36, "Decisão da aplicação", 23, GREEN)
                + text(766, 36, "Depois da validação", 23, GREEN)
                + laptop(83, 70, "fatores apresentados")
                + arrow(222, 122, 320, 122)
                + box(335, 64, 236, 145, PAPER)
                + text(453, 98, "confere os fatores", 22, GREEN)
                + text(453, 138, "recusa ou aceita", 20)
                + text(453, 179, "só aceita → cria sessão", 18)
                + arrow(586, 122, 649, 122)
                + box(664, 64, 213, 145, PAPER)
                + text(770, 97, "sessão no serviço", 21, GREEN)
                + box(684, 119, 171, 39, SOFT)
                + text(769, 145, "token sintético", 19)
                + text(770, 184, "representa o estado", 18)
                + line(769, 224, 769, 252)
                + arrow(769, 252, 569, 252)
                + text(663, 283, "novo pedido com o token", 18)
                + box(335, 234, 218, 118, PAPER)
                + text(444, 266, "servidor verifica", 21, GREEN)
                + text(444, 302, "validade e vínculos", 19)
                + text(444, 333, "permite ou recusa", 18)
                + text(136, 262, "Ter uma senha", 20, RUST)
                + text(136, 294, "não comprova", 20, RUST)
                + text(136, 326, "sessão autenticada.", 19, RUST))
    raise ValueError(f"Aula sem desenho: {number}")


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for number, item in CATALOG.items():
        art = draw(number)
        svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="900" height="400" viewBox="0 0 900 400" role="img" aria-labelledby="title desc">'
               f'<title id="title">{escape(item["diagram"].replace("-", " "))}</title><desc id="desc">{escape(item["alt"])}</desc>'
               f'<rect width="900" height="400" rx="12" fill="{BEIGE}"/>{art}</svg>')
        (OUT / f"aula-{number}-{item['diagram']}.svg").write_text(svg, encoding="utf-8")
    print(f"{len(CATALOG)} desenhos didáticos originais preparados.")


if __name__ == "__main__":
    main()
