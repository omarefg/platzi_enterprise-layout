class ElementsMapper extends HTMLElement {
    set initialize ({data, element, containerClass}) {
        this.element = element
        this.data = data
        this.containerClass = containerClass
        this._render()
    }

    _render () {
        this.innerHTML = `
            <div class="${this.containerClass}">
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
            <${self.element} ${attributes}></${self.element}>
        `)
    }
}

customElements.define('elements-mapper', ElementsMapper)