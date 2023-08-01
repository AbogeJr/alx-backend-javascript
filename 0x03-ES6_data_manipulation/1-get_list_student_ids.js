/**
 * getListStudentIds - returns an array of ids from a list of object
 */

export default function getListStudentIds(students) {
  const studentIds = [];

  if (students instanceof Array !== true) {
    return studentIds;
  }

  students.map((student) => studentIds.push(student.id));

  return studentIds;
}
