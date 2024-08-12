# Encriptador/Desencriptador de Texto

## Descripción

¡Bienvenidas y bienvenidos a nuestro desafío de encriptación de texto!

Este proyecto es una aplicación web que permite encriptar y desencriptar textos utilizando un conjunto específico de reglas de encriptación. La aplicación está diseñada para funcionar solo con letras minúsculas y no admite letras con acentos ni caracteres especiales.

### Llaves de Encriptación

Las "llaves" de encriptación que utilizamos son las siguientes:

- La letra "e" se convierte en "enter"
- La letra "i" se convierte en "imes"
- La letra "a" se convierte en "ai"
- La letra "o" se convierte en "ober"
- La letra "u" se convierte en "ufat"

Por ejemplo:
- "gato" se convierte en "gaitober"
- "gaitober" se convierte en "gato"

## Requisitos

- La aplicación debe funcionar solo con letras minúsculas.
- No deben ser utilizados letras con acentos ni caracteres especiales.
- Debe ser posible convertir una palabra a su versión encriptada y también devolver una palabra encriptada a su versión original.
- La página debe tener campos para la inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre las dos opciones.
- El resultado debe ser mostrado en la pantalla.

### Extras

- Un botón que copie el texto encriptado/desencriptado al portapapeles, similar a la funcionalidad de `Ctrl+C` o la opción "copiar" del menú de las aplicaciones.

## Estructura del Proyecto

css/styles.css
index.html
js/script.js theme.js
README.md
LICENSE


## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/tu-usuario/encriptador-desencriptador.git
    ```

2. Navega a la carpeta del proyecto:
   ```
   cd encriptador-desencriptador
   ```
## Uso

1. Abre el archivo `index.html` en tu navegador.
2. Ingresa el texto que deseas encriptar o desencriptar en el campo correspondiente.
3. Haz clic en el botón "Encriptar" o "Desencriptar" según lo que desees hacer.
4. El resultado se mostrará en el area de la derecha de la pantalla.
5. Si deseas copiar el texto encriptado/desencriptado, haz clic en el botón "Copiar".

## Publicacion en Github Pages

El proyecto esta disponible en Github Pages, lo pueden ver en este enlace, [Encriptador/Desencriptador](https://key1a.github.io/challenge-Final-ONE/)

## Personalización

Si deseas personalizar el estilo de la aplicación, puedes modificar el archivo `css/styles.css`. Aquí encontrarás las clases y estilos utilizados en la página.

## Cambiar el tema

El archivo `js/theme.js` contiene la funcionalidad para cambiar el tema de la aplicación. Puedes modificar los colores y estilos de los temas existentes o agregar nuevos temas. Puedes cambiar las fuentes agregando una nueva fuente de Google Fonts en el archivo `index.html` y modificando los estilos en `css/styles.css`.

## Licencia

Este proyecto está bajo la [Licencia GNU General Public License v3.0](https://github.com/KEY1A/challenge-Final-ONE/blob/main/LICENSE)
## Autor 

Keyla Valdes Hernandez

## Agradecimientos

Agradezco a mi familia por su apoyo y a Oracle y Alura por su excelente contenido educativo y la oportunidad que nos han brindado de aprender y crecer en el mundo de la programación.
```
