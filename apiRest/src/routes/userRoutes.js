import {
  Router,
} from 'express';

import userController from '../controllers/UserController';

import loginReq from '../middlewares/loginRequired';

const router = new Router();

// não deveria existir em um sistema, não mostra dados de usuários
router.get('/', userController.index);
router.get('/show', loginReq, userController.show);

router.post('/', userController.create);
router.put('/', loginReq, userController.update);
router.delete('/', loginReq, userController.delete);
// router.put('/:id', userController.update);
// router.delete('/:id', userController.delete);

export default router;
