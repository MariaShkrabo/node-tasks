import Router from 'express';
import TaskController from '../controllers/TaskController.js';

const router = new Router()

router.post('/tasks', TaskController.create);
router.get('/tasks', TaskController.getAll);
router.get('/tasks/:id', TaskController.getOne);

export default router;