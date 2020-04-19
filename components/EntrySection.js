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
        btn.addEventListener('click', (event) => this._btnClickHandler(event))

        const btnCont = this.shadowRoot.querySelector(`#${this.btnContId}`)
        btnCont.addEventListener('compose', (event) => this._composeHandler(event))

        this.addEventListener('changeNavbarLinksColor', (event) => this._changeNavbarLinksColorHandler(event))
    }

    _addTemplateInnerHtml() {
        return (`
            <style>${stylesheet}</style>
            <div class="container">
                <h2>${this.head}</h2>
                <div class="content"><slot name="content"></slot></div>
                <div id="${this.btnContId}">
                    <button id="${this.btnId}">${this.btn}</button>
                </div>
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

    _modifyNabvarLinks() {
        const body = document.querySelector('body')
        body.addEventListener('changeNavbarLinksColor', () => {
            body.querySelectorAll('.navbar__links-container__link')
                .forEach(element => {
                    element.style.backgroundColor = '#4f4b45'
                    element.style.color = 'white'
                })
            })
    }

    _setEntrySectionButtonsToNormality() {
        this.parentElement.querySelectorAll('entry-section')
            .forEach((element) => {
                const btn = element.shadowRoot.querySelector('button')
                btn.style.backgroundColor = null
                btn.style.color = null
            })
    }

    _changeNavbarLinksColorHandler(event) {
        this._modifyNabvarLinks()
        this._setEntrySectionButtonsToNormality()
    }

    _composeHandler(event) {
        console.log(' I’m not propagating ')
        event.cancelBubble = true
    }
}

customElements.define('entry-section', EntrySection)