const augmenterTaille = document.getElementById('augmenterTaille');
const taille = document.getElementById('taille');
var texte = document.getElementById('texte');
const diminuerTaille = document.getElementById('diminuerTaille')
const saisieManuelle = document.getElementById('saisieManuelle')

let tailleParDefaut = 16; // la taille minimum est 16 px.
let tailleMinimum = 8;
let tailleMaximum = 48;


console.log(augmenterTaille);

function TailleFinal(nouvelleTaille){

    if (nouvelleTaille >= tailleMinimum && nouvelleTaille <= tailleMaximum) {
        tailleParDefaut = nouvelleTaille;
        texte.style.fontSize = tailleParDefaut + 'px';
        taille.textContent = tailleParDefaut;
    } else {
        alert(`Veuillez entrer une taille valide entre ${tailleMinimum} et ${tailleMaximum}.`);
    }
}


augmenterTaille.addEventListener("click", function() {
    
    if (tailleParDefaut < tailleMaximum) {

       TailleFinal(tailleParDefaut + 1)


    } else {

        TailleFinal(16);
    }
})


diminuerTaille.addEventListener("click", function() {
    
    if (tailleParDefaut > tailleMinimum) {

       TailleFinal(tailleParDefaut - 1)


    } else {

        TailleFinal(16);
    }
})

saisieManuelle.addEventListener("change", function() {

    TailleFinal(this.value);

});












// augmenterTaille.addEventListener("click", function() {
    
//     if (tailleParDefaut < tailleMaximum) {

//         tailleParDefaut+= 1
//         texte.style.fontSize = tailleParDefaut + 'px';
//         taille.textContent = tailleParDefaut; //affiche l'incrédentation de la taille
//     } else {

//         tailleParDefaut = 16 + 'px';
//     }
// })

// diminuerTaille.addEventListener("click", function() {

//     if (tailleParDefaut > tailleMinimum) {

//         tailleParDefaut -= 1;
//         texte.style.fontSize = tailleParDefaut + 'px';
//         taille.textContent = tailleParDefaut;
//     } else{
//         tailleParDefaut = 16;
//         texte.style.fontSize = tailleParDefaut + 'px';
//         taille.textContent = tailleParDefaut;
//     }
// });