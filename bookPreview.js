// book-preview.js
import { authors } from "./data.js";
class BookPreview extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    const { author, id, image, title } = this.dataset;
    const authorName = authors[author]; // Fetch the author's name using the ID
}

customElements.define("book-preview", BookPreview);
