//Questão 7: Crie uma matriz 3x3 e escreva uma função para verificar se a matriz é simétrica em relação à sua diagonal principal

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matriz);

let soma = 0;
for(let i = 0; i < matriz.length; i++) {
    for(let j = 0; j < matriz[i].length; j++){
        soma +=matriz[i][j];
    }
    console.log(soma);
}
