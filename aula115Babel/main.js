const nome = "Rodrigo";
const obj = { nome, cpf };
const novo = { ...obj };
console.log(novoObj);
//npx babel main.js -o bundle.js --presets=@babel/env
//gera o bundle.js que é o js para rodar em navegadores antigos
//colocar no package.json em script e no terminal rodar o babel ou o nome que colcoar no script, exemploe npm babel, vai ficar rodando sem parar
