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

//objects allow us to group together properties and values, have many related uses from storing functionality to
