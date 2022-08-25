// El objetivo por ahora es pedir al usuario (comunmente un maestro) que ingrese el numero de estudiantes y el numro de nota que saco en el semestre

var numeroEstudiantes= Number(prompt("Cuantos estudiantes tuviste?"))
let est1 = isNaN(numeroEstudiantes)
console.log(est1)
while(est1){
  numeroEstudiantes= Number(prompt("El dato ingresado no es valido"))
  est1 = isNaN(numeroEstudiantes)
}
console.log(numeroEstudiantes)
var numeroNotas = prompt("Cuantos proyectos calificaste?")
let net1 = isNaN(numeroNotas)
console.log(net1)
while(net1){
  numeroNotas= Number(prompt("El dato ingresado no es valido"))
  net1 = isNaN(numeroNotas)
}
console.log(numeroNotas)

function ingreseDatos (Notas){
    var nombre = prompt("El nombre del estudiante");
    for(let i = 1; i <= numeroNotas; i++){}

}



ingreseDatos (numeroNotas);