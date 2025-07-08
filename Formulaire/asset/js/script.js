const prenom = document.getElementById('prenom');
const age = document.getElementById('age');
const valider = document.getElementById('valider');
const vider = document.getElementById('vider');
const resultat = document.getElementById('resultat');

valider.addEventListener("click", function() {
    if (prenom.value === '' || age.value <= 0) {
        
        resultat.textContent = 'Veuillez compléter/corriger le formulaire.';
    }
    else {
        resultat.textContent = `Bonjour ${prenom.value}, votre âge est : ${age.value} ans.`;
    }
    
});