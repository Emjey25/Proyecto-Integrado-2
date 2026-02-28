import React from 'react';
// Importamos los íconos que vamos a usar
import { FaCompass, FaFire, FaUserFriends, FaVideo, FaListUl } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#0a0a0c] border-r border-gray-800 flex flex-col h-full z-20">

      {/* 1. Logo */}
      <div className="p-6 text-xl font-bold flex items-center gap-3">
        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-sm shadow-[0_0_10px_rgba(220,38,38,0.5)]">
          N
        </div>
        <span>Neska<span className="text-red-600">Movie</span></span>
      </div>

      {/* 2. Menú Principal */}
      <div className="flex-1 px-4 mt-2">
        <p className="text-xs text-gray-500 font-semibold mb-4 ml-2 uppercase tracking-wider">
          News Feed
        </p>

        <nav className="space-y-1">
          {/* Botón Activo (Browse) con fondo rojo */}
          <a href="#" className="flex items-center gap-4 bg-red-600 text-white px-4 py-3 rounded-xl font-medium shadow-[0_4px_15px_rgba(220,38,38,0.3)] transition-all cursor-pointer">
            <FaCompass className="text-lg" />
            Browse
          </a>

          {/* Enlaces inactivos (se iluminan al pasar el mouse) */}
          <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white px-4 py-3 rounded-xl font-medium transition-all hover:bg-gray-800/50 cursor-pointer">
            <FaFire className="text-lg" />
            Trending
          </a>
          <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white px-4 py-3 rounded-xl font-medium transition-all hover:bg-gray-800/50 cursor-pointer">
            <FaUserFriends className="text-lg" />
            Following
          </a>
          <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white px-4 py-3 rounded-xl font-medium transition-all hover:bg-gray-800/50 cursor-pointer">
            <FaVideo className="text-lg" />
            Your Videos
          </a>
          <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white px-4 py-3 rounded-xl font-medium transition-all hover:bg-gray-800/50 cursor-pointer">
            <FaListUl className="text-lg" />
            Playlist
          </a>
        </nav>
      </div>

    </aside>
  );
};

export default Sidebar;