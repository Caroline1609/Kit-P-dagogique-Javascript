const monBouton = document.getElementById('monBouton');
const click = document.getElementById('click');
const Reinitialiser = document.getElementById('Reinitialiser');


console.log(monBouton);

monBouton.addEventListener("click", event => {
    let compteur = click.innerText; // récupérer la valeur 
    compteur = parseInt(compteur); // Convertir en INT
    compteur++;
    click.innerText = compteur; // renvoi de la valeur dans le DOM

});


Reinitialiser.addEventListener("click", event => {
    compteur = 0;
    click.innerText = compteur; // renvoi de la valeur dans le DOM

});
