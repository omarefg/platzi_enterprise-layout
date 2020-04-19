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
        this.addEventListener('compose', (event) => this._composeHandler(event))
        this.addEventListener('changeEntrySectionBtnColor', (event) => this._changeEntrySectionBtnColorHandler(event))
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
        this.dispatchEvent(new CustomEvent('changeEntrySectionBtnColor', {
            bubbles: true
        }))
    }

    _modifyEntrySectionButtons() {
        const body = document.querySelector('body')
        const entriesContainer = body.querySelector('.entries-container')
        const entries = entriesContainer.querySelectorAll('entry-section')
        entries.forEach(element => {
            const entryBtn = element.shadowRoot.querySelector('button')
            entryBtn.style.backgroundColor = '#db5130'
        })
    }

    _setNavbarLinksButtonsToNormality() {
        this.parentElement.querySelectorAll('nav-link').forEach((element) => {
            const btn = element.querySelector('button')
            btn.style.backgroundColor = null
            btn.style.color = null
        })
    }

    _changeEntrySectionBtnColorHandler(event) {
        this._modifyEntrySectionButtons()
        this._setNavbarLinksButtonsToNormality()
    }

    _composeHandler(event) {
        console.log(' I’m not propagating ')
        event.cancelBubble = true
    }
}

customElements.define("nav-link", NavLink)