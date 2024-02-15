function saludar(nombre, edad, genero) {
  let saludo = "Hola " + obtenerSaludoSegunHora() + nombre;

  if (edad > 30) {
    if (genero === "masculino") {
      saludo = "Hola Sr. " + obtenerSaludoSegunHora() + nombre;
    } else {
      saludo = "Hola Sra. " + obtenerSaludoSegunHora() + nombre;
    }
  }

  return saludo;
}

function obtenerSaludoSegunHora() {
  const horaActual = new Date().getHours();

  if (horaActual >= 5 && horaActual < 12) {
    return "Buenos días, ";
  } else if (horaActual >= 12 && horaActual < 18) {
    return "Buenas tardes, ";
  } else {
    return "Buenas noches, ";
  }
}

export default saludar;