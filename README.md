# 📅 Lecture Scheduler

A web-based Lecture Scheduling Dashboard with admin and instructor panels. Built using the **MERN stack**, this app allows admins to manage courses, instructors, and lectures, while instructors can view their assigned schedules.

## 🔗 Live Demo
[👉 Click to View Project](https://schedule-lecture.netlify.app)

---

## 🚀 Features

### 👨‍💼 Admin Panel
- Dashboard overview
- Add & View Courses
- Add & View Instructors
- Schedule Lectures (with date-clash validation)
- View Scheduled Lectures

### 👨‍🏫 Instructor Panel
- View Assigned Lectures

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
-  Bootstrap
-  Fetch API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📁 Folder Structure
```
lecture-scheduler/
├── backend/
│ ├── models/
│ │ ├── Course.js
│ │ ├── Instructor.js
│ │ └── Lecture.js
│ ├── routes/
│ │ ├── courseRoutes.js
│ │ ├── instructorRoutes.js
│ │ └── lectureRoutes.js
│ └── server.js
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ └── index.js
├── README.md

```

---

## 📡 API Routes

### 📘 Course Routes (`/api/courses`)
- `GET /api/courses` → Get all courses
- `POST /api/courses` → Add a new course

### 👨‍🏫 Instructor Routes (`/api/instructors`)
- `GET /api/instructors` → Get all instructors
- `POST /api/instructors` → Add a new instructor

### 📅 Lecture Routes (`/api/lectures`)
- `GET /api/lectures` → Get all scheduled lectures
- `POST /api/lectures` → Schedule a new lecture (with date clash validation)
- `GET /api/lectures/by-instructor/:id` → Get lectures assigned to a specific instructor

---

## 🧑‍💻 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/shelavalpallavi/schedule-lecture.git
cd schedule-lecture

```
2. Backend Setup
```
cd backend
npm install

3. Frontend Setup
```
cd frontend
npm install
npm start

```

🌐 Deployment
✅ Netlify (Frontend)
Base Directory: frontend

Build Command: npm run build

Publish Directory: frontend/build

