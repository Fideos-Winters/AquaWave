document.querySelector('#btn-min').addEventListener('click', () => {
  window.api.minimizar();
});

document.querySelector('#btn-cerrar').addEventListener('click', () => {
  window.api.cerrar();
});

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