function encontrarAluno(nomeAluno, listaAlunos) {
    const resultadoFind = listaAlunos.find(
        (aluno) => aluno == nomeAluno
    )

    if (resultadoFind !== undefined)
        return "Encontrei"

    return "Não encontrei"
}





function filtrarAlunos(nomeAluno, listaAlunos) {
    return listaAlunos.filter((aluno) => aluno == nomeAluno)
}

function construirAluno(nome, idade) {

    const objetoAluno = {
        nome: nome,
        idade
    }

    return objetoAluno
}

module.exports = {
    encontrarAluno,
    filtrarAlunos,
    construirAluno
}