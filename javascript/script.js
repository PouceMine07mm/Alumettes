
var somme_alumettes = 0;

var increment = 1;

var etiquetteboutton = "Clique moi!";

var etiquetteboutton2 = "am&eacuteliorer les machines!";

var machines = 1;

var baton = 5;

var nombresmaximumalumettescreable = 0;

function somme() {

    if (baton <= 0) return;
    nombresmaximumalumettescreable = baton / increment;

    /*if (increment > baton) {
        increment / baton
        baton = 0

    }*/

    baton = baton - increment;

    somme_alumettes = somme_alumettes + increment;
    document.getElementsById("result").innerHTML = somme_biscuits;
    document.getElementById("baton").innerHTML = baton;

}

function incrementeur() {
    machines = machines + 1;
    increment = increment + 0.25;

    document.getElementById("somme").innerHTML = etiquetteboutton + " (+" + increment + ")";
    document.getElementById("machineniveau").innerHTML = etiquetteboutton2 + " (lvl " + machines + ")";


}

function batonachat() {
    baton = baton + 5;
    document.getElementById("baton").innerHTML = baton;
}