//comments in js
var life = 100; //number
life = life - 10; //90
life = life - 10; //80
console.log(life);

// var name = "Grace"; //string
// console.log(name);

console.log("hey");

var checkout = true; //boolean
var checkout = false; //boolean

var box;
console.log(box); //undefined

var box = null; //no value

// use const for selecting img
// const life = 100;
// can't redfine life

// let life = 100;
// life = life - 50;
// console.log(life);

const myAge = 18;
const yourAge = 21;
console.log(myAge + yourAge);

//stay consistent when using single or double quotes
console.log("Hello my name is " + "Grace");
console.log("Hello it's me Grace");

const name = "Grace";
const age = 18;

console.log(`Hello it's me and my name is ${name}`);

console.log(
  "Hello it's me " + name + " and my age is " + age + " and I am getting old"
);

console.log(`Hello it's me ${name} and my age is ${age}`);

const combined = name + age;
console.log(combined); //combined = string -> Grace18
console.log(typeof combined);
console.log(typeof age);
