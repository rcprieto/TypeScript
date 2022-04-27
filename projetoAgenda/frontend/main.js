//Para rodar no IE
import "core-js/stable";
//Para rodar no IE
import "regenerator-runtime/runtime";

import "./assets/css/style.css";

import Login from './modules/Login';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();
//alert("Vem do main.js");