import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} from '../controllers/tasks.controllers.js'

const router = Router();
B
router.get('/tasks', authRequired, );
router.get('/tasks/:id', authRequired, );
router.post('/tasks', authRequired, );
router.delete('/tasks/:id', authRequired, );
router.put('/tasks/:id', authRequired, );

export default router;