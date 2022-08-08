// Charge automatiquement les localStorage au lancement de la page
charger()
//Minuterie qui verifie si il est possible de fabriquer une alumette au 0.5s

setInterval(verifAlumette, 500)

//Somme totale des unites
var somme = 0;

//Valeur par defaut de lincrement
var incrementeur = 1;

//Argent amasse par joueur
var portefeuille =100000;

//Quantite des deux ressources detenus par joueur
var boisQt = 1000

var souffreQt = 100

//prix des deux ressources a lachat par le joueur
var boisPrix = 10

var souffrePrix = 10

// TODO Faire en sorte les chiffres ronds n'aient pas de ".0"
//Fonction qui deduit les quantites d'inventaire
function faireAlumette(){
    if ( boisQt > 0 && souffreQt > 0){
        boisQt -= 10
        souffreQt -= 1
        // boisQt = Number.parseFloat(boisQt).toFixed(1);
        document.getElementById("boisInventaire").innerHTML = boisQt
        document.getElementById("souffreInventaire").innerHTML = souffreQt
        incrementSomme()

    } else {
        document.getElementById("creeAlumette").disabled = true
    }
}

//Fonction qui incremente la variable 'somme'
function incrementSomme() {
    somme += incrementeur
    document.getElementById("total").innerHTML = somme
}

// Fonction pour l'achat du bois
function achatBois(quantite){
        boisQt += (quantite * 10)
        portefeuille -= quantite * boisPrix
        document.getElementById("boisInventaire").innerHTML = boisQt
        document.getElementById("argent").innerHTML = portefeuille
}

// Fonction pour l'achat du souffre

function achatSouffre(quantite){
        souffreQt += quantite
        portefeuille -= quantite * boisPrix
        document.getElementById("souffreInventaire").innerHTML = souffreQt
        document.getElementById("argent").innerHTML = portefeuille
}

// Fonction verifiant si les materiaux necessaire pour la construction dune alumette sont present

function verifAlumette(){
    if ( boisQt > 0 && souffreQt > 0){
        document.getElementById("creeAlumette").disabled = false
    } else {
        document.getElementById("creeAlumette").disabled = true
    }
}

// Fonction de sauvegarde/charger sauvegarde

function sauvegarde(){
    localStorage.setItem("nbrAlumettes", somme)
    localStorage.setItem("nbrBois", boisQt)
    localStorage.setItem("nbrSouffre", souffreQt)
}

function charger(){
    somme = localStorage.getItem("nbrAlumettes")
    boisQt = localStorage.getItem("nbrBois")
    souffreQt = localStorage.getItem("nbrSouffre")
    somme = parseInt(somme)
    boisQt = parseInt(boisQt)
    souffreQt = parseInt(souffreQt)
    document.getElementById("total").innerHTML = somme
    document.getElementById("boisInventaire").innerHTML = boisQt
    document.getElementById("souffreInventaire").innerHTML = souffreQt
}

function nettoyer(){
    localStorage.setItem("nbrAlumettes", sommeDefaut)
    localStorage.setItem("nbrBois", boisQtDefaut)
    localStorage.setItem("nbrSouffre", souffreQtDefaut)
    somme = localStorage.getItem("nbrAlumettes")
    boisQt = localStorage.getItem("nbrBois")
    souffreQt = localStorage.getItem("nbrSouffre")
    document.getElementById("total").innerHTML = somme
    document.getElementById("boisInventaire").innerHTML = boisQt
    document.getElementById("souffreInventaire").innerHTML = souffreQt
}
