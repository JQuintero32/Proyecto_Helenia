import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Comic.css';

export function IndiceEscenas() {
  const navigate = useNavigate();

  // Estructura exacta de capítulos y número de escenas
  const estructuraCapitulos = [
    { id: 1, titulo: "Capítulo 1", totalEscenas: 5 },
    { id: 2, titulo: "Capítulo 2", totalEscenas: 5 },
    { id: 3, titulo: "Capítulo 3", totalEscenas: 4 },
  ];

  const handleSeleccionarEscena = (capId, escenaNum) => {
    // Navega a la escena seleccionada
    navigate(`/comic/ver/${capId}?escena=${escenaNum}`);
  };

  return (
    <div className="container py-5 text-light text-center">
      <h1 className="comic-hero-title-xl mb-4" style={{ color: '#c4a123' }}>
        Selección de Escenas
      </h1>
      <p className="mb-5 text-muted">Elige el capítulo y la escena a la que deseas ir:</p>

      <div className="row g-4 justify-content-center">
        {estructuraCapitulos.map((cap) => (
          <div key={cap.id} className="col-12 col-md-4">
            <div 
              className="p-4 rounded-4 shadow" 
              style={{ backgroundColor: '#1a1a1a', border: '2px solid #c4a123' }}
            >
              <h3 style={{ color: '#c4a123' }} className="fw-bold mb-3">{cap.titulo}</h3>
              <div className="d-flex flex-column gap-2">
                {Array.from({ length: cap.totalEscenas }, (_, index) => {
                  const numEscena = index + 1;
                  return (
                    <button
                      key={numEscena}
                      type="button"
                      className="btn btn-outline-warning fw-bold text-start px-3 py-2"
                      onClick={() => handleSeleccionarEscena(cap.id, numEscena)}
                    >
                      🎬 Escena {numEscena}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        type="button" 
        className="btn btn-warning fw-bold mt-5 px-4 py-2"
        onClick={() => navigate('/comic')}
      >
        Volver al Menú Principal
      </button>
    </div>
  );
}

export default IndiceEscenas;