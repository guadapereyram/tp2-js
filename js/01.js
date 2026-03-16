/*1- Escribir un programa que solicite la edad y si es mayor de 18 años 
mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/

const userAge = Number(prompt('Ingresá tu edad, por favor'))

if (isNaN(userAge)) {
    console.log('Por favor, ingresá un número válido.')
} else if (userAge > 18) {
    console.log('Usted ya puede conducir')
} else {
    console.log('Usted no es mayor de 18 años. No puede conducir.')
}

    
