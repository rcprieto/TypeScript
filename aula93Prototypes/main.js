function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto("Camiseta 1", 100);
p1.desconto(10);

const p2 = {
  nome: "Camiseta",
  preco: 250,
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);
console.log(p1);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 110,
  },
  tamanho2: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42,
  },
});
