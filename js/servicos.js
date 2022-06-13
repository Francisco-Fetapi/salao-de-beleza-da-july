class Servicos {
  constructor(categoria, servicos) {
    this.categoria = categoria;
    this.servicos = servicos || [];
  }
  adicionarServico(servico) {
    this.servicos.push(servico);
  }
}
class Servico {
  constructor(nome, preco, descricao) {
    this.nome = nome;
    this.preco = preco;
    this.descricao = "Ola Mundo bla bla bla";
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
