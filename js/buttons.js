let submit = document.querySelector("#submit");
let close = document.querySelector("#close");
let grades = document.querySelector("#inputGrades");
let tr_th = document.querySelector("#tr_th");
let tr = document.querySelector("tr");
// let a = "234"
// if (true){
//     let hola = document.createElement("div")
//     hola.innerText = `<h3>hosaldkasd ${a} </h3>`;
//     grades.append(hola);
// }
submit.addEventListener('click', () => grades.classList.remove('out'))
close.addEventListener('click', () => {
    grades.classList.add('out');
    tr_th.innerHTML = ``;
})
submit.addEventListener('click', get)
function get(){
    var canti = []
    var numeroEstudiantes = document.querySelector("#numeroEstudiantes");
    var numeroNotas = document.querySelector("#numeroNotas");
    var numeroAprobar = document.querySelector("#numeroAprobar");
    canti.push(Number(numeroAprobar.value), Number(numeroEstudiantes.value), Number(numeroNotas.value))
    for(a in canti){
        if (canti[a] === ""){
            canti[a] = 0
        }
    }
    // <input type="text" class="input1" id="nombre${i}" placeholder="Name"></input>
    console.log(canti);
    const up = document.createElement("tr")
    const nombres = document.createElement("tr")
    up.innerHTML = `<th></th>`;
    nombres.innerHTML = `<th>Name</th>`;
    for(let i = 0; i < canti[1]; i++){
        const a = document.createElement("th")
        const b = document.createElement("td")
        a.innerHTML = `Estudent ${i}`
        b.innerHTML = `<input type="text" class="input1" id="nombre${i}" placeholder="Name"></input>`
        up.append(a)
        nombres.append(b)
        tr_th.append(up, nombres)
    }
    for(let i = 0; i < canti[2]; i++){
        const notas = document.createElement("tr")
        notas.innerHTML = `<th>Grade ${i}</th>`
        for(let x = 0; x < canti[1]; x++){
            const c = document.createElement("td")
            c.innerHTML = `<input type="number" class="input1" id="nota${i}estudiante${x}" placeholder="Grade"></input>`
            notas.append(c)
            tr_th.append(notas)
        }
    }
}
