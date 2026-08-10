import React from 'react';
import { Link } from 'react-router-dom';
// Estilos específicos para la vista principal
import '../styles/Home.css';
// Imagen principal del banner (Hero)
import heroImg from '../assets/hero.png';

/**
 * Componente Home: Página principal que sirve de entrada a la plataforma.
 * Muestra una sección Hero interactiva y accesos directos en tarjetas responsivas.
 */
function Home() {
  return (
    <div className="home-wrapper">
      
      {/* SECCIÓN HERO / BANNER PRINCIPAL */}
      <section 
        className="hero-section" 
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-7 offset-md-5 text-center text-md-end pe-md-5">
              <h1 className="hero-title">La princesa ronca de oro</h1>
              {/* Botón directo a la sección de cómics */}
              <Link to="/comic" className="btn-helenia-lg mt-3 shadow">
                Ver cómic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE NAVEGACIÓN POR TARJETAS */}
      <section className="container cards-nav-section">
        <div className="row g-4 justify-content-center">
          
          {/* Tarjeta 1: Proyecto */}
          <div className="col-12 col-sm-6 col-lg-3">
            <Link to="/proyecto" className="h-nav-card shadow-sm">
              <div className="h-nav-card-content">
                <div className="h-icon-box">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <h3 className="h-nav-title">Proyecto</h3>
                <p className="h-nav-text">
                  Descubre la historia y propósito detrás de Helenia.
                </p>
              </div>
            </Link>
          </div>

          {/* Tarjeta 2: Sobre Nosotros */}
          <div className="col-12 col-sm-6 col-lg-3">
            <Link to="/about" className="h-nav-card shadow-sm">
              <div className="h-nav-card-content">
                <div className="h-icon-box">
                  <i className="bi bi-people"></i>
                </div>
                <h3 className="h-nav-title">Sobre nosotros</h3>
                <p className="h-nav-text">
                  Conoce a los personajes
                </p>
              </div>
            </Link>
          </div>

          {/* Tarjeta 3: Cómic */}
          <div className="col-12 col-sm-6 col-lg-3">
            <Link to="/comic" className="h-nav-card shadow-sm">
              <div className="h-nav-card-content">
                <div className="h-icon-box">
                  <i className="bi bi-book"></i>
                </div>
                <h3 className="h-nav-title">Cómic</h3>
                <p className="h-nav-text">
                  Explora los capítulos y sumérgete en la narrativa.
                </p>
              </div>
            </Link>
          </div>

          {/* Tarjeta 4: Contacto */}
          <div className="col-12 col-sm-6 col-lg-3">
            <Link to="/contact" className="h-nav-card shadow-sm">
              <div className="h-nav-card-content">
                <div className="h-icon-box">
                  <i className="bi bi-envelope-at"></i>
                </div>
                <h3 className="h-nav-title">Contacto</h3>
                <p className="h-nav-text">
                  Escríbenos tus dudas o sugerencias directamente.
                </p>
              </div>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;