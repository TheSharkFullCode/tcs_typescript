"use strict";
function hola(name) {
    console.log(`binevenido ${name}`);
}
hola("oscar");

let myname = "Oscar";
let edad = 18;

function Saludar(myname) {
    return `bienvenido ${myname}`;
}

// -------------------------------------------------------
// tipos de datos ------------------------->

let numero = 10;
let texto = "bienvenido";
let boolean = true;
let listanumber = [1,2,3,4,5];
let objeto = {nombre:"oscar",edad:30};

function Myfunction() {
    console.log('welcome');    
}

let persona = {
    nombre: 'danilo',
    edad:18,
    ciudad:'madrid'
}
console.log(persona.ciudad);
persona.edad = 33; //asi modificamos el valor actual del objeto por el nuevo valor

persona.trabajo = "programador" // asi agregamos una nueva propiedad al objeto.