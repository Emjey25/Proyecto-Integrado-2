import mongoose from 'mongoose';

const tipoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true // Para que no podamos crear dos veces el tipo "Película"
    },
    descripcion: {
        type: String,
        required: true
    }
}, {
    // Genera automáticamente 'fechaCreacion' y 'fechaActualizacion'
    timestamps: {
        createdAt: 'fechaCreacion',
        updatedAt: 'fechaActualizacion'
    }
});

export default mongoose.model('Tipo', tipoSchema);