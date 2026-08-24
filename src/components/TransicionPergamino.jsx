import React, { useEffect } from 'react';
import '../styles/TransicionPergamino.css';

/**
 * Componente TransicionPergamino
 * Muestra un rótulo con estilo de pergamino.
 * Si 'texto' no está definido, genera uno automático con la información del capítulo y escena.
 * 
 * @param {string} texto - Texto personalizado (opcional).
 * @param {number} capituloNum - Número del capítulo actual.
 * @param {number} escenaNum - Número de la escena actual.
 * @param {function} onCompletado - Función que se ejecuta al finalizar el tiempo.
 * @param {number} duracionMs - Duración de la pantalla en milisegundos.
 */
export function TransicionPergamino({ 
  texto, 
  capituloNum, 
  escenaNum, 
  onCompletado, 
  duracionMs = 2200 
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onCompletado) onCompletado();
    }, duracionMs);

    return () => clearTimeout(timer);
  }, [onCompletado, duracionMs]);

  // Si no hay texto definido en escenasData.js, usamos una plantilla por defecto
  const textoAMostrar = texto || `Capítulo ${capituloNum} — Escena ${escenaNum}`;

  return (
    <div className="pergamino-overlay">
      <div className="pergamino-cuerpo">
        <div className="pergamino-contenido">
          <span className="pergamino-adorno">❧</span>
          <p className="pergamino-texto">{textoAMostrar}</p>
          <span className="pergamino-adorno">☙</span>
        </div>
      </div>
    </div>
  );
}

export default TransicionPergamino;