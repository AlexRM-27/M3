/* PROBLEMA A RESOLVER, PROPUESTO EN CAMPUS:
    Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. Las notas se asignan de la siguiente manera:
    • Si la nota es 90 o más, el estudiante aprueba con "Excelente".
    • Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
    • Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
    • Si la nota es menor de 60, el estudiante no aprueba.
*/
/*
let notaEstudiante = Math.floor(Math.random() * 101); // Con esta línea simulamos el ingreso de la nota al sistema.
console.log(`La nota es: ${notaEstudiante}`); // Así visualizamos la nota en la consola.
if (notaEstudiante > 0 && notaEstudiante <= 100) { //Con este primer if se evita el error de que el usuario ingrese un valor fuera el rango de 0 - 100.
        if (notaEstudiante >= 90) {
            console.log('Excelente');
        } else if (notaEstudiante >= 75 && notaEstudiante <= 89) {
            console.log('Bien');
        } else if (notaEstudiante >= 60 && notaEstudiante <= 74) {
            console.log('Suficiente');
        } else {
            console.log('No aprueba');
        }
} else {
    console.log('Ingrese un valor entre 0 (cero) y 100 (cien)');
}
*/
/* OTROS EJERCICIOS PROPUESTOS POR EL SENSEI
    1. Crear un programa que genere un número aleatorio entre 1 y 100 y te ayude a saber si un número aleatorio es par o impar.
    2. Crear un programa que compare si un número es primo o no.
    3. Crear un programa que averigue en qué estación del año estamos una vez que le ingresemos el mes.
 */

// EJERCICIO 1
/*
let numeroAleatorio = Math.floor(Math.random() * 101);
switch (numeroAleatorio % 2) {
    case 0:
        console.log(`El número ${numeroAleatorio} es par`);
        break;
    default:
        console.log(`El número ${numeroAleatorio} es impar`);
}
*/
//EJERCICIO 2
/*
let numeroAleatorio2 = Math.floor(Math.random() * 101);
let esPrimo = true;
if (numeroAleatorio2 < 2) { // Excluye 0 y 1 antes del bucle
    esPrimo = false;
} else {
for (let i = 2; i < numeroAleatorio2; i++) {
    if (numeroAleatorio2 % i === 0) {
        esPrimo = false;
        break;
    }
}        
    }
if (esPrimo) {
    console.log(`El número ${numeroAleatorio2} es primo`);
} else {
    console.log(`El número ${numeroAleatorio2} no es primo`);
}
*/
//EJERCICIO 3
/*Para este ejercicio asociaremos los meses con un número del 1 al 12 de la siguiente manera:
    1 = Enero
    2 = Febrero
    3 = Marzo
    4 = Abril
    5 = Mayo
    6 = Junio
    7 = Julio
    8 = Agosto
    9 = Septiembre
    10 = Octubre
    11 = Noviembre
    12 = Diciembre

Además consideraremos las estaciones del año de la siguiente manera:
    Verano: Junio, Julio y Agosto
    Otoño: Septiembre, Octubre y Noviembre
    Invierno: Diciembre, Enero y Febrero
    Primavera: Marzo, Abril y Mayo
*/

let mes = Math.floor(Math.random() * 14); //línea que simula el ingreso de un mes al sistema. Se genera un número aleatorio entre 1 y 13, con el fin de probar el programa cuando se ingresa un valor que no es un mes del año.
switch (mes) { //switch que simula el mes ingresado
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3: 
        console.log('Marzo');    
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Mayo');
        break;
    case 6:
        console.log('Junio');
        break;
    case 7:
        console.log('Julio');
        break;
    case 8:
        console.log('Agosto');
        break;
    case 9:
        console.log('Septiembre');
        break;
    case 10:
        console.log('Octubre');
        break;
    case 11:
        console.log('Noviembre');
        break;
    case 12:
        console.log('Diciembre');
        break;
    default:
        console.log('Dato erróneo.');
}
switch (mes) { //switch que determina la estación del año
    case 6:
    case 7:
    case 8:
        console.log('Estamos en verano.');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Estamos en otoño.');
        break;
    case 12:
    case 1:
    case 2:
        console.log('Estamos en invierno.');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Estamos en primavera.');
        break;
    default:
        console.log('Ingresa un mes del año.');
}