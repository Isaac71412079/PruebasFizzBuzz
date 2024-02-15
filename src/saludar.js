function saludar(nombre,edad,genero) {
  let saludo = "Hola " + nombre;

  if (edad > 30) {
    if (genero === "masculino"){
      saludo = "Hola Sr. " + nombre;
    }
    else {
      saludo = "Hola Sra. " + nombre;
    }
  }

  return saludo;
}

export default saludar;
