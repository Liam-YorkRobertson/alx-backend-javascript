interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentsList: Student[] = [
    { firstName: "Bob", lastName: "Marley", age: 20, location: "Texas" },
    { firstName: "Zoe", lastName: "Barley", age: 19, location: "Chicago" },
  ];

const table = document.createElement("table");

const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell(0);
const headerCell2 = headerRow.insertCell(1);
headerCell1.textContent = "First Name";
headerCell2.textContent = "Location";

studentsList.map((student) => {
  const row = table.insertRow();
  row.insertCell(0).textContent = student.firstName;
  row.insertCell(1).textContent = student.location;
});

document.body.appendChild(table);
