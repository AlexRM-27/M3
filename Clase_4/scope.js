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