// Globala variabler
var inp1Elem; //Ruta där man väljer frukt
var inp2Elem; // Ruta där man väljer antal av frukt
var msgElem; // Meddelande om att endast siffror ska väljas 
var selFruitNr; // Den frukt som valts 

// --------------------------------------------------
// Initiering av globala variabler och händelsehanterare
function init() {
inp1Elem = document.getElementById("input1");
inp2Elem = document.getElementById("input2");
msgElem = document.getElementById("message");
document.getElementById("btn1").onclick = showFruit; 
document.getElementById("btn2").onclick = addFruits; 
selFruitNr = 0;
	
} // Slut init

/* Funktion för att referera till input1, input2 samt message. Onclick refererar till functionen showfruit. Btn1 visar frukterna när man trycker på första knappen. Btn2 lägger till frukter när man trycker på andra knappen. */


window.onload = init; 

function showFruit() {
    let nr = getInput(inp1Elem, 5); //Siffra ska anges för resultat
    if (nr == -1) return; 

    document.getElementById("fruitImg").src = getUrl(nr);
    selFruitNr = nr; 
}

// Taggen refererar till ett ID. Let nr för att det endast ska anges siffror inom intervallet och inte bokstäver 

function getInput(elem, high) {
    msgElem.innerHTML = "";
    let nr = Number(elem.value);
    if (isNaN(nr)) {
        msgElem.innerHTML = "skriv en siffra";
        return -1;
    }

    if (nr < 1 || nr > high) {
        msgElem.innerHTML = "skriv ett tal mellan 1 och " + high; 
        return -1;
    }

    nr = parseInt (nr);
    elem.value = nr;
    return nr; 
}

//Funktion för att kontrollera att det är siffror inom valt intervall. 

function getUrl(nr) {
    let url; 
    switch (nr) {
        case 1: url = "img/apple.png"; break;
        case 2: url = "img/banana.png"; break;
        case 3: url = "img/orange.png"; break;
        case 4: url = "img/pear.png"; break;
        case 5: url = "img/pineapple.png"; break;
        default: url = "img/nofruit.png"; 
    }
 return url; 

}

// Funktion för att bilderna ska visas utifrån valt nummer. Switch för att byta mellan bilder samt referns till bilder. 

function addFruits() {
 if (selFruitNr == 0) {
    msgElem.innerHTML = "Du måste välja en frukt"; return; 
 }

 let amount = getInput(inp2Elem, 9); 
 if (amount == -1) return; 
 let imgList = "";
 let fruitUrl = getUrl(selFruitNr);
 for (let i = 0; i < amount; i++) {
    imgList += "<img src='" + fruitUrl + "' alt='frukt'>";
 }

 document.getElementById("selectedFruits").innerHTML += imgList;
}

// Funktion för att lägga till valda frukter samt antal av vald frukt.  
// --------------------------------------------------

