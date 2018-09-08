// Liste des cookies de la page
let cookies = document.cookie;
document.getElementById("cookies").value = cookies.replace(/;/i, '\n');
let lstCookies = cookies.split(";");
let passage = 1;

for (let index = 0; index < lstCookies.length; index++) {
	if(lstCookies[index].includes("passage")) {
		passage = parseInt(lstCookies[index].substring(9));	
		passage++;
	}
}

document.cookie = "name=Brett Sinclair";
document.cookie = "carte bleu=1452-3652-1452-3652-78";
document.cookie = "passage=" + passage;
