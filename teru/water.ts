const pizzaCost: number = 20;
const pizzaTopping: number = 2;

function priceCalculator(cost: number, toppings: number): number{
    return cost+1.5*toppings;
}

const cost: number = priceCalculator(pizzaTopping,pizzaCost);

console.log(cost);