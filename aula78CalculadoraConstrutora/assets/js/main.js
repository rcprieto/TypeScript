function Calculadora(display) {
  this.display = display;

  this.iniciar = function () {
    this.cliqueBotoes();
    this.pressionaEnter();
    this.display.focus();
  };

  const clearDisplay = () => (this.display.value = "");
  const apagaUm = () => (this.display.value = this.display.value.slice(0, -1));
  const addNumDisplay = (valor) => {
    this.display.value += valor;
    this.display.focus();
  };

  const realizaConta = () => {
    try {
      this.display.value = eval(this.display.value);
    } catch (e) {
      alert("Conta Inválida: " + e.message);
    }
  };

  this.pressionaEnter = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        realizaConta();
      }
    });
  };

  this.cliqueBotoes = () => {
    document.addEventListener("click", function (e) {
      const el = e.target;
      if (el.classList.contains("btn-num")) btnParaDisplay(el.innerText);
      if (el.classList.contains("btn-clear")) clearDisplay();
      if (el.classList.contains("btn-del")) apagaUm();
      if (el.classList.contains("btn-eq")) realizaConta();
    });
  };
}

const calculadora = new Calculadora(document.querySelector(".display"));
calculadora.iniciar();
