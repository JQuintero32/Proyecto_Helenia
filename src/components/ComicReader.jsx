import React, { useState } from 'react';
// Asegúrate de que el archivo 'escenasData.js' existe en 'src/data/'
import { capitulos } from '../data/escenasData';

function ComicReader({ capituloId = 2 }) {
  // Estado para controlar el índice de la escena actual (comienza en 0)
  const [indiceActual, setIndiceActual] = useState(0);

  // Validación de seguridad: busca el capítulo o usa una estructura vacía si no existe
  const datosCapitulo = capitulos[capituloId] || { titulo: "Capítulo no encontrado", escenas: [] };
  const escenas = datosCapitulo.escenas;
  const escenaActual = escenas[indiceActual];
  const totalEscenas = escenas.length;

  // Si no hay escenas registradas para este capítulo, muestra un mensaje seguro
  if (totalEscenas === 0) {
    return (
      <div className="container my-4 p-4 text-center bg-dark text-light rounded">
        <h4>No se encontraron escenas para este capítulo.</h4>
        <p>Verifica que el capítulo {capituloId} esté configurado en src/data/escenasData.js</p>
      </div>
    );
  }

  return (
    <div className="container my-4 p-4 rounded shadow bg-dark text-light">
      {/* Encabezado informativo */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="m-0 fw-bold">{datosCapitulo.titulo} - {escenaActual.titulo}</h4>
        <span className="badge bg-warning text-dark fs-6">
          {indiceActual + 1} / {totalEscenas}
        </span>
      </div>

      {/* Contenedor del visor en iframe */}
      <div className="rounded overflow-hidden mb-3" style={{ height: '600px', backgroundColor: '#000' }}>
        <iframe
          src={escenaActual.htmlPath}
          title={escenaActual.titulo}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>

      {/* Botones de navegación */}
      <div className="d-flex justify-content-between align-items-center">
        <button
          className="btn btn-outline-light"
          onClick={() => setIndiceActual(indiceActual - 1)}
          disabled={indiceActual === 0}
        >
          ◄ Escena Anterior
        </button>

        <button
          className="btn btn-warning fw-bold"
          onClick={() => setIndiceActual(indiceActual + 1)}
          disabled={indiceActual === totalEscenas - 1}
        >
          Siguiente Escena ►
        </button>
      </div>
    </div>
  );
}

export default ComicReader;