
// Charger les utilisateurs depuis le fichier JSON
fetch("./asset/json/user.json")
  .then(response => response.json())
  .then(data => {
    users = data; // on stocke les utilisateurs récupérés
  })
  .catch(error => {
    console.error("Erreur lors du chargement du fichier JSON :", error); // Gérer les erreurs de chargement
  });

// Gérer la connexion au clic sur le bouton
document.querySelector("form").addEventListener("click", connexion);


  function connexion(){
    const identifiantInput = document.getElementById("identifiant").value.trim().toLowerCase();
  const passwordInput = document.getElementById("motdepasse").value;
  const message = document.getElementById("message");


  

  const user = users.find(user => {
    const identifiant = `${user.firstname.toLowerCase()}.${user.lastname.toLowerCase()}`;
    return identifiant === identifiantInput && user.password === passwordInput;
  });

  if (user) {
    message.textContent = `✅ Bienvenue ${user.firstname} ${user.lastname} !`;
    message.style.color = "green";
  } else {
    message.textContent = "❌ Identifiant ou mot de passe incorrect.";
    message.style.color = "red";
  }
  }
