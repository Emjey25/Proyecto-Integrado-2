import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaChevronDown } from 'react-icons/fa';
import { obtenerMedias } from '../services/api';

const ContinueWatching = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await obtenerMedias();
                // Mapeamos los datos del backend al formato que espera el componente
                const mappedMovies = data.map(media => ({
                    id: media._id,
                    title: media.titulo,
                    subtitle: media.tipo?.nombre || 'Película',
                    image: media.imagenPortada,
                    user: media.directorPrincipal?.nombres || 'Director',
                    userType: media.productora?.nombre || 'Productora'
                }));
                setMovies(mappedMovies);
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) {
        return (
            <div className="p-8 text-center text-gray-400">
                <p className="animate-pulse">Cargando películas...</p>
            </div>
        );
    }

    if (movies.length === 0) {
        return (
            <div className="p-8 text-center text-gray-500 italic">
                No hay producciones disponibles en este momento.
            </div>
        );
    }

    return (
        <section className="p-8 relative z-10 -mt-20">
            {/* Cabecera de la sección (Título, barra de progreso y botón de Popular) */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-6">
                    <h2 className="text-2xl font-bold text-white drop-shadow-md">Continue Watching</h2>
                    {/* Barra roja decorativa */}
                    <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div className="w-8 h-full bg-red-600 rounded-full"></div>
                    </div>
                </div>

                {/* Botón desplegable */}
                <button className="flex items-center gap-3 bg-[#1a1a1e] px-4 py-2 rounded-xl text-sm font-semibold border border-gray-800 hover:border-gray-600 transition-all">
                    Popular <FaChevronDown className="text-gray-400 text-xs" />
                </button>
            </div>

            {/* Cuadrícula de tarjetas */}
            <div className="grid grid-cols-4 gap-6">
                {movies.map((movie) => (
                    <div key={movie.id} className="flex flex-col group cursor-pointer">
                        {/* Imagen de la tarjeta */}
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-4 shadow-lg group-hover:scale-[1.03] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
                            <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>

                            {/* Textos sobre la imagen */}
                            <div className="absolute bottom-4 left-4">
                                <h3 className="font-bold text-white text-lg leading-tight uppercase">{movie.title}</h3>
                                <p className="text-gray-300 text-[10px] font-semibold tracking-wider uppercase">{movie.subtitle}</p>
                            </div>
                        </div>

                        {/* Fila del usuario (Avatar + Nombre) */}
                        <div className="flex items-center gap-3 px-1">
                            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-[10px] font-bold text-red-500 border border-gray-700">
                                {movie.user.charAt(0)}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-sm font-bold text-gray-200">{movie.user}</span>
                                    <FaCheckCircle className="text-green-500 text-[10px]" />
                                </div>
                                <span className="text-[10px] text-gray-500 font-medium">{movie.userType}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ContinueWatching;