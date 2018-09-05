// Selectionne une planete dans le tableau
function changePlanete(planete){
	// Remet toutes les cellules à blanc
	let allPlanetes = document.getElementsByTagName("TD");
	for(let myPlanete of allPlanetes) {
		myPlanete.style.backgroundColor = "White";
	}
	// Positionne les cellules de la classe sélectionnée à rouge
	let planetes = document.getElementsByClassName(planete.value);
	for(let planete of planetes) {
		planete.style.backgroundColor = "Red";
	}
}
