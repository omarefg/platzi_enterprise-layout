describe('NavLink', () => {
    before(() => {
        cy.on('window:before:load', (w) => {
          const script = w.document.createElement('script')
          script.src = '/node_modules/cypress-daywalker/cypress-daywalker.js'
          w.document.querySelector('head').appendChild(script)
        })
    })

    beforeEach(() => {
        cy.fixture('colors.json').as('colors')
        cy.visit('/')
        cy.window().then((win) => {
            cy.spy(win.console, 'log').as('spyLog')
        })
    })

    it('Should have one button element', () => {
        cy.get('nav-link').then(NavLink => {
            const element = NavLink.get(0)
            cy.get('nav-link')
                .first()
                .find('button')
                .should('have.length', 1)
                .should('have.attr', 'class', `navbar__links-container__link${element.selected ? ' navbar__links-container__link--selected' : ''}`)
                .contains(element.text)
        })
    })

    it('Should change the entry section button background color on click event', () => {
        cy.get('@colors').then(colors => {
            cy.get('.navbar__links-container__link')
                .first()
                .click()

            cy.shadowGet('entry-section')
                .shadowFirst()
                .shadowFind('button')
                .dwAttach()
                .should('have.attr', 'style', `background-color: ${colors.primary};`)
                .dwDetach()
        })
    })

    it('Should call the console.log method twice', () => {
        cy.get('.navbar__links-container__link')
            .first()
            .click()
            .get('@spyLog')
            .should('be.calledTwice')
    })

    it('Should call the _btnClickHandler method once', () => {
        cy.get('nav-link').then(NavLink => {
            const element = NavLink.get(0)
            cy.spy(element, '_btnClickHandler').as('click')
            cy.get('.navbar__links-container__link')
                .first()
                .click()
                .get('@click')
                .should('be.calledOnce')
        })
    })

    it('Should call the _composeHandler method once', () => {
        cy.get('nav-link').then(NavLink => {
            const element = NavLink.get(0)
            cy.spy(element, '_composeHandler').as('compose')
            cy.get('.navbar__links-container__link')
                .first()
                .click()
                .get('@compose')
                .should('be.calledOnce')
        })
    })

    it('Should call the _changeEntrySectionBtnColorHandler method once', () => {
        cy.get('nav-link').then(NavLink => {
            const element = NavLink.get(0)
            cy.spy(element, '_changeEntrySectionBtnColorHandler').as('changeEntryColor')

            cy.get('.navbar__links-container__link')
                .first()
                .click()
                .get('@changeEntryColor')
                .should('be.calledOnce')
        })
    })

    it('Should call the _modifyEntrySectionButtons method once', () => {
        cy.get('nav-link').then(NavLink => {
            const element = NavLink.get(0)
            cy.spy(element, '_modifyEntrySectionButtons').as('modifyEntrySectionButtons')

            cy.get('.navbar__links-container__link')
                .first()
                .click()
                .get('@modifyEntrySectionButtons')
                .should('be.calledOnce')
        })
    })

    it('Should call the _setNavbarLinksButtonsToNormality method once', () => {
        cy.get('nav-link').then(NavLink => {
            const element = NavLink.get(0)
            cy.spy(element, '_setNavbarLinksButtonsToNormality').as('setBackToNormality')

            cy.get('.navbar__links-container__link')
                .first()
                .click()
                .get('@setBackToNormality')
                .should('be.calledOnce')
        })
    })
})