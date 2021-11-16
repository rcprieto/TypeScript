class ValidaFormulario {
  constructor() {
    this.formulario = document.getElementById("formulario");
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposValidos();
    const senhasValidas = this.senhasSaoValidas();

    if (camposValidos && senhasValidas) {
      alert("Formulário OK");
      this.formulario.submit();
    }
  }

  camposValidos() {
    let valid = true;

    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      if (!campo.value) {
        const label = campo.previousElementSibling.innerText;
        valid = false;
        this.criaErro(campo, `Campo ${label} não pode estar em branco.`);
      }

      if (campo.classList.contains("cpf")) {
        if (!this.validaCPF(campo)) {
          valid = false;
        }
      }

      if (campo.classList.contains("usuario")) {
        if (!this.validaUsuario(campo)) {
          valid = false;
        }
      }
    }

    return valid;
  }

  criaErro(campo, msg) {
    const div = document.createElement("div");

    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);
    if (!cpf.valida()) {
      this.criaErro(campo, "CPF Inválido");
      return false;
    }
    return true;
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    if (usuario.length > 12 || usuario < 3) {
      this.criaErro(campo, "Não pode ser menor que 3 nem maior que 12 char");
      return false;
    }
    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(
        campo,
        "Nome de usuário precisa ter apenas letras e/ou números."
      );
      return false;
    }

    return true;
  }

  senhasSaoValidas() {
    let valid = true;
    const senha = this.formulario.querySelector(".senha");
    const repetirSenha = this.formulario.querySelector(".repetir-senha");

    if (senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, "Campos senha e repetir senhas devems ser iguais");
      this.criaErro(
        repetirSenha,
        "Campos senha e repetir senhas devems ser iguais"
      );
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      this.criaErro(senha, "O tamanho da senha deve ser entre 6 e 12");
      valid = false;
    }
    return valid;
  }
}

const valida = new ValidaFormulario();
