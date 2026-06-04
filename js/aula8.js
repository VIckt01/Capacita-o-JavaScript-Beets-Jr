let nota = 7;
let notaMinimaParaPassar = 6;

if (nota >= notaMinimaParaPassar) {
    console.log("Aluno passou");
} else {
    console.log("O aluno não passou");
}

let frutas = ['banana', 'kiwi', 'ameixa', 'morango'];
frutas.push('abacate');

if (frutas.includes('abacate')) {
    console.log("A lista está completa");
} else {
    console.log("Está faltando abacate");
}