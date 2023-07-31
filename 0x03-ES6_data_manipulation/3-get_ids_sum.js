export default function getStudentIdsSum(students) {
	const id_sum = students.reduce((accumulator,currentItem) => {
		return accumulator + currentItem.id;
	}, 0);
	return id_sum;
}
