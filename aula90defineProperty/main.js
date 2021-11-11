function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  //Não pode alterar nada
  //Object.freeze();
  let estoquePrivato = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    //value: estoque,
    //writable: false,
    configurable: true, // Pode reconfigurar essas configurações do property, ou deletar a chave estoque
    get: function () {
      return estoquePrivato;
    },
    set: function (valor) {
      if (typeof valor !== "number") throw new TypeError("Valor Inválido");

      estoquePrivato = valor;
    },
  });
}

const p1 = new Produto("Camiseta", 30, 2);
p1.estoque = 500000;
console.log(p1);

for (let chave in p1) {
  console.log(chave);
}

console.log(Object.getOwnPropertyDescriptor(p1, "estoque"));
console.log(Object.entries(p1));
for (let [chave, valor] of Object.entries(p1)) {
  console.log(chave, valor);
}
