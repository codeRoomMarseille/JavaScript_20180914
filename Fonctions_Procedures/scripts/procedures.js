// **************************************
// Affiche un texte en gras
// @Param le texte
// @Param l'id d'un objet d'une page HTML
// **************************************
function affGras(texte, id) {
	document.getElementById(id).innerHTML = "<B>" + texte + "</B>";
}

// **************************************
// Affiche un texte en rouge
// @Param le texte
// @Param l'id d'un objet d'une page HTML
// **************************************
function affRouge(texte, id) {
	//document.getElementById(id).innerHTML = "<h3 style=\"color:red;\">" + texte + "</h3>";
	document.getElementById(id).innerHTML = texte;
	document.getElementById(id).style.color = "red";
}

// **************************************
// Affiche un texte en italique
// @Param le texte
// @Param l'id d'un objet d'une page HTML
// **************************************
function affItalique(texte, id) {
	document.getElementById(id).innerHTML = "<I>" + texte + "</I>";
}

let taVie = prompt("Raconte moi ta vie...");
affGras(taVie, "gras");
affRouge(taVie, "rouge");
affItalique(taVie, "italique");

