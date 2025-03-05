import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
//useEffect(() => {...}, []);
  //[] (empty array) → Means this effect runs only once (on the first render).
  //after data fetched there will be no empty array
   
  return (
loading ? <h2>Loading...</h2> : 

    <ul>
      {data.slice(0, 10).map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default FetchData;
