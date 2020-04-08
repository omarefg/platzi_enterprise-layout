export default class ServiceLink extends HTMLElement {
    constructor() {
        super()
        this.service = this.getAttribute('service')

        const template = document.createElement('template')
        template.innerHTML = this._addTemplateInnerHtml()

        this.appendChild(template.content.cloneNode(true))
    }

    _addTemplateInnerHtml () {
        return (`
            <a>${this.service}</a>
        `)
    }
}

customElements.define('service-link', ServiceLink)