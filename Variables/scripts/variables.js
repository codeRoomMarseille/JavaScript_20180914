// Déclaration par var
var decVar;
document.write("Résultat var 1 = " + decVar);
document.write("<br>");

decVar = "Mercure";
document.write("Résultat var 2 = " + decVar);
document.write("<br>");

{
	var decVar = "Vénus";
	document.write("Résultat var 3 = " + decVar);
	document.write("<br>");
}

document.write("Résultat var 4 = " + decVar);
document.write("<br>");	
document.write("<br>");	


// Déclaration par let
let decLet = true;
document.write("Résultat let 1 = " + decLet);
document.write("<br>");

{
	let decLet = false; // Attention: mauvaise idée de mettre le même nom, source d'erreur sauf pour des boucles
	document.write("Résultat let 2 = " + decLet);
	document.write("<br>");
}

document.write("Résultat let 3 = " + decLet);
document.write("<br>");	
document.write("<br>");	

// Pas de déclaration
// Remarque, un affichage d'une variable nom déclaré et non initialisé entraine un plantage
//document.write("Résultat rien 1 = " + decRien);
decRien = "Terre";
document.write("Résultat rien 2 = " + decRien);
document.write("<br>");	

{
	decRien = "Mars";
	document.write("Résultat rien 3 = " + decRien);
	document.write("<br>");
}

document.write("Résultat rien 4 = " + decRien);
document.write("<br>");	
document.write("<br>");	

// Déclaration const
const decConst = "Jupiter";
document.write("Résultat const 1 = " + decConst);
document.write("<br>");

{
	const decConst = "Saturne";
	document.write("Résultat const 2 = " + decConst);
	document.write("<br>");
}

document.write("Résultat const 3 = " + decConst);
document.write("<br>");

decConst = "Uranus";
document.write("Résultat const 4 = " + decConst);
document.write("<br>");



