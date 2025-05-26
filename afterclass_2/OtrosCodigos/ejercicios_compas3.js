/**
 * 1. Suma de dos números
 * 
 */

const numeritos = [2, 4];
let calculo = numeritos[0] + numeritos[1];
console.log(`La suma da ${calculo}`);

/**
 * 2. Número par o impar
 */

let numero = 5;
console.log(numero%2 == 0 ? "El número es par" : "El número es impar");

/**
 * 3. Múltiplo de 5
 */

let multiplo = 1;

console.log(multiplo%5 == 0 ? true : false);

/**
 * 4. Longitud de un array
 */

const nombres = ["Ezequiel", "Facundo", "Matias"]
console.log(`La longitud del array es de ${nombres.length} elementos.`);

/**
 * 5. Último elemento de un array
 */

console.log(`El ultimo elemento del array es ${nombres[nombres.length - 1]}`)

/**
 * 6. Intercambio de valores
 */

let a = 10;
let b = 5;

let aux = a;

console.log(`La primer variable vale ${a} y la segunda ${b}`);

a = b;
b = aux;

console.log(`Ahora la primer variable vale ${a} y la segunda ${b}`);

/**
 * 7. Encontrar el número mayor en un array
 */

const arrayDeNumeros = [5, 7, 1, 9, 2, 14, 25];
let resultado = arrayDeNumeros[0];

for(let i = 0; i<arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] > resultado){
        resultado = arrayDeNumeros[i];
    }
}

console.log(`El número mas alto del array es el ${resultado}`);

/**
 * 8. Tabla de multiplicar de un número
 */

let numeroTabla = 5;
const tablaNumero = [];

for(let i = 1; i <= 10; i++){
    tablaNumero.push(numeroTabla * i);
}

console.log(`La tabla de multiplicar del número ${numeroTabla} es ${tablaNumero}`);

/**
 * 9. Eliminar los números negativos de un array
 */

const nuevoArrayNumeros = [5, 1, -4, 8, -15, 9, -3];
const arrayFiltrado = nuevoArrayNumeros.filter(numero => numero > 0);
console.log(arrayFiltrado);

/**
 * 10. Contar cuantas veces aparece un número en un array
 */

const arrayNumerosRepetidos = [5, 3, 2, 7, 5, 9, 5];
let numeroABuscar = 5;
let ocurrencias = 0;

for(let i = 0; i<arrayNumerosRepetidos.length; i++){
    if(arrayNumerosRepetidos[i] == numeroABuscar){
        ocurrencias += 1;
    }
}

console.log(`El número ${numeroABuscar} aparece ${ocurrencias} ${ocurrencias == 1 ? 'vez' : 'veces'} en el arreglo`);

/**
 * EJERCICIO ADICIONAL: Encontrar y corregir un error
 * 
 * Respuesta: el resultado es incorrecto porque i se inicializo en 1, cuando deberia ser 0, ya que el primer elemento de cada arreglo empieza con el indice 0, al ser 1, el bucle for comenzará a sumar desde el 4 y no desde el 2
 */

let numeros = [2, 4, 6, 8];
let suma = 0;

for(let i = 0; i<numeros.length; i++){
    suma += numeros[i];
}

console.log("Suma: ", suma);