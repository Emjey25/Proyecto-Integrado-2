import { Router } from 'express';
import { crearGenero, obtenerGeneros } from '../controllers/generoController.js';

const router = Router();

// Ruta POST para guardar un género: http://localhost:4000/api/generos
router.post('/', crearGenero);

// Ruta GET para listar los géneros: http://localhost:4000/api/generos
router.get('/', obtenerGeneros);

export default router;