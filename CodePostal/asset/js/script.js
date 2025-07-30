const input = document.getElementById('zipcodeInput');
const datalistSuggestions = document.getElementById('datalistSuggestions');
const button = document.getElementById('button');
const resultatVilleDiv = document.getElementById('resultatVille');

let codePostal = [];

// Charger les données depuis le JSON
fetch("./asset/json/zipcodes.json")
  .then(response => response.json())
  .then(data => {
    codePostal = data;
    console.log("✅ Données chargées :", codePostal);

    // Activer la suggestion lors de la saisie
    input.addEventListener("input", suggestion);
  })
  .catch(error => {
    console.error("❌ Erreur de chargement du JSON :", error);
  });

// Fonction de suggestion dynamique
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

// Afficher la ville sélectionnée au clic
button.addEventListener("click", () => {
  const saisie = input.value.trim();

  const resultat = codePostal.find(item =>
    `${item.codePostal} - ${item.libelleAcheminement}`.toLowerCase() === saisie.toLowerCase()
  );

  if (resultat) {
    resultatVilleDiv.textContent =
      `Commune sélectionnée : ${resultat.nomCommune} (${resultat.codePostal})`;
  } else {
    resultatVilleDiv.textContent = "Aucune commune trouvée pour cette saisie.";
  }
});
