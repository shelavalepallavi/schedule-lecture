const express = require('express');
const router = express.Router();
const Lecture = require('../models/Lecture');

router.get('/by-instructor/:id', async(req, res) => {
  const lectures = await Lecture.find({ instructorId: req.params.id}).populate('courseId');
  res.json(lectures);
})

router.post('/', async(req, res) => {
  const {courseId, instructorId, date} = req.body;

  const clash = await Lecture.findOne({ instructorId, date });
  if(clash) {
    return res.status(400).json({error: 'Date clash for this instructor'});
  }
  const lecture = new Lecture(req.body);
  await lecture.save();
  res.status(201).json(lecture);
})

module.exports = router;