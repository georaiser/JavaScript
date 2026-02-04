// LESSON 1: INTRODUCTION TO JAVASCRIPT LANGUAGE
console.log("Hello, welcome to JavaScript programming!");

let userName = prompt("enter your name:", "ghost");

if (userName !== null && userName !== "") {
    console.log("Hello, " + userName + "!");
    alert("Hello, " + userName + "!"); // Displays a browser alert
} else {
    console.log("wrong name value");
    alert("You didn't enter a valid name.");
}


// LESSON 2: VARIABLES, EXPRESSIONS AND CONDITIONAL STATEMENTS

// Create variables that store numbers, text, and boolean values
const pi = "3.14159";             // pi variable (constant)
// let isStudent = true;             // Boolean variable

let userAge = prompt("enter your age:", "18");    

if (userAge !== null && userAge !== "" && userAge >= 18) {
    console.log("Hello, " + userName + "! You are " + userAge + " years old.");
    alert("Hello, " + userName + "! You are " + userAge + " years old.");

    let isStudent = confirm("Are you a student?");

    if (isStudent) {
        console.log("As a student, you could calculate cylinder area and volume: ");
        alert("As a student, you could calculate the cylinder area and volume: ");

        const imgSrc = "./img/cilindro.png";
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = "Formulas del área y volumen de un cilindro";
        document.body.appendChild(img);

        // Use setTimeout to allow the image to render before blocking with prompt
        setTimeout(function() {
            let radius = parseFloat(prompt("Enter the radius of the cylinder:"));
            let height = parseFloat(prompt("Enter the height of the cylinder:"));
            
            let area = 2 * pi * radius * (radius + height);
            let volume = pi * radius ** 2 * height;
            
            console.log("The area of the cylinder is: " + area.toFixed(2));
            console.log("The volume of the cylinder is: " + volume.toFixed(2));
            alert("The area of the cylinder is: " + area.toFixed(2));
            alert("The volume of the cylinder is: " + volume.toFixed(2));

            // Remove the image after the calculation is done
            img.remove();
            
            alert("Good bye.");
        }, 100);


    }
    
} else if (userAge !== null && userAge !== "" && userAge < 18) {
    console.log("Hello, " + userName + "! You are a minor at " + userAge + " years old, good bye.");
    alert("Hello, " + userName + "! You are a minor at " + userAge + " years old, good bye.");
} else {
    console.log("wrong age value");
    alert("You didn't enter a valid age.");
}