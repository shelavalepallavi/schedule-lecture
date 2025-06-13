import React from 'react'

const Sidebar = ({setSection}) => {
  return (
    <div className=' bg-white px-4 py-5 d-flex flex-column gap-4 shadow-sm ' style={{width:'230px', minHeight:'100vh'}}>
      <button className='btn btn-outline-primary fw-semibold' onClick={() => setSection('dashboard')}>Dashboard</button>
      <button className='btn btn-outline-primary fw-semibold' onClick={() => setSection('courses')}>Courses</button>
      <button className='btn btn-outline-primary fw-semibold' onClick={() => setSection('instructors')}>Instructors</button>
      <button className='btn btn-outline-primary fw-semibold' onClick={() => setSection('schedule')}>Schedule Lecture</button>
    </div>
  )
}

export default Sidebar
