class Funcionario {
  static lista = [];
  constructor(nome, cargo, foto, descricao) {
    this.nome = nome;
    this.cargo = cargo;
    this.foto = foto;
    this.descricao =
      descricao ||
      "Uma mensagem que a pessoa queira passar, uma breve descrição sobre ela mesma ou mesmo uma observação sobre suas competencias técnicas.";

    Funcionario.lista.push(this);
  }
  static exibir(limite) {
    const $lista = $(".dev-list");
    let html = "";

    for (let [key, funcionario] of Funcionario.lista.entries()) {
      if (limite === key) {
        break;
      }
      html += `
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
          <div class="widget clearfix">
              <div class="hover-br">
                  <div class="post-media wow fadeIn">
                      <a href="${funcionario.foto}" data-rel="prettyPhoto[gal]" class="hoverbutton global-radius" target="__blank"><i class="fa fa-eye"></i></a>
                      <img src="${funcionario.foto}" alt="" class="img-responsive">
                  </div>
                  <div class="social-up-hover">
                      <div class="footer-social">
                          <a href="#" class="btn grd1"><i class="fa fa-facebook"></i></a>
                          <a href="#" class="btn grd1"><i class="fa fa-google"></i></a>
                          <a href="#" class="btn grd1"><i class="fa fa-whatsapp"></i></a>
                      </div>
                  </div>
              </div>
              <div class="widget-title">
                  <h3>${funcionario.nome}</h3>
                  <small>${funcionario.cargo}</small>
              </div>
              <p>${funcionario.descricao}</p>
          </div>
      </div>`;
    }

    $lista.prepend(html);
  }
}

const juliana = new Funcionario(
  "Juliana Luiz",
  "A Proprietária",
  "./images/func0.jpg"
);
const mateus = new Funcionario(
  "Mateus Hamuyela",
  "Barbeiro",
  "./images/func1.jpg"
);
const afonso = new Funcionario(
  "Afonso Dumbo",
  "Chefe de Comunicação e Marketing",
  "./images/func2.jpg"
);
const eduardo = new Funcionario(
  "Eduardo Maliti",
  "Manicurista e Pedicurista",
  "./images/func3.jpg"
);
const ana = new Funcionario("Ana Pena", "Cabelereira", "./images/func4.jpg");
const maria = new Funcionario(
  "Maria Luiz",
  "Cabelereira",
  "./images/func5.jpg"
);
const vanusa = new Funcionario(
  "Vanusa Dos Santos",
  "Maquilhadora",
  "./images/func6.jpg"
);

const limite = window.location.href.includes("equipe") ? null : 3;
Funcionario.exibir(limite);
