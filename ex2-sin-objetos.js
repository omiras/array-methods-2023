const students = [
  "Albertina",
  "Katerina",
  "Ester",
  "Galis",
  "Oriol",
  "Susana",
  "McCarmen",
  "Gerard",
  "Dayane",
  "Susana",
  "Diego",
  "Maria",
];

// Resultado esperado: https://oscarm.tinytake.com/msc/ODg4Njg3NV8yMjM0MDcwNg

// 1. Utiliza el método forEach para mostrar cada elemento del array por consola:
students.forEach((student, index) =>
  console.log(`Ejercicio 1: Siguiente nombre:`, student)
);

// 2. Utiliza el método findIndex para encontrar qué índice ocupa el string "Maria":
const mariaIndex = students.findIndex((student) => student === "Maria");
console.log("Ejercicio 2: Índice de 'Maria':", mariaIndex);

// 3. Utiliza el método some para saber si en este array existe la alumna "Katerina":
const hasKaterina = students.some((student) => student === "Katerina");
console.log("Ejercicio 3: ¿Existe 'Katerina'?", hasKaterina);

// 4. Utiliza el método find para saber el primer nombre que tiene 5 o menos caracteres:
const firstShortName = students.find((student) => student.length <= 5);
console.log(
  "Ejercicio 4: Primer nombre con 5 o menos caracteres:",
  firstShortName
);

// 5. Utiliza el método every para comprobar si todos los strings de este array tienen 4 o más caracteres:
const allNamesHaveAtLeastFourChars = students.every(
  (student) => student.length >= 4
);
console.log(
  "Ejercicio 5: ¿Todos los nombres tienen al menos 4 caracteres?",
  allNamesHaveAtLeastFourChars
);

// 6. Utiliza el método filter para obtener un nuevo array que solo incluya aquellos nombres que contengan la letra "i":
const namesWithLetterI = students.filter((student) => student.includes("i"));
console.log(
  "Ejercicio 6: Nombres que contienen la letra 'i':",
  namesWithLetterI
);

// 7. Utiliza el método map para obtener un nuevo array donde aparezca solamente la primera inicial de cada nombre:
const initials = students.map((student) => student[0]);
console.log("Ejercicio 7: Iniciales de los nombres:", initials);
