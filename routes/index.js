import { Router } from 'express';
import contactsRoutes from './contacts.routes.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use('/contacts', contactsRoutes);

export default router;
