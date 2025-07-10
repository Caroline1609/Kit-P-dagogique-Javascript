const resultat = document.getElementById("resultatDate");
const calculer = document.getElementById("calculer");
const dateEcouler = document.getElementById("dateEcouler");



calculer.addEventListener('click', function() {

    const input = document.getElementById("dateDeNaissance").value;
    
    const dateUtilisateur = new Date(input);
    const actuelle = new Date();
  
    if (!input) {

        resultat.innerHTML = "Veuillez entrer une date.";

    } else if (dateUtilisateur > actuelle) {

        resultat.innerHTML = "La date est dans le futur, veuillez entrer une date valide.";

    } else {
        formatageDate(dateUtilisateur, actuelle);
        
    }

});

function formatageDate(dateUtilisateur, actuelle){
    const formatageDate = dateUtilisateur.toLocaleDateString('fr-FR');
    const formatageFinal = dateUtilisateur.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    const anneePasse = actuelle.getFullYear() - dateUtilisateur.getFullYear();

    resultat.innerHTML = `Vous êtes né(e) le ${formatageDate} à ${formatageFinal}.<br>Il s'est écoulé ${anneePasse} années depuis votre naissance.`;
    dateEcouler.innerHTML = `Il s'est écoulé ${anneePasse} années depuis votre naissance.`;
}
