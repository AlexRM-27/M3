const alexUser = "alex";
const alexPassword = "1234";

function logIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');

    if (username === alexUser && password === alexPassword) {
        localStorage.setItem("loggedUser", username);
        window.location.href = "home.html"
    } else {
        error.textContent = 'Credenciales incorrectas'
    }
}