"use strict";
var Declaracao = /** @class */ (function () {
    function Declaracao(titulo, texto, usuario) {
        this.titulo = titulo;
        this.texto =
            texto ||
                "Aqui vai algum comentário que esta pessoa está a fazer sobre o Salão da July, seus Serviços, suas experiencias enquanto cliente. Basicamente o seu testemundo sincero.";
        this.usuario = usuario;
        Declaracao.lista.push(this);
    }
    Declaracao.exibir = function () {
        var $lista = $(".declaracoes");
        var html = "";
        for (var _i = 0, _a = Declaracao.lista.entries(); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], declaracao = _b[1];
            html += "\n            <div class=\"testimonial clearfix\">\n                <div class=\"desc\">\n                    <h3><i class=\"fa fa-quote-left\"></i> ".concat(declaracao.titulo, "</h3>\n                    <p class=\"lead\">").concat(declaracao.texto, "</p>\n                </div>\n                <div class=\"testi-meta\">\n                    ").concat(declaracao.usuario.foto
                ? "<img src=\"".concat(declaracao.usuario.foto, "\" alt=\"\" class=\"img-responsive alignright\">")
                : "", "\n                    <h4>").concat(declaracao.usuario.nome, " <small> - ").concat(declaracao.usuario.status, "</small></h4>\n                </div>\n            </div>            \n            <br />\n            ");
        }
        $lista.html(html);
        // $(".declaracoes").owlCarousel();
    };
    Declaracao.lista = [];
    return Declaracao;
}());
var Usuario = /** @class */ (function () {
    function Usuario(nome, status, foto) {
        this.nome = nome;
        this.status = status;
        this.foto = foto;
    }
    return Usuario;
}());
var declaracao1 = new Declaracao("Suporte Incrivel", null, new Usuario("Nome Da Pessoa", "Profissão", null));
var declaracao2 = new Declaracao("Equipe Talentosa", null, new Usuario("Nome Da Pessoa", "Profissão", null));
var declaracao3 = new Declaracao("Serviços Incriveis", null, new Usuario("Nome Da Pessoa", "Profissão", null));
Declaracao.exibir();
