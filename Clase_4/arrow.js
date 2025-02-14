const suma = (x,y) => x + y;
console.log(suma(909,78));


const saludar = (nombre) => {
    return `Hola ${nombre}`
}
console.log(saludar('Alex'));


const numeros = [1,2,3,4,5,6,7,8,10]
const multiplicados = numeros.map(num => num * 8)
console.log(multiplicados);