
src/
├── App.js
├── components/
│   ├── JobPortal.js
│   ├── JobList.js
│   ├── JobCard.js

-------------------------------------------------------

iimport React from 'react';

const JobCard = ({ job, onBookmark, isBookmarked }) => {
  return (
    <div style={styles.card}>
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <button style={styles.button} onClick={() => onBookmark(job)}>
        {isBookmarked ? 'Unbookmark' : 'Bookmark'}
      </button>
    </div>
  );
};

const styles = {
  card: {
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  button: {
    marginTop: '10px',
    padding: '8px 12px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    fontWeight: 'bold',
  },
};

export default JobCard;


------------------------------------------
import React from 'react';
import JobCard from './JobCard';

const JobList = ({ jobs, onBookmark, bookmarkedJobs }) => {
  return (
    <div style={styles.list}>
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          onBookmark={onBookmark}
          isBookmarked={bookmarkedJobs.some((j) => j.id === job.id)} //The JobCard component needs to know whether a job is already bookmarked or not so that it can:
                                                                            //Display the correct button label (Bookmark vs Unbookmark)
                                                                              //Apply different styles (if you want later)
        />
      ))}
    </div>
  );
};

const styles = {
  list: {
    display: 'grid',
    gap: '15px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    marginBottom: '30px',
  },
};

export default JobList;

--------------------------------------

import React, { useEffect, useState } from 'react';
import JobList from './JobList';

const JobPortal = () => {
  const [jobs, setJobs] = useState([]);
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    const dummyJobs = [
      { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote', salary: '$70k' },
      { id: 2, title: 'Backend Developer', company: 'CodeWorks', location: 'New York', salary: '$90k' },
      { id: 3, title: 'Full Stack Engineer', company: 'DevHouse', location: 'San Francisco', salary: '$100k' },
    ];
    setJobs(dummyJobs);
  }, []);

  const handleBookmark = (job) => {
    const isBookmarked = bookmarkedJobs.some((j) => j.id === job.id);

    if (isBookmarked) {
      // Remove from bookmarks
      setBookmarkedJobs(bookmarkedJobs.filter((j) => j.id !== job.id));
    } else {
      // Add to bookmarks
      setBookmarkedJobs([...bookmarkedJobs, job]);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Job Portal</h1>
      <JobList
        jobs={jobs}
        bookmarkedJobs={bookmarkedJobs}
        onBookmark={handleBookmark}
      />

      <h2>Bookmarked Jobs</h2>
      {bookmarkedJobs.length === 0 ? (
        <p>No bookmarked jobs yet.</p>
      ) : (
        <JobList
          jobs={bookmarkedJobs}
          bookmarkedJobs={bookmarkedJobs}
          onBookmark={handleBookmark}
        />
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial',
  },
};

export default JobPortal;

----------------------------------------


  import React from 'react';
import JobPortal from './components/JobPortal';

function App() {
  return (
    <div>
      <JobPortal />
    </div>
  );
}

export default App;
