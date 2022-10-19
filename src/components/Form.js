import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Henry',
  });
  

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value

    if (e.target.type === 'checkbox'){
      value = e.target.checked
    }

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(formData)

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={formData.firstName} />
      <input type="text" onChange={handleChange} value={formData.lastName} />
      <button type="submit" >Submit</button>
    </form>
  );
}

export default Form;
