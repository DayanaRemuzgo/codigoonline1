"use strict";

var nombreInput = document.getElementById("nombreInput");
var selectDistrito = document.getElementById("selectDistrito");
var enviarGatos = document.getElementById("enviarGatos");
var formulario = document.getElementById("formulario"); // elemento.onchange
// cuando sucede un cambio en el contenido de un elemeto y el focus
// sale del elemento.

nombreInput.onchange = function (e) {
  console.log("onchange");
  console.log(e);
};

nombreInput.onfocus = function (e) {
  console.log("onfocus");
  nombreInput.style.borderRadius = "5px";
  console.log(e);
};

nombreInput.onblur = function (e) {
  console.log("onblur");
  nombreInput.style.borderRadius = "0px";
  console.log(e);
};

selectDistrito.onchange = function (e) {
  // select.selectedIndex => es el numero o posicion del
  // conjunto de options que tiene el select
  var posicion = selectDistrito.selectedIndex;
  console.log(posicion); // select.options => devuelve el arreglo de <option> que tiene
  // un elemento select

  console.log(selectDistrito.options[posicion].innerText);
  console.log(e.target.value);
}; // form.onsubmit=> evento que se dispara cuando se presiona click
// en un botón de tipo SUBMIT que se encuentre dentro del formulario
// ó cuando se presione la tecla enter en cualquiera de los inputs
// de un formulario


formulario.onsubmit = function (e) {
  // e.preventDefault() => cancela todas las acciones por defecto que iban a suceder
  // tras desencadenarse el evento. SI Y SOLO SI, tenían acciones por defecto
  // EJM. el click de una etiqueta <a> redirecciona a una pagina
  // EJM. el submit de un fornulario envía los datos a un servidor.
  // EJM. el click derecho abre un menu contextual en el navegador
  e.preventDefault();
  var info = {
    nombre: nombreInput.value,
    distrito: selectDistrito.value
  };
  console.log("ENVIANDO GATOS");
  console.log(info);
}; // elemento.oncontextmenu => evento que se dispara cuando se hace
// un click derecho sobre el elemento


window.oncontextmenu = function (e) {
  e.preventDefault();
};