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
                <h4 class="recent-new__title">Publicada: ${this.date}</h4>
                <p class="recent-new__text --large-interline">${this.text}</p>
            </div>
        `)
    }
}

customElements.define('recent-new', RecentNew)