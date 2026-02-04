// ============================================================
// INTERACTIVE JAVASCRIPT LEARNING CONSOLE - COMPLETE CODE
// Module 3: JavaScript Programming Fundamentals
// ============================================================

// ============================================================
// LESSON 1: INTRODUCTION TO JAVASCRIPT LANGUAGE
// Objective: Get familiar with basic JavaScript syntax
// ============================================================

console.log("=== LESSON 1: INTRODUCTION TO JAVASCRIPT ===");

// Task 1: Write your name to the console
console.log("My name is John Doe");
console.log("Hello, World!");

// Task 2: Display messages in the browser using alert()
// Uncomment the line below to test (it will show a popup)
// alert("Welcome to JavaScript Learning!");

// Additional practice
console.log("Current date:", new Date().toLocaleDateString());
console.log("JavaScript is awesome!");


// ============================================================
// LESSON 2: VARIABLES, EXPRESSIONS AND CONDITIONAL STATEMENTS
// Objective: Learn to handle variables, operators and conditionals
// ============================================================

console.log("\n=== LESSON 2: VARIABLES, EXPRESSIONS & CONDITIONALS ===");

// Task 1: Create variables that store numbers, text, and boolean values
let age = 25;                    // Number variable
const name = "Maria Garcia";     // String variable (constant)
let isStudent = true;            // Boolean variable
var country = "Spain";           // Variable using var (old way)

console.log("Name:", name);
console.log("Age:", age);
console.log("Is student:", isStudent);
console.log("Country:", country);

// Task 2: Implement mathematical operations using variables
let number1 = 50;
let number2 = 10;

let sum = number1 + number2;
let subtraction = number1 - number2;
let multiplication = number1 * number2;
let division = number1 / number2;
let modulus = number1 % number2;

console.log("\nMathematical Operations:");
console.log(number1 + " + " + number2 + " = " + sum);
console.log(number1 + " - " + number2 + " = " + subtraction);
console.log(number1 + " * " + number2 + " = " + multiplication);
console.log(number1 + " / " + number2 + " = " + division);
console.log(number1 + " % " + number2 + " = " + modulus);

// Task 3: Implement conditional structures (if, else if, else)
let score = 85;

console.log("\nGrade Evaluation:");
if (score >= 90) {
    console.log("Grade: A - Excellent!");
} else if (score >= 80) {
    console.log("Grade: B - Very Good!");
} else if (score >= 70) {
    console.log("Grade: C - Good");
} else if (score >= 60) {
    console.log("Grade: D - Pass");
} else {
    console.log("Grade: F - Failed");
}

// Task 4: Implement mathematical, relational and logical operators
let x = 15;
let y = 20;
let z = 15;

console.log("\nRelational Operators:");
console.log(x + " > " + y + " is", x > y);           // Greater than
console.log(x + " < " + y + " is", x < y);           // Less than
console.log(x + " >= " + z + " is", x >= z);         // Greater or equal
console.log(x + " <= " + y + " is", x <= y);         // Less or equal
console.log(x + " === " + z + " is", x === z);       // Strict equality
console.log(x + " !== " + y + " is", x !== y);       // Strict inequality

console.log("\nLogical Operators:");
let isSunny = true;
let isWarm = true;
let isRaining = false;

console.log("Sunny AND Warm:", isSunny && isWarm);          // AND operator
console.log("Sunny OR Raining:", isSunny || isRaining);     // OR operator
console.log("NOT Raining:", !isRaining);                    // NOT operator

// Task 5: Use conditional and repetition structures together
console.log("\nNumbers divisible by 3 (1-20):");
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i + " is divisible by 3");
    }
}

// Additional example: Check if number is positive, negative or zero
let testNumber = -5;
if (testNumber > 0) {
    console.log(testNumber + " is positive");
} else if (testNumber < 0) {
    console.log(testNumber + " is negative");
} else {
    console.log("The number is zero");
}


// ============================================================
// LESSON 3: ARRAYS AND LOOPS
// Objective: Study the use of arrays and repetition structures
// ============================================================

