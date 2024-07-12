alert("Olá, iremos iniciar o programa!!");

let numbers = [];
let option;


function menu() {
    option = prompt("################ \n \n 1 - Adicionar números \n 2- Ver soma dos valores \n 3- Números pares \n 0- Sair")

    return option;
}

/*
1- A função menu deve retornar uma string.
2- O switch deve usar a variável option, não number.
3- A soma dos números deve ser acumulada em uma variável.
4- A contagem de números pares deve ser acumulada em uma variável.
5- Deve haver um loop para permitir ao usuário continuar adicionando números ou escolhendo outras opções até decidir sair.
*/

function options() {

    option = menu();

    switch (option) {
        case "1":
            adicionarItensNaLista()
            break;
        case "2":
            let sum = 0;
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }

            alert(`A soma dos valores é: ${sum}`)
            break;

        case "3":
            const pairs = numbers.filter(num => num % 2 == 0).length;
            alert("A quantidade de números pares pares é igual a : " + pairs)
            break;

        case "0":
            return;

        default:
            ("Inválido tente novamente!")
            break;
    }
    return;
}




while (true) {
    options();
}

function adicionarItensNaLista() {
    let opt;
    while (Number(opt) != 2) {

        let number = parseFloat(prompt("Digite um número:"));
        if (isNaN(number)) {
            alert("Digite um número válido!");
            continue;
        }
        numbers.push(number);
        opt = prompt("Deseja continuar?\n 1- Sim\n 2-Não ")

    }
}

alert(" Obrigada por utilizar nossos serviços! ")