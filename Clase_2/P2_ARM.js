/* PROBLEMA A RESOLVER, PROPUESTO EN CAMPUS:
    Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. Las notas se asignan de la siguiente manera:
    • Si la nota es 90 o más, el estudiante aprueba con "Excelente".
    • Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
    • Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
    • Si la nota es menor de 60, el estudiante no aprueba.
*/

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

/* OTROS EJERCICIOS PROPUESTOS POR EL SENSEI
    1. Crear un programa que genere un número aleatorio entre 1 y 100 y te ayude a saber si un número aleatorio es par o impar.
    2. Crear un programa que compare si un número es primo o no.
    3. Crear un programa que averigue en qué estación del año estamos una vez que le ingresemos el mes.
 */