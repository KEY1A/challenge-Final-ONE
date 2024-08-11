document.addEventListener('DOMContentLoaded', () => {
  const textareaIzquierda = document.getElementById('texto-izquierda');
  const placeholderImage = document.getElementById('placeholder-image');
  const textareaDerecha = document.getElementById('texto-derecha');
  const copiarBtn = document.getElementById('copiar-btn');
  const encriptarBtn = document.getElementById('encriptar-btn');
  const desencriptarBtn = document.getElementById('desencriptar-btn');

  textareaIzquierda.addEventListener('input', () => {
    if (textareaIzquierda.value.trim() !== "") {
      placeholderImage.classList.add('hidden');
      textareaDerecha.classList.remove('hidden');
      copiarBtn.classList.remove('hidden');
    } else {
      placeholderImage.classList.remove('hidden');
      textareaDerecha.classList.add('hidden');
      copiarBtn.classList.add('hidden');
    }
  });

  encriptarBtn.addEventListener('click', () => {
    const texto = textareaIzquierda.value;
    const textoEncriptado = encriptarTexto(texto);
    escribirTextoLentamente(textareaDerecha, textoEncriptado);
    textareaDerecha.classList.remove('hidden');
  });

  desencriptarBtn.addEventListener('click', () => {
    const texto = textareaIzquierda.value;
    const textoDesencriptado = desencriptarTexto(texto);
    escribirTextoLentamente(textareaDerecha, textoDesencriptado);
    textareaDerecha.classList.remove('hidden');
  });
});