export const getElement = (selector) => document.querySelector(selector);

export const createBookPreviews = (books, container) => {
    const fragment = document.createDocumentFragment();
    books.forEach((book) => {
      const preview = document.createElement("book-preview");
      preview.dataset.author = book.author;
      preview.dataset.id = book.id;
      preview.dataset.image = book.image;
      preview.dataset.title = book.title;
      fragment.appendChild(preview);
    });
    container.appendChild(fragment);
  };

  export const createOptions = (options, defaultOption, container) => {
    const filter = document.createElement("search-filter");
    filter.dataset.options = JSON.stringify(options);
    filter.dataset.defaultOption = defaultOption;
    container.appendChild(filter);
  };