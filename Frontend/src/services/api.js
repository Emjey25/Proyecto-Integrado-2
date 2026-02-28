import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
});

export const obtenerMedias = async () => {
    try {
        const respuesta = await api.get('/medias');
        return respuesta.data;
    } catch (error) {
        console.error('Error al obtener producciones:', error);
        throw error;
    }
};

export default api;
