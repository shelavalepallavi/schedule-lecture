const express = require('express');
const router = express.Router();
const Instructor = require('../models/Instructor')

router.get('/', async(req, res) => {
  const instructors = await Instructor.find();
  res.json(instructors)
})

router.post('/', async(req, res) => {
  const instructor = new Instructor(req.body);
  await instructor.save()
  res.status(201).json(instructor);
})

module.exports = router;