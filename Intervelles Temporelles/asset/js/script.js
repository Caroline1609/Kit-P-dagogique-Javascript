const dateActuelle = document.getElementById("dateActuelle");
const heureActuelle = document.getElementById("heureActuelle");
const bouton1 = document.getElementById("boutonDate");
const resultat = document.getElementById("resultatDateHeure");

bouton1.addEventListener("click", function() {

    const maintenant = new Date();

    

    const jour = maintenant.getDate();
    const mois = maintenant.getMonth() + 1;
    const annee = maintenant.getFullYear();

    const heures = maintenant.getHours();
    const minutes = maintenant.getMinutes();

    const dateFormatee = `${jour}/${mois}/${annee}`;
    const heureFormatee = `${heures}:${minutes}`;

    console.log(maintenant)

    resultat.textContent = `Aujourd'hui, nous sommes le ${dateFormatee} et il est ${heureFormatee}.`;
});
