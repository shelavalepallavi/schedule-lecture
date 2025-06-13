import { Link } from 'react-router-dom'

const Home = () => {
  return (
     <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light gap-2">
      <h1 className="text-primary fw-bold fs-1">Welcome to Lecture Scheduler</h1>
      <p className="text-secondary fs-5">Choose a panel to continue:</p>
      <div className="mt-3 d-flex gap-3">
        <Link to="/adminDashboard" className="btn btn-primary px-4">
          Admin Panel
        </Link>
        <Link to="/instructorDashboard" className="btn btn-primary px-4">
          Instructor Panel
        </Link>
      </div>
    </div>
  )
}

export default Home
