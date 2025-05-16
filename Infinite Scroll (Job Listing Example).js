import React, { useState, useEffect } from "react";

const InfiniteScroll = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((res) => res.json())
      .then((newJobs) => setJobs((prev) => [...prev, ...newJobs]));
  }, [page]); //useEffect(() => {...}, [page]); → Runs the function whenever page changes.

  useEffect(() => {
  const onScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
      setPage((p) => p + 1);
    }
  };
  window.addEventListener("scroll", onScroll); //"scroll" is inbuilt code name if u rename or use other name it won't trigger scroll 
  return () => window.removeEventListener("scroll", onScroll); // cleanup on unmount
}, []);
//useEffect(() => {...}, []) → Runs only once when the component mounts (empty [] dependency array).
  //window.innerHeight + window.scrollY → Gets current scroll position.
//document.body.scrollHeight → Gets total page height.
//if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10)
//Checks if the user has scrolled to the bottom (10px before the end).
//If yes, calls setPage((p) => p + 1); → Increases the page number.

  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>{job.title}</li>
      ))}
    </ul>
  );
};

export default InfiniteScroll;
