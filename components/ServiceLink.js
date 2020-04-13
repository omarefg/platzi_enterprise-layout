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
            <a class="services__service">
                <svg
                    enable-background="new 0 0 551.13 551.13"
                    height="1em"
                    width="1em"
                    viewBox="0 0 551.13 551.13"
                >
                    <path d="m361.679 275.565-223.896 223.897v51.668l275.565-275.565-275.565-275.565v51.668z"/>
                </svg>
                ${this.service}
            </a>
        `)
    }
}

customElements.define('service-link', ServiceLink)