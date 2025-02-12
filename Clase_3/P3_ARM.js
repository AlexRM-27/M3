/* PROBLEMA A RESOLVER, PROPUESTO EN CAMPUS: Clasificación de frutas
    Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.
    Instrucciones:
    • Declara un arreglo llamado frutas con varios tipos de frutas.
    • Crea un objeto para almacenar la cantidad de cada tipo de fruta.
    • Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
    • Imprime en la consola la cantidad de cada tipo de fruta.
    • Opcional: intenta implementar la solución con el otro ciclo también (for/while).
*/

let frutas = ['Manzana', 'Pera', 'Manzana', 'Uvas', 'Pera', 'Naranja', 'Manzana', 'Pera', 'Manzana', 'Naranja', 'Manzana', 'Pera', 'Naranja', 'Manzana', 'Pera', 'Naranja'];
let numeroManzanas = 0;
let numeroPeras = 0;
let numeroUvas = 0;
let numeroNaranjas = 0;

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === 'Manzana') {
        numeroManzanas++;
    } else if (frutas[i] === 'Pera') {
        numeroPeras++;
    } else if (frutas[i] === 'Uvas') {
        numeroUvas++;   
    } else if (frutas[i] === 'Naranja') {
        numeroNaranjas++;   
    }
}
console.log(`En este arreglo hay ${numeroManzanas} manzanas, ${numeroPeras} peras, ${numeroUvas} uvas y ${numeroNaranjas} naranjas.`);