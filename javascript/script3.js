//Pour la page Suivi de progression

// Données de progression (elles peuvent venir d'une API ou base de données)
const cours = [
    { titre: "Python", progression: 60 },
    { titre: "JavaScript", progression: 30 },
    { titre: "HTML/CSS", progression: 40 },
    { titre: "Java", progression: 70 },
];

// Fonction pour générer les barres de progression
function afficherProgression() {
    const container = document.getElementById("progress-container");

    cours.forEach((cours) => {
        // Création des éléments
        const progressDiv = document.createElement("div");
        progressDiv.className = "progress";

        const title = document.createElement("span");
        title.className = "progress-title";
        title.textContent = cours.titre;

        const percent = document.createElement("span");
        percent.className = "progress-percent";
        percent.textContent = `${cours.progression}%`;

        const progressBar = document.createElement("div");
        progressBar.className = "progress-bar";
        progressBar.style.width = `${cours.progression}%`; // Largeur en fonction de la progression

        // Ajout des éléments dans le DOM
        progressDiv.appendChild(title);
        progressDiv.appendChild(progressBar);
        progressDiv.appendChild(percent);
        container.appendChild(progressDiv);
    });
}

// Appel de la fonction pour afficher les barres au chargement
document.addEventListener("DOMContentLoaded", afficherProgression);
