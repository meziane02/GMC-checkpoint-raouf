var Students = [
    {
        name: "raid",
        age: 28,
        id: 4,
        grades: [0, 2, 0, 1, 1],
        address: {
            city: "boumerdass",
            codePostal: 16300,
        },
        contact: {
            email: "raidlaPrincess@gmail.princess",
        },
    },
    {
        id: 6,
        name: "mhamed",
        age: 31,
        grades: [18, 15, 19, 12, 16],
        address: {
            city: "achour",
            codePostal: 16300,
        },
        contact: {
            phone: 5549467,
        },
    },
    {
        id: 2,
        name: "Raouf",
        age: 23,
        grades: [2, 3, 1, 2, 5],
        address: {
            city: "rouiba",
            codePostal: 16300,
        },
        contact: {
            email: "dogo@argentino.comycode",
        },
    },
];
function printStudentDetails(student) {
    var Average = student.grades.reduce(function (acc, grade) {
        return acc + grade;
    }, 0) / student.grades.length;
    console.log("Student: ".concat(student.name, ", Age: ").concat(student.age, "\n        Average Grade: ").concat(Average, ", lives in ").concat(student.address.city));
}
Students.forEach(function (student) {
    printStudentDetails(student);
});
function DisplayStudentAdress(students, home) {
    return students.filter(function (student) { return student.address.city === home; });
}
console.log(DisplayStudentAdress(Students, "achour"));
