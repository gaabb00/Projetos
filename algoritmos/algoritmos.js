/*capturar 2 números e fazer
as operações matemáticas de soma, subtração, multiplicação, divisão
e resto da divisão.

e para cada operação mostrar um alerta com o resultado.
*/
alert('iremos calcular as 4 operações matemáticas!');
let firstNumber = prompt('digite o primeiro número');
let secondNumber = prompt('digite o segundo número');

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

function sum(firstNumberToSum, secondNumberToSum) {
    return firstNumberToSum + secondNumberToSum;
}
function subtraction(firstNumberToSub, secondNumberToSub) {
    return firstNumberToSub - secondNumberToSub
}
function multiplication(firstNumberToMult, secondNumberToMult) {
    return firstNumberToMult * secondNumberToMult
}
function division(firstNumberToDiv, secondNumberToDiv) {
    return firstNumberToDiv / secondNumberToDiv
}
function rest(firstNumberToRest, secondNumberToRest) {
    return firstNumberToRest % secondNumberToRest
}

const sumResult = sum(firstNumber, secondNumber);
const subtractionResult = subtraction(firstNumber, secondNumber)
const multiplicationResult = multiplication(firstNumber, secondNumber)
const divisionResult = division(firstNumber, secondNumber)
const restResult = rest(firstNumber, secondNumber)

alert('soma: ' + sumResult);
alert('subtração: ' + subtractionResult);
alert('multiplicação: ' + multiplicationResult);
alert('divisão: ' + divisionResult);
alert('resto: ' + restResult);