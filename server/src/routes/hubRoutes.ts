import { Router } from 'express';
import { HubController } from '../controllers/hubController.js';

const router = Router();

router.get('/', HubController.getAll);
router.get('/:id', HubController.getById);

export default router;
