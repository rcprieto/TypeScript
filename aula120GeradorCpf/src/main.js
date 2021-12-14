import GeraCPF from "./modules/GeraCPF.js";
import "./assets/css/style.css";

(function () {
  const cpfGerado = document.querySelector(".cpf-gerado");
  const gera = new GeraCPF();
  cpfGerado.innerHTML = gera.geraNovoCpf();
})();
