const augmenterTaille = document.getElementById('AugmenterTaille');
const taille = document.getElementById('taille');
const texte = document.getElementById('texte');

let tailleParDefaut = 16; // Variable qui stocke la taille actuelle de la police, initialisée à 16.

console.log(AugmenterTaille);


augmenterTaille.addEventListener("click", function() {
    
    if (tailleParDefaut < 48) {

        //Compteur
        let compteur = augmenterTaille.innerText;
        compteur = parseInt(compteur);
        compteur++;
        augmenterTaille.innerText = compteur;

        //Augmenter la taille
        tailleParDefaut+= 1
        texte.style.fontSize = tailleParDefaut;
        taille.textContent = tailleParDefaut; //affiche l'incrédentation de la taille
    } else {

    tailleParDefaut = 16;
    texte.style.fontSize = tailleParDefaut;
    taille.textContent = tailleParDefaut;
    }
})