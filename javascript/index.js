// Define topping prices at the start of the script
const toppingPrices = {
    Pepperoni: 1.5,
    Mushrooms: 1.0,
    Olives: 0.5,
    Bacon: 2.0,
    "Extra Cheese": 1.75,
    Pineapple: 1.25,

};

// Constructor class for Pizza
class Pizza {
    constructor(size, crust, toppings) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }

    // Method to describe the pizza
    describe() {
        return `Size: ${this.size}, Crust: ${this.crust}, Toppings: ${this.toppings.join(', ')}`;
    }
}

// Event listeners on DOM load
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for form submission
    document.getElementById('pizzaForm').addEventListener('submit', submitOrder);

    // Add event listener for topping changes to update the price
    document.querySelectorAll('input[name="topping"]').forEach(el => {
        el.addEventListener('change', updatePrice);
    });

    // Add event listener for the 'Show My Details' button
    document.getElementById('showDetails').addEventListener('click', function() {
        document.getElementById('studentDetails').innerHTML = `<p>Student ID: 200594021, Name: Tran Bao Kien</p>`;
    });

    // Initial price update
    updatePrice();
});

// Function to handle form submission
function submitOrder(event) {
    event.preventDefault();

    // Create a new pizza object based on selected options
    const pizza = new Pizza(
        document.getElementById('size').value,
        document.getElementById('crust').value,
        Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(el => el.value)
    );

    // Display pizza summary using the 'describe' method
    document.getElementById('pizzaSummary').textContent = pizza.describe();

    // Update the price of the pizza
    updatePrice();
}

// Function to update the price based on selected toppings
function updatePrice() {
    let price = 10; // Base price for pizza
    document.querySelectorAll('input[name="topping"]:checked').forEach(el => {
        price += toppingPrices[el.value];
    });
    document.getElementById('price').textContent = `Total Price: $${price.toFixed(2)}`;
}
