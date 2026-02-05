// LESSON 5: OBJECTS IN JAVASCRIPT
// Theme: Grading System with Simulated Database (Scale 1.0 - 7.0)

console.log("\n=== LESSON 5: OBJECTS & DB SIMULATION ===");

// 1. HARDCODED "DATABASE" 
const mockDB = {
    courses: [
        { id: "c101", name: "JavaScript Fullstack", instructorId: "i01" }
    ],
    instructors: [
        { id: "i01", name: "William", email: "william@gmail.com" }
    ],
    students: [
        { id: 101, name: "Jorge Antonio", active: true },
        { id: 102, name: "Maria Fernanda", active: true },
        { id: 103, name: "Carla Diaz", active: false }
    ],
    grades: [
        { studentId: 101, courseId: "c101", values: [5.5, 6.0, 5.8, 7.0] },
        { studentId: 102, courseId: "c101", values: [3.0, 3.5, 4.0, 2.5] },
        { studentId: 103, courseId: "c101", values: [6.5, 7.0] } // Incomplete
    ]
};

// 2. HELPER FUNCTIONS 

// Calculate Average of grades
function calculateAverage(grades) {
    if (!grades || grades.length === 0) return 0;
    
    let sum = 0;
    // arrow function forEach
    grades.forEach(num => sum += num);
    /*
    grades.forEach(function(num){
        sum += num;
    })
    */
    return sum / grades.length;
}

// Determine status based on average (Pass mark: 4.0)
function getStudentStatus(average, isActive) {
    if (!isActive) return "DROPPED"; // if student is not active, return DROPPED and exit the function
    return average >= 4.0 ? "PASSED" : "FAILED"; // if average is greater than or equal to 4.0, return PASSED, otherwise return FAILED
}

// 3. DATA RETRIEVAL
function getCourseDetails(courseId) {
    // 1. Find Course & Instructor
    const course = mockDB.courses.find(c => c.id === courseId);
    if (!course) return null;

    const instructor = mockDB.instructors.find(i => i.id === course.instructorId);

    // 2. Create Enrolled Students List (Join students + grades)
    const students = mockDB.students.map(student => {
        const gradeRecord = mockDB.grades.find(g => g.studentId === student.id && g.courseId === courseId);
        const grades = gradeRecord ? gradeRecord.values : [];
        
        // Return enriched student object (Spread syntax copies properties)
        return {
            ...student, // copies id, name, active
            grades,     // shorthand for grades: grades
            finalAverage: calculateAverage(grades)
        };
    });

/*
    return {
            ...student, // similar to id: student.id, name: student.name, active: student.active

    return {
    id: student.id,           // Copied
    name: student.name,       // Copied
    active: student.active,   // Copied
    grades: grades,
    finalAverage: calculateAverage(grades)
};
*/


    // 3. Return Combined Course Object
    return {
        ...course,
        instructor: instructor.name, // Simplify to just the name
        students,
        totalEnrolled: students.length
    };
}

// 4. REPORTING FUNCTION
function generateCourseReport(courseObj) {
    console.log(`\n--- REPORT: ${courseObj.name} (${courseObj.instructor}) ---`);
    console.log("-".repeat(50));
    
    // Destructuring inside the loop parameter for cleaner access
    courseObj.students.forEach(({ id, name, grades, finalAverage, active }) => {
        const status = getStudentStatus(finalAverage, active);
        const avg = finalAverage.toFixed(1);
        
        console.log(`ID: ${id} | ${name.padEnd(15)} | Grades: [${grades}] | Avg: ${avg} -> ${status}`);
    });
    
    console.log("-".repeat(50));
}

// 5. HONOR ROLL (Map & Filter)
// Simple one-liner using implicit return
const getHonorRoll = (courseObj) => 
    courseObj.students
        .filter(s => s.active && s.finalAverage >= 6.0)
        .map(s => ({ 
            studentName: s.name.toUpperCase(), 
            honorGrade: s.finalAverage.toFixed(2) 
        }));


// === EXECUTION ===

const myCourse = getCourseDetails("c101");

if (myCourse) {
    generateCourseReport(myCourse);

    console.log("\n*** HONOR ROLL ***");
    const honorRollList = getHonorRoll(myCourse)
        .map(s => `⭐ ${s.studentName} (${s.honorGrade})`)
        .join("\n");
        
    console.log(honorRollList);
    alert("HONOR ROLL:\n" + honorRollList);

    // alert
    alert(`Loaded Course: ${myCourse.name}\nStudents: ${myCourse.totalEnrolled}`);
} else {
    console.error("Course not found.");
}

