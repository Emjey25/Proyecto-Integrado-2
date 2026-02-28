import { Router } from 'express';
import { crearTipo, obtenerTipos } from '../controllers/tipoController.js';

const router = Router();

// Ruta POST: http://localhost:4000/api/tipos
router.post('/', crearTipo);

// Ruta GET: http://localhost:4000/api/tipos
router.get('/', obtenerTipos);

export default router;