export default function getStudentsByLocation(students, city) {
  const filtered = students.filter((student) => student.location === city);
  return filtered;
}
