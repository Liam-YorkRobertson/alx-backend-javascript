// reading from a file asyncronously

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n');
        const nonEmptyLines = lines.filter((line) => line.trim() !== '');
        const studentData = nonEmptyLines.map((line) => line.split(',').map((value) => value.trim()));
        const [, ...studentRecords] = studentData;
        console.log(`Number of students: ${studentRecords.length}`);
        const csStudents = [];
        const sweStudents = [];
        studentData.forEach((record, index) => {
          if (index !== 0) {
            const firstName = record[0];
            const field = record[3].toLowerCase();
            if (field === 'cs') {
              csStudents.push(firstName);
            } else if (field === 'swe') {
              sweStudents.push(firstName);
            }
          }
        });
        console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
        console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
        resolve();
      }
    });
  });
}

module.exports = countStudents;
