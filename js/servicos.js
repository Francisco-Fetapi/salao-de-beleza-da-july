class Servicos {
  static todos = [];
  constructor(categoria) {
    this.categoria = categoria;
    this.categoria_ = categoria;
  }
  adicionarServico(servico) {
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

const mise = new Servicos("Mise");
mise.adicionarServico(new Servico("Bigodinho", 2000));
mise.adicionarServico(new Servico("Rolinho", 1200));
mise.adicionarServico(new Servico("Tongos Com Rolos", 2000));
mise.adicionarServico(new Servico("Mise Simples", 1000));
mise.adicionarServico(new Servico("Mise Completa", 2000));
mise.adicionarServico(new Servico("Mise Completa a Vapor", 2000));
mise.adicionarServico(new Servico("Mise Simples a Vapor", 1500));

const desfiliso = new Servicos("Desfiliso");
desfiliso.adicionarServico(new Servico("TCB", 2500));
desfiliso.adicionarServico(new Servico("Dark", 7000));
desfiliso.adicionarServico(new Servico("Olive", 7000));
desfiliso.adicionarServico(new Servico("Soft", 3000));
desfiliso.adicionarServico(new Servico("ABC Olive", 3000));

const puxinhosPenteados = new Servicos("Puxinhos e Penteados");
puxinhosPenteados.adicionarServico(new Servico("Puxinho Trabalhado", 2000));
puxinhosPenteados.adicionarServico(new Servico("Penteado Apanhados", 2000));
puxinhosPenteados.adicionarServico(new Servico("Tongos Seco", 3000));
puxinhosPenteados.adicionarServico(new Servico("Penteado - Noiva", 5000));
puxinhosPenteados.adicionarServico(new Servico("Penteado - Madrinha", 5000));
puxinhosPenteados.adicionarServico(new Servico("Fitagem", 2000));
puxinhosPenteados.adicionarServico(new Servico("Dedolise", 2000));

const aplicacoes = new Servicos("Aplicações");
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
