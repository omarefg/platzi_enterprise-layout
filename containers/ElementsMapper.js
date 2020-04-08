class ElementsMapper extends HTMLElement {
    constructor () {
        super()
        this.attachShadow({ mode: 'open' })
    }

    set initialize ({element, data, styles}) {
        this.element = element
        this.data = data
        this.styles = styles
        this._render()
    }

    _render () {
        this.shadowRoot.innerHTML = `
            <style>div{${this.styles}}</style>
            <div>
                ${this.data
                    .map((item) => this._renderItem({...item, self: this}))
                    .join('')
                }
            </div>
        `
    }

    _renderItem ({self, ...item}) {
        const attributes = Object.keys(item)
            .map(key => `${key}="${item[key]}"`).join('')

        return (`
            <${self.element} ${attributes}></${self.element}>
        `)
    }
}

customElements.define('elements-mapper', ElementsMapper)