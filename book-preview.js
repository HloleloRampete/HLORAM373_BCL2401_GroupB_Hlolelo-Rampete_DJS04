// book-preview.js
class BookPreview extends HTMLElement {

    /**
     * Creates a new instance of the BookPreview component.
     */
    constructor() {
        super();
        // Create a shadow root for the component
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    static get observedAttributes() {
        return ['author', 'id', 'image', 'title'];
    }

    

        // Append the template content to the shadow root
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
}

customElements.define('book-preview', BookPreview);