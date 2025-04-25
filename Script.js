// Sample book data
const books = [
  {
    title: "Pride and Prejudice",
    img: "https://covers.openlibrary.org/b/id/8231996-L.jpg",
    link: "https://archive.org/details/prideprejudice00aust"
  },
  {
    title: "Frankenstein",
    img: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    link: "https://archive.org/details/frankenstein00shel"
  },
  {
    title: "Moby Dick",
    img: "https://covers.openlibrary.org/b/id/8311832-L.jpg",
    link: "https://archive.org/details/mobydick00melv"
  },
  {
    title: "Alice in Wonderland",
    img: "https://covers.openlibrary.org/b/id/8225631-L.jpg",
    link: "https://archive.org/details/alicesadventures1900lewi"
  }
];

function loadBooks() {
  const container = document.querySelector('.online-books');
  container.innerHTML = ''; // clear existing

  books.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `
      <img src="${book.img}" alt="${book.title}">
      <p>${book.title}</p>
      <a href="${book.link}" class="read-btn" target="_blank">Read Now</a>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', loadBooks);
