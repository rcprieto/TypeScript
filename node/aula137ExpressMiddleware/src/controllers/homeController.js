exports.paginaInicial = (req, res) => {
  res.render("index");
  console.log(`Olha o que tem na session ${req.session.nome}`);
  return; //acaba aqui a função, não vai pra nenhum middleware depois
};

exports.trataPost = (req, res) => {
  res.send(req.body);
};
