//Write a function that returns the reading status of each of following books

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Walter Isaacson',
        title: 'Steve Jobs',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

function readingChecker(books) {

    books.forEach(book => {
            if (book.readingStatus === true){
                console.log("User is currently reading " + book.title);
            } else {
                console.log("User is not currently reading " + book.title);
            }

    });
}
readingChecker(library);