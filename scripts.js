const body = document.querySelector("body")
const hexCode = document.querySelector("#hex-code");
const button = document.querySelector("#button");
const hexLetter = ["A", "B", "C", "D", "E", "F"];
button.onclick = changeBackgroundColor;



function changeBackgroundColor(){
    let finalHexCode = generateHexCode();
    hexCode.innerHTML = finalHexCode;
    body.style["background-color"] = finalHexCode;
}

function generateHexCode(){
    let hexCode = "#";
    for(let i = 0; i < 6; i++){
        if(Math.random() < 0.5){
            hexCode += generateNumber();
        } else {
            hexCode += generateLetter();
        }
    }
    return hexCode;
}

function generateNumber () {
    return Math.floor(Math.random() * 10)
}

function generateLetter(){
    return hexLetter[Math.floor(Math.random() * hexLetter.length)]
}