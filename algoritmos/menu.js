
alert("°°°MENU°°°")

let option;

function menu() {
    option = prompt(`Olá usuário! Digite o número da opção desejada:

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Remover itens do array
4. Sair do programa
`)
    option = Number(option);
}

let items = []


function operation() {

    menu()
    //caso o usuário digite 1, ele poderá cadastrar um item em uma lista

    switch (option) {
        //cadastrar itens
        case 1:
            let item = prompt("Digite o nome do item")
            items.push(item)
            break;
        //itens já cadastrados
        case 2:
            if (items.length == 0) {
                alert(" Não existem itens cadastrados");
                break;
            }
            alert(items.join("\n"))
            console.log(option);
            break;
        // sair
        case 3:

            let stringList = '';
            for (let index = 0; index < items.length; index++) {

                stringList = stringList + "\n" + `${index} - ` + items[index]
            }

            let result = prompt(`Qual item deseja remover? \ \n ${stringList} \n`)
            items.splice(result, 1);
            break;
        //remover itens do array
        case 4:
            return

        default:
            alert("Opção inválida!!!")
            break;

    }
    return;
}


while (Number(option) != 0) {
    operation()
}



