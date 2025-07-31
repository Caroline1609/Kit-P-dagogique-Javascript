const table = document.getElementById('table');
const nombre = document.getElementById('nombre');
const moyenne = document.getElementById('moyenne');

let compteur;



fetch("./asset/json/note.json")
  .then(response => response.json())
  .then(classe => {
    table.innerHTML = '';

    // Création des en-têtes
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Nom', 'Prénom', 'Note'].forEach(text => {
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

      tbody.appendChild(row);
    });

    table.appendChild(tbody);


    for (let i = 0; i < classe.length; i++) {

        compteur = i + 1;
        
    }





    nombre.innerText = " " + compteur;
    moyenne.innerText += parseFloat(person.grade);


  })
  .catch(err => {
    console.error("Erreur lors du chargement des données :", err);
  });
