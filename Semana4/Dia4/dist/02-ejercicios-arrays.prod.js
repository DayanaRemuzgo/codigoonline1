"use strict";for(var n=+prompt("¿Cuántas notas va a ingresar joven?"),i=0,acumulado=0;i<n;){var x=+prompt("Ingrese la nota ".concat(i+1));acumulado+=x,i++}var promedio=acumulado/n;console.log("Promedio de notas => ".concat(promedio));