const mongoose = require('mongoose');

const LectureSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  instructorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' },
  batch: String,
  date: Date
})

module.exports = mongoose.model('Lecture', LectureSchema)