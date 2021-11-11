const falar = {
  falar() {
    console.log(`${nome} falando`);
  },
};

const comendo = {
  comendo() {
    console.log(`${nome} comendo`);
  },
};

const pessoaPrototype = { ...falar, ...comendo };

function criarPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criarPessoa("Rodrigo", "Prieto");
console.log(p1);
