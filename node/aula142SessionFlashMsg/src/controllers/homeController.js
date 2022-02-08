exports.paginaInicial = (req, res) => {
  req.session.usuario = { nome: "Luiz", logado: true };
  console.log(req.session.usuario);

  req.flash("info", "Olá Mundo");
  req.flash("error", "Erro Aqui");
  req.flash("success", "Processou");

  //o flash some depois de mostrar a primeira vez, ela fica sem sessão até ser mostrada
  console.log(req.flash("error"));

  res.render("index");
};

exports.trataPost = (req, res) => {
  res.send("Nova rota de post");
};
