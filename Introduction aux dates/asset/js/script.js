const input = document.getElementById("dateDeNaissance").value;
const resultat = document.getElementById("resultat");

const dateNaissance = new Date(input);
const maintenant = new Date();

if (dateNaissance > maintenant) {
    resultat.innerHTML = "Attention ! La date est dans le futur. Veuillez entrer une date valide.";
}
