// 1.declare uma variável de nome weight

let weight

// 2. que tipo de dado é a variável acima?
console.log(typeof weight)
/*
   3. declare uma variável e atribua valores para cada um dos dados:
         *name: string
         *age: number(integer)
         *stars: number(float)
         *isSubscribed: boolean


*/

/*4. a variaável student abaixo é de que tipo de dado?

   4.1 atribua a ela as mesmas propriedades e valores do exercício 3.

 4.2 mostre no console a seguinte mensagem:

<name> de idade <age> pesa <weight> kg.

atencão, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto>
*/

let student = {
    name: "Mayk",
    age: 23,
    weight: 74.8,
    isSubscribed: true,

}


console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)


console.log(typeof student)

//  5. declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio.

let students = []
//  6. retribua valor para a variável acima, colocando dentro dela o obejto student da questão 4. (não copiar e colar o objeto, mas usar o objeto criado )

students = [
    student
]

console.log(students)

/* 
   7. coloque no console o valor da posição zero do array acima

*/
console.log (students[0])
/*

  8. crie um novo student e coloque na posição 1 do array students

  */
 const john ={
   name : "John",
   age : 23,
   weight: 74.8,
   isSubscribed: true,
 }

 students[1]= john
 
/* 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

console.log(a)
var a = 1
*/

console.log(a)
 var a = 1
