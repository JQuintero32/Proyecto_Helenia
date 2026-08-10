import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EscenarioPlantilla from '../components/EscenarioPlantilla';

/**
 * Componente VerComic: Controla el flujo general de navegación entre capítulos y escenas
 * utilizando el componente EscenarioPlantilla.
 */
function VerComic() {
  const navigate = useNavigate();
  const { capId } = useParams();

  // Definimos las escenas base por capítulo (las irás completando a tu ritmo)
  const capitulosData = {
    1: {
      titulo: "Capítulo 1",
      escenas: [
        { id: 1, subtitulo: "«Una voz que desafía el destino en un reino de tradiciones mágicas...»" },
        { id: 2, subtitulo: "«Helena descubre los secretos guardados por la música antigua.»" },
        { id: 3, subtitulo: "«El inicio de un viaje transformador para la princesa.»" }
      ]
    },
    2: {
      titulo: "Capítulo 2",
      escenas: [
        { id: 4, subtitulo: "«El Conde Melódico observa desde las sombras del teatro.»" },
        { id: 5, subtitulo: "«Un misterio oculto en las notas de la canción eterna.»" }
      ]
    },
    3: {
      titulo: "Capítulo 3",
      escenas: [
        { id: 6, subtitulo: "«El Joven Trovador se une al camino de Helena.»" },
        { id: 7, subtitulo: "«El desenlace donde la resiliencia y el arte triunfan.»" }
      ]
    }
  };

  // Capítulo activo inicial según el parámetro de la URL
  const [capituloActual, setCapituloActual] = useState(capId ? parseInt(capId) : 1);
  const [escenaIndex, setEscenaIndex] = useState(0);
  const [mostrarSubtitulo, setMostrarSubtitulo] = useState(true);

  // Obtener la escena en pantalla
  const capData = capitulosData[capituloActual] || capitulosData[1];
  const escenaActiva = capData.escenas[escenaIndex];

  // Funciones de navegación
  const handleSiguiente = () => {
    if (escenaIndex < capData.escenas.length - 1) {
      setEscenaIndex(prev => prev + 1);
    } else if (capitulosData[capituloActual + 1]) {
      // Avanza al siguiente capítulo
      setCapituloActual(prev => prev + 1);
      setEscenaIndex(0);
    }
  };

  const handleAnterior = () => {
    if (escenaIndex > 0) {
      setEscenaIndex(prev => prev - 1);
    } else if (capitulosData[capituloActual - 1]) {
      // Retrocede al capítulo anterior
      const capAnterior = capitulosData[capituloActual - 1];
      setCapituloActual(prev => prev - 1);
      setEscenaIndex(capAnterior.escenas.length - 1);
    }
  };

  return (
    <div className="ver-comic-wrapper bg-dark py-4 min-vh-100">
      
      {/* NAVEGADOR DE PLANTILLA */}
      <EscenarioPlantilla
        subtitulo={escenaActiva.subtitulo}
        mostrarSubtitulo={mostrarSubtitulo}
        onAnterior={handleAnterior}
        onSiguiente={handleSiguiente}
        onInicio={() => navigate('/comic')}
        onMusica={() => setMostrarSubtitulo(!mostrarSubtitulo)}
        onAyuda={() => alert(`Estás en el ${capData.titulo} - Escena ${escenaIndex + 1}`)}
        deshabilitarAnterior={capituloActual === 1 && escenaIndex === 0}
        deshabilitarSiguiente={
          capituloActual === Object.keys(capitulosData).length && 
          escenaIndex === capData.escenas.length - 1
        }
      >
        {/* Marcador de posición temporal (Aquí irán tus elementos interactivos) */}
        <div className="d-flex flex-column align-items-center justify-content-center h-100 text-white text-center p-4">
          <span className="badge bg-warning text-dark fs-5 mb-3">
            {capData.titulo} — Escena {escenaIndex + 1} de {capData.escenas.length}
          </span>
          <h2 className="fw-bold">Espacio reservado para la Escena {escenaActiva.id}</h2>
          <p className="text-muted">Aquí podrás colocar tus animaciones, imágenes o componentes cuando los tengas listos.</p>
        </div>
      </EscenarioPlantilla>

    </div>
  );
}

export default VerComic;