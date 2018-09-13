// Déclaration par let
// undefined
let decUndefined;
document.write("Résultat type 1 = " + decUndefined);
document.write("<br>");
document.write("Type: " + typeof(decUndefined));
document.write("<br>");
// string
let decString = "Mercure";
document.write("Résultat type 2 = " + decString);
document.write("<br>");
document.write("Type: " + typeof(decString));
document.write("<br>");
// Entier ou flottant
let decEntier = 10;
let decFlottant = 5.2;
document.write("Résultat type 3 = " + decEntier);
document.write("<br>");
document.write("Type: " + typeof(decEntier));
document.write("<br>");
document.write("Résultat type 4 = " + decFlottant);
document.write("<br>");
document.write("Type: " + typeof(decFlottant));
document.write("<br>");
// Expression
document.write("Résultat type 5 = " + decEntier + decFlottant);
document.write("<br>");
document.write("Type: " + typeof("Résultat type 5 = " + decEntier + decFlottant));
document.write("<br>");
document.write(decEntier + decFlottant + " = Résultat type 6");
document.write("<br>");
document.write("Type: " + typeof(decEntier + decFlottant + " = Résultat type 6"));
document.write("<br>");
document.write("Type: " + typeof(decEntier + decFlottant));
document.write("<br>");
document.write("<br>");
// boolean	
let decBoolean = true;
document.write("Résultat type 7 = " + decBoolean);
document.write("<br>");
document.write("Type: " + typeof(decBoolean));
document.write("<br>");	
document.write("<br>");	
// Changement
let decNumber2 = "10.3";
document.write("Résultat type 8 = " + decNumber2);
document.write("<br>");
document.write("Type: " + typeof(decNumber2));
document.write("<br>");
document.write("Résultat type 9 = " + parseFloat(decNumber2));
document.write("<br>");
document.write("Type: " + typeof(parseFloat(decNumber2)));
document.write("<br>");
document.write("Résultat type 10 = " + parseInt(decNumber2));
document.write("<br>");
document.write("Type: " + typeof(parseInt(decNumber2)));
document.write("<br>");
let decStringAge1 = "Mon age est 53";
let decStringAge2 = "53, c'est mon age";
document.write("Résultat type 11 = " + parseInt(decStringAge1));
document.write("<br>");
document.write("Type: " + typeof(parseInt(decStringAge1)));
document.write("<br>");
document.write("Résultat type 12 = " + parseInt(decStringAge2));
document.write("<br>");
document.write("Type: " + typeof(parseInt(decStringAge2)));
document.write("<br>");

// Opérateur unaire +
document.write("Opérateur +: ");
document.write("<br>");
document.write(+ "123.45");
document.write("<br>");
document.write(typeof(+ "123.45"));
document.write("<br>");
document.write(+ "123.45a");



