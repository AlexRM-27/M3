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
console.log(`En este arreglo hay ${numeroManzanas} manzanas, ${numeroPeras} peras, ${numeroUvas} ramo de uvas y ${numeroNaranjas} naranjas.`);

/*
Ahora intentemos hacer algo diferente. Supongamos que las frutas se clasifican por ácidas, semiácidas, neutras y dulces.

Ahora dependiendo de las frutas que se ingresen, se debe imprimir en la consola la cantidad de frutas de cada tipo.
*/

let frutasAcidas = ['Kiwi', 'Limón', 'Pomelo', 'Naranja', 'Manzana', 'Uva', 'Arándanos', 'Piña'];
let frutasSemiacidas = ['Fresa', 'Membrillo', 'Níspero', 'Ciruela', 'Melocotón', 'Mango', 'Mandarina', 'Frambuesa'];
let frutasNeutras = ['Coco','Aguacate', 'Aceituna', 'Almendra', 'Avellana', 'Cacahuate', 'Nuez'];
let frutasDulces = ['Plátano', 'Cereza', 'Higo', 'Melón', 'Sandía', 'Pera', 'Granada', 'Chirimoya'];

let canastaDeFrutas = ['Kiwi', 'Fresa', 'Coco', 'Plátano', 'Limón', 'Pomelo', 'Naranja', 'Manzana', 'Uva', 'Arándanos', 'Piña','Membrillo', 'Níspero', 'Ciruela', 'Melocotón', 'Mango', 'Mandarina', 'Frambuesa', 'Aguacate', 'Aceituna', 'Almendra', 'Avellana', 'Cacahuate', 'Nuez', 'Cereza', 'Higo', 'Melón', 'Sandía', 'Pera', 'Granada', 'Chirimoya', 'Papaya', 'Guayaba', 'Maracuyá', 'Tamarindo', 'Moras', 'Fruta del dragón', 'Litchi', 'Carambola', 'Dátil', 'Coco rallado', 'Toronja', 'Grosella', 'Guanábana', 'Mamey', 'Zapote', 'Pitahaya', 'Caqui', 'Manzana verde', 'Durazno', 'Ciruela amarilla'];

let cantidadFrutasAcidas = 0;
let cantidadFrutasSemiacidas = 0;
let cantidadFrutasNeutras = 0;
let cantidadFrutasDulces = 0;
let otrasFrutas = 0;

for (let j = 0; j < canastaDeFrutas.length; j++) {
    let fruta = canastaDeFrutas[j];

   if (frutasAcidas.includes(fruta)) {
        cantidadFrutasAcidas++;
    } else if (frutasSemiacidas.includes(fruta)) {
        cantidadFrutasSemiacidas++;
    } else if (frutasNeutras.includes(fruta)) {
        cantidadFrutasNeutras++;
    } else if (frutasDulces.includes(fruta)) {
        cantidadFrutasDulces++;
    } else {
        otrasFrutas++;
    }
}

console.log(`En la canasta hay ${canastaDeFrutas.length} frutas.`);
console.log(`En esta canasta hay ${cantidadFrutasAcidas} frutas acidas, ${cantidadFrutasSemiacidas} frutas semiacidas, ${cantidadFrutasNeutras} frutas neutras y ${cantidadFrutasDulces} frutas dulces. Además hay ${otrasFrutas} frutas que no se lograron clasificar.`);