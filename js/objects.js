(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    var person = {
        firstName: "Michael",
        lastName: "Kestler",
        sayHello: function () {
            return "Hello from " + person.firstName + " " + person.lastName;
        }
    }

    console.log(person.firstName) //"Michael"
    console.log(person.lastName) //"Kestler"

    console.log(person.sayHello())


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */


    var shoppersArray = [
            {name: 'Cameron', amount: 180},
            {name: 'Ryan', amount: 250},
            {name: 'George', amount: 320}
        ];

    function calcDiscount(shoppers) {

        shoppers.forEach(shopper => {
            var discount = .12;
            if (shopper.amount > 200) {
                console.log(shopper.name + " initial amount " + shopper.amount);
                var discountAmt = (shopper.amount * discount);
                console.log(shopper.name + " discount amount " + shopper.amount * discount);
                var newTotal = (shopper.amount - discountAmt);
                console.log(shopper.name + " after discount amount " + newTotal);

            } else {
                console.log(shopper.name + " initial amount " + shopper.amount + " gets no discount");
            }
        });
    }
    calcDiscount(shoppersArray);

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
//1 create an array of objects
//2 store it in variable named books
//3 create properties for title and author
//4 author should have firstName and lastName properties
//5 add at least 5 books to the array

     var booksArray = [
        {title: 'The Sun Also Rises', author: {firstName: 'Ernest', lastName: 'Hemingway'}},
        {title: 'The Great Gatsby', author: {firstName: 'F. Scott', lastName: 'Fitzgerald'}},
        {title: 'The Great Shark Hunt', author: {firstName: 'Hunter', lastName: 'Thompson'}},
        {title: 'The Outsider', author: {firstName: 'Colin', lastName: 'Wilson'}},
        {title: 'On The Road', author: {firstName: 'Jack', lastName: 'Kerouac'}}
         ];
        console.log(booksArray[0].title);
        console.log(booksArray[0].author.firstName);
        console.log(booksArray[0].author.lastName);

    //create function that lists each book by index number title and author
    //access books from the books obj
    //loop through books array
    //inside of loop access index number, title, author first and last name
    function listBooks(books){
        books.forEach(book => {
            //console.log("Title: " + books[0].title + " Author: " + books[0].author.firstName + " " + books[0].author.lastName);
            console.log("Book # " + booksArray.indexOf(book));
            console.log("Title: " + book.title);
            console.log("Author: " + book.author.firstName + " " + book.author.lastName)
        });
    }


        listBooks(booksArray);
    //books.forEach(element => console.log(element));



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    //create a function named createBook
    //make parameters book and title name
    //return book object with title and author name

    function createBook(title, author){
        var bookObj = [
            {
                title: (title), book: (author)
            }
        ];
    }
    console.log(bookObj);

createBook("Travels with Charley", "Steinbeck")




})();
