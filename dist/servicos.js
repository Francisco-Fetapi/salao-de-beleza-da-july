"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Servicos = /** @class */ (function () {
    function Servicos(categoria) {
        this.categoria = categoria;
        this.categoria_ = categoria;
    }
    Servicos.prototype.adicionarServico = function (servico) {
        var _this = this;
        Servicos.todos.push(__assign(__assign({}, servico), { categoria: _this.categoria_ }));
    };
    Object.defineProperty(Servicos.prototype, "categoria", {
        set: function (valor) {
            Categorias.nomes.push(valor);
        },
        enumerable: false,
        configurable: true
    });
    Servicos.exibir = function () {
        var $servicos = $(".servicos-tab");
        var html = "";
        Categorias.nomes.forEach(function (categoria, key) {
            var servicosDestaCategoria = Servicos.todos.filter(function (servico) { return servico.categoria === categoria; });
            html += "<div class=\"row tab-pane fade\" id=\"tab_".concat(key, "\">");
            for (var _i = 0, servicosDestaCategoria_1 = servicosDestaCategoria; _i < servicosDestaCategoria_1.length; _i++) {
                var servico = servicosDestaCategoria_1[_i];
                html += "<div class=\"col-md-6\">\n          <div class=\"service-wrap clearfix ".concat(servico.descricao ? "" : "servico_sem_desc", "\">\n              ").concat(servico.foto
                    ? "<img src=\"".concat(servico.foto, "\" alt=\"\" class=\"img-responsive img-rounded alignleft\">")
                    : "", "\n              <h4>").concat(servico.nome, "</h4>\n              ").concat(servico.foto
                    ? "\n              <p class=\"lead\">".concat(servico.preco, "</p>\n              ")
                    : "\n                <p style=\"font-size:19px;margin-top: -8px;margin-bottom: 10px;\">".concat(servico.preco, "</p>\n              "), "\n              ").concat(servico.foto
                    ? "\n              <p class=\"descricao1\">".concat(servico.descricao, "</p>\n              ")
                    : "\n              <p class=\"descricao2\">".concat(servico.descricao, "</p>\n              "), "\n          </div>\n      </div>");
            }
            html += "\n          </div>\n          ";
            $servicos.append(html);
        });
        $('a[href="#tab_0"]').tab("show");
    };
    Servicos.todos = [];
    return Servicos;
}());
var Servico = /** @class */ (function () {
    function Servico(nome, preco, descricao, foto) {
        this.nome = nome;
        this.preco = preco.toLocaleString({ minimuFractionDigitis: 2 }) + " KZ";
        // Algum texto descrevendo este serviço, exaltando as especificações técnicas e de estilos de modo a atrair o cliente.
        this.descricao = descricao || "";
        this.foto = foto;
    }
    return Servico;
}());
var Categorias = /** @class */ (function () {
    function Categorias() {
    }
    Categorias.exibir = function () {
        var servicos = $(".lista-servicos");
        servicos.html("");
        Categorias.nomes.forEach(function (nome, key) {
            servicos.append("\n        <li><a href=\"#tab_".concat(key, "\" data-toggle=\"tab\">").concat(nome, "</a></li>\n        "));
        });
    };
    Categorias.nomes = [];
    return Categorias;
}());
var trancas = new Servicos("Tranças");
trancas.adicionarServico(new Servico("Escama", 2000));
trancas.adicionarServico(new Servico("Uma-Uma Simples", 2500));
trancas.adicionarServico(new Servico("Maliamol", 2500));
trancas.adicionarServico(new Servico("Americano", 2000));
trancas.adicionarServico(new Servico("Caracol Grosso", 2000));
trancas.adicionarServico(new Servico("Caracol Fino", 3000));
trancas.adicionarServico(new Servico("Dred-Lucke Compl", 3000));
var pinturaCabelo = new Servicos("Pintura do Cabelo");
pinturaCabelo.adicionarServico(new Servico("MadeChacolher", 500));
pinturaCabelo.adicionarServico(new Servico("Super Black", 2500));
pinturaCabelo.adicionarServico(new Servico("Jivence", 2500));
var barbearia = new Servicos("Barbearia");
barbearia.adicionarServico(new Servico("Corte para Adulto", 500));
barbearia.adicionarServico(new Servico("Corte para Criança", 350));
barbearia.adicionarServico(new Servico("Sobrancelha", 200));
var manicuryPedicury = new Servicos("Manicury e Pedicury");
manicuryPedicury.adicionarServico(new Servico("Aplicação - Mão", 1000));
manicuryPedicury.adicionarServico(new Servico("Pintura - Pé", 500));
manicuryPedicury.adicionarServico(new Servico("Sobrancelha - Tatuar", 500));
manicuryPedicury.adicionarServico(new Servico("Aplicação - Cilhos", 2000));
var mise = new Servicos("Mise");
mise.adicionarServico(new Servico("Bigodinho", 2000));
mise.adicionarServico(new Servico("Rolinho", 1200));
mise.adicionarServico(new Servico("Tongos Com Rolos", 2000));
mise.adicionarServico(new Servico("Mise Simples", 1000));
mise.adicionarServico(new Servico("Mise Completa", 2000));
mise.adicionarServico(new Servico("Mise Completa a Vapor", 2000));
mise.adicionarServico(new Servico("Mise Simples a Vapor", 1500));
var desfiliso = new Servicos("Desfiliso");
desfiliso.adicionarServico(new Servico("TCB", 2500));
desfiliso.adicionarServico(new Servico("Dark", 7000));
desfiliso.adicionarServico(new Servico("Olive", 7000));
desfiliso.adicionarServico(new Servico("Soft", 3000));
desfiliso.adicionarServico(new Servico("ABC Olive", 3000));
var puxinhosPenteados = new Servicos("Puxinhos e Penteados");
puxinhosPenteados.adicionarServico(new Servico("Puxinho Trabalhado", 2000));
puxinhosPenteados.adicionarServico(new Servico("Penteado Apanhados", 2000));
puxinhosPenteados.adicionarServico(new Servico("Tongos Seco", 3000));
puxinhosPenteados.adicionarServico(new Servico("Penteado - Noiva", 5000));
puxinhosPenteados.adicionarServico(new Servico("Penteado - Madrinha", 5000));
puxinhosPenteados.adicionarServico(new Servico("Fitagem", 2000));
puxinhosPenteados.adicionarServico(new Servico("Dedolise", 2000));
var aplicacoes = new Servicos("Aplicações");
aplicacoes.adicionarServico(new Servico("Fio-Fio", 4000));
aplicacoes.adicionarServico(new Servico("Costura", 3000));
aplicacoes.adicionarServico(new Servico("Xoxo", 9000));
aplicacoes.adicionarServico(new Servico("Personalizada", 10000));
aplicacoes.adicionarServico(new Servico("Peruca", 5000));
aplicacoes.adicionarServico(new Servico("Peruca Trança", 6000));
aplicacoes.adicionarServico(new Servico("Aplicação Meia-Lua", 2000));
aplicacoes.adicionarServico(new Servico("Aplicação Punho", 2000));
Categorias.exibir();
Servicos.exibir();
