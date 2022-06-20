class Declaracao {
  static lista = [];
  constructor(titulo, texto, usuario) {
    this.titulo = titulo;
    this.texto =
      texto ||
      "Aqui vai algum comentário que esta pessoa está a fazer sobre o Salão da July, seus Serviços, suas experiencias enquanto cliente. Basicamente o seu testemundo sincero.";
    this.usuario = usuario;

    Declaracao.lista.push(this);
  }
  static exibir() {
    const $lista = $(".declaracoes");
    let html = "";
    for (let cont = 0; cont < Declaracao.lista.length; cont++) {
      const declaracao = Declaracao.lista[cont];
      const key = cont;
      html += `
            <div class="testimonial clearfix">
                <div class="desc">
                    <h3><i class="fa fa-quote-left"></i> ${
                      declaracao.titulo
                    }</h3>
                    <p class="lead">${declaracao.texto}</p>
                </div>
                <div class="testi-meta">
                    ${
                      declaracao.usuario.foto
                        ? `<img src="${declaracao.usuario.foto}" alt="" class="img-responsive alignright">`
                        : ""
                    }
                    <h4>${declaracao.usuario.nome} <small> - ${
        declaracao.usuario.status
      }</small></h4>
                </div>
            </div>            
            <br />
            `;
    }
    $lista.html(html);
    // $(".declaracoes").owlCarousel();
  }
}
class Usuario {
  constructor(nome, status, foto) {
    this.nome = nome;
    this.status = status;
    this.foto = foto;
  }
}

const declaracao1 = new Declaracao(
  "Suporte Incrivel",
  null,
  new Usuario("Nome Da Pessoa", "Profissão", null)
);
const declaracao2 = new Declaracao(
  "Equipe Talentosa",
  null,
  new Usuario("Nome Da Pessoa", "Profissão", null)
);
const declaracao3 = new Declaracao(
  "Serviços Incriveis",
  null,
  new Usuario("Nome Da Pessoa", "Profissão", null)
);

Declaracao.exibir();
