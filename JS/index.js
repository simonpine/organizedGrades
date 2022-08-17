let iva = 1.25;

let gasto1 = prompt("ingrese cuanto dinero gasto en los primero 15 dias de este mes");
let gasto2 = prompt("ingrese cuanto dinero gasto en la segunda mitad de este mes");

let gastot = Number(gasto1) + Number(gasto2);

console.log(gastot);

let gastoim = gastot * iva;

alert("tu gasto final sera de " + gastoim);

const gastoi = gasto1 ==gasto2;

if(gastoi){
    alert("eres un cerdo");
}
else{
    alert("me caes bien");
}
