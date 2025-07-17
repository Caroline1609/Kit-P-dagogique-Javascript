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
    const diffTime = date2 - date1;

    // Calculer les jours
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Calculer le reste en heures
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // Calculer le reste en minutes
    const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));

    // Calculer le reste en secondes
    const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    return { jours: diffDays, heures: diffHours, minutes: diffMinutes, secondes: diffSeconds };
}

function calculerIntervalle() {
    const date1 = new Date(dateActuelle.value + " " + heureActuelle.value);
    const input = dateAutre.value;
    const saisieInput = new Date(input);
    const optionsDate = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const optionsHeure = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dateFormatee = saisieInput.toLocaleDateString("fr-FR", optionsDate);
    const heureFormatee = saisieInput.toLocaleTimeString("fr-FR", optionsHeure);

    const { jours, heures, minutes, secondes } = dateDiffInDays(saisieInput, date1);

    if (jours > 0) {
        resultatDateHeure2.innerHTML = `Dans ${jours} jours, ${heures} heures et ${minutes} minutes, nous serons le <span class="blue">${dateFormatee} à ${heureFormatee}</span>.`;
    } else if (jours < 0) {
        resultatDateHeure2.innerHTML = `Il y a ${Math.abs(jours)} jours, ${Math.abs(heures)} heures et ${Math.abs(minutes)} minutes, nous étions le <span class="blue">${dateFormatee} à ${heureFormatee}</span>.`;
    } else {
        resultatDateHeure2.innerHTML = `Aujourd'hui, nous sommes le <span class="blue">${dateFormatee} à ${heureFormatee}</span>.`;
    }
}

bouton1.addEventListener("click", afficherDate);
intervalle.addEventListener("click", calculerIntervalle);
