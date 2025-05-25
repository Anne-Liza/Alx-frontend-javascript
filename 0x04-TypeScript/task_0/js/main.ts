// Task 0: Student interface + table
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Wangui",
  age: 22,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "Mombasa",
};

const studentsList: Student[] = [student1, student2];

const studentTable = document.createElement("table");
studentTable.border = "1";

const studentHeader = document.createElement("tr");
["First Name", "Location"].forEach((text) => {
  const th = document.createElement("th");
  th.textContent = text;
  studentHeader.appendChild(th);
});
studentTable.appendChild(studentHeader);

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  [student.firstName, student.location].forEach((text) => {
    const td = document.createElement("td");
    td.textContent = text;
    row.appendChild(td);
  });
  studentTable.appendChild(row);
});

document.body.appendChild(studentTable);

// Task 1: Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

// Task 2: Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  location: 'Nairobi',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// Task 3: printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // Output: "J. Doe"

// Task 4: StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("Grace", "Wambui");
console.log(student.displayName());        // Grace
console.log(student.workOnHomework());     // Currently working
