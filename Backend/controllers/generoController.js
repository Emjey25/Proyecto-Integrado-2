import Genero from '../models/Genero.js';

// Función para crear un nuevo género
export const crearGenero = async (req, res) => {
    try {
        const nuevoGenero = new Genero(req.body);
        await nuevoGenero.save();
        res.status(201).json(nuevoGenero);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear el género', error: error.message });
    }
};

// Función para obtener todos los géneros
export const obtenerGeneros = async (req, res) => {
    try {
        const generos = await Genero.find();
        res.status(200).json(generos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener los géneros', error: error.message });
    }
};