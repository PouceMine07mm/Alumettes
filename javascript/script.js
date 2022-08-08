
//Minuterie qui verifie si il est possible de fabriquer une alumette au 0.5s
setInterval(verifAlumette, 100)
// Mineterie verif bois
setInterval(verifBois, 100)
// Minuterie verif souffre
setInterval(verifSouffre, 100)

//Somme totale des unites
var somme = 0;

const sommeDefaut = 0;
//Valeur par defaut de lincrement
var incrementeur = 1;

const incrementaireDefaut = 1;
//Argent amasse par joueur
var portefeuille = 1000;

const portefeuilleDefaut = 1000;
//Quantite des deux ressources detenus par joueur
var boisQt = 1000

const boisQtDefaut = 1000;

var souffreQt = 100

const souffreQtDefaut = 100;
//prix des deux ressources a lachat par le joueur
var boisPrix = 10

const boisPrixDefaut = 100;

var souffrePrix = 10

const souffreprixDefaut = 100;

function chargementPage(){
    if  ( localStorage.length === 0 )  {
        initLocalStorage()
    } else {
        charger()
    }
}

// TODO Faire en sorte les chiffres ronds n'aient pas de ".0"
//Fonction qui deduit les quantites d'inventaire
function faireAlumette() {
    if (boisQt > 0 && souffreQt > 0) {
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
function achatBois() {
    if (portefeuille >= boisPrix) {
        boisQt += 1000
        portefeuille -= boisPrix
        document.getElementById("boisInventaire").innerHTML = boisQt
        document.getElementById("argent").innerHTML = portefeuille
    } else {
        document.getElementById("achatBois").disabled = true
    }
}

// Fonction pour l'achat du souffre

function achatSouffre() {
    if (portefeuille >= souffrePrix) {
        souffreQt += 10000
        portefeuille -= souffrePrix
        document.getElementById("souffreInventaire").innerHTML = souffreQt
        document.getElementById("argent").innerHTML = portefeuille
    } else {
        document.getElementById("achatSouffre").disabled = true
    }
}

// Fonction verifiant si les materiaux necessaire pour la construction dune alumette sont present

function verifAlumette() {
    if (boisQt > 0 && souffreQt > 0) {
        document.getElementById("creeAlumette").disabled = false
    } else {
        document.getElementById("creeAlumette").disabled = true
    }
}

// Fonctions verifiant si il est possible dacheter plus de ressources
function verifBois() {
    if (portefeuille >= boisPrix) {
        document.getElementById("achatBois").disabled = false

    } else {
        document.getElementById("achatBois").disabled = true
    }
}

function verifSouffre() {
    if (portefeuille >= souffrePrix) {
        document.getElementById("achatSouffre").disabled = false

    } else {
        document.getElementById("achatSouffre").disabled = true
    }
}
// Fonction de sauvegarde/charger sauvegarde

function sauvegarde() {
    localStorage.setItem("nbrAlumettes", somme)
    localStorage.setItem("nbrBois", boisQt)
    localStorage.setItem("nbrSouffre", souffreQt)
    localStorage.setItem("argent", portefeuille)
}

function charger() {
    somme = localStorage.getItem("nbrAlumettes")
    boisQt = localStorage.getItem("nbrBois")
    souffreQt = localStorage.getItem("nbrSouffre")
    portefeuille = localStorage.getItem("argent")
    somme = parseInt(somme)
    boisQt = parseInt(boisQt)
    souffreQt = parseInt(souffreQt)
    portefeuille = parseInt(portefeuille)
    document.getElementById("total").innerHTML = somme
    document.getElementById("boisInventaire").innerHTML = boisQt
    document.getElementById("souffreInventaire").innerHTML = souffreQt
    document.getElementById("argent").innerHTML = portefeuille
}

function initLocalStorage() {
    localStorage.setItem("nbrAlumettes", sommeDefaut)
    localStorage.setItem("nbrBois", boisQtDefaut)
    localStorage.setItem("nbrSouffre", souffreQtDefaut)
    localStorage.setItem("argent", portefeuilleDefaut)
    somme = localStorage.getItem("nbrAlumettes")
    boisQt = localStorage.getItem("nbrBois")
    souffreQt = localStorage.getItem("nbrSouffre")
    portefeuille = localStorage.getItem("argent")
    somme = parseInt(somme)
    boisQt = parseInt(boisQt)
    souffreQt = parseInt(souffreQt)
    portefeuille = parseInt(portefeuille)
    document.getElementById("total").innerHTML = somme
    document.getElementById("boisInventaire").innerHTML = boisQt
    document.getElementById("souffreInventaire").innerHTML = souffreQt
    document.getElementById("argent").innerHTML = portefeuille
}

// Charge automatiquement les localStorage au lancement de la page
