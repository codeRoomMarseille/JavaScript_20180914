// *******************************
// initialisation des informations
// *******************************

// Liste d'objets spatiaux
let lstObjetSpatial = [];

// Station spatial
const iss = Object.create(ObjetSpatial);
iss.init("ISS", 400000);
lstObjetSpatial.push(iss);

// Soleil
const soleil = Object.create(Etoile); 
soleil.initEtoile("Soleil", 1.9891e30, 1392684e3, "G");
lstObjetSpatial.push(soleil);

// Planete
const mercure = Object.create(Planete); 
mercure.initPlanete("Mercure", 3.3011e23, 2439700, "Potassium, Sodium, Oxygène");
lstObjetSpatial.push(mercure);

const venus = Object.create(Planete); 
venus.initPlanete("Vénus", 4.8685e24, 6051800, "Dioxyde de carbone");
lstObjetSpatial.push(venus);

const terre = Object.create(Planete); 
terre.initPlanete("Terre", 5.9736e24, 6378137, "Azote, Oxygène");
lstObjetSpatial.push(terre);

const lune = Object.create(Planete); 
lune.initPlanete("Lune", 7.3477e22, 1737400, "");
lstObjetSpatial.push(lune);

const mars = Object.create(Planete); 
mars.initPlanete("Mars", 641.85e21, 3396200, "Dioxyde de carbone");
lstObjetSpatial.push(mars);

const jupiter = Object.create(Planete); 
jupiter.initPlanete("Jupiter", 1.8986e27, 71492000, "Dihydrogène, Hélium");
lstObjetSpatial.push(jupiter);

const europe = Object.create(Planete); 
europe.initPlanete("Europe", 4.8e22, 1560800, "Oxygène");
lstObjetSpatial.push(europe);

const ganymede = Object.create(Planete); 
ganymede.initPlanete("Ganymède", 1.4819e23, 2631200, "Oxygène");
lstObjetSpatial.push(ganymede);

const io = Object.create(Planete); 
io.initPlanete("Io", 8.93e22, 1821600, "Dioxyde de soufre");
lstObjetSpatial.push(io);

const saturne = Object.create(Planete); 
saturne.initPlanete("Saturne", 568.46e24, 60268000, "Hydrogène");
lstObjetSpatial.push(saturne);

const titan = Object.create(Planete); 
titan.initPlanete("Titan", 1.3452e23, 2575500, "Diazote");
lstObjetSpatial.push(titan);

const encelade = Object.create(Planete); 
encelade.initPlanete("Encelade", 8.6e19, 256500, "Vapeur d'eau");
lstObjetSpatial.push(encelade);

const mimas = Object.create(Planete); 
mimas.initPlanete("Mimas", 3.84e19, 206600, "");
lstObjetSpatial.push(mimas);

const uranus = Object.create(Planete); 
uranus.initPlanete("Uranus", 8.681e25, 25559000, "Hydrogène, Hélium");
lstObjetSpatial.push(uranus);

const neptune = Object.create(Planete); 
neptune.initPlanete("Neptune", 102.43e24, 24764000, "Dihydrogène, Hélium");
lstObjetSpatial.push(neptune);

const pluton = Object.create(Planete); 
pluton.initPlanete("Pluton", 1.314e22, 1185000, "Azote");
lstObjetSpatial.push(pluton);

const charon = Object.create(Planete); 
charon.initPlanete("Charon", 1.52e21, 607000, "");
lstObjetSpatial.push(charon);

// Orbites
let lstOrbite = [];

const terreIss = Object.create(Orbite); 
terreIss.init(terre, iss, 6378137 + 400000);
lstOrbite.push(terreIss);

const soleilMercure = Object.create(Orbite); 
soleilMercure.init(soleil, mercure, 57909176000);
lstOrbite.push(soleilMercure);

const soleilVenus = Object.create(Orbite); 
soleilVenus.init(soleil, venus, 108208930000);
lstOrbite.push(soleilVenus);

const soleilTerre = Object.create(Orbite); 
soleilTerre.init(soleil, terre, 149597887500);
lstOrbite.push(soleilTerre);

const terreLune = Object.create(Orbite); 
terreLune.init(terre, lune, 384400000);
lstOrbite.push(terreLune);

const soleilMars = Object.create(Orbite); 
soleilMars.init(soleil, mars, 227936637000);
lstOrbite.push(soleilMars);

const soleilJupiter = Object.create(Orbite); 
soleilJupiter.init(soleil, jupiter, 778412027000);
lstOrbite.push(soleilJupiter);

const jupiterEurope = Object.create(Orbite); 
jupiterEurope.init(jupiter, europe, 671100000);
lstOrbite.push(jupiterEurope);

const jupiterGanymede = Object.create(Orbite); 
jupiterGanymede.init(jupiter, ganymede, 1070400000);
lstOrbite.push(jupiterGanymede);

const jupiterIo = Object.create(Orbite); 
jupiterIo.init(jupiter, io, 421800000);
lstOrbite.push(jupiterIo);

const soleilSaturne = Object.create(Orbite); 
soleilSaturne.init(soleil, saturne, 1429394069000);
lstOrbite.push(soleilSaturne);

const saturneTitan = Object.create(Orbite); 
saturneTitan.init(saturne, titan, 1221870000);
lstOrbite.push(saturneTitan);

const saturneEncelade = Object.create(Orbite); 
saturneEncelade.init(saturne, encelade, 238020000);
lstOrbite.push(saturneEncelade);

const saturneMimas = Object.create(Orbite); 
saturneMimas.init(saturne, mimas, 185520000);
lstOrbite.push(saturneMimas);

const soleilUranus = Object.create(Orbite); 
soleilUranus.init(soleil, uranus, 2870658186000);
lstOrbite.push(soleilUranus);

const soleilNeptune = Object.create(Orbite); 
soleilNeptune.init(soleil, neptune, 4503443661000);
lstOrbite.push(soleilNeptune);

const soleilPluton = Object.create(Orbite); 
soleilPluton.init(soleil, pluton, 5900898440583);
lstOrbite.push(soleilPluton);

const plutonCharon = Object.create(Orbite); 
plutonCharon.init(pluton, charon, 19130000);
lstOrbite.push(plutonCharon);
