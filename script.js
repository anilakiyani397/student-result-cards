
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

    if (average > students[topper].average || i === 0) {
        topper = i;
    }
}

let container = document.getElementById("result-container");

for (let i = 0; i < students.length; i++) {

    let student = students[i];

    container.innerHTML += `
        <div class="result-card">
            <h3>${student.name}</h3>
            <p>Marks: ${student.marks.join(", ")}</p>
            <p>Average: ${student.average.toFixed(2)}</p>
            <p>Grade: ${student.grade}</p>
            <p>Status: ${student.status}</p>
            ${i === topper ? "<strong>Topper</strong>" : ""}
        </div>
    `;
}
