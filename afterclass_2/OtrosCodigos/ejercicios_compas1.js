// declara un array con dos números
let numeros = [7,5];
// calcula la suma de ambas números y guardala en una variable.
let suma = numeros[0]+numeros[1];
// muestra el resultado en la consola
console.log(`La suma de los número es ${suma}`);

// Número par o impar
// a. Declara una variable con un número.
// b. Determina si es par o impar y muestra "Par" o "Impar".

let numero = 10;
if(numero%2 ===0){
    console.log(`el numero ${numero} es par`);
} else {
    console.log(`el número ${numero} es impar`);
}

let numero1 = 15;
let esMultiploDe5 = numero1 % 5 === 0;
console.log(esMultiploDe5);

/*Longitud de un array
a. Declara un array con varios valores.
b. Muestra su longitud en consola.*/

let arreglo = [6, 7, 5, 3];
console.log(`la longitud del arreglo es ${arreglo.length}`);


/* Último elemento de un array
a. Declara un array con varios elementos.
b. Obtén el último elemento y muéstralo.*/

let frutas = ["manzana", "pera", "uva", "banana"];
let ultimoElemento = frutas[frutas.length-1];
console.log(ultimoElemento);

/* Intercambio de valores
a. Declara dos variables con valores distintos.
b. Intercambia sus valores utilizando una variable auxiliar.
c. Muestra los valores intercambiados.*/

let a = 10;
let b = 15;

let auxiliar = a;
a = b;
b = auxiliar;

console.log("Valor de a:", a);
console.log("Valor de b:", b);

/* Encontrar el número mayor en un array
a. Declara un array con números.
b. Recorre el array y encuentra el número más grande.
c. Muestra el resultado.*/

let arregloNumeros = [1, 3, 4, 7, 2, 9];

let mayor = arregloNumeros[0];

for(let i = 1; i < arregloNumeros.length; i++) {
    if(arregloNumeros[i] > mayor) {
        mayor = arregloNumeros[i];
    }
    
}
console.log("el número mayor es: ", mayor);

// Tabla de multiplicar de un número
// a. Declara una variable con un número.
// b. Genera un array con su tabla de multiplicar del 1 al 10

let numeroAMultiplicar = 7;

let tabla = [];

for(let i = 0; i <= 10; i++) {
    tabla.push(numeroAMultiplicar * i);
}
console.log("la tabla de multiplicar del", numeroAMultiplicar, "es :", tabla);

// Eliminar los números negativos de un array
// a. Declara un array con números positivos y negativos.
// b. Genera un nuevo array sin los valores negativos.
// c. Muestra el resultado.

let arregloNumerosVarios = [1, -1, 2, -2, 3, -3];

let arregloNuevo = [];

for(let i = 0; i < arregloNumerosVarios.length; i++) {
    if(arregloNumerosVarios[i] >= 0){
        arregloNuevo.push(arregloNumerosVarios[i]);
    }
}
console.log("el arreglo sin numeros negativos es : ", arregloNuevo )

// Contar cuántas veces aparece un número en un array
// a. Declara un array con varios números repetidos.
// b. Declara una variable con un número específico.
// c. Cuenta cuántas veces aparece ese número en el array

let arregloNumerosRepetidos = [3, 2, 1, 3, 4, 7, 3];

let numeroEspecifico = 3;

let contador = 0;

for(let i = 0; i < arregloNumerosRepetidos.length; i++){
    if(arregloNumerosRepetidos[i] === numeroEspecifico){
        contador++;
    }
}
console.log("el número ", numeroEspecifico, "aparece", contador, "veces.");

/* El siguiente código intenta calcular la suma de los elementos de un array, pero el
resultado es incorrecto.
let numeros = [2, 4, 6, 8];
let suma = 0;
for (let i = 1; i < numeros.length; i++) {
suma += numeros[i];
}
console.log("Suma:", suma); // Debería mostrar 20*/

let numeros3 = [2, 4, 6, 8];
let suma1 = 0;

for (let i = 0; i < numeros3.length; i++) {
  suma1 = suma1 + numeros3[i];
}

console.log("Suma:", suma1); 

// Tabla de multiplicar de un numero
const n = 8;
let array5 = [];
for (let i=1; i<11; i++){
    array5[i] = i * n;
}

// Eliminar los números negativos de un array
let array6 = [145, -44, 78, 1, 977];
let array7 = [];
let indice = 0;
for (let i=0; i<array6.length; i++) {
    if (array6[i] >= 0) {
        array7[indice++] = array6[i];
        console.log(array7[indice-1])
    }
}