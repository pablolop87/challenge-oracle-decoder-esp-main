var textoIngresado     = document.querySelector(".text-input");
var btnEncriptacion    = document.querySelector("#btn-encriptar");
var btnDesencriptacion = document.querySelector("#btn-desencriptar");
var mensajeEncriptado  = document.querySelector("#msg");
var btnCopiar          = document.querySelector("#btn-copy");

btnEncriptacion.addEventListener("click",function(event){
    event.preventDefault();
    texto = textoIngresado.value;
    textoEncriptado = texto.replace(/a/g,"ai").replace(/e/g,"enter").replace(/i/g,"imes").replace(/o/g,"ober").replace(/u/g,"ufat");
                      
   
    mensajeEncriptado.value = textoEncriptado;
    textoIngresado.value = "";
});
btnDesencriptacion.addEventListener("click",function(event){
    event.preventDefault();
    texto = textoIngresado.value;
    textoDesencriptado = texto.replace(/ai/g,"a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
                         
                         
   
    mensajeEncriptado.value=textoDesencriptado;
    textoIngresado.value = "";

});
btnCopiar.addEventListener("click",function(event){
    navigator.clipboard.writeText(mensajeEncriptado.value);
    mensajeEncriptado.value = "";
    textoIngresado.focus();
   
});
