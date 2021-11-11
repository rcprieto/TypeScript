function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

Produto.prototype.descont = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor, estoque) {
  Produto.call(this, nonme, preco);
  this.cor = cor;
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    get: function () {
      return estoque;
    },
    set: function (value) {
      if (typeof value !== "number") return;

      estoque = value;
    },
  });
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};
