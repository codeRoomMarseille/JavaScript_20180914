// Déclaration de la fonction anonyme
let sayHello = function() {
	document.write('Bonjour !');
};

// Appel de la fonction anonyme
sayHello();
document.write('<br>');	

// Appel direct d'une fonction
let test = 'intérieur';
(function() {
    let test = 'extérieur'; 
    document.write('Dans la zone isolée, la variable est : ' + test);
	document.write('<br>');	
})(); // Fin de la zone isolée. Les variables créées dans cette zone sont détruites.

document.write('Dans la zone non-isolée, la variable est : ' + test);
document.write('<br>');	

// Générateur de couleur
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Fonction de callback
document.getElementById("texte").onmousedown = function(){document.getElementById("texte").style.color=getRandomColor()};
