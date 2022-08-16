// Fonction qui lors du chargement de la page si le localstorage contient de l'information
// et donc de soit l'initialiser si il n'en contient pas ou bien dans le cas échéant de charger 
// la sauvegarde
function chargementPage(){
    if  ( localStorage.length === 0 )  {
        initLocalStorage()
    } else {
        charger()
    }
}
// Fonction qui va sauvegarder toutes les données dans le localstorage du furteur
function sauvegarde() {
    sauvegardeAlumettesLocalStorage()
    sauvegardeArgentLocalStorage()
    sauvegardeBoisLocalStorage()
    sauvegardeSouffreLocalStorage()
}
// Fonction qui va permettre de prendre les données du localstorage pour les afficher
function charger() {
    chargerAlumettesLocalStorage()
    chargerArgentLocalStorage()
    chargerBoisLocalStorage()
    chargerSouffreLocalStorage()
}
// Fonction qui remet tout le localstorage aux valeurs initiales
function initLocalStorage() {
    initAlumettesLocalStorage()
    initArgentLocalStorage()
    initBoisLocalStorage()
    initSouffreLocalStorage()
}

function sauvegardeAlumettesLocalStorage(){
    localStorage.setItem("nbrAlumettes", somme)
}

function chargerAlumettesLocalStorage(){
    somme = localStorage.getItem("nbrAlumettes")
    somme = parseInt(somme)
    document.getElementById("total").innerHTML = somme
}

function initAlumettesLocalStorage(){
    localStorage.setItem("nbrAlumettes", sommeDefaut)
    somme = localStorage.getItem("nbrAlumettes")
    somme = parseInt(somme)
    document.getElementById("total").innerHTML = somme
}

function sauvegardeArgentLocalStorage(){
    localStorage.setItem("argent", portefeuille)
}

function chargerArgentLocalStorage(){
    portefeuille = localStorage.getItem("argent")
    portefeuille = parseInt(portefeuille)
    document.getElementById("argent").innerHTML = portefeuille
}

function initArgentLocalStorage(){
    localStorage.setItem("argent", portefeuilleDefaut)
    portefeuille = localStorage.getItem("argent")
    portefeuille = parseInt(portefeuille)
    document.getElementById("argent").innerHTML = portefeuille
}

function sauvegardeBoisLocalStorage(){
    localStorage.setItem("nbrBois", boisQt)
}

function chargerBoisLocalStorage(){
    boisQt = localStorage.getItem("nbrBois")
    boisQt = parseInt(boisQt)
    document.getElementById("boisInventaire").innerHTML = boisQt
}
function initBoisLocalStorage() {
    localStorage.setItem("nbrBois", boisQtDefaut)
    boisQt = localStorage.getItem("nbrBois")
    boisQt = parseInt(boisQt)
    document.getElementById("boisInventaire").innerHTML = boisQt
}

function sauvegardeSouffreLocalStorage(){
    localStorage.setItem("nbrSouffre", souffreQt)
}

function chargerSouffreLocalStorage(){
    souffreQt = localStorage.getItem("nbrSouffre")
    souffreQt = parseInt(souffreQt)
    document.getElementById("souffreInventaire").innerHTML = souffreQt
}

function initSouffreLocalStorage(){
    localStorage.setItem("nbrSouffre", souffreQtDefaut)
    souffreQt = localStorage.getItem("nbrSouffre")
    souffreQt = parseInt(souffreQt)
    document.getElementById("souffreInventaire").innerHTML = souffreQt
}

