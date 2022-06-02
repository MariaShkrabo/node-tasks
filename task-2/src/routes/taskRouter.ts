import Router from 'express';
import TaskController from '../controllers/TaskController';

const router = Router()

router.post('/tasks', TaskController.create);
router.get('/tasks', TaskController.getAll);
router.get('/tasks/:id', TaskController.getOne);
router.patch('/tasks/:id', TaskController.modify);
router.put('/tasks/:id', TaskController.replace);
router.delete('/tasks/:id', TaskController.delete);

export default router;
