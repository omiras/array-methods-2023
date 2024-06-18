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
  "Ingo"
];

// Resultado esperado: https://oscarm.tinytake.com/msc/ODg4Njg3NV8yMjM0MDcwNg

// Utiliza el método forEach para mostrar cada elemento del array por la consola

students.forEach(student => console.log(student));

// Utiliza el método findIndex para encontrar que índica ocupa el string "Maria"

const indexOfMaria = students.findIndex(student => student == "Maria")
console.log('Index of Maria: ', indexOfMaria)

// Utiliza el método some para saber si en este array existe la alumna "Katerina"

const isThereKaterina = students.some(student => student == "Katerina");
console.log('is there Katerina: ', isThereKaterina)

// Utiliza el método find para saber el primer nombre que tiene 5 o menos carácteres

const nameWithLessThan5Characters = students.find(student => student.length <= 5)
console.log('Name with less than or equal to 5 characters: ', nameWithLessThan5Characters)

// Utiliza el método every para comprobar si todos los strings de este array tienen 4 o más carácteres
const areAllNamesLargerThan4Characters = students.every(student => student.length >= 4)
console.log('Are all names larger than 4 characters: ', areAllNamesLargerThan4Characters)

// Utiliza el método filter para obtener un nuevo array que solo incluya aquellos nombres que contengan la letra i

const namesContainingI = students.filter(student => student.toLowerCase().includes('i'))

console.log('Names containing i: ', namesContainingI)

// Utiliza el método map para obtener un nuevo array donde aparezca solamente la primera inicial de cada nombre

const firstLetters = students.map(student => student[0]);
console.log('Initials Array: ', firstLetters)