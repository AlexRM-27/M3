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