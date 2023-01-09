/*

function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    
    //  /i afecta mayusculas y minusculas 
    //  /g toda la linea
    //  /m afecta multiples lineas o parrafo


    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");


    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"; 

}


function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    
    //  /i afecta mayusculas y minusculas 
    //  /g toda la linea
    //  /m afecta multiples lineas o parrafo


    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");


    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"; 

}



function copiar(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    contenido.exeCommand("copy");
    alert("Se copio");
}

*/







const textoIngresado = document.querySelector("#inputTexto");
const textoResultado = document.querySelector("#texto2");

const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopiar = document.querySelector("#copiar");


function encriptar(){


    let texto = document.getElementById("inputTexto").value.toLowerCase();

    let textoEncriptado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

    document.getElementById("texto2").innerHTML = textoEncriptado;

    // displays

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"; 
    

}



function desencriptar(){

    let texto = document.getElementById("inputTexto").value.toLowerCase();

    let textoEncriptado = texto
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
  
    document.getElementById("texto2").innerHTML = textoEncriptado;

    // displays

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"; 
    
}


function copiar(){

    //let textoEncriptado = textoResultado.value;

    let textoEncriptado = document.getElementById("texto2").value;

    navigator.clipboard.writeText(textoEncriptado);
    alert("Se copio");

    /*
    var contenido = document.querySelector("#texto2");
    contenido.select();
    contenido.execCommand("copy");
    alert("Se copio");

    */
}





/*
a - ai
e - enter
i - imes
o - ober
u -ufat
*/

/*
const textoIngresado = document.querySelector("#texto");
const textoResultado = document.querySelector("#textoResultado");

const btnEncriptar = document.querySelector("#encri");
const btnDesencriptar = document.querySelector("#desencri");
const btnCopiar = document.querySelector("#copiar");
*/








