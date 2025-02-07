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