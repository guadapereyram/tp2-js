/*2- Escribir un programa que solicite una nota (número) de 0  a 10. 
Luego mostrar la calificación en un alert según los siguientes rangos de nota:
Valido que sea un número
Valido que esté entre 0 y 10*/

const userGrade = Number(prompt('Ingresá una nota de 0  a 10, por favor'))

if (isNaN(userGrade)) {
    alert('Por favor, ingresá un número válido.')
} else if (userGrade < 0 || userGrade >10) {
    alert('Número erróneo. Intentá con otro.')
} else if (userGrade >= 0 && userGrade <= 2) {
    alert('Muy deficiente')
} else if (userGrade >= 3 && userGrade <= 4) {
    alert('Insuficiente')
} else if (userGrade >= 5 && userGrade <= 6) {
    alert('Suficiente')
} else if (userGrade === 7) {
    alert('Bien')
} else if (userGrade >= 8 && userGrade <= 9) {
    alert('Notable')
} else if (userGrade === 10) {
    alert('Sobresaliente')
}