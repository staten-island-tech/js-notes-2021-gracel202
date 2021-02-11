const name = "Grace";
const color = "blue";

function upperCase() {} //function format, parenthesis = parameter -> input value/variable inside it

function logger() {
  // const name = "Grace"; //won't be available outside function
  console.log("Party Time");
  console.log("Party Time");
  console.log("Party Time");
  console.log("Party Time");
} //variables added inside function aren't available outside of the function

logger(); //where you want to execute function

console.log(name);

function toUpper(text) {
  const upperCased = text.toUpperCase();
  console.log(upperCased);
}

toUpper(name);
toUpper(color);

function adder(num1, num2) {
  console.log(num1 + num2);
}

adder(5, 10);

//other ways to write functions
const toUpper = function () {
  text;
};

const toUpper = () => {
  text;
};
