import Director from '../models/Director.js';

// Función para crear un nuevo director
export const crearDirector = async (req, res) => {
    try {
        const nuevoDirector = new Director(req.body);
        await nuevoDirector.save();
        res.status(201).json(nuevoDirector);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear el director', error: error.message });
    }
};

// Función para obtener todos los directores
export const obtenerDirectores = async (req, res) => {
    try {
        const directores = await Director.find();
        res.status(200).json(directores);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener los directores', error: error.message });
    }
};