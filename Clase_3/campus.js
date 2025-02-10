// CICLO WHILE

/*
let suma = 0;
let numero = 1;
while (suma < 5) {
    suma += numero;
    numero++;
}
console.log(suma);
*/
//EJERCICOS PROPUESTOS EN LECTURA CAMPUS
// E1: Crear un ciclo while que cuente del 10 al 1 y lo imprima en la consola.
/*
let i = 10;
while (i>0) {
    console.log(i);
    i--;
}
*/
//EJ2: Modifica el ciclo para que imprima solo los números pares.
/*
let i = 10;
while (i>0) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i--;
}
*/
// CICLO FOR
//EJERCICOS PROPUESTOS EN LECTURA CAMPUS
// E1: Crea un priograma que cuente del 10 al 1 y lo imprima en la cosola.
/*
for (let a = 10; a>0; a--) {
    console.log(a);
}
*/
// E2: Modifica el ciclo para que solo sume los números pares del 1 al 20 y muestre el resultado
/*
let suma = 0;

for (let b = 1; b <= 20; b++) {
    if (b % 2 === 0) {
        suma += b;
    }
}
console.log(`El resultado de sumar los números pares del 1 al 20 es: ${suma}`);

for (let i = 0; i < 3; i++) {
    console.log("Hola");
}

let suma1 = 0;
for (let j = 1; j <= 5; j++){
    suma1 += j;
}
console.log(suma1);
*/
// ARRAY
let colores = ['rojo', 'verde', 'azul', 'amarillo'];
console.log(colores[1]);
colores[2] = 'naranja';
colores.push('rosa');
colores.shift();
console.log(colores);

