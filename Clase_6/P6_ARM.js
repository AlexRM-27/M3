const avatars = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/women/4.jpg",
    "https://randomuser.me/api/portraits/men/5.jpg"
];

const usernames = ["Juan", "Ana", "Carlos", "Sofía", "Luis"];

document.addEventListener("DOMContentLoaded", () => {
    loadComments();
});

function addComment() {
    const input = document.getElementById("commentInput");
    const commentText = input.value.trim();
    
    if (commentText !== "") {
        const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
        const randomUser = usernames[Math.floor(Math.random() * usernames.length)];

        const newComment = { text: commentText, avatar: randomAvatar, username: randomUser };
        
        saveComment(newComment);
        renderComment(newComment);
        input.value = "";
    }
}

function renderComment(comment, index = null) {
    const commentList = document.getElementById("commentsList");

    const newComment = document.createElement("div");
    newComment.classList.add("comment");

    // Avatar
    const avatarImg = document.createElement("img");
    avatarImg.src = comment.avatar;
    avatarImg.alt = "Avatar";
    avatarImg.classList.add("avatar");

    // Nombre de usuario y comentario
    const commentTextNode = document.createElement("div");
    commentTextNode.classList.add("comment-text");
    commentTextNode.innerHTML = `<strong>${comment.username}:</strong> ${comment.text}`;

    // Botón de eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        deleteComment(index);
    };

    newComment.appendChild(avatarImg);
    newComment.appendChild(commentTextNode);
    newComment.appendChild(deleteBtn);

    commentList.appendChild(newComment);
}

function saveComment(comment) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));
}

function loadComments() {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach((comment, index) => {
        renderComment(comment, index);
    });
}

function deleteComment(index) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.splice(index, 1);
    localStorage.setItem("comments", JSON.stringify(comments));
    
    document.getElementById("commentsList").innerHTML = "";
    loadComments();
}

// Permitir publicar con la tecla "Enter"
document.getElementById("commentInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addComment();
    }
});