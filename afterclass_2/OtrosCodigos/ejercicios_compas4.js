/* 
1. Suma de dos números
*/  
let nums = [5, 10];
let suma = nums[0] + nums[1];
console.log(`---------------------------------\nEJERCICIO: Suma de dos números\nLa suma de los numeros: ${nums[0]} y ${nums[1]} es ${suma}\n---------------------------------`);
/* 
2. Número par o impar
*/
let number = 6;
console.log(`EJERCICIO: Número par o impar\nEl numero ${number} es ${number % 2 === 0 ? 'Par' : 'Impar'}\n---------------------------------`);

/*
3. Múltiplo de 5
*/
let num = 10;
console.log(`EJERCICIO: Múltiplo de 5\nEl numero ${num} es multiplo de 5? : ${num % 5 === 0}\n----------------------------------`);

/*
4. Longitud de un array
*/    
let arreglo = [1,2,3,4,5,19,8,7,6];
console.log(`EJERCICIO: Longitud de un array\n${arreglo.length} es la longitud del arreglo\n--------------------------------`);
/*
5. Último elemento de un array
*/
console.log(`EJERCICIO: Último elemento de un array\nEl último elemento del arreglo es ${arreglo[arreglo.length - 1]}\n--------------------------------`);
/*
6. Intercambio de valores
*/
let a = 9;
let b = "Hola";
let aux = a;
console.log(`EJERCICIO: Intercambio de valores\nLos valores iniciales son: a = ${a} y b = ${b}`);
a = b;
b = aux;
console.log(`Los nuevos valores son: a = ${a} y b = ${b}\n--------------------------------`);

/*
7. Encontrar el número mayor en un array
*/

let maxnum = 0;
for (let i = 0; i < arreglo.length; i++){
    if (arreglo[i] > maxnum){
        maxnum = arreglo[i]
    }
}
console.log(`EJERCICIO: Encontrar el número mayor en un array\nEl número mayor del arreglo es ${maxnum}\n--------------------------------`);

/*
8. Tabla de multiplicar de un número
*/
let numerito = 2;
let tablanumerito = [];
for (let i = 1; i <= 10; i++){
    tablanumerito.push(numerito * i);
}
console.log(`EJERCICIO: Tabla de multiplicar de un número\nLa tabla de multiplicar de ${numerito} es: ${tablanumerito}\n--------------------------------`);

/*
9. Eliminar los números negativos de un array
*/
numposneg = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10]
console.log(`EJERCICIO: Eliminar los números negativos de un array\nEl arreglo original es: ${numposneg}`);
let numpos = numposneg.filter(num => num >= 0);
console.log(`El nuevo arreglo es: ${numpos}\n--------------------------------`);

/*
10.Contar cuántas veces aparece un número en un array
*/
let numre = [1,4,3,4,5,6,4,8,9,10,1,2,3,4,5];
let contador = 0;
let nume = 4;
for (let i = 0; i < numre.length; i++){
    if (numre[i] === nume){
        contador++;
    }
}
console.log(`EJERCICIO: Contar cuántas veces aparece un número en un array\nEl arreglo de numeros repetidos es: ${numre}`);
console.log(`El número ${nume} aparece ${contador} veces en el arreglo\n--------------------------------`);

/*
11-Ejercicio adicional: Corregir el error en el código.
*/
let numeross = [2,4,6,8];
let summ = 0;
for (let i = 1; i < numeross.length; i++){
    summ += numeross[i];
}
console.log(`EJERCICIO: (Extra)Corregir el error en el código.\nSuma: ${summ}`); // deberia mostrar 20. 
console.log(`El resultado es incorrecto porque inicializamos erroneamente la variable de iteración \n"i" en 1 cuando los indices de un arreglo comienzan en 0.\npara solucionarlo simplemente tenemos que inicializarla en 0 para que se tengan en cuenta todos los elementos del arreglo\n-------------------------------`); // 20