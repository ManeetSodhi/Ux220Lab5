class ManeetElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Maneet was Here" ;
    }
}

customElements.define("x-maneet", ManeetElement);