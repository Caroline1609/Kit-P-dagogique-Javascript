const table = document.getElementById('table');
const nombre = document.getElementById('nombre');
const moyenne = document.getElementById('moyenne');
const noteOut = document.getElementById('noteOut');
const upMoyenne = document.getElementById('upMoyenne');

fetch("./asset/json/note.json")
  .then(response => response.json())
  .then(classe => {

  function afficherTable() {
      table.innerHTML = '';

      // Création des en-têtes
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      ['Nom', 'Prénom', 'Note', 'Obtenu'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);

      // Création du corps du tableau
      const tbody = document.createElement('tbody');

      classe.forEach(person => {
        const row = document.createElement('tr');
        const [nom, ...prenomParts] = person.fullname.split(' ');
        const prenom = prenomParts.join(' ');

        [nom, prenom, person.grade].forEach(text => {
          const td = document.createElement('td');
          td.textContent = text;
          row.appendChild(td);
        });

        const ouiNon = document.createElement('td');
        ouiNon.className = 'ouiNon';
        ouiNon.textContent = person.grade >= 12 ? 'Oui' : 'Non';

        row.appendChild(ouiNon);
        tbody.appendChild(row);
      });

      table.appendChild(tbody);

      // Affiche le nombre total d'étudiants
      nombre.innerText = " " + classe.length;
  }

    // Calculer la moyenne
  function calculerMoyenne() {
    let total = 0;
    for (let i = 0; i < classe.length; i++) {
      total += classe[i].grade;
    }
    let moyenneClasse = total / classe.length;
    moyenne.innerText = " " + moyenneClasse.toFixed(2);
  }

    

  // Nombre d'étudiants au-dessus de 10
  function noteMax(){
    let compteMoyenne = classe.filter(e => e.grade > 10).length;
    upMoyenne.innerText = " " + compteMoyenne;
  }

  function eliminatoire() {
    let compteur = 0;

    for (let i = 0; i < classe.length; i++) {
      if (classe[i].grade < 12) {
        compteur++;
      }
    }

    noteOut.innerText = " " + compteur;
  }

  afficherTable();
  noteMax();
  calculerMoyenne(); 
  eliminatoire();
    
  })
  .catch(err => {
    console.error("Erreur lors du chargement des données :", err);
  });
