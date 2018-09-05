// ********************************************
// Création de l'objet ObjetSpatial
// Un objet spatial a juste un nom et une masse
// ********************************************
let ObjetSpatial = {
    init: function(nom, masse) {
        this.nom = nom;
        this.masse = masse;
    }
};
// Fin création objet spatial

// ************************************
// Création de l'objet Etoile
// Une étoile est un objet spatial
//  avec en plus un diametre et un type
// ************************************
let Etoile = Object.create(ObjetSpatial);
Etoile.initEtoile = function(nom, masse, diametre, type) {
    this.init(nom, masse);
    this.diametre = diametre;
    this.type = type;
};
// Fin création etoile

// **************************************************************************
// Création de l'objet planete
// Une planete est un objet spatial
//  avec en plus un rayon et une atmosphère
// On peut calculer son périmètre, sa surface et son volume à partir du rayon
// périmètre = 2 * PI * R
// surface = 4 * PI * R * R
// volume = 4/3 * PI * R * R * R
// **************************************************************************
let Planete = Object.create(ObjetSpatial);
Planete.initPlanete = function(nom, masse, rayon, atmosphere) {
    this.init(nom, masse);
    this.rayon = rayon;
    this.atmosphere = atmosphere;
};
Planete.perimetre = function() {
    return 2 * Math.PI * rayon;
};
Planete.surface = function() {
    return 4 * Math.PI * Math.pow(rayon, 2);
};
Planete.volume = function() {
    return 4 / 3 * Math.PI * Math.pow(rayon, 3);
};
// Fin création planete

// *************************************************
// Création de l'objet orbite
// Une orbite represente un objet spatial secondaire
// qui tourne autour d'un objet spatial principal
// a une certaine altitude ou rayon
// *************************************************
let Orbite = {
    init: function(objetSpatialPrincipal, objetSpatialSecondaire, altitude) {
        this.objetSpatialPrincipal = objetSpatialPrincipal;
        this.objetSpatialSecondaire = objetSpatialSecondaire;
        this.altitude = altitude;
    }
};

// La periode de rotation est
// 2 * PI * racine(a * a * a / (G * ( m1 + m2)))
// https://fr.wikipedia.org/wiki/P%C3%A9riode_de_r%C3%A9volution
Orbite.periode = function() {
    const G = 6.67408e-11;
    return 2 * Math.PI * Math.sqrt(Math.pow(this.altitude, 3) / (G * (this.objetSpatialPrincipal.masse + this.objetSpatialSecondaire.masse)));
};

Orbite.distance = function() {
    return 2 * Math.PI * this.altitude;
};

Orbite.vitesse = function() {
    return this.distance() / this.periode();
};

// Fin création orbite
