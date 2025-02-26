/*
PROBLEMA: Crear un objeto a partir de un Libro
Crear un objeto libro que contenga varias propiedades y un método par imprimir la información básica del libro.

INSTRUCCIONES:
• Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.

• También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'

• Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.
*/

const libroSapiens = {
    titulo: 'Sapiens: de animales a dioses',
    autor: 'Yuval Noah Harari',
    year: 2013,
    estado: 'disponible',
    capitulos: [], //se crea una propiedad para almacenar los capítulos introducidos
    describirSapiens: function() {
        if (this.estado === 'disponible') {
            console.log(`✅ El libro '${this.titulo}', escrito por ${this.autor} publicado en el año ${this.year} se encuentra ${this.estado}.`);
        } else if (this.estado === 'no disponible') {
            console.log(`❌ El libro '${this.titulo}', escrito por ${this.autor} publicado en el año ${this.year} no está disponible.`);
    }
    },
agregarCapitulo: function(tituloCapitulo) {
    this.capitulos.push(tituloCapitulo);
    console.log(`📖 Se agregó el capítulo: "${tituloCapitulo}" con éxito.`);
},
eliminarCapitulo: function(tituloCapitulo) {
    const index = this.capitulos.indexOf(tituloCapitulo);
    if (index !== -1) {
        this.capitulos.splice(index, 1);
        console.log(`🗑 Se eliminó el capítulo: "${tituloCapitulo}".`);
    } else {
        console.log(`⚠ No se encontró el capítulo: "${tituloCapitulo}".`);
    }
},
mostrarCapitulos: function() {
    if (this.capitulos.length === 0) {
        console.log("📌 No hay capítulos agregados.");
    } else {
        console.log("📖 Lista de capítulos:");
            this.capitulos.forEach((capitulo, index) => {
                console.log(`${index + 1}. ${capitulo}`);
            });
    }
}
}

const libroComprar = {
    titulo: 'El día que le mundo deje de comprar',
    autor: 'J.B. Mackinnon',
    year: 2022,
    estado: 'no disponible',
    describirComprar: function() {
        if (this.estado === 'disponible') {
            console.log(`✅ El libro '${this.titulo}', escrito por ${this.autor} publicado en el año ${this.year} se encuentra ${this.estado}.`);
        } else if (this.estado === 'no disponible') {
            console.log(`❌ El libro '${this.titulo}', escrito por ${this.autor} publicado en el año ${this.year} no está disponible.`);
    }
    },
    agregarCapitulo: function(tituloCapitulo) {
        this.capitulos.push(tituloCapitulo);
        console.log(`📖 Se agregó el capítulo: "${tituloCapitulo}" con éxito.`);
    },
    eliminarCapitulo: function(tituloCapitulo) {
        const index = this.capitulos.indexOf(tituloCapitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`🗑 Se eliminó el capítulo: "${tituloCapitulo}".`);
        } else {
            console.log(`⚠ No se encontró el capítulo: "${tituloCapitulo}".`);
        }
    },
    mostrarCapitulos: function() {
        if (this.capitulos.length === 0) {
            console.log("📌 No hay capítulos agregados.");
        } else {
            console.log("📖 Lista de capítulos:");
                this.capitulos.forEach((capitulo, index) => {
                    console.log(`${index + 1}. ${capitulo}`);
                });
        }
    }
}

const libroMoney = {
    titulo: 'Money Coach',
    autor: 'Rodrigo Coutiño',
    year: 2022,
    estado: 'no disponible',
    describirMoney: function() {
        if (this.estado === 'disponible') {
            console.log(`✅ El libro '${this.titulo}', escrito por ${this.autor} publicado en el año ${this.year} se encuentra ${this.estado}.`);
        } else if (this.estado === 'no disponible') {
            console.log(`❌ El libro '${this.titulo}', escrito por ${this.autor} publicado en el año ${this.year} no está disponible.`);
    }
    },
    agregarCapitulo: function(tituloCapitulo) {
        this.capitulos.push(tituloCapitulo);
        console.log(`📖 Se agregó el capítulo: "${tituloCapitulo}" con éxito.`);
    },
    eliminarCapitulo: function(tituloCapitulo) {
        const index = this.capitulos.indexOf(tituloCapitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`🗑 Se eliminó el capítulo: "${tituloCapitulo}".`);
        } else {
            console.log(`⚠ No se encontró el capítulo: "${tituloCapitulo}".`);
        }
    },
    mostrarCapitulos: function() {
        if (this.capitulos.length === 0) {
            console.log("📌 No hay capítulos agregados.");
        } else {
            console.log("📖 Lista de capítulos:");
                this.capitulos.forEach((capitulo, index) => {
                    console.log(`${index + 1}. ${capitulo}`);
                });
        }
    }
}

