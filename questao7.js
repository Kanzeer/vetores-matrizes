//Questão 7: Crie uma matriz 3x3 e escreva uma função para verificar se a matriz é simétrica em relação à sua diagonal principal

let matriz = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 1]
];

function matrizAsimetrica(matriz) {
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < i; j++) {
            if(matriz[i][j] !== matriz[j][i]) {
                return false
            }
        }
    }
    return true
}

console.log(matrizAsimetrica(matriz));
