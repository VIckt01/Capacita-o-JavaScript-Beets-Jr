let pessoa = {
    idade: 18,
    altura: 180,
    estudar: function() {
        console.log("estudando");
    }
};
console.log(pessoa.idade);
console.log(pessoa.altura);
pessoa.estudar();

let pessoa2 = {
    idade: 20,
    altura: 160
};

let lista = [pessoa, pessoa2];
console.log(lista);