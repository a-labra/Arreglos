
function asistencia(){
    //let asistencia = ["true", "false", "true", "true", "false"];
    let asistencia = [true, false, true, true, false];
    let sumaAsistencia = 0;
    for(var i=0;i<asistencia.length;i++){
        if(asistencia[i]){
          sumaAsistencia++;
        }
    }
    console.log("Total asistencias: " + sumaAsistencia);
}

function promedio(){
    let listaCalificaciones = [6,7,8];
    let sumaCalificacion = 0;
    let promedio = 0;
    for(var i=0;i<listaCalificaciones.length;i++){
        sumaCalificacion += listaCalificaciones[i];

    }
    console.log("La suma es:" + sumaCalificacion);
    promedio = sumaCalificacion / listaCalificaciones.length;
    console.log("Tu promedio es: " + promedio);
    if(promedio >= 8){
      console.log('Tu promedio es : " + promedio + ". Podrás contar con una beca');
    }else {
      console.log('Tu promedio no es suficiente para una beca... Sigue esforzandote =)');
    }
}

function examenes(){
    let listaCalificaciones = [2,6,8];
    let examenesReprobados = 0;
    for(var i=0;i<listaCalificaciones.length;i++){
        if(listaCalificaciones[i]<=5){
          examenesReprobados++;
        }
    }
    console.log("Tendrás que repetir " + examenesReprobados + " exámenes");

}
