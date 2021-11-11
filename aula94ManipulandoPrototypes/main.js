function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  //this.nomeCompleto = () => 'ORIGINAL SOBRESCREVE: ' + this.nome + " " + this.sobrenome;
}

Pessoa.prototype.falando = "teste falando";
Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

const pessoa1 = new Pessoa("Rodrigo", "Prieto");
const data = new Date();

console.dir(pessoa1);
console.dir(data);

console.log(pessoa1.falando);
