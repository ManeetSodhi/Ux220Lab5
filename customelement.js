class ManeetElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Maneet was Here" ;
    }
}

customElements.define("x-maneet", ManeetElement);

class CenterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>
        `
    }
}

customElements.define("x-center", CenterElement);

class YearElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-fullyear", YearElement);