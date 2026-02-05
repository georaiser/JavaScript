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

let isStudent = confirm("Are you a student?");

if (isStudent) {

    console.log("Hello, " + userName + "! You are a student.");
    alert("Hello, " + userName + "! You are a student.");

    let geometricFigure = prompt("enter geometric figure (cylinder, cone, sphere):", "cylinder");    
    
    if (geometricFigure !== null && geometricFigure !== "") {

        switch (geometricFigure) {
            case "cylinder":
                console.log("As a student, you could calculate cylinder area and volume: ");
                alert("As a student, you could calculate the cylinder area and volume: ");

                const imgSrc = "./img/cilindro.png";
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = "Formulas de área y volumen de un cilindro";
                // add image to body
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
                    
                    // alert("Good bye.");
                }, 100);

                break;

            case "cone":
                console.log("As a student, you could calculate cone area and volume: ");
                alert("As a student, you could calculate the cone area and volume: ");
                break;

            case "sphere":
                console.log("As a student, you could calculate sphere area and volume: ");
                alert("As a student, you could calculate the sphere area and volume: ");
                break;
            default:
                console.log("wrong geometric figure value");
                alert("You didn't enter a valid geometric figure.");
                break;
        }
    }

} else {
    console.log("you are not an student, good bye");
    alert("You are not an student, good bye.");
}

