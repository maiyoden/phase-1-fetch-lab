function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => {
      // Check if the response is okay (status in the range 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // Convert the response to JSON
    })
    .then((data) => {
      renderBooks(data); // Pass the JSON data to renderBooks
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name; // Assuming each book object has a 'name' property
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks(); // Call fetchBooks when the DOM is fully loaded
});