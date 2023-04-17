// TESTE UNITÁRIO (TESTANDO FUNÇÕES)
// TDD - Teste driven development

const { encontrarAluno } = require("./alunos")

describe("alunos", () => {
    
    fdescribe("encontrarAluno", () => {
        it("deve retornar 'encontrei' quando encontrar um nome da lista", () => {
            const nome = "Sabino"
            const listaAluno = ["Cicero", "Luciel", "Sabino"]

            const resultado = encontrarAluno(nome, listaAluno)
            const resultadoEsperado = "Encontrei"

            expect(resultado).toBe(resultadoEsperado)
        })
        it("deve retornar 'não encontrei' quando não encontrar um nome da lista", () => {
            const nome = "Jorge"
            const listaAluno = ["Cicero", "Luciel", "Sabino"]

            const resultado = encontrarAluno(nome, listaAluno)
            const resultadoEsperado = "Não encontrei"

            expect(resultado).toBe(resultadoEsperado)      
        })
    })

    describe("filtrarAlunos", () => {
        it("deve retornar uma lista vazia se não encontrar nenhum aluno", () => {
            // Meu teste        
        })
        it("deve retornar o nome de um aluno se encontrar um aluno na lista", () => {
            // Meu teste        
        })
        it("deve retornar o nome de dois alunos se encontrar dois aluno na lista", () => {
            // Meu teste        
        })
    })

    describe("construirAluno", () => {
        it("deve retornar um objeto de aluno ao receber nome e idade", () => {
            // Meu teste        
        })
    })
})