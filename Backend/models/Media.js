import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
    serial: {
        type: String,
        required: true,
        unique: true // Único 
    },
    titulo: {
        type: String,
        required: true // Título 
    },
    sinopsis: {
        type: String,
        required: true // Sinopsis 
    },
    urlPelicula: {
        type: String,
        required: true,
        unique: true // URL única 
    },
    imagenPortada: {
        type: String,
        required: true // Imagen o foto de portada 
    },
    anioEstreno: {
        type: Number,
        required: true // Año de estreno 
    },
    // Relaciones con los otros módulos
    generoPrincipal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genero',
        required: true // Género principal [cite: 75]
    },
    directorPrincipal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Director',
        required: true // Director principal 
    },
    productora: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Productora',
        required: true // Productora 
    },
    tipo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true // Tipo 
    }
}, {
    // Genera automáticamente 'fechaCreacion' [cite: 71] y 'fechaActualizacion' [cite: 73]
    timestamps: {
        createdAt: 'fechaCreacion',
        updatedAt: 'fechaActualizacion'
    }
});

export default mongoose.model('Media', mediaSchema);