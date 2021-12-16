const express = require("express");
const app = express();
//para passar parametros no post no body
app.use(express.urlencoded({ extended: true }));

//CRUD CREATE (POST), READ (GET), UPDATE(PUT), DELETE (DELETE)

app.get("/", (req, res) => {
  //res.send("Hello World");
  res.send(`
  <form action='/' method='POST'>
  Nome: <input type='text' name='Nome'/>
  <button>Enviar Formulário</button>
  </form>
  `);
});

app.get("/contato", (req, res) => {
  res.send("Obrigado por entrar em contato!");
});

app.get("/teste/:idUser?/:parametro", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params);
});

app.post("/", (req, res) => {
  res.send(req.body.Nome);
  res.send(req.body);
  res.send("Recebi o rquest:" + req.headers);
});

app.listen(3200, () => {
  console.log("Server Running on port 3200.", "Acessar http://localhost:3200");
});

//pelo terminal, acessar a pasta e rodar node server.js
//npm i nodemon --save-dev
//npx nodemon server.js (ou npm start)
