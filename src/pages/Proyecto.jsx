import React from 'react';
import '../styles/Proyecto.css';
import helenitaImg from '../assets/helenita.jpg'; 
import { 
  EsquinaRosas, 
  DivisorRosas, 
  IconoDestello, 
  MicroNotaMusical,
  MarcoHelenitaImperial 
} from '../components/AdornosVisuales'; 

/**
 * Componente Proyecto: Presenta el propósito del proyecto, el referente histórico
 * y la línea temporal adaptativa (responsive) de Helenita Vargas.
 */
function Proyecto() {
  const hitos = [
    { año: "1934", texto: "Nace en Puerto Tejada, Cauca, marcando el inicio de una leyenda." },
    { año: "1951", texto: "A los 16 años canta junto a Agustín Lara ('Farolito'), dando inicio a su carrera." },
    { año: "60s – 70s", texto: "Se consolida como 'La Ronca de Oro', llevando la ranchera a todo Colombia." },
    { año: "2014", texto: "Serie La Ronca de Oro revive su historia para nuevas generaciones." },
    { año: "Legado", texto: "Su voz y autenticidad se convierten en símbolo de resiliencia y empoderamiento." }
  ];

  return (
    <div className="proyecto-page">
      <div className="container-custom py-4 py-md-5">
        
        {/* ENCABEZADO PRINCIPAL */}
        <div className="text-center mb-4 mb-md-5 pt-3 pt-md-4">
          <h1 className="titulo-seccion-lobster-xl">
            <IconoDestello /> Proyecto <IconoDestello />
          </h1>
        </div>

        {/* CARD PROPÓSITO */}
        <div className="row justify-content-center mb-4 mb-md-5 pb-3">
          <div className="col-12 col-lg-10">
            <div className="card-proposito-dorada text-center shadow position-relative">
              <EsquinaRosas posicion="top-left" />
              <EsquinaRosas posicion="bottom-right" />
              
              <h2 className="subtitulo-lobster-blanco-lg mb-3 mb-md-4">
                <IconoDestello /> Propósito del proyecto <IconoDestello />
              </h2>
              <p className="texto-proposito-italic-lg mb-0">
                Conectar a los jóvenes con la memoria cultural de Colombia a través de un cómic digital interactivo que rescate la vida y legado de Helenita Vargas, mostrando su autenticidad, resiliencia y pasión como inspiración para nuevas generaciones.
              </p>
            </div>
          </div>
        </div>

        <DivisorRosas />

        {/* SECCIÓN REFERENTE CON MARCO IMPERIAL */}
        <div className="row align-items-center justify-content-center my-4 my-md-5 py-3">
          <div className="col-12 col-md-5 text-center mb-4 mb-md-0 d-flex justify-content-center">
            <MarcoHelenitaImperial>
              <img 
                src={helenitaImg} 
                alt="Helenita Vargas" 
                className="img-helenita-referente"
              />
            </MarcoHelenitaImperial>
          </div>
          
          <div className="col-12 col-md-6 ps-md-4 ps-lg-5 text-center text-md-start">
            <h2 className="titulo-referente-lobster-lg mb-3 mb-md-4">
              <IconoDestello /> Referente
            </h2>
            <p className="texto-referente-roboto-lg">
              Helenita Vargas, conocida como <strong><MicroNotaMusical /> La Ronca de Oro <MicroNotaMusical /></strong>, fue una cantante colombiana que se convirtió en símbolo de autenticidad y resiliencia. Con su voz poderosa y estilo único, abrió camino a las mujeres en una industria dominada por hombres.
            </p>
          </div>
        </div>

        <DivisorRosas />

        {/* LÍNEA TEMPORAL (TIMELINE) */}
        <div className="row justify-content-center mt-4 mt-md-5 pt-3">
          <div className="col-12 text-center mb-4 mb-md-5">
            <h2 className="titulo-seccion-lobster-xl">
              <IconoDestello /> Línea temporal <MicroNotaMusical />
            </h2>
          </div>
          
          <div className="col-12 col-lg-11 position-relative py-2 py-md-4">
            <div className="timeline-barra-central-lg"></div>
            
            {hitos.map((item, index) => {
              const esPar = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  className={`row align-items-center mb-4 mb-md-5 pb-2 pb-md-4 timeline-row position-relative ${!esPar ? 'flex-row-reverse' : ''}`}
                >
                  {/* Columna Cápsula Año */}
                  <div className={`col-12 col-md-6 d-flex timeline-col-capsula ${esPar ? 'justify-content-md-end pe-md-5' : 'justify-content-md-start ps-md-5'}`}>
                    <div className="timeline-capsula-lg shadow-sm">{item.año}</div>
                  </div>
                  
                  {/* Columna Tarjeta Texto */}
                  <div className={`col-12 col-md-6 timeline-col-card ${esPar ? 'ps-md-5 text-start' : 'pe-md-5 text-md-end text-start'}`}>
                    <div className="card-timeline-marco shadow-sm position-relative">
                      <EsquinaRosas posicion={esPar ? "top-left" : "top-right"} />
                      <p className="timeline-texto-desc-lg mb-0">
                        <MicroNotaMusical /> {item.texto}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Proyecto;