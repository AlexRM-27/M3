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