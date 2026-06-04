function avaliarAluno(porcentagemDePresenca, notaA, notaB) {
    let media = (notaA + notaB) / 2;
    if (media > 6 && porcentagemDePresenca > 75) {
        return "passou";
    } else {
        return "reprovou";
    }
}

let avaliacaoDoAluno = avaliarAluno(76, 6, 10);
console.log(avaliacaoDoAluno);