// Jeu de test
var myArray = ["C'est", "un", "test"];

/*
 * parcourt le jeu de test 
 * pour en afficher les éléments
 */
myArray.forEach(function(value, index, array) {
    alert(
		'Tableau : ' /* Affiche le tableau entier */ + array + '\n' + 
        'Index   : ' + index + '\n' + // Affiche l'index
        'Valeur  : ' + value		  // Affiche la valeur
    ); // Affiche l'index et la valeur
});
