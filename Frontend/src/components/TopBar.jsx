import React from 'react';
import { FaSearch, FaBell, FaChevronLeft } from 'react-icons/fa';

const TopBar = () => {
    return (
        // Usamos absolute y z-20 para que flote p  or encima de la imagen de la película
        <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20 bg-gradient-to-b from-black/80 to-transparent">

            {/* 1. Botón de retroceso */}
            <button className="w-10 h-10 bg-[#141415]/80 backdrop-blur-md rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
                <FaChevronLeft />
            </button>

            {/* 2. Barra de Búsqueda */}
            <div className="flex items-center bg-[#141415]/80 backdrop-blur-md rounded-full px-5 py-2.5 w-[400px] border border-gray-800 focus-within:border-gray-500 transition-all ml-12">
                <FaSearch className="text-gray-400 mr-3 text-sm" />
                <input
                    type="text"
                    placeholder="Search everything"
                    className="bg-transparent text-sm text-white focus:outline-none w-full placeholder-gray-500"
                />
            </div>

            {/* 3. Notificaciones y Perfil */}
            <div className="flex items-center gap-6 pr-4">
                <button className="relative text-gray-400 hover:text-white transition-all">
                    <FaBell className="text-xl" />
                    {/* El puntito rojo de que tienes una notificación nueva */}
                    <span className="absolute -top-1 -right-1 bg-red-600 w-2.5 h-2.5 rounded-full border-2 border-[#0f0f11]"></span>
                </button>

                {/* Foto de perfil (usamos un avatar generado automáticamente para probar) */}
                <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent hover:border-gray-500 transition-all">
                    <img
                        src="https://ui-avatars.com/api/?name=Nexka&background=random&color=fff"
                        alt="Perfil"
                        className="w-full h-full object-cover"
                    />
                </button>
            </div>

        </header>
    );
};

export default TopBar;