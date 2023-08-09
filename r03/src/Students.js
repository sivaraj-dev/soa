const Students = () => {
  const students = [
    {
      id: 1,
      regNo: "SOAMCA01",
      name: "Student 1",
      branch: "MCA",
    },
    {
      id: 2,
      regNo: "SOAMCA02",
      name: "Student 2",
      branch: "MCA",
    },
    {
      id: 3,
      regNo: "SOAMCA03",
      name: "Student 3",
      branch: "MCA",
    },
    {
      id: 4,
      regNo: "SOAMCA04",
      name: "Student 4",
      branch: "MCA",
    },
    {
      id: 5,
      regNo: "SOAMCA05",
      name: "Student 5",
      branch: "MCA",
    },
  ];

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>S. No</th>
            <th>Reg. No</th>
            <th>Name</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.regNo}</td>
                <td>{student.name}</td>
                <td>{student.branch}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Students;
