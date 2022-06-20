class Funcionario {
  static lista = [];
  constructor(nome, cargo, foto, descricao, contatos) {
    this.nome = nome;
    this.cargo = cargo;
    this.foto = foto;
    this.contatos = contatos || {};
    // Uma mensagem que a pessoa queira passar, uma breve descrição sobre ela mesma ou mesmo uma observação sobre suas competencias técnicas.
    this.descricao = descricao || "";

    Funcionario.lista.push(this);
  }
  temAlgumContato() {
    return Object.keys(this.contatos).length !== 0;
  }
  static exibir(limite) {
    const $lista = $(".dev-list");
    let html = "";

    for (let cont = 0; cont < Funcionario.lista.length; cont++) {
      const funcionario = Funcionario.lista[cont];
      const key = cont;
      console.log(key);
      if (limite === key) {
        break;
      }
      html += `
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
          <div class="widget clearfix">
              <div class="hover-br">
                  <div class="post-media wow fadeIn">
                      <a href="${
                        funcionario.foto
                      }" data-rel="prettyPhoto[gal]" class="hoverbutton global-radius" target="__blank"><i class="fa fa-eye"></i></a>
                      <img src="${
                        funcionario.foto
                      }" alt="" class="img-responsive">
                  </div>
                  ${
                    funcionario.temAlgumContato()
                      ? `
                  <div class="social-up-hover">
                      <div class="footer-social">
                        ${Object.values(funcionario.contatos)
                          .map((contato) => {
                            if (!contato.href) return null;
                            return `<a href="${contato.href}" class="btn grd1"><i class="${contato.icon}"></i></a>`;
                          })
                          .filter((contato) => contato !== null)
                          .join("")}
                      </div>
                  </div>
                  `
                      : ``
                  }
                  
              </div>
              <div class="widget-title">
                  <h3>${funcionario.nome}</h3>
                  <small>${funcionario.cargo}</small>
              </div>
              ${
                funcionario.descricao
                  ? `
              <p>${funcionario.descricao}</p>
              `
                  : ""
              }
          </div>
      </div>`;
    }

    $lista.prepend(html);
  }
}
class Contato {
  constructor(facebook, google, whatsapp) {
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
        ? `http://api.whatsapp.com/send?phone=244${whatsapp}`
        : null,
    };
  }
}

const juliana = new Funcionario(
  "Juliana Luís",
  "A Proprietária",
  "./images/func0.jpg"
);
const mateus = new Funcionario(
  "Mateus Hamuyela",
  "Barbeiro e Gerente",
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
  "Maria Luís",
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
