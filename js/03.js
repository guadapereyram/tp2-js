/*3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse 
todas las cadenas concatenadas con un guión -.Nota: usar confirm() 
Esta resolución  respeta la idea de concatenar las cadenas ingresadas. No palabras*/


let combinedText = ''
let keepAddingText = true

while (keepAddingText) {
    let userText = prompt('Por favor, ingresá ingresá un texto.')
    if (combinedText === '') {
        combinedText = userText
    } else {
        combinedText += '-' + userText
    }
    keepAddingText = confirm("¿Querés ingresar otra palabra?");
} 

alert(combinedText);