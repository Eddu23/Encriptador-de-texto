//Esta funcion capta el texto y lo convierte en minusculas
function textoMinusculas(){
  let entrada = document.getElementById("myText").value;
  return entrada.toLowerCase(); 
}

//Esta funcion encripta el texto con los valores determinados
function encriptarTexto(){
var texto = textoMinusculas();
var valores = {
   e:"enter",
   i:"imes",
   a:"ai",
   o:"ober",
   u:"ufat",
};
texto = texto.replace(/e|i|a|o|u/g, function(reemplazar){
  return valores[reemplazar];
});
var ResultText = document.getElementById("demo").innerHTML = texto;
  if (texto = ResultText) {
    invizibilizarDiv();
  }
}

//Esta funcion desencripta el texto con los valores determinados al contrario
function desencriptarTexto(){
var texto = document.getElementById("myText").value;
var valores = {
   enter:"e",
   imes:"i",
   ai:"a",
   ober:"o",
   ufat:"u",

};
texto = texto.replace(/enter|imes|ai|ober|ufat/g, function(reemplazar){
  return valores[reemplazar];
});
document.getElementById("demo").innerHTML = texto;
}

function demoVisibility() {
  document.getElementById("Diving").style.display = "inline";
}

//Esta funcion hace que el div del resultado sea invisible y a la vez habilita el textarea del texto a mostrar
function invizibilizarDiv() {
  document.getElementById("mostrar-result").style.display = "none";
  var miElemento = document.getElementById("resultado");
  miElemento.style.display = "flex";
  return;
}