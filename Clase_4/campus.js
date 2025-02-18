/* EJERCICIO 1: CALCULADORA SIMPLE
Descripción: crea una calculadora simple que permita realizar operaciones matemáticas básicas: suma, resta, multiplicación y división.
*/

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero.";
    }
    return a / b;
}

console.log("Suma: " + sumar(2, 3));
console.log("Resta: " + restar(5, 2));
console.log("Multiplicación: " + multiplicar(4, 6));
console.log("División: " + dividir(10, 2));

/* EJERCICIO 2: CONVERSOR DE TEMPERATURAS
Descripción: crea una función que convierta tamperaturas entre grados Celsius y Fahrenheit.
*/

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

console.log("20°C en Fahrenheit es: " + celsiusAFahrenheit(20) + "°F");
console.log("68°F en Celsius es: " + fahrenheitACelsius(68) + "°C");