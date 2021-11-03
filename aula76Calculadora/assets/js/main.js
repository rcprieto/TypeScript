function criaCalculador() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
      this.display.focus();
    },
    clearDisplay() {
      this.display.value = "";
    },
    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },
    realizaConta() {
      try {
        console.log(eval(this.display.value));
        this.display.value = eval(this.display.value);
      } catch (e) {
        alert("Conta Inválida: " + e.message);
      }
    },
    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },
    cliqueBotoes() {
      document.addEventListener(
        "click",
        function (e) {
          const el = e.target;
          if (el.classList.contains("btn-num")) {
            //esse this vendo do bind(this), sem o bind o this seria da funciont(e)
            this.btnParaDisplay(el.innerText);
          }
          if (el.classList.contains("btn-clear")) {
            this.clearDisplay();
          }
          if (el.classList.contains("btn-del")) {
            this.apagaUm();
          }
          if (el.classList.contains("btn-eq")) {
            this.realizaConta();
          }

          //Usar o bind para passar o this da calculadora e não do function(e)
        }.bind(this)
      );
    },
    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculador();
calculadora.inicia();
