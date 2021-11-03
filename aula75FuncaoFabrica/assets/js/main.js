function criarPessoa(nome, sobreNome, a, p) {
  return {
    nome: nome,
    sobreNome: sobreNome,
    fala: function (assunto) {
      return `${this.nome} está ${assunto} e o peso é ${this.peso}.`;
    },
    peso: p,
    altura: a,
    imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
    //Getter
    get nomeCompleto() {
      return this.nome + " " + this.sobreNome;
    },

    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobreNome = valor.join(" ");
      //console.log(valor);
      //console.log(this.nome);
    },
  };
}

const p1 = criarPessoa("Rodrigo", "Prieto", 10, 50);
const p2 = criarPessoa("Rodrigo", "Prieto", 10, 50);
//console.log(p1.fala("Falando"));
//console.log(p2.imc("Falando"));
p1.nomeCompleto = "Clarissa Tams";
console.log(p1.nomeCompleto);
