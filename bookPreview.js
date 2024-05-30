// book-preview.js
import { authors } from "./data.js";
class BookPreview extends HTMLElement {
  static get observedAttributes() {
    return ["book"];
  }
  // Creates a new instance of the BookPreview component.
  constructor() {
    super();
    // Create a shadow root for the component
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector(".preview").addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("book-click", {
          deatil: JSON.parse(this.getAttribute("book")),
          bubbles: true,
          composed: true,
        })
      );
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "book" && oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const book = JSON.parse(this.getAttribute("book"));
    if (!book) return;
    // Define the template for the component
    this.shadowRoot.innerHTML = `
            <style>
            .preview {
                border-width: 0;
                width: 100%;
                font-family: Roboto, sans-serif;
                padding: 0.5rem 1rem;
                display: flex;
                align-items: center;
                cursor: pointer;
                text-align: left;
                border-radius: 8px;
                border: 1px solid rgba(var(--color-dark), 0.15);
                background: rgba(var(--color-light), 1);
            }

            @media (min-width: 60rem) {
                .preview {
                    padding: 1rem;
                }
            }

            .preview_hidden {
                display: none;
            }

            .preview:hover {
                background: rgba(var(--color-blue), 0.05);
            }

            .preview__image {
                width: 48px;
                height: 70px;
                object-fit: cover;
                background: grey;
                border-radius: 2px;
                box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
                            0px 1px 1px 0px rgba(0, 0, 0, 0.1), 
                            0px 1px 3px 0px rgba(0, 0, 0, 0.1);
            }

            .preview__info {
                padding: 1rem;
            }

            .preview__title {
                margin: 0 0 0.5rem;
                font-weight: bold;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;  
                overflow: hidden;
                color: rgba(var(--color-dark), 0.8);
            }

            .preview__author {
                color: rgba(var(--color-dark), 0.4);
            }
            </style>
            <button class="preview" data-preview="${id}">
                <img class="preview__image" src="${image}" alt="${title}" />
                <div class="preview__info">
                    <h3 class="preview__title">${title}</h3>
                    <div class="preview__author">${authors[author]}</div>
                </div>
            </button>
        `;
  }
}

customElements.define("book-preview", BookPreview);
