//Pour la page Forum d'Entraide

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".view-btn");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const discussionId = button.getAttribute("data-discussion");
            const discussion = document.getElementById(discussionId);

            if (discussion.style.display === "none") {
                discussion.style.display = "block";
                button.textContent = "Masquer la discussion";
            } else {
                discussion.style.display = "none";
                button.textContent = "Voir la discussion";
            }
        });
    });
});






