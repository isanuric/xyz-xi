import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: ""
  });

  console.log(formData);

  function handleOnChange(event) {
    setFormData((prevFormData) => {
      return {
        // return a neu array
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <div className="container form">
      <div className="title">React VI</div>
      <div className="subtitle">Form</div>
      <form action="">
        <input
          type="text"
          name="firstName"
          value={formData.firstName} // controlled components: react controlls the html input
          placeholder="First Name"
          onChange={handleOnChange}
        />

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="LastName"
          onChange={handleOnChange}
        />
        
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleOnChange}
        />
        <textarea 
        name= "comments"
        value={formData.comments}
        placeholder="Comments"
        onChange={handleOnChange}
        />
      </form>
    </div>
  );
}
