exports.paginaInicial = (req, res) => {
  res.render("index", {
    titulo: "Este será o título",
    numeros: [1, 2, 3, 4, 5],
  });
  return;
};

exports.trataPost = (req, res) => {
  res.send("Nova rota de post");
  return;
};