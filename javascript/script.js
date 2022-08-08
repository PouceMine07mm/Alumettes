
//Minuterie qui verifie si il est possible de fabriquer une alumette au 0.5s
setInterval(verifAlumette, 100)
// Mineterie verif bois
setInterval(verifBois, 100)
// Minuterie verif souffre
setInterval(verifSouffre, 100)




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
        sauvegarde()
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
        sauvegarde()
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
        sauvegarde()
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
