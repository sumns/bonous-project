import React, { useState } from "react";
function Contact() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  // const dataform = localStorage.getItem("dataform") || [];
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !num || !lastName) {
      alert("please Enter the all Detail");
    }
    const data = {
      name,
      lastName,
      email,
      num,
    };
    localStorage.setItem("data", JSON.stringify(data));
    setName("");
    setLastName("");
    setEmail("");
    setNum("");
  }
  return (
    <div className="contact">
      <div className="contactContainer">
        <h1>Form Detail</h1>
        <form>
          <label>FirstName:</label>
          <input
            type="text"
            value={name}
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>LastName:</label>
          <input
            type="text"
            value={lastName}
            placeholder="Enter lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <label>Email:</label>
          <input
            type="text"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>phoneNumber:</label>
          <input
            type="text"
            value={num}
            placeholder="Enter Name"
            onChange={(e) => setNum(e.target.value)}
          />
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
