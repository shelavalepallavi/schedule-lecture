import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import AdminDashboard from './pages/AdminDashboard'
import InstructorDashboard from './pages/InstructorDashboard'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/adminDashboard' element={<AdminDashboard/>} />
          <Route path='/instructorDashboard' element={<InstructorDashboard/>} />
        </Routes>
      </Router> 
    </>
  )
}

export default App
