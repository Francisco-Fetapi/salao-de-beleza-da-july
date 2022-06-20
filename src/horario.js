class Horario {
  constructor(hora, numDiasDeTraballho) {
    this.hora = hora;
    this.horaTermino = this.hora + 8;
    this.numDiasDeTraballho = numDiasDeTraballho;
    this.lista = Array.from(
      { length: numDiasDeTraballho },
      this.registar.bind(this)
    );
  }
  registar(_, numeroDaSemana) {
    const data = new Date(0, 0, numeroDaSemana);
    const diaDaSemana = data.toLocaleString("pt-BR", { weekday: "long" });
    return {
      nome: diaDaSemana.toUpperCase(),
      horario: `${this.hora}H - ${this.horaTermino}H`,
    };
  }
  setHorarioDoDia(nome, horario) {
    const dia = this.lista.find((semana) => semana.nome === nome.toUpperCase());
    if (dia) {
      dia.horario = horario.toUpperCase();
    }
  }
  exibir() {
    const $lista = $("#horario-lista");
    let html = "";

    this.lista.forEach((dia) => {
      html += `
        <li>
            <span>${dia.nome} </span><span>${dia.horario}</span>
        </li>
        `;
    });
    $lista.html(html);
  }
}

const horario = new Horario(9, 7);
horario.setHorarioDoDia("Domingo", "Fechado");
horario.exibir();
