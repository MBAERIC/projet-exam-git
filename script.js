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
// Ajoute cette fonction à script.js
function ajouterSectionDynamique() {
    const main = document.querySelector('main');
    const nouvelleSection = document.createElement('section');
    nouvelleSection.innerHTML = `
        <h2>Section ajoutée dynamiquement</h2>
        <p>Cette section a été créée avec JavaScript !</p>
        <button onclick="this.parentElement.remove()">Supprimer cette section</button>
    `;
    main.appendChild(nouvelleSection);
}

// Modifier la fonction existante
function afficherBienvenue() {
    console.log("Site chargé avec succès !");
    
    const titre = document.querySelector('h1');
    titre.addEventListener('click', function() {
        this.style.color = this.style.color === 'red' ? 'white' : 'red';
    });
    
    // Ajouter un bouton pour la section dynamique
    const boutonAjouter = document.createElement('button');
    boutonAjouter.textContent = 'Ajouter une section';
    boutonAjouter.onclick = ajouterSectionDynamique;
    document.querySelector('main').appendChild(boutonAjouter);
}