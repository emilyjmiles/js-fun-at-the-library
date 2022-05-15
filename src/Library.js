function createLibrary(library) {
  var libraryInfo = {
  name: library,
  shelves: {
    fantasy: [],
    fiction: [],
    nonFiction: [],
  }
}
return libraryInfo;
}

function addBook(library, book) {
if (book.genre === 'fantasy') {
  library.shelves.fantasy.push(book);
} else if (book.genre === 'fiction') {
  library.shelves.fiction.push(book);
} else {
  library.shelves.nonFiction.push(book);
  }
}

function checkoutBook(library, book, genre) {
  for (i = 0; i < library.shelves[genre].length; i++) {
    if (book === library.shelves[genre][i].title) {
      library.shelves[genre].splice(i, 1);
      return `You have now checked out ${book} from the ${library.name}`
  }
}
return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
}


module.exports = {
createLibrary,
addBook,
checkoutBook
};
