const form = document.getElementById("form");
const identifiant = document.getElementById("identifiant");
const passwordInput = document.getElementById("motdepasse");
const message = document.getElementById("message");
const button = document.getElementById("button");
const bienvenue = document.getElementById("bienvenue");
const connecter = document.getElementById("connecter");
const tbody = document.getElementById("tbody");
const deconnection = document.getElementById('deconnection')

let users = [];

// Charger les utilisateurs depuis le fichier JSON
fetch("./asset/json/user.json")
  .then(response => response.json())
  .then(data => {
    users = data; // on stocke les utilisateurs récupérés
    console.log("Utilisateurs chargés :", users);
  })
  .catch(error => {
    console.error("Erreur lors du chargement du fichier JSON :", error); // Gérer les erreurs de chargement
  });


  function messageError(messageText){
    const message = document.getElementById("message");

    message.textContent = messageText;
    message.classList.add('active');
    /*message.style.border = "1px solid #999B86";
    message.style.backgroundColor  = "#C1AE9F";
    message.style.padding= "20px";
    message.style.alignContent = "center";
    message.style.color = "#886174";*/
    
    setTimeout(function() {
      message.textContent = '';
      message.classList.remove('active');
    }, 5000);
  }

  function connexion(){
    const identifiantsaisie = identifiant.value.trim().toLowerCase();
    const motDePasseSaisi = passwordInput.value;

    const user = users.find(user => {
    const identifiant = `${user.firstname.toLowerCase()}.${user.lastname.toLowerCase()}`;
    return identifiant === identifiantsaisie && user.password === motDePasseSaisi;
  });

  if (user) {
    form.classList.add('hidden');
    connecter.classList.add('active');
    bienvenue.textContent = `Bienvenue ${user.firstname} ${user.lastname} !`;
    tableauEmployer(user);

  } else {

    messageError("Identifiant ou mot de passe incorrect");

  }
}

button.addEventListener("click", connexion);

function genererMail(prenom, nom) {
    return `${prenom.toLowerCase()}.${nom.toLowerCase()}@example.com`;
}

function tableauEmployer(utilisateurActif) {
  tbody.innerHTML = '';

  users.forEach(user => {
    const row = document.createElement('tr');



    const infos = [
      user.lastname,
      user.firstname,
      user.birthday,
      genererMail(user.firstname, user.lastname),
      user.salary + ' €'
    ];

    infos.forEach(value => {
      const td = document.createElement('td');
      td.textContent = value;
      row.appendChild(td);
    });

    tbody.appendChild(row);
  });
}

function deco(){
  connecter.classList.remove('active');
  form.classList.remove('hidden');

}

deconnection.addEventListener("click", deco);