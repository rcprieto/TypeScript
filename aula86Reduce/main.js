const numeros = [5, 10, 15, 20, 30, 40, 43];
const total = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador += valor;
  return acumulador;
}, 0);

const pares = numeros.reduce(function (acumulador, valor, indice, array) {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);

//Somar todos os elementos
console.log(total);
console.log(pares);
