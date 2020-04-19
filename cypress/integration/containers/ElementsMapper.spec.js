describe('ElementsMapper', () => {
    beforeEach(() => { cy.visit('/') })

    it('Should have one div element with a dynamic class', () => {
        cy.get('elements-mapper').then(ElementsMapper => {
            const element = ElementsMapper.get(0)

            cy.get('elements-mapper')
                .first()
                .find('div')
                .should('have.length', 1)
                .should('have.attr', 'class', element.containerClass)
        })
    })
})