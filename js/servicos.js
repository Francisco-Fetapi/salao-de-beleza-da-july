class Servicos {
  static todos = [];
  constructor(categoria, servicos) {
    this.categoria = categoria;
    this.categoria_ = categoria;
    this.servicos = servicos || [];
  }
  adicionarServico(servico) {
    this.servicos.push(servico);
    const _this = this;
    Servicos.todos.push({ ...servico, categoria: _this.categoria_ });
  }
  set categoria(valor) {
    Categorias.nomes.push(valor);
  }
  static exibir() {
    const $servicos = $(".servicos-tab");

    let html = "";
    Categorias.nomes.forEach((categoria, key) => {
      const servicosDestaCategoria = Servicos.todos.filter(
        (servico) => servico.categoria === categoria
      );
      html += `<div class="row tab-pane fade" id="tab_${key}">`;
      for (let servico of servicosDestaCategoria) {
        html += `<div class="col-md-6">
          <div class="service-wrap clearfix">
              <img src="uploads/barber_service_01.jpg" alt="" class="img-responsive img-rounded alignleft">
              <h4>${servico.nome}</h4>
              <p class="lead">${servico.preco}</p>
              <p>${servico.descricao}</p>
          </div>
      </div>`;
      }
      html += `
          </div>
          `;
      $servicos.append(html);
    });
    $('a[href="#tab_0"]').tab("show");
  }
}
class Servico {
  constructor(nome, preco, descricao) {
    this.nome = nome;
    this.preco = preco.toLocaleString({ minimuFractionDigitis: 2 }) + " KZ";
    this.descricao =
      descricao ||
      "Algum texto descrevendo este serviço, exaltando as especificações técnicas e de estilos de modo a atrair o cliente.";
  }
}
class Categorias {
  static nomes = [];
  static exibir() {
    const servicos = $(".lista-servicos");
    servicos.html("");
    Categorias.nomes.forEach((nome, key) => {
      servicos.append(`
        <li><a href="#tab_${key}" data-toggle="tab">${nome}</a></li>
        `);
    });
  }
}

const trancas = new Servicos("Tranças");
trancas.adicionarServico(new Servico("Escama", 2000));
trancas.adicionarServico(new Servico("Uma-Uma Simples", 2500));
trancas.adicionarServico(new Servico("Maliamol", 2500));
trancas.adicionarServico(new Servico("Americano", 2000));
trancas.adicionarServico(new Servico("Caracol Grosso", 2000));
trancas.adicionarServico(new Servico("Caracol Fino", 3000));
trancas.adicionarServico(new Servico("Dred-Lucke Compl", 3000));

const pinturaCabelo = new Servicos("Pintura do Cabelo");
pinturaCabelo.adicionarServico(new Servico("MadeChacolher", 500));
pinturaCabelo.adicionarServico(new Servico("Super Black", 2500));
pinturaCabelo.adicionarServico(new Servico("Jivence", 2500));

const barbearia = new Servicos("Barbearia");
barbearia.adicionarServico(new Servico("Corte para Adulto", 500));
barbearia.adicionarServico(new Servico("Corte para Criança", 350));
barbearia.adicionarServico(new Servico("Sobrancelha", 200));

const manicuryPedicury = new Servicos("Manicury e Pedicury");
manicuryPedicury.adicionarServico(new Servico("Aplicação - Mão", 1000));
manicuryPedicury.adicionarServico(new Servico("Pintura - Pé", 500));
manicuryPedicury.adicionarServico(new Servico("Sobrancelha - Tatuar", 500));
manicuryPedicury.adicionarServico(new Servico("Aplicação - Cilhos", 2000));

Categorias.exibir();
Servicos.exibir();
