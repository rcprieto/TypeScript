let dataInicio = new Date(2021, 01, 01, 00, 00, 00);
let timer;
const relogio = document.getElementById("timer");

function setarHora() {
  document.querySelector("#timer").innerHTML = setRelorio();
}

function iniciarTimer() {
  timer = setInterval(() => {
    dataInicio.setSeconds(dataInicio.getSeconds() + 1);
    setarHora();
  }, 1000);
}

function pausarTimer() {
  clearInterval(timer);
}

function setRelorio() {
  return dataInicio.toLocaleTimeString("pt-BR", {
    hours: false,
  });
}

document.addEventListener("click", function (e) {
  if (e.target.id === "Iniciar") {
    relogio.classList.remove("text-danger");
    iniciarTimer();
  } else if (e.target.id === "Zerar") {
    pausarTimer();

    relogio.classList.remove("text-danger");
    dataInicio = new Date(2021, 01, 01, 00, 00, 00);
    setarHora();
  } else if (e.target.id === "Pausar") {
    relogio.classList.add("text-danger");
    pausarTimer();
  }
});
