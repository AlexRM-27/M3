function addComment() {
    const input = document.getElementById("commentInput");
    const commentText = input.value.trim();
    
    if (commentText !== "") {
        const commentList = document.getElementById("commentsList");
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.textContent = commentText;
        
        commentList.appendChild(newComment);
        input.value = ""; // Limpiar input después de publicar
    }
}