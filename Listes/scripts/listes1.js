let personne = new Array("Sinclair", "Christophe", 53, "Orange", "Marseille", true);
// let personne = ["Sinclair", "Christophe", 53, "Orange", "Marseille", true];

// Longueur de la liste
document.write("Longueur = ");
document.write(personne.length);
document.write ('<br>');
// Position de l'age dans la liste
document.write("Index de l'information sur l'age: ");
document.write(personne.indexOf(53));
document.write ('<br>');
document.write ('<br>');

// Ajout du code postal à la fin de la liste
personne.push(13003);
// Ajout du sexe à la place 2 (3eme car la liste commence à 0)
personne.splice(2, 0, "Masculin");

personne.forEach(function(value, index, array) {
    document.write(
        'Index   : ' + index + '&nbsp' + 
        'Valeur  : ' + value + '<br>'	
    ); 
});
document.write ('<br>');

// Suppression de 2 valeurs à partir de l'indice 3
personne.splice(3, 2);
for (let index in personne) {
    document.write(
        'Index   : ' + index + '&nbsp' + 
        'Valeur  : ' + personne[index] + '<br>'	
    ); 	
}
document.write ('<br>');

for (let value of personne) {
    document.write(
        'Valeur  : ' + value + '<br>'	
    ); 		
}

document.write ('<br>');

document.write("Type = " + typeof(personne));
