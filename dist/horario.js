"use strict";
var Horario = /** @class */ (function () {
    function Horario(hora, numDiasDeTraballho) {
        this.hora = hora;
        this.horaTermino = this.hora + 8;
        this.numDiasDeTraballho = numDiasDeTraballho;
        this.lista = Array.from({ length: numDiasDeTraballho }, this.registar.bind(this));
    }
    Horario.prototype.registar = function (_, numeroDaSemana) {
        var data = new Date(0, 0, numeroDaSemana);
        var diaDaSemana = data.toLocaleString("pt-BR", { weekday: "long" });
        return {
            nome: diaDaSemana.toUpperCase(),
            horario: "".concat(this.hora, "H - ").concat(this.horaTermino, "H"),
        };
    };
    Horario.prototype.setHorarioDoDia = function (nome, horario) {
        var dia = this.lista.find(function (semana) { return semana.nome === nome.toUpperCase(); });
        if (dia) {
            dia.horario = horario.toUpperCase();
        }
    };
    Horario.prototype.exibir = function () {
        var $lista = $("#horario-lista");
        var html = "";
        this.lista.forEach(function (dia) {
            html += "\n        <li>\n            <span>".concat(dia.nome, " </span><span>").concat(dia.horario, "</span>\n        </li>\n        ");
        });
        $lista.html(html);
    };
    return Horario;
}());
var horario = new Horario(9, 7);
horario.setHorarioDoDia("Domingo", "Fechado");
horario.exibir();
