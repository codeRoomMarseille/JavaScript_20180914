// Tableau associatif d'une personne
let personne = {"Nom": "Sinclair", "Prénom": "Christophe", "Age": 53, "Société": "Orange", "Ville": "Marseille", "Formateur": true};

// Ajout du code postal
personne["Code postal"] = 13003;

// Récupération du nom
document.write("Son nom est : ", personne["Nom"]);
document.write ('<br>');

// Balayage de toutes les caractéristiques
for (let caracteristique in personne) {
    document.write(
        'Caractéristique : ' + caracteristique + '&nbsp' + 
        'Valeur          : ' + personne[caracteristique] + '<br>'	
    ); 	
}
document.write ('<br>');

document.write("Type = " + typeof(personne));
