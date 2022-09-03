// El proyecto va a continuar por la linea de planilla de notas, pero ahora la cantidad de notas que fueron hechas puede ser escogida.
//primero pido cuantos estudiantes tiene, Cuantas nota se sacaron y con cuanto se aprueba, y verifico que se digite un numero 
var numeroEstudiantes= Number(prompt("Cuantos estudiantes tuviste?"));
let est = isNaN(numeroEstudiantes);
while(est){
  numeroEstudiantes= Number(prompt("El dato ingresado no es valido"));
  est = isNaN(numeroEstudiantes);
}
console.log("El numero de estudiantes que tuviste es: ", numeroEstudiantes);

var numeroNotas= Number(prompt("Cuantas notas sacaste en este semestre?"));
let not = isNaN(numeroNotas);
while(not){
  numeroNotas= Number(prompt("El dato ingresado no es valido"));
  not = isNaN(numeroNotas)
}
console.log("El numero de notas que se subiran a la pagina son: ", numeroNotas);

var numeroAprobar= Number(prompt("Con cuanto se apruban las notas?"));
let na = isNaN(numeroAprobar);
while(na){
  numeroAprobar= Number(prompt("El dato ingresado no es valido"));
  na = isNaN(numeroAprobar);
}
console.log("Para aprobar se necesita que el estudiante tenga una nota superior a: ", numeroAprobar);
// Creo el array en donde se guardaran  los estudiantes (con sus notas y su nota final)
var estudiantes = [];
// Creo la maqueta para hacer a los estudiantes
class Estudiante{
    constructor(name){
      this.nombre = name;
      this.nota = [] //creo el array para poder meter facilmente las notas y sacar el promedio
      this.total = 0
    }
}
//creo un bucle que me hace registrar el nombre y las notas de cada estudiante
for(let x = 0; x < numeroEstudiantes; x++ ){
    const nombreEstudiente = prompt("Como se llama el estudiante numero " + x)
    const estudiante = new Estudiante(nombreEstudiente);
    for(let i = 1; i <= numeroNotas; i++ ){
        let Nota = Number(prompt("Nota: " + i))
        let gd = isNaN(Nota)
        while(gd){
            Nota = Number(prompt("El dato ingresado no es valido"))
            gd = isNaN(Nota)
        }
    estudiante.nota.unshift(Nota)
    }
    estudiantes.push(estudiante)
}//creo un bucle que entre el total de cada estudiante
for (persona of estudiantes){//Tambien se podria usar "for (let i = 0, i < estudiantes.lenght, i++)"
    persona.total = (persona.nota.reduce((acumulador, elemento) => acumulador + elemento, 0)) / numeroNotas
    if(persona.total > numeroAprobar){
        console.log("El estudiante " + persona.nombre + " aprobo el semestre")
    }
    else{
        console.log("El estudiante " + persona.nombre + " no aprobo el semestre")
    }
}
console.log("la lista de estudiantes es: ")
console.table(estudiantes)
const aprobados = estudiantes.filter((a) => a.total > numeroAprobar)//filtro a los estudiantes aprobados y desaprobados
const desaprobados = estudiantes.filter((b) => b.total < numeroAprobar)
console.log("Los estudiantes que aprobaron son: ")
console.table(aprobados)
console.log("Los estudiantes que no aprobaron son: ")
console.table(desaprobados)