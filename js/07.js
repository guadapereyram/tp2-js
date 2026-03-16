/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/

const userInput = prompt("Ingresá un número entero no mayor a 50.");
const maxNumber = Number(userInput);

if (userInput === null) {
  alert("Operación cancelada.");
} else if (userInput.trim() === "") {
  alert("Por favor, ingresá un valor.");
} else if (isNaN(maxNumber)) {
  alert("Por favor, ingresá un número válido.");
} else if (!Number.isInteger(maxNumber)) {
  alert("Por favor, ingresá un número entero.");
} else if (maxNumber < 1 || maxNumber > 50) {
  alert("El número debe estar entre 1 y 50.");
} else {
  let pyramidOutput = "";

  for (let currentNumber = maxNumber; currentNumber >= 1; currentNumber--) {
    let currentLine = "";

    for (let repeatCount = 1; repeatCount <= currentNumber; repeatCount++) {
      currentLine += currentNumber;
    }

    pyramidOutput += currentLine + "\n";
  }

  alert(pyramidOutput);
}