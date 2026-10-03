/*
  Este archivo lee la lista de jerseys.js y dibuja el catálogo.
  No necesitas editarlo: para cambiar jerseys, edita jerseys.js.
*/

const WHATSAPP = "528663563946";

const lista = document.getElementById("lista-jerseys");
const filtros = document.getElementById("filtros");

// Evita que caracteres especiales en los nombres rompan la página
function limpiar(texto) {
  const div = document.createElement("div");
  div.textContent = texto ?? "";
  return div.innerHTML;
}

function formatoPrecio(precio) {
  return "$" + Number(precio).toLocaleString("es-MX") + " MXN";
}

// Si el jersey tiene "oferta", ese es el precio que paga el cliente
function enOferta(jersey) {
  return jersey.oferta != null && Number(jersey.oferta) < Number(jersey.precio);
}

function precioFinal(jersey) {
  return enOferta(jersey) ? jersey.oferta : jersey.precio;
}

function dibujarPrecio(jersey) {
  if (!enOferta(jersey)) return `<span class="card-price">${formatoPrecio(jersey.precio)}</span>`;
  return `
    <span class="card-price sale">
      <s class="price-old">${formatoPrecio(jersey.precio)}</s>
      <span class="price-new">${formatoPrecio(jersey.oferta)}</span>
    </span>`;
}

function linkWhatsApp(jersey) {
  const mensaje = `Hola, me interesa el jersey ${jersey.nombre} (${formatoPrecio(precioFinal(jersey))}) en talla ___`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

// Frente y espalda: si hay fotoAtras, al tocar la foto se cambia de lado
function dibujarFotos(j) {
  const etiqueta = enOferta(j) ? `<span class="sale-tag">Oferta</span>` : "";
  const frente = `<img class="card-img" src="${limpiar(j.foto)}" alt="${limpiar(j.nombre)} - frente" loading="lazy">`;
  if (!j.fotoAtras) return `<div class="card-photo">${frente}${etiqueta}</div>`;

  return `
    <button type="button" class="card-photo flip" aria-label="Ver frente y espalda de ${limpiar(j.nombre)}">
      ${etiqueta}
      ${frente}
      <img class="card-img back" src="${limpiar(j.fotoAtras)}" alt="${limpiar(j.nombre)} - espalda" loading="lazy">
      <span class="flip-tag"><span class="tag-front">Frente</span><span class="tag-back">Espalda</span> ↻</span>
    </button>`;
}

function dibujarCatalogo(deporte) {
  const visibles = deporte === "Todos"
    ? JERSEYS
    : JERSEYS.filter(j => j.deporte === deporte);

  if (visibles.length === 0) {
    lista.innerHTML = `
      <div class="empty">
        Estamos renovando el stock. Escríbenos por WhatsApp y te conseguimos el jersey que buscas.
      </div>`;
    return;
  }

  lista.innerHTML = visibles.map(j => `
    <article class="card">
      ${dibujarFotos(j)}
      <div class="card-body">
        <span class="card-sport">${limpiar(j.deporte)}</span>
        <h3 class="card-name">${limpiar(j.nombre)}</h3>
        ${dibujarPrecio(j)}
        <div class="sizes">
          ${(j.tallas || []).map(t => `<span class="size">${limpiar(t)}</span>`).join("")}
        </div>
        <div class="card-btn">
          <a class="btn btn-gold" href="${linkWhatsApp(j)}" target="_blank" rel="noopener">Lo quiero</a>
        </div>
      </div>
    </article>
  `).join("");
}

function dibujarFiltros() {
  const deportes = [...new Set(JERSEYS.map(j => j.deporte))];
  // Solo mostramos filtros si hay jerseys de más de un deporte
  if (deportes.length < 2) return;

  filtros.innerHTML = ["Todos", ...deportes].map((d, i) =>
    `<button class="filter-btn${i === 0 ? " active" : ""}" data-deporte="${limpiar(d)}">${limpiar(d)}</button>`
  ).join("");

  filtros.addEventListener("click", e => {
    const boton = e.target.closest(".filter-btn");
    if (!boton) return;
    filtros.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    boton.classList.add("active");
    dibujarCatalogo(boton.dataset.deporte);
  });
}

// Tocar la foto cambia entre frente y espalda
lista.addEventListener("click", e => {
  const foto = e.target.closest(".flip");
  if (foto) foto.classList.toggle("showing-back");
});

dibujarFiltros();
dibujarCatalogo("Todos");
