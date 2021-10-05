let suma = require ('./funciones/sumar');
let resta = require ('./funciones/restar');
let producto = require ('./funciones/multiplicar');
let cociente = require ('./funciones/dividir');

console.log("el resultado de sumar los numeros es "+suma.sumar(8,4));
console.log("el resultado de restar los numeros es "+resta.restar(8,4));
console.log("el resultado de multiplicar los numeros es "+producto.multiplicar(8,4));
console.log("el resultado de multiplicar los numeros es "+producto.multiplicar(8,0));
console.log("el resultado de dividir los numeros es "+cociente.dividir(8,4));
console.log("el resultado de dividir los numeros es "+cociente.dividir(8,0));

