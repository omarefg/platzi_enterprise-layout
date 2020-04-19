describe('ServiceLink', () => {
    beforeEach(() => { cy.visit('/') })

    it('Should have one a element', () => {
        cy.get('service-link').then(ServiceLink => {
            const element = ServiceLink.get(0)
            cy.get('service-link')
                .first()
                .find('a')
                .should('have.length', 1)
                .should('have.attr', 'class', 'services__service')
                .contains(element.service)
        })
    })

    it('Should have one svg element', () => {
        cy.get('service-link')
            .first()
            .find('svg')
            .should('have.length', 1)
            .should('have.attr', 'width', '1em')
            .should('have.attr', 'height', '1em')
            .should('have.attr', 'enable-background', 'new 0 0 551.13 551.13')
            .should('have.attr', 'viewBox', '0 0 551.13 551.13')
    })

    it('Should have one path element', () => {
        cy.get('service-link')
            .first()
            .find('path')
            .should('have.length', 1)
    })
})