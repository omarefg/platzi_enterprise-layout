describe('EntrySection', () => {
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

    it('Should have one style element', () => {
        cy.shadowGet('entry-section')
            .shadowFirst()
            .shadowFind('style')
            .dwAttach()
            .should('have.length', 1)
            .dwDetach()
    })

    it('Should change the navlink button background and font color on click event', () => {
        cy.get('@colors').then(colors => {
            cy.shadowGet('entry-section')
                .shadowFirst()
                .shadowFind('button')
                .dwDispatch('click')

            cy.get('.navbar__links-container__link')
                .first()
                .should('have.attr', 'style', `background-color: ${colors.title}; color: white;`)
        })
    })

    it('Should call the console.log method twice', () => {
        cy.shadowGet('entry-section')
            .shadowFirst()
            .shadowFind('button')
            .dwDispatch('click')
            .get('@spyLog')
            .should('be.calledTwice')
    })

    it('Should call the _btnClickHandler method once', () => {
        cy.get('entry-section').then(EntrySection => {
            const element = EntrySection.get(0)
            cy.spy(element, '_btnClickHandler').as('click')
            cy.shadowGet('entry-section')
                .shadowFirst()
                .shadowFind('button')
                .dwDispatch('click')
                .get('@click')
                .should('be.calledOnce')
        })
    })

    it('Should call the _composeHandler method once', () => {
        cy.get('entry-section').then(EntrySection => {
            const element = EntrySection.get(0)
            cy.spy(element, '_composeHandler').as('compose')
            cy.shadowGet('entry-section')
                .shadowFirst()
                .shadowFind('button')
                .dwDispatch('click')
                .get('@compose')
                .should('be.calledOnce')
        })
    })

    it('Should call the _changeNavbarLinksColorHandler method once', () => {
        cy.get('entry-section').then(EntrySection => {
            const element = EntrySection.get(0)
            cy.spy(element, '_changeNavbarLinksColorHandler').as('changeNavbarLinksColor')
            cy.shadowGet('entry-section')
                .shadowFirst()
                .shadowFind('button')
                .dwDispatch('click')
                .get('@changeNavbarLinksColor')
                .should('be.calledOnce')
        })
    })

    it('Should call the _modifyNabvarLinks method once', () => {
        cy.get('entry-section').then(EntrySection => {
            const element = EntrySection.get(0)
            cy.spy(element, '_modifyNabvarLinks').as('modifyNavbarLinks')
            cy.shadowGet('entry-section')
                .shadowFirst()
                .shadowFind('button')
                .dwDispatch('click')
                .get('@modifyNavbarLinks')
                .should('be.calledOnce')
        })
    })

    it('Should call the _setEntrySectionButtonsToNormality method once', () => {
        cy.get('entry-section').then(EntrySection => {
            const element = EntrySection.get(0)
            cy.spy(element, '_setEntrySectionButtonsToNormality').as('setBackToNormality')
            cy.shadowGet('entry-section')
                .shadowFirst()
                .shadowFind('button')
                .dwDispatch('click')
                .get('@setBackToNormality')
                .should('be.calledOnce')
        })
    })
})