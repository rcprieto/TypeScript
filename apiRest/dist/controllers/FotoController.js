"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _muterConfig = require('../config/muterConfig'); var _muterConfig2 = _interopRequireDefault(_muterConfig);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

const upload = _multer2.default.call(void 0, _muterConfig2.default).single('foto');

class FotoController {
  create(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error],
        });
      }

      try {
        const {
          originalname,
          filename,
        } = req.file;

        const {
          aluno_id,
        } = req.body;
        const foto = await _Foto2.default.create({
          originalname,
          filename,
          aluno_id,
        });
        return res.status(200).json(foto);
      } catch (err) {
        return res.status(400).json({
          errors: [err],
        });
      }
    });
  }
}

exports. default = new FotoController();
