import { Router } from 'express';
import contactController from '../controllers/contact.controller.js';

const router = Router();

router.get('/', contactController.getContacts);
router.get('/:id', contactController.getContactById);

export default router;
