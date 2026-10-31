// ---------- Botones de la ventana ----------
document.querySelector('#btn-min').addEventListener('click', () => {
  window.api.minimizar();
});

document.querySelector('#btn-cerrar').addEventListener('click', () => {
  window.api.cerrar();
});

// ---------- Decoración (se genera con código para no repetir HTML) ----------

// Tornillos y textura de metal en cada panel
document.querySelectorAll('.panel').forEach((panel) => {
  panel.insertAdjacentHTML('beforeend',
    '<i class="tornillo" style="left:5px"></i>' +
    '<i class="tornillo" style="right:5px"></i>' +
    '<svg class="grano" aria-hidden="true"><rect width="100%" height="100%" filter="url(#grano)"/></svg>'
  );
});

// 18 barras del espectro, con altura al azar solo para que se vea el diseño
const espectro = document.querySelector('#espectro');
for (let i = 0; i < 18; i++) {
  const altura = 10 + Math.random() * 90;
  espectro.insertAdjacentHTML('beforeend',
    `<div class="col"><div class="barra-esp" style="height:${altura}%"></div></div>`
  );
}

// 11 sliders del ecualizador (preamp + 10 bandas)
const bandas = ['PRE', '60', '170', '310', '600', '1K', '3K', '6K', '12K', '14K', '16K'];
document.querySelector('#ecualizador').innerHTML = bandas.map((b) => `
  <div class="banda">
    <div class="ranura"><div class="perilla" style="top:40%"></div></div>
    <span class="etiqueta">${b}</span>
  </div>
`).join('');

// ---------- Icono de play/pausa (de antes) ----------
let sonando = false;
const iconoPlay = document.querySelector('#icono-play');

document.querySelector('#btn-play').addEventListener('click', () => {
  sonando = !sonando;

  if (sonando) {
    iconoPlay.innerHTML = '<path d="M3 2h3v10H3zM8 2h3v10H8z" fill="#0f5a12"/>';
  } else {
    iconoPlay.innerHTML = '<path d="M3 1l10 6-10 6z" fill="#0f5a12"/>';
  }
});