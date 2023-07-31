/**
 * getListStudentIds - returns an array of ids from a list of object
 */


export default function getListStudentIds(students) {
	
	const student_ids = []

	if(students instanceof Array !== true) {
		return student_ids;
	}

	students.map((student) => {
		student_ids.push(student.id);
	})

	return student_ids;
}
