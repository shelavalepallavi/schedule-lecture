import { useEffect, useState } from 'react'

const Instructors = () => {
  const [instructors, setInstructors] = useState([])

  useEffect(() => {
    const getInstructors = async(req, res) => {
       try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/instructors`);
        const data = await response.json()
        setInstructors(data)
       } catch (error) {
        console.error(error)
       }
    }
    getInstructors()
  }, [])
  
  return (
    <div className="p-4">
      <h2 className="fs-2 font-bold mb-4">Instructors</h2>
      <ul className="list-group list-group-numbered  ml-5">
        {instructors.map(inst => (
          <li key={inst._id} className='list-group-item list-group-item-action'>{inst.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Instructors
