import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Instructors from '../components/Instructors'
import DashboardHome from '../components/DashboardHome'
import Courses from '../components/Courses'
import ScheduleLecture from '../components/ScheduleLecture'

const AdminDashboard = () => {
  const [section, setSection] = useState('dashboard')
  const sections = {
    dashboard: <DashboardHome/>,
    courses: <Courses/>,
    instructors: <Instructors/>,
    schedule: <ScheduleLecture/>
  }
  return (
    <div style={{height:'100vh'}}>
      <Navbar title='Admin Panel'/>
      <div className='d-flex'>
        <Sidebar setSection={setSection}/>
      <div className='flex-grow-1 p-4'>
        {sections[section] || <DashboardHome/>}
      </div>
      </div>
    </div>
  )
}

export default AdminDashboard
