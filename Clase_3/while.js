//Sintaxis do while
let numero = 0;
do {
    console.log('Ejecuto el programa al menos una vez.');
    numero++;
} while (numero < 5);

//sintaxis for
let variable = 0;
for (let i = 1; i < 10; i++) {
    variable += i;
}

console.log(`La suma total es: ${variable}`);

//for EJERCICIO
const numeros = [10, 15, 47, 80, 25];
for (let num of numeros){
    console.log(num);
} 

// do while
let respuesta;
do{
    respuesta = parseInt(prompt('Ingrese un número menor a 20'));
}while (respuesta < 20);

alert(`El número ingresado es: ${respuesta}`);

//while
let text = "Este módulo es increíble porquie estoy aprendiendo a programar juas juas equis de";
let vocal = "aeiouAEIOU";
let counter = 0;
let j = 0;

while (j < text.length) {
    if (vocal.includes(text[j])) {
        counter++;
    }
    j++;
}
console.log(`El texto tiene ${counter} vocales.`);

//E1: USAR CUALQUIER TIPO DE BUCLE PARA REALIZAR UNA TABLA DE MULTIPLICAR. VAMOS A PEDIRLE AL USUARIO UN NÚMERO Y LE VAMOS A MOSTRAR LA TABLA DE MULTIPLICAR DEL 1 AL 10.

let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));
let i = 1;

console.log(`Tabla del ${numero1}:`);
while (i <= 10) { // Mientras i sea menor o igual a 10
    console.log(`${numero1} x ${i} = ${numero1 * i}`);
    i++; // Incrementamos i en cada iteración
}

//E2: CONTAR LOS DÍGITOS DE UN NÚMERO. LE VAMOS A PEDIR LA USUARIO Y USAREMOS CUALQUIER TIPO DE CICLO PARA CONTAR CUÁNTOS DÍGITOS TIENE.

//E3: OBTENER LA SUMA DE LOS DÍGITOS DE UN NÚMERO 55 = 10.

//E4: ENCONTRAR EL NÚMERO MAYOR DE UN ARREGLO.

const numeros2 = [40, 10, 8, 90, 54, 62, 98, 25, 76, 12, 4];


