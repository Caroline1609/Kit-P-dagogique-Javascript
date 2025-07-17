let dateActuelle = document.getElementById("dateActuelle");
const heureActuelle = document.getElementById("heureActuelle");
const bouton1 = document.getElementById("boutonDate");
const resultat = document.getElementById("resultatDateHeure");
const resultatDateHeure2 = document.getElementById("resultatDateHeure2");
const dateAutre = document.getElementById("dateAutre");
const intervalle = document.getElementById("intervalle");



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
    const date1 = document.getElementById('dateActuelle').value;
    const heure = document.getElementById('heureActuelle').value;
    const dateSaisie = new Date(date1 + "" + heure); 
    const input = document.getElementById('dateAutre').value;
    const saisieInput = new Date(input);

    if (isNaN(dateSaisie.getTime()) || isNaN(saisieInput.getTime())) {
        console.error("Invalid date input");
        return;
    }

    let jour = dateDiff(saisieInput, dateSaisie);

    resultatDateHeure2.innerHTML = `Il y a <span class="blue">${jour}</span> années.`;
}


    intervalle.addEventListener("click", calculerIntervalle);




