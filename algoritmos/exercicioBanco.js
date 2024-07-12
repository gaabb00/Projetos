
/*pra uma conta bancária , leia o número, o saldo, o tipo de operação a ser realizada
(depósito ou retirada)e o valor da operação. Após, determine e mostre o novo
saldo. se o saldo ficar negativo, deve ser mostrada, também, a mensagem conta estourada"
*/
alert('::::CONTA BANCÁRIA::::')
let numeroConta = prompt('Qual a numeração da conta?');
let balanceConta = prompt('Qual o saldo da conta');
let operation;

function menu() {
    let indice = prompt`Qual operação deseja realizar?\nDepósito (1)\nSaque (2)\nSaldo (3)\nSair(0)`

    return indice;
}

function options() {
    operation = menu()

    switch (operation) {
        case "1":
            deposit()
            break;
        case "2":
            remove()
            break;
        case "3":
            balance()
            break;
        case "0":
            return

        default:
            alert('Opção inválida!');
            break
    }
}

function deposit() {
    const valorADepositar = prompt('Qual valor a ser depósito? ');
    const deposited = Number(valorADepositar)

    if (isNaN(deposited) || deposited <= 0) {
        alert("valor inválido para depósito");
        return;
    }

    balanceConta = Number(balanceConta) + Number(deposited);
    alert("O valor de R$ " + deposited + " depositado com sucesso!");
}

function remove() {
    const remove = prompt('Qual valor do saque?');
    const removed = Number(remove)

    if (isNaN(remove) || remove <= 0) {
        alert("Valor inválido!!");
        return
    }

    if (removed > balanceConta) {
        alert("Saldo insuficiente!!");
        return;
    }

    balanceConta -= removed;
    alert("Valor de R$ " + removed + " sacado com sucesso!");
}

function balance() {
    let value = Number(balanceConta).toFixed(2);
    alert('O saldo é: ' + value)
}

while (Number(operation) != 0) {
    options()
}
alert("Obrigado por utilizar nossos serviços!")
