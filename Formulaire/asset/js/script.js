document.addEventListener('DOMContentLoaded', function() {
    const prenom = document.getElementById('prenom');
    const age = document.getElementById('age');
    const valider = document.getElementById('valider');
    const vider = document.getElementById('vider');
    const resultat = document.getElementById('resultat');
    const statut = document.getElementById('statut');
    const retraiteOuPas = document.getElementById('retraiteOuPas');

    valider.addEventListener("click", function(event) {
        event.preventDefault(); 

        if (prenom.value === '' || age.value <= 0) {
            resultat.textContent = 'Veuillez compléter/corriger le formulaire.';
            statut.textContent = ''; 
        } else {
            resultat.textContent = `Bonjour ${prenom.value}, votre âge est : ${age.value} ans.`;
            afficherStatut();
            afficheRetraite();
        }
    });

    vider.addEventListener("click", function() {
        prenom.value = '';
        age.value = '';
        resultat.textContent = '';
        statut.textContent = '';
    });

    function afficherStatut() {
        let nbr = Number(age.value);
        if (nbr < 18) {
            statut.textContent = 'Vous êtes mineur';
        } else {
            statut.textContent = 'Vous êtes majeur';
        }
    }

    function afficheRetraite(){
        let age = Number(age.value);
        let difference = 64 - age;

        if (age < 64) {
            statut.textContent = `Il vous reste ${difference} année(s) avant la retraite`;
        } else if (age > 64) {
            statut.textContent = `Vous êtes à la retraite depuis ${difference}`;
        } else{
            statut.textContent = `Vous prenez votre retraite cette année !`;
        }
    }
});
