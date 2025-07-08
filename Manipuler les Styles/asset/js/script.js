const augmenterTaille = document.getElementById('AugmenterTaille');
const taille = document.getElementById('taille');
var texte = document.getElementById('texte');

let tailleParDefaut = 16; // la taille minimum est 16 px.

console.log(AugmenterTaille);


augmenterTaille.addEventListener("click", function() {
    
    if (tailleParDefaut < 48) {

        tailleParDefaut+= 1
        texte.style.fontSize = tailleParDefaut;
        taille.textContent = tailleParDefaut; //affiche l'incrédentation de la taille
    } else {

        tailleParDefaut = 15;
    }
})