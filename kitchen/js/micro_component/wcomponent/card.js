class WC_Card extends HTMLElement {
    constructor() {
        super()
        this.title = this.getAttribute("title")
        this.caption = this.getAttribute("caption")
    }

    connectedCallback() {
        this.innerHTML = (`
            <style>
                .wc-card {
                    margin: 30px;
                    padding: 30px;
                    border-radius: 30px;
                    box-shadow: 0 10px 30px 0 rgba(0,0,0,.1);
                }
            </style>
            <div class="wc-card">
                <h2>${this.title}</h2>
                <p>${this.caption}</p>
            </div>
        `);
    }
}
      
customElements.define('wc-card', WC_Card);