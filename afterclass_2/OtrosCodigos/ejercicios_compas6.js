/*1. Suma de dos números 
a. Declara un array con dos números. 
b. Calcula la suma de ambos y guárdala en una variable. 
c. Muestra el resultado en consola. 
*/
const arraySuma = [4,5]
const suma1 = arraySuma[0]+arraySuma[1]
console.log(suma1)

/*2. Número par o impar 
a. Declara una variable con un número. 
b. Determina si es par o impar y muestra "Par" o "Impar". 
*/
let variable1 = 7
if(variable1 % 2 == 0){
    console.log(`La variable1 (${variable1}) es par.`)
}else{
    console.log(`La variable1 (${variable1}) es impar.`)
}

/*3. Múltiplo de 5 
a. Declara una variable con un número. 
b. Verifica si es múltiplo de 5 y muestra true o false. 
*/
let variable2 = 12
let multiploDe5 = false
if(variable2 % 5 == 0){
    multiploDe5 = true
    console.log(`La variable2 (${variable2}) es múltiplo de 5.`)
    console.log(multiploDe5)
}else{
    console.log(`La variable2 (${variable2}) no es múltiplo de 5.`)
    console.log(multiploDe5)
}

/*8. Tabla de multiplicar de un número 
a. Declara unaa variable con un número. 
b. Genera un array con su tabla de multiplicar del 1 al 10. 
*/
const multiplicador = 3
let tablaDel3 = []
for (let index = 1; index < 11; index++) {
    tablaDel3.push(index*multiplicador)
    console.log(`${index} x ${multiplicador} = ${tablaDel3[index-1]}`)
}
console.log(tablaDel3)

/*9. Eliminar los números negativos de un array 
a. Declara un array con números positivos y negativos. 
b. Genera un nuevo array sin los valores negativos. 
c. Muestra el resultado. 
*/
let arrayPositivoNegativo = [-9,5,3,2,6,6,-4,5,88,-22,1,0,-3]
let arrayPositivo = []
for(n of arrayPositivoNegativo){
    if(n > 0){
        arrayPositivo.push(n)
    }
}
console.log(arrayPositivoNegativo)
console.log(arrayPositivo)

/*10. Contar cuántas veces aparece un número en un array 
a. Declara un array con varios números repetidos. 
b. Declara una variable con un número específico. 
c. Cuenta cuántas veces aparece ese número en el array.
*/
let numerosRepetidos = [5,5,5,5,5,5,5,5,5,5,5,3,3,3,3,6,6,6,6,6,6,6,8,8,8,8,8,8]
const numeroEspecifico = 5
let cont = 0
for(n of numerosRepetidos){
    if(n == numeroEspecifico){
        cont ++
    }
}
console.log(`El número específico (${numeroEspecifico}) aparece ${cont} veces en el array.`)