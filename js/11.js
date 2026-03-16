/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp*/

const firstName = prompt("Ingresá el primer nombre.");
const firstAgeInput = prompt("Ingresá la edad de la primera persona.");

const secondName = prompt("Ingresá el segundo nombre.");
const secondAgeInput = prompt("Ingresá la edad de la segunda persona.");

const thirdName = prompt("Ingresá el tercer nombre.");
const thirdAgeInput = prompt("Ingresá la edad de la tercera persona.");

const firstAge = Number(firstAgeInput);
const secondAge = Number(secondAgeInput);
const thirdAge = Number(thirdAgeInput);

if (
  firstName === null || secondName === null || thirdName === null ||
  firstAgeInput === null || secondAgeInput === null || thirdAgeInput === null
) {
  alert("Operación cancelada.");
} else if (
  firstName.trim() === "" || secondName.trim() === "" || thirdName.trim() === ""
) {
  alert("Por favor, ingresá los tres nombres.");
} else if (
  isNaN(firstAge) || isNaN(secondAge) || isNaN(thirdAge)
) {
  alert("Por favor, ingresá edades válidas.");
} else {
  const highestAge = Math.max(firstAge, secondAge, thirdAge);

  let oldestPersonName = "";

  if (highestAge === firstAge) {
    oldestPersonName = firstName;
  } else if (highestAge === secondAge) {
    oldestPersonName = secondName;
  } else {
    oldestPersonName = thirdName;
  }

  alert(`La persona de mayor edad es ${oldestPersonName}.`);
}