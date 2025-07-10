const resultat = document.getElementById("resultatDate");
const calculer = document.getElementById("calculer");
const dateEcouler = document.getElementById("dateEcouler");
const signeAstro = document.getElementById("signeAstro");



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
        signeAstrologique(date);
        
    }

});

function formatageDate(dateUtilisateur, actuelle){
    const formatageDate = dateUtilisateur.toLocaleDateString('fr-FR');
    const formatageFinal = dateUtilisateur.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    const anneePasse = actuelle.getFullYear() - dateUtilisateur.getFullYear();

    resultat.innerHTML = `Vous êtes né(e) le ${formatageDate} à ${formatageFinal}.`;
    dateEcouler.innerHTML = `Il s'est écoulé ${anneePasse} années depuis votre naissance.`;
    signeAstro.innerHTML = ` Votre signe astrologique est : ${signe}.`;
}

function signeAstrologique(date) {
    const jour = date.getDate();
    const mois = date.getMonth() + 1; // Les mois sont indexés à partir de 0

    const signes = [
    { nom: "Verseau", debut: { mois: 1, jour: 20 }, fin: { mois: 2, jour: 18 } },
    { nom: "Poissons", debut: { mois: 1, jour: 20 }, fin: { mois: 2, jour: 18 } },


    ]
}