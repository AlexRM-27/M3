/* En este archivo se desplegarán diferentes tipos de datos en JavaScript 
    Se estarán integrando algunos ejemplos desplegados en campus y otros que se encuentran en la documentación oficial de JavaScript
*/

// DATOS PROPUESTOS EN CAMPUS DECLARADOS COMO VARIABLES

let datoUno = 42;
let datoDos = 'Veinticinco';
let datoTres = -666;
let datoCuatro = true;
let datoCinco = 0;
let datoSeis = '';
let datoSiete = null;
let datoOcho = undefined;
let datoNueve = FALSE;

console.log("DATOS PROPUESTOS EN CAMPUS DECLARADOS COMO VARIABLES");
console.log(typeof datoUno);
console.log(typeof datoDos);
console.log(typeof datoTres);
console.log(typeof datoCuatro);
console.log(typeof datoCinco);
console.log(typeof datoSeis);
console.log(typeof datoSiete);
console.log(typeof datoOcho);
console.log(typeof datoNueve);

//DATOS PROPUESTOS EN CAMPUS, PERO SIN DECLARARLOS COMO VARIABLES

console.log("DATOS PROPUESTOS EN CAMPUS SIN DECLARARLOS COMO VARIABLES");
console.log(typeof 42);
console.log(typeof 'Veinticinco');
console.log(typeof -666);
console.log(typeof true);
console.log(typeof 0);
console.log(typeof '');
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof FALSE);

// Código creado con IA para aprender a identificar los tipos de datos en JavaScript basados en documentación

// Tipos de datos primitivos

let nombre = 'Ricardo'; // String: cadena de texto
console.log('nombre:', typeof nombre); // string

let edad = 25; // Number: número entero
console.log('edad:', typeof edad); // number

let esMayorDeEdad = true; // Boolean: valor verdadero o falso
console.log('esMayorDeEdad:', typeof esMayorDeEdad); // boolean

let saldo; // Undefined: variable declarada sin valor asignado
console.log('saldo:', typeof saldo); // undefined

let cuenta = null; // Null: valor intencionalmente vacío
console.log('cuenta:', typeof cuenta); // object (esto es un comportamiento peculiar de JavaScript)

let id = Symbol('id'); // Symbol: identificador único
console.log('id:', typeof id); // symbol

let numeroGrande = 1234567890123456789012345678901234567890n; // BigInt: números enteros grandes
console.log('numeroGrande:', typeof numeroGrande); // bigint

// Tipos de datos de referencia

let persona = { nombre: 'Ricardo', edad: 25 }; // Object: colección de propiedades
console.log('persona:', typeof persona); // object

let colores = ['rojo', 'verde', 'azul']; // Array: lista ordenada de elementos
console.log('colores:', typeof colores); // object

function saludar() { // Function: bloque de código reutilizable
  return '¡Hola, mundo!';
}
console.log('saludar:', typeof saludar); // function

// Fecha: objeto para manejar fechas y horas
let fechaActual = new Date();
console.log('fechaActual:', typeof fechaActual); // object

// Expresión regular: patrón para coincidencia de cadenas
let patron = /ab+c/;
console.log('patron:', typeof patron); // object

// Map: estructura de datos que almacena pares clave-valor
let mapa = new Map();
console.log('mapa:', typeof mapa); // object

// Set: colección de valores únicos
let conjunto = new Set();
console.log('conjunto:', typeof conjunto); // object
