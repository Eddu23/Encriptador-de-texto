//Esta funcion capta el texto y lo convierte en minusculas
function textoMinusculas() {
  let entrada = document.getElementById("myText").value;
  return entrada.toLowerCase();
}

//Esta funcion encripta el texto con los valores determinados
function encriptarTexto() {
  var texto = textoMinusculas();
  var valores = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };
  texto = texto.replace(/e|i|a|o|u/g, function (reemplazar) {
    return valores[reemplazar];
  });

  //Este if comprueba si hay texto existente y si hay muestra la pantalla de encriptacion
  var ResultText = document.getElementById("demo").innerHTML = texto;
  if (texto = ResultText) {
    invizibilizarDiv();
  }
}

//Esta funcion desencripta el texto con los valores determinados al contrario
function desencriptarTexto() {
  var texto = document.getElementById("myText").value;
  var valores = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",

  };
  texto = texto.replace(/enter|imes|ai|ober|ufat/g, function (reemplazar) {
    return valores[reemplazar];
  });
  var ResultText = document.getElementById("demo").innerHTML = texto;
  if (texto = ResultText) {
    invizibilizarDiv();
  }
}


//Esta funcion hace que el div del resultado sea oculte y a la vez habilita el textarea del texto a mostrar
function invizibilizarDiv() {
  document.getElementById("mostrar-result").style.display = "none";
  var miElemento = document.getElementById("resultado");
  miElemento.style.display = "flex";
  return;
}

//Esta funcion copia el texto del resultado
function CopiarTexto() {
  var texto = document.getElementById("demo").value;
  var inputTemp = document.createElement("input");
  inputTemp.value = texto;
  document.body.appendChild(inputTemp);
  inputTemp.select();
  document.execCommand("copy");
  document.body.removeChild(inputTemp);
}