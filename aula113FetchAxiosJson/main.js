function carregaPagina(json) {
  const table = document.createElement("table");
  for (let pessoa of json) {
    const tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = pessoa.email;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = pessoa.cpf;
    tr.appendChild(td);

    table.appendChild(tr);
  }

  document.querySelector(".resultado").appendChild(table);
}

// fetch("pessoas.json")
//   .then((resposta) => resposta.json())
//   .then((json) => carregaPagina(json));

axios("pessoas.json").then((resposta) => carregaPagina(resposta.data));
