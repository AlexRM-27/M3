var globalVar = "Soy una variable global"

function saludar() {
    console.log(globalVar);
}

saludar();


//Function scope
function saludo(){
    let mensaje = "Hola a to2"
    console.log(mensaje);
}

saludo();

//Block scope
if(true){
    let blockScope = "Solo existe este bloque" // solo utilizamos let para que nos aseguremos de que esta variable solo exista dentro de la función.
    console.log(blockScope);
}

console.log(blockScope);


/* EJERCICIOS PROPUESTOS POR EL SENSEI
E1: Determinar si una palabra es un palindromo

E2: filtra los números mayores a un valor dado

E3: obtener el área de un círculo

E4: de los ejercicios anteriores, rehacerlo usando con función

*/