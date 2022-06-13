class Funcionario {
  static lista = [];
  constructor(nome, cargo, foto, descricao) {
    this.nome = nome;
    this.cargo = cargo;
    this.foto = foto;
    this.descricao = descricao || "Ola Mundo";

    Funcionario.lista.push(this);
  }
}

const juliana = new Funcionario(
  "Juliana Luiz",
  "A Fundadora",
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

console.log(Funcionario.lista);
