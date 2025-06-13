const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: String,
  level: String,
  description: String,
  image: String,
  batches: [String]
});

module.exports = mongoose.model('Course', CourseSchema);

