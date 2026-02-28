import { Router } from 'express';
import { crearProductora, obtenerProductoras } from '../controllers/productoraController.js';

const router = Router();

// Ruta POST: http://localhost:4000/api/productoras
router.post('/', crearProductora);

// Ruta GET: http://localhost:4000/api/productoras
router.get('/', obtenerProductoras);

export default router;