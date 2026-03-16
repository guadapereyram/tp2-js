let userInput = prompt('Ingresá un número. Presioná "Cancelar" para finalizar.')
let totalSum = 0;

while (userInput !== null) {
  let userNumber = Number(userInput);

  if (isNaN(userNumber)) {
    alert('Por favor, ingresá un número válido.');
  } else {
    totalSum += userNumber;
  }

  userInput = prompt('Ingresá otro número. Presioná "Cancelar" para finalizar.');
}

alert(`La suma total es ${totalSum}`);

