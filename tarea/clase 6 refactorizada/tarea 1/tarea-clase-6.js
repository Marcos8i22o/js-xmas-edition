/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, 
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

//REFACTOR

/*# Tarea clase 8


A las 2 tareas de la clase 6, ponerles las validaciones que consideren necesarias. 
(usando RegExp, Objetos, forEach, poner estilos, mostrar los errores en la interfaz del usuario y escribir pruebas)

TIP: Las edades no pueden tener decimales.
*/

const $botonCrearIntegrantes = obtenerElemento("#crear-integrantes");
const $botonCalcular = obtenerElemento("#calcular");
const $botonResetear = obtenerElemento("#resetear");
const $resultados = obtenerElemento("#resultados");
const $contenedorIntegrantes = obtenerElemento("#integrantes");
const textoParrafoEdadMayor = document.querySelector("#edad-mayor").textContent;
const textoParrafoEdadMenor = document.querySelector("#edad-menor").textContent;
const textoParrafoEdadPromedio = document.querySelector("#edad-promedio").textContent;
const $cantidadDeIntegrantes = obtenerElemento("#cantidad-de-integrantes");
const $errores = obtenerElemento("#errores");
const numerosPermitidos = /^[1-9]+/;
const caracterNoPermitido = /\./;

function obtenerElemento(elemento) {
  return document.querySelector(elemento);
}

$botonCrearIntegrantes.onclick = function () {
  borrarErrorCantidadDeIntegrantes();
  deshabilitarBotonCrearIntegrantes();

  const cantidadDeIntegrantes = Number($cantidadDeIntegrantes.value);

  const errorCantidadDeIntegrantes = validarIntegrantes(cantidadDeIntegrantes);

  if (!errorCantidadDeIntegrantes) {
    crearIntegrantes(cantidadDeIntegrantes, $contenedorIntegrantes);
    mostrar($contenedorIntegrantes);
    mostrar($botonCalcular);
  } else {
    $cantidadDeIntegrantes.className = "error";
    habilitarBotonCrearIntegrantes();
    const $error = crearElemento("li");
    $error.textContent = errorCantidadDeIntegrantes;

    $erores.appendChild($error);
  }
};

$botonCalcular.onclick = function () {
  const edades = document.querySelectorAll(".edades");
  const errorEdades = validarEdades(edades);
  manejarErrores(errorEdades, edades);
  
    borrarErrorEdades(edades);

    const resultados = {
      edadMayor: Number(calcularMayorIntegrante(edades)),
      edadMenor: Number(calcularMenorIntegrante(edades)),
      edadPromedio: calcularEdadPromedio(edades),
    };

    
    document.querySelector("#edad-mayor").textContent += resultados.edadMayor;
    document.querySelector("#edad-menor").textContent += resultados.edadMenor;
    document.querySelector("#edad-promedio").textContent += resultados.edadPromedio;

    mostrar($resultados);

  
	/* else {
    const $error = crearElemento("li");
    $error.textContent = errorEdad;
    $errores.appendChild($error);
  }
  */
};

$botonResetear.onclick = function () {
  ocultarResultados();
  borrarIntegrantes($contenedorIntegrantes);
  deshabilitarBotonCrearIntegrantes();
  inicializarParrafos(
    textoParrafoEdadMayor,
    textoParrafoEdadMenor,
    textoParrafoEdadPromedio
  );
  borrarErrorCantidadDeIntegrantes();
};

