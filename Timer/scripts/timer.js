// Compteur
let counter;
// Référence à l'interval
let intervalId = null;

// Fin
function finish() {
  clearInterval(intervalId);
  document.getElementById("bip").innerHTML = "TERMINE!";	
}

// Compte à rebour
function bip() {
    counter--;
    if(counter == 0) {
		finish();
    } else {	
        document.getElementById("bip").innerHTML = counter + " secondes restantes";
    }	
}

// Demarrage
function start(){
	counter = 10;
	intervalId = setInterval(bip, 1000);
}