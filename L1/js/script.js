var inp1Elem, inp2Elem;
var resElem;

function init() {
inp1Elem = document.getElementById("input1");
inp2Elem = document.getElementById("input2");
resElem = document.getElementById("result");
document.getElementById("runBtn").onclick = areaCalculations;
}

window.onload = init;
function areaCalculations() {
    let length; //längd i meter
    let width; //bredd i meter 
    let area; //yta i kvadratmeter

    length = Number(inp1Elem.value);
    width = Number(inp2Elem.value);


 //area för en rektangel 
    area = length * width;
    resElem.innerHTML = "<p>Rektangelns area är " + area + "m <sup>2</sup></p>";

    //area för en ellips

    area = 3.14 * length * width / 4;
    resElem.innerHTML += "<p>Ellipsens area är " + area + " m<sup>2</sup></p>";
    
    //Rektangelns area då längden ökas med 5 meter 

    area = (length + 5) * width;
    resElem.innerHTML += "<p>då längden ökas med 5m blir rektangelns area " + area + " m<sup>2</sup></p>";

    //rektangelns area då längden ökar med 50% och bredden med 3 meter

    area = (length * 1.5) * (width + 3);
    resElem.innerHTML += "<p> Då längden ökar med 50% och bredden med 3m blir rektangelns area " + area + " m<sup>2</sup></p>";


   //Triangelns area i kvadratfot 

   area = (length * 3.28) * (width * 3.28) / 2;
   resElem.innerHTML += "<p> Triangelns area är " + area + " kvadratfot</p>";

    
}
 


