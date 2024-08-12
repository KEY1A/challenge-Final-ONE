// Reglas de encriptación y desencriptación
const reglasEncriptacion = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

const reglasDesencriptacion = {
  'enter': 'e',
  'imes': 'i',
  'ai': 'a',
  'ober': 'o',
  'ufat': 'u'
};

// Función para encriptar texto
function encriptarTexto(texto) {
  return texto.replace(/[eioua]/g, letra => reglasEncriptacion[letra]);
}

// Función para desencriptar texto
function desencriptarTexto(texto) {
  return texto.replace(/enter|imes|ai|ober|ufat/g, palabra => reglasDesencriptacion[palabra]);
}

// Función para copiar texto al portapapeles
function copiarTexto() {
  const textarea = document.getElementById('texto-derecha');
  const copiarBtn = document.getElementById('copiar-btn');
  if (textarea.value.trim() === "") {
    textarea.classList.add('hidden');
    copiarBtn.classList.add('hidden');
  } else {
    textarea.select();
    navigator.clipboard.writeText(textarea.value)
      .then(() => console.log('Texto copiado al portapapeles'))
      .catch(err => console.error('Error al copiar el texto: ', err));
  }
}

// Función para escribir texto lentamente y con efecto de sonido
function escribirTextoLentamente(textarea, texto, intervalo = 40) {
  let indice = 0;
  textarea.value = '';
  const audio = document.getElementById('background-sound');
  audio.play();
  
  const intervalId = setInterval(() => {
    textarea.value += texto[indice++];
    if (indice >= texto.length) {
      clearInterval(intervalId);
      audio.pause();
      audio.currentTime = 0; // Reiniciar el audio
    }
  }, intervalo);
}

// Función para validar texto
function validarTexto(texto) {
  const regex = /[^a-z\s]/g; // Solo letras minúsculas y espacios permitidos
  return texto.match(regex);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  const textareaIzquierda = document.getElementById('texto-izquierda');
  const placeholderImage = document.getElementById('placeholder-image');
  const textareaDerecha = document.getElementById('texto-derecha');
  const copiarBtn = document.getElementById('copiar-btn');
  const encriptarBtn = document.querySelector('button[type="submit"]');
  const desencriptarBtn = document.querySelector('button[formaction="desencriptar"]');

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
      textareaDerecha.value = '';
      copiarBtn.classList.add('hidden');
    }
  });

  encriptarBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const texto = textareaIzquierda.value.trim();
    if (texto === "") {
      alert('Por favor, ingrese texto para encriptar.');
      return;
    }
    if (validarTexto(texto)) {
      alert('El texto contiene mayúsculas, acentos o caracteres no permitidos.');
      return;
    }
    const textoEncriptado = encriptarTexto(texto);
    escribirTextoLentamente(textareaDerecha, textoEncriptado);
    textareaDerecha.classList.remove('hidden');
  });

  desencriptarBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const texto = textareaIzquierda.value.trim();
    if (texto === "") {
      alert('Por favor, ingrese texto para desencriptar.');
      return;
    }
    if (validarTexto(texto)) {
      alert('El texto contiene mayúsculas, acentos o caracteres no permitidos.');
      return;
    }
    const textoDesencriptado = desencriptarTexto(texto);
    escribirTextoLentamente(textareaDerecha, textoDesencriptado);
    textareaDerecha.classList.remove('hidden');
  });
});