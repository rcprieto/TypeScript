const express = require("express");
const app = express();

//CRUD CREATE (POST), READ (GET), UPDATE(PUT), DELETE (DELETE)

app.get("/", (req, res) => {
  //res.send("Hello World");
  res.send(`
  <form action='/' method='POST'>
  Nome: <input type='text' name='Nome'/>
  <button>Enviar</button>
  </form>
  `);
});

app.get("/contato", (req, res) => {
  res.send("Obrigado por entrar em contato!");
});
app.post("/", (req, res) => {
  res.send("Recebi o rquest:" + req.headers);
});

app.listen(3200, () => {
  console.log("Server Running on port 3200.", "Acessar http://localhost:3200");
});

//pelo terminal, acessar a pasta e rodar node server.js
