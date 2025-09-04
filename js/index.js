document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('inputText');
  const button = document.getElementById('buttonText');

  button.addEventListener('click', () => {
    const usuario = input.value.trim();
    if (usuario !== '') {
      localStorage.setItem('textoGuardado', usuario); // guarda en localStorage
      alert('Usuario guardado en localStorage.');
      input.value = ''; // limpia el campo
    } else {
      alert('Por favor, escribe un usuario para poder iniciar.');
    }
  });
});
