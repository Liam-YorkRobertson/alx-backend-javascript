// small more complex http server using express

const express = require('express');
const { readFile } = require('fs').promises;

const app = express();
app.get('/', (_, res) => res.send('Hello Holberton School!'));
app.get('/students', async (_, res) => {
  const data = await readFile(process.argv[2], 'utf-8');
  // eslint-disable-next-line no-use-before-define
  const report = processStudentData(data);
  res.send(`This is the list of our students\n${report}`);
});

function processStudentData(data) {
  const students = {};
  let length = 0;
  data.trim().split('\n').forEach((line, index) => {
    if (index !== 0) {
      length += 1;
      const [firstname, , , field] = line.split(',').map((value) => value.trim());
      students[field] = (students[field] || []).concat(firstname);
    }
  });
  const fields = Object.entries(students).map(([key, value]) => {
    const studentCount = value.length;
    const studentList = value.join(', ');
    return `Number of students in ${key}: ${studentCount}. List: ${studentList}`;
  });
  return [`Number of students: ${length}`, ...fields].join('\n');
}

app.listen(1245);

module.exports = app;
