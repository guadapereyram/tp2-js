/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
Ejemplo:
Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1*/

const userText = prompt("Ingresá un texto.");

if (userText === null) {
  alert("Operación cancelada.");
} else if (userText.trim() === "") {
  alert("Por favor, ingresá un texto válido.");
} else {
  const normalizedText = userText.toLowerCase();
  let firstVowel = "";
  let firstVowelPosition = -1;

  for (let currentIndex = 0; currentIndex < normalizedText.length; currentIndex++) {
    const currentCharacter = normalizedText[currentIndex];

    if (
      currentCharacter === "a" ||
      currentCharacter === "e" ||
      currentCharacter === "i" ||
      currentCharacter === "o" ||
      currentCharacter === "u"
    ) {
      firstVowel = currentCharacter;
      firstVowelPosition = currentIndex;
      break;
    }
  }

  if (firstVowelPosition === -1) {
    alert("El texto no contiene vocales.");
  } else {
    alert(`La vocal '${firstVowel}' está en la posición ${firstVowelPosition}.`);
  }
}