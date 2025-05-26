// Suma de dos numeros
const numeros= [4,6];
let suma=0;
for (let index=0; index < numeros.length;index++) {
    suma += numeros[index];
}
console.log(suma);

// Numero par e impar
if (suma % 2 === 0) console.log("Es par");
else console.log("Es impar");

// Multiplo de 5
console.log(`Es multiplo de 5: ${suma % 5 === 0}`);

// Longitud de un array
console.log(`El length del array 'numeros' es: ${numeros.length}`);

// Ultimo elemento de un array
console.log(`El ultimo elemento del array 'numeros' es: ${numeros[numeros.length -1] }`);

// Intercambiando de valores
let primerValor = 'a';
let segundoValor = 'b';
console.log(`Primer valor: ${primerValor} y Segundo valor: ${segundoValor}`);
let aux = primerValor;
primerValor = segundoValor;
segundoValor = aux;
console.log(`Primer valor: ${primerValor} y Segundo valor: ${segundoValor}`);

// Cuantas veces aparece un número en un array
const nuevoArray = [1, 2, 3, 4, 2, 5, 2, 6, 2];
const numeroABuscar = 2;
const conteo = nuevoArray.filter(num => num === numeroABuscar).length;

console.log(`El número ${numeroABuscar} aparece ${conteo} veces.`)

// La suma de los elementos de un array

let nuevosNumeros = [2, 4, 6, 8];
let nuevaSuma = 0;

for (let i=1; i <= nuevosNumeros.length; i++) {
    nuevaSuma += nuevosNumeros[i-1];
}

console.log(`Resultado con índice arrancando en 1 es: ${nuevaSuma}`);

// otra version de la suma de elementos de un array

nuevosNumeros = [2, 4, 6, 8];
nuevaSuma = 0;

for (let i=0; i < nuevosNumeros.length; i++) {
    nuevaSuma += nuevosNumeros[i];
}

console.log(`Resultado con índice arrancando en 0 es: ${nuevaSuma}`);