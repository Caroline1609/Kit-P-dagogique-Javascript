const nameEmployee = document.getElementById('nameEmployee');
const tab = document.getElementById('tab');

const myEmployee = {
    lastname: "Doe", 
    firstname: "John", 
    birthday: "1981-11-12", 
    salary: 2150
}

console.log(myEmployee)

function createTable(employee){

    tab.innerHTML = '';

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headerRow = document.createElement('tr');


    Object.keys(employee).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const dataRow = document.createElement('tr');
    Object.values(employee).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value.toString();
        dataRow.appendChild(td);
    });
    tbody.appendChild(dataRow);
    table.appendChild(tbody);

    document.body.appendChild(table);
}

createTable(myEmployee);



