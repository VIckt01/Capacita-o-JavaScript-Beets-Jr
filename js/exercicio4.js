let listaDeAlunos = ['João', 'Maria', 'Alberto', 'Carlos', 'Ana'];
let alunoNovo = 'Antônio';

if (listaDeAlunos.length < 10) {
    listaDeAlunos.push(alunoNovo);
    console.log("Conseguiu adicionar o aluno");
} else {
    console.log("Atingiu o número máximo de alunos");
}