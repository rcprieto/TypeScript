const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();
    xhr.addEventListener("load", (e) => {
      if (xhr.status >= 200 && xhr.status < 300) {
        obj.resolve(xhr.responseText);
      } else {
        obj.reject(xhr.status);
      }
    });
  });
};

document.addEventListener("click", (e) => {
  const el = e.target;
  e.preventDefault();
  const tag = el.tagName.toLowerCase();
  if (tag === "a") {
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute("href");
  const objConfig = {
    method: "GET",
    url: href,
  };
  try {
    const resposta = await request(objConfig);
    document.querySelector(".conteudo").innerHTML = response;
  } catch (e) {
    console.log(e);
  }

  // .then((response) => {

  // })
  // .catch((error) => console.log(error));
}
