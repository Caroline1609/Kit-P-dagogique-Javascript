const tableau = document.getElementById('tableau');

fetch("./asset/json/cardgame.json")
  .then(response => response.json())
  .then(data => {
    const carte = data;
    console.log("Données chargées :", carte);

    // Réinitialise le contenu HTML du conteneur
    tableau.innerHTML = "";

    // Création du tableau et de l'en-tête
    const table = document.createElement("table");

    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");
    const headers = ["Id", "Name", "Level", "Description", "Power", "Attack", "Armor", "Damage", "Mitigation", "Played", "Victory", "Defeat", "Draw"];

    headers.forEach(texte => {
      const th = document.createElement("th");
      th.textContent = texte;
      headRow.appendChild(th);
    });

    thead.appendChild(headRow);
    table.appendChild(thead);

    // Création du corps du tableau
    const tbody = document.createElement("tbody");

    carte.forEach(item => {
      const row = document.createElement("tr");

      const tdId = document.createElement("td");
      tdId.textContent = item.id;

      const tdName = document.createElement("td");
      tdName.textContent = item.name;

      const tdLevel = document.createElement("td");
      tdLevel.textContent = item.level;

      const tdDescription = document.createElement("td");
      tdDescription.textContent = "-";

      const tdPower = document.createElement("td");
      tdPower.textContent = item.power;

      const tdAttack = document.createElement("td");
      tdAttack.textContent = item.attack;

      const tdArmor = document.createElement("td");
      tdArmor.textContent = item.armor;

      const tdDamage = document.createElement("td");
      tdDamage.textContent = item.damage;

      const tdMitigation = document.createElement("td");
      tdMitigation.textContent = item.mitigation;

      const tdPlayed = document.createElement("td");
      tdPlayed.textContent = item.played;

      const tdVictory = document.createElement("td");
      tdVictory.textContent = item.victory;

      const tdDefeat = document.createElement("td");
      tdDefeat.textContent = item.defeat;

      const tdDraw = document.createElement("td");
      tdDraw.textContent = item.draw;

      // Ajout de toutes les cellules à la ligne
      row.append(
        tdId, tdName, tdLevel, tdDescription, tdPower, tdAttack,
        tdArmor, tdDamage, tdMitigation, tdPlayed, tdVictory, tdDefeat, tdDraw
      );

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableau.appendChild(table);

    // --- Partie simple pour les statistiques ---

  // Initialisation de variables simples
  let plusJouee = carte[0];
  let meilleurRatio = carte[0];
  let meilleurRatioValeur = 0;

  // Parcours de toutes les cartes
  carte.forEach(item => {
    // Carte la plus jouée
    if (item.played > plusJouee.played) {
      plusJouee = item;
    }

    // Calcul du ratio victoires / défaites (on ignore les matchs nuls)
    const totalSansNul = item.victory + item.defeat;

    if (item.defeat > 0 && totalSansNul > 0) {
      const ratio = item.victory / item.defeat;
      
      if (ratio > meilleurRatioValeur) {
        meilleurRatioValeur = ratio;
        meilleurRatio = item;
      }
    }
  });

  // Création d'un paragraphe pour afficher les résultats
  const infos = document.createElement("div");
  infos.innerHTML = `
    <p><strong>Carte la plus jouée :</strong> ${plusJouee.name} (${plusJouee.victory} victoires)</p>
    <p><strong>Meilleur ratio V/D :</strong> ${meilleurRatio.name} (${meilleurRatio.played} parties, ${meilleurRatio.victory} victoires)</p>
  `;

// Ajout à la page
tableau.appendChild(infos);

  })

  

  

  .catch(error => {
    console.error("Erreur de chargement du JSON :", error);
  });
