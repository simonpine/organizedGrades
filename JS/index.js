const pais = prompt("De que pais eres").toLocaleLowerCase().trim();
console.log(pais)
let conver;


if(pais == "colombia")[
    conver = 4147
]
else if(pais == "argentina")[
    conver = 135
]
else if(pais == "chile")[
    conver = 881
]
else{
    alert("no tengo ni idea de donde sos");
}
let dinero = Number(prompt("cuanto dinero (en dolares) quieres pasar a tu moneda"));
if (dinero > 1000){
    alert("no creo que tengas tanto dinero");
}
else if (dinero < 10){
    alert("no seas tan pobre");
}
else{
    let final = (conver * dinero);
    alert("el dinero que ingresaste es igual a: " + final + " pesos de " + pais);
}

strings pro
=== tipo de dato igual (tambien)
isNaN == no es un numero

let num = parseInt(prompt("ingresa un numero1"))
for (let i = 0; i <= 10; i++){
    let multi = num
    console.log(num * i)
}

brake == detener el bucle
continue == saltarse ese paso
parseInt == convertir un string en Number
isNaN es para saber si es diferente a un numero