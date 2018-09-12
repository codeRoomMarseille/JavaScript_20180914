// Cadrillage
let myCanvas = document.getElementById('myCanvas');
let ctx = myCanvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(150, 0);
ctx.lineTo(150, 450);
ctx.moveTo(300, 0);
ctx.lineTo(300, 450);
ctx.moveTo(0, 150);
ctx.lineTo(450, 150);
ctx.moveTo(0, 300);
ctx.lineTo(450, 300);
ctx.stroke();

let nbCaseCoche = 0;

document.getElementById('myCanvas').addEventListener('click',function(evt){
    var ctx = this.getContext('2d');
	
	let x = Math.trunc(evt.clientX / 150);
	let y = Math.trunc(evt.clientY / 150);
	
	switch(nbCaseCoche) {
			case 0:
			case 2:
			case 4:
			case 6:
			case 8: dessineCroix(x, y); break;
			case 1:
			case 3:
			case 5:
			case 7: dessineCercle(x, y); break;
			default: alert("Partie finie");
	}

	nbCaseCoche++;

},false);

function dessineCroix(x, y) {
	let myCanvas = document.getElementById('myCanvas');
	let ctx = myCanvas.getContext('2d');
	ctx.beginPath();
	ctx.moveTo(0 + x * 150, 0 + y * 150);
	ctx.lineTo(150 + x * 150, 150 + y * 150);
	ctx.moveTo(150 + x * 150, 0 + y * 150);
	ctx.lineTo(0 + x * 150, 150 + y * 150);
	ctx.stroke();
}

function dessineCercle(x, y) {
	let myCanvas = document.getElementById('myCanvas');
	let ctx = myCanvas.getContext('2d');
	ctx.beginPath();
	ctx.arc(75 + x * 150, 75 + y * 150, 75, 0, 2 * Math.PI);
	ctx.stroke();	
}

