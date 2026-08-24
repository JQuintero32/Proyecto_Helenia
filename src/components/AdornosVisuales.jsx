import React from 'react';

/**
 * Componente: EsquinaRosas
 * Descripción: Esquinera ornamental en filigrana dorada con rosa central y hojas.
 */
export const EsquinaRosas = ({ posicion = "top-left" }) => {
  const rotaciones = {
    "top-left": "rotate(0deg)",
    "top-right": "rotate(90deg)",
    "bottom-right": "rotate(180deg)",
    "bottom-left": "rotate(270deg)"
  };

  const estilo = {
    position: 'absolute',
    top: posicion.includes('top') ? '-12px' : 'auto',
    bottom: posicion.includes('bottom') ? '-12px' : 'auto',
    left: posicion.includes('left') ? '-12px' : 'auto',
    right: posicion.includes('right') ? '-12px' : 'auto',
    transform: rotaciones[posicion],
    pointerEvents: 'none',
    zIndex: 5
  };

  return (
    <svg width="110" height="110" viewBox="0 0 120 120" fill="none" style={estilo}>
      <path d="M 10 10 L 110 10 C 70 10, 20 20, 10 110 Z" fill="#A48900" opacity="0.15" />
      <path d="M 8 35 C 25 35, 35 25, 35 8" stroke="#A48900" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 8 65 C 40 65, 65 40, 65 8" stroke="#CEB032" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 8 95 C 55 90, 90 55, 95 8" stroke="#A48900" strokeWidth="2" strokeDasharray="4 3" fill="none" />
      <path d="M 20 45 C 10 28, 28 10, 45 20 C 32 28, 28 35, 20 45 Z" fill="#8A7300" opacity="0.9" />
      <path d="M 50 22 C 68 15, 75 32, 60 42 C 50 35, 45 25, 50 22 Z" fill="#CEB032" />
      <g transform="translate(24, 24)">
        <path d="M 0 18 C -10 5, 5 -10, 18 0 C 30 -10, 45 5, 35 18 C 45 30, 30 45, 18 35 C 5 45, -10 30, 0 18 Z" fill="#A48900" />
        <circle cx="18" cy="18" r="14" fill="#CEB032" />
        <path d="M 12 18 C 12 12, 24 12, 24 18 C 24 24, 14 22, 18 18" stroke="#F2EFE3" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="18" cy="18" r="3" fill="#F2EFE3" />
      </g>
    </svg>
  );
};

/**
 * Componente: DivisorRosas
 * Descripción: Separador ornamental horizontal con degradados suaves y rosa central.
 */
export const DivisorRosas = () => (
  <div className="d-flex align-items-center justify-content-center my-5 py-3 w-100">
    <svg width="100%" height="40" viewBox="0 0 800 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '900px' }}>
      <defs>
        <linearGradient id="gradIzq" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#CEB032" stopOpacity="0" />
          <stop offset="100%" stopColor="#A48900" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="gradDer" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A48900" stopOpacity="1" />
          <stop offset="100%" stopColor="#CEB032" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="50" y1="20" x2="330" y2="20" stroke="url(#gradIzq)" strokeWidth="2" strokeLinecap="round" />
      <path d="M 310 20 C 320 10, 335 12, 340 20 C 335 28, 320 30, 310 20 Z" fill="#CEB032" opacity="0.8" />
      <circle cx="280" cy="20" r="3" fill="#A48900" />
      <circle cx="260" cy="20" r="2" fill="#CEB032" />
      <g transform="translate(370, 0)">
        <path d="M 0 20 C -15 10, -25 15, -30 20 C -25 25, -15 30, 0 20 Z" fill="#8A7300" />
        <path d="M 60 20 C 75 10, 85 15, 90 20 C 85 25, 75 30, 60 20 Z" fill="#8A7300" />
        <circle cx="30" cy="20" r="18" fill="#F2EFE3" stroke="#A48900" strokeWidth="2" />
        <circle cx="30" cy="20" r="15" fill="#CEB032" opacity="0.2" />
        <path d="M 22 20 C 22 13, 38 13, 38 20 C 38 27, 22 27, 22 20 Z" fill="#A48900" />
        <path d="M 25 18 C 28 15, 32 15, 35 18 C 36 22, 32 24, 28 23" stroke="#F2EFE3" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <circle cx="30" cy="20" r="2.5" fill="#F2EFE3" />
      </g>
      <path d="M 490 20 C 480 10, 465 12, 460 20 C 465 28, 480 30, 490 20 Z" fill="#CEB032" opacity="0.8" />
      <circle cx="520" cy="20" r="3" fill="#A48900" />
      <circle cx="540" cy="20" r="2" fill="#CEB032" />
      <line x1="470" y1="20" x2="750" y2="20" stroke="url(#gradDer)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

/**
 * Componente: IconoDestello
 * Descripción: Estrella decorativa para acompañar títulos.
 */
export const IconoDestello = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#CEB032" className="d-inline-block mx-2 align-middle">
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
  </svg>
);

