import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

// Assets
import helena2 from '../assets/helena2.svg';
import teatro from '../assets/MILESTRELLAS.png';

// Componentes decorativos
import { 
  IconoDestello, 
  DivisorRosas, 
  EsquinaRosas 
} from '../components/AdornosVisuales';

function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="home-wrapper">
      
      {/* HERO SECTION */}
      <section id="inicio" className="hero-section">
        {/* Fondo Parallax: Escenario */}
        <div
          className="hero-bg-stage"
          style={{
            backgroundImage: `linear-gradient(oklch(0.20 0.03 60 / 52%), oklch(0.20 0.03 60 / 52%)), url(${teatro})`,
            transform: `translateY(${offset * 0.15}px) scale(1.08)`,
          }}
          aria-hidden="true"
        />

        {/* Capa Parallax: Estrellas */}
        <div
          className="hero-bg-stars"
          style={{
            transform: `translateY(${offset * 0.28}px)`,
          }}
          aria-hidden="true"
        />

        {/* Aura de iluminación */}
        <div className="glow-aura hero-glow" aria-hidden="true" />

        {/* Contenido Principal */}
        <div className="container position-relative z-3 py-5 min-vh-100 d-flex align-items-center">
          <div className="row w-100 align-items-center gy-4">
            
            {/* Columna Texto */}
            <div className="col-12 col-lg-6 text-center text-lg-start">
              <p className="hero-tagline">
                Helenia presenta
              </p>
              <h1 className="hero-title">
                <IconoDestello /> La princesa ronca de oro <IconoDestello />
              </h1>
              <div className="gold-rule mx-auto mx-lg-0" />
              <p className="hero-subtitle mx-auto mx-lg-0">
                Una voz que desafió a un reino. Cómic interactivo transmedia.
              </p>
              <div className="mt-4 d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                <Link to="/comic" className="btn-helenia-lg">
                  Ver cómic
                </Link>
                <a href="#personajes" className="btn-outline-gold">
                  Conocer personajes
                </a>
              </div>
            </div>

            {/* Columna Personaje */}
            <div className="col-12 col-lg-6">
              <div className="hero-char-container">
                <div className="hero-char-shadow" aria-hidden="true" />
                <img
                  src={helena2}
                  alt="Helena, la cantante de voz grave"
                  className="hero-char-img"
                  style={{ transform: `translateY(${offset * -0.05}px)` }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Degradado inferior */}
        <div className="hero-bottom-fade" aria-hidden="true" />
      </section>

      {/* DIVISOR ORNAMENTAL */}
      <div className="container my-5">
        <DivisorRosas />
      </div>

      {/* SECCIÓN DE TARJETAS */}
      <section className="container cards-nav-section">
        <div className="row g-4 justify-content-center">
          
          {/* Tarjeta 1 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <Link to="/proyecto" className="h-nav-card shadow-sm position-relative">
              <EsquinaRosas posicion="top-left" />
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

          {/* Tarjeta 2 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <Link to="/about" className="h-nav-card shadow-sm position-relative">
              <EsquinaRosas posicion="top-left" />
              <div className="h-nav-card-content">
                <div className="h-icon-box">
                  <i className="bi bi-people"></i>
                </div>
                <h3 className="h-nav-title">Sobre nosotros</h3>
                <p className="h-nav-text">
                  Conoce a los personajes y creadores.
                </p>
              </div>
            </Link>
          </div>

          {/* Tarjeta 3 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <Link to="/comic" className="h-nav-card shadow-sm position-relative">
              <EsquinaRosas posicion="top-left" />
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

          {/* Tarjeta 4 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <Link to="/contact" className="h-nav-card shadow-sm position-relative">
              <EsquinaRosas posicion="top-left" />
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