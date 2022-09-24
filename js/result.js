let opener = document.querySelector("#fil");//primero me traigo los objetos que voy a modificar (el boton, el menu de filtro y el lugar donde se pondran las notas)
let select = document.querySelector("#select");
let aprove = localStorage.getItem('aprove'); //tambien me traigo la informacion de con cuanto se aprueva desde el localstorage
const insert = document.querySelector('#insert');
const nameFilter = document.querySelector('#nameFilter');
localStorage.removeItem('aprove');
opener.addEventListener('click', () => { //creo el evento en donde cuando presiono el boton del menu se despliega o se quita dependiendo de su estado
    if (opener.classList == ('opener openerClose')) {
        opener.classList.remove('openerClose')
        nameFilter.classList.remove('filterInputOpen')
    }
    else {
        opener.classList.add('openerClose')
        nameFilter.classList.add('filterInputOpen')
    }
    if (select.classList == ('open open2')) {
        select.classList.remove('open2')
    }
    else {
        select.classList.add('open2')
    }
})
const list = []; //creo el array en donde se pondran todos los estudiantes
for (let i = 0; i < localStorage.length; i++) { //ahora hago que por cada objeto del localStorage el objeto se pase a formato NO JASON y lo agregue a la lista
    let newEstudentJason = localStorage.getItem(`Estudiante${i}`)
    let newEstudent = JSON.parse(newEstudentJason)
    list.push(newEstudent)
}
console.log(list)
// ------------------------------------------------------------Aqui dividi la creacion de la lista final en 2 partes------------------------------------------------------- //
// parte 1 aqui se agrega el numero del estudiante y su nombre (esto facilitara los filtros mas adelante)
function one(up, nombres) {
    const a = document.createElement("th");
    const b = document.createElement("td");
    a.innerHTML = `Estudent ${list.indexOf(est)}`
    b.innerHTML = `${est.nombre}`
    up.append(a);
    nombres.append(b);
    insert.append(up, nombres);
}
// parte 2 se agruega cada nota
function two(x, i, numeroNota) {
    const c = document.createElement("td");
    c.innerHTML = list[x].nota[i]
    numeroNota.append(c);
    insert.append(numeroNota);
}
// ------------------------------------------------------------Ahora creo la funcion en la que se muestran todos los estudiantes------------------------------------------------------- //
function all() {
    const up = document.createElement("tr"); //creo la primera fila (numero del estudiante)
    const nombres = document.createElement("tr"); //creo la segunda fila (nombre del estudiante)
    up.innerHTML = `<th></th>`;
    nombres.innerHTML = `<th>Name</th>`;
    for (est of list) {
        one(up, nombres); //se hace el proceso de poner numero y nombre del estudiante por cada objeto en la lista de estudiantes
    }
    for (let i = 0; i < list[0].nota.length; i++) {
        const numeroNota = document.createElement("tr");
        numeroNota.innerHTML = `<th>Grade ${i}</th>` //hago que por el numero de notas se cree una nueva fila
        for (let x = 0; x < list.length; x++) {
            two(x, i, numeroNota); // y se agrega la nota de cada estudiante en esa fila por cada estudiante que este en la lista
        }
    }
    // ahora creo la ultima fila en la que se muestra el total de cada estudiante
    const down = document.createElement("tr");
    down.innerHTML = insert.innerHTML == ""? `<th>Empty</th>`: `<th>Total</th>`;
    for (est of list) {
        const d = document.createElement("td");
        d.innerHTML = est.total
        down.append(d);
    }
    insert.append(down);
}
all()
// ------------------------------------------------------------Ahora creo la funcion en la que se muestran todos los estudiantes que no aprobaron------------------------------------------------------- //
function not() {
    const up = document.createElement("tr");
    const nombres = document.createElement("tr");//los procesos son practicamente lo mismo pero se salta a los estudiantes que tubieron un total mayor al numero de aprobar
    up.innerHTML = `<th></th>`;
    nombres.innerHTML = `<th>Name</th>`;
    for (est of list) {
        if (est.total < aprove) {
            one(up, nombres);
        }
    }
    for (let i = 0; i < list[0].nota.length; i++) {
        const numeroNota = document.createElement("tr");
        numeroNota.innerHTML = `<th>Grade ${i}</th>`

        for (let x = 0; x < list.length; x++) {
            if (list[x].total < aprove) {
                two(x, i, numeroNota);
            }
        }
    }
    const down = document.createElement("tr");
    down.innerHTML = insert.innerHTML == ""? `<th>Empty</th>`: `<th>Total</th>`;
    for (est of list) {
        if (est.total < aprove) {
            const d = document.createElement("td");
            d.innerHTML = est.total
            down.append(d);
        }
    }
    insert.append(down);
}
// ------------------------------------------------------------Ahora creo la funcion en la que se muestran todos los estudiantes que aprobaron------------------------------------------------------- //
function yes() {
    const up = document.createElement("tr");
    const nombres = document.createElement("tr");//se salta a todos los que no aprobaron
    up.innerHTML = `<th></th>`;
    nombres.innerHTML = `<th>Name</th>`;
    for (est of list) {
        if (est.total >= aprove) {
            one(up, nombres);
        }
    }
    for (let i = 0; i < list[0].nota.length; i++) {
        const numeroNota = document.createElement("tr");
        numeroNota.innerHTML = `<th>Grade ${i}</th>`

        for (let x = 0; x < list.length; x++) {
            if (list[x].total >= aprove) {
                two(x, i, numeroNota);
            }
        }
    }
    const down = document.createElement("tr");
    down.innerHTML = insert.innerHTML == ""? `<th>Empty</th>`: `<th>Total</th>`;
    for (est of list) {
        if (est.total >= aprove) {
            const d = document.createElement("td");
            d.innerHTML = est.total
            down.append(d);
        }
    }
    insert.append(down);
}
// ------------------------------------------------------------Ahora creo el evento que cuando le doy al boton de filtrar borro la lista que este puesta y crea una nueva dependiendo de que radio esta seleccionado------------------------------------------------------- //
const submitFil = document.querySelector('#submitFil');
const options = document.querySelectorAll('input[name="radio"]');
submitFil.addEventListener('click', () => {
      Toastify({
        text: `The template has been leaked to`,
        gravity: "bottom",
        positionLeft: false,
        className: 'tos'
      }).showToast();
    insert.innerHTML = ''
    let selected;
    for (const option of options) { // mira cada radio y cuando encuentra el que esta seleccionado le da su valor a "selected" y rompe el ciclo
        if (option.checked) {
            selected = option.value;
            break;
        }
    }
    console.log(selected)
    if (selected == 1) {
        all();
    }
    else if (selected == 2) {
        yes();
    }
    else {
        not();
    }
})
// ------------------------------------------------------------Ahora creo el filtro para nombres------------------------------------------------------- //
nameFilter.addEventListener('keyup', () => { 
    insert.innerHTML = ''
    const nameFilter = document.querySelector('#nameFilter');
    if (nameFilter.value != ''){
        const up = document.createElement("tr");
        const nombres = document.createElement("tr");//se salta a todos los que no aprobaron
        up.innerHTML = `<th></th>`;
        nombres.innerHTML = `<th>Name</th>`;
        for (est of list) {
            if (est.nombre.toLowerCase().includes(nameFilter.value.toLowerCase())) {
                one(up, nombres);
            }
        }
        for (let i = 0; i < list[0].nota.length; i++) {
            const numeroNota = document.createElement("tr");
            numeroNota.innerHTML = `<th>Grade ${i}</th>`
    
            for (let x = 0; x < list.length; x++) {
                if (list[x].nombre.toLowerCase().includes(nameFilter.value.toLowerCase())) {
                    two(x, i, numeroNota);
                }
            }
        }
        const down = document.createElement("tr");
        down.innerHTML = insert.innerHTML == ""? `<th>Empty</th>`: `<th>Total</th>`;
        for (est of list) {
            if (est.nombre.toLowerCase().includes(nameFilter.value.toLowerCase())) {
                const d = document.createElement("td");
                d.innerHTML = est.total
                down.append(d);
            }
        }
        insert.append(down);
    }
    else{
        all();
    }
})