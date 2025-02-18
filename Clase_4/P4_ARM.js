/* EJERCICIO PROPUESTO EN CAMPUS: Seguimiento de libros
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.
*/

let librosLeidos = [];
function agregarLibro(titulo, autor){
    let libro = { titulo, autor };
    librosLeidos.push(libro);
    console.log(`📚 Se agregó el libro: ${titulo} de ${autor}`);    
}

function mostrarLibros(){
    if (librosLeidos.length === 0) {
        console.log("No se ha añadido ningún libro.");
    } else {
        console.log("Libros leídos:");
        librosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} de ${libro.autor}`);
        });
    }
}

agregarLibro('Sapiens: de animales a dioses', 'Yuval Noah Harari');
agregarLibro('El día que le mundo deje de comprar', 'J.B. Mackinnon');
agregarLibro('Money Coach', 'Investor Coach');
agregarLibro('Cómo darle impulso a tu (nueva) carrera', 'Dale Carnegie');
agregarLibro('Repensar la pobreza', 'Banerjee A. & Dufflo, E.');
agregarLibro('La psicología del dinero', 'Housel, M.');

mostrarLibros();