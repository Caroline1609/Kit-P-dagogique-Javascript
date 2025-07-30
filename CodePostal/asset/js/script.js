const input = document.getElementById('zipcodeInput');
const datalistSuggestions = document.getElementById('datalistSuggestions');
const button = document.getElementById('button');
const resultatVilleDiv = document.getElementById('resultatVille');
const btnTableau = document.getElementById('btnTableau');
const tableauResultatsDiv = document.getElementById('tableauResultats');

let codePostal = [];

// Charger les données depuis le JSON
fetch("./asset/json/zipcodes.json")
  .then(response => response.json())
  .then(data => {
    codePostal = data;
    console.log("Données chargées :", codePostal);

    input.addEventListener("input", suggestion);
  })
  .catch(error => {
    console.error("Erreur de chargement du JSON :", error);
  });

// Suggestion dynamique
function suggestion() {
  const valeur = input.value.trim();
  datalistSuggestions.innerHTML = "";

  if (valeur.length >= 2) {
    const resultats = codePostal.filter(item =>
      item.codePostal.startsWith(valeur)
    );

    resultats.forEach(item => {
      const option = document.createElement("option");
      option.value = `${item.codePostal} - ${item.libelleAcheminement}`;
      datalistSuggestions.appendChild(option);
    });

    console.log("Suggestions proposées :", resultats);
  }
}

// Afficher la commune exacte
function afficherVille() {
  const saisie = input.value.trim();

  const resultat = codePostal.find(item =>
    `${item.codePostal} - ${item.libelleAcheminement}`.toLowerCase() === saisie.toLowerCase()
  );

  if (resultat) {
    resultatVilleDiv.innerHTML =
      `Commune sélectionnée :<br>
       Le code postal est ${resultat.codePostal}<br>
       Le code de commune est ${resultat.codeCommune}<br>
       Le nom de la commune est ${resultat.nomCommune}<br>
       Le libellé d'acheminement est ${resultat.libelleAcheminement}`;
  } else {
    resultatVilleDiv.textContent = "Aucune commune trouvée";
  }
}

// Afficher tableau des communes du département (avec forEach)
function afficherTableau(event) {
  event.preventDefault(); // ← empêche le bouton de recharger la page
  const saisie = input.value.trim();
  tableauResultatsDiv.innerHTML = "";

  const resultats = codePostal.filter(item =>
    item.codePostal.startsWith(saisie)
  );

  const table = document.createElement("table"); // Création du tableau

  const thead = document.createElement("thead"); /// Création de l'en-tête du tableau
  const headRow = document.createElement("tr");// Création de la ligne d'en-tête du tableau
  const headers = ["Code Postal", "Commune"]; // En-têtes du tableau

  headers.forEach(texte => {
    const th = document.createElement("th"); // Création d'une cellule d'en-tête
    th.textContent = texte; // Remplissage de la cellule avec le texte de l'en-tête
    headRow.appendChild(th); // Ajout de la cellule d'en-tête à la ligne d'en-tête
  });

  thead.appendChild(headRow); // Ajout de la ligne d'en-tête au tableau
  table.appendChild(thead);

  const tbody = document.createElement("tbody"); // Création du corps du tableau

  resultats.forEach(item => {
    const row = document.createElement("tr"); // Création d'une ligne pour chaque résultat

    const tdCodePostal = document.createElement("td"); // Création d'une cellule pour le code postal
    tdCodePostal.textContent = item.codePostal; // Remplissage de la cellule avec le code postal

    const tdNomCommune = document.createElement("td"); // Création d'une cellule pour le nom de la commune
    tdNomCommune.textContent = item.nomCommune; // Remplissage de la cellule avec le nom de la commune  


    row.appendChild(tdCodePostal); // Ajout de la cellule du code postal à la ligne
    row.appendChild(tdNomCommune); // Ajout de la cellule du nom de la commune à la ligne
  

    tbody.appendChild(row); // Ajout de la ligne au corps du tableau
  });

  table.appendChild(tbody); // Ajout du corps du tableau au tableau
  tableauResultatsDiv.appendChild(table); // Ajout du tableau au div des résultats
}

// Événements
button.addEventListener("click", afficherVille); // Afficher la commune exacte
btnTableau.addEventListener("click", afficherTableau); // Afficher le tableau des communes du département
