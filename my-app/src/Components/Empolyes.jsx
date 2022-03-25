import React,{useState,useEffect} from 'react'
import EmployesData from './EmployeeData';
import EmployesInput from './EmployesInput'

function Empolyes() {

    
     const [data,setData] = useState([]);

     useEffect(() => {
       getEmployesData();
     },[]);

     const  getEmployesData = async() =>{
       try {
          let res = await fetch(`http://localhost:3004/EmployesData`);
          let fetchdata = await res.json();
          // console.log("fetchdata", fetchdata);
          setData(fetchdata)

       } catch (err) {
         console.log(err)
       }
    }
     


const handleSubmit = (e,formData) => {
      e.preventDefault();

    const { name, age, address, department, salary, maritalState } = formData;
  
          const payLoad = {
            name,
            age,
            address,
            department,
            salary,
            maritalState,
          };
          // console.log(payLoad)
          const payLoadJson = JSON.stringify(payLoad);

          fetch(`http://localhost:3004/EmployesData`, {
            method: "POST",
            body: payLoadJson,
            headers: {
              "content-type": "application/json",
            },
          }).then((res) => {
            getEmployesData();
          });

      
}

// const handleChange = (props) => {
// console.log(props)
// }


  return (
    <div>
      <EmployesInput handleSubmitProps={handleSubmit} />;
      <div >
        {
        data.map((item, id) => (
          <EmployesData key={id} {...item} />
        ))
        }
      </div>
    </div>
  );


}

export default Empolyes