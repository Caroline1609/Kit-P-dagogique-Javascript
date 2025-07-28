const input = document.getElementById("zipcodeInput");
const datalist = document.getElementById("suggestions");
const form = document.getElementById("searchForm");
const resultat = document.getElementById("resultatVille");

let zipcodesData = [];

  // Chargement du fichier JSON avec fetch
  fetch("./CodePostal/asset/json/zipcodes.json")
    .then(response => response.json())
    .then(data => {
    
      zipcodesData = data;
    });

console.log("Données chargées avec succès :", zipcodesData);

  