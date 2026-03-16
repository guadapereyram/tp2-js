/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666*/

let pyramidOutput = "";

for (let currentNumber = 1; currentNumber <= 30; currentNumber++) {
  let currentLine = "";

  for (let repeatCount = 1; repeatCount <= currentNumber; repeatCount++) {
    currentLine += currentNumber;
  }

  pyramidOutput += currentLine + "\n";
}

alert(pyramidOutput);