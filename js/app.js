const myButton = document.getElementById("switchLamp");
const myDiv = document.getElementById("image-container");

// Lo stato della mia lampadina
let lampStatus = false;

// Inizializzare la mia applicazione
// Metto l'immagine della lampadina
// Metto il testo del bottone

myDiv.style.backgroundImage = lampStatus === false ? "url('../img/white_lamp.png')" : "url('../img/yellow_lamp.png')";
myButton.innerText = lampStatus === false ? "Accendi" : "Spegni";


myButton.addEventListener('click', function () {
    myDiv.style.backgroundImage = lampStatus === false ? "url('../img/white_lamp.png')" : "url('../img/yellow_lamp.png')";
    myButton.innerText = lampStatus === false ? "Accendi" : "Spegni";
    lampStatus = lampStatus === false ? true : false;
});