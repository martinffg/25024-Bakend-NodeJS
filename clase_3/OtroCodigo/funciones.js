// console.log("Hola mundo")

// Declaracion
// function saludar() {
//     // bloque de ejecucion
//     console.log("Hola como estan? Se acerca el feriado");
// }

// Funcion anonima
// const saludar = function () {
//     // bloque de ejecucion
//     console.log("Hola como estan?");
// };

// Funcion Flecha
// const saludar = () => {
//     // bloque de ejecucion
//     console.log("Hola como estan?");
// };

// // invocacion
// saludar();
// saludar();
// saludar();
// saludar();
// saludar();

// Funcion Con Parametros
// const saludarConParametros = (parametro) => {
//     console.log('Hola, ' + parametro)
// }

// saludarConParametros("Javier While");
// saludarConParametros("Axel");
// saludarConParametros("Triana");
// saludarConParametros(false);

//  const add = (num1,num2) => {
//     if(!isNaN(num1)&& !isNaN(num2)) {
//         console.log(num1 + num2);
//     } else {
//         console.log('error');
//     }
//  }

//  add(1,3);      // 1
//  add(0,-3);     // -3
//  add(0,false);  // 0
//  add(0,"false");// error
//  add("1","1");  // 11


//  const substract = (num1,num2) => {
//     if(!isNaN(num1)&& !isNaN(num2)) {
//         return num1 - num2;
//     } else {
//         return "Error";
//     }
//  }

//  console.log(substract(1,3));      // -2
//  console.log(substract(0,-3));     // 3
//  console.log(substract(0,false));  // 0
//  console.log(substract(0,"false"));// Error
//  console.log(substract("1","1"));  // 0

//  let resultado = substract(1,4);
//  console.log(resultado);        // -3
//  resultado = substract(1,"khdsfas");
//  console.log(resultado);        // Error

 // LAS FUNCIONES FLECHA TIENEN UN RETURN IMPLÍCITO
//  const multi=(num1,num2)=> num1 * num2;
//  console.log(multi(3,5));
//  console.log(multi(3,"locro"));

// Funciones de orden superior (HOF)
function calculator(a, b, action) {
    return action(a,b);
}

console.log(calculator(20, 10, (a,b) => a + b)); // 30
console.log(calculator(20, 10, (a,b) => a - b)); // 10

function saludo(nombre ='Desconocido'){
    return 'Hola ' + nombre;
}

function procesarNombre(nombre,callback) {
    return callback(nombre); // saludo(nombre)
}

// boton.addEventListener('click', ()=>{funcionalidad});
console.log(procesarNombre("Gabriel", saludo)); // Hola Gabriel

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array);
// console.log(array[7]);
// // agregar al final
// array.push(10);
// console.log(array);
// // agregar al principio
// array.unshift(33);
// console.log(array);
// // quitar el primer elemento
// console.log(array.shift())
// console.log(array);
// // quitar el ultimo elemento
// console.log(array.pop());
// console.log(array);
// quita los elementos del array definido en los parámetros
// console.log(array.splice(1,3));
// console.log(array);
// copiar elementos dentro del array
// console.log(array.splice(0,3));
// console.log(array);
// console.log(array)
// funcion find, que es HOF.  Devuelve el primer elemento que cumple con la condicion definida por la función flecha.
// const encontrado = array.find((item) => item>4);
// console.log(encontrado);
// const encontrado2 = array.find((item) => item<4);
// console.log(encontrado2);
// const encontrado3 = array.find((item) => {
//     return item > 4;
// });
// console.log(encontrado3);

// filtrado: devuelve todos los valores que cumplen la condición.
const filtrado = array.filter((item) => {
    return item > 4;
});
console.log(filtrado);

// devuelve un array con los resultados de las funciones para cada elemento
const nuevoArray = array.map((item) => {
    return item * 40;
});
console.log(nuevoArray);
// uso la funcion join para devolver todos los elementos en una cadena.
const nuevoArray2 = array.join();  // 1,2,3,4,5,6,7,8,9
console.log(nuevoArray2);

// uso la funcion reduce para reducir el array a un solo valor acumulado.
const initialValue = 0;
const nuevoArray3 = array.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue);  
console.log(nuevoArray3);



