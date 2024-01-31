// specific info about students

const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const allStudentsData = await readDatabase('./database.csv');
      const response = ['This is the list of our students'];
      Object.entries(allStudentsData)
        .sort(([fieldA], [fieldB]) => fieldA.localeCompare(fieldB))
        .forEach(([field, students]) => response.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`));
      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const validMajors = ['CS', 'SWE'];
    const allStudentsData = await readDatabase('./database.csv');
    const studentsInMajor = allStudentsData[major] || [];
    const response = `List: ${studentsInMajor.join(', ')}`;
    const statusCode = validMajors.includes(major) ? 200 : 500;
    res.status(statusCode).send(validMajors.includes(major) ? response : 'Major parameter must be CS or SWE');
  }
}

module.exports = StudentsController;
