const nomes = [
  "Elemento 1",
  "Elemento 2",
  "Elemento 3",
  "Elemento 4",
  "Elemento 5",
  "Elemento 6",
];
//0 1 2 3 4 5
//-5 -4 -3 -2 -1
//nomes.pop();
//console.log(nomes.splice(3, 2));
//console.log(nomes.splice(-2, 1));
nomes.splice(3, 0, "Elemento Novo", "Mais Um");
console.log(nomes);

nomes.splice(2, 1, "Apagou um", "Mais Um");
console.log(nomes);

const contatenado = [...nomes, "Rodrigo", ...[1, 2, 3]];
console.log(contatenado);
