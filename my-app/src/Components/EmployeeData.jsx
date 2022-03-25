import React from "react";

function EmployesData({  name, age, address, department, salary, maritalState }) {
    console.log(maritalState)
  return (
    <div
      style={{
        border: "2px solid black",
        width: "260px",
        padding: "50px",
        margin: "10px",
        marginLeft: "36%",
      }}
    >
      <h3>Name : {name}</h3>
      <h3>Age : {age}</h3>
      <h3>Address : {address}</h3>
      <h3>Department : {department}</h3>
      <h3>Salary : {salary}</h3>
      <h3>maritalState : {maritalState ? "Marid" : "Single"}</h3>
    </div>
  );
}

export default EmployesData;
