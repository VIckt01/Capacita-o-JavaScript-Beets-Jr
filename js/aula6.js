let lista = ['arroz', 'feijão', 'carne', 'azeite', 'pão'];

lista.map((item) => {
    console.log(item);
});

let listaNotas = [8, 9.5, 4, 10, 6];
listaNotas.map((itemGenerico) => {
    let numero = itemGenerico + 1;
    console.log(numero);
});

console.log("O tamanho da lista é " + lista.length);
lista.push('manteiga');
lista.push('detergente');
console.log("O novo tamanho é " + lista.length);