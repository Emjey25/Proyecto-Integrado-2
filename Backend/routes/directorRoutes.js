import { Router } from 'express';
import { crearDirector, obtenerDirectores } from '../controllers/directorController.js';

const router = Router();

// Ruta POST: http://localhost:4000/api/directores
router.post('/', crearDirector);

// Ruta GET: http://localhost:4000/api/directores
router.get('/', obtenerDirectores);

export default router;