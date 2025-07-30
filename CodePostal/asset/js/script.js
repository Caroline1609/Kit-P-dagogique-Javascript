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
    resultatVilleDiv.textContent = "Aucune commune trouvée pour cette saisie.";
  }
}

// Afficher tableau des communes du département (avec forEach)
function afficherTableau() {
  event.preventDefault(); // ← empêche le bouton de recharger la page
  const saisie = input.value.trim();
  tableauResultatsDiv.innerHTML = "";

  const resultats = codePostal.filter(item =>
    item.codePostal.startsWith(saisie)
  );

  if (resultats.length === 0) {
    tableauResultatsDiv.textContent = "Aucune commune trouvée pour ce code département.";
    return;
  }

  const table = document.createElement("table");

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  const headers = ["Code Postal", "Commune", "Code Commune", "Libellé Acheminement"];

  headers.forEach(texte => {
    const th = document.createElement("th");
    th.textContent = texte;
    headRow.appendChild(th);
  });

  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  resultats.forEach(item => {
    const row = document.createElement("tr"); // Création d'une ligne pour chaque résultat

    const tdCodePostal = document.createElement("td"); // Création d'une cellule pour le code postal
    tdCodePostal.textContent = item.codePostal; // Remplissage de la cellule avec le code postal

    const tdNomCommune = document.createElement("td"); // Création d'une cellule pour le nom de la commune
    tdNomCommune.textContent = item.nomCommune; // Remplissage de la cellule avec le nom de la commune  

    const tdCodeCommune = document.createElement("td"); // Création d'une cellule pour le code de commune
    tdCodeCommune.textContent = item.codeCommune; // Remplissage de la cellule avec le code de commune

    const tdLibelle = document.createElement("td"); // Création d'une cellule pour le libellé d'acheminement
    tdLibelle.textContent = item.libelleAcheminement; // Remplissage de la cellule avec le libellé d'acheminement

    row.appendChild(tdCodePostal); // Ajout de la cellule du code postal à la ligne
    row.appendChild(tdNomCommune); // Ajout de la cellule du nom de la commune à la ligne
    row.appendChild(tdCodeCommune); // Ajout de la cellule du code de commune à la ligne
    row.appendChild(tdLibelle); // Ajout de la cellule du libellé d'acheminement à la ligne

    tbody.appendChild(row); // Ajout de la ligne au corps du tableau
  });

  table.appendChild(tbody); // Ajout du corps du tableau au tableau
  tableauResultatsDiv.appendChild(table); // Ajout du tableau au div des résultats
}

// Événements
button.addEventListener("click", afficherVille); // Afficher la commune exacte
btnTableau.addEventListener("click", afficherTableau); // Afficher le tableau des communes du département
