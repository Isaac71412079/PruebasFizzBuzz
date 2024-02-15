function saludar(nombre,edad) {
  let saludo = "Hola " + nombre;

  if (edad > 30) {
    saludo = "Hola Sr. " + nombre;
  }

  return saludo;
}

export default saludar;
