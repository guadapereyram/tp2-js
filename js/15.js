/*15- Realiza un script que cuente el número de vocales que tiene un texto.*/

const userText = prompt("Ingresá un texto.");

if (userText === null) {
  alert("Operación cancelada.");
} else if (userText.trim() === "") {
  alert("Por favor, ingresá un texto válido.");
} else {
  const normalizedText = userText.toLowerCase();
  let vowelCount = 0;

  for (
    let currentIndex = 0;
    currentIndex < normalizedText.length;
    currentIndex++
  ) {
    const currentCharacter = normalizedText[currentIndex];

    if (
      currentCharacter === "a" ||
      currentCharacter === "e" ||
      currentCharacter === "i" ||
      currentCharacter === "o" ||
      currentCharacter === "u"
    ) {
      vowelCount++;
    }
  }

  alert(`El texto tiene ${vowelCount} vocales.`);
}
