export default function getStudentIdsSum(students) {
  const sumReducer = (accumulator, student) => accumulator + student.id;
  const initialValue = 0;

  return students.reduce(sumReducer, initialValue);
}
