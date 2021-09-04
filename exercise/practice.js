//* Declare employess
let students = [
    {
        name: "Apple",
        score: 50,
        grade : null
    },
    {
        name: "Banana",
        score: 45,
        grade : null
    },
    {
        name: "Apple",
        score: 78,
        grade : null
    },
];

function getGrade(student) {
    if (student.score>=80)
        student.grade = "A";
    else if (student.score>=70)
        student.grade = "B";
    else if (student.score>=60)
        student.grade = "C";
    else if (student.score>=50)
        student.grade = "D";
    else if (student.score<50)
        student.grade = "F";
    return student.grade;
}

//* Declare function getSalaryText to format text
function getStudentText(student, fn) {
    return `${student.name} : score : ${student.score} - grade : ${fn(student)}`;
}

console.log(`Get length of students ${students.length} person\n`);
students.forEach((student) =>
    setTimeout(() => {
        console.log(getStudentText(student, getGrade));
    }, 3000)
);