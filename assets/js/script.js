document.getElementById("c").onclick = function () { // als op de c-toets wordt geklikt
	var c_toets = document.getElementById("audio_c"); // zoek het c-toets audio-element op
	c_toets.play(); // speel het audio-element af
}
document.getElementById("d").onclick = function () {
	var d_toets = document.getElementById("audio_d");
	d_toets.play();
}
document.getElementById("e").onclick = function () {
	var e_toets = document.getElementById("audio_e");
	e_toets.play();
}
document.getElementById("f").onclick = function () {
	var f_toets = document.getElementById("audio_f");
	f_toets.play();
}
document.getElementById("g").onclick = function () {
	var g_toets = document.getElementById("audio_g");
	g_toets.play();
}
document.getElementById("a").onclick = function () {//deze doen het niet
	var a_toets = document.getElementById("audio_a");
	a_toets.play();
}
document.getElementById("b").onclick = function () {// deze doen het niet
	var b_toets = document.getElementById("audio_b");
	b_toets.play();
}
//<!C - C# - D - D# - E - F - F# - G - G# - A - A# - B>