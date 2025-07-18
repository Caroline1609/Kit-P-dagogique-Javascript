let liste = document.getElementById('liste')
let table = document.getElementById('table')



let people = ['Mike Dev', 'John Makenzie', 'Léa Grande'];

people.forEach(function(element){  // Parcours de chaque élément du tableau

    let li = document.createElement("li"); // Création d'un nouvel élément de liste <li>
    li.textContent = element;  // Définition du contenu textuel de l'élément <li> avec la valeur de l'élément du tableau
    liste.appendChild(li); // Ajout de l'élément <li> à l'élément <ul>
})

function tableau(){


    let separerNom = people.map(person => person.split(' '));

    console.log(separerNom);

    


    const table = document.getElementById('table')
    const tablebody = document.createElement("tbody");



}

tableau();


