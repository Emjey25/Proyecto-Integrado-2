import Tipo from '../models/Tipo.js';

// Función para crear un nuevo tipo de multimedia
export const crearTipo = async (req, res) => {
    try {
        const nuevoTipo = new Tipo(req.body);
        await nuevoTipo.save();
        res.status(201).json(nuevoTipo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear el tipo', error: error.message });
    }
};

// Función para obtener todos los tipos
export const obtenerTipos = async (req, res) => {
    try {
        const tipos = await Tipo.find();
        res.status(200).json(tipos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener los tipos', error: error.message });
    }
};