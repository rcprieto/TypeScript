const nome = "Rodrigo";
const sobrenome = "Prieto";
const idade = 40;

function soma(x, y) {
  return x + y;
}

export { nome, soma };
export function subtrair(x, y) {
  return x - y;
}

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
