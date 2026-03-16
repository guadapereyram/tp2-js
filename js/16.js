/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. 
Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/

const userText = prompt("Ingresá una cadena de texto.");

if (userText === null) {
  alert("Operación cancelada.");
} else if (userText === "") {
  alert("Por favor, ingresá un texto válido.");
} else {
  let reversedText = "";

  for (let currentIndex = userText.length - 1; currentIndex >= 0; currentIndex--) {
    reversedText += userText[currentIndex];
  }

  alert(reversedText);
}