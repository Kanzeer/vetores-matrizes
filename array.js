let meuArray = [];

// Adicionando elementos ao final do Array
meuArray.push(10);
meuArray.push(20);
meuArray.push(30);

console.log("Código primário: " + meuArray); //Saída: [10, 20, 30]

meuArray.push(40, 50, 60); //Adicionando vários elementos de uma vez

console.log("Adicionando elementos: " + meuArray); //Saída: [10, 20, 30, 40, 50, 60]

//Alterando o valor de um elementos do array
meuArray[2] = 35;
console.log("Alterando valor: " + meuArray)

//Removendo último elemento do array
let elementoRemovido = meuArray.pop();

console.log("Removendo elemento específico: " + elementoRemovido); //Saída: 60

console.log(meuArray);

let tamanhoArray = meuArray.length

console.log("Medindo tamanho do Array: " + tamanhoArray) //Saída: 5