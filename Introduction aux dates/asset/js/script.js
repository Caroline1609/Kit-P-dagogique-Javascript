const resultat = document.getElementById("resultat");
const calculer = document.getElementById("calculer");
 const input = document.getElementById("dateDeNaissance").value;

calculer.addEventListener('click', function() {
   
    const dateNaissance = new Date(input); // Crée un objet Date avec les données fournies par l'utilisateur
    const maintenant = new Date(); // Crée un objet Date pour la date et l'heure actuelles


    if (dateNaissance > maintenant) { // Vérifie si la date de naissance est dans le futur
        resultat.textContent = "La date ne peut pas être dans le futur.";
    }

    // Calcule le nombre d'années écoulées entre la date de naissance et aujourd'hui
    let anneesEcoulees = maintenant.getFullYear() - dateNaissance.getFullYear();


});
