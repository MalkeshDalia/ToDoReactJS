// https://jsonplaceholder.typicode.com/users

import React, { useState, useEffect } from "react";
import axios from "axios";

const Api2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAPI();
  },[]);

  const getAPI = async () => {
    const setAPI = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(setAPI.data);
    setData(setAPI.data);
  };
  return (
    <>
      <div>
        {data.map(user => {
          console.log( user, 'users' );
          return(
            <>
            {/* <h1>{user.email}</h1> */}
            <h1>{user.address.geo.lng}</h1>
            </>
          )
        })}
      </div>
    </>
  );
};

export default Api2;
