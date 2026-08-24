import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Comic.css';

// Importación de componentes ornamentales reutilizables
import {
  DivisorRosas,
  IconoDestello,
  MarcoHelenitaImperial,
  SombraDorada
} from '../components/AdornosVisuales';

// Importación de imágenes
import videoPlaceholder from '../assets/portada.png';
import videoTrailer from '../assets/portada.png';
import helenaImg from '../assets/char_helena.png';
import condeImg from '../assets/char_conde.png';
import trovadorImg from '../assets/char_trovador.png';
import cap1 from '../assets/capitulo1.jpg';
import cap2 from '../assets/capitulo2.jpg';
import cap3 from '../assets/capitulo3.jpg';

function Comic() {
  const navigate = useNavigate();

  const personajes = [
    {
      id: 'helena',
      nombre: "Helena",
      foto: helenaImg,
      info: "La princesa ronca de oro. Una mujer valiente que utiliza su voz para desafiar el destino."
    },
    {
      id: 'conde',
      nombre: "El Conde melódico",
      foto: condeImg,
      info: "Un mentor misterioso que guarda los secretos de la música antigua."
    },
    {
      id: 'trovador',
      nombre: "El Joven Trovador",
      foto: trovadorImg,
      info: "Un viajero incansable que busca la canción perfecta."
    }
  ];

  const capitulos = [
    { id: 1, titulo: "CAPÍTULO 1", imagen: cap1 },
    { id: 2, titulo: "CAPÍTULO 2", imagen: cap2 },
    { id: 3, titulo: "CAPÍTULO 3", imagen: cap3 }
  ];

  const [selectedChar, setSelectedChar] = useState(personajes[0]);

  return (
    <div className="comic-page pb-5">

      {/* HERO */}
      <section className="comic-hero-xl text-center">
        <div className="container custom-container py-5">
          <p className="comic-hero-subtitle-lg mb-2">
            <IconoDestello /> Cómic <IconoDestello />
          </p>
          <h1 className="comic-hero-title-xl">Vive la historia de La Princesa ronca de Oro</h1>
        </div>
      </section>

      {/* INTRO Y VIDEO */}
      <section className="container custom-container my-5 py-3">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <p className="comic-intro-text-lg">
              Un cómic digital interactivo inspirado en la figura de Helenita Vargas.
              A través del personaje de La princesa ronca de oro, exploramos temas de resiliencia, autenticidad y música popular, transformados en una narrativa mágica y cultural para las nuevas generaciones.
            </p>
            <button
              type="button"
              className="btn-helenia-action-xl mt-4"
              onClick={() => navigate('/comic/ver')}
            >
              VER CÓMIC
            </button>
          </div>

          <div className="col-lg-6">
            <div className="video-box-xl shadow-lg overflow-hidden rounded-4">
              <video controls poster={videoPlaceholder} className="w-100 h-100 style-video-player">
                <source src={videoTrailer} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARADOR ORNAMENTAL 1 */}
      <DivisorRosas />

      {/* PERSONAJES */}
      <section className="container custom-container">
        <div className="text-center mb-5">
          <h2 className="comic-section-title-xl">Conoce a los personajes</h2>
          <SombraDorada />
        </div>

        {/* GRILLA DE SELECCIÓN */}
        <div className="row justify-content-center g-4 mb-5">
          {personajes.map((p) => {
            const esSeleccionado = selectedChar.id === p.id;
            return (
              <div key={p.id} className="col-12 col-md-4">
                <div
                  className={`char-card-xl ${esSeleccionado ? 'card-active-xl' : ''}`}
                  onClick={() => setSelectedChar(p)}
                >
                  <div className="char-img-circle-xl">
                    <img src={p.foto} alt={p.nombre} />
                  </div>
                  <h4 className="char-name-lobster-xl">{p.nombre}</h4>
                </div>
              </div>
            );
          })}
        </div>

        {/* DETALLE CON MARCO IMPERIAL */}
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center text-md-start">
            <div className="info-display-box-xl p-4 p-md-5">
              <div className="row align-items-center">
                <div className="col-md-4 text-center mb-4 mb-md-0">
                  {/* Uso del componente MarcoHelenitaImperial alrededor de la foto */}
                  <MarcoHelenitaImperial>
                    <img
                      src={selectedChar.foto}
                      alt={selectedChar.nombre}
                      style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                    />
                  </MarcoHelenitaImperial>
                </div>
                <div className="col-md-8 px-md-4">
                  <h3 className="info-title-lobster-xl">
                    {selectedChar.nombre} <IconoDestello />
                  </h3>
                  <p className="info-text-italic-xl">{selectedChar.info}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARADOR ORNAMENTAL 2 */}
      <DivisorRosas />

      {/* CAPÍTULOS */}
      <section className="container custom-container pb-5">
        <div className="text-center mb-5">
          <h2 className="comic-section-title-xl">Capítulos</h2>
          <SombraDorada />
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