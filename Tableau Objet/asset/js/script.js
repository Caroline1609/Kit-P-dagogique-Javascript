fetch('./asset/json/user.json')  // Va chercher le fichier Json
  .then(response => response.json())  // transforme le texte JSON en objet JS
  .then(data => { //recupère les données
    console.log(data); // ici, tu as accès à toutes les données du JSON
  })
  .catch(error => { // en cas d'erreur, on affiche un message dans la console
    console.error('Erreur de chargement JSON :', error); // Affiche l'erreur dans la console
  });