function inicializarParrafos(
  textoParrafoEdadMayor,
  textoParrafoEdadMenor,
  textoParrafoEdadPromedio
) {
  document.querySelector("#edad-mayor").textContent = textoParrafoEdadMayor;
  document.querySelector("#edad-menor").textContent = textoParrafoEdadMenor;
  document.querySelector("#edad-promedio").textContent =
    textoParrafoEdadPromedio;
}
function crearIntegrantes(cantidadDeIntegrantes, $contenedorIntegrantes) {
  const integrante = {};
  for (let i = 0; i < cantidadDeIntegrantes; i++) {
    integrante.etiqueta = crearElemento("label");
    integrante.etiqueta.textContent = "Edad de integrante: ";
    integrante.input = crearElemento("input");
    integrante.input.type = "number";
    integrante.input.className = "edades";

    $contenedorIntegrantes.appendChild(integrante.etiqueta);
    $contenedorIntegrantes.appendChild(integrante.input);
    $contenedorIntegrantes.appendChild(crearElemento("br"));
  }
}

function crearElemento(elemento) {
  return document.createElement(elemento);
}
function calcularMayorIntegrante(edades) {
  let edadMayor = 0;

  edades.forEach(function (edad) {
    if (edadMayor < edad.value) {
      edadMayor = edad.value;
    }
  });

  return edadMayor;
}

function calcularMenorIntegrante(edades) {
  let edadMenor = 1000;

  edades.forEach(function (edad) {
    if (edadMenor > edad.value) {
      edadMenor = edad.value;
    }
  });

  return edadMenor;
}

function calcularEdadPromedio(edades) {
  let sumaEdades = 0;

  edades.forEach(function (edad) {
    sumaEdades += Number(edad.value);
  });

  return sumaEdades / edades.length;
}
function mostrar(elemento) {
  elemento.className = "";
}

function borrarIntegrantes($contenedorIntegrantes) {
  while ($contenedorIntegrantes.firstChild) {
    $contenedorIntegrantes.removeChild($contenedorIntegrantes.firstChild);
  }
}

function ocultarResultados() {
  $botonCalcular.className = "oculto";
  $resultados.className = "oculto";
}

function deshabilitarBotonCrearIntegrantes() {
  $botonCrearIntegrantes.disabled = "true";
}

function habilitarBotonCrearIntegrantes() {
  $botonCrearIntegrantes.disabled = "";
}

function borrarErrorCantidadDeIntegrantes() {
  $cantidadDeIntegrantes.className = "";
  $errores.innerHTML = "";
}

function borrarErrorEdades(edades) {
  $errores.innerHTML = "";
  edades.forEach(function (error) {
    error.className = "";
  });
}

function validarIntegrantes(cantidadDeIntegrantes) {
  if (!numerosPermitidos.test(cantidadDeIntegrantes)) {
    return "Debe ingresar un número mayor a cero";
  } else if (caracterNoPermitido.test(cantidadDeIntegrantes)) {
    return "Ingrese solamente números enteros";
  }

  return "";
}

function validarEdades(edades) {

  const errorEdadesMenoresQueCero = []; 
  const errorEdadesDecimales = [];
	const edadesCorrectas = [];
  const errorEdades = [];

  for (let i = 0; i < edades.length; i++) {
    
    const edad = Number(edades[i].value);

    if (!numerosPermitidos.test(edad)) {
      errorEdadesMenoresQueCero.push(i)
    } else if (caracterNoPermitido.test(edad)) {
      errorEdadesDecimales.push(i); 
    } else {
      edadesCorrectas.push(i);
    }
    
  }

	errorEdades.push(errorEdadesMenoresQueCero)
	errorEdades.push(errorEdadesDecimales)
	errorEdades.push(edadesCorrectas)

  return errorEdades;
}
/*creo 3 array e inicializo cada uno con el mensaje de error en la primer posicion. A partir de ahi,
guardo todas las posiciones segun el error */

function manejarErrores(errorEdades, edades) {
	const mensajesDeError = {
		errorEdadMenorQueCero: "Ingrese una edad mayor a cero",
		errorEdadDecimal: "No puede ingresar decimales",
		edadCorrecta: ""
	}
	
  errorEdades.forEach(function (error) {
	  
//    const errorEdad = error.mensajeDeError;
console.log(error);
  });
}

function verificarError(error) {
  let hayError;
  if (error != "") {
    hayError = true;
  }
  return hayError;
}
