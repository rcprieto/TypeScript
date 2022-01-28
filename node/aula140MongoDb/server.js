require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected!");
    app.emit("Ready");
  })
  .catch((e) => console.log(e));

const routes = require("./routes");
const path = require("path");

//Para passar param no body
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(routes);
//Só começa a rodar o sistema depois da conexão do DB
app.on("Ready", () => {
  app.listen(3200, () => {
    console.log(
      "Server Running on port 3200.",
      "Acessar http://localhost:3200"
    );
  });
});

//pelo terminal, acessar a pasta e rodar node server.js
//npm i nodemon --save-dev
//npx nodemon server.js (ou npm start)
