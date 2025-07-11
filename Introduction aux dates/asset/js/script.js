const resultat = document.getElementById("resultatDate");
const calculer = document.getElementById("calculer");
const dateEcouler = document.getElementById("dateEcouler");
const signeAstro = document.getElementById("signeAstro");




calculer.addEventListener('click', function() {

    const input = document.getElementById("dateDeNaissance").value;
        const actuelle = new Date();
    
    const dateUtilisateur = new Date(input);
    if(isNaN(dateUtilisateur.valueOf())){
         resultat.innerHTML = "Erreur";
    }   
    else if (!input) {

        resultat.innerHTML = "Veuillez entrer une date.";

    } else if (dateUtilisateur > actuelle) {

        resultat.innerHTML = "La date est dans le futur, veuillez entrer une date valide.";

    } else {
        formatageDate(dateUtilisateur, actuelle);
        signeAstrologique(dateUtilisateur);
        
    }

});

function anneBisextile(annee) {
    return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
}

function formatageDate(dateUtilisateur, actuelle){
    const formatageDate = dateUtilisateur.toLocaleDateString('fr-FR');
    const formatageFinal = dateUtilisateur.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    const isLeapYear = (year) => new Date(year, 1, 29).getMonth() === 1;

    const anneePasse = actuelle.getFullYear() - dateUtilisateur.getFullYear();
    const anneeNaissance = dateUtilisateur.getFullYear();
    const estBissextile = isLeapYear(anneeNaissance);
    
    
    if (estBissextile){
        resultat.innerHTML = `Erreur de date recommencer`;

    } else{
        resultat.innerHTML = `Vous êtes né(e) le <span class= "color">${formatageDate} </span> à <span class= "color">${formatageFinal}</span>.`;
        dateEcouler.innerHTML = `Il s'est écoulé ${anneePasse} années depuis votre naissance.`;
    }
    

    
    
}

function signeAstrologique(date) {
    const jour = date.getDate();
    const mois = date.getMonth() + 1; // Les mois sont indexés à partir de 0


    const signes = [
    { nom: "Verseau", debut: { mois: 1, jour: 20 }, fin: { mois: 2, jour: 18 } },
    { nom: "Poissons", debut: { mois: 2, jour: 19 }, fin: { mois: 3, jour: 20 } },
    { nom: "Bélier", debut: { mois: 4, jour: 21 }, fin: { mois: 4, jour: 19 } },
    { nom: "Taureau", debut: { mois: 4, jour: 20 }, fin: { mois: 5, jour: 20 } },
    { nom: "Gémeaux", debut: { mois: 5, jour: 21 }, fin: { mois: 6, jour: 20 } },
    { nom: "Cancer", debut: { mois: 6, jour: 21 }, fin: { mois: 7, jour: 22 } },
    { nom: "Lion", debut: { mois: 7, jour: 23 }, fin: { mois: 8, jour: 22 } },
    { nom: "Vierge", debut: { mois: 8, jour: 23 }, fin: { mois: 9, jour: 22 } },
    { nom: "Balance", debut: { mois: 9, jour: 23 }, fin: { mois: 10, jour: 22 } },
    { nom: "Scorpion", debut: { mois: 10, jour: 23 }, fin: { mois: 11, jour: 21 } },
    { nom: "Sagittaire", debut: { mois: 11, jour: 22 }, fin: { mois: 12, jour: 21 } },
    { nom: "Capricorne", debut: { mois: 12, jour: 22 }, fin: { mois: 1, jour: 19 } },
    ]

    const signe = signes.find(signe => {
        if (mois === signe.debut.mois && jour >= signe.debut.jour) {
            return true;
        } else if (mois === signe.fin.mois && jour <= signe.fin.jour) {
            return true;
        }
        return false;
    });

    if (signe) {
        signeAstro.innerHTML = `Votre signe astrologique est :  <span class= "color">${signe.nom}</span>.`;
    } else {
        signeAstro.innerHTML = "Impossible de déterminer votre signe astrologique.";
    }
}

