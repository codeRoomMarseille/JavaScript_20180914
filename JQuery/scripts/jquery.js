// Clic sur le bouton allume
$('#allume').click(function () {
	alert("Allume");
})

// clic sur le titre
// Sans JQuery
// document.getElementById("titre").onmousedown = function(){document.getElementById("titre").style.color=getRandomColor()};
// Avec JQuery
$('#titre').mousedown(function() {
	$('#titre').css("background-color", getRandomColor());
	$('#couleur').html("couleur:" + $('#titre').css("background-color"));
})

// Générateur de couleur
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
