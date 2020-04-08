export default class ServiceLink extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.service = this.getAttribute('service')

        const template = document.createElement('template')
        template.innerHTML = this._addTemplateInnerHtml()

        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    set styleSheet (styleSheet) {
        this.shadowRoot.adoptedStyleSheets = [styleSheet]
    }

    _addTemplateInnerHtml () {
        return (`
            <style></style>
            <a>${this.service}</a>
        `)
    }
}

customElements.define('service-link', ServiceLink)