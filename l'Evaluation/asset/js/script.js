const table = document.getElementById('table');
const nombre = document.getElementById('nombre');
const moyenne = document.getElementById('moyenne');
const noteOut = document.getElementById('noteOut');
const upMoyenne = document.getElementById('upMoyenne');
const nomPrenom = document.getElementById('nomPrenom');
const note = document.getElementById('note');
const button = document.getElementById('button')
const ajouter = document.getElementById('ajouter');

fetch("./asset/json/note.json")
  .then(response => response.json())
  .then(classe => {

  function afficherTable() {
  table.innerHTML = '';

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  ['Nom', 'Prénom', 'Note', 'Obtenu'].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  classe.forEach(person => {
    const row = document.createElement('tr');
    const { nom, prenom } = decomposeNomPrenom(person.fullname);

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

  nombre.innerText = " " + classe.length;
}




  function ajouterNote(event){
    event.preventDefault();
    let valeur = nomPrenom.value.trim(); // On récupère la valeur de l'entrée
    let { nom, prenom } = decomposeNomPrenom(valeur); // On décompose le nom et le prénom

    // Vous pouvez maintenant utiliser `nom` et `prenom` pour le contrôle de saisie
    console.log("Nom:", nom);
    console.log("Prénom:", prenom);

    // Exemple de contrôle de saisie : vérifier que ni le nom ni le prénom ne sont vides
    if (!nom || !prenom) {
        ajouter.innerText = "Veuillez entrer un nom et un prénom valides.";
        return;
    }

   
    let ajouterNom = `${nom} ${prenom}`;
    ajouter.textContent = "La nouvelle note de : " + ajouterNom + " a été ajouté avec succès";

    tableau();
  }

button.addEventListener("click", ajouterNote)

//décompose le nom et le prenom
  function decomposeNomPrenom(fullname) {
  const parts = fullname.trim().split(' ');
  const nom = parts[0];
  const prenom = parts.slice(1).join(' ');
  return { nom, prenom };
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
