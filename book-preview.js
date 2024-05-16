class BookPreview extends HTMLElement {
    constructor() {
      super();
  
      // Create a shadow DOM
      this.attachShadow({ mode: "open" });
  
      // Clone the template and attach it to the shadow DOM
      const template = document.getElementById("book-preview-template");
      const templateContent = template.content.cloneNode(true);
      this.shadowRoot.appendChild(templateContent);
  
      // Get references to elements inside the shadow DOM
      this.imageElement = this.shadowRoot.querySelector(".preview__image");
      this.titleElement = this.shadowRoot.querySelector(".preview__title");
      this.authorElement = this.shadowRoot.querySelector(".preview__author");
    }
  
    connectedCallback() {
      // Set attributes and text content based on properties
      this.imageElement.setAttribute("src", this.getAttribute("image"));
      this.titleElement.textContent = this.getAttribute("title");
      this.authorElement.textContent = this.getAttribute("author");
    }
  }
  
  // Define the custom element
  customElements.define("book-preview", BookPreview);