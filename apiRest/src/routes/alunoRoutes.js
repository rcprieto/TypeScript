import {
  Router,
} from 'express';

import alunoController from '../controllers/AlunoController';
import loginReq from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginReq, alunoController.index);
router.post('/', loginReq, alunoController.create);
router.put('/:id', loginReq, alunoController.update);
router.get('/:id', loginReq, alunoController.show);
router.delete('/:id', loginReq, alunoController.delete);

export default router;
