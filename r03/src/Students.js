import { useState, useEffect } from "react";

const Students = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [students, setStudents] = useState([]);

  const noDataTag = (
    <span style={{ fontSize: ".5rem", color: "red" }}>N/A</span>
  );

  const getStudents = async () => {
    setLoading(true);

    setTimeout(async () => {
      const response = await fetch("http://localhost:3000/studentSuccess.json");
      const { status, cls, msg, payload } = await response.json();

      setLoading(false);

      if (!status) {
        setMsg(msg);
        return;
      }

      setStudents(payload);
    }, 5000);
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && msg && <p>{msg}</p>}
      {students.length > 0 && (
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
                  <td>{student.id || noDataTag}</td>
                  <td>{student.regNo || noDataTag}</td>
                  <td>{student.name || noDataTag}</td>
                  <td>{student.branch || noDataTag}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Students;
