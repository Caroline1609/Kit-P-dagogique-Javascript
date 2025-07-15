const dateActuelle = document.getElementById("dateActuelle");
const heureActuelle = document.getElementById("heureActuelle");
const bouton1 = document.getElementById("boutonDate");
const resultat = document.getElementById("resultatDateHeure");


function ajout0(nombre){
    if(nombre < 10){
        nombre = "0" + nombre;  
    } 
    return nombre;
}

bouton1.addEventListener("click", function() {


    const date1 = document.getElementById('dateActuelle').value;
    const heure = document.getElementById('heureActuelle').value;
    const dateSaisie = new Date(date1 + " " +  heure);

    const jour = dateSaisie.getDate();
    const mois = dateSaisie.getMonth() + 1;
    const annee = dateSaisie.getFullYear();

    const heures = dateSaisie.getHours();
    const minutes = dateSaisie.getMinutes();

    const dateFormatee = `${ajout0(jour)}/${ajout0(mois)}/${annee}`;
    const heureFormatee = `${ajout0(heures)}:${ajout0(minutes)}`;


    resultat.innerHTML = `Aujourd'hui, nous sommes le <span class="blue">${dateFormatee}</span> et il est <span class="blue">${heureFormatee}</span>.`;


    
});

