const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model('Instructor', InstructorSchema);