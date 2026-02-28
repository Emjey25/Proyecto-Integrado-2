import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db/config.js';

// 1. IMPORTA LAS RUTAS AQUÍ (Recuerda poner la extensión .js)
import generoRoutes from './routes/generoRoutes.js';
import directorRoutes from './routes/directorRoutes.js';
import productoraRoutes from './routes/productoraRoutes.js';
import tipoRoutes from './routes/tipoRoutes.js'
import mediaRoutes from './routes/mediaRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 2. DILE A EXPRESS QUE USE TUS RUTAS AQUÍ
app.use('/api/generos', generoRoutes);
app.use('/api/directores', directorRoutes);
app.use('/api/productoras', productoraRoutes);
app.use('/api/tipos', tipoRoutes);
app.use('/api/medias', mediaRoutes);

app.get('/', (req, res) => {
    res.send('API de Películas IUDigital funcionando correctamente 🚀');
});

const startServer = async () => {
    await connectDB();
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
    });
};

startServer();