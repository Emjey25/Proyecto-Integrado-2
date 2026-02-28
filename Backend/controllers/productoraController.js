import Productora from '../models/Productora.js';

// Función para crear una nueva productora
export const crearProductora = async (req, res) => {
    try {
        const nuevaProductora = new Productora(req.body);
        await nuevaProductora.save();
        res.status(201).json(nuevaProductora);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear la productora', error: error.message });
    }
};

// Función para obtener todas las productoras
export const obtenerProductoras = async (req, res) => {
    try {
        const productoras = await Productora.find();
        res.status(200).json(productoras);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener las productoras', error: error.message });
    }
};