interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "San Francisco",
};
const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 24,
  location: "San Francisco",
};

const studentsList: Student[] = [student1, student2];
