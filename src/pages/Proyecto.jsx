import React  from "react";
import '../styles/Proyecto.css';

export const Proyecto = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#eee9df' }}>
  <div className="container text-center">
    
    <h2 className="mb-4" style={{ color: '#8a7300' }}>Proyecto</h2>

    <div className="row justify-content-center mb-5">
      <div className="col-md-8">
        <div className="p-4 shadow-sm" style={{ backgroundColor: '#8a7300', borderRadius: '15px', color: 'white' }}>
          <h5 className="fw-bold">Propósito del proyecto</h5>
          <p className="small">Conectar a los jóvenes con la memoria cultural de Colombia a través de un cómic digital interactivo que rescate la vida y legado de Helenita Vargas.</p>
        </div>
      </div>
    </div>

    <div className="row align-items-center py-4">
      <div className="col-md-5">
        <img src="helenita.jpg" className="img-fluid" style={{ borderRadius: '50px 50px 10px 50px', border: '1px solid #000' }} alt="Helenita" />
      </div>
      <div className="col-md-7 text-md-start mt-4 mt-md-0">
        <h3 style={{ color: '#8a7300' }}>Referente</h3>
        <p className="text-muted" style={{ fontSize: '0.9rem' }}>
          Helenita Vargas, conocida como "La Ronca de Oro", fue una cantante colombiana que se convirtió en símbolo de autenticidad y resiliencia. Con su voz poderosa y estilo único en la música popular y ranchera, abrió camino a las mujeres en una industria dominada por hombres.
        </p>
      </div>
    </div>

    <div className="row py-5">
      <div className="col-12">
        <h3 className="mb-5" style={{ color: '#8a7300' }}>Línea temporal</h3>
        
        <div className="position-relative" style={{ borderLeft: '8px solid #8a7300', marginLeft: '50%', paddingLeft: '20px' }}>
          
          <div className="mb-5 position-relative">
            <div className="p-3" style={{ backgroundColor: '#8a7300', color: 'white', borderRadius: '30px', width: '120px', position: 'absolute', left: '-150px', top: '-10px' }}>1934</div>
            <p className="text-start small">Nace en Puerto Tejada, Cauca.</p>
          </div>

          <div className="mb-5 position-relative">
            <div className="p-3" style={{ backgroundColor: '#8a7300', color: 'white', borderRadius: '30px', width: '120px', position: 'absolute', right: '-150px', top: '-10px' }}>1951</div>
            <p className="text-end small" style={{ marginLeft: '-400px', width: '350px' }}>A los 16 años canta junto a Agustín Lara ("Farolito"), inicia su carrera.</p>
          </div>

          <div className="mb-5 position-relative">
            <div className="p-3" style={{ backgroundColor: '#8a7300', color: 'white', borderRadius: '30px', width: '120px', position: 'absolute', left: '-150px', top: '-10px' }}>Décadas 60-70</div>
            <p className="text-start small">Se consolida como "La Ronca de Oro", llevando la ranchera a toda Colombia.</p>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>
  );
};
