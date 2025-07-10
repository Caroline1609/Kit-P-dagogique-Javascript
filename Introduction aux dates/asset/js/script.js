const resultat = document.getElementById("resultat");
const calculer = document.getElementById("calculer");

calculer.addEventListener('click', function() {
    const input = document.getElementById("dateDeNaissance").value; // Lire la valeur actuelle du champ de saisie

    if (!input) { // Vérifie si l'utilisateur a sélectionné une date
        resultat.textContent = "Veuillez sélectionner une date.";
        return; // Arrête l'exécution de la fonction
    }

    const dateNaissance = new Date(input); // Crée un objet Date avec les données fournies par l'utilisateur
    const maintenant = new Date(); // Crée un objet Date pour la date et l'heure actuelles

    if (isNaN(dateNaissance.getTime())) { // Vérifie si la date est valide
        resultat.textContent = "Veuillez entrer une date valide.";
        return; // Arrête l'exécution de la fonction
    }

    if (dateNaissance > maintenant) { // Vérifie si la date de naissance est dans le futur
        resultat.textContent = "La date ne peut pas être dans le futur.";
        return; // Arrête l'exécution de la fonction
    }

    // Calcule le nombre d'années écoulées entre la date de naissance et aujourd'hui
    let anneesEcoulees = maintenant.getFullYear() - dateNaissance.getFullYear();

    // Récupère le mois et le jour actuels et ceux de la date de naissance
    const moisMaintenant = maintenant.getMonth();
    const moisNaissance = dateNaissance.getMonth();
    const jourMaintenant = maintenant.getDate();
    const jourNaissance = dateNaissance.getDate();

    // Vérifie si l'anniversaire n'a pas encore eu lieu cette année
    if (moisMaintenant < moisNaissance || (moisMaintenant === moisNaissance && jourMaintenant < jourNaissance)) {
        // Décrémente le nombre d'années écoulées car l'anniversaire n'a pas encore eu lieu cette année
        anneesEcoulees--;
    }

    // Affiche le nombre d'années écoulées depuis la date de naissance
    resultat.textContent = `Vous êtes né il y a ${anneesEcoulees} années.`;
});
