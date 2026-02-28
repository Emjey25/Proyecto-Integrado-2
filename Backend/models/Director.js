import mongoose from 'mongoose';

const directorSchema = new mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        enum: ['Activo', 'Inactivo'],
        default: 'Activo'
    }
}, {
    // Genera automáticamente 'fechaCreacion' y 'fechaActualizacion'
    timestamps: {
        createdAt: 'fechaCreacion',
        updatedAt: 'fechaActualizacion'
    }
});

export default mongoose.model('Director', directorSchema);