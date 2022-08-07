//Somme totale des unites
var somme = 0;

//Valeur par defaut de lincrement
var incrementeur = 1;

//Fonction qui incremente la variable 'somme'
function incrementSomme() {
    somme += incrementeur
    document.getElementById("somme").innerHTML = "Faire une alumette"
    document.getElementById("total").innerHTML = `Alumettes: ${somme}`
}


