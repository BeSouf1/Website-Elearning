//Pour la page Contacter-nous!

// Fonction pour créer ou mettre à jour un cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

// Fonction pour récupérer la valeur d'un cookie
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return "";
}

// Pré-remplir le formulaire si les cookies existent
window.onload = function () {
    const nameInput = document.querySelector("input[placeholder='Entrer votre nom']");
    const emailInput = document.querySelector("input[placeholder='Entrer votre email']");
    
    const savedName = getCookie("userName");
    const savedEmail = getCookie("userEmail");

    if (savedName) nameInput.value = savedName;
    if (savedEmail) emailInput.value = savedEmail;

    // Enregistrer les valeurs dans les cookies lors de la modification
    nameInput.addEventListener("input", () => setCookie("userName", nameInput.value, 7)); // Cookie valable 7 jours
    emailInput.addEventListener("input", () => setCookie("userEmail", emailInput.value, 7));
};
