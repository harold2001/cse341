import { Router } from 'express';
import contactController from '../controllers/contact.controller.js';

const router = Router();

router.get('/', contactController.getContacts);
router.get('/:id', contactController.getContactById);
router.post('/', contactController.createContact);
router.put('/:id', contactController.updateContactById);
router.delete('/:id', contactController.deleteContactById);

export default router;
