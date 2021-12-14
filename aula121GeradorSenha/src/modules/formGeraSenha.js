import geraSenha from "./geradores";

const senhaGerada = document.querySelector(".senha-gerada");
const qtdCaracters = document.querySelector(".qtd-caract");
const chkMaiuscula = document.querySelector(".chk-maiuscula");
const chkMinuscula = document.querySelector(".chk-minuscula");
const chkNumeros = document.querySelector(".chk-numeros");
const chkSimbolos = document.querySelector(".chk-simbolos");
const btnGerar = document.querySelector(".gerar-senha");

export default () => {
  btnGerar.addEventListener("click", () => {
    senhaGerada.innerHTML = gerar();
  });
};

function gerar() {
  const senha = geraSenha(
    qtdCaracters.value,
    chkMaiuscula.checked,
    chkMinuscula.checked,
    chkNumeros.checked,
    chkSimbolos.checked
  );

  return senha || "Nenhuma qtd informada!";
}
