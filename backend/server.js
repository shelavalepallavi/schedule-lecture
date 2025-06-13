const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const instructorRoutes = require('./routes/instructorRoutes');
const courseRoutes = require('./routes/courseRoutes');
const lectureRoutes = require('./routes/lectureRoutes');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('mongodb connected'))
.catch((err) => console.log(err))

app.get('/', (req, res) => {
  res.send('Scheduler Backend')
})

app.use('/api/instructors', instructorRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/lectures', lectureRoutes);

app.listen(5000, ()=> console.log('server running on port 5000'))