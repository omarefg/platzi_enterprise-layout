export default class SolutionCard extends HTMLElement {
    constructor() {
        super()
        this.image = this.getAttribute('image')
        this.head = this.getAttribute('head')
        this.text = this.getAttribute('text')
        this.color = this.getAttribute('color')

        const template = document.createElement('template')
        template.innerHTML = this._addTemplateInnerHtml()

        this.appendChild(template.content.cloneNode(true))
    }

    _addTemplateInnerHtml () {
        return(`
            <div class="solution-card">
                <div class="solution-card__img-container">
                    <img width="100%" height="100%" src="${this.image}"/>
                </div>
                <div class="solution-card__text-container">
                    <h4 style="color:${this.color}">${this.head}</h4>
                    <p>${this.text}</p>
                </div>
            </div>
        `)
    }
}

customElements.define('solution-card', SolutionCard)