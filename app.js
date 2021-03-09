//DOM = Document Object Model, created by the browser when a web page is located
//looks like tree of elements/nodes in graphical form
//can use js to read or change the DOM

//interacting with the DOM
//-change/remove HTML elements in the DOM or on the pg, change and add css styles to elements
//-read and change element attributes, create new html elements and insert them into DOM/page
//-attach event listeners to elements (click, keypress, submit)

//get element by ID
document.getElementById("page-banner"); //grabbing an element from the document

var banner = document.getElementById("page-banner");
var bookList = document.getElementById("book-list");

//get elements by class or tag
var titles = document.getElementsByClassName("title"); //results in HTMLCollection, titles [0], titles [1]

var lis = document.getElementsByTagName("li");
lis[1];

for (i = 0; i < titles.length; i++) {
  console.log(titles[i]);
} //i starts with 0 but will increase by 1 each time until it reaches length of collection

//turn titles into array
var titles = document.getElementsByClassName("title");
console.log(Array.isArray(titles)); //is false since it's not an array
console.log(Array.isArray(Array.from(titles))); //returns true

Array.from(titles).forEach(function (item) {
  console.log(item);
}); //returns as an array

//query selector
//$("#wrapper"); //grab wrapper element and return it

const wrap = document.querySelector("#wrapper");
console.log(wrap); //same function as above

const wmf = document.querySelector("#book-list li:nth-child(2) .name");
console.log(wmf); //grabs 2nd book on list

var books = document.querySelector("#book-list li .name");
console.log(books); //grabs only 1st book b/c querySelector only returns 1 single element not multiple ones

books = document.querySelectorAll("#book-list li .name");
//returns collection of elements, grabs every element with class of name and li in book-list id
console.log(books);
