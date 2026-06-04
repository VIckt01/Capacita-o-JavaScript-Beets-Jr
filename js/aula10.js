function preparativoParaReceita() {
    console.log("Deixar vasilhas limpas");
    console.log("Ter os ingredientes");
    console.log("Pré-aquecer o forno");
}
preparativoParaReceita();

function soma(numeroA, numeroB) {
    let soma = numeroA + numeroB;
    console.log(soma);
}
soma(20, 23);

function liquidificador(ingrediente) {
    console.log("Estou misturando " + ingrediente);
}
liquidificador("banana");

function calculaMedia(notaA, notaB, notaC) {
    let soma = notaA + notaB + notaC;
    let media = soma / 3;
    return media;
}
let media1 = calculaMedia(23, 10, 60);
let media2 = calculaMedia(10, 20, 30);
console.log(media1);
console.log(media2);