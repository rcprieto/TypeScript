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

//Assincrono
// esperar("Frase 1", rand(1, 3))
//   .then((resposta) => {
//     console.log(resposta);
//     return esperar("Frase 2", rand(1, 3));
//   })
//   .then((resposta) => {
//     console.log(resposta);
//     return esperar("Frase 3", rand(1, 3));
//   })
//   .then((resposta) => {
//     console.log(resposta);
//   })
//   .then(() => {
//     console.log("Último a ser exibido");
//   })
//   .catch((e) => {
//     console.log(e.message);
//   });

//console.log("Primeiro a ser exibido");

//Promise.all
//Promise.race
//Promise.resolve
//Promise.reject

const promises = [
  esperar("Promise 1", 3000),
  esperar("Promise 2", 500),
  esperar("Promise 3", 1000),
];

//Resolve todos juntos
Promise.all(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (error) {
    console.log(error);
  });

//O primeiro a ser resolvido
Promise.race(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (error) {
    console.log(error);
  });

function baixaPagina() {
  const emCache = true;
  if (emCache) {
    //Retorna um Promise
    return Promise.resolve("Página em cache");
  } else {
    return esperar("Pagina do cache", 3000);
  }
}

baixaPagina()
  .then((dados) => {
    console.log(dados);
  })
  .catch((e) => console.log("ERRO", e));