/**
 * Componente: MarcoHelenitaImperial
 * Descripción: Marco vintage de alto detalle con filigrana, esquinas ornamentadas y textura dorada.
 */
export const MarcoHelenitaImperial = ({ children }) => {
  return (
    <div style={{
      position: 'relative',
      display: 'inline-block',
      padding: '18px',
      background: 'linear-gradient(135deg, #FAF8F5 0%, #FFFFFF 50%, #F5EFE0 100%)',
      borderRadius: '20px',
      border: '3px solid #A48900',
      boxShadow: '0 15px 35px rgba(164, 137, 0, 0.25), inset 0 0 15px rgba(206, 176, 50, 0.2)'
    }}>
      {/* Borde interno punteado de filigrana */}
      <div style={{
        position: 'absolute',
        top: '8px',
        left: '8px',
        right: '8px',
        bottom: '8px',
        border: '1.5px dashed #CEB032',
        borderRadius: '14px',
        pointerEvents: 'none',
        zIndex: 2
      }} />

      {/* Flor/Estrella ornamental superior izquierda */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#A48900" style={{ position: 'absolute', top: '2px', left: '2px', zIndex: 4 }}>
        <path d="M12 2 L14 9 L21 12 L14 15 L12 22 L10 15 L3 12 L10 9 Z" />
        <circle cx="12" cy="12" r="3" fill="#CEB032" />
      </svg>

      {/* Flor/Estrella ornamental superior derecha */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#A48900" style={{ position: 'absolute', top: '2px', right: '2px', zIndex: 4 }}>
        <path d="M12 2 L14 9 L21 12 L14 15 L12 22 L10 15 L3 12 L10 9 Z" />
        <circle cx="12" cy="12" r="3" fill="#CEB032" />
      </svg>

      {/* Flor/Estrella ornamental inferior izquierda */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#A48900" style={{ position: 'absolute', bottom: '2px', left: '2px', zIndex: 4 }}>
        <path d="M12 2 L14 9 L21 12 L14 15 L12 22 L10 15 L3 12 L10 9 Z" />
        <circle cx="12" cy="12" r="3" fill="#CEB032" />
      </svg>

      {/* Flor/Estrella ornamental inferior derecha */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#A48900" style={{ position: 'absolute', bottom: '2px', right: '2px', zIndex: 4 }}>
        <path d="M12 2 L14 9 L21 12 L14 15 L12 22 L10 15 L3 12 L10 9 Z" />
        <circle cx="12" cy="12" r="3" fill="#CEB032" />
      </svg>

      {/* Contenedor de la foto */}
      <div style={{
        borderRadius: '10px',
        overflow: 'hidden',
        border: '1px solid #CEB032',
        position: 'relative',
        zIndex: 3
      }}>
        {children}
      </div>
    </div>
  );
};

/**
 * Componente: MicroNotaMusical
 * Descripción: Nota musical con filigrana para acompañar frases o títulos sobre música.
 */
export const MicroNotaMusical = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#A48900" className="d-inline-block mx-1 align-middle">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
  </svg>
);

/**
 * Componente: MariposaFiligrana
 * Descripción: Mariposa estilizada para dar dinamismo a fondos o esquinas secundarias.
 */
export const MariposaFiligrana = () => (
  <svg width="40" height="40" viewBox="0 0 50 50" fill="none" className="d-inline-block">
    <path d="M 25 25 C 15 10, 5 15, 10 30 C 15 40, 25 30, 25 25 Z" fill="#A48900" opacity="0.8" />
    <path d="M 25 25 C 35 10, 45 15, 40 30 C 35 40, 25 30, 25 25 Z" fill="#A48900" opacity="0.8" />
    <path d="M 25 25 C 18 32, 12 42, 22 45 C 26 40, 25 30, 25 25 Z" fill="#CEB032" opacity="0.9" />
    <path d="M 25 25 C 32 32, 38 42, 28 45 C 24 40, 25 30, 25 25 Z" fill="#CEB032" opacity="0.9" />
    <line x1="25" y1="12" x2="25" y2="40" stroke="#F2EFE3" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/**
 * Componente: SombraDorada
 * Descripción: Línea ondulada sutil para subrayar títulos o nombres importantes.
 */
export const SombraDorada = () => (
  <svg width="120" height="12" viewBox="0 0 120 12" fill="none" className="d-block mx-auto mt-1">
    <path d="M0 6 C 30 0, 30 12, 60 6 C 90 0, 90 12, 120 6" stroke="#CEB032" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);