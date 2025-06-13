import { Link } from 'react-router-dom'

const Navbar = ({title}) => {
  return (
    <nav className=" text-white px-4 py-3 fw-medium fs-5" style={{background:'#4c0bce'}}>
      <Link to='/' className='text-decoration-none text-white pe-4'>📅  Online Lecture Scheduler</Link>
       <span className='pe-4'> - </span>
       <span className=''>{title}</span>
    </nav>

  )
}

export default Navbar
