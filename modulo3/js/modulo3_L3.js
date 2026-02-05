// LESSON 3: ARRAYS AND LOOPS

// 1. Create an array of PC components (Strings)
let pcComponents = ["Motherboard", "RAM 16GB", "SSD 1TB", "Power Supply"];
console.log("Initial Cart:", pcComponents);
alert("Your PC Cart: " + pcComponents.join(", "));

// 2. Array Methods (push, pop, unshift, slice)

// push: Add the Graphics Card 
let graphicCard = prompt("enter your graphic card:", "RTX 4070 GPU");
pcComponents.push(graphicCard);
console.log("Added GPU (push):", pcComponents);

// unshift: Add the CPU (prioritize first!)
let cpu = prompt("enter your cpu:", "Intel Core i7 CPU");
pcComponents.unshift(cpu);
console.log("Added CPU to top (unshift):", pcComponents);

// pop: remove the last item added 
let removedComponent = pcComponents.pop();
console.log(`Budget tight! Removed: ${removedComponent} (pop)`);
console.log("Current Cart:", pcComponents);

// slice first 3 items
let coreBundle = pcComponents.slice(0, 3);
console.log("Core Bundle (CPU, Mobo, RAM):", coreBundle);


// 3. Loops (for, while, do-while)

// 'for' loop: Calculating Total Price (by prompt)
let componentPrices = []; // empty array
let totalPrice = 0;

console.log("--- Calculating Total Cost (for loop) ---");

// foreach loop 
pcComponents.forEach(function(component) {
    // code to be executed for each element
    let price = prompt("Enter the price of the " + component + ":");
    componentPrices.push(price);
    console.log("Component: " + component + " Price: " + price);
    totalPrice += parseFloat(price);
});

console.log(`Total Estimated Cost: $${totalPrice}`);
alert(`Total Estimated Cost: $${totalPrice}`);

// while price is less than 1000, add device
while (totalPrice < 1000) {
    // push: Add device
    let device = prompt("enter your device:", "device");
    pcComponents.push(device);
    console.log("Added device (push):", pcComponents);
    let price = prompt("Enter the price of the " + device + ":");
    componentPrices.push(price);
    console.log("Component: " + device + " Price: " + price);
    totalPrice += parseFloat(price);
    console.log(`Total Estimated Cost: $${totalPrice}`);
    alert(`Total Estimated Cost: $${totalPrice}`);
}

let expensiveDevice = "";
let expensiveDevicePrice = 0;

// Find the most expensive component (filter)
for (let i = 0; i < pcComponents.length; i++) {
    let currentPrice = parseFloat(componentPrices[i]);
    
    if (currentPrice > expensiveDevicePrice) {
        expensiveDevicePrice = currentPrice;
        expensiveDevice = pcComponents[i];
    }
}

let expensive = "Most expensive device: " + expensiveDevice + " price: $" + expensiveDevicePrice;
console.log(expensive);
alert(expensive);