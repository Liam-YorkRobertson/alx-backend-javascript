// reads database

import { promises as fs } from 'fs';

const readDatabase = async (filePath) => {
  const data = await fs.readFile(filePath, 'utf-8');
  const students = {};
  data.trim().split('\n').forEach((line, index) => {
    if (index !== 0) {
      const [firstname, , , field] = line.split(',').map((value) => value.trim());
      students[field] = [...(students[field] || []), firstname];
    }
  });
  return students;
};

export default readDatabase;
