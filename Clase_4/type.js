//Función sin parámetro
function saludar() {
    console.log('Hola mundo');
}
saludar(); //mandamos a llamar a la función

//Función con parámetros
function saludarAlguien(nombre) {
    console.log(`Hola ${nombre}`);
}
saludarAlguien('Alex');

//Función con valor por defecto
function saludarInvitado(nombre = 'mi estimado') {
    console.log(`Hola ${nombre}, bienvenido.`);
}
saludarInvitado();
saludarInvitado('Paco');

//Función retorno
function multiplicar(a, b) {
    return a * b;
}

let resultado = multiplicar(85, 8); //por lo regular las funciones que hacen este tipo de operaciones los asignamos a una variable para ponerlas en más de un lugar.
console.log(resultado);

//Función anónima
const anonima = function() {
    console.log('Soy una función anónima, salu2 cáli2.');
}
anonima();

//Callback
setTimeout(function() {
    console.log("Este comentario va a tener un tiempo de espera.");
}, 5000);

//Arrow function
const arrowFunction = () => {
    console.log("Hola, soy una arrow function. =>");
}

arrowFunction();

document.getElementById("boton").addEventListener("click", function(){
    alert("Hola mundo.")
})