import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Estilos globales y Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Componentes fijos (Encabezado y Pie de página)
import Header from './components/Navbar';
import Footer from './components/Footer';

// Páginas de la aplicación
import Home from './pages/Home';
import Proyecto from './pages/Proyecto';
import About from './pages/About';
import Comic from './pages/Comic';
import VerComic from './pages/VerComic';
import IndiceEscenas from './pages/IndiceEscenas'; // <-- IMPORTAMOS EL MAPA DE ESCENAS
import Contact from './pages/Contact';

/**
 * Componente principal App: Maneja la estructura general de la página
 * y la navegación (enrutamiento) entre todas las secciones.
 */
function App() {
  return (
    <div className="App">
      <Header />
      
      {/* Contenedor principal para el contenido de cada página */}
      <main className="flex-shrink-0 mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyecto" element={<Proyecto />} />
          <Route path="/about" element={<About />} />
          
          {/* Rutas del Cómic */}
          <Route path="/comic" element={<Comic />} />
          <Route path="/comic/mapa" element={<IndiceEscenas />} /> {/* <-- RUTA DE SELECCIÓN DE ESCENAS */}
          
          {/* Rutas del Visor de Escenas */}
          <Route path="/comic/ver" element={<VerComic />} />
          <Route path="/comic/ver/:capId" element={<VerComic />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;