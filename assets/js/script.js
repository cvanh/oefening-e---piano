// alraight dus werkstuk 1: dus het gekke is als ik octaaf 1 uit schakel doet octaaf 2 het wel. maar als ik ze alle bij inschakelt doet niks het. like ik snap het echt niet meer, dus ik dacht ik vraag het op zo'n discord server voor dev's maar tot weinig success 

// octaaf 1

document.getElementById("c1").onclick = function () {
	var c1_toets = document.getElementById("audio_c1");
	c1_toets.play();
	console.log("ER IS EEN TOETS INGEDRUKT AAAAAAAAAAAAAAAA")//debug line
}
document.getElementById("cc1").onclick = function () {
	var cc1_toets = document.getElementById("audio_cc1");
	cc1_toets.play();
}
document.getElementById("d1").onclick = function () {
	var d1_toets = document.getElementById("audio_d1");
	d1_toets.play();
}
document.getElementById("dd1").onclick = function () {
	var dd1_toets = document.getElementById("audio_dd1");
	dd1_toets.play();
}
document.getElementById("e1").onclick = function () {
	var e1_toets = document.getElementById("audio_e1");
	e1_toets.play();
}
document.getElementById("ee1").onclick = function () {
	var ee1_toets = document.getElementById("audio_ee1");
	ee1_toets.play();
}
document.getElementById("f1").onclick = function () {
	var f1_toets = document.getElementById("audio_f1");
	f1_toets.play();
}
document.getElementById("ff1").onclick = function () {
	var ff1_toets = document.getElementById("audio_ff1");
	ff1_toets.play();
}
document.getElementById("g1").onclick = function () {
	var g1_toets = document.getElementById("audio_g1");
	g1_toets.play();
}
document.getElementById("gg1").onclick = function () {
	var gg1_toets = document.getElementById("audio_gg1");
	gg1_toets.play();
}
document.getElementById("a1").onclick = function () {
	var a1_toets = document.getElementById("audio_a1");
	a1_toets.play();
}
document.getElementById("b1").onclick = function () {
	var b1_toets = document.getElementById("audio_b1");
	b1_toets.play();
}

// octaaf 2 

document.getElementById("c2").onclick = function () { // als op de c-toets wordt geklikt
	var c_toets = document.getElementById("audio_c2"); // zoek het c-toets audio-element op
	c_toets.play(); // speel het audio-element af
}
document.getElementById("d2").onclick = function () {
	var d_toets = document.getElementById("audio_d2");
	d_toets.play();
}
document.getElementById("e2").onclick = function () {
	var e_toets = document.getElementById("audio_e2");
	e_toets.play();
}
document.getElementById("f2").onclick = function () {
	var f_toets = document.getElementById("audio_f2");
	f_toets.play();
}
document.getElementById("g2").onclick = function () {
	var g_toets = document.getElementById("audio_g2");
	g_toets.play();
}
document.getElementById("a2").onclick = function () {//deze doen het niet
	var a_toets = document.getElementById("audio_a2");
	a_toets.play();
}
document.getElementById("b2").onclick = function () {// deze doen het niet
	var b_toets = document.getElementById("audio_b2");
	b_toets.play();
}
//<!C - C# - D - D# - E - F - F# - G - G# - A - A# - B>