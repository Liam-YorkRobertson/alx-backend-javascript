export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);
  const updatedStudents = studentsInCity.map((student) => {
    const matchedGrade = newGrades.find((grade) => grade.studentId === student.id);
    const updatedGrade = matchedGrade ? matchedGrade.grade : 'N/A';

    return {
      ...student,
      grade: updatedGrade,
    };
  });
  return updatedStudents;
}
