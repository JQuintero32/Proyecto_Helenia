import React from 'react';
import '../styles/Proyecto.css';
import helenitaImg from '../assets/helenita.jpg'; 

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
      <div className="container-custom py-5">
        <div className="text-center mb-5 pt-4">
          <h1 className="titulo-seccion-lobster-xl">Proyecto</h1>
        </div>

        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-lg-9">
            <div className="card-proposito-dorada text-center p-5 shadow">
              <h2 className="subtitulo-lobster-blanco-lg mb-4">Propósito del proyecto</h2>
              <p className="texto-proposito-italic-lg">
                Conectar a los jóvenes con la memoria cultural de Colombia a través de un cómic digital interactivo que rescate la vida y legado de Helenita Vargas, mostrando su autenticidad, resiliencia y pasión como inspiración para nuevas generaciones.
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center justify-content-center my-5 py-5">
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <div className="marco-retrato-helenita-lg shadow-lg">
              <img src={helenitaImg} alt="Helenita Vargas" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 ps-lg-5">
            <h2 className="titulo-referente-lobster-lg mb-4">Referente</h2>
            <p className="texto-referente-roboto-lg">
              Helenita Vargas, conocida como <strong>La Ronca de Oro</strong>, fue una cantante colombiana que se convirtió en símbolo de autenticidad y resiliencia. Con su voz poderosa y estilo único, abrió camino a las mujeres en una industria dominada por hombres.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-5 pt-5">
          <div className="col-12 text-center mb-5">
            <h2 className="titulo-seccion-lobster-xl">Línea temporal</h2>
          </div>
          <div className="col-lg-11 position-relative py-5">
            <div className="timeline-barra-central-lg"></div>
            {hitos.map((item, index) => {
              const esPar = index % 2 === 0;
              return (
                <div key={index} className={`row align-items-center mb-5 pb-4 position-relative ${!esPar ? 'flex-row-reverse' : ''}`}>
                  <div className={`col-6 d-flex ${esPar ? 'justify-content-end pe-5' : 'justify-content-start ps-5'}`}>
                    <div className="timeline-capsula-lg shadow-sm">{item.año}</div>
                  </div>
                  <div className={`col-6 ${esPar ? 'ps-5 text-start' : 'pe-5 text-end'}`}>
                    <p className="timeline-texto-desc-lg">{item.texto}</p>
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