const nameEmployee = document.getElementById('nameEmployee');
const table = document.getElementById('table');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const date = document.getElementById('date');
const salaire = document.getElementById('salaire');
const button = document.getElementById('button');
const message = document.getElementById('message');

const myEmployee = {
    lastname: "Doe",
    firstname: "John",
    birthday: "1981-11-12",
    salary: 2150
};

// Génère l'e-mail à partir du prénom et du nom
function genererMail(prenom, nom) {
    return `${prenom.toLowerCase()}.${nom.toLowerCase()}@example.com`;
}

// Met à jour le titre principal
function title() {
    nameEmployee.textContent = `Profil de ${myEmployee.firstname} ${myEmployee.lastname}`;
}

// Affiche le profil de l'employé dans le tableau
function employeeProfile(employee) {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    const row = document.createElement('tr');

    const order = [
        employee.lastname,
        employee.firstname,
        employee.birthday,
        genererMail(employee.firstname, employee.lastname),
        employee.salary + ' €'
    ];

    order.forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        row.appendChild(td);
    });

    tbody.appendChild(row);
}

function isValidName(name) {
    return /^[a-zA-Z]{2,}$/.test(name);
}

function isValidDate(dateStr) {
    const today = new Date();
    const dateValue = new Date(dateStr);
    return dateValue < today;
}

function enregistrer() {
    const newFirstname = firstname.value.trim();
    const newLastname = lastname.value.trim();
    const newDate = date.value;
    const newSalary = parseInt(salaire.value);

    if (!isValidName(newFirstname) || !isValidName(newLastname)) {
        message.textContent = ("Le prénom et le nom doivent contenir uniquement des lettres et avoir au moins 2 caractères.");
        return;
    } else if (!isValidDate(newDate)) {
        message.textContent = ("La date de naissance doit être dans le passé.");
        return;
    } else if (isNaN(newSalary) || newSalary < myEmployee.salary) {
        message.textContent = ("Le salaire doit être un nombre et ne peut pas être inférieur au salaire précédent (" + myEmployee.salary + " €).");
        return;
    }


    myEmployee.firstname = newFirstname;
    myEmployee.lastname = newLastname;
    myEmployee.birthday = newDate;
    myEmployee.salary = newSalary;

    title();
    employeeProfile(myEmployee);
}


function remplirFormulaire() {
    firstname.value = myEmployee.firstname;
    lastname.value = myEmployee.lastname;
    date.value = myEmployee.birthday;
    salaire.value = myEmployee.salary;
}

button.addEventListener("click", enregistrer);


title();
employeeProfile(myEmployee);
remplirFormulaire();












//autre approche
// function employeeProfile(employee) {
//     table.innerHTML = ''; 


//     // const thead = document.createElement('thead');
//     // const headerRow = document.createElement('tr');

//     // Object.keys(employee).forEach(key => {
//     //     const th = document.createElement('th');
//     //     th.textContent = key;
//     //     headerRow.appendChild(th);
//     // });

//     // thead.appendChild(headerRow);
//     // table.appendChild(thead);


//     // const tbody = document.createElement('tbody');
//     // const row = document.createElement('tr');

//     // Object.values(employee).forEach(value => {
//     //     const td = document.createElement('td');
//     //     td.textContent = value.toString();
//     //     row.appendChild(td);
//     // });

//     // tbody.appendChild(row);
//     // table.appendChild(tbody);
// }