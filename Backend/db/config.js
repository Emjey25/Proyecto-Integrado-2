import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        // Usamos la variable de entorno, o una base de datos local por defecto
        const url = process.env.MONGO_URI ;
        
        await mongoose.connect(url);
        console.log('✅ ¡Conexión exitosa a la base de datos de películas!');
    } catch (error) {
        console.error('❌ Error al conectar a MongoDB:', error.message);
        process.exit(1); // Detiene la aplicación si la base de datos falla
    }
};