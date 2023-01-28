const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar(){
    const textoEncritado = encriptar(textarea.value);
    mensaje.value = textoEncritado
    textarea.value ="";
    mensaje.style.backgroundImage = "none"

}

function encriptar(stringEncritada){ 
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncritada = stringEncritada.toLowerCase()
    
    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringEncritada.includes(matrizCodigo[i][0])){
            stringEncritada = stringEncritada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
        
    }
    return stringEncritada
}


function btnDesencriptar(){
    const textoDesencritado = desencriptar(textarea.value);
    mensaje.value=textoDesencritado
    textarea.value="";
}
function desencriptar(stringDesencritado){ 
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencritado = stringDesencritado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencritado.includes(matrizCodigo[i][1])){
            stringDesencritado = stringDesencritado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencritado
}

const $copiar = document.querySelector(".mesaje") 
function $Copiar(){
    var $Copiar = document.querySelector(".mensaje");
    $Copiar.select();
    document.execCommand("copy")
    alert("Copied!");
}