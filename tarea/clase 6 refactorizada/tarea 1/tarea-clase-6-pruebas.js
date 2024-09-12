function probarValidarIntegrantes() {
  console.assert(
    validarIntegrantes(!numerosPermitidos) ===
      "Debe ingresar un número mayor a cero",
    "Validar integrantes no validó que el número ingresado sea mayor a cero",
    validarIntegrantes(caracterNoPermitido) ===
      "Ingrese solamente números enteros",
    "Validar integrantes no validó que el número ingresado no sea un decimal"
  );

  console.assert(
    validarIntegrantes(1) === "",
    "Validar integrantes no funcionó con un número válido"
  );
}

//probarValidarIntegrantes();
