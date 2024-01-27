function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos un caracter",
    "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre(
      ('jasdkjakdsjajdijaduaiusdioauudiadhjjxchhjxcjhzjchb')
    ) === "Este campo debe tener menos de cincuenta caracteres",
    "Validar nombre no validó que el nombre sea menor a cincuenta caracteres"
  );

  console.assert(
    validarNombre("1234") === "El campo solo acepta letras",
    "Validar nombre no validó que el campo solo tenga letras"
  );

  console.assert(
    validarNombre("Pepe") === "",
    "Validar nombre falló con un nombre válido"
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "El campo ciudad no puede estar vacío",
    "Validar ciudad no validó que ciudad no sea vacío"
  );

  console.assert(
    validarCiudad("Córdoba") === "",
    "Validar ciudad falló con una ciudad válida"
  );
}

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo(
      "sksjdflkjskclksnlkjklsjdfijsidfjsjlfsdofjoisdufoiaiodjajsdlkjaskdlklncnjnjknkjankjsnjdadljasjdlkjlks"
    ) === "El campo descripcionRegalo es muy extenso",
    "Validar descripcionRegalo no validó que el campo tenga menos de cien caracteres"
  );

  console.assert(
    validarDescripcionRegalo("") ===
      "El campo descripcionRegalo no puede estar vacío",
    "Validar descripcionRegalo no validó que el campo no esté vacío"
  );

  console.assert(
    validarDescripcionRegalo("Bicicleta") === "",
    "Validar descripcionRegalo no validó que el texto es válido"
  );

  console.assert(
    validarDescripcionRegalo(".,.,.I12a") ===
      "El campo descripcionRegalo sólo puede tener números y letras",
    "Validar descripcionRegalo no validó que el campo contenga números y letras"
  );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
