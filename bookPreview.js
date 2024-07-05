// book-preview.js
import { authors } from "./data.js";
class BookPreview extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    const { author, id, image, title } = this.dataset;
    const authoimport { authors } from "../data";
    class BookPreview extends HTMLElement {
        constructor() {
          super();
          this.shadowRoot = this.attachShadow({ mode: "open" });
          this.handleClick = this.handleClick.bind(this);
        }
      
        static get observedAttributes() {
          return ["book"];
        }
      
        attributeChangedCallback(name, oldValue, newValue) {
          if (name === "book") {
            this.render(JSON.parse(newValue));
          }
        }
      
        render(book) {
          this.shadowRoot.innerHTML = `
            <button class="preview" data-preview="${book.id}">
              <img class="preview__image" src="${book.image}" alt="${book.title}" />
              <div class="preview__info">
                <h3 class="preview__title">${book.title}</h3>
                <div class="preview__author">${book.author}</div>
              </div>
            </button>
          `;
      
          this.shadowRoot.querySelector("button").addEventListener("click", this.handleClick);
        }
      
        handleClick(event) {
          const previewId = event.currentTarget.dataset.preview;
          // Trigger an event to notify the application about the clicked preview
          this.dispatchEvent(new CustomEvent("book-clicked", { detail: { previewId } }));
        }
      }
      
      customElements.define("book-preview", BookPreview);
      rName = authors[author]; // Fetch the author's name using the ID

    this.innerHTML = `
      <style>
        .preview {
          display: flex;
          align-items: center;
        }
        .preview__image {
          width: 50px;
          height: 75px;
          margin-right: 10px;
        }
        .preview__info {
          display: flex;
          flex-direction: column;
        }
        .preview__title {
          font-size: 1.2em;
        }
        .preview__author {
          font-size: 1em;
          color: gray;
        }
      </style>
      <button class="preview" data-preview="${id}">
        <img class="preview__image" src="${image}" />
        <div class="preview__info">
          <h3 class="preview__title">${title}</h3>
          <div class="preview__author">${authorName}</div> <!-- Use the author's name here -->
        </div>
      </button>
    `;
  }
}

customElements.define("book-preview", BookPreview);
