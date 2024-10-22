const myButton = document.getElementById("switchLamp");
const myDiv = document.getElementById("image-container");

myButton.addEventListener('click', function () {
    console.log('ho cliccato sul bottone');
    if(myDiv.classList.contains("off")){
        myDiv.classList.add('on');
        myDiv.classList.remove('off');
        myButton.innerText="Spegni";
    }
    else {
        myDiv.classList.add('off');
        myDiv.classList.remove('on');
        myButton.innerText="Accendi";
    }
});