export default class NavLink extends HTMLElement {
    constructor() {
        super()
        this.text = this.getAttribute('text')
        this.selected = this.getAttribute('selected')

        const template = document.createElement('template')
        template.innerHTML = this._addTemplateInnerHtml()

        this.appendChild(template.content.cloneNode(true))
    }

    _addTemplateInnerHtml() {
        return (`
            <a
                class="navbar__links-container__link${this.selected ? ' navbar__links-container__link--selected' : ''}"
                href="#"
            >
                ${this.text}
            </a>
        `)
    }
}

customElements.define("nav-link", NavLink)