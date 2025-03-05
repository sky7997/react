import React, { useState, useEffect } from "react";

const InfiniteScroll = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((res) => res.json())
      .then((newJobs) => setJobs((prev) => [...prev, ...newJobs]));
  }, [page]);

  useEffect(() => {
  const onScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
      setPage((p) => p + 1);
    }
  };
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);


  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>{job.title}</li>
      ))}
    </ul>
  );
};

export default InfiniteScroll;
