const dateActuelle = document.getElementById("dateActuelle");
const heureActuelle = document.getElementById("heureActuelle");
const bouton1 = document.getElementById("boutonDate");
const resultat = document.getElementById("resultatDateHeure");
const resultatDateHeure2 = document.getElementById("resultatDateHeure2");
const dateAutre = document.getElementById("dateAutre");
const intervalle = document.getElementById("intervalle");

// Variables globales pour stocker la date et l'heure formatées
let dateFormateeGlobale;
let heureFormateeGlobale;

function afficherDate() {
    const date1 = dateActuelle.value;
    const heure = heureActuelle.value;
    const dateSaisie = new Date(date1 + " " + heure);

    const optionsDate = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const optionsHeure = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

    dateFormateeGlobale = dateSaisie.toLocaleDateString("fr-FR", optionsDate);
    heureFormateeGlobale = dateSaisie.toLocaleTimeString("fr-FR", optionsHeure);

    resultat.innerHTML = `Aujourd'hui, nous sommes le <span class="blue">${dateFormateeGlobale}</span> et il est <span class="blue">${heureFormateeGlobale}</span>.`;

    return dateSaisie;
}

function dateDiffInDays(date2, date1) {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

function calculerIntervalle() {
    
    const date1 = new Date(dateActuelle.value + " " + heureActuelle.value);
    const input = dateAutre.value;
    const saisieInput = new Date(input);

    const optionsDate = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const optionsHeure = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

    const dateFormatee = saisieInput.toLocaleDateString("fr-FR", optionsDate);
    const heureFormatee = saisieInput.toLocaleTimeString("fr-FR", optionsHeure);

    let jours = dateDiffInDays(saisieInput, date1);
    resultatDateHeure2.innerHTML = `Il y a ${jours} jours entre aujourd'hui et le <span class= "blue"> ${dateFormateeGlobale} à ${heureFormateeGlobale} </span>.`;
}

bouton1.addEventListener("click", afficherDate);
intervalle.addEventListener("click", calculerIntervalle);
