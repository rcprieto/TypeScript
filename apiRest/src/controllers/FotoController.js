import multer from 'multer';
import multerConfig from '../config/muterConfig';
import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

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
        const foto = await Foto.create({
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

export default new FotoController();
