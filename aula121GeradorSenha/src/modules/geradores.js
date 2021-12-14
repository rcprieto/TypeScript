const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const simbolos = ",.;~[]{}@#$%()_+=-!?";

//ASCII 65, 91 ver na tabela ascii
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
//ASCII 97, 123 ver na tabela ascii
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const geraSimbolos = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(
  qtd,
  maiuscula,
  minuscula,
  numeros,
  simbolos
) {
  const senhaArray = [];
  qtd = Number(qtd);
  for (let i = 0; i < qtd; i++) {
    maiuscula && senhaArray.push(geraMaiuscula());
    minuscula && senhaArray.push(geraMinuscula());
    numeros && senhaArray.push(geraNumero());
    simbolos && senhaArray.push(geraSimbolos());
  }
  return senhaArray.join("").slice(0, qtd);
}
