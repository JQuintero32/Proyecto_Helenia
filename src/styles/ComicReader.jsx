// src/data/escenasData.js

export const escenasCapitulo1 = [
  // --- ESCENAS COMPLETADAS O EN PROCESO ---
  {
    id: 1,
    titulo: "Escena 1",
    imagen: "/assets/escenas/escena1.jpg", // Tu imagen real
    texto: "Texto o diálogo de la escena 1...",
    completada: true
  },
  {
    id: 2,
    titulo: "Escena 2",
    imagen: "/assets/escenas/escena2.jpg",
    texto: "Texto o diálogo de la escena 2...",
    completada: true
  },
  {
    id: 3,
    titulo: "Escena 3",
    imagen: "/assets/escenas/escena3.jpg",
    texto: "Texto o diálogo de la escena 3...",
    completada: true
  },

  // --- ESCENAS EN DESARROLLO (4 a 14) ---
  // Las dejamos listadas para que la estructura del lector ya soporte las 14
  ...Array.from({ length: 11 }, (_, index) => {
    const numeroEscena = index + 4;
    return {
      id: numeroEscena,
      titulo: `Escena ${numeroEscena}`,
      imagen: `https://via.placeholder.com/800x450/333333/ffffff?text=Escena+${numeroEscena}+(En+desarrollo)`,
      texto: `Borrador del guion / descripción para la escena ${numeroEscena}.`,
      completada: false
    };
  })
];