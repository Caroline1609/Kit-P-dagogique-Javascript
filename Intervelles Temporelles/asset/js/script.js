const dateActuelle = document.getElementById("dateActuelle");
const heureActuelle = document.getElementById("heureActuelle");
const bouton1 = document.getElementById("boutonDate");
const resultat = document.getElementById("resultatDateHeure");

bouton1.addEventListener("click", function() {

    affichageDateEtHeure(date1);

})

function affichageDateEtHeure(){

    const date1 = new Date();


    //format date fr
    let jour = date1.getDate();
    let mois = date1.getMonth() + 1;
    let annee = date1.getFullYear();

    let formatageDate = `${jour}/${mois}/${annee}`;

    //format minute fr
    let heures = maintenant.getHours();
    let minutes = maintenant.getMinutes();


    let heureFormatFr = `${heures}:${minutes}`;

    dateActuelle.valueAsDate = date1;
    heureActuelle.value = heureFormatFr;

    resultat.innerHTML = `Aujourd'hui nous sommes le ${formatageDate}, l'heure courante est : ${heureFormatFr}.`;
     

}