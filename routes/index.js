import { Router } from 'express';
import contactsRoutes from './contacts.routes.js';
import swaggerRoutes from './swagger.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use('/contacts', contactsRoutes);
router.use('/api-docs', swaggerRoutes);

export default router;
