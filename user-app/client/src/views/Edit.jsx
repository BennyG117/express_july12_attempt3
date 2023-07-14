import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

//clear this and re-direct to main page
const Edit = () => {
  const { id } = useParams();

  const navigator = useNavigate();

  const [formData, setFormData] = useState({
    first: "",
    last: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/${id}`)
      .then((res) => {
        // console.log(res)
        setFormData(res, data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8080/api/${id}`, formData)
      // .then(res=>console.log(res))
      .then((res) => {
        setFormData({
          first: "",
          last: "",
        });
        navigator("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2> Update: </h2>
      <fieldset>
        <legend>Edit User</legend>
        <form onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input
            name="first"
            type="text"
            onChange={handleChange}
            value={formData.first}
          />
          <br />
          <label>Last Name:</label>
          <input
            name="last"
            type="text"
            onChange={handleChange}
            value={formData.last}
          />
          <br />
          <button>Save</button>
        </form>
      </fieldset>
    </div>
  );
};

export default Edit;