console.log("\n=== LESSON 3: ARRAYS AND LOOPS ===");

// Task 1: Create an array with string elements
let fruits = ["Apple", "Banana", "Orange", "Mango", "Strawberry"];
console.log("Fruits array:", fruits);
console.log("First fruit:", fruits[0]);
console.log("Array length:", fruits.length);

// More array examples
let colors = ["Red", "Blue", "Green", "Yellow"];
let students = ["Ana", "Carlos", "Luis", "Maria"];

console.log("\nColors:", colors);
console.log("Students:", students);

// Task 2: Define nested arrays (arrays within arrays)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("\nMatrix (nested array):", matrix);
console.log("Element at [0][1]:", matrix[0][1]);  // Returns 2
console.log("Element at [2][2]:", matrix[2][2]);  // Returns 9

// Another nested array example
let classroom = [
    ["John", 85, "Math"],
    ["Sarah", 92, "Science"],
    ["Mike", 78, "History"]
];

console.log("\nClassroom data:");
console.log("First student:", classroom[0][0], "- Grade:", classroom[0][1]);

// Task 3: Use loop structures (for, while, do-while) with arrays
console.log("\nUsing FOR loop to iterate fruits:");
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit " + (i + 1) + ": " + fruits[i]);
}

console.log("\nUsing WHILE loop to iterate colors:");
let colorIndex = 0;
while (colorIndex < colors.length) {
    console.log("Color: " + colors[colorIndex]);
    colorIndex++;
}

console.log("\nUsing DO-WHILE loop to count:");
let counter = 1;
do {
    console.log("Count: " + counter);
    counter++;
} while (counter <= 5);

// FOR-OF loop (modern way)
console.log("\nUsing FOR-OF loop:");
for (let student of students) {
    console.log("Student name:", student);
}

// Iterating through nested arrays
console.log("\nIterating through matrix:");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log("Position [" + i + "][" + j + "] = " + matrix[i][j]);
    }
}

// Array methods examples
console.log("\nArray methods:");
fruits.push("Grape");                    // Add element at the end
console.log("After push:", fruits);

fruits.pop();                            // Remove last element
console.log("After pop:", fruits);

fruits.unshift("Pineapple");            // Add element at the beginning
console.log("After unshift:", fruits);

let slicedFruits = fruits.slice(1, 3);  // Get portion of array
console.log("Sliced fruits:", slicedFruits);


// ============================================================
// LESSON 4: JAVASCRIPT FUNCTIONS
// Objective: Modularize code using functions
// ============================================================

console.log("\n=== LESSON 4: JAVASCRIPT FUNCTIONS ===");

// Task 1: Create a function that performs a mathematical operation
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

console.log("Addition: 10 + 5 =", add(10, 5));
console.log("Subtraction: 10 - 5 =", subtract(10, 5));
console.log("Multiplication: 10 * 5 =", multiply(10, 5));
console.log("Division: 10 / 5 =", divide(10, 5));

// Task 2: Encapsulate a function that receives parameters and returns a result
function calculateArea(width, height) {
    let area = width * height;
    return area;
}

function calculatePerimeter(width, height) {
    let perimeter = 2 * (width + height);
    return perimeter;
}

let rectangleWidth = 8;
let rectangleHeight = 5;

console.log("\nRectangle calculations:");
console.log("Area:", calculateArea(rectangleWidth, rectangleHeight));
console.log("Perimeter:", calculatePerimeter(rectangleWidth, rectangleHeight));

// Function with multiple operations
function performCalculations(num1, num2) {
    let results = {
        sum: num1 + num2,
        difference: num1 - num2,
        product: num1 * num2,
        quotient: num1 / num2
    };
    return results;
}

let calculations = performCalculations(20, 4);
console.log("\nCalculations for 20 and 4:", calculations);

// Task 3: Use arrow functions to optimize code
const square = (n) => n * n;
const cube = (n) => n * n * n;
const isEven = (n) => n % 2 === 0;
const greet = (name) => `Hello, ${name}!`;

