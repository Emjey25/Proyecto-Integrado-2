import React from 'react';
import { FaImdb } from 'react-icons/fa';

const Hero = () => {
    return (
        // Contenedor principal con la imagen de fondo (usamos una en alta calidad de TMDB)
        <div
            className="relative h-[65vh] w-full bg-cover bg-[center_top]"
            style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/hHDNOlATHhre4eZ7aYz5cdyJLik.jpg')` }}
        >
            {/* 1. Gradientes superpuestos (Para oscurecer los bordes y fusionar con el fondo negro de la app) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f11] via-[#0f0f11]/70 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-transparent to-transparent"></div>

            {/* 2. Contenedor de Textos y Botones */}
            <div className="absolute bottom-16 left-12 z-10 max-w-2xl">

                {/* Badge de "Live" y "NETFLIX" */}
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-red-600/20 text-red-500 font-bold px-3 py-1.5 rounded-full text-xs flex items-center gap-2 backdrop-blur-sm border border-red-500/30">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        Live
                    </span>
                    <span className="text-gray-200 font-bold tracking-widest text-sm uppercase drop-shadow-md">
                        NeskaMovies
                    </span>
                </div>

                {/* Título principal */}
                <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-xl tracking-tight">
                    Exterminio:El templo de huesos
                </h1>

                {/* Metadatos (IMDb, Idioma) */}
                <div className="flex items-center gap-6 text-sm text-gray-300 mb-8">
                    <div className="flex items-center gap-2 font-bold text-white bg-black/40 px-3 py-1 rounded-lg backdrop-blur-sm">
                        <FaImdb className="text-[#f5c518] text-2xl" />
                        <span className="text-lg">7.8</span>
                    </div>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                    <div className="flex items-center gap-2 font-medium">
                        <img src="https://flagcdn.com/w20/us.png" alt="USA" className="w-5 rounded-sm" />
                        English
                    </div>
                </div>

                {/* Botón de Watch */}
                <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-3.5 rounded-2xl font-bold text-lg transition-all shadow-[0_4px_25px_rgba(220,38,38,0.4)] hover:scale-105 hover:shadow-[0_4px_30px_rgba(220,38,38,0.6)]">
                    Watch
                </button>
            </div>

        </div>
    );
};

export default Hero;