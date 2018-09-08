// Test si le stockage local est possible sur le navigateur
if (typeof(Storage) === "undefined") {
     alert("stockage impossible sur ce navigateur");
}

function getLorem() {
	document.getElementById("lorem").innerHTML = localStorage.lorem;
}