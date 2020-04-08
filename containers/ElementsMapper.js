class ElementsMapper extends HTMLElement {
    constructor () {
        super()
        this.attachShadow({ mode: 'open' })
    }

    set initialize ({customElement, data, styleSheet, element}) {
        this.customElement = customElement
        this.data = data
        this.shadowRoot.adoptedStyleSheets = [styleSheet]
        element.styleSheet = styleSheet
        this._render()
    }

    _render () {
        this.shadowRoot.innerHTML = `
            <style>div{${this.styles}}</style>
            <div>
                ${this.data
                    .map((item) => this._renderItem({
                        ...item,
                        self: this
                    }))
                    .join('')
                }
            </div>
        `
    }

    _renderItem ({self, ...item}) {
        const attributes = Object.keys(item)
            .map(key => `${key}="${item[key]}"`).join('')

        return (`
            <${self.customElement} ${attributes}></${self.customElement}>
        `)
    }
}

customElements.define('elements-mapper', ElementsMapper)