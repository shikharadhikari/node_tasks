const grades = ["A", "B", "C", "D", "F"];
const studentData = new Map();
for (let i = 1; i <= 200; i++) {
  const randomGrade = grades[Math.floor(Math.random() * grades.length)];
  studentData.set(`Student${i}`, randomGrade);
}

const hasAStudentWithAGrade = Array.from(studentData.values()).includes("A");

const studentsWithBGrade = [];
for (const [name, grade] of studentData) {
  if (grade === "B") {
    studentsWithBGrade.push(name);
  }
}

console.log('At least one student has an "A" grade:', hasAStudentWithAGrade);
console.log('Students with a "B" grade:', studentsWithBGrade);
