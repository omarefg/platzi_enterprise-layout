const stylesheet = `
    .container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    h2 {
        margin: 0;
        font-size: 2em;
        padding-bottom: calc(var(--spacing-unit) / 2);
        border-bottom: 1px solid var(--lines-color);
        margin-bottom: var(--spacing-unit);
        color: var(--title-color);
    }
    .content {
        flex: 1;
        margin-bottom: var(--spacing-unit);
        color: var(--font-color);
    }
    button {
        color: white;
        background: var(--title-color);
        border: none;
        font-size: var(--font-size);
        padding: calc(var(--spacing-unit) * 0.8) calc(var(--spacing-unit) * 1.7) calc(var(--spacing-unit) / 2) calc(var(--spacing-unit) * 1.7);
        cursor: pointer;
        font-weight: 600;
        outline: none;
    }

    @media screen and (min-width: 900px) {
        button {
            font-size: 14px;
        }
    }
`

export default class EntrySection extends HTMLElement {
    constructor() {
        super()
        this.head = this.getAttribute('head')
        this.btn = this.getAttribute('btn')
        this.btnId = this.getAttribute('btnId')
        this.btnContId = this.getAttribute('btnContId')
        this.count = 0

        const template = document.createElement('template')
        template.innerHTML = this._addTemplateInnerHtml()
        this.attachShadow({mode: 'open'})

        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
        const btn = this.shadowRoot.querySelector('button')
        const btnCont = this.shadowRoot.querySelector(`#${this.btnContId}`)
        const container = this.shadowRoot.querySelector(`.container`)

        btn.addEventListener('click', (event) => this._btnClickHandler(event))
        btnCont.addEventListener('compose', (event) => {
            console.log(' I’m not propagating ')
            event.cancelBubble = true
        })
        container.addEventListener('compose', (event) => {
            console.log('Or am I?')
        })
    }

    _addTemplateInnerHtml() {
        return (`
            <style>${stylesheet}</style>
            <div class="container">
                <h2>${this.head}</h2>
                <div class="content"><slot name="content"></slot></div>
                <div id="${this.btnContId}"><button>${this.btn}</button></div>
            </div>
        `)
    }

    _btnClickHandler(event) {
        this.count++
        console.log(`Id: ${this.btnId} , Count: ${this.count}`)
        event.target.dispatchEvent(new CustomEvent('compose', {
            bubbles: true
        }))
        this.dispatchEvent(new CustomEvent('changeNavbarLinksColor', {
            bubbles: true
        }))
    }
}

customElements.define('entry-section', EntrySection)