// El objetivo por ahora es pedir al usuario (comunmente un maestro) que ingrese el numero de estudiantes y calcular el promedio de las 5 notas que va a ingresar (Las notas se califican del 1 al 5 y se aprueba con 3)
//primero pido cuantos estudiantes tiene y verifico que se digite un numero 
var numeroEstudiantes= Number(prompt("Cuantos estudiantes tuviste?"))
let est1 = isNaN(numeroEstudiantes)
console.log(est1)
while(est1){
  numeroEstudiantes= Number(prompt("El dato ingresado no es valido"))
  est1 = isNaN(numeroEstudiantes)
}
console.log(numeroEstudiantes)
//Preguto con cuanto se apruba para saber que notas fueron aprobadas
var numeroAprobar= Number(prompt("Con cuanto se apruban las notas?"))
let na = isNaN(numeroAprobar)
console.log(na)
while(na){
  numeroAprobar= Number(prompt("El dato ingresado no es valido"))
  na = isNaN(numeroAprobar)
}
console.log(numeroAprobar)

// ahora creo la base para crear los objetos estudiantes y creo el metodo para saber su nota final
class Estudiante{
  constructor(name, grade1, grade2, grade3, grade4, grade5){
    this.nombre = name;
    this.nota = {
      nota1: grade1,
      nota2: grade2,
      nota3: grade3,
      nota4: grade4,
      nota5: grade5,
    }
  }
  notaFinal = function (){
    console.table(this.nota)
    let nf = ((this.nota.nota1 + this.nota.nota2 + this.nota.nota3 + this.nota.nota4 + this.nota.nota5) / 5);
    console.log("La nota final de " + this.nombre + " es " + nf)
    if(nf >= numeroAprobar){
      console.log("El estudiante " + this.nombre + " aprobo el semestre")
    }
    else{
      console.log("El estudiante " + this.nombre + " no aprobo el semestre")
    }
  }
}
// ahora creo creo un for para que se pueda poner los datos de cada estudiante y lo calcule con el objeto hecho anteriormente
for(let i = 1; i <= numeroEstudiantes; i++ ){
  const nombreEstudiente = prompt("Como se llama el estudiante numero " + i)
  console.log(nombreEstudiente)
  var gr1 = Number(prompt("Nota 1"))
  let gd1 = isNaN(gr1)
  while(gd1){
    gr1= Number(prompt("El dato ingresado no es valido"))
    gd1 = isNaN(gr1)
  }
  var gr2 = Number(prompt("Nota 2"))
  let gd2 = isNaN(gr2)
  while(gd2){
    gr2= Number(prompt("El dato ingresado no es valido"))
    gd2 = isNaN(gr2)
  }
  var gr3 = Number(prompt("Nota 3"))
  let gd3 = isNaN(gr3)
  while(gd3){
    gr3= Number(prompt("El dato ingresado no es valido"))
    gd3 = isNaN(gr3)
  }
  var gr4 = Number(prompt("Nota 4"))
  let gd4 = isNaN(gr4)
  while(gd4){
    gr4= Number(prompt("El dato ingresado no es valido"))
    gd1 = isNaN(gr4)
  }
  var gr5 = Number(prompt("Nota 5"))
  let gd5 = isNaN(gr5)
  while(gd1){
    gr5= Number(prompt("El dato ingresado no es valido"))
    gd5 = isNaN(gr5)
  }
  const estudiante = new Estudiante(nombreEstudiente, gr1, gr2, gr3, gr4, gr5);
    // Ahora creo un bucle para saber exactamente que notas fuero aprobadas y cuales no
  for (prop in estudiante.nota){
      if(estudiante.nota[prop] >= numeroAprobar){
        console.log("Esta nota fue aprobada: " + prop)
      }
  }
  estudiante.notaFinal();
}

