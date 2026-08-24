import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EscenarioPlantilla.css';

import homeIcon from '../assets/home.svg';
import musicIcon from '../assets/music.svg';
import questionIcon from '../assets/question.svg';

export const EscenarioPlantilla = ({
    children,
    subtitulo,
    mostrarSubtitulo = false,
    imagenFondo,
    onAnterior,
    onSiguiente,
    deshabilitarAnterior = false,
    deshabilitarSiguiente = false,
    isMuted = false,
    onToggleMute
}) => {
    const navigate = useNavigate();
    const [mostrarModalAyuda, setMostrarModalAyuda] = useState(false);

    const handleInicio = () => {
        navigate('/comic/mapa');
    };

    const handleMusica = () => {
        if (onToggleMute) {
            onToggleMute(!isMuted);
        }
    };

    const handleAyuda = () => {
        setMostrarModalAyuda(!mostrarModalAyuda);
    };

    return (
        <div className="screen-container">
            {/* Flecha Navegación Izquierda con símbolo visible */}
            <button 
                type="button"
                className="nav-arrow prev-arrow" 
                onClick={onAnterior}
                disabled={deshabilitarAnterior}
                aria-label="Escena Anterior"
            >
                &#10094;
            </button>

            {/* Tarjeta del Escenario */}
            <div className="interactive-card">
                <div 
                    className="lottie-bg-container"
                    style={{ backgroundImage: imagenFondo ? `url(${imagenFondo})` : 'none' }}
                ></div>

                {/* Botones Superiores */}
                <div className="top-controls">
                    <button type="button" className="control-btn" title="Mapa de Escenas" onClick={handleInicio}>
                        <img src={homeIcon} alt="Inicio" />
                    </button>
                    <button 
                        type="button" 
                        className={`control-btn ${isMuted ? 'muted-btn' : ''}`} 
                        title={isMuted ? "Activar Sonido" : "Silenciar Sonido"} 
                        onClick={handleMusica}
                    >
                        <img src={musicIcon} alt="Música" />
                    </button>
                    <button type="button" className="control-btn" title="Instrucciones" onClick={handleAyuda}>
                        <img src={questionIcon} alt="Ayuda" />
                    </button>
                </div>

                {/* Contenido Dinámico de la Escena */}
                <div className="escena-contenido">
                    {children}
                </div>

                {/* Subtítulos */}
                {mostrarSubtitulo && subtitulo && (
                    <div className="subtitles-box">
                        <p className="subtitles-text">{subtitulo}</p>
                    </div>
                )}

                {/* MODAL DE INSTRUCCIONES */}
                {mostrarModalAyuda && (
                    <div className="instructions-modal-overlay" onClick={handleAyuda}>
                        <div className="instructions-card" onClick={(e) => e.stopPropagation()}>
                            <h2 className="instructions-title">instrucciones</h2>
                            
                            <div className="instruction-item row-arrows">
                                <span className="arrow-icon">&lt;</span>
                                <p>Usa las flechas para retroceder o avanzar y descubrir cada paso</p>
                                <span className="arrow-icon">&gt;</span>
                            </div>

                            <div className="instruction-item">
                                <div className="loader-icon-placeholder"></div>
                                <div>
                                    <strong>Activar animaciones</strong>
                                    <p>Dale clic al ícono de interacción para que las viñetas se animen.</p>
                                </div>
                            </div>

                            <div className="instruction-item">
                                <div className="icon-circle gold-bg">
                                    <img src={homeIcon} alt="Inicio" />
                                </div>
                                <p>Usa la casita para volver al capítulo que quieras revisar en cualquier momento.</p>
                            </div>

                            <div className="instruction-item">
                                <p>Haz clic en el ícono de música para activar o desactivar el sonido durante tu experiencia.</p>
                                <div className="icon-circle gold-bg">
                                    <img src={musicIcon} alt="Música" />
                                </div>
                            </div>

                            <button type="button" className="btn-close-instructions" onClick={handleAyuda}>
                                Entendido
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Flecha Navegación Derecha con símbolo visible */}
            <button 
                type="button"
                className="nav-arrow next-arrow" 
                onClick={onSiguiente}
                disabled={deshabilitarSiguiente}
                aria-label="Siguiente Escena"
            >
                &#10095;
            </button>
        </div>
    );
};

export default EscenarioPlantilla;