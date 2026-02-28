import mongoose from 'mongoose';

const generoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    estado: {
        type: String,
        enum: ['Activo', 'Inactivo'],
        default: 'Activo'
    },
    descripcion: {
        type: String,
        required: true
    }
}, {
    // Esto crea automáticamente 'fechaCreacion' y 'fechaActualizacion'
    timestamps: {
        createdAt: 'fechaCreacion',
        updatedAt: 'fechaActualizacion'
    }
});

export default mongoose.model('Genero', generoSchema);