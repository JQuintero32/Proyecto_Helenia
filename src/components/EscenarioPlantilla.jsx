import React from 'react';
import './EscenarioPlantilla.css';

/**
 * EscenarioPlantilla
 * Marco visual interactivo con botones de control superiores,
 * flechas laterales y caja de subtítulos dinámicos.
 */
export const EscenarioPlantilla = ({
    children,
    subtitulo,
    mostrarSubtitulo = false,
    imagenFondo,
    onAnterior,
    onSiguiente,
    onInicio,
    onMusica,
    onAyuda,
    deshabilitarAnterior = false,
    deshabilitarSiguiente = false
}) => {
    return (
        <div className="screen-container">
            {/* 1. Flecha izquierda (Anterior) */}
            <button 
                type="button"
                className="nav-arrow prev-arrow" 
                onClick={onAnterior}
                disabled={deshabilitarAnterior}
                title="Escena Anterior"
                aria-label="Escena Anterior"
            />

            {/* 2. Marco del teatro interactivo */}
            <div className="interactive-card">
                
                {/* Fondo dinámico */}
                <div 
                    className="lottie-bg-container"
                    style={{ backgroundImage: imagenFondo ? `url(${imagenFondo})` : 'none' }}
                ></div>

                {/* Botones de control superiores */}
                <div className="top-controls">
                    <button type="button" className="control-btn" title="Inicio" onClick={onInicio}>
                        <img src="../assets/home.svg" alt="Inicio" />
                    </button>
                    <button type="button" className="control-btn" title="Música" onClick={onMusica}>
                        <img src="../assets/music.svg" alt="Música" />
                    </button>
                    <button type="button" className="control-btn" title="Ayuda" onClick={onAyuda}>
                        <img src="../assets/question.svg" alt="Ayuda" />
                    </button>
                </div>

                {/* Área de la escena */}
                <div className="escena-contenido">
                    {children}
                </div>

                {/* Caja de Subtítulos */}
                {mostrarSubtitulo && subtitulo && (
                    <div className="subtitles-box">
                        <p className="subtitles-text">{subtitulo}</p>
                    </div>
                )}

            </div>

            {/* 3. Flecha derecha (Siguiente) */}
            <button 
                type="button"
                className="nav-arrow next-arrow" 
                onClick={onSiguiente}
                disabled={deshabilitarSiguiente}
                title="Siguiente Escena"
                aria-label="Siguiente Escena"
            />
        </div>
    );
};

export default EscenarioPlantilla;