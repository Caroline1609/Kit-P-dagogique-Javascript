const prenom = document.getElementById('prenom');
const age = document.getElementById('age');
const valider = document.getElementById('valider');
const vider = document.getElementById('vider');
const resultat = document.getElementById('resultat');
const statut = document.getElementById('statut');
const retraiteOuPas = document.getElementById('retraiteOuPas');

valider.addEventListener("click", function(event) {
  event.preventDefault();

  const ageNum = Number(age.value);

  if (prenom.value.trim() === '' || isNaN(ageNum) || ageNum <= 0) {
    resultat.textContent = 'Veuillez compléter/corriger le formulaire.';
    statut.textContent = '';
    retraiteOuPas.textContent = '';
  } else {
    resultat.innerHTML = `Bonjour <span class="highlight">${prenom.value}</span>, votre âge est : <span class="highlight">${ageNum}</span>.`;
    afficherStatut(ageNum);
    afficheRetraite(ageNum);
  }
});

vider.addEventListener("click", function() {
  prenom.value = '';
  age.value = '';
  resultat.textContent = '';
  statut.textContent = '';
  retraiteOuPas.textContent = '';
});

function afficherStatut(ageNum) {
  if (ageNum < 18) {
    statut.innerHTML = `Vous êtes <span class="highlight">mineur</span>.`;
  } else {
    statut.innerHTML = `Vous êtes <span class="highlight">majeur</span>.`;
  }
}

function afficheRetraite(ageNum) {
  const ageRetraite = 64;

  if (ageNum < ageRetraite) {
    retraiteOuPas.innerHTML = `Il vous reste <span class="highlight">${ageRetraite - ageNum}</span> année(s) avant la retraite.`;
  } else if (ageNum > ageRetraite) {
    retraiteOuPas.innerHTML = `Vous êtes à la retraite depuis <span class="highlight">${ageNum - ageRetraite}</span> année(s).`;
  } else {
    retraiteOuPas.innerHTML = `<span class="highlight">Vous prenez votre retraite cette année !</span>`;
  }
}
