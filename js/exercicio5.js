let listaDeCompras = [];
let listaDeFrutas = ['maçã', 'banana', 'kiwi', 'ameixa', 'abacaxi'];

listaDeCompras.push('coxinha');
listaDeCompras.push('banana');
listaDeCompras.push('kiwi');
listaDeCompras.push('pão');
listaDeCompras.push('ameixa');

let numeroDeFrutas = 0;

listaDeCompras.map((elemento) => {
    if (listaDeFrutas.includes(elemento)) {
        numeroDeFrutas = numeroDeFrutas + 1;
    }
});

if (numeroDeFrutas >= 3) {
    console.log("Deu certo eu tenho 3 ou mais frutas");
} else {
    console.log("Preciso de mais frutas");
}