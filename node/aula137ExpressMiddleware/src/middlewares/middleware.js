exports.middlewareGlobal = (req, res, next) => {
  if (req.body.nome) {
    console.log("");
    console.log("Passei no middleware global");
    console.log("");
  }
  next();
};
