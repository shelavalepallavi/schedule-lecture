import { useEffect, useState } from 'react'

const Instructors = () => {
  const [instructors, setInstructors] = useState([])
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/instructors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
 if (res.ok) {
      const newInstructor = await res.json();
      // 👇 Add newly created instructor to the list
      setInstructors((prev) => [...prev, newInstructor]);

      // Reset form
      setName('');
      setEmail('');
      alert('Instructor added!');
    } else {
      alert('Error adding instructor');
    }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding instructor');
    }
  };

  
  return (
    <div className="p-4">
       <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto border  rounded-1 mb-5">
      <h2 className="text-xl font-bold mb-4">Add Instructor</h2>

      <label className="block form-label">
        Name:</label>
        <input
          type="text"
          className=" form-control mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      

      <label className="block form-label">
        Email:</label>
        <input
          type="email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      

      <button
        type="submit"
        className="btn btn-primary"
      >
        Add Instructor
      </button>
    </form>
      <h2 className="fs-2 font-bold mb-4">All Instructors</h2>
      <ul className="list-group list-group-numbered  ml-5">
        {instructors.map(inst => (
          <li key={inst._id} className='list-group-item list-group-item-action'>{inst.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Instructors
