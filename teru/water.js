var pizzaCost = 20;
var pizzaTopping = 2;
function priceCalculator(cost, toppings) {
    return cost + 1.5 * toppings;
}
var cost = priceCalculator(pizzaTopping, pizzaCost);
console.log(cost);
