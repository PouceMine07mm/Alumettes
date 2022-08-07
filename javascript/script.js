//Somme totale des unites
var somme = 0;

//Valeur par defaut de lincrement
var incrementeur = 1;

//Argent amasse par joueur
var portefeuille =0;

//Quantite des deux ressources detenus par joueur
var boisQt = 1

var souffreQt = 10

//prix des deux ressources a lachat par le joueur
var boisPrix = 10

var souffrePrix = 10

// TODO Faire en sorte les chiffres ronds n'aient pas de ".0"
//Fonction qui deduit les quantites d'inventaire
function faireAlumette(){
        boisQt -= 0.10
        souffreQt -= 1
        boisQt = Number.parseFloat(boisQt).toFixed(1);
        document.getElementById("boisInventaire").innerHTML = boisQt
        document.getElementById("souffreInventaire").innerHTML = souffreQt
        incrementSomme()

    }
}

//Fonction qui incremente la variable 'somme'
function incrementSomme() {
    somme += incrementeur
    document.getElementById("total").innerHTML = somme
}


