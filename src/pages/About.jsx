import React from 'react';
// Importación de los estilos CSS específicos de esta vista
import '../styles/About.css';

// Importación de componentes vectoriales ornamentales
import { EsquinaRosas, DivisorRosas, IconoDestello } from '../components/AdornosVisuales';

// Assets de imágenes
import logoHelenia from '../assets/logo.png'; 
import creador1 from '../assets/geraldine.png'; 
import creador2 from '../assets/caleb.png';
import creador3 from '../assets/juan.png';

/**
 * Componente About: Presenta la Misión, Visión, la identidad de Helenía 
 * y la información de los creadores del proyecto.
 */
function About() {
  // Arreglo de datos para iterar sobre la información del equipo
  const creadores = [
    { nombre: "Geraldine Ramírez", foto: creador1, reseña: "Ilustración, Diseño y Narrativa" },
    { nombre: "Caleb Olaya", foto: creador2, reseña: "Animación y Desarrollo" },
    { nombre: "Juan José Quintero", foto: creador3, reseña: "Desarrollo, Interactividad e Ilustración" }
  ];

  return (
    <div className="about-page pb-5">
      <div className="container custom-container py-4 py-md-5">
        
        {/* TÍTULO PRINCIPAL CON DESTELLOS */}
        <div className="text-center mb-4 mb-md-5 pt-3 pt-md-4">
          <div className="banner-titulo-marco d-inline-block px-3 px-md-5 py-2 position-relative">
            <h1 className="about-titulo-main m-0">
              <IconoDestello /> Sobre nosotros <IconoDestello />
            </h1>
          </div>
        </div>

        {/* SECCIÓN: MISIÓN Y VISIÓN */}
        <div className="row justify-content-center g-4 mb-4">
          <div className="col-12 col-md-6 col-lg-5">
            <div className="about-card-marco text-center p-4 p-md-5 position-relative h-100">
              <EsquinaRosas posicion="top-left" />
              <EsquinaRosas posicion="bottom-right" />
              <h3 className="about-subtitulo-mv">Misión</h3>
              <p className="about-text-mv">
                Impulsar la identidad cultural de los jóvenes a través de un cómic digital interactivo sobre Helenita Vargas "La Ronca de Oro", resaltando su resiliencia, autenticidad y aporte a la música popular colombiana, para inspirar a nuevas generaciones a valorar su patrimonio y expresarse con libertad y pasión.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-5">
            <div className="about-card-marco text-center p-4 p-md-5 position-relative h-100">
              <EsquinaRosas posicion="top-left" />
              <EsquinaRosas posicion="bottom-right" />
              <h3 className="about-subtitulo-mv">Visión</h3>
              <p className="about-text-mv">
                Ser un referente digital y cultural en Latinoamérica que, mediante la narrativa transmedia, preserve la memoria de Helenita Vargas y acerque la música popular colombiana a los jóvenes, integrando tradición y tecnología en experiencias interactivas que trasciendan fronteras.
              </p>
            </div>
          </div>
        </div>

        {/* SEPARADOR ORNAMENTAL */}
        <DivisorRosas />

        {/* SECCIÓN: ¿QUÉ ES HELENÍA? */}
        <div className="about-helenia-box p-4 p-md-5 my-4 position-relative">
          <EsquinaRosas posicion="top-right" />
          <EsquinaRosas posicion="bottom-left" />
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
              <img src={logoHelenia} alt="Helenia Logo" className="about-logo-xl" />
            </div>
            <div className="col-12 col-md-7 ps-md-4">
              <h2 className="about-subtitulo-helenia-lg text-center text-md-start">¿Qué es Helenía?</h2>
              <p className="about-text-description text-center text-md-start">
                Helenía surge como una evolución del nombre de Helena. Más que un título, simboliza la fuerza y el legado cultural que queremos transmitir en este proyecto. Es un concepto que une tradición y modernidad, convirtiéndose en la identidad que acompaña nuestro cómic.
              </p>
            </div>
          </div>
        </div>

        {/* SEPARADOR ORNAMENTAL */}
        <DivisorRosas />

        {/* SECCIÓN: INTEGRANTES DEL EQUIPO */}
        <div className="text-center my-4 my-md-5">
          <h2 className="about-titulo-creadores-xl">
            <IconoDestello /> Nuestros creadores <IconoDestello />
          </h2>
        </div>

        <div className="row justify-content-center g-4">
          {creadores.map((creador, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4">
              <div className="creador-card-v2 text-center p-4 shadow-sm position-relative">
                <EsquinaRosas posicion="top-left" />
                <div className="creador-foto-frame mb-3">
                  <img src={creador.foto} alt={creador.nombre} className="creador-img" />
                </div>
                <h4 className="creador-nombre-v2">{creador.nombre}</h4>
                <div className="badge-rol-gold mt-2 px-3 py-1">
                  {creador.reseña}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default About;