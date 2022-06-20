"use strict";
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo, foto, descricao, contatos) {
        this.nome = nome;
        this.cargo = cargo;
        this.foto = foto;
        this.contatos = contatos || {};
        // Uma mensagem que a pessoa queira passar, uma breve descrição sobre ela mesma ou mesmo uma observação sobre suas competencias técnicas.
        this.descricao = descricao || "";
        Funcionario.lista.push(this);
    }
    Funcionario.prototype.temAlgumContato = function () {
        return Object.keys(this.contatos).length !== 0;
    };
    Funcionario.exibir = function (limite) {
        var $lista = $(".dev-list");
        var html = "";
        for (var _i = 0, _a = Funcionario.lista.entries(); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], funcionario = _b[1];
            if (limite === key) {
                break;
            }
            html += "\n          <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn\" data-wow-duration=\"1s\" data-wow-delay=\"0.2s\">\n          <div class=\"widget clearfix\">\n              <div class=\"hover-br\">\n                  <div class=\"post-media wow fadeIn\">\n                      <a href=\"".concat(funcionario.foto, "\" data-rel=\"prettyPhoto[gal]\" class=\"hoverbutton global-radius\" target=\"__blank\"><i class=\"fa fa-eye\"></i></a>\n                      <img src=\"").concat(funcionario.foto, "\" alt=\"\" class=\"img-responsive\">\n                  </div>\n                  ").concat(funcionario.temAlgumContato()
                ? "\n                  <div class=\"social-up-hover\">\n                      <div class=\"footer-social\">\n                        ".concat(Object.values(funcionario.contatos)
                    .map(function (contato) {
                    if (!contato.href)
                        return null;
                    return "<a href=\"".concat(contato.href, "\" class=\"btn grd1\"><i class=\"").concat(contato.icon, "\"></i></a>");
                })
                    .filter(function (contato) { return contato !== null; })
                    .join(""), "\n                      </div>\n                  </div>\n                  ")
                : "", "\n                  \n              </div>\n              <div class=\"widget-title\">\n                  <h3>").concat(funcionario.nome, "</h3>\n                  <small>").concat(funcionario.cargo, "</small>\n              </div>\n              ").concat(funcionario.descricao
                ? "\n              <p>".concat(funcionario.descricao, "</p>\n              ")
                : "", "\n          </div>\n      </div>");
        }
        $lista.prepend(html);
    };
    Funcionario.lista = [];
    return Funcionario;
}());
var Contato = /** @class */ (function () {
    function Contato(facebook, google, whatsapp) {
        this.facebook = {
            icon: "fa fa-facebook",
            href: facebook,
        };
        this.google = {
            icon: "fa fa-google",
            href: google,
        };
        this.whatsapp = {
            icon: "fa fa-whatsapp",
            href: whatsapp
                ? "http://api.whatsapp.com/send?phone=244".concat(whatsapp)
                : null,
        };
    }
    return Contato;
}());
var juliana = new Funcionario("Juliana Luís", "A Proprietária", "./images/func0.jpg");
var mateus = new Funcionario("Mateus Hamuyela", "Barbeiro e Gerente", "./images/func1.jpg");
var afonso = new Funcionario("Afonso Dumbo", "Chefe de Comunicação e Marketing", "./images/func2.jpg");
var eduardo = new Funcionario("Eduardo Maliti", "Manicurista e Pedicurista", "./images/func3.jpg");
var ana = new Funcionario("Ana Pena", "Cabelereira", "./images/func4.jpg");
var maria = new Funcionario("Maria Luís", "Cabelereira", "./images/func5.jpg");
var vanusa = new Funcionario("Vanusa Dos Santos", "Maquilhadora", "./images/func6.jpg");
var limite = window.location.href.includes("equipe") ? null : 3;
Funcionario.exibir(limite);
