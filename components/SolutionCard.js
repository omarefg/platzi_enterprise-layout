class SolutionCard extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.image = this.getAttribute('image')
        this.title = this.getAttribute('title')
        this.text = this.getAttribute('text')
        this.template = document.createElement('template')
        this.template.innerHTML = this._addTemplateInnerHtml()
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
    }

    _addTemplateInnerHtml () {
        return(`
            <style></style>
            <div>
                <div>
                    <img src="${this.image}"/>
                </div>
                <div>
                    <h4>${this.title}</h4>
                    <p>${this.text}</p>
                </div>
            </div>
        `)
    }
}

customElements.define('solution-card', SolutionCard)