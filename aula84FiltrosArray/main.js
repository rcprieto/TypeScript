const number = [5, 10, 3, 4, 34, 43, 9, 7, 40, 2, 100];

function callBackFilter(valor, indice, array) {
  if (valor > 10) {
    return true;
  } else {
    return false;
  }
}

const filtrados = number.filter(callBackFilter);
const filtradosMenor = number.filter((valor) => {
  return valor > 10;
});
const filtradoMinimo = number.filter((valor) => valor > 10);

console.log(filtradosMenor);

const pessoas = [
  { nome: "Rodrigo", idade: 25 },
  { nome: "Felipe", idade: 35 },
  { nome: "Clarissa", idade: 15 },
  { nome: "Teste", idade: 5 },
  { nome: "Novo", idade: 100 },
];

const pessoasFiltradas = pessoas.filter(function (valor) {
  return valor.nome.length > 6;
});

const pessoas50Anos = pessoas.filter((obj) => obj.idade >= 50);
const pessoasTerminaA = pessoas.filter((obj) =>
  obj.nome.toLowerCase().endsWith("a")
);

console.log(pessoasFiltradas);
console.log(pessoas50Anos);
console.log(pessoasTerminaA);
