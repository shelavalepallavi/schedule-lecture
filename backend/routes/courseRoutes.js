const express = require('express');
const router = express.Router();
const Course = require('../models/Course')

router.get('/', async(req, res) => {
  const courses = await Course.find();
  res.json(courses);
})

router.post('/', async(req, res) => {
  const course = new Course(req.body)
  await course.save();
  res.status(201).json(course);
})

module.exports = router;