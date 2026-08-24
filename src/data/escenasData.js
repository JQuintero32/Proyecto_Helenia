/**
 * src/data/escenasData.js
 * Mapeo de Capítulos y Escenas.
 * La propiedad 'disponible' define si el iframe se carga o si se muestra la pantalla temporal.
 */
export const capitulos = {
  1: {
    id: 1,
    titulo: "Capítulo 1",
    escenas: [
      { id: 1, titulo: "Escena 1", rutaHtml: "/escenas/cap1-1/index.html", disponible: false },
      { id: 2, titulo: "Escena 2", rutaHtml: "/escenas/cap1-2/index.html", disponible: false },
      { id: 3, titulo: "Escena 3", rutaHtml: "/escenas/cap1-3/index.html", disponible: false }, // En desarrollo
      { id: 4, titulo: "Escena 4", rutaHtml: "/escenas/cap1-4/index.html", disponible: false }, // En desarrollo
      { id: 5, titulo: "Escena 5", rutaHtml: "/escenas/cap1-5/index.html", disponible: false }  // En desarrollo
    ]
  },
  2: {
    id: 2,
    titulo: "Capítulo 2",
    escenas: [
      { id: 1, titulo: "Escena 1", rutaHtml: "/escenas/cap2-1/index.html", disponible: true },
      { id: 2, titulo: "Escena 2", rutaHtml: "/escenas/cap2-2/index.html", disponible: false },
      { id: 3, titulo: "Escena 3", rutaHtml: "/escenas/cap2-3/index.html", disponible: false },
      { id: 4, titulo: "Escena 4", rutaHtml: "/escenas/cap2-4/index.html", disponible: false },
      { id: 5, titulo: "Escena 5", rutaHtml: "/escenas/cap2-5/index.html", disponible: false }
    ]
  },
  3: {
    id: 3,
    titulo: "Capítulo 3",
    escenas: [
      { id: 1, titulo: "Escena 1", rutaHtml: "/escenas/cap3-1/index.html", disponible: false },
      { id: 2, titulo: "Escena 2", rutaHtml: "/escenas/cap3-2/index.html", disponible: false },
      { id: 3, titulo: "Escena 3", rutaHtml: "/escenas/cap3-3/index.html", disponible: false },
      { id: 4, titulo: "Escena 4", rutaHtml: "/escenas/cap3-4/index.html", disponible: false }
    ]
  }
};