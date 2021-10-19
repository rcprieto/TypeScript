const form = document.querySelector("#formulario");
const formato = {
  maximumFractionDigits: 1,
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const altura = Number(e.target.querySelector("#altura").value);
  const peso = Number(e.target.querySelector("#peso").value);
  if (altura && peso) calcularImc(peso, altura);
  else setResultado("Valores informados inválidos!", false);
});

function calcularImc(peso, altura) {
  const nivel = [
    "Abaixo do peso",
    "Peso Normal",
    "Sobrepeso",
    "Obesidade 1",
    "Obesidade 2",
    "Obesidade 3",
  ];

  const imc = peso / altura ** 2;
  let resultado;
  if (imc >= 39.9) resultado = nivel[5];
  else if (imc >= 34.9) resultado = nivel[4];
  else if (imc >= 29.9) resultado = nivel[3];
  else if (imc >= 24.9) resultado = nivel[2];
  else if (imc >= 18.5) resultado = nivel[1];
  else if (imc < 18.9) resultado = nivel[0];
  setResultado(
    `Seu IMC é de: ${imc.toLocaleString("pt-BR", formato)} Valor: ${resultado}`,
    true
  );
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  const p = createP();
  if (isValid) {
    p.innerHTML = msg;
    p.classList.add("alert");
    p.classList.add("alert-success");
  } else {
    p.innerHTML = msg;
    p.classList.add("alert");
    p.classList.add("alert-danger");
  }
  resultado.appendChild(p);
}
function createP() {
  const p = document.createElement("p");
  return p;
}
