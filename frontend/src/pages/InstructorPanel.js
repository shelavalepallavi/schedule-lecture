import  { useEffect, useState } from 'react';

const InstructorPanel = ({ instructorId }) => {
  const [lectures, setLectures] = useState([]);

 useEffect(() => {
  if (!instructorId) return;

  fetch(`${process.env.REACT_APP_BACKEND_URL}/api/lectures/by-instructor/${instructorId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch lectures');
      }
      return response.json();
    })
    .then(data => setLectures(data))
    .catch(error => console.error(error));
}, [instructorId]);


  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Instructor Panel</h2>
      <div className="table-responsive mt-4">
   <table className="table table-bordered  table-hover text-center align-middle ">
    <thead className="table-primary">
      <tr>
        <th className="p-3 px-5" scope="col">Date</th>
        <th className="p-3 px-5" scope="col">Course</th>
        <th className="p-3 px-5" scope="col">Batch</th>
      </tr>
    </thead>
    <tbody>
      {lectures.map((lecture) => (
        <tr key={lecture._id}>
          <td className="p-3 px-5">{new Date(lecture.date).toLocaleDateString()}</td>
          <td className="p-3 px-5">{lecture.courseId?.name || 'N/A'}</td>
          <td className="p-3 px-5">{lecture.batch}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default InstructorPanel;
