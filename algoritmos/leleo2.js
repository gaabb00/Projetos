alert("°°°Olá,iremos começar nosso programa°°°")

// let wheight = prompt("Qual é o peso da pessoa 1?")
// let height = prompt("Qual a altura da pessoa1?")
let weight;
let height;
let persons = []

function all() {
    let totalPersons = prompt("Quantas pessoas você deseja avaliar?");
    totalPersons = parseFloat(totalPersons);

    for (let i = 0; i < totalPersons; i++) {
        let person = {
            weight: parseFloat(prompt("Qual o peso da pessoa " + (i + 1) + "?")),
            height: parseFloat(prompt("Qual a altura da pessoa " + (i + 1) + "?")),

        };
        persons.push(person);
    }
}

function average() {
    let sumTot = 0;
    let contMore90 = 0;
    let contMore50 = 0;
    let averageTot = 0;

    for (let index = 0; index < persons.length; index++) {
        sumTot += persons[index].height;

        averageTot = sumTot / persons.length;

        if (persons[index].weight >= 90) {
            contMore90++;
        }
        if (persons[index].weight < 50 && persons[index].height < 1.60) {
            contMore50++;
        }
    }

    alert(`A média de altura do grupo é:  ${averageTot.toFixed(2)} \n A quantidade de pessoas que pesam mais que 90 kg é: ${contMore90} \nA quantidade de pessoas com menos de 50KG e menos de 1.60M é:${contMore50}`)
    return averageTot;

}

all();
average();                                                                                                                                                                                                                                                                                                                            




                                                                                         
                                                 