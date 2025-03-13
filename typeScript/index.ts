interface StudentAddress {
  city: string;
  codePostal: number;
}
type StudentContact = { email: string } | { phone: number };
interface IStudent {
  id: number;
  name: string;
  age: number;
  grades: number[];
  address: StudentAddress;
  contact: StudentContact;
}

const Students: IStudent[] = [
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

function printStudentDetails(student: IStudent): void {
  const Average: number =
    student.grades.reduce((acc, grade) => {
      return acc + grade;
    }, 0) / student.grades.length;
  console.log(`Student: ${student.name}, Age: ${student.age}
        Average Grade: ${Average}, lives in ${student.address.city}`);
}
Students.forEach((student) => {
  printStudentDetails(student);
});
function DisplayStudentAdress(students: IStudent[], home: string): IStudent[] {
  return students.filter((student) => student.address.city === home);
}

console.log(DisplayStudentAdress(Students, `achour`));
