/*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
Ejemplo: 
Input:  40773821 
Output: ‘L’*/

const dniLetters = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

let userInput = prompt(
  'Ingresá un número de DNI sin puntos ni letras. Presioná "Cancelar" para finalizar.',
);

while (userInput !== null) {
  const trimmedInput = userInput.trim();
  const dniNumber = Number(trimmedInput);

  if (trimmedInput === "") {
    alert(
      "No ingresaste ningún valor. Por favor, ingresá un número de DNI válido.",
    );
  } else if (isNaN(dniNumber)) {
    alert("Ingresaste un valor no válido. Por favor, ingresá solo números.");
  } else if (!Number.isInteger(dniNumber)) {
    alert("El DNI debe ser un número entero, sin decimales.");
  } else if (dniNumber < 0 || dniNumber > 99999999) {
    alert("El número de DNI debe estar entre 0 y 99999999.");
  } else {
    const letterIndex = dniNumber % 23;
    const dniLetter = dniLetters[letterIndex];

    alert(`La letra correspondiente al DNI ${dniNumber} es ${dniLetter}.`);
  }

  userInput = prompt(
    'Ingresá otro número de DNI sin puntos ni letras. Presioná "Cancelar" para finalizar.',
  );
}
