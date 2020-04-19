describe('SolutionCard', () => {
    beforeEach(() => { cy.visit('/') })

    it('Should have three div elements', () => {
        cy.get('solution-card')
            .first()
            .find('div')
            .should('have.length', 3)
    })

    it('Should have first div element with particular class', () => {
        cy.get('solution-card')
            .first()
            .find('div')
            .first()
            .should('have.attr', 'class', 'solution-card')
    })

    it('Should have second div element with particular class', () => {
        cy.get('solution-card')
            .first()
            .find('div').eq(1)
            .should('have.attr', 'class', 'solution-card__img-container')
    })

    it('Should have third div element with particular class', () => {
        cy.get('solution-card')
            .first()
            .find('div').eq(2)
            .should('have.attr', 'class', 'solution-card__text-container')
    })

    it('Should have one img element', () => {
        cy.get('solution-card').then(SolutionCard => {
            const element = SolutionCard.get(0)
            cy.get('solution-card')
                .first()
                .find('img')
                .should('have.length', 1)
                .should('have.attr', 'height', '100%')
                .should('have.attr', 'width', '100%')
                .should('have.attr', 'src', element.image)
        })
    })

    it('Should have one h4 element', () => {
        cy.get('solution-card').then(SolutionCard => {
            const element = SolutionCard.get(0)
            cy.get('solution-card')
                .first()
                .find('h4')
                .should('have.length', 1)
                .should('have.attr', 'style', `color:${element.color}`)
                .contains(element.head)
        })
    })

    it('Should have one p element', () => {
        cy.get('solution-card').then(SolutionCard => {
            const element = SolutionCard.get(0)
            cy.get('solution-card')
                .first()
                .find('p')
                .should('have.length', 1)
                .contains(element.text)
        })
    })
})