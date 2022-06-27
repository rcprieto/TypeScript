class HomeController {
  index(req, res) {
    return res.status(200).json('OK');
  }
}

export default new HomeController();
