interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
[key: string]: any,
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function(firstName, lastName) {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstructorInterface {
  firstName: string;
  lastName: string;
}

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
    
  workOnHomework(): string {
    return "Currently working";
  }
    
  displayName(): string {
    return this.firstName;
  }
}

const printedTeacher: string = printTeacher("John", "Wick");
console.log("Teacher:", printedTeacher);

const studentInstance: StudentClass = new StudentClass("Sandra", "Bullock");
console.log("Work Status:", studentInstance.workOnHomework());
console.log("Display Name:", studentInstance.displayName());