export default class SolutionCard extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.image = this.getAttribute('image')
        this.head = this.getAttribute('head')
        this.text = this.getAttribute('text')

        const template = document.createElement('template')
        template.innerHTML = this._addTemplateInnerHtml()

        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    set styleSheet (styleSheet) {
        this.shadowRoot.adoptedStyleSheets = [styleSheet]
    }

    _addTemplateInnerHtml () {
        return(`
            <style></style>
            <div>
                <div>
                    <img src="${this.image}"/>
                </div>
                <div>
                    <h4>${this.head}</h4>
                    <p>${this.text}</p>
                </div>
            </div>
        `)
    }
}

customElements.define('solution-card', SolutionCard)