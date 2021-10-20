const pessoa = {
  nome: "Rodrigo",
  sobrenome: "Prieto",
  endereco: {
    rua: "Casaa",
    numero: "60",
  },
};

const {
  endereco: { rua },
  nome,
} = pessoa;

console.log(rua, nome);
