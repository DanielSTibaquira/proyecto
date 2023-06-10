

function filtrarImagenesPorCarpeta(carpeta) {
  const gallery = document.getElementById("gallery");

  const imagenes = gallery.getElementsByTagName("img");
  // console.log(gallery.getElementsByTagName("img"));

  for (let i = 0; i < imagenes.length; i++) {
    const img = imagenes[i];
    const src = img.src;

    if (carpeta === "") {
      // Si carpeta es vacío, mostrar todas las imágenes
      img.style.display = "block";
    } else if (src.includes("/imagenes/" + carpeta + "/")) {
      // Mostrar la imagen si pertenece a la carpeta seleccionada
      img.style.display = "block";
    } else {
      // Ocultar la imagen si no pertenece a la carpeta seleccionada
      img.style.display = "none";
    }
  }
}

function filtrarImagenesPorFiltro(filtro) {
  var gallery = document.getElementById("gallery").getElementsByTagName("a");

  for (var i = 0; i < gallery.length; i++) {
    var imagen = gallery[i];

    if (filtro === "" || imagen.href.includes(filtro)) {
      imagen.style.display = "inline-block";
    } else {
      imagen.style.display = "none";
    }
  }
}


function cambiarIdioma() {
  var inicio = document.getElementById("inicio");
  var boton = document.getElementById("boton");
  var portafolio = document.getElementById("Portafolio");
/*   var seleccionar = document.getElementById("Seleccionar");
  var f1 = document.getElementById("f1");
  var f2 = document.getElementById("f2");
  var f3 = document.getElementById("f3");
  var f4 = document.getElementById("f4");
  var mostrar = document.getElementById("Mostrar"); */

  if (document.documentElement.lang === "es") {
    inicio.innerHTML = "Home";
    boton.innerHTML = "Change Language";
    portafolio.innerHTML = "Portfolio";
/*     seleccionar.innerHTML = "Select filter...";
    f1.innerHTML = "Filter 1";
    f2.innerHTML = "Filter 2";
    f3.innerHTML = "Filter 3";
    f4.innerHTML = "Filter 4";
    mostrar.innerHTML = "Show All"; */
    document.documentElement.lang = "en";
  } else {
    inicio.innerHTML = "Inicio";
    boton.innerHTML = "Cambiar Idioma";
    portafolio.innerHTML = "Portafolio";
/*     seleccionar.innerHTML = "Seleccionar filtro...";
    f1.innerHTML = "Filtro 1";
    f2.innerHTML = "Filtro 2";
    f3.innerHTML = "Filtro 3";
    f4.innerHTML = "Filtro 4";
    mostrar.innerHTML = "Mostrar todo"; */
    document.documentElement.lang = "es";
  }
}

function recuperarCodigo(){
/*   var cod = document.getElementById("uno");
  console.log(cod) */
}


let json = {
  "dibujo1": {
    "nombreDibujo": "Dibujo Abstracto",
    "estiloArtistico": "Expresionismo",
    "nombreArtista": "Ana López",
    "tiempoDesarrollo": "2 semanas",
    "precioEstimado": "$500",
    "codigo": "naruto"
  },
  "dibujo2": {
    "nombreDibujo": "Retrato en Carboncillo",
    "estiloArtistico": "Realismo",
    "nombreArtista": "Juan Martínez",
    "tiempoDesarrollo": "1 mes",
    "precioEstimado": "$800",
    "codigo": "naruto2"
  },
  "dibujo3": {
    "nombreDibujo": "Paisaje Acuarela",
    "estiloArtistico": "Impresionismo",
    "nombreArtista": "María Rodríguez",
    "tiempoDesarrollo": "3 semanas",
    "precioEstimado": "$600",
    "codigo": "naruto3"
  },
  "dibujo4": {
    "nombreDibujo": "Ilustración Digital",
    "estiloArtistico": "Pop Art",
    "nombreArtista": "Carlos Sánchez",
    "tiempoDesarrollo": "2 semanas",
    "precioEstimado": "$400",
    "codigo": "naruto4"
  },
  "dibujo5": {
    "nombreDibujo": "Naturaleza Muerta",
    "estiloArtistico": "Hiperrealismo",
    "nombreArtista": "Laura Gómez",
    "tiempoDesarrollo": "1 mes y medio",
    "precioEstimado": "$1200",
    "codigo": "naruto5"
  },
  "dibujo6": {
    "nombreDibujo": "Abstracción Geométrica",
    "estiloArtistico": "Arte Concreto",
    "nombreArtista": "Pedro Ramírez",
    "tiempoDesarrollo": "2 semanas",
    "precioEstimado": "$900",
    "codigo": "naruto6"
  }
}


// Código 

/* cod = document.getElementById("naruto").id;
console.log(cod) */

var imagenes = document.getElementsByClassName('imagen');

  let id = "";
    for (var i = 0; i < imagenes.length; i++) {
      imagenes[i].addEventListener('mouseover', function(event) {
         id = event.target.id;
        console.log('ID de la imagen: ' + id);
      });
    }

console.log('ID de la imagen: ' + id);


/* 

 */



function crearFicha() {
  let nombreI = "";
let artistaI = "";
let estiloI = "";
let tiempoI = "";
let precioI = "";
let codigo = "";

// Verificar el código en el JSON y asignar los valores correspondientes
  for (let dibujo in json) {
    if (json[dibujo].codigo === id) {
      nombreI = json[dibujo].nombreDibujo;
      artistaI = json[dibujo].nombreArtista;
      estiloI = json[dibujo].estiloArtistico;
      tiempoI = json[dibujo].tiempoDesarrollo;
      precioI = json[dibujo].precioEstimado;
      codigo = json[dibujo].codigo;
      break; 
    }
  }

  let ficha = `
  <div class="interfaz fade-in">
    <p class="nombreI">Nombre: ${nombreI}</p>
    <p class="artistaI">Artista: ${artistaI}</p>
    <p class="estiloI">Estilo Dibujo: ${estiloI}</p>
    <p class="tiempoI">Tiempo de Desarrollo: ${tiempoI}</p>
    <p class="precioI">Precio Estimado: ${precioI}</p>
  </div>
  `;

  const fi= document.getElementById("contenido");
  fi.innerHTML=ficha;
}

function eliminarFicha() {
  const fi = document.getElementById("contenido");
  while (fi.firstChild) {
    fi.removeChild(fi.firstChild);
  }
}