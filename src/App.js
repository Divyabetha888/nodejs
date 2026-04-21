import React, { useState } from "react";

function App() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    skills: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Smart Student Profile</h1>

      <input name="name" placeholder="Name" onChange={handleChange} /><br />
      <input name="email" placeholder="Email" onChange={handleChange} /><br />
      <input name="course" placeholder="Course" onChange={handleChange} /><br />
      <input name="skills" placeholder="Skills" onChange={handleChange} /><br />

      <h2>{student.name}</h2>
      <p>{student.email}</p>
      <p>{student.course}</p>
      <p>{student.skills}</p>
    </div>
  );
}

export default App;