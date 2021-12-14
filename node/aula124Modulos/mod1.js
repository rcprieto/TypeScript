const nome = "Rodrigo";
const sobrenome = "Prieto";

function falaNome() {
  return nome + " " + sobrenome;
}
module.exports.nome = nome;
exports.falaNome = falaNome;
this.qualquerCoisa = "Exportar qualquer coisa";
// console.log(module);
// console.log(module.exports);

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

module.exports.Pessoa = Pessoa;
