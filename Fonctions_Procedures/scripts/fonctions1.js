// ******************
// Calcul le prix TTC
// @Param prix HT
// @Param TVA en %
// @Return prix TTC
// ******************
function getTTC(ht, tva) {
	return(ht * (1 + tva / 100));
}

// ******************
// Calcul le prix HT
// @Param prix TTC
// @Param TVA en %
// @Return prix HT
// ******************
function getHT(ttc, tva) {
	return(ttc / (1 + tva / 100));
}

// ******************
// Calcul la TVA en %
// @Param prix TTC
// @Param prix HT
// @Return TVA en %
// ******************
function getTVA(ttc, ht) {
	return((ttc / ht - 1) * 100);
}

let prixHT = 23;
let tva = 10;

document.write(getTTC(prixHT, tva));

