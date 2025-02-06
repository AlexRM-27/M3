console.log('Hola Mundo');

//Datos primitivos
let nombre = 'Ricardo';
let edad = 25;
let esMayordeEdad = true; //variable declarada e inicializada
let saldo; //undefined
let cuenta = null;
let id = Symbol('id');
let numeroGrande = 1234567894596123789n;

console.log(typeof cuenta);

//Datos Compuestos
let persona = {
    nombre: 'Ricardo',
    edad: 25,
    nacionalidad: 'Argentino',
    esMayordeEdad: true
}

console.log(persona.edad);

let numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]);

let suma = function suma(a, b) {return a + b}
console.log(suma(1, 2));

let fecha = new Date();
console.log(fecha);