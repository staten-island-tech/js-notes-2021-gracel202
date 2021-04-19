//promises: need to wait for something to happen before you can run rest of code

function makePizza() {
  const pizzaPromise = new Promise(function (resolve, reject) {
    //when you're ready, you can resolve this promise
    resolve("pizza");
    //if something went wrong, we can reject this promise;
  });
  return pizzaPromise;
}

const pizza = makePizza();
console.log(pizza);

function makePizza(toppings) {
  const pizzaPromise = new Promise(function (resolve, reject) {
    resolve("Here is your pizza with the toppings ${toppings.join('')}`");
  });
  return pizzaPromise;
}

const pepperoniPromise = makePizza(["pepperoni"]);
const canadianPromise = makePizza(["pepperoni", "mushrooms", "onions"]);
console.log(pepperoniPromise, canadianPromise);
