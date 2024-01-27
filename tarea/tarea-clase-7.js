/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*


* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */

function validarFormulario(event){
const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

const errorNombre = validarNombre(nombre);
const errorCiudad = validarCiudad(ciudad);
const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    ['descripcion-regalo']: errorDescripcionRegalo
}

manejarErrores(errores);


event.preventDefault()
}

function manejarErrores(errores){
    errorNombre = errores.nombre;
    errorCiudad = errores.ciudad;
    errorDescripcionRegalo = errores.descripcionRegalo;

    const keys = Object.keys(errores);

    keys.forEach(function(key){
        const error = errores(key);

        if(error){
            $form[key].className = "error";
        }else{
            $form[key].className = "";
        }
    })
}
function validarNombre(nombre){
    if(nombre.length < 1){
        return "Este campo debe tener al menos un caracter";
    }

    if(!/^[a-z]+$/i.test(nombre)){
        return "El campo solo acepta letras";
    }

    if(nombre.length >= 50){
        return "Este campo debe tener menos de cincuenta caracteres";
    }

    return "";
}

function validarCiudad(ciudad){
    if(ciudad.length === 0){
        return "El campo ciudad no puede estar vacío";
    }

    return "";
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length >= 100){
        return "El campo descripcionRegalo es muy extenso";
    }

    if(descripcionRegalo.length === 0){
        return "El campo descripcionRegalo no puede estar vacío";
    }

    if(!/^[A-z0-9]+$/i.test(descripcionRegalo)){
        return "El campo descripcionRegalo sólo puede tener números y letras";
    }

    return "";
}

const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;