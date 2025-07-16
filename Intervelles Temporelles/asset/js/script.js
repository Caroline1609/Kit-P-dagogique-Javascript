let dateActuelle = document.getElementById("dateActuelle");
const heureActuelle = document.getElementById("heureActuelle");
const bouton1 = document.getElementById("boutonDate");
const resultat = document.getElementById("resultatDateHeure");
const resultatDateHeure2 = document.getElementById("resultatDateHeure2");
const dateAutre = document.getElementById("dateAutre");



function afficherDate(){

    const date1 = document.getElementById('dateActuelle').value;
    const heure = document.getElementById('heureActuelle').value;

    const dateSaisie = new Date(date1 + " " + heure);

    const optionsDate = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const optionsHeure = { hour: '2-digit', minute: '2-digit', second: '2-digit'};

    const dateFormatee = dateSaisie.toLocaleDateString("fr-FR", optionsDate);
    const heureFormatee = dateSaisie.toLocaleTimeString("fr-FR", optionsHeure);

    resultat.innerHTML = `Aujourd'hui, nous sommes le <span class="blue">${dateFormatee}</span> et il est <span class="blue">${heureFormatee}</span>.`;
}


bouton1.addEventListener("click", afficherDate);

function calculerIntervalle() {
        const date1 = dateActuelle.value;
        const heure = heureActuelle.value;
        const dateSaisie = new Date(date1 + "" + heure);
        const input = dateAutre.value;
        const saisieInput = new Date(input);

        if (isNaN(dateSaisie.getTime()) || isNaN(saisieInput.getTime())) {
            resultatDateHeure2.innerHTML = "Veuillez entrer des dates valides.";
            return;
        }

        let dateDiff = saisieInput - dateSaisie;
        dateDiff = dateDiff / 1000 / 60 / 60 / 24 / 365.25; 
        dateDiff = Math.floor(dateDiff);

        resultatDateHeure2.innerHTML = `Il y a <span class="blue">${dateDiff}</span> années.`;
}

    resultatDateHeure2.addEventListener("click", calculerIntervalle);




