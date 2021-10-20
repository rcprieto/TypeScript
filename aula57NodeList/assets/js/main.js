const paragrafo = document.querySelector(".paragrafo");
const ps = paragrafo.querySelectorAll("p");
const estiloBody = getComputedStyle(document.body);
const bgGround = estiloBody.backgroundColor;

for (let p of ps) {
  p.style.backgroundColor = bgGround;
  p.style.color = "white";
}
