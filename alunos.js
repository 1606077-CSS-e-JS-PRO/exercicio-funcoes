function encontrarAluno(nomeAluno, listaAlunos) {
    const resultadoFind = listaAlunos.find(
        (aluno) => aluno == nomeAluno
    )

    if (resultadoFind !== undefined)
        return "Encontrei"

    return "Não encontrei"
}





function filtrarAlunos(nomeAluno, listaAlunos) {

}

function construirAluno(nome, idade) {

}

module.exports = {
    encontrarAluno,
    filtrarAlunos,
    construirAluno
}