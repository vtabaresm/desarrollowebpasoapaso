let continuar = true;

while (continuar) {

  // Lectura de datos (siempre se reciben como texto)
  let nota1 = Number(prompt("Ingrese la primera calificación:"));
  let nota2 = Number(prompt("Ingrese la segunda calificación:"));
  let nota3 = Number(prompt("Ingrese la tercera calificación:"));

  // Operaciones aritméticas
  let promedio = (nota1 + nota2 + nota3) / 3;

  // Estructura condicional
  if (promedio >= 3.0) {
    alert("Promedio: " + promedio.toFixed(2) + "\nResultado: Aprobado");
  } else {
    alert("Promedio: " + promedio.toFixed(2) + "\nResultado: Reprobado");
  }

  // Control del ciclo
  let respuesta = prompt("¿Desea calcular otro promedio? (si/no)");

  if (respuesta.toLowerCase() !== "si") {
    continuar = false;
  }
}

console.log("Programa finalizado.");


