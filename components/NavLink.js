export default class NavLink extends HTMLElement {
    constructor() {
        super()
        this.text = this.getAttribute('text')

        const template = document.createElement('template')
        template.innerHTML = this._addTemplateInnerHtml()

        this.appendChild(template.content.cloneNode(true))
    }

    _addTemplateInnerHtml() {
        return (`
            <a href="#">${this.text}</a>
        `)
    }
}

customElements.define("nav-link", NavLink)