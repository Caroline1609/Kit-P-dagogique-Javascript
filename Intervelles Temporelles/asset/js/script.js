const dateActuelle = document.getElementById("dateActuelle");
const heureActuelle = document.getElementById("heureActuelle");
const bouton1 = document.getElementById("boutonDate");
const resultat = document.getElementById("resultatDateHeure");

bouton1.addEventListener("click", function() {

    affichageDateEtHeure();

})

function affichageDateEtHeure(dateUtilisateur){
    

    const date1 = new Date();


    //format date fr
    let jour = date1.getDate();
    let mois = date1.getMonth() + 1;
    let annee = date1.getFullYear();

    let formatageDate = `${jour}/${mois}/${annee}`;

    //format minute fr
    let heures = date1.getHours();
    let minutes = date1.getMinutes();


    let heureFormatFr = dateUtilisateur.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

    dateActuelle.value = date1;
    heureActuelle.value = heureFormatFr;

    resultat.innerHTML = `Aujourd'hui nous sommes le ${formatageDate}, l'heure courante est : ${heureFormatFr}.`;
     

}