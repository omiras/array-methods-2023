/**
 * Dado el siguiente array de números, aplica adecuadamente cada uno de los métodos de array obteenr la información requerida
 *
 * Resultado esperado: https://oscarm.tinytake.com/msc/ODg4NjgxMF8yMjM0MDYyNg
 */

const numbers = [-5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

/**
 * Utiliza la método forEach para mostrar cada número por consola
 */

numbers.forEach(n => console.log('ex 1: ',n))

/**
 * Utiliza el método find para encontrar el primer número mayor de 10
 */

const mayor10 = numbers.find(n => n> 10);
console.log('ex 2: ', mayor10)

/**
 * Utliza el método some para saber si existe un número mayor de 20
 */

const isBiggerThan20 = numbers.some(n => n>20);
console.log(isBiggerThan20)

/**
 * Utiliza el método every para comprobar si todos los números de este array son impares
 */

const areAllNumsOdd = numbers.every(n => n%2 !== 0);
console.log(areAllNumsOdd)

/**
 * Utiliza el método filter para obtener un nuevo array con todos los números que son mayores de 3 pero menores de 9
 */

const numbersBiggerThan3Arr = numbers.filter(n => n>3)
console.log('bigger than 3 array: ', numbersBiggerThan3Arr)

/**
 * Utiliza el método map para obtener otro array donde, para cada posición, ontengamos un -1 si el número que ocupaba aquella posición es negativo, y un +1 si el nuemero es positivo
 * [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
 */

const arrayOfOnes = numbers.map(n => {
    if (n < 0) {
        return -1;
    } else {
        return 1;
    }
})

console.log('Array of Ones: ', arrayOfOnes);