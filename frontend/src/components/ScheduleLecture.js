import React, { useEffect, useState } from 'react'

const ScheduleLecture = () => {
    const [data, setData] = useState({ courseId: '', batch: '', instructorId: '', date: '' });
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
  // Fetch courses
  fetch(`${process.env.REACT_APP_BACKEND_URL}/api/courses`)
    .then(response => response.json())
    .then(data => setCourses(data))
    .catch(error => console.error('Error fetching courses:', error));

  // Fetch instructors
  fetch(`${process.env.REACT_APP_BACKEND_URL}/api/instructors`)
    .then(response => response.json())
    .then(data => setInstructors(data))
    .catch(error => console.error('Error fetching instructors:', error));
}, []);

const handleSubmit = (e) => {
  e.preventDefault();

  fetch(`${process.env.REACT_APP_BACKEND_URL}/api/lectures`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(async response => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }
  alert("Lecture assigned");
  setData({ courseId: '', batch: '', instructorId: '', date: '' });
})
.catch(err => {
  if (err.message === 'Instructor already scheduled') {
    alert('This instructor already has a lecture scheduled on this date. Please choose a different date.');
  } else if (err.message === 'Lecture already exists for this batch and course') {
    alert('A lecture for this course and batch is already scheduled on this date.');
  } else {
    alert(err.message);
  }
});

};


  return (
    <div>
       <form onSubmit={handleSubmit} className="p-4 border mt-4 rounded-1 shadow-sm">
      <h2 className="fs-2 font-bold mb-2">Assign Lecture</h2>
      <select value={data.courseId} onChange={e => setData({ ...data, courseId: e.target.value })} className="form-control mb-3">
        <option>Select Course</option>
        {courses.map(c => <option value={c._id} key={c._id}>{c.name}</option>)}
      </select>

      <div className='mb-3'>
        <input placeholder="Batch" value={data.batch} onChange={e => setData({ ...data, batch: e.target.value })} className="form-control" />
      </div>
      <select value={data.instructorId} onChange={e => setData({ ...data, instructorId: e.target.value })} className="form-control mb-3">
        <option>Select Instructor</option>
        {instructors.map(i => <option value={i._id} key={i._id}>{i.name}</option>)}
      </select>
      <input type="date" value={data.date} onChange={e => setData({ ...data, date: e.target.value })} className="form-control mb-3" />
      <button type="submit" className="btn btn-outline-primary">Assign</button>
    </form>
    </div>
  )
}

export default ScheduleLecture
