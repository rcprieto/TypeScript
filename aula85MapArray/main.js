const numeros = [5, 10, 15, 20, 30, 40, 43];
const numerosDobro = numeros.map(function (valor, indice, array) {
  //console.log(valor, indice, array);
  return `Valor -> ${valor * 2}`;
});

//console.log(numerosDobro);

const pessoas = [
  { nome: "Stronghold", idade: 1 },
  {
    nome: "Lotlux",
    idade: 2,
  },
  {
    nome: "Tin",
    idade: 3,
  },
  {
    nome: "Sub-Ex",
    idade: 4,
  },
  {
    nome: "Trippledex",
    idade: 5,
  },
];

const nomes = pessoas.map(function (valor) {
  return { nome: valor.nome };
});
const idades = pessoas.map((valor) => valor.idade);
const comIds = pessoas.map(function (obj, indice) {
  const newObj = { ...obj };
  newObj.id = indice;
  return newObj;
});

console.log(nomes);
console.log(idades);
console.log(comIds);
