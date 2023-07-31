/**
 * getListStudents - returns an array of objects
 * */

export default function getListStudents() {
	const arr = new Array();

	arr.push({id:1, fistName:'Guillaume', location: 'San Francisco'});
	arr.push({id:2, fistName:'James', location: 'Columbia'});
	arr.push({id:5, fistName:'Serena', location: 'San Francisco'});

	return arr;
}
