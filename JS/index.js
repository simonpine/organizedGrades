// const pais = prompt("De que pais eres").toLocaleLowerCase().trim();
// console.log(pais)
// let conver;


// if(pais == "colombia")[
//     conver = 4147
// ]
// else if(pais == "argentina")[
//     conver = 135
// ]
// else if(pais == "chile")[
//     conver = 881
// ]
// else{
//     alert("no tengo ni idea de donde sos");
// }
// let dinero = Number(prompt("cuanto dinero (en dolares) quieres pasar a tu moneda"));
// if (dinero > 1000){
//     alert("no creo que tengas tanto dinero");
// }
// else if (dinero < 10){
//     alert("no seas tan pobre");
// }
// else{
//     let final = (conver * dinero);
//     alert("el dinero que ingresaste es igual a: " + final + " pesos de " + pais);
// }

//strings pro
// === tipo de dato igual (tambien)
// isNaN == no es un numero

// let num = parseInt(prompt("ingresa un numero1"))
// for (let i = 0; i <= 10; i++){
//     let multi = num
//     console.log(num * i)
// }

// brake == detener el bucle
// continue == saltarse ese paso
// parseInt == convertir un string en Number
// isNaN es para saber si es diferente a un numero

/*-----------------------------------------------------------Primer entregable-----------------------------*/

/*--------------------------Idea 1--------------------------*/
let vecesHola = Number(prompt("cuantas veces quieres que te diga hola?"))
let num = isNaN(vecesHola)
console.log(num)
for(let i = 0; ; i++){
    console.log(i + " hola");
    if (num){
        break;
    }
    else if(vecesHola < 0){
        break;
    }
    else if(i == vecesHola){
        break;
    }
}
if(num){
    alert("no se dijo hola ni una ves")
}
else{
    alert("se dijo hola " + vecesHola + " veces")
}
/*--------------------------Idea 2--------------------------*/

let nombre = prompt("Ingresa el nombre de tu nueva mascota");
let nombre1 = !isNaN(nombre);
let opciones
let genero;
console.log(nombre1);
if(!nombre1){
    console.log("Nombre de la mascota es " + nombre);
}
else{
    console.log("Nombre no valido");
}
while(nombre1){
    nombre = prompt("Ingresa un nombre valido");
    nombre1 = !isNaN(nombre);
    console.log(nombre1);
}
console.log("Nombre de la mascota es " + nombre);

do{
    console.log("1. Mi mascota es hembra \n 2. Mi mascota es macho \n 3. No espesificado \n 4. Aceptar");
    opciones = prompt("Elige una opcion");
    switch(opciones){
        case "1":
            genero = "es femenino";
            break;
        case "2":
            genero = "es masculino";
            break;
        case "3":
            genero = "no se sabe";
            break;
        case "4":
            if(genero == undefined){
                genero = "no se sabe";
            }
            break;
        default:
            console.log('esa opcion no es valida')
            break;
    }
}while((opciones !== "4"))
console.log(genero)

alert("Listo!! tu mascota fue registrada, se llama " + nombre + " y su genero " + genero)