// Créer un tableau de planètes en enlevant les doublons
// Un tableau associatif ne pouvant pas avoir 2 fois la même
// entrée, il ne garde que la dernière et enlève donc les planètes en double
let lstPlanete = new Object();
for (let sonde in planetes) {
	lstPlanete[planetes[sonde]] = planetes[sonde];
} 	

// Parcoure la liste des planète et fabrique un bouton radio
for (let planete in lstPlanete) {
	document.write("<div>");
	document.write("<label>");
	document.write('<input type="radio" name="planete" value="' + planete + '" onclick="changePlanete(this)"/> ' + planete);
	document.write("</label>");
	document.write("</div>");
}

