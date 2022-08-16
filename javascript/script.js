
//Minuterie qui verifie si il est possible de fabriquer une allumette au 0.5s
setInterval(verifAllumette, 100)
// Mineterie verif bois
setInterval(verifBois, 100)
// Minuterie verif souffre
setInterval(verifSouffre, 100)

setInterval(verifMachines, 100)

setInterval(verifProductionMachines, 1000)

setInterval(sauvegarde, 1000)


//Fonction qui deduit les quantites d'inventaire
function faireAllumette() {
    if (boisQt > 0 && souffreQt > 0) {
        boisQt -= boisPrix
        souffreQt -= souffrePrix
        // boisQt = Number.parseFloat(boisQt).toFixed(1);
        document.getElementById("boisInventaire").innerHTML = boisQt
        document.getElementById("souffreInventaire").innerHTML = souffreQt
        incrementSomme()
    } else {
        document.getElementById("creeAllumette").disabled = true
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
        portefeuille -= boisPrix
        boisQt += 1000
        document.getElementById("boisInventaire").innerHTML = boisQt
        document.getElementById("argent").innerHTML = portefeuille
    } else {
        document.getElementById("achatBois").disabled = true
    }
}

// Fonction pour l'achat du souffre

function achatSouffre() {
    if (portefeuille >= souffrePrix) {
        portefeuille -= souffrePrix
        souffreQt += 10000
        document.getElementById("souffreInventaire").innerHTML = souffreQt
        document.getElementById("argent").innerHTML = portefeuille
    } else {
        document.getElementById("achatSouffre").disabled = true
    }
}

// Fonction verifiant si les materiaux necessaire pour la construction dune allumette sont present

function verifAllumette() {
    if (boisQt > 0 && souffreQt > 0) {
        document.getElementById("creeAllumette").disabled = false
    } else {
        document.getElementById("creeAllumette").disabled = true
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

function apparaitre(){
    var machinediv = document.getElementById("machines")
    if (machinediv.style.display === "none"){
        machinediv.style.display = "block"
    } else {
        machinediv.style.display = "none"
  
    }
}

function achatMachines(){
    if(portefeuille >= machinesPrix){
        portefeuille -= machinesPrix
        machinesQt += 1
        document.getElementById("argent").innerHTML = portefeuille
        document.getElementById("machinesNbr").innerHTML = machinesQt
    }else{
        document.getElementById("achatMachines").disabled = true
    }
}

function machines(){
    if(boisQt >= boisPrix * machinesQt && souffreQt >= souffrePrix * machinesQt){
        somme += machinesQt * 1
        boisQt -= ( boisPrix * machinesQt)
        souffreQt -= ( souffrePrix * machinesQt)
        document.getElementById("total").innerHTML = somme
        document.getElementById("boisInventaire").innerHTML = boisQt
        document.getElementById("souffreInventaire").innerHTML = souffreQt
    } else{

    }
}

function verifProductionMachines(){
    if(boisQt >= boisPrix * machinesQt && souffreQt >= souffrePrix * machinesQt){
        machines()
    } else {

    }
}

function verifMachines() {
    if (portefeuille >= machinesPrix) {
        document.getElementById("achatMachines").disabled = false

    } else {
        document.getElementById("achatMachines").disabled = true
    }
}



document.getElementById("prixBois").innerHTML = boisPrix
document.getElementById("prixSouffre").innerHTML = souffrePrix

