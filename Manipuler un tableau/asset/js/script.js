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

// function verification(){
//     if()
// }

function ajouterPersonne() {
    let prenom = prenomInput.value.trim(); 
    let nom = nomInput.value.trim();

    let regex = new RegExp('[A-Za-zÀ-ž]{2,}');


    if (prenom && nom) {

        if (typeof prenomInput.value === 'string' && typeof prenom === 'string') {
            console.log("je suis une chaine");
        } else{
            console.log("Je ne suis pas une chaine")
        }



        // people.push(`${prenom} ${nom}`);
        // message.textContent = `${prenom} ${nom} ajouté`
        // afficherListe();
        // tableau();
    }
}

ajouter.addEventListener("click", ajouterPersonne);


afficherListe();
tableau();
