
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
