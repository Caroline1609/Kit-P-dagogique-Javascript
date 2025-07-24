const nameEmployee = document.getElementById('nameEmployee');
const table = document.getElementById('table');

const myEmployee = {
    lastname: "Doe",
    firstname: "John",
    birthday: "1981-11-12",
    salary: 2150
};

function genererMail(prenom, nom) {
    return `${prenom.toLowerCase()}.${nom.toLowerCase()}@example.com`;
}

function title() {
    nameEmployee.textContent = `${myEmployee.firstname} ${myEmployee.lastname}`;
}

function employeeProfile(employee) {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    const row = document.createElement('tr');


    const order = [
        employee.lastname,
        employee.firstname,
        employee.birthday,
        genererMail(employee.firstname, employee.lastname),
        employee.salary + '€'
    ];

    order.forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        row.appendChild(td);
    });

    tbody.appendChild(row);
}

title();
employeeProfile(myEmployee);















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