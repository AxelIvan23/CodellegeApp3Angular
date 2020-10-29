var digital = document.getElementById('digital');
animation(1);

function animation (n) {
	digital.src = '../img/terr/terr' + n + ".png";
	n=n+1;
	await new Promise(r => setTimeout(r, 1000));
	if(n==9)
		n=1;
	animation(n);
}