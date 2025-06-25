// Fonction pour afficher un message de bienvenue
function afficherBienvenue() {
    console.log("Site chargé avec succès !");
    
    // Ajouter un effet au clic sur le titre
    const titre = document.querySelector('h1');
    titre.addEventListener('click', function() {
        this.style.color = this.style.color === 'red' ? 'white' : 'red';
    });
}

// Lancer la fonction au chargement de la page
document.addEventListener('DOMContentLoaded', afficherBienvenue);