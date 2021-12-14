const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "..", "teste.json");
const escrever = require("./modules/escrever");
const ler = require("./modules/ler");

const pessoas = [
  { nome: "Nome 1" },
  { nome: "Nome 2" },
  { nome: "Nome 3" },
  { nome: "Nome 4" },
];

const json = JSON.stringify(pessoas);

escrever(caminhoArquivo, json);

//const arquivo = ler(caminhoArquivo).then((resposta) => console.log(resposta));

async function lerArquivo(caminho) {
  const dados = await ler(caminhoArquivo).then((resposta) => resposta);
  console.log(JSON.parse(dados));
}

lerArquivo(caminhoArquivo);
