import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Estilos globales y Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Componentes fijos
import Header from './components/Navbar';
import Footer from './components/Footer';

// Tus 5 páginas (Asegúrate de que los nombres de archivo sean exactos)
import Home from './pages/Home';
import Proyecto from './pages/Proyecto';
import About from './pages/About';
import Comic from './pages/Comic';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* Aquí es donde ocurre la magia de las 5 páginas */}
      <main className="flex-shrink-0 mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyecto" element={<Proyecto />} />
          <Route path="/about" element={<About />} />
          <Route path="/comic" element={<Comic />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;