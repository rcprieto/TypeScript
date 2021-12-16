const express = require("express");
const app = express();
const routes = require("./routes");

//Para passar param no bady
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3200, () => {
  console.log("Server Running on port 3200.", "Acessar http://localhost:3200");
});

//pelo terminal, acessar a pasta e rodar node server.js
//npm i nodemon --save-dev
//npx nodemon server.js (ou npm start)
