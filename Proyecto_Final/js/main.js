// Simulación de una base de datos de usuarios
let users = JSON.parse(localStorage.getItem('users')) || [];

// Simulación de una base de datos de comentarios
let comments = JSON.parse(localStorage.getItem('comments')) || [];

// Función para guardar usuarios en localStorage
function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

// Función para guardar comentarios en localStorage
function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Función para manejar el registro de usuarios
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;
    const alias = document.getElementById('alias').value;

    const newUser = {
        nombre,
        apellido,
        correo,
        password,
        alias
    };

    users.push(newUser);
    saveUsers();

    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    window.location.href = 'index.html';
});

// Función para manejar el inicio de sesión
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.alias === username && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'index.html';
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});

// Función para mostrar el nombre del usuario después de iniciar sesión
function displayUserInfo() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('username-display').textContent = currentUser.alias;
        document.getElementById('login-form').style.display = 'none';
    }
}

// Función para manejar el cierre de sesión
document.getElementById('logout-button')?.addEventListener('click', function() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
});

// Función para manejar los comentarios
document.getElementById('comment-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        document.getElementById('comment-alert').style.display = 'block';
        return;
    }

    const commentText = document.querySelector('#comment-form textarea').value;

    const comment = {
        id: Date.now(), // Usamos un timestamp como ID único
        user: currentUser.alias,
        text: commentText
    };

    comments.push(comment);
    saveComments();

    displayComments();
    document.querySelector('#comment-form textarea').value = '';
});

// Función para eliminar un comentario
function deleteComment(commentId) {
    comments = comments.filter(comment => comment.id !== commentId);
    saveComments();
    displayComments();
}

// Función para editar un comentario
function editComment(commentId) {
    const comment = comments.find(comment => comment.id === commentId);
    const newText = prompt('Edita tu comentario:', comment.text);

    if (newText !== null && newText.trim() !== '') {
        comment.text = newText.trim();
        saveComments();
        displayComments();
    }
}

// Función para mostrar los comentarios
function displayComments() {
    const commentsList = document.querySelector('.comentarios');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (commentsList) {
        commentsList.innerHTML = '<h3>Experiencias Compartidas</h3>';
        comments.forEach(comment => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${comment.user}:</strong>
                <p>${comment.text}</p>
                ${currentUser && currentUser.alias === comment.user
                    ? `<div class="comment-actions">
                           <button onclick="editComment(${comment.id})">Editar</button>
                           <button onclick="deleteComment(${comment.id})">Eliminar</button>
                       </div>`
                    : ''
                }
            `;
            commentsList.appendChild(li);
        });
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    displayUserInfo();
    displayComments();
});