//Somme totale des unites
var somme = 0;

//Valeur par defaut de lincrement
var incrementeur = 1;

//Argent amasse par joueur
var portefeuille =0;

//Qt des deux ressources detenus par joueur
var boisQt = 100

var souffreQt = 100

//prix des deux ressources a lachat par le joueur
var boisPrix = 10

var souffrePrix = 10










//Fonction qui incremente la variable 'somme'
function incrementSomme() {
    somme += incrementeur
    document.getElementById("somme").innerHTML = "Faire une alumette"
    document.getElementById("total").innerHTML = `Alumettes: ${somme}`
}


