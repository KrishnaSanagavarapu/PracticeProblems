const pizzaCost:number=10;
const pizzaTopping:number=2;
function calculatePrice(cost:number,toppings:number):number{
    return cost+1.5*toppings;
}
const cost:number =calculatePrice(pizzaCost,pizzaTopping);
console.log(`pizza cost is ${cost}`);