console.log("\nArrow functions:");
console.log("Square of 7:", square(7));
console.log("Cube of 3:", cube(3));
console.log("Is 10 even?", isEven(10));
console.log(greet("Alice"));

// Arrow function with multiple parameters
const calculateCircleArea = (radius) => Math.PI * radius * radius;
console.log("Circle area (radius 5):", calculateCircleArea(5).toFixed(2));

// Arrow function with array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evenNumbers = numbers.filter(n => n % 2 === 0);

console.log("\nOriginal numbers:", numbers);
console.log("Doubled:", doubled);
console.log("Even numbers only:", evenNumbers);

// Function that uses other functions
function calculator(operation, a, b) {
    switch(operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            return "Invalid operation";
    }
}

console.log("\nUsing calculator function:");
console.log("Calculator(add, 15, 7):", calculator('add', 15, 7));
console.log("Calculator(multiply, 6, 4):", calculator('multiply', 6, 4));


// ============================================================
// LESSON 5: BASIC CONCEPTS OF OBJECTS IN JAVASCRIPT
// Objective: Use objects to organize data efficiently
// ============================================================

console.log("\n=== LESSON 5: OBJECTS IN JAVASCRIPT ===");

// Task 1: Create an object with properties and values
let person = {
    firstName: "Ana",
    lastName: "Martinez",
    age: 28,
    city: "Barcelona",
    isEmployed: true,
    hobbies: ["Reading", "Swimming", "Traveling"]
};

console.log("Person object:", person);
console.log("First name:", person.firstName);
console.log("Age:", person.age);
console.log("Hobbies:", person.hobbies);

// Another object example
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "Blue",
    mileage: 15000
};

console.log("\nCar object:", car);
console.log("Car:", car.brand, car.model, car.year);

// Task 2: Implement methods inside an object
let calculator2 = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return b !== 0 ? a / b : "Error: Division by zero";
    }
};

console.log("\nCalculator object methods:");
console.log("15 + 8 =", calculator2.add(15, 8));
console.log("15 - 8 =", calculator2.subtract(15, 8));
console.log("15 * 8 =", calculator2.multiply(15, 8));
console.log("15 / 8 =", calculator2.divide(15, 8));

// Object with methods using 'this' keyword
let student = {
    name: "Carlos Lopez",
    grades: [85, 90, 78, 92, 88],
    
    getAverage: function() {
        let sum = 0;
        for (let grade of this.grades) {
            sum += grade;
        }
        return sum / this.grades.length;
    },
    
    getHighestGrade: function() {
        return Math.max(...this.grades);
    },
    
    getLowestGrade: function() {
        return Math.min(...this.grades);
    },
    
    displayInfo: function() {
        return `Student: ${this.name}, Average: ${this.getAverage().toFixed(2)}`;
    }
};

console.log("\nStudent object:");
console.log(student.displayInfo());
console.log("Highest grade:", student.getHighestGrade());
console.log("Lowest grade:", student.getLowestGrade());

// Task 3: Use an array of objects and access properties (with . or [])
let employees = [
    { id: 1, name: "Laura Garcia", position: "Developer", salary: 50000 },
    { id: 2, name: "Pedro Sanchez", position: "Designer", salary: 45000 },
    { id: 3, name: "Sofia Rodriguez", position: "Manager", salary: 60000 },
    { id: 4, name: "Miguel Torres", position: "Analyst", salary: 48000 }
];

console.log("\nArray of employee objects:");
console.log("All employees:", employees);

// Access using dot notation
console.log("\nAccessing with dot notation:");
console.log("First employee:", employees[0].name, "-", employees[0].position);
console.log("Second employee salary:", employees[1].salary);

// Access using bracket notation
console.log("\nAccessing with bracket notation:");
console.log("Third employee:", employees[2]["name"], "-", employees[2]["position"]);

// Iterate through array of objects
console.log("\nAll employees details:");
for (let i = 0; i < employees.length; i++) {
    console.log(`${employees[i].id}. ${employees[i].name} - ${employees[i].position} - $${employees[i].salary}`);
}

