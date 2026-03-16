/* 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10*/

let outputText = "";

for (let currentNumber = 1; currentNumber <= 500; currentNumber++) {
  let currentLine = `${currentNumber}`;

  if (currentNumber % 4 === 0) {
    currentLine += " (Múltiplo de 4)";
  }

  if (currentNumber % 9 === 0) {
    currentLine += " (Múltiplo de 9)";
  }

  outputText += currentLine + "\n";

  if (currentNumber % 5 === 0) {
    outputText += "-----------------------------\n";
  }
}

alert(outputText);