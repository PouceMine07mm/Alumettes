//Somme totale des unites
var somme = 0;

//Valeur par defaut de lincrement
var incrementeur = 1;

//Variable memorisant le niveau de lamelioration
var niveau = 1;

//Fonction qui incremente la variable 'somme'
function incrementSomme() {
    somme += incrementeur
    document.getElementById("somme").innerHTML = "Clique moi!" + " (+" + incrementeur +")" 
    document.getElementById("total").innerHTML = "Alumettes: " +somme
    document.getElementById("amelioration").innerHTML = "niveau actuel: " + niveau
}

//Fonction qui incremente lincrementeur
function incrementIncrementeur() {
    incrementeur *= 1.5
    niveau ++
    incrementeur = Math.round(incrementeur)
    document.getElementById("amelioration").innerHTML = "niveau actuel: " + niveau
    document.getElementById("somme").innerHTML = "Clique moi!" + " (+" + incrementeur +")" 
    document.getElementById("total").innerHTML = somme
}

