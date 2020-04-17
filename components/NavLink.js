export default class NavLink extends HTMLElement {
    constructor() {
        super()
        this.text = this.getAttribute('text')
        this.selected = this.getAttribute('selected')
        this.id = this.getAttribute('id')
        this.count = 0

        const template = document.createElement('template')
        template.innerHTML = this._addTemplateInnerHtml()

        this.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
        const btn = this.querySelector('button')
        btn.addEventListener('click', (event) => this._btnClickHandler(event))
        this.addEventListener('compose', (event) => {
            console.log(' I’m not propagating ')
            event.cancelBubble = true
        })
        btn.addEventListener('changeNavbarLinksColor', () => {
            console.log('entre acá')
        })
    }

    _addTemplateInnerHtml() {
        return (`
            <button
                class="navbar__links-container__link${this.selected ? ' navbar__links-container__link--selected' : ''}"
                href="#"
            >
                ${this.text}
            </button>
        `)
    }

    _btnClickHandler(event) {
        this.count++
        console.log(`Id: ${this.id} , Count: ${this.count}`)
        event.target.dispatchEvent(new CustomEvent('compose', {
            bubbles: true
        }))
    }
}

customElements.define("nav-link", NavLink)