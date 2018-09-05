// Tableau associatif des sondes
let planetes = {"Luna 2": "Lune", "Mariner 2": "Vénus", "Mariner 4": "Mars", "Vénéra 7": "Vénus", "Luna 16": "Lune", "Mars 3": "Mars",
                "Mariner 10": "Mercure", "Viking 1": "Mars", "Viking 2": "Mars", "Voyager 1": "Jupiter", "Voyager 1 ": "Saturne", "Voyager 2": "Jupiter",
                "Voyager 2 ": "Saturne", "Voyager 2  ": "Uranus", "Voyager 2   ": "Neptune", "Galileo": "Jupiter", "Magellan": "Vénus", "Cassini": "Saturne",
                "Spirit": "Mars", "Messenger": "Mercure", "New Horizon": "Pluton", "BepiColombo": "Mercure", "Juno": "Jupiter", "Schiaparelli": "Mars"};

// Balayage de toutes les sondes
for (let sonde in planetes) {
	document.write("<TR>");
    document.write("<TD>" + sonde + "</TD>" + 
                   "<TD>" + planetes[sonde] + "</TD>");
	document.write("</TR>");
} 	
