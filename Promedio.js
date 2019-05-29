function promedio(){
  let nombre = prompt("dime tu nombre")
  let calificaciones = [4, 6, 10];
  let promedio = 0;

  for(let i = 0; i < calificaciones.length; i++) {promedio += calificaciones[i];}

  promedio = promedio / calificaciones.length;

  console.log("Tu calificacion es " + promedio + ', ' + nombre);
}
