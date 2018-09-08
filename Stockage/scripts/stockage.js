// Test si le stockage local est possible sur le navigateur
if (typeof(Storage) !== "undefined") {
    // Stockage d'un long texte
	localStorage.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lectus felis, bibendum eu pretium at, hendrerit vitae nunc. Pellentesque suscipit hendrerit felis ut scelerisque. Praesent vehicula, sem quis mollis tempor, ante turpis congue risus, id tristique felis risus fermentum ante. Vestibulum in erat posuere, gravida eros ut, tempus enim. Vestibulum feugiat in quam quis iaculis. Suspendisse at ultrices sem. Nulla fermentum non leo in elementum. Sed elementum eget est eget finibus. Suspendisse potenti.";
} else {
    alert("stockage impossible sur ce navigateur");
}

function getLorem() {
	document.getElementById("lorem").innerHTML = localStorage.lorem;
}