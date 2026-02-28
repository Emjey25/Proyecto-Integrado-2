import mongoose from 'mongoose';

const productoraSchema = new mongoose.Schema({
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
    slogan: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
}, {
    // Mongoose vuelve a encargarse de las fechas automáticamente
    timestamps: {
        createdAt: 'fechaCreacion',
        updatedAt: 'fechaActualizacion'
    }
});

export default mongoose.model('Productora', productoraSchema);