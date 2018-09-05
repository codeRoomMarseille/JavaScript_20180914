// Vide les zones d'information (utile a partir du deuxieme passage)
document.getElementById("periodeOrbitale").value = "";
document.getElementById("distanceOrbitale").value = "";
document.getElementById("vitesseOrbitale").value = "";

// Chargement de la listeBox objet principal
//  tout objet peut être principal
let objPrinc = document.getElementById("lstObjetPrincipal");
for(let objet of lstObjetSpatial) {
	let opt = document.createElement("option");
	opt.text = objet.nom;
	objPrinc.options.add(opt, 1); 
}

// Chargement de la listBox objet secondaire
//  en fonction de l'objet principal sélectionné
let objSec = document.getElementById("lstObjetSecondaire");
objPrinc.onchange = function(){
	// Vide les zones d'information
	document.getElementById("periodeOrbitale").value = "";
	document.getElementById("distanceOrbitale").value = "";
	document.getElementById("vitesseOrbitale").value = "";
	
	// Vide la listBox
	objSec.options.length = 0;

	let opt = document.createElement("option");
	opt.text = "";
	objSec.options.add(opt, 1); 

	// Charge la listBox
	for(let orbite of lstOrbite) {
		if(orbite.objetSpatialPrincipal.nom == document.getElementById("lstObjetPrincipal").value) {
			let opt = document.createElement("option");
			opt.text = orbite.objetSpatialSecondaire.nom;
			objSec.options.add(opt, 1); 
		}
	}
};

// Calcul les zones d'informations de l'orbite sélectionné
objSec.onchange = function() {
	for(let orbite of lstOrbite) {
		if(orbite.objetSpatialPrincipal.nom == document.getElementById("lstObjetPrincipal").value
			&&
		   orbite.objetSpatialSecondaire.nom == document.getElementById("lstObjetSecondaire").value) {
			document.getElementById("periodeOrbitale").value = secondeToJour(orbite.periode()) + " jours";
			document.getElementById("distanceOrbitale").value = metreToKilometre(orbite.distance()) + " km";
			document.getElementById("vitesseOrbitale").value = metreToKilometre(orbite.vitesse()) + " km/s";
		}
	}
};

// Attention: ne pas faire de document.write car la page a déjà été chargé
