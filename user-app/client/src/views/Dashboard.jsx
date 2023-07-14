import React, { useState, useEffect } from "react";

import axios from "axios";

//when changing h2 to edit links
import {Link} from 'react-router-dom'

const Dashboard = () => {
  cosnt[(users, setUsers)] = useState([]);

  const fetchUsers = () => {
    axios
      .get("http://localhost:8080/api/users")
      .then((res) => console.log(res))
      .catch((res) => console.log(err));
  };

  useEffect(fetchUsers, []);

  const handleDelete = (id) => {
    // alert(`This would delete ${id}`);
    axios.delete(`http://localhost:8080/api/users/${id}`)
    .then(res=>fetchUsers())
    .catch(err=>console.log(err))  
};


  //! might be corrected* error may still exist ~ around 25 mins into the lecture
  return (
    <div>
      {users.length > 0 ? 
        users.map((user, key) => {
          return <div key={key}>
            <hr/>
            <Link to={`/edit/${user._id}`} key={key}><h2>
              {user.first} {user.last}<h2/>
            </Link>
            <button onClick={() => handleDelete(use._id)}>DELETE</button>
          </div>;
        })
       : 
        <p>loading...</p>
      }
    </div>
  );
};

export default Dashboard;
