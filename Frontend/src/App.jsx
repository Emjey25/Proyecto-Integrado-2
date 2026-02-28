import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import ContinueWatching from './components/ContinueWatching';

function App() {
  return (
    // Contenedor principal: ocupa toda la pantalla, fondo muy oscuro y texto blanco
    <div className="flex h-screen bg-[#0f0f11] text-white font-sans overflow-hidden">

      {/* 1. SIDEBAR (Barra Lateral) */}
      <Sidebar />

      {/* 2. CONTENIDO PRINCIPAL */}
      <main className="flex-1 flex flex-col overflow-y-auto relative">

        {/* TopBar (Buscador y Perfil) */}
        <TopBar />

        {/* Hero Banner (Película destacada) */}
        <Hero />

        {/* Sección de Cuadrícula (Continue Watching) */}
        <ContinueWatching />

      </main>
    </div>
  );
}

export default App;