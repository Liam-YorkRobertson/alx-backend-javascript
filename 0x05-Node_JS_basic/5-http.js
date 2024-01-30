// more complex small http server using node

const http = require('http');
const { readFile } = require('fs').promises;

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const data = await readFile(process.argv[2], 'utf-8');
    const { length, fields, students } = processStudentData(data);
    res.setHeader('Content-Type', 'text/plain');
    res.end(`This is the list of our students\nNumber of students: ${length}\n${fields}`);
  }
});

function processStudentData(data) {
  const students = {};
  let length = 0;
  data.trim().split('\n').forEach((line, index) => {
    if (index !== 0) {
      length += 1;
      const [firstname, lastname, age, field] = line.split(',').map((value) => value.trim());
      students[field] = (students[field] || []).concat(firstname);
    }
  });
  const fields = Object.entries(students).map(([key, value]) => {
    const studentsCount = value.length;
    const studentList = value.join(', ');
    return `Number of students in ${key}: ${studentsCount}. List: ${studentList}`;
  });
  return { length, fields: fields.join('\n') };
}

app.listen(1245);

module.exports = app;
