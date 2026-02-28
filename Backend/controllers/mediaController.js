import Media from '../models/Media.js';

// Función para crear una nueva película o serie
export const crearMedia = async (req, res) => {
    try {
        const nuevaMedia = new Media(req.body);
        await nuevaMedia.save();
        res.status(201).json(nuevaMedia);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear la producción', error: error.message });
    }
};

// Función para obtener todas las producciones
export const obtenerMedias = async (req, res) => {
    try {
        // Usamos populate para traer los datos reales en lugar de solo los IDs
        const medias = await Media.find()
            .populate('generoPrincipal', 'nombre estado')
            .populate('directorPrincipal', 'nombres estado')
            .populate('productora', 'nombre estado')
            .populate('tipo', 'nombre');
            
        res.status(200).json(medias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener las producciones', error: error.message });
    }
};