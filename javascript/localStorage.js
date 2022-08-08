function chargementPage(){
    if  ( localStorage.length === 0 )  {
        initLocalStorage()
    } else {
        charger()
    }
}

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