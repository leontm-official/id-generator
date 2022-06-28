let codeTeile = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
"1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
function eineStelle() {
    document.getElementById("ergebnis").innerHTML = codeTeile[Math.floor(Math.random() * codeTeile.length)]
}
function zweiStellen() {
    document.getElementById("ergebnis").innerHTML = codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)]
}
function dreiStellen() {
    document.getElementById("ergebnis").innerHTML =codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)]
}
function vierStellen() {
    document.getElementById("ergebnis").innerHTML = codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + 
    codeTeile[Math.floor(Math.random() * codeTeile.length)]
}
function fünfStellen() {
    document.getElementById("ergebnis").innerHTML = codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + 
    codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)]
}
function sechsStellen() {
    document.getElementById("ergebnis").innerHTML = codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + 
    codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)]
}
function siebenStellen() {
    document.getElementById("ergebnis").innerHTML = codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + 
    codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)]
}
function achtStellen() {
    document.getElementById("ergebnis").innerHTML = codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + 
    codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)]
}
function neunStellen() {
    document.getElementById("ergebnis").innerHTML = codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + 
    codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + 
    codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)]
}
function zehnStellen() {
    document.getElementById("ergebnis").innerHTML =codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + 
    codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + 
    codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + 
    codeTeile[Math.floor(Math.random() * codeTeile.length)]
}
function copyID() {
    navigator.clipboard.writeText(document.getElementById("ergebnis").innerHTML);
    alert("Die ID wurde zu deinem Clipboard hinzugefügt!")
}
