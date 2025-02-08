//string
let mensaje = 'Hola Mundo';
console.log(mensaje.toUpperCase());

let nombre = 'Alex';
console.log(`Hola ${nombre}`); //En este caso se utiliza el backtick ` para poder utilizar variables dentro de una cadena
console.log('Hola ' + nombre + ' ¿cómo estás?'); //En este caso se utiliza el + para poder utilizar variables dentro de una cadena (concatenación). Se necesita anadir un espacio entre las variables.
console.log('Hola', nombre); //Otra manera de concatenar variables. Aquí no necesitamos añadir el espacio como en la línea anterior.

//booleano
let esMayor = false;
console.log(esMayor && false);

//Arrays
let alumnos = ['Alex', 'Pablo', 'Pato', 'Paco'];
console.log(alumnos[3]);

//Modificar asignación
alumnos[2] = 'Pepe';
console.log(alumnos);

//Añadir
alumnos.push('Pepa');
console.log(alumnos);

alumnos.unshift('Pepito');
console.log(alumnos);
console.log(alumnos.length);

//Números
let x = 2;
x += 5;
console.log(x); // Si utilizáramos x++, se aumentará un dígito a la variable declarada, en este ejemplo sería 8.

let division = 0;
console.log(division / 0); // NaN: Not a Number, porque no se puede dividir un número por 0

//Si aprueba o reprueba

let nota = 5.999999999999;
const notaAprobatoria = 6;

if (nota >= notaAprobatoria) {
    console.log('Aprobado');
} else {
    console.log('Reprobado');
}

let temp = 40;
if (temp > 30) {
    console.log('Calor');
} else if (temp >= 15 && temp <= 29){
    console.log('Templado');
} else {
    console.log('Frio');
}

//Otra manera de representar if-else (Operador ternario)
let edad = 25;
let resultado = (edad >= 18) ? 'Mayor de edad' : 'Menor de edad'; //si la condición se puede almacenar en un renglón, se recomienda utilizar el operador ternario, de lo contrario utiliza la estructura tradicional
console.log(resultado);