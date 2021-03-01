//const age = 20;

const age = 10;

if (age > 18) {
  console.log("You are good to go!");
} else if (age < 15) {
  console.log("Wow you are really young");
} else {
  console.log("You are not old enough");
}

const number = 18;
//can use double equals but better to use triple equals to prevent bugs
if (number === 18) {
  console.log("You are good to go!");
}
if (number >= 18) {
  console.log("Hi!");
}

// >= greater than or equal to
// <= less than or equal to

const dice1 = 6;
const dice2 = 3;

if (dice1 === 6 && dice2 === 6) {
  console.log("You rolled a double");
} else {
  console.log("You didn't");
}

if (dice1 === 6 || dice2 === 6) {
  console.log("nice!");
}

// and = &&, or = ||

//objects allow us to group together properties and values, have many uses from storing related data to functionality, are used when the order of the properties doesn't matter

//syntax of object: { }

const day = 100;
const person = {
  day: day, //property on left side, value on right, value can be any type
  name: "wes",
  "cool-dude": true, //properties can have a dash (-)
  "really cool": false, //properties can have spaces
  777: true, //put comma at end
  clothing: {
    //nested object
    shirts: 10,
    pants: 2,
  },
};

person.job = "Web Developer";
person.day = 50;
console.log(person);

const wesFroze = Object.freeze(person); //can't be changed
console.log(person);

//properties can be accessed on console by typing "person.job", etc
