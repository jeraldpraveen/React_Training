import React, { useState } from "react";
import axios from "axios";

const Services = () => {
  const [posts, setPosts] = useState([]);

  const getDataUsingAxios = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const titles = posts.map((post) => {
    return (
      <h1>
        {post.id}:{post.title}
      </h1>
    );
  });

  return (
    <div>
      <h1>Services</h1>
      <h1>HTTP METHODS</h1>
      <button onClick={getDataUsingAxios}>Get Data Using Axios</button>
      {titles}
    </div>
  );
};

export default Services;
