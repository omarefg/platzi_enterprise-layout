class EntrySection extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.title = this.getAttribute('title')
        this.btn = this.getAttribute('btn')
        this.template = document.createElement('template')
        this.template.innerHTML = this._addTemplateInnerHtml()
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }

    _addTemplateInnerHtml () {
        return (`
            <style></style>
            <div>
                <h3>${this.title}</h3>
                <div><slot name="content"></slot></div>
                <button>${this.btn}</button>
            </div>
        `)
    }
}

customElements.define('entry-section', EntrySection)