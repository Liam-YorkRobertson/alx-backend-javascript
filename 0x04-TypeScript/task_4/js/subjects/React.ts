namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }
  
  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }
  
    getAvailableTeacher(): string {
      return this.teacher && this.teacher.experienceTeachingC !== undefined
        ? `Available Teacher: ${this.teacher.firstName}`
        : "No available teacher";
    } 
  }
}