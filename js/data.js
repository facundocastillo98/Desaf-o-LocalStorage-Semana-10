document.addEventListener('DOMContentLoaded', () => {
  const span = document.getElementById('data');
  const usuario = localStorage.getItem('textoGuardado'); // obtenemos el dato

  if (usuario) {
    span.textContent = usuario;
  } else {
    span.textContent = 'No hay datos guardados.';
  }
});
