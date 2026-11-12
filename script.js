
let students = [
    {
        name: "Anila",
        marks: [85, 90, 88]
    },
    {
        name: "Hafsa",
        marks: [75, 80, 78]
    },
    {
        name: "Hiba",
        marks: [65, 70, 68]
    },
    {
        name: "Dawood",
        marks: [45, 50, 40]
    }
];

let topper = 0;
let totalAverage = 0;
let passedStudents = 0;

for (let i = 0; i < students.length; i++) {

    let total = 0;

    for (let mark of students[i].marks) {
        total += mark;
    }

    let average = total / students[i].marks.length;

    let grade;

    if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    let status = average >= 50 ? "Pass" : "Fail";

    students[i].average = average;
    students[i].grade = grade;
    students[i].status = status;

    totalAverage += average;

    if (status === "Pass") {
        passedStudents++;
    }

    if (average > students[topper].average || i === 0) {
        topper = i;
    }
}

let overallAverage = totalAverage / students.length;

let summaryContainer = document.getElementById("summary-container");

summaryContainer.innerHTML = `
    <div class="summary-card">
        <h3>Total Students</h3>
        <p>${students.length}</p>
    </div>

    <div class="summary-card">
        <h3>Overall Average</h3>
        <p>${overallAverage.toFixed(2)}%</p>
    </div>

    <div class="summary-card">
        <h3>Passed Students</h3>
        <p>${passedStudents}</p>
    </div>

    <div class="summary-card">
        <h3>Class Topper</h3>
        <p>${students[topper].name}</p>
    </div>
`;

let container = document.getElementById("result-container");

for (let i = 0; i < students.length; i++) {

    let student = students[i];

    container.innerHTML += `
        <div class="result-card">
            <h3>${student.name}</h3>
            <p>Marks: ${student.marks.join(", ")}</p>
            <p>Average: ${student.average.toFixed(2)}%</p>
            <p>Grade: ${student.grade}</p>
            <p>Status: ${student.status}</p>
            ${i === topper ? "<strong>Class Topper</strong>" : ""}
        </div>
    `;
}
