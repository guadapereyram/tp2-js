/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter
sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/

const userText = prompt("Ingresá un texto.");

if (userText === null) {
  alert("Operación cancelada.");
} else if (userText === "") {
  alert("Por favor, ingresá un texto válido.");
} else {
  let separatedText = "";

  for (let currentIndex = 0; currentIndex < userText.length; currentIndex++) {
    separatedText += userText[currentIndex];

    if (currentIndex < userText.length - 1) {
      separatedText += "-";
    }
  }

  alert(separatedText);
}