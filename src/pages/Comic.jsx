import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Comic.css';

// Importación de recursos visuales y multimedia
import videoPlaceholder from '../assets/video_placeholder.png'; 
import videoTrailer from '../assets/teaser.mp4'; // 
import helenaImg from '../assets/char_helena.png';
import condeImg from '../assets/char_conde.png';
import trovadorImg from '../assets/char_trovador.png';
import cap1 from '../assets/capitulo1.jpg';
import cap2 from '../assets/capitulo2.jpg';
import cap3 from '../assets/capitulo3.jpg';

/**
 * Componente Comic: Presenta la vista principal del proyecto.
 * Incluye el trailer en video local, un panel interactivo de personajes
 * y la selección de capítulos hacia el visor de escenas.
 */
function Comic() {
  const navigate = useNavigate();

  // Arreglo de personajes principales con su información descriptiva
  const personajes = [
    { 
      id: 'helena', 
      nombre: "Helena", 
      foto: helenaImg, 
      info: "La princesa ronca de oro. Una mujer valiente que utiliza su voz para desafiar el destino y encontrar su propio camino en un mundo de tradiciones mágicas y música eterna." 
    },
    { 
      id: 'conde', 
      nombre: "El Conde melódico", 
      foto: condeImg, 
      info: "Un mentor misterioso que guarda los secretos de la música antigua. Su melodía tiene el poder de calmar tormentas y abrir puertas olvidadas por el tiempo en el reino." 
    },
    { 
      id: 'trovador', 
      nombre: "El Joven Trovador", 
      foto: trovadorImg, 
      info: "Un viajero incansable que busca la canción perfecta. Su lealtad a Helena lo llevará a enfrentar los mayores peligros y a descubrir su propio destino musical." 
    }
  ];

  // Listado de los 3 capítulos disponibles del cómic
  const capitulos = [
    { id: 1, titulo: "CAPÍTULO 1", imagen: cap1 },
    { id: 2, titulo: "CAPÍTULO 2", imagen: cap2 },
    { id: 3, titulo: "CAPÍTULO 3", imagen: cap3 }
  ];

  // Estado para controlar el personaje seleccionado en el panel de tarjetas
  const [selectedChar, setSelectedChar] = useState(personajes[0]);

  return (
    <div className="comic-page pb-5">
      
      {/* SECCIÓN HERO / ENCABEZADO PRINCIPAL */}
      <section className="comic-hero-xl text-center">
        <div className="container custom-container py-5">
          <p className="comic-hero-subtitle-lg mb-2">Cómic</p>
          <h1 className="comic-hero-title-xl">Vive la historia de La Princesa ronca de Oro</h1>
        </div>
      </section>

      {/* SECCIÓN INTRODUCTORIA Y REPRODUCTOR DE VIDEO LOCAL */}
      <section className="container custom-container my-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <p className="comic-intro-text-lg">
              Un cómic digital interactivo inspirado en la figura de Helenita Vargas. A través del personaje de La princesa ronca de oro, exploramos temas de resiliencia, autenticidad y música popular, transformados en una narrativa mágica y cultural para las nuevas generaciones.
            </p>
            {/* Botón principal: Redirige al visor comenzando desde el inicio */}
            <button 
              type="button"
              className="btn-helenia-action-xl mt-4"
              onClick={() => navigate('/comic/ver')}
            >
              VER CÓMIC
            </button>
          </div>

          {/* REPRODUCTOR DE VIDEO LOCAL REEMPLAZADO */}
          <div className="col-lg-6">
            <div className="video-box-xl shadow-lg overflow-hidden rounded-4">
              <video 
                controls 
                poster={videoPlaceholder} 
                className="w-100 h-100 style-video-player"
                preload="metadata"
              >
                <source src={videoTrailer} type="video/mp4" />
                Tu navegador no soporta la reproducción de videos en formato MP4.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN INTERACTIVA DE EXPLORACIÓN DE PERSONAJES */}
      <section className="container custom-container mt-5 pt-5">
        <div className="text-center mb-5">
          <h2 className="comic-section-title-xl">Conoce a los personajes</h2>
        </div>
        
        {/* Tarjetas interactivas para elegir personaje */}
        <div className="row justify-content-center g-4 mb-5">
          {personajes.map((p) => {
            const esSeleccionado = selectedChar.id === p.id;
            return (
              <div key={p.id} className="col-12 col-md-4">
                <div 
                  className={`char-card-xl ${esSeleccionado ? 'card-active-xl' : ''}`}
                  onClick={() => setSelectedChar(p)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="char-img-circle-xl">
                    <img src={p.foto} alt={p.nombre} />
                  </div>
                  <h4 className="char-name-lobster-xl">{p.nombre}</h4>
                  <button 
                    type="button" 
                    className={`btn-ver-mas-xl ${esSeleccionado ? 'btn-active-xl' : ''}`}
                  >
                    {esSeleccionado ? 'Seleccionado' : 'Ver más'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cajas de detalle del personaje activo */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="info-display-box-xl shadow">
              <div className="row align-items-center p-4 p-md-5">
                <div className="col-md-3 text-center mb-4 mb-md-0">
                  <img 
                    src={selectedChar.foto} 
                    alt={selectedChar.nombre} 
                    className="info-thumb-xl shadow" 
                  />
                </div>
                <div className="col-md-9 text-center text-md-start px-md-5">
                  <h3 className="info-title-lobster-xl">{selectedChar.nombre}</h3>
                  <p className="info-text-italic-xl">{selectedChar.info}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CAPÍTULOS CON REDIRECCIÓN AL VISOR DE ESCENAS */}
      <section className="container custom-container mt-5 pt-5 pb-5">
        <div className="text-center mb-5">
          <h2 className="comic-section-title-xl">Capítulos</h2>
        </div>
        <div className="row g-4">
          {capitulos.map((cap) => (
            <div key={cap.id} className="col-12 col-md-4">
              <div className="cap-card-xl">
                <div className="cap-img-wrapper-xl shadow">
                  <img src={cap.imagen} alt={cap.titulo} className="img-fluid" />
                  <div className="cap-overlay-label-xl">{cap.titulo}</div>
                </div>
                <button 
                  type="button"
                  className="btn-episodio-gold-xl mt-3"
                  onClick={() => navigate(`/comic/ver/${cap.id}`)}
                >
                  Ver episodio {cap.id}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Comic;