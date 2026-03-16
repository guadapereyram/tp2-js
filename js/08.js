/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456*/

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

  for (let currentRow = 1; currentRow <= maxNumber; currentRow++) {
    let currentLine = "";

    for (let currentNumber = 1; currentNumber <= currentRow; currentNumber++) {
      currentLine += currentNumber;
    }

    pyramidOutput += currentLine + "\n";
  }

  alert(pyramidOutput);
}