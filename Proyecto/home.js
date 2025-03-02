
document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if (!user) {
        window.location.href = "index.html";
        return;
    }

    mostrarComentarios();
})

function postComment() {
    const commentText = document.getElementById('comment').value;
    const user = localStorage.getItem("loggedUser")
    const fecha = new Date().toLocaleString()    

    if (commentText.trim() === "") {
        alert("El comentario no puede ir vacio")
        return;
    }

    const newComment = {
        username: user.username,
        name: user.name,
        image: user.image,
        commentText: commentText,
        timestamp: fecha
    }

    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(newComment);

    localStorage.setItem("comments", JSON.stringify(comments))

    document.getElementById('comment').value = "";

    mostrarComentarios();

}

function mostrarComentarios() {
    const commentSection = document.getElementById('comment-section');
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    commentSection.innerHTML = "";

    comments.forEach(comment => {
        const comentarioSection = document.createElement("section");
        comentarioSection.classList.add("comentario");
        comentarioSection.innerHTML = `<img src="${comment.image}" class="user-image"> <strong>${comment.name}</strong><br><p>${comment.timestamp}</p><br> ${comment.commentText}`;
        commentSection.appendChild(comentarioSection);
    });

}

    // const comentarioSection = document.createElement("section")
    // comentarioSection.classList.add("comentario")
    // comentarioSection.innerHTML = `<img src="${user.image}" class="user-image"> <strong>${user.name}</strong><br><p>${fecha}</p><br> ${commentText}`;
    

    // commentSection.appendChild(comentarioSection);
    // document.getElementById('comment').value = "";
