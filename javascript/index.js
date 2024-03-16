// Define topping prices
const toppingPrices = {
    Pepperoni: 1.5,
    Mushrooms: 1.0,
    Olives: 0.5,
    Bacon: 2.0,
    "Extra Cheese": 1.75,
    Pineapple: 1.25,
};

document.addEventListener("DOMContentLoaded", function() {
    // Event listener for form submission
    document.getElementById('pizzaForm').addEventListener('submit', submitOrder);

    // Event listener for changes in topping selection
    document.querySelectorAll('input[name="topping"]').forEach(el => {
        el.addEventListener('change', updatePrice);
    });

    // Initial price update
    updatePrice();
});

function submitOrder(event) {
    event.preventDefault();

    // Creating pizza object based on selected options
    const pizza = {
        size: document.getElementById('size').value,
        crust: document.getElementById('crust').value,
        toppings: Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(el => el.value)
    };

    // Displaying pizza summary
    displayPizzaSummary(pizza);
}

function displayPizzaSummary(pizza) {
    const summary = `Size: ${pizza.size}, Crust: ${pizza.crust}, Toppings: ${pizza.toppings.join(', ')}`;
    document.getElementById('pizzaSummary').textContent = summary;
}

function updatePrice() {
    let price = 10; // Base price for pizza
    document.querySelectorAll('input[name="topping"]:checked').forEach(el => {
        price += toppingPrices[el.value];
    });
    document.getElementById('price').textContent = `Total Price: $${price.toFixed(2)}`;
}
