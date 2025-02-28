const users = [
    {name: "Alejandro Ruiz", username: "AlexRM", password: "1234", image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name: "Florencia Mendoza", username: "Florens9699", password: "abcd", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {name: "Ameyalli Vanessa Ruiz", username: "AmeVRM", password: "qwer", image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"},
]

function logIn() {
    const usernamePage = document.getElementById('username').value.trim();
    const passwordPage = document.getElementById('password').value.trim();
    const error = document.getElementById('error');

    const userFind = users.find(user => user.username === usernamePage && user.password === passwordPage);

    if (userFind) {
        localStorage.setItem("loggedUser", JSON.stringify(user));
        window.location.href = "home.html";
    } else {
        error.textContent = 'Credenciales incorrectas'
    }
}