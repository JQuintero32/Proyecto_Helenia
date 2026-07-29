import React from 'react';
import '../styles/About.css';
import logoHelenia from '../assets/logo.png'; 
import creador1 from '../assets/geraldine.png'; 
import creador2 from '../assets/caleb.png';
import creador3 from '../assets/juan.png';

function About() {
  const creadores = [
    { nombre: "Geraldine R.", foto: creador1, reseña: "Diseño y Narrativa" },
    { nombre: "Caleb O.", foto: creador2, reseña: "Desarrollo e Interactividad" },
    { nombre: "Juan Q.", foto: creador3, reseña: "Ilustración y Concepto" }
  ];

  return (
    <div className="about-page pb-5">
      <div className="container custom-container py-5">
        
       
        <div className="text-center mb-5 pt-4">
          <h1 className="about-titulo-main">Sobre nosotros</h1>
        </div>

        
        <div className="row justify-content-center g-5 mb-5 pb-lg-5">
          <div className="col-md-5">
            <h3 className="about-subtitulo-mv">Misión</h3>
            <p className="about-text-mv">
              Impulsar la identidad cultural de los jóvenes a través de un cómic digital interactivo sobre Helenita Vargas "La Ronca de Oro", resaltando su resiliencia, autenticidad y aporte a la música popular colombiana, para inspirar a nuevas generaciones a valorar su patrimonio y expresarse con libertad y pasión.
            </p>
          </div>
          <div className="col-md-5">
            <h3 className="about-subtitulo-mv">Visión</h3>
            <p className="about-text-mv">
              Ser un referente digital y cultural en Latinoamérica que, mediante la narrativa transmedia, preserve la memoria de Helenita Vargas y acerque la música popular colombiana a los jóvenes, integrando tradición y tecnología en experiencias interactivas que trasciendan fronteras.
            </p>
          </div>
        </div>

        
        <div className="row align-items-center justify-content-center my-5 py-5">
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img src={logoHelenia} alt="Helenia Logo" className="about-logo-xl" />
          </div>
          <div className="col-md-6">
            <h2 className="about-subtitulo-helenia-lg">¿Qué es Helenía?</h2>
            <p className="about-text-description">
              Helenía surge como una evolución del nombre de Helena. Más que un título, simboliza la fuerza y el legado cultural que queremos transmitir en este proyecto. Es un concepto que une tradición y modernidad, convirtiéndose en la identidad que acompaña nuestro cómic.
            </p>
          </div>
        </div>

        
        <div className="text-center mt-5 pt-5 mb-5">
          <h2 className="about-titulo-creadores-xl">Nuestros creadores</h2>
        </div>

        <div className="row justify-content-center g-4">
          {creadores.map((creador, index) => (
            <div key={index} className="col-12 col-md-4 col-lg-3">
              <div className="creador-card-v2 text-center p-5 shadow-sm">
                <div className="creador-foto-frame mb-4">
                  <img src={creador.foto} alt={creador.nombre} className="creador-img" />
                </div>
                <h4 className="creador-nombre-v2">{creador.nombre}</h4>
                <p className="creador-reseña-v2">{creador.reseña}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;