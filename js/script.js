function encriptarTexto(texto) {
  const reglas = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };

  return texto.replace(/[eioua]/g, (letra) => reglas[letra]);
}

function desencriptarTexto(texto) {
  const reglas = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };

  return texto.replace(/enter|imes|ai|ober|ufat/g, (palabra) => reglas[palabra]);
}

function copiarTexto() {
  const textarea = document.getElementById('texto-derecha');
  const copiarBtn = document.getElementById('copiar-btn');
  if (textarea.value.trim() === "") {
    textarea.classList.add('hidden');
    copiarBtn.classList.add('hidden');
  } else {
    textarea.select();
    navigator.clipboard.writeText(textarea.value)
      .then(() => {
        console.log('Texto copiado al portapapeles');
      })
      .catch(err => {
        console.error('Error al copiar el texto: ', err);
      });
  }
}

function escribirTextoLentamente(textarea, texto, intervalo = 40) {
  let indice = 0;
  textarea.value = '';
  const audio = document.getElementById('background-sound');
  audio.play();
  
  const intervalId = setInterval(() => {
    textarea.value += texto[indice];
    indice++;
    if (indice >= texto.length) {
      clearInterval(intervalId);
      audio.pause();
      audio.currentTime = 0; // Reiniciar el audio
    }
  }, intervalo);
}

document.addEventListener('DOMContentLoaded', () => {
  const textareaIzquierda = document.getElementById('texto-izquierda');
  const placeholderImage = document.getElementById('placeholder-image');
  const textareaDerecha = document.getElementById('texto-derecha');
  const copiarBtn = document.getElementById('copiar-btn');
  const encriptarBtn = document.querySelector('button[type="submit"]');
  const desencriptarBtn = document.querySelector('button[formaction="desencriptar"]');

  function validarTexto(texto) {
    const regex = /[^a-z\s]/g; // Solo letras minúsculas y espacios permitidos
    return texto.match(regex);
  }

  function actualizarEstadoBotones() {
    encriptarBtn.disabled = textareaIzquierda.value.trim() === "";
    desencriptarBtn.disabled = textareaIzquierda.value.trim() === "";
    copiarBtn.disabled = textareaDerecha.value.trim() === "";
  }

  textareaIzquierda.addEventListener('input', () => {
    let texto = textareaIzquierda.value;
    const caracteresNoPermitidos = validarTexto(texto);
    if (caracteresNoPermitidos) {
      alert('El texto contiene mayúsculas, acentos o caracteres no permitidos.');
      texto = texto.replace(/[^a-z\s]/g, ''); // Eliminar caracteres no permitidos
      textareaIzquierda.value = texto;
    }

    if (texto.trim() !== "") {
      placeholderImage.classList.add('hidden');
      textareaDerecha.classList.remove('hidden');
      copiarBtn.classList.remove('hidden');
    } else {
      placeholderImage.classList.remove('hidden');
      textareaDerecha.classList.add('hidden');
      copiarBtn.classList.add('hidden');
    }

    actualizarEstadoBotones();
  });

  textareaDerecha.addEventListener('input', actualizarEstadoBotones);

  encriptarBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const texto = textareaIzquierda.value;
    if (validarTexto(texto)) {
      alert('El texto contiene mayúsculas, acentos o caracteres no permitidos.');
      return;
    }
    const textoEncriptado = encriptarTexto(texto);
    escribirTextoLentamente(textareaDerecha, textoEncriptado);
    textareaDerecha.classList.remove('hidden');
    actualizarEstadoBotones();
  });

  desencriptarBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const texto = textareaIzquierda.value;
    if (validarTexto(texto)) {
      alert('El texto contiene mayúsculas, acentos o caracteres no permitidos.');
      return;
    }
    const textoDesencriptado = desencriptarTexto(texto);
    escribirTextoLentamente(textareaDerecha, textoDesencriptado);
    textareaDerecha.classList.remove('hidden');
    actualizarEstadoBotones();
  });

  actualizarEstadoBotones(); // Inicializar el estado de los botones
});