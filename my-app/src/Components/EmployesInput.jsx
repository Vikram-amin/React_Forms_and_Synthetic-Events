import React,{useState} from 'react'
import styles from "./EmpolyesInput.module.css";

function EmployesInput({handleSubmitProps}) {


    let initialValue = {
        name : "",
        age : "",
        address : "",
        department : "",
        salary : "",
        maritalState : false,
    }


     const [formData, setFormData] = useState(initialValue);

     const { name, age, address, department, salary ,maritalState} = formData

    const handleChange = (e) => {
      const { name, value, type ,checked } = e.target;
      setFormData({ ...formData, [name]: type === "checkbox" ? checked : value }); // {...formData , [name]:value } overWrite the prvious value in object
        
    } 

    

  return (
    <div className="container">
      <form
        onSubmit={(e) => handleSubmitProps(e, formData)}
        className={styles.form}
      >
        <label>
          Name :
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            value={name}
          />
        </label>
        <br />

        <label>
          Age :
          <input
            name="age"
            type="number"
            placeholder="Age"
            onChange={handleChange}
            value={age}
          />
        </label>
        <br />

        <label>
          Address :
          <input
            name="address"
            type="text"
            placeholder="Address"
            onChange={handleChange}
            value={address}
          />
        </label>
        <br />

        <label>
          Department :
          <select onChange={handleChange} name="department" value={department}>
            <option value="">Select department</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="HR">HR</option>
            <option value="Maintanence">Maintanace</option>
          </select>
        </label>
        <br />

        <label>
          Salary :
          <input
            name="salary"
            type="number"
            placeholder="Salary"
            onChange={handleChange}
            value={salary}
          />
        </label>
        <br />

        <label>
          Is marrid :
          <input
            name="maritalState"
            type="checkbox"
            onChange={handleChange}
            checked={maritalState}
          />
        </label>
        <br />
        <label>
          <input type="submit" value="SUBMIT" />
        </label>
      </form>
    </div>
  );
}

export default EmployesInput