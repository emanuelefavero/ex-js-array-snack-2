/** @fileoverview Exercise solutions */

import { books } from './data/books.js';

console.log('Uncomment the tests (🧪) to verify the solutions');

// ---

// SNACK 1
{
  const longBooks = books.filter(b => b.pages > 300); // ✔︎
  const longBooksTitles = longBooks.map(b => b.title); // ✔︎
  longBooksTitles.forEach(t => console.log(t)); // ✔︎

  // 🧪
  // console.log(longBooks);
  // console.log(longBooksTitles);
}

// SNACK 2
{
  const DISCOUNT_RATE = 0.2;

  const availableBooks = books.filter(b => b.available); // ✔︎

  const discountedBooks = availableBooks.map(b => {
    const price = parseFloat(b.price);
    const discountedPrice = price * (1 - DISCOUNT_RATE);
    const formattedPrice = `${discountedPrice.toFixed(2)}€`;

    return {
      ...b,
      price: formattedPrice,
    };
  }); // ✔︎

  const fullPricedBook = discountedBooks.find(b =>
    Number.isInteger(parseFloat(b.price)),
  ); // ✔︎

  // 🧪
  // console.log(availableBooks);
  console.log(discountedBooks);
  console.log(fullPricedBook);
}

// SNACK 3
{
  // TODO
}

// SNACK 4
{
  // TODO
}

// SNACK 5 (Bonus)
{
  // Config
  const BASE_URL = 'http://localhost:3333';
  const RESOURCE = 'books';
  const IDS = [2, 13, 7, 21, 19];

  // Utils
  const buildUrl = (path, params) => {
    const endpoint = [BASE_URL, ...path].join('/');
    const query = new URLSearchParams(params).toString();
    return query ? `${endpoint}?${query}` : endpoint;
  };

  const fetchJson = async url => {
    const response = await fetch(url);

    if (!response.ok)
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);

    return await response.json();
  };

  // Solution
  const getBooks = async ids => {
    // TODO
  }; // ✔︎

  (async () => {
    try {
      const data = await getBooks(IDS);

      // 🧪
      // console.log(data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  })();
}

// SNACK 6 (Bonus)
{
  // TODO
}

// SNACK 7 (Bonus)
{
  // TODO
}
