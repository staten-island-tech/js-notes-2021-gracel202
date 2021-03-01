//ForEach()

//syntax for array: itemArray.forEach(dog => dog + 2);

let names = ["Ania", "Dave", "Hannah", "Bob"];

names.forEach((name) => {
  console.log(name + " is the best!");
});

const squares = document.querySelectorAll("div");

squares.forEach((square) => {
  square.addEventListener("click", clickOutcome);
});

function clickOutcome() {
  alert("I have been clicked!");
}

//array is used for holding list of items where the order matters
//each thing in an array is an item and its position in the array is an index
//each item in array can be any type (string, boolean, object, etc)

const name = ["wes", "kait", "snickers"];
//array has no keys, order of 0,1,2,3,4,5,etc.

console.log(name[0]); //result is wes, counting starts at 0
