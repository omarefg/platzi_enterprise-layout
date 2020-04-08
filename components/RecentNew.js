export default class RecentNew extends HTMLElement {
    constructor() {
        super()
        this.date = this.getAttribute('date')
        this.text = this.getAttribute('text')

        const template = document.createElement('template')
        template.innerHTML = this._addTemplateInnerHtml()

        this.appendChild(template.content.cloneNode(true))
    }

    _addTemplateInnerHtml () {
        return(`
            <div>
                <h5>Publicada: ${this.date}</h5>
                <p>${this.text}</p>
            </div>
        `)
    }
}

customElements.define('recent-new', RecentNew)