// LESSON 4: JAVASCRIPT FUNCTIONS

const PI = 3.14159;

// ===== CYLINDER CALCULATIONS =====

// Function to calculate cylinder surface area
// Formula: 2 * π * r * (r + h)
function calculateCylinderArea(radius, height) {
    if (radius <= 0 || height <= 0) {
        return "Error: Radius and height must be positive numbers";
    }
    let area = 2 * PI * radius * (radius + height);
    return area;
}

// Function to calculate cylinder volume
// Formula: π * r² * h
function calculateCylinderVolume(radius, height) {
    if (radius <= 0 || height <= 0) {
        return "Error: Radius and height must be positive numbers";
    }
    return PI * radius ** 2 * height;
}

// Arrow function for cone volume (π * r² * h / 3)
const calculateConeVolume = (radius, height) => {
    if (radius <= 0 || height <= 0) return "Error: Invalid dimensions";
    return (PI * radius ** 2 * height) / 3;
};

// Arrow function for sphere volume (4/3 * π * r³)
const calculateSphereVolume = (radius) => {
    if (radius <= 0) return "Error: Invalid radius";
    return (4 / 3) * PI * radius ** 3;
};

// Arrow function for sphere surface area (4 * π * r²)
const calculateSphereArea = (radius) => {
    if (radius <= 0) return "Error: Invalid radius";
    return 4 * PI * radius ** 2;
};


// Function to get radius and height dimensions from user
function getDimensions() {
    console.log("=== Geometric Figure Dimensions ===");
    
    // Get user input via prompts
    let radius = parseFloat(prompt("Enter the radius of the geometric figure:"));
    let height = parseFloat(prompt("Enter the height of the geometric figure:"));
    
    // Validate input
    if (isNaN(radius) || isNaN(height)) {
        alert("Error: Please enter valid numbers");
        console.log("Error: Invalid input");
        return;
    }
    
    return {radius, height};
}

// Execute function and store the result in variables
let {radius, height} = getDimensions();
alert("radius: " + radius + ", height: " + height);



/*
// ===== DEMONSTRATION =====

console.log("\n--- Testing Geometric Functions ---");

// Test with hardcoded values
console.log("\nCylinder (radius=5, height=10):");
console.log("Area:", calculateCylinderArea(5, 10).toFixed(2));
console.log("Volume:", calculateCylinderVolume(5, 10).toFixed(2));

console.log("\nCone (radius=3, height=7):");
console.log("Volume:", calculateConeVolume(3, 7).toFixed(2));

console.log("\nSphere (radius=4):");
console.log("Area:", calculateSphereArea(4).toFixed(2));
console.log("Volume:", calculateSphereVolume(4).toFixed(2));

// ===== INTERACTIVE CALCULATOR =====
// Uncomment the line below to run the interactive calculator
// cylinderCalculator();


// Calculate area and volume
let area = calculateCylinderArea(radius, height);
let volume = calculateCylinderVolume(radius, height);

// Display results
console.log(`Cylinder with radius ${radius} and height ${height}:`);
console.log(`Surface Area: ${area.toFixed(2)}`);
console.log(`Volume: ${volume.toFixed(2)}`);

alert(`Cylinder Results:\nSurface Area: ${area.toFixed(2)}\nVolume: ${volume.toFixed(2)}`);

*/