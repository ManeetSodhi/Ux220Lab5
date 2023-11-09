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

class WotdElement extends HTMLElement{
    connectedCallback(){
        const word="MIEN"
        this.innerHTML = `<x-center><h3>${word}</h3></x-center>
        <p>The Word of The Day is ${word}. You can find the meaning of ${word} by visiting <a href="https://www.merriam-webster.com/dictionary/${word}" target="_blank"><em>The Merriam Webster Dictionary</em></a></p>` ;
    }
}

customElements.define("x-wotd", WotdElement);