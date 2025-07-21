let liste = document.getElementById('liste');
let table = document.getElementById('table');
let people = ['Mike Dev', 'John Makenzie', 'Léa Grande'];
let message = document.getElementById('message');
let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let ajout = document.getElementById('ajouter');

people.forEach(function(person) {
    let li = document.createElement("li");
    li.textContent = person;
    liste.appendChild(li);
});

function genererMail(firstName, lastName) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
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
        let [firstName, lastName] = person.split(' ');
        let email = genererMail(firstName, lastName);

        let row = document.createElement('tr');

        let ligne = [lastName, firstName, email];
        ligne.forEach(text => {
            let td = document.createElement('td');
            td.textContent = text;
            row.appendChild(td);
        });

        let deleteTd = document.createElement('td');
        let deleteButton = document.createElement('button');



        deleteButton.textContent = 'X';

        deleteButton.addEventListener("click", function() {
            people.splice(index, 1); //supprime la ligne
            liste.innerHTML = '';
            people.forEach(function(person) {
                let li = document.createElement("li");
                li.textContent = person;
                liste.appendChild(li);
            });
            tableau();
        });
        deleteTd.appendChild(deleteButton);
        row.appendChild(deleteTd);
        tbody.appendChild(row);

        

         
    });

    

    table.appendChild(tbody);
}

tableau();




