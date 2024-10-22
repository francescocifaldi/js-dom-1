const myButton = document.getElementById("switchLamp");
const myDiv = document.getElementById("image-container");

const IMG_LAMP_ON = '../img/yellow_lamp.png';
const IMG_LAMP_OFF = '../img/white_lamp.png';

const MSG_LAMP_ON = 'ON';
const MSG_LAMP_OFF = 'OFF';


// Lo stato della mia lampadina
let lampStatus = true;

// Inizializzare la mia applicazione
// Metto l'immagine della lampadina
// Metto il testo del bottone

myDiv.style.backgroundImage = "url('" + (!lampStatus ? IMG_LAMP_OFF : IMG_LAMP_ON) + "')";
myButton.innerText = !lampStatus ? MSG_LAMP_ON  : MSG_LAMP_OFF;

myButton.addEventListener('click', function () {
    lampStatus = !lampStatus;
    myDiv.style.backgroundImage = "url('" + (!lampStatus ? IMG_LAMP_OFF : IMG_LAMP_ON) + "')";
    myButton.innerText = !lampStatus ? MSG_LAMP_ON  : MSG_LAMP_OFF;
});