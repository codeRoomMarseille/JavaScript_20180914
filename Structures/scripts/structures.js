// if
if(confirm("Choisissez un bouton")) {
	document.write("Vous avez choisi \"OK\"");
} else {
		document.write("Vous avez choisi \"Annuler\"");
}
document.write("<br>");

let nom = "Sinclair";
if(nom == "Sinclair") {
	document.write("c'est le prof");
}
document.write("<br>");

let age = "53";
if(age == 53) {
	document.write("Et oui, déjà " + age + " ans");
}
document.write("<br>");

if(age === 53) {
	document.write("53 est un number");
} else {
	document.write("c'est mieux de mettre 53 en number");
}
document.write("<br>");

// Boucles
let onYVa = true;
let nbBoucle = prompt("Nombre de boucle (2 à 9)", 5);

if(isNaN(nbBoucle)) { // Attention == NaN toujours faux
	document.write("On a dit un chiffre");
	document.write("<br>");
	onYVa = false;
}

if(nbBoucle.length != 1) {
	document.write("Tu regardes ce que tu mets des fois ????");
	document.write("<br>");
	onYVa = false;
}

if(parseInt(nbBoucle) < 2) {
	document.write("trop petit");
	document.write("<br>");
	onYVa = false;
}

if(parseInt(nbBoucle) > 9) {
	document.write("trop grand");
	document.write("<br>");
	onYVa = false;
}

if(onYVa) {
	for(let compteur = 1; compteur <= nbBoucle; compteur++) {
		document.write("Boucle numéro: " + compteur);
		document.write("<br>");
	}
}

// switch
let planete = prompt("Donnez le nom d'une planète du système solaire");
switch(planete.toLowerCase()) {
	case ""       : document.write("T'as lu ce qu'on a demandé ?"); break;
	case "mercure": document.write("C'est Chaud"); break;
	case "vénus"  : document.write("L'étoile du berger"); break;
	case "terre"  : document.write("C'est ici"); break;
	case "mars"   : document.write("La planète rouge"); break;
	case "jupiter": document.write("La plus balaise"); break;
	case "saturne": document.write("La plus belle"); break;
	case "uranus" :
	case "neptune": document.write("C'est très loin"); break;
	case "pluton" : document.write("C'est plus une planète, mais je te l'accorde quand même"); break;
	default       : document.write("Non, Tatooine et " + planete + " ne sont pas dans le système solaire"); break;
}
