{/* <div id="chatbox"></div>
<input type="text" id="messageInput" placeholder="Escribe tu mensaje">
<button onclick="sendMessage()">Enviar</button>
 */}
 const images = document.getElementsByClassName('clickable-image');

 for (let i = 0; i < images.length; i++) {
   images[i].addEventListener('click', function() {
     this.classList.toggle('enlarged');
   });
 }
/*  const chatbox = document.getElementById('chatbox');
 const input = document.getElementById('messageInput');
 const button = document.querySelector('.button');

 if (chatbox) {
   chatbox.remove();
 }

 if (input) {
   input.remove();
 }

 if (button) {
   button.remove();
 }
} */
 function mostrarElementos() {
  
    const elementoPadre = document.getElementById('contenedor');
  
    const chatbox = document.createElement('div');
    chatbox.id = 'chatbox';
    chatbox.className = 'chatbot';
  
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'messageInput';
    input.className = 'input-chatbox';
    input.placeholder = 'Escribe tu mensaje';
  
    const button = document.createElement('button');
    button.textContent = 'Enviar';
    button.className = 'button';
    button.onclick = sendMessage;
  
    elementoPadre.appendChild(chatbox);
    elementoPadre.appendChild(input);
    elementoPadre.appendChild(button);
  }
  
  function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
  
    // Aquí puedes agregar la lógica para enviar el mensaje
  
    messageInput.value = '';
  
    // Limpiar el mensaje al dar clic en el botón
    const button = document.querySelector('.button');
    button.addEventListener('click', function() {
      messageInput.value = '';
    });
  }
  


  function cambiarIdioma() {
    var cita = document.getElementById("cita");
    var sectionH2 = document.getElementById("estilo");
    var sectionH2_2 = document.getElementById("section-h2");
    var sectionH2_3 = document.getElementById("section-h2-2");
    var inicio = document.getElementById("inicio");
    var boton = document.getElementById("boton");
    var portafolio = document.getElementById("Portafolio");
  
    if (document.documentElement.lang === "es") {
      cita.innerHTML = "«Drawing is putting a line around an idea». Henri Matisse.";
      sectionH2.innerHTML = "Drawing Styles";
      sectionH2_2.innerHTML = "Section content.";
      sectionH2_3.innerHTML = "Section content.";
      inicio.innerHTML = "Home";
      boton.innerHTML = "Change Language";
      portafolio.innerHTML = "Portfolio";
      document.documentElement.lang = "en";
    } else {
      cita.innerHTML = "«Dibujar es poner una línea alrededor de una idea». Henri Matisse.";
      sectionH2.innerHTML = "Estilos de dibujo";
      sectionH2_2.innerHTML = "Contenido de la sección.";
      sectionH2_3.innerHTML = "Contenido de la sección.";
      inicio.innerHTML = "Inicio";
      boton.innerHTML = "Cambiar Idioma";
      portafolio.innerHTML = "Portafolio";
      document.documentElement.lang = "es";
    }
  }

  function cerrarElementos() {
  const chatbox = document.getElementById('chatbox');
  const input = document.getElementById('messageInput');
  const button = document.querySelector('.button');

  if (chatbox) {
    chatbox.remove();
  }

  if (input) {
    input.remove();
  }

  if (button) {
    button.remove();
  }
}