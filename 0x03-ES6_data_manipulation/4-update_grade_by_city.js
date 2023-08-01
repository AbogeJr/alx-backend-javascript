export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };
  const updated_students = [];
  const filtered_students = students.filter((student) => student.location === city).map((student) => updated_students.push({
    id: student.id,
    firstName: student.firstName,
    location: student.location,
    grade: newGrades.filter((grd) => grd.studentId === student.id).grade || 'N/A',
  }));

  return updated_students;
}
