const express = require("express");
const app = express();

app.get("/", (req, res) => {
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
app.post("/", (req, res) => {
  res.send("Recebi o request:" + req.headers);
});

app.listen(3200, () => {
  console.log("Server Running on port 3200.", "Acessar http://localhost:3200");
});
