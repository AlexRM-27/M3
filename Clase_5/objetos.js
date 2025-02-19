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
