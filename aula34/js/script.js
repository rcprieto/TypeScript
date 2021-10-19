function meuEscopo() {
  const form = document.querySelector(".formulario");
  /* form.onsubmit = function (event) {
    event.preventDefault();
  }; */

  const pessoas = [];
  function receberEventoForm(evento) {
    evento.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });
    console.log(pessoas);
  }

  form.addEventListener("submit", receberEventoForm);
}

meuEscopo();
