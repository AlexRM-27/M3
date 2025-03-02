const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const strengthBar = document.getElementById("strength-bar");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
    let allChars = "";
    if (uppercaseCheck.checked) allChars += uppercaseChars;
    if (lowercaseCheck.checked) allChars += lowercaseChars;
    if (numbersCheck.checked) allChars += numberChars;
    if (symbolsCheck.checked) allChars += symbolChars;
    
    let password = "";
    for (let i = 0; i < lengthSlider.value; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    
    passwordField.value = password;
    evaluateStrength(password);
}

function evaluateStrength(password) {
    let strength = 0;
    if (password.length >= 12) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    const colors = ["red", "orange", "yellow", "lightgreen", "green"];
    strengthBar.style.width = `${strength * 20}%`;
    strengthBar.style.background = colors[strength - 1] || "red";
}

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordField.value);
    alert("¡Contraseña copiada!");
});

generateBtn.addEventListener("click", generatePassword);
lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

generatePassword();
