// console.log("Hola desde Node JS");
// console.log("Hola Mundo!");
// [2,3,4,5].reduce((acc,item) => acc+=item,0);
// const personaje={name:"Javier", apellido:"While", edad:23};
// console.log(personaje);
// const PI = 3.14159;
// console.log(PI);

const { log } = require("node:console");
const fs = require("node:fs");
// import fs from 'fs';

let texto ="Estoy creando un archivo con NODE";

console.log(fs);
fs.writeFile('./archivo.txt', texto, ()=>{
    try {
        console.log("Exito");
    } catch (error) {
        console.log(error);
    }

});

