import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

//clear this and re-direct to main page
const New = () => {
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    first: "",
    last: "",
  });

  //! added for errors:
  const [firstErr, setFirstErr] = useState("Test");
  const [lastErr, setLastErr] = useState("Test");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/users", formData)
      // .then(res=>console.log(res))
      .then((res) => {
        setFormData({
          first: "",
          last: "",
        });
        navigator("/");
      })
      // .catch(err=>console.log(err))
      .catch((err) => {
        const errs = err.response.data.errors;
        if (errs.first) {
          setFirstErr(errs.first.message);
        } else {
          setFirstErr("");
        }
        if (errs.last) {
          setLastErr(errs.last.message);
        } else {
          setLastErr("");
        }
      });
    //! add errors to render for validation:
  };

  //!added error style with p tag below:
  const errStyle = {
    color: "red",
    margin: 0,
    padding: 0,
    fontweight: "bold",
  };

  return (
    <div>
      <h2> Add a new user: </h2>
      <fieldset>
        <legend>New User</legend>
        <form onSubmit={handleSubmit}>
          <p style={errStyle}>{firstErr}</p>
          <label>First Name:</label>
          <input
            name="first"
            type="text"
            onChange={handleChange}
            value={formData.first}
          />
          <br />
          <p style={errStyle}>{lastErr}</p>
          <label>Last Name:</label>
          <input
            name="last"
            type="text"
            onChange={handleChange}
            value={formData.last}
          />
          <br />
          <button>Add</button>
        </form>
      </fieldset>
    </div>
  );
};

export default New;
