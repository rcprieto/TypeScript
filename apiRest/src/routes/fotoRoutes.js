import {
  Router,
} from 'express';

import fotoController from '../controllers/FotoController';
import loginReq from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginReq, fotoController.create);

export default router;
