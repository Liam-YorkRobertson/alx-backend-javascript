// reading from a file synchronously

const fs = require('fs');

function countStudents(path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf8');
    const lines = fileContent.split('\n');
    const nonEmptyLines = lines.filter((line) => line.trim() !== '');
    const studentData = nonEmptyLines.map((line) => line.split(',').map((value) => value.trim()));
    const [, ...studentRecords] = studentData;
    console.log(`Number of students: ${studentRecords.length}`);
    const csStudents = studentRecords
      .filter((record) => record[3].toLowerCase() === 'cs')
      .map((record) => record[0]);
    const sweStudents = studentRecords
      .filter((record) => record[3].toLowerCase() === 'swe')
      .map((record) => record[0]);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
