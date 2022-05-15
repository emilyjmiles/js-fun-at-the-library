function createTitle(title) {
  return 'The ' + title;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
  name: name,
  age: age,
  pronouns: pronouns,
}
  return character;
}

function saveReview(review, reviewArray) {
  if (!reviewArray.includes(review)) {
    return reviewArray.push(review);
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(bookTitle, character, bookGenre) {
var books = {
  title: bookTitle,
  mainCharacter: character,
  pageCount: calculatePageCount(bookTitle),
  genre: bookGenre,
};
  return books;
}

function editBook(books) {
  books.pageCount = books.pageCount * 0.75
  return books.pageCount;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
