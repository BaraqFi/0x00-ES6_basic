export default function getListStudentIds(studentList) {

  var studentList = [
	{firstname: "Guillaume", id: 1, location: "San Francisco"},
	{firstname: "James", id: 2, location: "Columbia"},
	{firstname: "Serena", id: 5, location: "San Francisco"}
    ];
  return studentList.map(student => student.id);
}
