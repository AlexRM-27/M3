// estructura base de un objeto simple
const persona = {
    nombre: 'Alejandro', // clave: valor
    edad: 25,
    ciudad: 'Cedemequis'
}

// Modificación de valores
persona.ciudad = 'Cordoba'; // se cambia la ciudad de la persona

//Añadir valores
persona.genero = 'Masculino';
persona.estatura = 1.75;

delete persona.estatura; // se elimina la propiedad estatura

// Objetos con métodos
const coche = {
    marca: 'Chevrolet',
    modelo: 'Aveo 2025',
    color: 'gris',

    arrancar: function(marca) { //esto es un método, es decir una acción que está haciendo el objeto; se pueden añadir parámetros
        console.log('El coche está arrancando', marca);
    }
}

coche.arrancar(coche.marca);

// Método abreviado
const calculadora = {
    suma(x,y) {
        return x + y
    }
}

console.log(calculadora.suma(58,49));

// Objetos anidados
const trabajo = {
    nombre: 'Decathlon',
    puesto: 'Vendedor Deportivo',
    ubicacion: {
        ciudad: 'Ciudad de México',
        calle: 'Av. Insurgentes Sur',
        pais: 'México'
    }
}

console.log(trabajo.nombre);
console.log(trabajo.ubicacion.pais);
console.log(trabajo['ubicacion']['pais']); //Notación por corchetes, otra manera de acceder a las propiedades

trabajo.ubicacion.calle = 'Av. Insurgentes Sur 2374'
console.log(trabajo.ubicacion.calle);

// Uso de this
const usuario = {
    nombre: 'Ricardo',
    saludar: function() {
        console.log(`Hola soy ${this.nombre}`);
    }
}

usuario.saludar();

// Este es un molde de objetos
class Persona {
    constructor(nombre, edad) { //constructor es quien nos ayuda a llenar el molde
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const personaIvan = new Persona('Ivan', 25);
personaIvan.saludar();

const personaOscar = new Persona('Oscar', 30);
personaOscar.saludar();

class Estudiante extends Persona { // Hijo, se utiliza la clase "Persona" del objeto pasado por lo que se le llama hijo
    constructor(nombre, edad, genero, carrera, promedio) {
        super(nombre, edad, genero) // Con esto heredamos el constructor de la clase padre
        this.carrera = carrera;
        this.promedio = promedio;
    }

    estudiar() {
        console.log(`${this.nombre} esta estudiando ${this.carrera}`);
    }
}

const AnaPaola = new Estudiante('Ana Paola', 21, 'Femenino', 'Informatica', 9.5);
AnaPaola.estudiar();
AnaPaola.saludar();