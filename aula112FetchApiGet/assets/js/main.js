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
  const response = await fetch(href);

  if (response.status !== 200) throw new Error("ERROR 404");
  const html = await response.text();

  document.querySelector(".conteudo").innerHTML = html;
}
