export default class WelcomeText extends HTMLElement {
    constructor() {
        super()
        this.text = this.getAttribute('text')

        const template = document.createElement('template')
        template.innerHTML = this._addTemplateInnerHtml()

        this.appendChild(template.content.cloneNode(true))
    }

    _addTemplateInnerHtml() {
        const rgx = new RegExp(/\%21/g)

        return (`
            <p class="welcome-text --large-interline">
                ${this.text.replace(rgx, '"')}
            </p>
        `)
    }
}

customElements.define("welcome-text", WelcomeText)