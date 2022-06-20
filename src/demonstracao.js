class Demonstracao {
  static lista = [];
  constructor(nome, foto, descricao) {
    this.nome = nome;
    this.foto = foto;
    this.descricao =
      descricao ||
      "Algum texto descrevendo este serviço, exaltando as especificações técnicas e de estilos de modo a atrair o cliente. ";

    Demonstracao.lista.push(this);
  }
  static exibir(limite) {
    const $lista = $(".lista-demonstracao");
    let html = "";
    for (let [key, demo] of Demonstracao.lista.entries()) {
      if (limite === key) break;
      html += `
        <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="service-widget">
                <div class="post-media wow fadeIn">
                    <a href="${demo.foto}" data-rel="prettyPhoto[gal]" class="hoverbutton global-radius" target="__blank"><i class="fa fa-eye"></i></a>
                    <img src="${demo.foto}" alt="" class="img-responsive img-rounded">
                </div>
                <h3>${demo.nome}</h3>
                <p>${demo.descricao}</p>
            </div>
        </div>
        `;
    }
    $lista.append(html);
  }
}

const demonstracao1 = new Demonstracao("Trabalho 1", "/images/demo2.jpg");
const demonstracao2 = new Demonstracao("Trabalho 2", "/images/demo4.jpg");
const demonstracao3 = new Demonstracao("Trabalho 3", "/images/demo3.jpg");

const max = 3;
Demonstracao.exibir(max);
