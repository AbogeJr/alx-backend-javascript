export default function getStudentIdsSum(students) {
  const idSum = students.reduce((accumulator, currentItem) => accumulator + currentItem.id, 0);
  return idSum;
}
