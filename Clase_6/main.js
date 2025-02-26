console.log (document.documentElement); // Accediendo al nodo HTML
console.log (document.body); // Accediendo al nodo body

let titulo = document.getElementById('titulo');
titulo.innerHTML = 'Alex y sus Extremitas';
titulo.style.color = 'blue';

let nuevoParrafo = document.createElement('p'); // Agregamos un párrafo desde el DOM
nuevoParrafo.innerHTML = 'Bienvenidos a la clase 6'; // Agregamos contenido al parágrafo

document.body.appendChild(nuevoParrafo); // Agregamos el parágrafo al body

let nuevoParrafo2 = document.createElement('p'); // Simulamos agregar un parágrafo
nuevoParrafo2.innerHTML = 'Bienvenidos a la clase 6'; // Agregamos contenido al parágrafo

document.body.insertBefore(nuevoParrafo2, titulo); // Se añade el párrafo antes del título

/*
nuevoParrafo2.remove(); // Elimina el parrafo
document.body.removeChild(nuevoParrafo2);
*/

function retraso() {
    setTimeout(() => {
        let parrafoSecundario = document.createElement('p')
        parrafoSecundario.innerHTML = 'Voy a aparecer 3 segundos después'
        document.body.appendChild(parrafoSecundario)
    }, 3000)
}

retraso();

function agregarElementos() {
    let nuevoElemento = document.createElement('p')
    nuevoElemento.innerHTML = 'Leidis and madafakas'
    document.body.appendChild(nuevoElemento)
}