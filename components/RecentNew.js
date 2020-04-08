export default class RecentNew extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.date = this.getAttribute('date')
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
                <h5>Publicada: ${this.date}</h5>
                <p>${this.text}</p>
            </div>
        `)
    }
}

customElements.define('recent-new', RecentNew)