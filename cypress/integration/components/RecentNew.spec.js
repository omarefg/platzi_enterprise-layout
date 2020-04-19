describe('RecentNew', () => {
    beforeEach(() => { cy.visit('/') })

    it('Should have one h4 element', () => {
        cy.get('recent-new').then(RecentNew => {
            const element = RecentNew.get(0)
            cy.get('recent-new')
                .first()
                .find('h4')
                .should('have.length', 1)
                .should('have.attr', 'class', 'recent-new__title')
                .contains(element.date)
        })
    })

    it('Should have one p element', () => {
        cy.get('recent-new').then(RecentNew => {
            const element = RecentNew.get(0)
            cy.get('recent-new')
                .first()
                .find('p')
                .should('have.length', 1)
                .should('have.attr', 'class', 'recent-new__text --large-interline')
                .contains(element.text)
        })
    })
})