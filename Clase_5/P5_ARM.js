/*
PROBLEMA: Crear un objeto a partir de un Libro
Crear un objeto libro que contenga varias propiedades y un método par imprimir la información básica del libro.

INSTRUCCIONES:
• Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.

• También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'

• Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.
*/

class Libro {
    constructor(titulo, autor, year, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.year = year;
        this.estado = estado;
        this.capitulos = [];
    }

    describirLibro() {
        if (this.estado === 'disponible') {
            console.log(`✅ El libro '${this.titulo}', escrito por ${this.autor}, publicado en el año ${this.year}, se encuentra disponible.`);
        } else {
            console.log(`❌ El libro '${this.titulo}', escrito por ${this.autor}, publicado en el año ${this.year}, no está disponible.`);
        }
    }

    agregarCapitulo(tituloCapitulo) {
        this.capitulos.push(tituloCapitulo);
        console.log(`📖 Se agregó el capítulo: "${tituloCapitulo}".`);
    }

    eliminarCapitulo(tituloCapitulo) {
        const index = this.capitulos.indexOf(tituloCapitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`💥 Se eliminó el capítulo: "${tituloCapitulo}".`);
        } else {
            console.log(`❗ No se encontró el capítulo: "${tituloCapitulo}".`);
        }
    }

    mostrarCapitulos() {
        if (this.capitulos.length === 0) {
            console.log("📌 No hay capítulos agregados.");
        } else {
            console.log(`▶️ Lista de capítulos de '${this.titulo}':`);
            this.capitulos.forEach((capitulo, index) => {
                console.log(`${index + 1}. ${capitulo}`);
            });
        }
    }
}

// Creando los libros

const libro1 = new Libro('Sapiens: de animales a dioses', 'Yuval Noah Harari', 2011, 'disponible');
const libro2 = new Libro('El día que le mundo deje de comprar', 'J.B Mackinnon', 2017, 'no disponible');
const libro3 = new Libro('Money Coach', 'Investor Coach', 2020, 'no disponible');
const libro4 = new Libro('Como darle impulso a tu (nueva) carrera', 'Dale Carnegie', 2022, 'disponible');
const libro5 = new Libro('Repensar la pobreza', 'Banerjee A. & Dufflo, E.', 2019, 'disponible');
const libro6 = new Libro('La psicología del dinero', 'Housel, M.', 2020, 'disponible');

// Sapiens
libro1.describirLibro();
libro1.agregarCapitulo('Un animal sin importancia');
libro1.agregarCapitulo('El árbol del saber');
libro1.agregarCapitulo('Un día en la vida de Adán y Eva');
libro1.agregarCapitulo('El Diluvio');
libro1.eliminarCapitulo('El Diluvio');
libro1.mostrarCapitulos();

// El día que le mundo deje de comprar
libro2.describirLibro();
libro2.agregarCapitulo('PRÓLOGO: Tenemos que dejar de comprar pero no podemos dejar de comprar');
libro2.agregarCapitulo('A qué renunciamos y a qué nos aferramos');
libro2.mostrarCapitulos();

// Money Coach
libro3.describirLibro();
libro3.mostrarCapitulos();

// Como darle impulso a tu (nueva) carrera
libro4.describirLibro();
libro4.agregarCapitulo('Cómo crear una actitud profesional');
libro4.agregarCapitulo('Como desarrollar nuestra marca personal');
libro4.agregarCapitulo('Cómo potenciar nuestras habilidades de gestión de personas');
libro4.agregarCapitulo('Cómo potenciar nuestras habilidades de gestión de procesos');
libro4.mostrarCapitulos();

// Repensar la pobreza
libro5.describirLibro();
libro5.agregarCapitulo('Piénsalo bien, pero piénsalo otra vez');
libro5.agregarCapitulo('¿Mil millones de personas hambrientas?');
libro5.agregarCapitulo('¿Soluciones al alcance de la mano para una mejora de la salud mundial?');
libro5.agregarCapitulo('Los mejores de la clase');
libro5.agregarCapitulo('La gran familia de Pak Sudarno');
libro5.agregarCapitulo('Gestores espontáneos de fondos de alto riesgo');
libro5.mostrarCapitulos();

// La psicología del dinero
libro6.describirLibro();
libro6.agregarCapitulo('Nadie está loco');
libro6.agregarCapitulo('Suerte y riesgo');
libro6.agregarCapitulo('No tener nunca suficiente');
libro6.agregarCapitulo('La confusión del interés compuesto');
libro6.agregarCapitulo('Hacerse rico frente a conservar la riqueza');
libro6.mostrarCapitulos();