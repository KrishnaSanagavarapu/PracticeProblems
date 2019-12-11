var pizzaCost = 10;
var pizzaTopping = 2;
function calculatePrice(cost, toppings) {
    return cost + 1.5 * toppings;
}
var cost = calculatePrice(pizzaCost, pizzaTopping);
console.log("pizza cost is " + cost);
