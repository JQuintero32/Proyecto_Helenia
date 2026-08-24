import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EscenarioPlantilla from '../components/EscenarioPlantilla';
import { capitulos } from '../data/escenasData';
import '../styles/VerComic.css';

/**
 * Componente VerComic
 * Controla la lectura del cómic y transmite el estado de silencio (mute)
 * hacia el documento interno del iframe usando postMessage.
 */
export function VerComic() {
  const { capId } = useParams();
  const navigate = useNavigate();
  
  // Referencia al elemento HTML iframe
  const iframeRef = useRef(null);

  const capituloNumero = capId ? parseInt(capId, 10) : 1;

  const [escenaIndex, setEscenaIndex] = useState(0);
  const [capituloFinalizado, setCapituloFinalizado] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setEscenaIndex(0);
    setCapituloFinalizado(false);
  }, [capituloNumero]);

  // Envía la orden de silencio al iframe cada vez que 'isMuted' cambia
  useEffect(() => {
    enviarEstadoMuteAlIframe(isMuted);
  }, [isMuted]);

  const datosCapitulo = capitulos[capituloNumero] || capitulos[1];
  const listaEscenas = datosCapitulo.escenas || [];
  const totalEscenas = listaEscenas.length;
  const escenaActiva = listaEscenas[escenaIndex];

  const siguienteCapituloNumero = capituloNumero + 1;
  const existeSiguienteCapitulo = Boolean(capitulos[siguienteCapituloNumero]);

  /**
   * Función para transmitir el mensaje de audio al iframe
   */
  const enviarEstadoMuteAlIframe = (silenciado) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        { tipo: 'CONTROL_AUDIO', isMuted: silenciado },
        '*'
      );
    }
  };

  // Se ejecuta cuando el iframe termina de cargar su HTML
  const handleIframeLoad = () => {
    enviarEstadoMuteAlIframe(isMuted);
  };

  const handleAnterior = () => {
    if (capituloFinalizado) {
      setCapituloFinalizado(false);
    } else {
      setEscenaIndex((prevIndex) => Math.max(0, prevIndex - 1));
    }
  };

  const handleSiguiente = () => {
    if (escenaIndex < totalEscenas - 1) {
      setEscenaIndex((prevIndex) => prevIndex + 1);
    } else {
      setCapituloFinalizado(true);
    }
  };

  const handleIrSiguienteCapitulo = () => {
    navigate(`/comic/ver/${siguienteCapituloNumero}`);
  };

  const handleIrAlMapa = () => {
    navigate('/comic/mapa');
  };

  return (
    <div className="ver-comic-wrapper">
      <EscenarioPlantilla
        onAnterior={handleAnterior}
        onSiguiente={handleSiguiente}
        deshabilitarAnterior={escenaIndex === 0 && !capituloFinalizado}
        deshabilitarSiguiente={capituloFinalizado}
        isMuted={isMuted}
        onToggleMute={(nuevoEstado) => setIsMuted(nuevoEstado)}
      >
        {capituloFinalizado ? (
          <div className="fin-capitulo-overlay">
            <div className="fin-capitulo-card">
              <div className="fin-capitulo-emblema">✦</div>
              
              <h2 className="fin-capitulo-titulo">
                ¡Has completado el <span>{datosCapitulo.titulo}</span>!
              </h2>
              
              <p className="fin-capitulo-descripcion">
                ¿Deseas continuar la historia o volver al mapa general?
              </p>
              
              <div className="fin-capitulo-acciones">
                {existeSiguienteCapitulo ? (
                  <button 
                    type="button" 
                    className="btn-pantalla btn-principal"
                    onClick={handleIrSiguienteCapitulo}
                  >
                    <span>Ir al Capítulo {siguienteCapituloNumero}</span>
                    <svg className="icono-flecha" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                ) : (
                  <p className="texto-proximamente">¡Has llegado al final de los capítulos disponibles!</p>
                )}

                <button 
                  type="button" 
                  className="btn-pantalla btn-secundario"
                  onClick={handleIrAlMapa}
                >
                  Volver al Mapa de Escenas
                </button>
              </div>
            </div>
          </div>
        ) : (
          escenaActiva?.disponible && escenaActiva?.rutaHtml ? (
            <iframe
              ref={iframeRef}
              key={`${capituloNumero}-${escenaActiva.id}`}
              src={escenaActiva.rutaHtml}
              title={escenaActiva.titulo || "Escena Cómic"}
              onLoad={handleIframeLoad}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block'
              }}
            />
          ) : (
            <div className="escena-pendiente-container">
              <div className="escena-pendiente-content">
                <span className="icono-construccion">✨</span>
                <h3>{datosCapitulo.titulo} — Escena {escenaIndex + 1}</h3>
                <p>Esta escena aún está en proceso de animación e integración.</p>
                <span className="badge-proximamente">Próximamente</span>
              </div>
            </div>
          )
        )}
      </EscenarioPlantilla>
    </div>
  );
}

export default VerComic;