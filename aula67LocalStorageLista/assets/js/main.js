let listaTarefas = document.querySelector("#tarefas");
let listaDeTaredas = [];
function criarTarefa(texto) {
  let li = document.createElement("li");
  li.innerText = texto;
  listaTarefas.appendChild(li);
}

document.addEventListener("click", function (event) {
  if (event.target.id === "btnAdicionar") {
    criarTarefa(document.querySelector("#texto").value);

    for (let tarefa of listaTarefas.querySelectorAll("li")) {
      listaDeTaredas.push(tarefa.innerText);
    }
    const tarefasJSON = JSON.stringify(listaDeTaredas);
    console.log(tarefasJSON);
    localStorage.setItem("tarefas", tarefasJSON);
  }
});

function pegarSalvas() {
  const tarefas = localStorage.getItem("tarefas");
  const jsonTarefas = JSON.parse(tarefas);

  for (let tarefa of jsonTarefas) {
    criarTarefa(tarefa);
  }
}

pegarSalvas();
