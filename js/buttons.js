// El proyecto va a continuar por la linea de planilla de notas, pero ahora la cantidad de notas que fueron hechas puede ser escogida.

//Si tienen consejos para mejorar el diseno porfavor diganme, es que no me convence al 100% y tambien me pregunto que funcionalidades le puedo agregar para hacerlo mas interesante

//primero importo por id los objetos que voy a estar alterando
let submit = document.querySelector("#submit");
let close = document.querySelector("#close");
let grades = document.querySelector("#inputGrades");
let tr_th = document.querySelector("#tr_th");
let tr = document.querySelector("tr");

submit.addEventListener('click', () => grades.classList.remove('out'))//Con el boton submit quito la clase out para que la tabla se vea
close.addEventListener('click', () => {
    grades.classList.add('out');//con esta funcion hago que con el boton close se agregue devuelta la clase out a la tabla para que se esconda, y borro todo lo que estaba escrito en ella
    tr_th.innerHTML = ``;
    estudiantes = []//ademas hago que caundo se cierra la tabla el array de estudiantes se vacie el array estudiantes el canti (cantidades iniciales), para que al salir y volver se reinicie el array
    canti = []
    console.table(estudiantes)
})
let canti = []
function initial(){
    var numeroEstudiantes = document.querySelector("#numeroEstudiantes");
    var numeroNotas = document.querySelector("#numeroNotas");
    var numeroAprobar = document.querySelector("#numeroAprobar");
    canti.push(Number(numeroAprobar.value), Number(numeroEstudiantes.value), Number(numeroNotas.value));
    for(a in canti){
        if (canti[a] < 1){
            canti[a] = 1
        }
    }
}
submit.addEventListener('click', get);//creo el evento cuando hacen click en el submit
    function get(){
    initial();
    console.log(canti); //lo que hizo de aqui pa atras fue recopilar los datos que habian en las secciones (numero de estudiantes, notas y con cuanto se aprueba) y los metio en 2 arrays
    const up = document.createElement("tr");//creo la primera fila de la lista, donde va a ir el numero del estudiante
    const nombres = document.createElement("tr"); //agrego la segunda fila, ahi va a ir el nombre del estudiante
    up.innerHTML = `<th></th>`;// pongo el cuadro de la esquina vacio
    nombres.innerHTML = `<th>Name</th>`;
    for(let i = 0; i < canti[1]; i++){ //bucle que se repite por cada estudiante, este defina la cantidad de columnas que hay
        const a = document.createElement("th"); //los titulos de las filas
        const b = document.createElement("td"); //los inputs, que van a ser nombres
        a.innerHTML = `Estudent ${i}`
        b.innerHTML = `<input type="text" class="input1" id="nombre${i}" placeholder="Name"></input>`
        up.append(a);
        nombres.append(b);
        tr_th.append(up, nombres); //termino de agregar los contenidos dentro de las primeras 2 filas (numero y nombres)
    }
    for(let i = 0; i < canti[2]; i++){ //bucle de cantidad de notas por estudiante, definira cuantas filas habra
        const notas = document.createElement("tr");
        notas.innerHTML = `<th>Grade ${i}</th>`
        for(let x = 0; x < canti[1]; x++){
            const c = document.createElement("td");
            c.innerHTML = `<input type="number" class="input1" id="nota${i}estudiante${x}" placeholder="Grade"></input>`//aqui lo que hice fue generar un id diferenta para cada nota que se cree, ya que dira que nota es y de que estudiante (facilito bastante para meter todo a un array)
            notas.append(c);
            tr_th.append(notas);
        }
    }
}
var estudiantes = [];
class estudiante{
    constructor(name){
      this.nombre = name;//creo la maqueta para crear a cada estudiante de manera individual
      this.nota = [] //creo el array para poder meter facilmente las notas y sacar el promedio
      this.total
    }
}
let gG = document.querySelector("#generateGrades");
gG.addEventListener('click', gradeSheet);//defino que cuando le den al boton "generate grade sheets" meta todos el nombre y cada una de las notas de cada estudiante a un array (estudiantes)
function gradeSheet(){
    initial();
    for(let i = 0; i < canti[1]; i++){
        const studentName = document.querySelector(`#nombre${i}`);
        const estudianteCreado = new estudiante(studentName.value);
        for(let x = 0; x < canti[2]; x++){
            const nota = document.querySelector(`#nota${x}estudiante${i}`);
            estudianteCreado.nota.push(Number(nota.value));
        }
        estudiantes.push(estudianteCreado);

    }
    for (person of estudiantes){//Tambien se podria usar "for (let i = 0, i < estudiantes.lenght, i++)"
        person.total = (person.nota.reduce((acumulador, elemento) => acumulador + elemento, 0)) / canti[2] //con esto se hace el promedio del estudiante
    }
    console.log("la lista de estudiantes es: ");
    console.table(estudiantes); //y por ultimo se muestra la tabla de estudiantes
}

//no e terminado, voy a hacer una tabla en otra pagina y que se pueda filtrar por quienes pasaron y quienes no, y quiero agregar mas cosas pero no se me ocurre que hacer

// const aprobados = estudiantes.filter((a) => a.total >= numeroAprobar.value)//filtro a los estudiantes aprobados y desaprobados
// const desaprobados = estudiantes.filter((b) => b.total < numeroAprobar.value)
// console.log("Los estudiantes que aprobaron son: ")
// console.table(aprobados)
// console.log("Los estudiantes que no aprobaron son: ")
// console.table(desaprobados)
