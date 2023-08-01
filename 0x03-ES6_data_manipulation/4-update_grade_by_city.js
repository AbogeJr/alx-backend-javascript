export default function updateStudentGradeByCity(students, city, newGrades) {
  const updatedStudents = [];
  students.filter((student) => student.location === city).map((student) => updatedStudents.push({
    id: student.id,
    firstName: student.firstName,
    location: student.location,
    grade: newGrades.filter((grd) => grd.studentId === student.id).grade || 'N/A',
  }));

  return updatedStudents;
}
