let parameters = location.search.substring(1).split("&");

let temp = parameters[0].split("=");
planete = unescape(temp[1]);
document.write("Tu as choisi: " + planete);
