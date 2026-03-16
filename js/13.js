/*13- Realiza un script que pida un texto y lo muestre en mayúsculas.*/

const userText = prompt("Ingresá un texto.");

if (userText === null) {
  alert("Operación cancelada.");
} else if (userText.trim() === "") {
  alert("Por favor, ingresá un texto válido.");
} else {
  const uppercaseText = userText.toUpperCase();
  alert(uppercaseText);
}
