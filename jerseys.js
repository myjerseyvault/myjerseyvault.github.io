/*
  ============================================
   LISTA DE JERSEYS EN STOCK — My Jersey Vault
  ============================================

  Este es el ÚNICO archivo que necesitas editar para tu catálogo.

  Cada jersey va entre llaves { } y separado del siguiente con una coma.
  Ejemplo de un jersey:

    {
      nombre: "México Local 2026",
      deporte: "Fútbol",
      precio: 749,
      tallas: ["S", "M", "L"],
      foto: "fotos/mexico-local-2026-frente.jpg",
      fotoAtras: "fotos/mexico-local-2026-atras.jpg"
    },

  - foto es la parte de ENFRENTE (la que se ve primero).
  - fotoAtras es la ESPALDA (se ve al tocar la foto). Si no tienes foto
    de atrás, borra esa línea y la coma de la línea anterior.

  PRECIOS DE REFERENCIA:
  - Fútbol temporada actual ........ 749
  - Fútbol retro ................... 849
  - Béisbol y Fútbol americano ..... 1099
  - Fórmula 1 ...................... 849

  REGLAS:
  - nombre y foto van entre comillas " ".
  - deporte: usa uno de estos: "Fútbol", "Fútbol americano", "Béisbol", "Fórmula 1".
  - precio: solo el número, SIN comillas, SIN $ y SIN comas (escribe 1299, no "$1,299").
  - tallas: cada talla entre comillas, separadas por comas, dentro de [ ].
  - Para QUITAR un jersey vendido: borra todo su bloque, desde { hasta },
  - Guarda el archivo y recarga la página para ver los cambios.
*/

const JERSEYS = [

  {
    nombre: "Barcelona 2026 · Lamine Yamal #10",
    deporte: "Fútbol",
    precio: 749,
    tallas: ["M"],
    foto: "fotos/jersey-barcelona-2026-lamine-yamal-talla-m-frente.jpeg",
    fotoAtras: "fotos/jersey-barcelona-2026-lamine-yamal-talla-m-atras.jpeg"
  },

  {
    nombre: "Real Madrid 2006 · Ronaldo Nazário #9",
    deporte: "Fútbol",
    precio: 849,
    tallas: ["L"],
    foto: "fotos/jersey-real-madrid-2006-ronaldo-nazario-talla-l-frente.jpeg",
    fotoAtras: "fotos/jersey-real-madrid-2006-ronaldo-nazario-talla-l-atras.jpeg"
  },

  {
    nombre: "Real Madrid 2026 · Bellingham #5",
    deporte: "Fútbol",
    precio: 749,
    tallas: ["S"],
    foto: "fotos/jersey-real-madrid-2026-bellingham-talla-s-frente.jpeg",
    fotoAtras: "fotos/jersey-real-madrid-2026-bellingham-talla-s-atras.jpeg"
  },

  {
    nombre: "Barcelona 2009 · Messi #10",
    deporte: "Fútbol",
    precio: 849,
    tallas: ["M"],
    foto: "fotos/jersey-barcelona-2009-messi-talla-m-frente.jpeg",
    fotoAtras: "fotos/jersey-barcelona-2009-messi-talla-m-atras.jpeg"
  },

  {
    nombre: "Brasil 2002 · Ronaldo Nazário #9",
    deporte: "Fútbol",
    precio: 849,
    tallas: ["L"],
    foto: "fotos/jersey-brasil-2002-ronaldo-nazario-talla-l-frente.jpeg",
    fotoAtras: "fotos/jersey-brasil-2002-ronaldo-nazario-talla-l-atras.jpeg"
  },

  {
    nombre: "Francia 1998 · Zidane #10",
    deporte: "Fútbol",
    precio: 849,
    tallas: ["L"],
    foto: "fotos/jersey-francia-1998-zidane-talla-l-frente.jpeg",
    fotoAtras: "fotos/jersey-francia-1998-zidane-talla-l-atras.jpeg"
  },

  {
    nombre: "Juventus 2014 · Pogba #6",
    deporte: "Fútbol",
    precio: 849,
    tallas: ["L"],
    foto: "fotos/jersey-juventus-2014-pogba-talla-l-frente.jpeg",
    fotoAtras: "fotos/jersey-juventus-2014-pogba-talla-l-atras.jpeg"
  },

  {
    nombre: "Liverpool 2006 · Gerrard #8",
    deporte: "Fútbol",
    precio: 849,
    tallas: ["L"],
    foto: "fotos/jersey-liverpool-2006-gerrard-talla-l-frente.jpeg",
    fotoAtras: "fotos/jersey-liverpool-2006-gerrard-talla-l-atras.jpeg"
  },

  {
    nombre: "Milan 2006 · Kaká #22",
    deporte: "Fútbol",
    precio: 849,
    tallas: ["M"],
    foto: "fotos/jersey-milan-2006-kaka-talla-m-frente.jpeg",
    fotoAtras: "fotos/jersey-milan-2006-kaka-talla-m-atras.jpeg"
  },

  {
    nombre: "New York Yankees · Judge #99",
    deporte: "Béisbol",
    precio: 1099,
    tallas: ["M"],
    foto: "fotos/jersey-yankees-judge-talla-m-frente.jpeg",
    fotoAtras: "fotos/jersey-yankees-judge-talla-m-atras.jpeg"
  },

];
