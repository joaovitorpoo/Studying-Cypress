/// <reference types="cypress"/>

// O .skip pula o metodo, impede dele ser executado. 
it.skip ('Teste Externo....', () => {

})

describe('Grupo de Testes', () => {
    describe('Grupo de Testes Mais Especificos 1', () => {
        it('Teste Especifico 1', () => {

        })

        it ('Teste Especifico 2', () => {

        })

        it('Teste Especifico 3', () => {

        })
    })
    
    // O .only faz so o grupo ou teste ser executado. 
    describe.only('Grupo de Testes Mais Especificos 2', () => {
        it ('Teste Especifico 1', () => {

        })

        it ('Teste Especifico 2', () => {

        })
    })

    it('Teste Interno....', () => {

    })
})