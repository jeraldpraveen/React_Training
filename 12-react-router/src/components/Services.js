import React from "react";
import axios from "axios";

const Services = () => {
  const getDataUsingAxios = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Services</h1>
      <h1>HTTP METHODS</h1>
      <button onClick={getDataUsingAxios}>Get Data Using Axios</button>
    </div>
  );
};

export default Services;
