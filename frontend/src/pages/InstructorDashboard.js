import React, { useState, useEffect } from 'react';
import InstructorPanel from './InstructorPanel';
import Navbar from '../components/Navbar';

const InstructorDashboard = () => {
  const [instructors, setInstructors] = useState([]);
  const [selectedId, setSelectedId] = useState('');

useEffect(() => {
  fetch(`${process.env.REACT_APP_BACKEND_URL}/api/instructors`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch instructors');
      }
      return response.json();
    })
    .then(data => setInstructors(data))
    .catch(error => console.error(error));
}, []);


  return (
    <div className="">
      <Navbar title='Instructor Dashboard'/>
      <div className='p-4 d-flex flex-column align-items-center justify-content-center'>
        <h2 className="text-xl font-bold mb-4 pt-3">Select Instructor</h2>
      <select onChange={(e) => setSelectedId(e.target.value)} className="p-2 w-25 border rounded">
        <option value="">Choose Instructor</option>
        {instructors.map(i => (
          <option key={i._id} value={i._id}>{i.name}</option>
        ))}
      </select>
      </div>

      <div className='d-flex justify-content-center mt-3 text-center'>
        {selectedId && <InstructorPanel instructorId={selectedId} />}
      </div>
    </div>
  );
};

export default InstructorDashboard;
