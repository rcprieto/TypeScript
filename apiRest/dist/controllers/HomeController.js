"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  index(req, res) {
    return res.status(200).json('OK');
  }
}

exports. default = new HomeController();
