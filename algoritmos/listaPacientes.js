//crie uma lista de pacientes


const patients = [
    {
        name: "Luiz",
        age: 20,
        weight: 70,
        height: 190,
    },
    {
        name: "Alexandra",
        age: 27,
        weight: 65,
        height: 185,
    },
    {
        name: "Gean",
        age: 42,
        weight: 55,
        height: 187,

    },
]


/*for(let index = 0; index < patients.length; index++){
   patientsNames [index] = patients[index].name
}
*/
/*let patientsNames = [];

for (let patient in patients) {
    patientsNames.push(patients[patient]);
}
console.log(patientsNames);
*/

alert(`
    Paciente ${patients[0].name} possui o IMC de: Y
    ${patients[0].weight / ((patients[0].height / 100) ** 2).toFixed(2,2)}
`)

alert(`
    Paciente ${patients[1].name} possui o IMC de: Y
    ${patients[1].weight / ((patients[1].height / 100) ** 2).toFixed(2,2)}
`)

alert(`
    Paciente ${patients[2].name} possui o IMC de: Y
    ${patients[2].weight / ((patients[2].height / 100) ** 2).toFixed(2,2)}
`)