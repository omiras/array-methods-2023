const numbers = [-5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// 1. Utiliza el método forEach para mostrar cada número por consola:
numbers.forEach((num) => console.log(`Ejercicio 1: Siguiente número`, num));

// 2. Utiliza el método find para encontrar el primer número mayor de 10:
const firstNumberGreaterThan10 = numbers.find((num) => num > 10);
console.log(
  "Ejercicio 2: Primer número mayor de 10:",
  firstNumberGreaterThan10
);

// 3. Utiliza el método some para saber si existe un número mayor de 20:
const existsNumberGreaterThan20 = numbers.some((num) => num > 20);
console.log(
  "Ejercicio 3: ¿Existe número mayor de 20?",
  existsNumberGreaterThan20
);

// 4. Utiliza el método every para comprobar si todos los números de este array son impares:
const areAllNumbersOdd = numbers.every((num) => num % 2 !== 0);
console.log("Ejercicio 4: ¿Son todos los números impares?", areAllNumbersOdd);

// 5. Utiliza el método filter para obtener un nuevo array con todos los números que son mayores de 3 pero menores de 9:
const filteredNumbers = numbers.filter((num) => num > 3 && num < 9);
console.log(
  "Ejercicio 5: Números mayores de 3 pero menores de 9:",
  filteredNumbers
);

// 6. Utiliza el método map para obtener otro array donde, para cada posición, obtengamos un -1 si el número que ocupaba esa posición es negativo, y un +1 si el número es positivo:
const mappedNumbers = numbers.map((num) => (num < 0 ? -1 : 1));
console.log(
  "Ejercicio 6: Nuevos números con -1 para negativos y +1 para positivos:",
  mappedNumbers
);
