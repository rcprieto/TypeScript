function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperar(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject(false);
      return;
    }

    setTimeout(() => {
      resolve(msg + " - Passei na Promise");
    }, tempo);
  });
}

// esperar("teste", rand(1, 3))
//   .then((valor) => {
//     console.log(valor);
//     return esperar("teste 2", rand(1, 3));
//   })
//   .then((valor) => {
//     console.log(valor);
//     return esperar("teste 3", rand(1, 3));
//   })
//   .then((valor) => {
//     console.log(valor);
//   });

async function executa() {
  const fase1 = await esperar("teste", rand(1, 3));
  console.log(fase1);
  const fase2 = await esperar("teste 1", rand(1, 3));
  console.log(fase2);
  const fase3 = await esperar("teste 2", rand(1, 3));
  console.log(fase3);
}

executa();
