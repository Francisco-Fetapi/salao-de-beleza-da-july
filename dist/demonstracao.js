"use strict";
var Demonstracao = /** @class */ (function () {
    function Demonstracao(nome, foto, descricao) {
        this.nome = nome;
        this.foto = foto;
        this.descricao =
            descricao ||
                "Algum texto descrevendo este serviço, exaltando as especificações técnicas e de estilos de modo a atrair o cliente. ";
        Demonstracao.lista.push(this);
    }
    Demonstracao.exibir = function (limite) {
        var $lista = $(".lista-demonstracao");
        var html = "";
        for (var _i = 0, _a = Demonstracao.lista.entries(); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], demo = _b[1];
            if (limite === key)
                break;
            html += "\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\n            <div class=\"service-widget\">\n                <div class=\"post-media wow fadeIn\">\n                    <a href=\"".concat(demo.foto, "\" data-rel=\"prettyPhoto[gal]\" class=\"hoverbutton global-radius\" target=\"__blank\"><i class=\"fa fa-eye\"></i></a>\n                    <img src=\"").concat(demo.foto, "\" alt=\"\" class=\"img-responsive img-rounded\">\n                </div>\n                <h3>").concat(demo.nome, "</h3>\n                <p>").concat(demo.descricao, "</p>\n            </div>\n        </div>\n        ");
        }
        $lista.append(html);
    };
    Demonstracao.lista = [];
    return Demonstracao;
}());
var demonstracao1 = new Demonstracao("Trabalho 1", "/images/demo2.jpg");
var demonstracao2 = new Demonstracao("Trabalho 2", "/images/demo4.jpg");
var demonstracao3 = new Demonstracao("Trabalho 3", "/images/demo3.jpg");
var max = 3;
Demonstracao.exibir(max);
