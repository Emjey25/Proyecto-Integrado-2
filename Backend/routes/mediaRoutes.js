import { Router } from 'express';
import { crearMedia, obtenerMedias } from '../controllers/mediaController.js';

const router = Router();

// Ruta POST: http://localhost:4000/api/medias
router.post('/', crearMedia);

// Ruta GET: http://localhost:4000/api/medias
router.get('/', obtenerMedias);

export default router;