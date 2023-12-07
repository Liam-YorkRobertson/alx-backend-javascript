interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
  
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
  
class Director implements DirectorInterface {
  workFromHome = (): string => "Working from home"
  getCoffeeBreak = (): string => "Getting a coffee break";
  workDirectorTasks = (): string => "Getting to director tasks";
}
  
class Teacher implements TeacherInterface {
  workFromHome = (): string => "Cannot work from home";
  getCoffeeBreak = (): string => "Cannot have a break";
  workTeacherTasks = (): string => "Getting to work";
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
console.log(teachClass('Math'));
console.log(teachClass('History'));
