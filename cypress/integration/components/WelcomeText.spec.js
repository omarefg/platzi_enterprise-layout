describe('WelcomeText', () => {
    beforeEach(() => { cy.visit('/') })

    it('Should have one p element', () => {
        cy.get('welcome-text')
            .first()
            .find('p')
            .should('have.length', 1)
            .should('have.attr', 'class', 'welcome-text --large-interline')
    })
})