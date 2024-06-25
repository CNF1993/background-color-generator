const body = document.querySelector("body")
const hexCode = document.querySelector("#hex-code");
const button = document.querySelector("#button");
const hexLetter = ["A", "B", "C", "D", "E", "F"];
button.onclick = changeBackgroundColor;
/*
al clickear cambiar fondo
    obtener codigo al clickear
    reescribir #hexCode
    cambiar fondo con el codigo obtenido

Generar codigo hex
    repetir 6 veces 
        agregar letra o numero aleatorio

Generar letra aleatoria
    buscar en array hexLetter indice aleatorio

Generar nro aleatorio entero del 0 al 9

*/
console.log(generateHexCode())

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
    return Math.floor(Math.random() * 11)
}

function generateLetter(){
    return hexLetter[Math.floor(Math.random() * hexLetter.length)]
}



