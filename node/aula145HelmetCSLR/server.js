require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {
  checkCsrfError,
  csrfMiddleware
} = require("./src/middlewares/middleware");

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


const session = require("express-session");
//Salva as sessões no mongo em vez de no servidor
const MongoStore = require("connect-mongo")(session);
const flash = require("connect-flash");
const routes = require("./routes");
const path = require("path");

//Segurança 
const helmet = require('helmet');
//Para CORS
const csrf = require('csurf');

const sessionOption = session({
  secret: "JKanhskhashujnaJHhnkjNHAIUHDs#343jaçã#@",
  store: new MongoStore({
    mongoUrl: process.env.CONNECTIONSTRING
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

//Para passar param no body
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.json());
app.use(helmet());
app.use(sessionOption);
app.use(flash());
app.use(csrf());
app.use(checkCsrfError)
app.use(csrfMiddleware)

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