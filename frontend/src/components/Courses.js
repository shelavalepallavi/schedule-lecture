import { useEffect, useState } from "react"


const Courses = () => {
  const [courses, setCourses] = useState([])
  const [form, setForm] = useState({
    name: '',
    level: '',
    description: '',
    image: '',
    batches: ['']
  })

  useEffect(() => {
    const getCourse = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/courses`);
        const data = await response.json();
        setCourses(data)
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    getCourse();
  }, []);



  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/courses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
      if (!res.ok) throw new Error('Failed to add course');
      return res.json(); 
    })
      .then((newCourse) => {
        alert('course Added');
        setCourses((prev) => [...prev, newCourse])
        setForm({ name: '', level: '', description: '', image: '', batches: [''] });
      })
      .catch((err) => console.log(err))
  }

  const handleBatchChange = (index, value) => {
    const updated = [...form.batches];
    updated[index] = value;
    setForm({ ...form, batches: updated });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="border p-4 rounded-1 shadow-sm">
        <h2 className="fs-2 fw-semibold ">Add Course</h2>
        <div className="mb-3">
          <input type="text" placeholder="Name" className="form-control" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        </div>
        <select
          className="form-control mb-3"
          value={form.level}
          onChange={e => setForm({ ...form, level: e.target.value })}
          required
        >
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <div className="mb-3">
          <input type="text" placeholder="Image URL" className="form-control" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
        </div>

        <textarea placeholder="Description" className="form-control mb-3" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}></textarea>

        {form.batches.map((batch, index) => (
  <select
    key={index}
    value={batch}
    className="form-select mb-3"
    onChange={e => handleBatchChange(index, e.target.value)}
  >
    <option value="">Select Batch</option>
    <option value="Batch 1">Batch A</option>
    <option value="Batch 2">Batch B</option>
    <option value="Batch 3">Batch C</option>
    <option value="Batch 4">Batch D</option>
  </select>
))}


        <button type="submit" className="btn btn-primary">Add Course</button>
      </form>


      <div className="container mt-5">
        <div className="row">
          <h2 className="text-xl font-bold mb-4">Existing Courses</h2>
          {courses.map((course, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm" style={{width: '18rem'}}>
                <img src={course.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">{course.name}</h5>
                  <p>{course.level}</p>
                  <p className="card-text">{course.description}</p>
                  <p>{course.batches.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Courses
