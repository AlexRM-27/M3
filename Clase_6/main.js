console.log (document.documentElement); // Accediendo al nodo HTML
console.log (document.body); // Accediendo al nodo body

let titulo = document.getElementById('titulo');
titulo.innerHTML = 'Alex y sus Extremitas';
titulo.style.color = 'blue';

let nuevoParrafo = document.createElement('p');
nuevoParrafo.innerHTML = 'Bienvenidos a la clase 6';

document.body.appendChild(nuevoParrafo);