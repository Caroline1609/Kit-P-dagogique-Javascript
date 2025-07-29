let liste = document.getElementById('liste');
let table = document.getElementById('table');
let message = document.getElementById('message');
let prenomInput = document.getElementById("prenom"); 
let nomInput = document.getElementById("nom"); 
let ajouter = document.getElementById('ajouter');

let people = ['Mike Dev', 'John Makenzie', 'Léa Grande'];

function genererMail(prenom, nom) {
    return `${prenom.toLowerCase()}.${nom.toLowerCase()}@example.com`;
}

function afficherListe() {
    liste.innerHTML = '';
    people.forEach(function(person) {
        let li = document.createElement("li");
        li.textContent = person;
        liste.appendChild(li);

        console.log(person)
    });
}

function tableau() {
    table.innerHTML = '';

    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    let headerTr = ['Nom', 'Prénom', 'Email', 'Supprimer'];

    headerTr.forEach(headerText => {
        let th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    let tbody = document.createElement('tbody');

    people.forEach((person, index) => {
        let [prenom, nom] = person.split(' ');
        let email = genererMail(prenom, nom);

        let row = document.createElement('tr');

        let ligne = [nom, prenom, email];
        ligne.forEach(text => {
            let td = document.createElement('td');
            td.textContent = text;
            row.appendChild(td);
        });

        let deleteTd = document.createElement('td');
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';

        deleteButton.addEventListener("click", function() {
            people.splice(index, 1);
            afficherListe();
            tableau();
        });

        deleteTd.appendChild(deleteButton);
        row.appendChild(deleteTd);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
}


function ajouterPersonne() {
    let prenom = prenomInput.value; 
    let nom = nomInput.value;

    let regex = new RegExp('^[A-Za-zÀ-ÖØ-öø-ÿ]+([ -][A-Za-zÀ-ÖØ-öø-ÿ]+)*$');

    let ajout = `${prenom} ${nom}`;

    if (prenom && nom && !people.includes(ajout)) {

        if (regex.test(prenom) && regex.test(nom)) {
            people.push(`${prenom} ${nom}`);
            message.textContent = `${prenom} ${nom} ajouté`
            afficherListe();
            tableau();
        } else{
            message.textContent = "Vérifier les données saisie, le Prénom ou le Nom ne respecte pas le format requis"
        }

    } else{
        message.textContent = "Vérifier les données saisies, soit vous avez oublier de remplir un champ, soit le nom et le prenom est deja dans la liste"
    }
}

ajouter.addEventListener("click", ajouterPersonne);


afficherListe();
tableau();
