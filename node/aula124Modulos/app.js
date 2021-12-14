const path = require("path");
const axios = require("axios");
const mod1 = require("./mod1");
const { Pessoa } = require("./mod1");
//const falaNome = require("./mod1").falaNome;
//Desestruturação, quebra em cada nome
//const {nome, sobrenome, falaNome} = require("./mod1");

console.log(mod1.falaNome());
const p1 = new Pessoa("Rodrigo");
console.log(p1);

axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
  .then((response) => console.log(response.data))
  .catch((error) => console.log(e));