const libroCarrera = {
    titulo: 'Como darle impulso a tu (nueva) carrera',
    autor: 'Dale Carnegie',
    year: 2022,
    estado: 'disponible',
    describirCarrera: function() {
        if (this.estado === 'disponible') {
            console.log(`✅ El libro '${this.titulo}', escrito por ${this.autor} publicado en el año ${this.year} se encuentra ${this.estado}.`);
        } else if (this.estado === 'no disponible') {
            console.log(`❌ El libro '${this.titulo}', escrito por ${this.autor} publicado en el año ${this.year} no está disponible.`);
    }
    },
    agregarCapitulo: function(tituloCapitulo) {
        this.capitulos.push(tituloCapitulo);
        console.log(`📖 Se agregó el capítulo: "${tituloCapitulo}" con éxito.`);
    },
    eliminarCapitulo: function(tituloCapitulo) {
        const index = this.capitulos.indexOf(tituloCapitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`🗑 Se eliminó el capítulo: "${tituloCapitulo}".`);
        } else {
            console.log(`⚠ No se encontró el capítulo: "${tituloCapitulo}".`);
        }
    },
    mostrarCapitulos: function() {
        if (this.capitulos.length === 0) {
            console.log("📌 No hay capítulos agregados.");
        } else {
            console.log("📖 Lista de capítulos:");
                this.capitulos.forEach((capitulo, index) => {
                    console.log(`${index + 1}. ${capitulo}`);
                });
        }
    }
}

const libroPobreza = {
    titulo: 'Repensar la pobreza',
    autor: 'Banerjee A. & Dufflo, E.',
    year: 2019,
    estado: 'disponible',
    describirPobreza: function() {
        if (this.estado === 'disponible') {
            console.log(`✅ El libro '${this.titulo}', escrito por ${this.autor} publicado en el año ${this.year} se encuentra ${this.estado}.`);
        } else if (this.estado === 'no disponible') {
            console.log(`❌ El libro '${this.titulo}', escrito por ${this.autor} publicado en el año ${this.year} no está disponible.`);
    }
    },
    agregarCapitulo: function(tituloCapitulo) {
        this.capitulos.push(tituloCapitulo);
        console.log(`📖 Se agregó el capítulo: "${tituloCapitulo}" con éxito.`);
    },
    eliminarCapitulo: function(tituloCapitulo) {
        const index = this.capitulos.indexOf(tituloCapitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`🗑 Se eliminó el capítulo: "${tituloCapitulo}".`);
        } else {
            console.log(`⚠ No se encontró el capítulo: "${tituloCapitulo}".`);
        }
    },
    mostrarCapitulos: function() {
        if (this.capitulos.length === 0) {
            console.log("📌 No hay capítulos agregados.");
        } else {
            console.log("📖 Lista de capítulos:");
                this.capitulos.forEach((capitulo, index) => {
                    console.log(`${index + 1}. ${capitulo}`);
                });
        }
    }
}

const libroDinero = {
    titulo: 'La psicología del dinero',
    autor: 'Morgan Housel',
    year: 2020,
    estado: 'disponible',
    describirDinero: function() {
        if (this.estado === 'disponible') {
            console.log(`✅ El libro '${this.titulo}', escrito por ${this.autor} publicado en el año ${this.year} se encuentra ${this.estado}.`);
        } else if (this.estado === 'no disponible') {
            console.log(`❌ El libro '${this.titulo}', escrito por ${this.autor} publicado en el año ${this.year} no está disponible.`);
    }
    },
    agregarCapitulo: function(tituloCapitulo) {
        this.capitulos.push(tituloCapitulo);
        console.log(`📖 Se agregó el capítulo: "${tituloCapitulo}" con éxito.`);
    },
    eliminarCapitulo: function(tituloCapitulo) {
        const index = this.capitulos.indexOf(tituloCapitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`🗑 Se eliminó el capítulo: "${tituloCapitulo}".`);
        } else {
            console.log(`⚠ No se encontró el capítulo: "${tituloCapitulo}".`);
        }
    },
    mostrarCapitulos: function() {
        if (this.capitulos.length === 0) {
            console.log("📌 No hay capítulos agregados.");
        } else {
            console.log("📖 Lista de capítulos:");
                this.capitulos.forEach((capitulo, index) => {
                    console.log(`${index + 1}. ${capitulo}`);
                });
        }
    }
}
//Sapiens
libroSapiens.describirSapiens();
libroSapiens.agregarCapitulo('Un animal sin importancia');
libroSapiens.agregarCapitulo('El árbol del saber');
libroSapiens.agregarCapitulo('Un día en la vida de Adán y Eva');
libroSapiens.agregarCapitulo('El Diluvio');
libroSapiens.mostrarCapitulos();

libroSapiens.eliminarCapitulo('El Diluvio');
libroSapiens.mostrarCapitulos();

 //El dia que le mundo deje de comprar
libroComprar.describirComprar();
libroComprar.agregarCapitulo('PRÓLOGO: Tenemso que dejar de comprar pero no podermos dejar de comprar');
libroComprar.agregarCapitulo('A qué renunciamos y a qué nos aferramos');
libroComprar.mostrarCapitulos();

// MoneyCoach
libroMoney.describirMoney();

// Como darle impulso a tu (nueva) carrera
libroCarrera.describirCarrera();

// Repensar la pobreza
libroPobreza.describirPobreza();

// La psicología del dinero
libroDinero.describirDinero();