class WC_Button extends HTMLElement {
    constructor() {
        super()
        this.text = this.getAttribute("text")
        this.click = this.getAttribute("click")
    }

    connectedCallback() {
        this.innerHTML = (`
            <style>
                .wc-button {
                    width: 100%;
                    padding: 15px;
                    border: solid 1px #ff0000;
                    border-radius: 50px;
                    background-color: #ff0000;
                    color: #ffffff;
                    cursor: pointer;
                }
            </style>
            <button type="button" class="wc-button" onclick="${this.click}">${this.text}</button>
        `);
    }
}
      
customElements.define('wc-button', WC_Button);