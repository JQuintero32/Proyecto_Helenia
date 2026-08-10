// src/data/escenasData.js

/**
 * Registro de capítulos y sus escenas interactivas en HTML.
 * Las rutas htmlPath apuntan a archivos alojados dentro de la carpeta public/
 */
export const capitulos = {
  1: {
    id: 1,
    titulo: "Capítulo 1: El Inicio de la Leyenda",
    escenas: [
      { id: 1, titulo: "Escena 1", htmlPath: "/escenas/cap1-1/Index.html", tipo: "interactive" },
      { id: 2, titulo: "Escena 2", htmlPath: "/escenas/cap1-2/Index.html", tipo: "interactive" },
      { id: 3, titulo: "Escena 3", htmlPath: "/escenas/cap1-3/Index.html", tipo: "interactive" },
      { id: 4, titulo: "Escena 4", htmlPath: "/escenas/cap1-4/Index.html", tipo: "interactive" },
      { id: 5, titulo: "Escena 5", htmlPath: "/escenas/cap1-5/Index.html", tipo: "interactive" },
    ]
  },
  2: {
    id: 2,
    titulo: "Capítulo 2: El Teatro de las Historias",
    escenas: [
      { id: 6, titulo: "Escena 1", htmlPath: "/escenas/cap2-1/Index.html", tipo: "interactive" },
      { id: 7, titulo: "Escena 2", htmlPath: "/escenas/cap2-2/Index.html", tipo: "interactive" },
      { id: 8, titulo: "Escena 3", htmlPath: "/escenas/cap2-3/Index.html", tipo: "interactive" },
      { id: 9, titulo: "Escena 4", htmlPath: "/escenas/cap2-4/Index.html", tipo: "interactive" },
      { id: 10, titulo: "Escena 5", htmlPath: "/escenas/cap2-5/Index.html", tipo: "interactive" },
    ]
  },
  3: {
    id: 3,
    titulo: "Capítulo 3: La Melodía Eterna",
    escenas: [
      { id: 11, titulo: "Escena 1", htmlPath: "/escenas/cap3-1/Index.html", tipo: "interactive" },
      { id: 12, titulo: "Escena 2", htmlPath: "/escenas/cap3-2/Index.html", tipo: "interactive" },
      { id: 13, titulo: "Escena 3", htmlPath: "/escenas/cap3-3/Index.html", tipo: "interactive" },
      { id: 14, titulo: "Escena 4", htmlPath: "/escenas/cap3-4/Index.html", tipo: "interactive" },
      { id: 15, titulo: "Escena 5", htmlPath: "/escenas/cap3-5/Index.html", tipo: "interactive" },
    ]
  }
};