// Using forEach with array of objects
console.log("\nUsing forEach:");
employees.forEach(function(employee) {
    console.log(`${employee.name} earns $${employee.salary} as a ${employee.position}`);
});

// Array of objects - Products example
let products = [
    { code: "P001", name: "Laptop", price: 999.99, stock: 15 },
    { code: "P002", name: "Mouse", price: 25.50, stock: 50 },
    { code: "P003", name: "Keyboard", price: 75.00, stock: 30 },
    { code: "P004", name: "Monitor", price: 299.99, stock: 20 }
];

console.log("\nProducts inventory:");
products.forEach(product => {
    console.log(`${product.code}: ${product.name} - $${product.price} (Stock: ${product.stock})`);
});

// Find total inventory value
let totalValue = 0;
for (let product of products) {
    totalValue += product.price * product.stock;
}
console.log("\nTotal inventory value: $" + totalValue.toFixed(2));

// Complex nested object
let company = {
    name: "Tech Solutions Inc.",
    founded: 2010,
    employees: [
        { name: "John Doe", role: "CEO" },
        { name: "Jane Smith", role: "CTO" }
    ],
    departments: {
        engineering: { budget: 500000, staff: 25 },
        marketing: { budget: 200000, staff: 10 },
        sales: { budget: 300000, staff: 15 }
    },
    getTotalBudget: function() {
        let total = 0;
        for (let dept in this.departments) {
            total += this.departments[dept].budget;
        }
        return total;
    }
};

console.log("\nCompany information:");
console.log("Company:", company.name);
console.log("CEO:", company.employees[0].name);
console.log("Engineering budget:", company.departments.engineering.budget);
console.log("Total budget:", company.getTotalBudget());


// ============================================================
// FINAL INTEGRATED EXAMPLE - STUDENT MANAGEMENT SYSTEM
// ============================================================

console.log("\n=== INTEGRATED EXAMPLE: STUDENT MANAGEMENT ===");

// Complete application using all concepts learned
let studentManagement = {
    students: [
        { id: 1, name: "Maria Lopez", grades: [85, 90, 88] },
        { id: 2, name: "Juan Perez", grades: [78, 82, 85] },
        { id: 3, name: "Ana Garcia", grades: [92, 95, 90] }
    ],
    
    addStudent: function(id, name, grades) {
        this.students.push({ id: id, name: name, grades: grades });
        console.log(`Student ${name} added successfully`);
    },
    
    getStudentAverage: function(studentId) {
        for (let student of this.students) {
            if (student.id === studentId) {
                let sum = 0;
                for (let grade of student.grades) {
                    sum += grade;
                }
                return sum / student.grades.length;
            }
        }
        return null;
    },
    
    displayAllStudents: function() {
        console.log("\n--- All Students ---");
        for (let student of this.students) {
            let avg = this.getStudentAverage(student.id);
            console.log(`${student.id}. ${student.name} - Average: ${avg.toFixed(2)}`);
        }
    },
    
    getTopStudent: function() {
        let topStudent = null;
        let highestAvg = 0;
        
        for (let student of this.students) {
            let avg = this.getStudentAverage(student.id);
            if (avg > highestAvg) {
                highestAvg = avg;
                topStudent = student;
            }
        }
        
        return { student: topStudent, average: highestAvg };
    }
};

// Use the student management system
studentManagement.displayAllStudents();

let topPerformer = studentManagement.getTopStudent();
console.log(`\nTop student: ${topPerformer.student.name} with average ${topPerformer.average.toFixed(2)}`);

studentManagement.addStudent(4, "Carlos Ruiz", [88, 91, 87]);
studentManagement.displayAllStudents();

console.log("\n=== ALL LESSONS COMPLETED! ===");
console.log("You have successfully learned:");
console.log("✓ JavaScript basics and console operations");
console.log("✓ Variables, operators, and conditionals");
console.log("✓ Arrays and loop structures");
console.log("✓ Functions and code modularization");
console.log("✓ Objects and data organization");
console.log("\nKeep practicing and building amazing projects!");