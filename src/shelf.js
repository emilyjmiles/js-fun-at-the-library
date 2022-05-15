function shelfBook(bookTitle, shelf) {
  if (shelf.length < 3) {
    return shelf.unshift(bookTitle);
} else {
    return;
  }
}


function unshelfBook(bookTitle, shelf) {
  for (i = 0; i < shelf.length; i++) {
    if (bookTitle === shelf[i].title) {
    return (shelf.splice(i, 1));
    };
  }
}

function listTitles(titles) {
  var newTitlesList = [];
    for (i = 0; i < titles.length; i++) {
    newTitlesList.push(titles[i].title);
  }
      return newTitlesList.join(', ');
}

function searchShelf(shelf, title) {
  var bookPresent = false;
    for (i = 0; i < shelf.length; i++) {
      if (shelf[i].title === title) {
          bookPresent = true;
      }
    } return bookPresent;
  }

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
