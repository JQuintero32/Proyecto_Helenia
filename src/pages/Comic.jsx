import React, { useState } from 'react';
import '../styles/Comic.css';
import videoPlaceholder from '../assets/video_placeholder.png'; 
import helenaImg from '../assets/char_helena.png';
import condeImg from '../assets/char_conde.png';
import trovadorImg from '../assets/char_trovador.png';
import cap1 from '../assets/capitulo1.jpg';
import cap2 from '../assets/capitulo2.jpg';
import cap3 from '../assets/capitulo3.jpg';

function Comic() {
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

  const capitulos = [
    { id: 1, titulo: "CAPÍTULO 1", imagen: cap1 },
    { id: 2, titulo: "CAPÍTULO 2", imagen: cap2 },
    { id: 3, titulo: "CAPÍTULO 3", imagen: cap3 }
  ];

  const [selectedChar, setSelectedChar] = useState(personajes);

  return (
    <div className="comic-page pb-5">
      {/* HERO SECTION - Más alto y espaciado */}
      <section className="comic-hero-xl text-center">
        <div className="container custom-container py-5">
          <p className="comic-hero-subtitle-lg mb-2">Cómic</p>
          <h1 className="comic-hero-title-xl">Vive la historia de La Princesa ronca de Oro</h1>
        </div>
      </section>

      {/* INTRODUCCIÓN Y VIDEO - Textos con más cuerpo */}
      <section className="container custom-container my-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <p className="comic-intro-text-lg">
              Un cómic digital interactivo inspirado en la figura de Helenita Vargas. A través del personaje de La princesa ronca de oro, exploramos temas de resiliencia, autenticidad y música popular, transformados en una narrativa mágica y cultural para las nuevas generaciones.
            </p>
            <button className="btn-helenia-action-xl mt-4">VER CÓMIC</button>
          </div>
          <div className="col-lg-6">
            <div className="video-box-xl shadow-lg">
              <img src={videoPlaceholder} alt="Video" className="img-fluid w-100" />
              <div className="play-overlay-xl">
                <i className="bi bi-play-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAJES */}
      <section className="container custom-container mt-5 pt-5">
        <div className="text-center mb-5">
          <h2 className="comic-section-title-xl">Conoce a los personajes</h2>
        </div>
        
        <div className="row justify-content-center g-4 mb-5">
          {personajes.map((p) => (
            <div key={p.id} className="col-12 col-md-4">
              <div 
                className={`char-card-xl ${selectedChar.id === p.id ? 'card-active-xl' : ''}`}
                onClick={() => setSelectedChar(p)}
              >
                <div className="char-img-circle-xl">
                  <img src={p.foto} alt={p.nombre} />
                </div>
                <h4 className="char-name-lobster-xl">{p.nombre}</h4>
                <button className={`btn-ver-mas-xl ${selectedChar.id === p.id ? 'btn-active-xl' : ''}`}>
                  {selectedChar.id === p.id ? 'Seleccionado' : 'Ver más'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CUADRO DE INFORMACIÓN - Ocupa más espacio visual */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="info-display-box-xl shadow">
              <div className="row align-items-center p-4 p-md-5">
                <div className="col-md-3 text-center mb-4 mb-md-0">
                  <img src={selectedChar.foto} alt={selectedChar.nombre} className="info-thumb-xl shadow" />
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

      {/* CAPÍTULOS */}
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
                <button className="btn-episodio-gold-xl mt-3">Ver episodio {cap.id}</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Comic;