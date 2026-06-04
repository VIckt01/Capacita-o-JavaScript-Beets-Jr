let podeDirigir = true;
console.log("O tipo da variável podeDirigir é " + typeof podeDirigir);

let stringTrue = 'true';
console.log("O tipo da variável stringTrue é " + typeof stringTrue);

let nome1 = 'João';
let nome2 = 'Ana'; 
let eIgual = (nome1 == nome2);
console.log(eIgual);

let numeroA = 20;
let numeroB = 15;
let comparacao = (numeroA == numeroB);
console.log("Os números são iguais? " + comparacao);

console.log(10 > 20);
let comparacao2 = (15 < 100);
console.log("15 é menor do que 100? " + comparacao2);

let lista = ['elemento A', 'elemento B'];
let inclui = lista.includes('elemento B');
console.log(inclui);

// Operadores Lógicos (&&, ||, !)
let nota1 = 90;
let nota2 = 70;
let nota3 = 20;
let nota4 = 100;
let passouDeAno = (nota1 > 60 && nota2 > 60 && nota3 > 60 && nota4 > 60);
console.log("O aluno passou de ano? " + passouDeAno);

let passouNoEnem = true;
let passouNoVestibularProprio = false;
let eTransferencia = false;
let entrouNaFaculdade = (passouNoEnem == true || passouNoVestibularProprio == true || eTransferencia == true);
console.log("Entrou na faculdade? " + entrouNaFaculdade);

let passouEmMatematica = true;
passouEmMatematica = !passouEmMatematica;
console.log(passouEmMatematica);